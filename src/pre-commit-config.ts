// Copyright (c) 2024 Tim Hahn

import { IConstruct } from "constructs";
import { YamlFile } from "projen";

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
            repo: "https://github.com/pre-commit/pre-commit-hooks",
            rev: "v4.5.0",
            hooks: [
              {
                id: "trailing-whitespace",
              },
              {
                id: "end-of-file-fixer",
                exclude:
                  "^(\\.pre-commit-config\\.yaml|" +
                  "\\.gitignore|" +
                  "\\.gitattributes|" +
                  "\\.projen/.*|" +
                  "\\.github/.*)$",
              },
              {
                id: "check-added-large-files",
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
              },
            ],
          });
          break;
        case PreCommitConfigFileTypes.JAVASCRIPT:
        case PreCommitConfigFileTypes.TYPESCRIPT:
          this.addToArray("repos", {
            repo: "https://github.com/pre-commit/mirrors-eslint",
            rev: "v8.56.0",
            hooks: [
              {
                id: "eslint",
              },
            ],
          });
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
