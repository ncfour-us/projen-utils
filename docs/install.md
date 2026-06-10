# Installation

There are two ways to install and use the constructs.  If the
`typescript-esm` project type is not going to be used, install
the package as a dev-dependency using your chosens package
management tool.

The package is a pure ESM package, CommonJS is not supported.

Install using `npm`, `yarn`, or `pnpm` (preferred):

```bash
pnpm add --save-dev @ncfour-us/projen-utils
```

Once installed, import the package and reference the desired construct.

If using the `typescript-esm` (or `TypeScriptESMProject`) project type,
use the `projen new` command to generate a new project in a fresh
folder/directory:

```bash
pnpm dlx projen new typescript-esm --from @ncfour-us/projen-utils
```

This will create a `.projenrc.ts` file in the folder/directory
which instantiates a new `TypeScriptESMProject` project.  A `package.json`
file will also be created which includes this package in the dev
dependencies.

Note that options for the `typescript-esm` project **CAN** be specified
on the `projen new` command.  For example:

```bash
pnpm dlx projen new typescript-esm --from @ncfour-us/projen-utils --precommitConfig
```

will cause the project to also generate a `.pre-commit-config.yaml` file.
