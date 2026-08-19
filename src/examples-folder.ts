// Copyright (c) 2026 Tim Hahn

import { typescript, javascript, SampleFile, Component } from "projen";

/**
 * Options for the `ExamplesFolder` construct
 */
export interface ExamplesFolderOptions {
  /**
   * The folder name to use for storing documentation
   *
   * @default 'examples'
   */
  readonly examplesFolderName?: string;

  /**
   * Generate a `example.ts` file in the examples folder
   *
   * @default true
   */
  readonly exampleTsFile?: boolean;
}

/**
 * This construct defines a folder to hold example programs for the project.
 *
 * The source code, if present, in the examples folder will be included
 * in packaged resources but not compiled versions of that source code.
 *
 * A separate "compile:examples" task is added to package.json.
 *
 * Use command:
 *   pnpm compile:examples
 * to compile the examples programs.  Generated javascript files
 * will be placed in a lib folder under the examples folder.
 *
 * To run the examples, use:
 *   node <examplesFolderName/lib/<exampleProgramName>.js
 *
 * Example program source files are included in built packages.
 *
 * Compiled examples files excluded from Git and excluded from a built package.
 *
 */
export class ExamplesFolder extends Component {
  /**
   * Creates a `DocsIndexSampleFile` construct and adds it to the project.
   *
   * @param project the project that this construct belongs to
   * @param options configuration options for the examples folder
   */
  constructor(
    project: typescript.TypeScriptProject,
    options?: ExamplesFolderOptions,
  ) {
    const examplesFolderName: string =
      options?.examplesFolderName ?? "examples";
    const exampleTsFile: boolean = options?.exampleTsFile ?? true;

    super(project);

    if (exampleTsFile) {
      new SampleFile(project, `${examplesFolderName}/example.ts`, {
        contents: `
// This is an example of an example TypeScript program
// Compile this using:
//   pnpm compile:${examplesFolderName}
// Run this using:
//   node ${examplesFolderName}/lib/${examplesFolderName}/example.js

// If compiling this outside of the package, replace this import with:
// import { Hello } from '${project.package.packageName}'

import { Hello } from '../src/index.js';

const myHello = new Hello();

myHello.sayHello();
        `,
      });
    }

    const tsconfigExamples = new javascript.TypescriptConfig(project, {
      fileName: `${examplesFolderName}/tsconfig.json`,
      extends: project.tsconfig
        ? javascript.TypescriptConfigExtends.fromTypescriptConfigs([
            project.tsconfig,
          ])
        : undefined,
      compilerOptions: {
        rootDir: "..",
        outDir: "lib",
        isolatedModules: true,
      },
      include: ["**/*.ts"],
      exclude: ["lib"],
    });

    project.addTask(`compile:${examplesFolderName}`, {
      description: `compile ${examplesFolderName}`,
      steps: [
        {
          execArgs: ["tsc", "--project", tsconfigExamples.fileName],
        },
      ],
    });

    project.addGitIgnore(`${examplesFolderName}/lib/`);
    project.addPackageIgnore(`${examplesFolderName}/lib/`);
  }
}
