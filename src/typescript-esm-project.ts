// Copyright (c) 2024 Tim Hahn

import { readFileSync } from "node:fs";
// import { cwd } from "node:process";
// import path from "path";

import { javascript, typescript, JsonPatch, SampleFile } from "projen";
// NodePackageManger is used later in the code to overcome
// a subtle dependency by the projen tool on using yarn "classic".
import { NodePackageManager } from "projen/lib/javascript";

import {
  PreCommitConfigFile,
  PreCommitConfigFileTypes,
} from "./pre-commit-config";

export interface CommandParameters {
  readonly name: string;
  readonly file: string;
}

export interface TypeScriptESMProjectOptions
  extends typescript.TypeScriptProjectOptions {
  readonly addVersionFile?: boolean;
  readonly commands?: CommandParameters[];
  readonly eslintFlatConfig?: boolean;
  readonly prettierFlatConfig?: boolean;
  readonly precommitConfig?: boolean;
}

// const moduleDir = path.dirname(require.resolve("@ncfour/projen-utils"));

/**
 * TypeScript ESM project
 * @pjid typescript-esm
 */
export class TypeScriptESMProject extends typescript.TypeScriptProject {
  public eslintFlatConfig: boolean;
  public prettierFlatConfig: boolean;
  public precommitConfig: boolean;
  public addVersionFile: boolean;
  public commands: CommandParameters[];

