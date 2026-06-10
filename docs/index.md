# Introduction

This project provides a set of constructs which are meant to be used when
creating TypeScript or Python projects using the [projen](https://projen.io)
project generation/maintenance tools.

This project provides five (5) utility constructs and one (1) new `projen`
project type.

The project type can be used to define a development project for writing
TypeScript code which is meant to be used in ESM mode (not CommonJS).

The project type is named `typescript-esm` or `TypeScriptESMProject`.

The utility constructs can be used to augment an existing projen project to add:

- A more descriptive `README.md` file at the root of the project (`ReadmeSampleFile`)
- A documentation folder and `index.md` file at the root of the folder (`DocsIndexSampleFile`)
- A `pnpm-workspace.yaml` file for configuring the use of `pnpm` as the package manager
 (`PnpmWorkspace`)
- A `.pre-commit-config.yaml` file for use with the `pre-commit` tool.  `pre-commit` is
 used to check `git` commits to make sure that the files and commit messages conform to
 what is expected for the project (`PreCommitConfigFile`)
- A API documentation generator using `typedoc`, storing the generated files in the `docs`
 sub-folder (`TypedocJson`)

## Additional information

**TODO:** Update the links below based on pages created to document the project.

- [Installation](./install.md)
- [Usage](./usage.md)
- [Example](./example.md)
- [API Documentation](./api/index.md)
