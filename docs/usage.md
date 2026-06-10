# Usage

The constructs defined in this package may be used within a
`TypeScriptESMProject` or added to other projects.
When using within a `TypeScriptESMProject`, it is preferred
to use the `options` flags for the `TypeScriptESMProject`
to cause the other constructs to be added.  This is not
required, just suggested.

## Sections

- [TypeScriptESMProject](#typescriptesmproject-typescript-esm)
- [PreCommitConfigFile](#precommitconfigfile)
- [ReadmeSampleFile](#readmesamplefile)
- [PnpmWorkspace](#pnpmworkspace)
- [DocsIndexSampleFile](#docsindexsamplefile)
- [TypdocJson](#typedocjson)

## TypeScriptESMProject (typescript-esm)

This project type represents a project which is TypeScript
code, expected to be compiled and run in ESM mode (either
in browser or Node-like environments).

The simplest instantiation of the project type resembles:

```typescript
const project = new TypeScriptESMProject({
  defaultReleaseBranch: 'main',
  devDeps: ['@ncfour-us/projen-utils'],
  name: 'test-proj',
  packageManager: javascript.NodePackageManager.PNPM,
  projenrcTs: true,

  // deps: [],                                                               /* Runtime dependencies of this module. */
  // description: undefined,                                                 /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,                                                 /* The "name" in package.json. */
  // repoBuildPackageModel: RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY,  /* Type of repository, packaging, and release model to use. */

});

```

In this case, all the default choices for setting up the project will be
used.  The resulting project can be built and tested immediately after
generation using the command:

```bash
pnpm build
```

Sample code is provided in the initial project along with a sample unit
test which runs the sample code.

### Options

The `TypeScriptESMProject` project extends `TypeScriptProject`.  All options
which can be specified for the `TypeScriptProject` can be used in the
construct options for `TypeScriptESMProject`.

Where there are conflicts, the `TypeScriptESMProject` will over-ride settings
as necessary when calling the `TypeScriptProject` constructor.

See the [API documentation](./api/index.md) for the type/syntax of each of these options.
The following sub-sections describe how to use the options and what effect
setting their values will have on the project structure and behavior.

#### precommitConfig

By setting this flag, a `PreCommitConfigFile` construct is added to the project
setting up the `pre-commit` processing to handle TypeScript code along with
setting up checking that `git commit` messages conform to the
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

The automated build/versioning processing in the project relies on convential commmit
message adherance within `git commit` messages, so it is recommended that
the `pre-commit` support be enabled.

After enabling this for the project, it is also necessary to install/activate
the `pre-commit` tool in the local development environment.  Follow instructions
from the [pre-commit site](https://pre-commit.com) for getting the `pre-commit`
tool installed.

Further, because both pre-commit and commit-msg hooks are used, activating the
hooks for the locally cloned git repository requires the following command
to be run (from a folder inside the git repository clone):

```bash
pre-commit install --hook-type commit-msg --hook-type pre-commit
```

Once this is configured and activated, checks for `eslint`, `prettier`, end-of-file,
trailing-whitespace, and commit message format will be run on every `git commit`
command invocation (including when run within an IDE environment).

The `eslint` and `prettier` checks rely on their respective configuration in the repository
and **MAY** cause changes in files when they run.  In this case, those files should
be added (`git add .`) to the staged commit files before re-running the `git commit`
command to commit the changes to the local repository.

#### addVersionFile

If activated, this will cause a `src/version.ts` file to be created/maintained
during build processing.  This file will include a single exported string value:

```typescript
export const LIB_VERSION = '0.0.0';
```

This is sometimes useful when source code inside the project would like to check
or display the version of the package.  The value is pulled from `package.json`
during build processing (pre-compile stage).

**NOTE**: when running in development, the value for `LIB_VERSION` will almost always
be `0.0.0`.  This is because the projen-provided build processing for managing
package versioning is only used during `release` processing (build/packaging of
a "release" package artifact (`.tgz` file)).  The `LIB_VERSION` in `./lib/version.js`
in the packaged `.tgz` file for the package **WILL** have the value corresponding
to the `version` field in `package.json` in that same packaged `.tgz` file.

#### eslintFlatConfig

The default format for the ESLint configuration chosen by `projen` is JSON format
(`.eslintrc.json`).  However, newer versions of ESLint are deprecating the JSON
configuration format in favor of the "flat config" format (`eslint.config.ts`).

By setting this flag, the project will generate (as a **Sample** file) a `eslint.config.ts`
file.  It is then the responsibility of the project team to maintain the
`eslint.config.ts` file (ESLint config options for the `TypeScriptProject`
**are ignored**).

#### prettierFlatConfig

The default format for the Prettier configuration chosen by `projen` is JSON format
(`.prettierrc`).  However, newer versions of prettier are deprecating the JSON
configuration format in favor of the "flat config" format (`prettier.config.ts`).

By setting this flag, the project will generate (as a **Sample** file) a `prettier.config.ts`
file.  It is then the responsibility of the project team to maintain the
`prettier.config.ts` file (Prettier config options for the `TypeScriptProject`
**are ignored**).

Be careful when setting configuration for Prettier as there are `@stylistic` ESLint
configuration settings which also mutate/change the format of TypeScript source files.
The initial configuration of `prettier.config.ts` and `eslint.config.ts` are set
up so that they are compatible with one another.

#### commands

This option can be used to list additional TypeScript files which implement command-line
tools and should be added as commands when the package is installed.  The commands
listed (and their corresponding source file names) are added to **BOTH** the `scripts`
and `bins` clauses of `package.json`.

The source file names should be relative to the `src` folder.  For example,
if there are two additional commands implemented in source files `src/cmd/command1.ts`
and `src/cmd/command2.ts`, the option should be specified as:

```typescript
    ...
    commands: [
        {
            name: 'command-1',
            file: 'cmd/command1.js',
        },
        {
            name: 'command-2',
            file: 'cmd/command2.js',
        },
    ],
    ...
```

Note the change from `.ts` to `.js` in the `file` attribute.

#### docsIndex

This option is used to generate a **Sample** file in the `docs` folder/directory of the
repository.  The resulting markdown can then be used when setting up a GitHub Pages
site which documents the package (once the git repository is hosted on GitHub, and
GitHub Pages publishing is enabled for the repository).

The file is only created once.  The project team must then update the file with
the appropriate information.

If API documentation (see [apiDocumentation](#apidocumentation)) is specified, this
option **MUST** also be specified.

#### apiDocumentation

This option enabled [Typedoc](https://typedoc.org/) generation of API documentation
for the exported classes/enums/constants/types from the project.

Be sure to update the TypeScript source files with block comments above **ALL**
exported types/constants/classes.

#### apiEntryPoints

This option can be used, when `apiDocumentation` is enabled, to configure the
`entryPoints` attribute in the `typedoc.json` file.  This option is only
needed if there is a difference between what should be documented vs. what
is exported for the project since Typedoc will use the exported entry points
from `package.json` if no other configuration is provided.

#### repoBuildPackagingModel

The `TypeScriptESMProject` provides a **VERY** opinionated implementation of
build/packaging processing for the project.  This implementation builds on the
base support provided by `projen`.  However, the implementation focuses on
a staged adoption of build/packaging automation, starting with the creation
of a project that is built/packaged entirely local (local `git` repository,
no remote repository on GitHub) with subsequent adjustments/refinements
to the configuration to enable/use a remote `git` repository on GitHub and
package registry on [NPMJS](https://npmjs.com).

Subsequent configuration can then be enabled which shifts build/packaging
processing to GitHub actions, with local build processing used **ONLY** for
development, debugging, and patching/fixing.

This path was chosen because it enables quick local development followed by
successive build/package automation and staged publishing to public locations.
The user learns how the build/packaging model works, including automated
[Semantic Versioning](https://semver.org/) management provided by the
`projen` build/packaging automation,
in close coordination/usage of `git` tagging.

If a project wishes to use the ESM support for the project type, but handle
build/packaging configuration on its own, this is possible by using the
`RepoBuildPackagingModel.SKIP_SETUP` configuration setting
for the `repoBuildPackagingModel` option.

**NOTE** however, that `SKIP_SETUP` is **NOT** the default configuration.

The default configuration for the project is `RepoBuildPackagingModel.LOCAL_BUILD_PACKAGE`.

In this build/packaging mode, a remote `git` repository **MAY** be configured,
but it is treated as a remote target with changes pushed to the target.
This is appropriate when a project is just getting started, usually by
a single person or very small team working on the project.

Once the project is ready for its first couple of releases, then remote
build/packaging publishing targets can be specified with the locally-initiated
build/packaging causing publishing to those remote targets to be done
at the end of build/packaging processing.

##### SKIP_SETUP

This build/packaging mode **turns OFF** any build/packaging setup by
the `TypeScriptESMProject`.  All build/packaging setup configuration
is the responsibility of the project team.

##### LOCAL_BUILD_PACKAGE / LOCAL_DEV_BUILD_REGISTRY

This build/packaging mode enables/implements local (from the local
`git` repository) build/packaging processing, including package publishing.

Two commands are used for build and packaging: `build` and `release`.

The `build` command will compile, test, and package up a package
deployment artifact (`.tgz` file) which can be used for integration
testing.
The built artifact can be installed into another project
using the `file://<filename>.tgz` format in that project's `package.json` file.

The `release` command will perform all `build` processing **AND**
create a versioned project build artifact.  The versioning
follows [Semantic Versioning](https://semver.org/), relies on
`git` commits being on the `main` branch of the code repository,
and will set **tags** in the `git` repository which correspond
to the release version that is built/packaged.  The resulting `.tgz`
file will contain the version identfier in the filename.
Furthermore, a `CHANGELOG.md` file will be created/updated
in the `git` repository, with information pulled from
`git commit` messages (based on those messages conforming
to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format).

Note that semantic versioning changes rely heavily on the format of the
commit messages in order to determine whether to change patch, minor, or major
version numbers when calculating the version number to build/package.

The first time `release` is run, when on the `main` branch in the repository,
a package will be built at version `0.0.0` with a tag being
added to the `git` repository with value `v0.0.0`.

From that point forward, when `pnpm release` is run while on the `main`
branch, a new version will be created, bumping the patch, minor, and major
versions of the package as dictated by the `git commit` messages between the
last tagged commit on the `main` branch and the current commit on the `main`
branch.

Semantic versioning changes are a bit different when the major version is `0`
versus when the value is `1` or greater.  When `0`, "breaking" changes
cause the minor level to increment (resetting the patch value to `0`).
All other updates cause the patch level to increment.  When `1` or greater,
"breaking" changes will increment the major version (if `minMajorVersion` is set),
updates which include features will increment the minor version (resetting the patch
value to `0`), and bug fixes or other fixes will increment the patch value.

Each time `release` is run, a new tag will be added to the git repository and
the `CHANGELOG.md` file will be updated.

Three additional configuration options control where released packages are
"published" to: `releaseToLocal`, `releaseToNpm`, and `releaseToGithub`.
When set to `true`, the release processing will attempt to publish to those
locations, order:

1) remote Git repo (`git push`) - only if the `repository` option is set
1) local - based on the `localPackageArchiveDir` option and `releaseToLocal` set to `true`
1) NPM Registry - if `releaseToNpm` is set to `true`
1) GitHub release - if `releaseToGithub` is set to `true`

This build/packaging model is implemented using the `projen` support
for `ReleaseTrigger.manual()`.

**IMPORTANT**: Publishing to the remote locations depends on the local
environment having connectivity, active login credentials, and appropriate
pre-requisite tools installed.  See options below for details on what tools
are used for publishing to each location.

##### GITHUB_BUILD_PACKAGE

In this mode (**STILL UNDER CONSTRUCTION**), GitHub actions are used
to manage packaging and release to associated repositories.  This mode
depends heavily on the built-in support for build/packaging using
GitHub actions provided by the `projen` project.

This build/packaging model is (**WILL BE**) implemented using the `projen` support
for `ReleaseTrigger.continuous()`.

#### localPackageArchiveDir

This option specifies a folder, on the local workstation, where release-level
packages (`.tgz` files) should be copied to when "publishing to local".

This folder **MUST** be writable to by the user running the `pnpm release`
command.

When `releaseToLocal` is `true`, the release-level `.tgz` file (file-name
contains the version number) will be copied to the `localPackageArchiveDir` folder.

The default for this value is `~/.local-build-packages`.

#### releaseToLocal

The default value for this option is `true`.

When set to `true`, built packages during `release` processing will be copied
to the `localPackageArchiveDir`.

#### releaseToNpm

The default value for this option is `false`.

When set to `true`, built packages during `release` processing will be
published to the [NPM Registry](https://www.npmjs.com/) using the `publish`
command of the package manager used by the project.

For example, if `pnpm` is the package manager, then the `pnpm publish`
command is used.

**NOTE** the local user **MUST** have active credentials and authority to
publish the package to the NPM registry.  The user **WILL** be prompted
to authenticate during this publishing step, responding to whatever 2FA
or MFA authentication is required for the `publish` command to succeed.

#### releaseToGithub

The default value for this option is `false`.

When set to `true`, the Github CLI tool (`gh`) will be used to create
a "Github release" using the `gh release create` command.
More information on installing and using the `gh` command can be found
on the [gh CLI page](https://cli.github.com/).

**NOTE** the local user **MUST** have active credentials and authority to
run the `gh release create` command on the remote git repository
(see `repository` configuration setting).  A user can chech their
authentication status using the `gh auth status` command.

#### buildTagTask

The default value for this option is `false`.

When set to `true`, and additional command is enabled for the project
which enables the build/packaging of any level of the code which has
a corresponding `git` tag defined.  This can be used to re-build/package
a version of the package at a prior release level.

Building at a prior release level can be useful for re-creating problems
or debugging issues discovered by users.

When activated, a local user can run:

```bash
pnpm build:tag v0.0.0
```

to build the package at release level `0.0.0`.  The resulting package (`.tgz`)
file will be placed in the `dist/js` folder, with the file-name containing
the release level that was built.

If a version `1.3.15` exists in the local repository, run:

```bash
pnpm build:tag v1.3.15
```

to build/package the project at that level.

Use:

```bash
git log --oneline --tags --no-walk`
```

or

```bash
git tag -l
```

to find the tags defined in the local `git` repository.

Use command:

```bash
git describe --tags --abbrev=0
```

to find the "nearest" tag to the current commit point in the local repository.

Specifying a tag value that does not exist results in an error.

Specifying multiple tag values results in an error.

## PreCommitConfigFile

This construct can be used with a `TypeScriptESMProject` or any other project.

To use it with a `TypeScriptESMProject`, we recommend using
the `precommitConfig` option for that project type.
This is not, however, required.

To separately define the construct, instantiate it in `.projenrc.ts`:

```typescript
    ...
    new PreCommitConfigFile(project, {
        fileTypes: [
            PreCommitConfigFileTypes.TYPESCRIPT
        ],
        packageManager: NodePackageManager.PNPM,
    });
    ...
```

This will result in a managed file named `.pre-commit-config.yaml` to be
created at the top of the project.

After enabling this for the project, it is also necessary to install/activate
the `pre-commit` tool in the local development environment.  Follow instructions
from the [pre-commit site](https://pre-commit.com) for getting the `pre-commit`
tool installed.

Further, because both pre-commit and commit-msg hooks are used, activating the
hooks for the locally cloned git repository requires the following command
to be run (from a folder inside the git repository clone):

```bash
pre-commit install --hook-type commit-msg --hook-type pre-commit
```

The checks defined in the file will then be applied whenever a `git commit`
command is issued for the local repository.

## ReadmeSampleFile

This construct can be used with a `TypeScriptESMProject` or any other project.

The sample `README.md` file is normally configured using the `readme`
project option.  However, since it is **VERY** difficult to set this option
when creating a new project, and the file is a **Sample** file, it
can be a bit tricky to get a different `README.md` file template
created for the project.

There are two ways to use change/specify a different `README.md` template:

1) specify the `readme` option in the project's constructor `options`
1) instantiate a `ReadmeSampleFile` object and associate it with the project

In both cases, in order for the `README.md` file to actually be changed,
the `README.md` file **MUST** be removed from the project folder immediately
prior to the next run of the `projen` command which generates the project
files.

The steps to follow are:

1) update `.projenrc.ts` to specify the new configuration
1) remove the `README.md` file from the local folder tree (e.g. `rm README.md` command)
1) update the project files using `pnpm projen`.

The last command will cause the `README.md` file to be generated as a **Sample**, based
on the configuration set in the first step.

If the changes look good, then the changes can be commmited to the local repository using
`git add .` and `git commit -m "fix: update README.md"`.

To use the `readme` option for the project, add something like:

```typescript
    ...
    readme: sampleReadmeProps({
        namespace: '@my-npm-namespace', // NPM scope
        projectName: 'my-project', // NPM package name
        organization: 'my-org', // GitHub organization or user name
        author: 'My First and Last Name', // Author name
        authorEmail: 'myemail@example.com', // Author e-mail
        authorGithubUser: 'my-github-username', // Author GitHub userid
        license: 'MIT', // license ('MIT', 'Apache 2.0', etc.)
    }),
    ...
```

To use the `ReadmeSampleFile` construct, add something like:

```typescript
new ReadmeSampleFile(project, {
    namespace: '@my-npm-namespace', // NPM scope
    projectName: 'my-project', // NPM package name
    organization: 'my-org', // GitHub organization or user name
    author: 'My First and Last Name', // Author name
    authorEmail: 'myemail@example.com', // Author e-mail
    authorGithubUser: 'my-github-username', // Author GitHub userid
    license: 'MIT', // license ('MIT', 'Apache 2.0', etc.)
});
```

to your `.projenrc.ts` file.

The construct will search for an existing `SampleReadme` construct in
the project and remove it, if found, replacing the `README.md` sample
file with the one created by this construct.

## PnpmWorkspace

This construct can be used with a `TypeScriptESMProject` or any other project.

Use this construct to create a managed `pnpm-workspace.yaml` file at the
top of the project.  This file controls configuration settings for the `pnpm`
command and package manager.  For more information on the options for this file
refer to [pnpm-workspace.yaml documentation](https://pnpm.io/settings).

To use the `PnpmWorkspace` construct, add something like:

```typescript
new PnpmWorkspace(project, {
  packages: [],
});

```

to your `.projenrc.ts` file.

The following attributes are set in the file:

- `packages`: defaults to `[ 'packages/*' ]`.  Set to `[]` in a project that does not
  have sub-projects/packages
- `minimumReleaseAge`: defaults to `1440`
- `blockExoticSubdeps`: defaults to `true`
- `trustPolicy`: defaults to `no-downgrade`
- `allowBuilds`: defaults to `{ electron: true, esbuild: true }`

## DocsIndexSampleFile

This construct can be used with a `TypeScriptESMProject` or any other project.

Use this construct to initialize a documentation folder named `docs` in the project
in preparation for publishing this documentation
using [GitHub Pages](https://docs.github.com/en/pages).
The construct creates a `index.md` file inside the `docs` folder.

To use the `DocsIndexSampleFile` construct, add:

```typescript
new DocsIndexSampleFile(project);

```

to your `.projenrc.ts` file.

A sample file (un-managed) named `docs/index.md` will be created in the project.

After creating the file, edit the file to adjust as appropriate for documenting
how to use the project.  The sample suggests adding additional markdown files
to describe:

- installation (`install.md`)
- usage (`usage.md`)
- examples (`exampile.md`)
- API documentation (see [TypedocJson construct](#typedocjson))

These additional files are not created.  The `docs/index.md` file
can be edited to remove these references or add additional references
as you see fit to document your project.

## TypedocJson

This construct can be used with a `TypeScriptESMProject` or any other project.

Use this construct to create a `typedoc.json` configuration file
for using `typedoc` to generate API documentation for your project.
For more information about `typedoc`, refer to the
[Typedoc documentation](https://typedoc.org/).

To use the `TypedocJson` construct, add:

```typescript
new TypedocJson(project, {
    entryPoints: ['src/index.ts'],
});

```

to your `.projenrc.ts` file.

**NOTE** This construct only defines the `typedoc.json` configuration
file.  Additional configuration is required to add the use of
`typedoc` into the build processing for the project.
If using a [`TypeScriptESMProject`](#typescriptesmproject-typescript-esm)
and the [`apiDocumentation`](#apidocumentation) option
this additional processing is added to the project on your behalf.

To add the `typedoc` processing to another project the following
sample code can be used as a guide:

```typescript
...
// install typedoc and markdown plugin
project.addDevDeps("typedoc", "typedoc-plugin-markdown");

// add scripts to run API documentation generation
const buildDocsTask = project.addTask("build:docs", {
  description: "Generate Typedoc documentation",
  exec: `pnpm typedoc`,
});

project.addPackageIgnore("docs");

// add API generation to the post-compile processing
project.postCompileTask.addSteps({
  spawn: buildDocsTask.name,
});
...
```

The code snippet adds as task called `build:docs` to the project
and then adds this task to the `post-compile` stage of the `build`
task.
