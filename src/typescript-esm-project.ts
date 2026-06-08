// Copyright (c) 2024 Tim Hahn

import { readFileSync } from "node:fs";
// import { cwd } from "node:process";
// import path from "path";

import {
  javascript,
  typescript,
  JsonPatch,
  SampleFile,
  LogLevel,
} from "projen";
import { GitHubOptions } from "projen/lib/github";
import { NodePackageManager } from "projen/lib/javascript";
import { ReleaseTrigger } from "projen/lib/release";
// NodePackageManger is used later in the code to overcome
// a subtle dependency by the projen tool on using yarn "classic".

import { DocsIndexSampleFile } from "./docs-index-sample";
import {
  PreCommitConfigFile,
  PreCommitConfigFileTypes,
} from "./pre-commit-config";
import { TypedocJson } from "./typedoc-json";

/**
 * The build/packaging model to use for the `TypeScriptESMProject`.
 *
 * There are generally two models supported, along with an "escape hatch"
 * to allow individual customization without using the **opinionated**
 * support provided with this project type.
 *
 * The two models:
 * - local build/packaging - this model presumes that most work
 *   on the project is performed locally, including build, packaging,
 *   and distribution/publishing to remote registries/repositories
 * - github build/packaging - (not yet implemented) this model
 *   presumes that Github workflows are used to build/package/distribute/publish
 *   the project.
 *
 * In all cases, "trunk-based" development is presumed as the Git
 * branching/merging strategy.
 */
export enum RepoBuildPackageModel {
  /**
   * Skip any build/release configuration that is
   * offered by the TypeScriptESMProject component
   *
   * This is an "escape hatch" to allow the project
   * to define it's own customizations/configuration
   * for build/packaging and distribution/publishing
   */
  SKIP_SETUP,

  /**
   * All development/build/packaging/distribution/publishing
   * is driven from a local workstation or cloned repository.
   *
   * A "local" repository/registry (just a folder on the local
   * system) is the default location to distribute/publish.
   * Use the `releaseToLocal` (default: `true`) option to configure.
   * Use the [localPackageArchiveDir](#typescriptesmprojectoptions) option to specify
   * the folder location.
   *
   * A remote git repository can be configured/used and becomes
   * a distribution/publishing "target" for "release" operations.
   * Use the `releaseToGithub` (default: `false`) option to configure.
   *
   * The NPM registry (npmjs.com) can be configured as an additional
   * distribution/publishing "target".
   * Use the `releaseToNpm` (default: `true` if
   * `repository` is set, `false` otherwise) option to configure.
   *
   * When using this mode, the user **MUST** have active
   * credentials in the local environment
   * for the remote distribution locations
   * when "release" tasks are invoked.
   */
  LOCAL_DEV_BUILD_REGISTRY,
}

/**
 * additional commands to configure into the project
 * (`scripts` in `package.json`).
 */
export interface CommandParameters {
  /**
   * name of the command
   */
  readonly name: string;

  /**
   * JavaScript file which implements/provides the command
   */
  readonly file: string;
}

/**
 * Options for TypeScriptESMProject
 */
