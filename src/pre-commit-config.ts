// Copyright (c) 2024 Tim Hahn

import { IConstruct } from "constructs";
import { YamlFile, Project, LogLevel } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { TypeScriptProject } from "projen/lib/typescript";
import { TypeScriptESMProject } from "./typescript-esm-project";

/**
 * Used to specify the file types used in the project.
 */
export enum PreCommitConfigFileTypes {
  /**
   * Add support for Terraform file checks (not yet implemented)
   */
  TERRAFORM,

  /**
   * Add support for Python file checks (black, bandit)
   */
  PYTHON,

  /**
   * Add support for CloudFormation file checks (not yet implemented)
   */
  CLOUDFORMATION,

  /**
   * Add support for Java file checks (not yet implemented)
   */
  JAVA,

  /**
   * Add support for JavaScript file checks (prettier, eslint)
   */
  JAVASCRIPT,

  /**
   * Add support for JavaScript file checks (prettier, eslint)
   */
  TYPESCRIPT,

  /**
   * Add support for shell script file checks (not yet implemented)
   */
  SHELLSCRIPT,
}

/**
 * Used to configure the PreCommitConfigFile construct
 */
export interface PreCommitConfigFileOptions {
  /**
   * Array of file-types to configure the pre-commit file to handle.
   */
  readonly fileTypes?: PreCommitConfigFileTypes[];

  /**
   * For JavaScript and/or TypeScript support, the package manager
   * defined for the project.
   */
  readonly packageManager?: NodePackageManager;
}

/**
 * This construct sets up the project to include a `.pre-commit-config.yaml`
 * file at the top of the project.
 *
 * The `.pre-commit-config.yaml` file will include checks for
 * git-commit messages (Commitizen) and default large files, end-of-file,
 * and check-yaml checks.
 *
 * To activate `pre-commit` for the project/repository, follow these steps:
 * - install the pre-commit tool (see [pre-commit](https://pre-commit.com) for instructions)
 * - run the tool explicitly (using the pre-commit command) OR
 * - (preferred) install the pre-commit git hooks using command:
 * pre-commit install --hook-type commit-msg --hook-type pre-commit
 *
 * Subsequent `git commit` commands issued after installing the git hooks
 * will run the specified checks on any files included in the commit.
 */
