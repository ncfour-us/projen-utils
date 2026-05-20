// Copyright (c) 2024 Tim Hahn

import { readFileSync } from "node:fs";

import { IConstruct } from "constructs";
import { SampleFile, YamlFile, Project, JsonPatch } from "projen";
import { TypeScriptProject } from "projen/lib/typescript";

export enum PreCommitConfigFileTypes {
  TERRAFORM,
  PYTHON,
  CLOUDFORMATION,
  JAVA,
  JAVASCRIPT,
  TYPESCRIPT,
  SHELLSCRIPT,
}

export interface PreCommitConfigFileOptions {
  readonly fileTypes: PreCommitConfigFileTypes[];
}

export class PreCommitConfigFile extends YamlFile {
  constructor(scope: IConstruct, options: PreCommitConfigFileOptions) {
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
                  "\.npmignore" +
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
    for (const fileType of options.fileTypes) {
      switch (fileType) {
        case PreCommitConfigFileTypes.PYTHON:
          this.addOverride(
            "repos.0.hooks.1.exclude",
            "^(\\.pre-commit-config\\.yaml|" +
              "\\.gitignore|" +
              "\\.gitattributes|" +
              "\\.projen/.*|" +
              "setup\\.py|" +
              "requirements\\.txt|" +
              "requirements-dev\\.txt|" +
              "\\.github/.*)$",
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
          this.addToArray("repos", {
            repo: "local",
            hooks: [
              {
                id: "prettier",
                name: "prettier",
                language: "node",
                entry: "pnpm prettier --write --ignore-unknown",
                files: "\\.[jt]sx?$", // *.js, *.jsx, *.ts and *.tsx
                exclude: "^\\.yarn/.*",
                types: ["file"],
                stages: ["pre-commit"],
              },
            ],
          });
          this.addToArray("repos", {
            repo: "local",
            hooks: [
              {
                id: "eslint",
                name: "eslint",
                language: "node",
                entry: "pnpm eslint",
                files: "\\.[jt]sx?$", // *.js, *.jsx, *.ts and *.tsx
                types: ["file"],
                stages: ["pre-commit"],
                additional_dependencies: ["jiti"],
              },
            ],
          });

          // add the .pre-commit-config.yaml file to the list of files ignored by NPM Package managers
          (scope as Project).addPackageIgnore(".pre-commit-config.yaml");

          // adjust the parent project to enable running prettier
          //  - add a package dev dependency
          (scope as TypeScriptProject).addDevDeps("prettier");

          //  - create a prettier.config.ts file
          const prettierConfigContents = readFileSync(
            `${__dirname}/files/prettier.config.ts.sample`,
            {
              encoding: "utf8",
            },
          );
          new SampleFile(scope as Project, "prettier.config.ts", {
            contents: prettierConfigContents,
          });

          //  - update tsconfig.json
          const tsconfigDev = (scope as Project).tryFindObjectFile(
            "tsconfig.dev.json",
          );
          tsconfigDev?.patch(JsonPatch.add("/include/-", "prettier.config.ts"));
          (scope as Project).addPackageIgnore("prettier.config.ts");

          break;
        case PreCommitConfigFileTypes.CLOUDFORMATION:
        case PreCommitConfigFileTypes.JAVA:
        case PreCommitConfigFileTypes.SHELLSCRIPT:
        case PreCommitConfigFileTypes.TERRAFORM:
          // TODO: Not implemented yet - 2024-02-17
          break;
        default:
          console.log("PreCommitConfigFile: should never get here");
          break;
      }
    }
  }
}