export interface TypeScriptESMProjectOptions
  extends typescript.TypeScriptProjectOptions {
  /**
   * Add a `version.ts` file which contains a `LIB_VERSION` global.
   * The `LIB_VERSION` value is set based on the `version` field in `package.json`.
   *
   * @default false
   */
  readonly addVersionFile?: boolean;

  /**
   * Additional commands (scripts) to add to the `package.json` file.
   *
   * @default []
   */
  readonly commands?: CommandParameters[];

  /**
   * Use `eslint.config.ts` instead of `.eslintrc.json` for eslint config
   *
   * @default false
   */
  readonly eslintFlatConfig?: boolean;

  /**
   * Use `prettier.config.ts` instead of `.prettierrc.json` for eslint config
   *
   * @default false
   */
  readonly prettierFlatConfig?: boolean;

  /**
   * Add a `.pre-commit-config.yaml` file to support use of `pre-commit` tool
   *
   * @default false
   */
  readonly precommitConfig?: boolean;

  /**
   * Add a `docs/index.md` file to the project as a sample file
   *
   * @default false
   */
  readonly docsIndex?: boolean;

  /**
   * Add API documentation to `docs/api` using `typedoc`
   *
   * @default false
   */
  readonly apiDocumentation?: boolean;

  /**
   * API entry points for `typedoc` to use
   *
   * @default undefined if not specified, then information in `package.json`
   *  will be used by `typedoc` to determine what entry points to include
   *  in the documentation.
   *
   */
  readonly apiEntryPoints?: string[];

  /**
   * Type of repository, packaging, and release model to use.
   * Use value `RepoBuildPackageModel.SKIP_SETUP` to skip
   * any opinionated setup by the component.
   *
   * @default RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY
   * @featured
   */
  readonly repoBuildPackageModel?: RepoBuildPackageModel;

  /**
   * Location for local archive of released artifacts.
   * Used only when `repoBuildPackageModel is set to
   * `RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY`.
   *
   * @default ~/.local-build-packages
   * @featured
   */
  readonly localPackageArchiveDir?: string;

  /**
   * Release to Local archive folder when running release tasks
   *
   * @default true
   */
  readonly releaseToLocal?: boolean;

  /**
   * Release to Github when running release tasks
   *
   * @default true if `repository` is set, `false` otherwise
   */
  readonly releaseToGithub?: boolean;
}

/**
 * TypeScript ESM project
 *
 * This Project type extends `TypeScriptProject` to set up the project
 * as an ESM project rather than CommonJS.  This includes adjustments
 * to building/running the `projen` synthesize operation, adjustments
 * to `package.json`, and configuration for `jest` test running in ESM
 * mode.
 *
 * Additional features available:
 * - use ESLint flat config rather than JSON config
 * - use Prettier flat config rather than JSON config
 * - add a `version.ts` helper to ease the referencing of the package
 *   version in package code.
 * - enable the project for using the `pre-commit` tool
 * - activate a local/github build/packaging mode for the project
 * - activate API documentation generation during builds (uses `typedoc`)
 * - create a sample `index.md` file in the `docs` folder (for usage guide,
 *   examples, and more detailed information than what is found in the `README.md`)
 * - create a more detailed sample `README.md` file
 *
 * @pjid typescript-esm
 */
export class TypeScriptESMProject extends typescript.TypeScriptProject {
  /**
   * see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).
   */
  public readonly eslintFlatConfig: boolean;

  /**
   * see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).
   */
  public readonly prettierFlatConfig: boolean;

  /**
   * see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).
   */
  public readonly precommitConfig: boolean;

  /**
   * see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).
   */
  public readonly addVersionFile: boolean;

  /**
   * see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).
   */
  public readonly commands: CommandParameters[];

  /**
   * see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).
   */
  public readonly docsIndex: boolean;

  /**
   * see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).
   */
  public readonly apiDocumentation: boolean;

  /**
   * see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).
   */
  public readonly apiEntryPoints?: string[];

  /**
   * see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).
   */
  public readonly repoBuildPackageModel: RepoBuildPackageModel;

  /**
   * see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).
   */
  public readonly localPackageArchiveDir: string;