export class PreCommitConfigFile extends YamlFile {
  /**
   * Creates a `PreCommitConfigFile` construct and adds it to the project.
   *
   * @param scope the project that this construct belongs to
   * @param options options to configure the file
   */
  constructor(scope: IConstruct, options?: PreCommitConfigFileOptions) {
    // handle defaults
    const packageManager: NodePackageManager =
      options?.packageManager ?? NodePackageManager.NPM;
    const fileTypes: PreCommitConfigFileTypes[] = options?.fileTypes ?? [];

    let packageManagerRunCommand: string;
    switch (packageManager) {
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

    super(scope, ".pre-commit-config.yaml", {
      committed: true,
      marker: true,
      readonly: true,
      obj: {
        repos: [
          {
            repo: "https://github.com/commitizen-tools/commitizen",
            rev: "v4.8.3",
            hooks: [
              {
                id: "commitizen",
                stages: ["commit-msg"],
              },
            ],
          },
          {
            repo: "https://github.com/pre-commit/pre-commit-hooks",
            rev: "v5.0.0",
            hooks: [
              {
                id: "trailing-whitespace",
                exclude: "(.*\\.svg|^\\.yarn/.*)",
                stages: ["pre-commit"],
              },
              {
                id: "end-of-file-fixer",
                exclude:
                  "^(" +
                  "\\.pre-commit-config\\.yaml|" +
                  "\\.gitignore|" +
                  "\\.gitattributes|" +
                  "\\.projen/.*|" +
                  "\\.github/.*|" +
                  ".*\\.svg|" +
                  "\\.yarn/.*|" +
                  "LICENSE|" +
                  "\.mergify\.yml|" +
                  "tsconfig\.json|" +
                  "tsconfig\.dev\.json|" +
                  "\.npmignore|" +
                  "API.md|" +
                  "CHANGELOG.md" +
                  ")$",
                stages: ["pre-commit"],
              },
              {
                id: "check-added-large-files",
                stages: ["pre-commit"],
              },
              {
                id: "check-yaml",
                exclude: "^(" + "pnpm-lock\.yaml" + ")$",
                stages: ["pre-commit"],
              },
            ],
          },
        ],
      },
    });

    // process the options list to add in additional clauses
    for (const fileType of fileTypes) {
      switch (fileType) {
        case PreCommitConfigFileTypes.PYTHON:
          this.addOverride(
            "repos.1.hooks.1.exclude",
            "^(" +
              "\\.pre-commit-config\\.yaml|" +
              "\\.gitignore|" +
              "\\.gitattributes|" +
              "\\.projen/.*|" +
              "\\.github/.*|" +
              ".*\\.svg|" +
              "\\.yarn/.*|" +
              "LICENSE|" +
              "\.mergify\.yml|" +
              "tsconfig\.json|" +
              "tsconfig\.dev\.json|" +
              "\.npmignore|" +
              "API.md|" +
              "CHANGELOG.md|" +
              "setup\\.py|" +
              "requirements\\.txt|" +
              "requirements-dev\\.txt" +
              ")$",
          );
          this.addToArray("repos", {
            repo: "https://github.com/PyCQA/bandit",
            rev: "1.7.6",
            hooks: [
              {
                id: "bandit",
                files: "^.*\\.py$",
                types: ["python"],
                stages: ["pre-commit"],
              },
            ],
          });
          this.addToArray("repos", {
            repo: "https://github.com/psf/black",
            rev: "23.12.1",
            hooks: [
              {
                id: "black",
                files: "^.*\\.py$",
                types: ["python"],
                stages: ["pre-commit"],
              },
            ],
          });
          break;
        case PreCommitConfigFileTypes.JAVASCRIPT:
        case PreCommitConfigFileTypes.TYPESCRIPT:
          if (
            (scope as TypeScriptProject).prettier ||
            (scope as TypeScriptESMProject).prettierFlatConfig
          ) {
            this.addToArray("repos", {
              repo: "local",
              hooks: [
                {
                  id: "prettier",
                  name: "prettier",
                  language: "node",
                  entry: `${packageManagerRunCommand} prettier --write --ignore-unknown`,
                  files: "\\.[jt]sx?$", // *.js, *.jsx, *.ts and *.tsx
                  exclude: "^\\.yarn/.*",
                  types: ["file"],
                  stages: ["pre-commit"],
                },
              ],
            });
          }
          if (
            (scope as TypeScriptProject).eslint ||
            (scope as TypeScriptESMProject).eslintFlatConfig
          ) {
            this.addToArray("repos", {
              repo: "local",
              hooks: [
                {
                  id: "eslint",
                  name: "eslint",
                  language: "node",
                  entry: `${packageManagerRunCommand} eslint`,
                  files: "\\.[jt]sx?$", // *.js, *.jsx, *.ts and *.tsx
                  types: ["file"],
                  stages: ["pre-commit"],
                  additional_dependencies: ["jiti"],
                },
              ],
            });
          }

          // add the .pre-commit-config.yaml file to the list of files ignored by NPM Package managers
          (scope as Project).addPackageIgnore(".pre-commit-config.yaml");

          break;
        case PreCommitConfigFileTypes.CLOUDFORMATION:
        case PreCommitConfigFileTypes.JAVA:
        case PreCommitConfigFileTypes.SHELLSCRIPT:
        case PreCommitConfigFileTypes.TERRAFORM:
          // TODO: Not implemented yet - 2024-02-17
          break;
        default:
          (scope as Project).logger?.log(
            LogLevel.ERROR,
            "PreCommitConfigFile: should never get here",
          );
          break;
      }
    }
  }
}