  constructor(options: TypeScriptESMProjectOptions) {
    // let additionalDevDeps: string[] = ["tsx"];

    // if (options.eslintFlatConfig) {
    //   additionalDevDeps = additionalDevDeps.concat(
    //     ...[
    //       // needed to support ESLint
    //       "jiti",
    //       "eslint",
    //       "eslint-import-resolver-typescript",
    //       "eslint-plugin-import",
    //       "@eslint/compat",
    //       "@eslint/js",
    //       "@eslint/eslintrc",
    //       "@typescript-eslint/eslint-plugin",
    //       "@typescript-eslint/parser",
    //       "@stylistic/eslint-plugin",
    //       "globals",
    //       // end needed to support ESLint
    //     ],
    //   );
    // }
    // if (options.precommitConfig) {
    //   additionalDevDeps = additionalDevDeps.concat(
    //     ...[
    //       // needed to support prettier
    //       "prettier",
    //       // end needed to support prettier
    //     ],
    //   );
    // }
    // additionalDevDeps = additionalDevDeps.concat(
    //   options.devDeps ? options.devDeps : [],
    // );

    // create a new options instance, copying the input values
    // and over-riding those that need to be set for ESM
    const typeScriptProjectOptions: typescript.TypeScriptProjectOptions = {
      ...options,

      eslint: options.eslintFlatConfig ? false : undefined, // if eslintFlatConfig, skip eslint synth
      prettier: options.prettierFlatConfig ? false : undefined, // if prettierFlatConfig, skip pretter synth

      // The following setting/override was added to overcome a subtle
      // dependency by the projen tool on using yarn "classic".

      // if not specified, default to use pnpm
      packageManager: options.packageManager ?? NodePackageManager.PNPM,

      // start clauses added to enable ESM module usage
      // devDeps: additionalDevDeps,
      minNodeVersion: options.minNodeVersion ?? "18.0.0",
      workflowNodeVersion: "18.x",
      tsconfig: {
        compilerOptions: {
          moduleResolution: javascript.TypeScriptModuleResolution.NODE_NEXT,
          module: "nodenext",
          lib: ["DOM", "esnext"],
          target: "esnext",
        },
      },

      jestOptions: {
        jestConfig: {
          extensionsToTreatAsEsm: [".ts"],
          moduleNameMapper: {
            "^(\\.{1,2}/.*)\\.js$": "$1",
          },
          transform: {
            "^.+\\.(mt|t|cj|j)s$": new javascript.Transform("ts-jest", {
              useESM: true,
              tsconfig: "tsconfig.dev.json",
            }),
          },
        },
      },
      // end clauses added to enable ESM module usage
    };

    // construct the project instance (TypeScriptProject)
    super(typeScriptProjectOptions);

    // start project adjustments to enable ESM module usage

    // capture options and set defaults
    this.eslintFlatConfig = options.eslintFlatConfig ?? false;
    this.prettierFlatConfig = options.prettierFlatConfig ?? false;
    this.precommitConfig = options.precommitConfig ?? false;
    this.addVersionFile = options.addVersionFile ?? false;
    this.commands = options.commands ?? [];

    // set "type": "module" in package.json
    this.package.addField("type", "module");
    // project.package.file.addOverride('type', 'module');

    // set NODE_OPTIONS environment variable when running jest during tests
    this.testTask.env("NODE_OPTIONS", "--experimental-vm-modules");

    // patch package.json to remove a transform inserted by the TypeScriptProject package
    // const packageJson = this.tryFindObjectFile("package.json");
    // packageJson?.patch(JsonPatch.remove("/jest/transform/^.+\\.[t]sx?$"));
    this.package.file.patch(JsonPatch.remove("/jest/transform/^.+\\.[t]sx?$"));

    // getting ts-node to work in ESM mode just wasn't working.  Switch to using tsx to run the projen generator
    this.addDevDeps("tsx");

    this.defaultTask?.reset(
      `tsx --tsconfig ${this.tsconfigDev.file.path} .projenrc.ts`,
    );

    // end project adjustments to enable ESM module usage

    // start additional features

    // Optionally add a version.ts file
    if (this.addVersionFile) {
      // use this method to create a version.ts file which includes the version number from package.json
      // import of JSON files is still experimental (as of December 2023) so don't use it - and importing JSON
      // requires using ESM modules.  It is not possible in CommonJS.
      this.addScripts({
        "create-version":
          "echo '// Generated by pre-compile processing' >src/version.ts;" +
          " node -p \"'export const LIB_VERSION = ' + JSON.stringify(require('./package.json').version) + ';'\" >>src/version.ts",
      });

      const createVersion = this.addTask("create-version", {
        description:
          "customized task to run a script which generates version.ts",
        exec: "npm run create-version",
      });

      // this adds the create-version task as a sub-task of the pre-created preCompileTask.
      this.preCompileTask.spawn(createVersion);

      // add src/version.ts to the .gitignore file so that it is not stored in the repo
      this.addGitIgnore("src/version.ts");
    }

    // Optionally add additional commands to package.json and the install
    if (this.commands.length > 0) {
      for (const command of this.commands) {
        // the program can be run by running 'yarn run <command.name>' or 'npm run <command.name>'
        this.addScripts({ [command.name]: `node ./lib/${command.file}` });

        // this adds a '<command.name>' command when the package is installed somewhere
        this.addBins({ [command.name]: `./lib/${command.file}` });
      }
    }

    // Optionally switch from projen's default of using .eslintrc.json to using ESLint flat config
    if (this.eslintFlatConfig) {
      // the following lines re-add BACK the 'eslint' task while NOT
      // relying on .eslintrc.json as the configuration file.
      //
      // As of May 2026, projen only supported using .eslintrc.json
      // which is DEPRECATED in eslint v9, and to be removed in eslint v10
      //
      // NOTE: the eslint.config.ts file was generated using command:
      //   pnpm dlx @eslint/migrate-config .eslintrc.json
      // while the original .eslintrc.json file existed after creating the project.
      // Doing this "freezes" the ESLint configuration that projen had advocated
      // in May 2026.
      //
      // NOTE: projen seems to have taken the stance of using @stylistic rather than
      // prettier for handling code formatting.  See: https://eslint.style/guide/why
      // for a discussion about this.

      // console.log(`cwd: ${cwd()}, __dirname: ${__dirname}`);
      // console.log(`cwd: ${cwd()}, moduleDir: ${moduleDir}`);

      this.addDevDeps(
        ...[
          "jiti",
          "eslint",
          "eslint-import-resolver-typescript",
          "eslint-plugin-import",
          "@eslint/compat",
          "@eslint/js",
          "@eslint/eslintrc",
          "@typescript-eslint/eslint-plugin",
          "@typescript-eslint/parser",
          "@stylistic/eslint-plugin",
          "globals",
        ],
      );

      const eslintConfigContents = readFileSync(
        `${__dirname}/files/eslint.config.ts.sample`,
        {
          encoding: "utf8",
        },
      );
      new SampleFile(this, "eslint.config.ts", {
        contents: eslintConfigContents,
      });

      this.addPackageIgnore("eslint.config.ts");

      this.addTask("eslint", {
        description: "custom eslint task to run against code base",
        env: {
          NODE_NO_WARNINGS: "1",
        },
        steps: [
          {
            exec: "eslint --ext .ts,.tsx --fix --no-error-on-unmatched-pattern $@ src test build-tools projenrc .projenrc.ts eslint.config.ts",
            receiveArgs: true,
          },
        ],
      });

      const testTask = this.tasks.tryFind("test");

      testTask?.addSteps({
        spawn: "eslint",
      });

      const tsconfigDev = this.tryFindObjectFile("tsconfig.dev.json");

      tsconfigDev?.patch(JsonPatch.add("/include/-", "eslint.config.ts"));

      // end of lines used to re-establish the 'eslint' task.
    }

    // Similar to eslintFlatConfig, create a precommit.config.ts file
    // instead of a .prettierrc.json file.
    if (this.prettierFlatConfig) {
      // adjust the project to enable running prettier
      //  - add a package dev dependency
      this.addDevDeps("prettier");

      //  - create a prettier.config.ts file
      const prettierConfigContents = readFileSync(
        `${__dirname}/files/prettier.config.ts.sample`,
        {
          encoding: "utf8",
        },
      );
      new SampleFile(this, "prettier.config.ts", {
        contents: prettierConfigContents,
      });

      //  - update tsconfig.json
      const tsconfigDev = this.tryFindObjectFile("tsconfig.dev.json");
      tsconfigDev?.patch(JsonPatch.add("/include/-", "prettier.config.ts"));

      //  - add the file to .npmignore
      this.addPackageIgnore("prettier.config.ts");
    }

    // Optionally add a pre-commit config file, set up for TYPESCRIPT
    if (this.precommitConfig) {
      new PreCommitConfigFile(this, {
        fileTypes: [PreCommitConfigFileTypes.TYPESCRIPT],
        packageManager: options.packageManager,
      });
    }

    // end additional features
  }
}