  /**
   * Create a TypeScriptESMProject construct for the project.
   *
   * @param options options for configuring the project.  Extends `TypeScriptProjectOptions`.
   */
  constructor(options: TypeScriptESMProjectOptions) {
    const repoBuildPackageModel: RepoBuildPackageModel =
      options.repoBuildPackageModel ??
      RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY;

    // Handle settings related to build/release to be passed into super() constructor:
    let releaseTrigger: ReleaseTrigger | undefined = undefined;
    let publishTasks: boolean | undefined = undefined;
    let deferredErrorMessage: string | undefined = undefined;
    let githubOptions: GitHubOptions | undefined = undefined;

    switch (repoBuildPackageModel) {
      case RepoBuildPackageModel.SKIP_SETUP:
        // pass-through any options that might be set up by the opinionated configuration
        releaseTrigger = options.releaseTrigger ?? undefined;
        publishTasks = options.publishTasks ?? undefined;
        githubOptions = options.githubOptions ?? undefined;
        break;
      case RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY:
        // release-related options
        if (options.repository) {
          // if there is a remote repository, then enable a git push to the repository
          releaseTrigger = ReleaseTrigger.manual();
        } else {
          // if no repository, then disable the git push to the repository
          releaseTrigger = ReleaseTrigger.manual({
            gitPushCommand: "",
          });
        }

        publishTasks = true;
        githubOptions = {
          workflows: false,
        };
        break;
      default:
        deferredErrorMessage = `incorrect repoBuildPackageModel setting: ${repoBuildPackageModel} specified before constructor`;
    }

    // create a new options instance, copying the input values
    // and over-riding those that need to be set for ESM
    const typeScriptProjectOptions: typescript.TypeScriptProjectOptions = {
      ...options,

      eslint: options.eslintFlatConfig ? false : options.eslint, // if eslintFlatConfig, skip eslint synth
      prettier: options.prettierFlatConfig ? false : options.prettier, // if prettierFlatConfig, skip pretter synth

      // The following setting/override was added to overcome a subtle
      // dependency by the projen tool on using yarn "classic".

      // if not specified, default to use pnpm
      packageManager: options.packageManager ?? NodePackageManager.PNPM,

      // start clauses added to enable ESM module usage
      minNodeVersion: options.minNodeVersion ?? "24.0.0",
      workflowNodeVersion: "24.x",
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

      // start clauses to set up build/package/release model
      releaseTrigger: releaseTrigger,
      publishTasks: publishTasks,
      githubOptions: githubOptions,
    };

    // construct the project instance (TypeScriptProject)
    super(typeScriptProjectOptions);

    // Log any issues encountered before the constructor
    if (deferredErrorMessage) {
      this.logger?.log(LogLevel.ERROR, deferredErrorMessage);
    }

    // start project adjustments to enable ESM module usage

    // capture options and set defaults
    this.eslintFlatConfig = options.eslintFlatConfig ?? false;
    this.prettierFlatConfig = options.prettierFlatConfig ?? false;
    this.precommitConfig = options.precommitConfig ?? false;
    this.addVersionFile = options.addVersionFile ?? false;
    this.docsIndex = options.docsIndex ?? false;
    this.apiDocumentation = options.apiDocumentation ?? false;
    this.apiEntryPoints = options.apiEntryPoints;
    this.commands = options.commands ?? [];
    this.repoBuildPackageModel =
      options.repoBuildPackageModel ??
      RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY;
    this.localPackageArchiveDir =
      options.localPackageArchiveDir ?? "~/.local-build-packages";

    // set "type": "module" in package.json
    this.package.addField("type", "module");

    // set NODE_OPTIONS environment variable when running jest during tests
    this.testTask.env("NODE_OPTIONS", "--experimental-vm-modules");

    // patch package.json to remove a transform inserted by the TypeScriptProject package
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

    if (this.docsIndex) {
      new DocsIndexSampleFile(this);

      if (this.apiDocumentation) {
        let packageManagerRunCommand: string;
        switch (options.packageManager) {
          case NodePackageManager.NPM:
            packageManagerRunCommand = "npm run";
            break;
          case NodePackageManager.BUN:
            packageManagerRunCommand = "bun run";
            break;
          case NodePackageManager.PNPM:
            packageManagerRunCommand = "pnpm";
            break;
          case NodePackageManager.YARN_BERRY:
          case NodePackageManager.YARN_CLASSIC:
            packageManagerRunCommand = "yarn";
            break;
          default:
            packageManagerRunCommand = "npm run";
        }

        // install typedoc and markdown plugin
        this.addDevDeps("typedoc", "typedoc-plugin-markdown");

        // create the typedoc.json configuration file for typedoc
        new TypedocJson(this, {
          entryPoints: this.apiEntryPoints,
        });

        // add scripts to run API documentation generation
        this.addScripts({
          "build:docs": `${packageManagerRunCommand} typedoc`,
        });

        this.addPackageIgnore("docs");

        // add API generation to the post-compile processing
        this.postCompileTask.addSteps({
          name: "Generate Typedoc documentation",
          exec: `${packageManagerRunCommand} build:docs`,
        });
      }
    } else {
      if (this.apiDocumentation) {
        this.logger.error(
          `docsIndex MUST be enabled for apiDocumentation to be enabled`,
        );
      }
    }

    // implement the specified repository build and packaging model
    switch (this.repoBuildPackageModel) {
      case RepoBuildPackageModel.SKIP_SETUP:
        // no additional actions needed here
        break;
      case RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY:
        this.addPackageIgnore("CHANGELOG.md");

        // add a condition to the publish:git task so that it only runs if the current branch is "main"
        this.adjustPublishGitTask();

        // if publishing local, create another task to handle copying to a local package archive folder
        const releaseToLocal: boolean = options.releaseToLocal ?? true;
        if (releaseToLocal) {
          this.createPublishLocalTask(options.publishDryRun ?? false);
        }

        // if publishing to NPM should be done, add the task
        if (options.releaseToNpm) {
          this.createPublishNpmTask(options.publishDryRun ?? false);
        }

        // if publishing to Github, add the task
        const releaseToGithub: boolean =
          options.releaseToGithub ?? (options.repository ? true : false);
        if (releaseToGithub) {
          this.createPublishGithubTask(
            options.repository,
            options.publishDryRun ?? false,
          );
        }
        break;
      default:
        this.logger?.log(
          LogLevel.ERROR,
          `incorrect repoBuildPackageModel ${this.repoBuildPackageModel} specified after constructor`,
        );
    }

    // end additional features
  }

  private createPublishLocalTask(publishDryRun: boolean) {
    const packageFileNameSlug = this.package.packageName
      .replace("@", "")
      .replace("/", "-");
    this.addTask("publish:local", {
      condition:
        'test -f "dist/version.txt" && test "$(git branch --show-current)" = "main"',
      steps: [
        {
          name: `copy package to ${this.localPackageArchiveDir} folder (dryrun: ${publishDryRun})`,
          exec: `${publishDryRun ? "echo " : ""}cp dist/js/${packageFileNameSlug}-$(cat dist/version.txt).tgz ${this.localPackageArchiveDir}/.`,
        },
      ],
    });

    // add the publish:local task to the release task
    const publishLocalTask = this.tasks.tryFind("publish:local");
    const publishTask = this.tasks.tryFind("release");
    if (publishTask && publishLocalTask) {
      publishTask.spawn(publishLocalTask);
    }
  }

  private adjustPublishGitTask() {
    const publishGitTask = this.tasks.tryFind("publish:git");
    if (publishGitTask) {
      publishGitTask.addCondition(
        'test "$(git branch --show-current)" = "main"',
      );
    }
  }

  private createPublishNpmTask(publishDryRun: boolean) {
    const packageFileNameSlug = this.package.packageName
      .replace("@", "")
      .replace("/", "-");
    this.addTask("publish:npm", {
      description: "Publish this package to npm",
      env: {
        NPM_DIST_TAG: "latest",
        NPM_REGISTRY: "registry.npmjs.org",
      },
      condition:
        'test -f "dist/version.txt" && test "$(git branch --show-current)" = "main"',
      steps: [
        {
          exec: `npm publish${publishDryRun ? " --dry-run" : ""} dist/js/${packageFileNameSlug}-$(cat dist/version.txt).tgz`,
        },
      ],
    });

    // add the publish:local task to the release task
    const publishNpmTask = this.tasks.tryFind("publish:npm");
    const publishTask = this.tasks.tryFind("release");
    if (publishTask && publishNpmTask) {
      publishTask.spawn(publishNpmTask);
    }
  }

  private createPublishGithubTask(
    repository: string | undefined,
    publishDryRun: boolean,
  ) {
    let command: string;
    if (!repository) {
      this.logger?.error(
        `TypeScriptESMProject.createPublishGithubTask: repository MUST be specified (value: ${repository})`,
      );
    }

    command =
      "gh release create $(cat dist/releasetag.txt) --notes-file dist/changelog.md --title $(cat dist/releasetag.txt) --verify-tag";
    if (publishDryRun) {
      command = `echo ${command}`;
    }
    this.addTask("publish:github", {
      description: "Publish this package to GitHub Releases",
      condition:
        'test -f "dist/version.txt" && test "$(git branch --show-current)" = "main"',
      steps: [
        {
          exec: command,
        },
      ],
    });

    // add the publish:local task to the release task
    const publishGithubTask = this.tasks.tryFind("publish:github");
    const publishTask = this.tasks.tryFind("release");
    if (publishTask && publishGithubTask) {
      publishTask.spawn(publishGithubTask);
    }
  }
}
