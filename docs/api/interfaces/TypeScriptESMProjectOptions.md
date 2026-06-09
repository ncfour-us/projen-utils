[@ncfour-us/projen-utils](../index.md) / TypeScriptESMProjectOptions

# Interface: TypeScriptESMProjectOptions

Options for TypeScriptESMProject

## Extends

- `TypeScriptProjectOptions`

## Properties

### addPackageManagerToDevEngines?

> `readonly` `optional` **addPackageManagerToDevEngines?**: `boolean`

Automatically add the resolved `packageManager` to `devEngines.packageManager`
in `package.json`, setting `onFail` to `ignore`.

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.addPackageManagerToDevEngines`

***

### addVersionFile?

> `readonly` `optional` **addVersionFile?**: `boolean`

Add a `version.ts` file which contains a `LIB_VERSION` global.
The `LIB_VERSION` value is set based on the `version` field in `package.json`.

#### Default

```ts
false
```

***

### allowLibraryDependencies?

> `readonly` `optional` **allowLibraryDependencies?**: `boolean`

Allow the project to include `peerDependencies` and `bundledDependencies`.
This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.allowLibraryDependencies`

***

### apiDocumentation?

> `readonly` `optional` **apiDocumentation?**: `boolean`

Add API documentation to `docs/api` using `typedoc`

#### Default

```ts
false
```

***

### apiEntryPoints?

> `readonly` `optional` **apiEntryPoints?**: `string`[]

API entry points for `typedoc` to use

#### Default

undefined if not specified, then information in `package.json`
 will be used by `typedoc` to determine what entry points to include
 in the documentation.

***

### artifactsDirectory?

> `readonly` `optional` **artifactsDirectory?**: `string`

A directory which will contain build artifacts.

#### Default

```ts
"dist"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.artifactsDirectory`

***

### auditDeps?

> `readonly` `optional` **auditDeps?**: `boolean`

Run security audit on dependencies.

When enabled, creates an "audit" task that checks for known security vulnerabilities
in dependencies. By default, runs during every build and checks for "high" severity
vulnerabilities or above in all dependencies (including dev dependencies).

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.auditDeps`

***

### auditDepsOptions?

> `readonly` `optional` **auditDepsOptions?**: `AuditOptions`

Security audit options.

#### Default

```ts
- default options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.auditDepsOptions`

***

### authorEmail?

> `readonly` `optional` **authorEmail?**: `string`

Author's e-mail

#### Inherited from

`typescript.TypeScriptProjectOptions.authorEmail`

***

### authorName?

> `readonly` `optional` **authorName?**: `string`

Author's name

#### Inherited from

`typescript.TypeScriptProjectOptions.authorName`

***

### authorOrganization?

> `readonly` `optional` **authorOrganization?**: `boolean`

Is the author an organization

#### Inherited from

`typescript.TypeScriptProjectOptions.authorOrganization`

***

### authorUrl?

> `readonly` `optional` **authorUrl?**: `string`

Author's URL / Website

#### Inherited from

`typescript.TypeScriptProjectOptions.authorUrl`

***

### autoApproveOptions?

> `readonly` `optional` **autoApproveOptions?**: `AutoApproveOptions`

Enable and configure the 'auto approve' workflow.

#### Default

```ts
- auto approve is disabled
```

#### Inherited from

`typescript.TypeScriptProjectOptions.autoApproveOptions`

***

### autoApproveUpgrades?

> `readonly` `optional` **autoApproveUpgrades?**: `boolean`

Automatically approve deps upgrade PRs, allowing them to be
merged by mergify (if configured).

Throw if set to true but `autoApproveOptions` are not defined.

#### Default

```ts
- true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.autoApproveUpgrades`

***

### autoDetectBin?

> `readonly` `optional` **autoDetectBin?**: `boolean`

Automatically add all executables under the `bin` directory to your
`package.json` file under the `bin` section.

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.autoDetectBin`

***

### autoMerge?

> `readonly` `optional` **autoMerge?**: `boolean`

Enable automatic merging on GitHub. Has no effect if `github.mergify`
is set to false.

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.autoMerge`

***

### autoMergeOptions?

> `readonly` `optional` **autoMergeOptions?**: `AutoMergeOptions`

Configure options for automatic merging on GitHub. Has no effect if
`github.mergify` or `autoMerge` is set to false.

#### Default

- see defaults in `AutoMergeOptions`

#### Inherited from

`typescript.TypeScriptProjectOptions.autoMergeOptions`

***

### bin?

> `readonly` `optional` **bin?**: `Record`\<`string`, `string`\>

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

#### Inherited from

`typescript.TypeScriptProjectOptions.bin`

***

### biome?

> `readonly` `optional` **biome?**: `boolean`

Setup Biome.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.biome`

***

### biomeOptions?

> `readonly` `optional` **biomeOptions?**: `BiomeOptions`

Biome options

#### Default

```ts
- default options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.biomeOptions`

***

### bugsEmail?

> `readonly` `optional` **bugsEmail?**: `string`

The email address to which issues should be reported.

#### Inherited from

`typescript.TypeScriptProjectOptions.bugsEmail`

***

### bugsUrl?

> `readonly` `optional` **bugsUrl?**: `string`

The url to your project's issue tracker.

#### Inherited from

`typescript.TypeScriptProjectOptions.bugsUrl`

***

### buildTagTask?

> `readonly` `optional` **buildTagTask?**: `boolean`

Add a `build:tag` task to the set of tasks for the project.
The `build:tag` task requires a single argument which **MUST**
match an existing tag (released version) in the git repository.

This task runs only in "local" (non-CI) environments.

Example for running the task (assumes tag/release `v0.0.4` exists):

```bash
pnpm build:tag v0.0.4
```

#### Default

```ts
false
```

***

### buildWorkflow?

> `readonly` `optional` **buildWorkflow?**: `boolean`

Define a GitHub workflow for building PRs.

#### Default

```ts
- true if not a subproject
```

#### Inherited from

`typescript.TypeScriptProjectOptions.buildWorkflow`

***

### buildWorkflowOptions?

> `readonly` `optional` **buildWorkflowOptions?**: `BuildWorkflowOptions`

Options for PR build workflow.

#### Inherited from

`typescript.TypeScriptProjectOptions.buildWorkflowOptions`

***

### ~~buildWorkflowTriggers?~~

> `readonly` `optional` **buildWorkflowTriggers?**: `Triggers`

Build workflow triggers

#### Default

```ts
"{ pullRequest: {}, workflowDispatch: {} }"
```

#### Deprecated

- Use `buildWorkflowOptions.workflowTriggers`

#### Inherited from

`typescript.TypeScriptProjectOptions.buildWorkflowTriggers`

***

### bumpPackage?

> `readonly` `optional` **bumpPackage?**: `string`

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

#### Default

```ts
- A recent version of "commit-and-tag-version"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.bumpPackage`

***

### bundledDeps?

> `readonly` `optional` **bundledDeps?**: `string`[]

List of dependencies to bundle into this module. These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

#### Inherited from

`typescript.TypeScriptProjectOptions.bundledDeps`

***

### bundlerOptions?

> `readonly` `optional` **bundlerOptions?**: `BundlerOptions`

Options for `Bundler`.

#### Inherited from

`typescript.TypeScriptProjectOptions.bundlerOptions`

***

### bunVersion?

> `readonly` `optional` **bunVersion?**: `string`

The version of Bun to use if using Bun as a package manager.

#### Default

```ts
"latest"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.bunVersion`

***

### checkLicenses?

> `readonly` `optional` **checkLicenses?**: `LicenseCheckerOptions`

Configure which licenses should be deemed acceptable for use by dependencies

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

#### Default

```ts
- no license checks are run during the build and all licenses will be accepted
```

#### Inherited from

`typescript.TypeScriptProjectOptions.checkLicenses`

***

### clobber?

> `readonly` `optional` **clobber?**: `boolean`

Add a `clobber` task which resets the repo to origin.

#### Default

```ts
- true, but false for subprojects
```

#### Inherited from

`typescript.TypeScriptProjectOptions.clobber`

***

### codeArtifactOptions?

> `readonly` `optional` **codeArtifactOptions?**: `CodeArtifactOptions`

Options for npm packages using AWS CodeArtifact.
This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

#### Default

```ts
- undefined
```

#### Inherited from

`typescript.TypeScriptProjectOptions.codeArtifactOptions`

***

### codeCov?

> `readonly` `optional` **codeCov?**: `boolean`

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/
Uses codecov/codecov-action@v5
By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.codeCov`

***

### codeCovTokenSecret?

> `readonly` `optional` **codeCovTokenSecret?**: `string`

Define the secret name for a specified https://codecov.io/ token

#### Default

```ts
- OIDC auth is used
```

#### Inherited from

`typescript.TypeScriptProjectOptions.codeCovTokenSecret`

***

### commands?

> `readonly` `optional` **commands?**: [`CommandParameters`](CommandParameters.md)[]

Additional commands (scripts) to add to the `package.json` file.

#### Default

```ts
[]
```

***

### commitGenerated?

> `readonly` `optional` **commitGenerated?**: `boolean`

Whether to commit the managed files by default.

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.commitGenerated`

***

### copyrightOwner?

> `readonly` `optional` **copyrightOwner?**: `string`

License copyright owner.

#### Default

- defaults to the value of authorName or "" if `authorName` is undefined.

#### Inherited from

`typescript.TypeScriptProjectOptions.copyrightOwner`

***

### copyrightPeriod?

> `readonly` `optional` **copyrightPeriod?**: `string`

The copyright years to put in the LICENSE file.

#### Default

```ts
- current year
```

#### Inherited from

`typescript.TypeScriptProjectOptions.copyrightPeriod`

***

### defaultReleaseBranch

> `readonly` **defaultReleaseBranch**: `string`

The name of the main release branch.

#### Default

```ts
"main"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.defaultReleaseBranch`

***

### deleteOrphanedLockFiles?

> `readonly` `optional` **deleteOrphanedLockFiles?**: `boolean`

Automatically delete lockfiles from package managers that are not the
active one. Only triggered when the lockfile for the configured package
manager already exists.

This is useful when migrating between package managers to avoid conflicts.

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.deleteOrphanedLockFiles`

***

### dependabot?

> `readonly` `optional` **dependabot?**: `boolean`

Use dependabot to handle dependency upgrades.
Cannot be used in conjunction with `depsUpgrade`.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.dependabot`

***

### dependabotOptions?

> `readonly` `optional` **dependabotOptions?**: `DependabotOptions`

Options for dependabot.

#### Default

```ts
- default options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.dependabotOptions`

***

### deps?

> `readonly` `optional` **deps?**: `string`[]

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

#### Example

```ts
[ 'express', 'lodash', 'foo@^2' ]
```

#### Default

```ts
[]
```

#### Featured

#### Inherited from

`typescript.TypeScriptProjectOptions.deps`

***

### depsUpgrade?

> `readonly` `optional` **depsUpgrade?**: `boolean`

Use tasks and github workflows to handle dependency upgrades.
Cannot be used in conjunction with `dependabot`.

#### Default

- `true` for root projects, `false` for subprojects

#### Inherited from

`typescript.TypeScriptProjectOptions.depsUpgrade`

***

### depsUpgradeOptions?

> `readonly` `optional` **depsUpgradeOptions?**: `UpgradeDependenciesOptions`

Options for `UpgradeDependencies`.

#### Default

```ts
- default options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.depsUpgradeOptions`

***

### description?

> `readonly` `optional` **description?**: `string`

The description is just a string that helps people understand the purpose of the package.
It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

#### Featured

#### Inherited from

`typescript.TypeScriptProjectOptions.description`

***

### devContainer?

> `readonly` `optional` **devContainer?**: `boolean`

Add a VSCode development environment (used for GitHub Codespaces)

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.devContainer`

***

### devDeps?

> `readonly` `optional` **devDeps?**: `string`[]

Build dependencies for this module. These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

#### Example

```ts
[ 'typescript', '@types/express' ]
```

#### Default

```ts
[]
```

#### Featured

#### Inherited from

`typescript.TypeScriptProjectOptions.devDeps`

***

### devEngines?

> `readonly` `optional` **devEngines?**: `DevEngines`

Configure the `devEngines` field in `package.json`.

The `devEngines.packageManager` field is automatically populated based on
the resolved `packageManager` value. Any fields provided here are merged
with the auto-populated `packageManager` entry.

#### See

https://docs.npmjs.com/cli/v10/configuring-npm/package-json#devengines

#### Inherited from

`typescript.TypeScriptProjectOptions.devEngines`

***

### disableTsconfig?

> `readonly` `optional` **disableTsconfig?**: `boolean`

Do not generate a `tsconfig.json` file (used by jsii projects since
tsconfig.json is generated by the jsii compiler).

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.disableTsconfig`

***

### disableTsconfigDev?

> `readonly` `optional` **disableTsconfigDev?**: `boolean`

Do not generate a `tsconfig.dev.json` file.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.disableTsconfigDev`

***

### docgen?

> `readonly` `optional` **docgen?**: `boolean`

Docgen by Typedoc

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.docgen`

***

### docsDirectory?

> `readonly` `optional` **docsDirectory?**: `string`

Docs directory

#### Default

```ts
"docs"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.docsDirectory`

***

### docsIndex?

> `readonly` `optional` **docsIndex?**: `boolean`

Add a `docs/index.md` file to the project as a sample file

#### Default

```ts
false
```

***

### entrypoint?

> `readonly` `optional` **entrypoint?**: `string`

Module entrypoint (`main` in `package.json`)

Set to an empty string to not include `main` in your package.json

#### Default

```ts
"lib/index.js"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.entrypoint`

***

### entrypointTypes?

> `readonly` `optional` **entrypointTypes?**: `string`

The .d.ts file that includes the type declarations for this module.

#### Default

```ts
- .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
```

#### Inherited from

`typescript.TypeScriptProjectOptions.entrypointTypes`

***

### eslint?

> `readonly` `optional` **eslint?**: `boolean`

Setup eslint.

#### Default

```ts
- true, unless biome is enabled
```

#### Inherited from

`typescript.TypeScriptProjectOptions.eslint`

***

### eslintFlatConfig?

> `readonly` `optional` **eslintFlatConfig?**: `boolean`

Use `eslint.config.ts` instead of `.eslintrc.json` for eslint config

#### Default

```ts
false
```

***

### eslintOptions?

> `readonly` `optional` **eslintOptions?**: `EslintOptions`

Eslint options

#### Default

```ts
- opinionated default options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.eslintOptions`

***

### github?

> `readonly` `optional` **github?**: `boolean`

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.github`

***

### githubOptions?

> `readonly` `optional` **githubOptions?**: `GitHubOptions`

Options for GitHub integration

#### Default

```ts
- see GitHubOptions
```

#### Inherited from

`typescript.TypeScriptProjectOptions.githubOptions`

***

### gitignore?

> `readonly` `optional` **gitignore?**: `string`[]

Additional entries to .gitignore

#### Inherited from

`typescript.TypeScriptProjectOptions.gitignore`

***

### gitIgnoreOptions?

> `readonly` `optional` **gitIgnoreOptions?**: `IgnoreFileOptions`

Configuration options for .gitignore file

#### Inherited from

`typescript.TypeScriptProjectOptions.gitIgnoreOptions`

***

### gitOptions?

> `readonly` `optional` **gitOptions?**: `GitOptions`

Configuration options for git

#### Inherited from

`typescript.TypeScriptProjectOptions.gitOptions`

***

### gitpod?

> `readonly` `optional` **gitpod?**: `boolean`

Add a Gitpod development environment

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.gitpod`

***

### homepage?

> `readonly` `optional` **homepage?**: `string`

Package's Homepage / Website

#### Inherited from

`typescript.TypeScriptProjectOptions.homepage`

***

### jest?

> `readonly` `optional` **jest?**: `boolean`

Setup jest unit tests

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.jest`

***

### jestOptions?

> `readonly` `optional` **jestOptions?**: `JestOptions`

Jest options

#### Default

```ts
- default options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.jestOptions`

***

### jsiiReleaseVersion?

> `readonly` `optional` **jsiiReleaseVersion?**: `string`

Version requirement of `publib` which is used to publish modules to npm.

#### Default

```ts
"latest"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.jsiiReleaseVersion`

***

### keywords?

> `readonly` `optional` **keywords?**: `string`[]

Keywords to include in `package.json`.

#### Inherited from

`typescript.TypeScriptProjectOptions.keywords`

***

### libdir?

> `readonly` `optional` **libdir?**: `string`

Typescript  artifacts output directory

#### Default

```ts
"lib"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.libdir`

***

### license?

> `readonly` `optional` **license?**: `string`

License's SPDX identifier.
See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

#### Default

```ts
"Apache-2.0"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.license`

***

### licensed?

> `readonly` `optional` **licensed?**: `boolean`

Indicates if a license should be added.

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.licensed`

***

### localPackageArchiveDir?

> `readonly` `optional` **localPackageArchiveDir?**: `string`

Location for local archive of released artifacts.
Used only when `repoBuildPackageModel is set to
`RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY`.

#### Default

```ts
~/.local-build-packages
```

#### Featured

***

### logging?

> `readonly` `optional` **logging?**: `LoggerOptions`

Configure logging options such as verbosity.

#### Default

```ts
{}
```

#### Inherited from

`typescript.TypeScriptProjectOptions.logging`

***

### majorVersion?

> `readonly` `optional` **majorVersion?**: `number`

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

#### Default

```ts
- Major version is not enforced.
```

#### Inherited from

`typescript.TypeScriptProjectOptions.majorVersion`

***

### maxNodeVersion?

> `readonly` `optional` **maxNodeVersion?**: `string`

The maximum node version supported by this package.
Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

#### Default

```ts
- no maximum version is enforced
```

#### Inherited from

`typescript.TypeScriptProjectOptions.maxNodeVersion`

***

### ~~mergify?~~

> `readonly` `optional` **mergify?**: `boolean`

Whether mergify should be enabled on this repository or not.

#### Default

```ts
true
```

#### Deprecated

use `githubOptions.mergify` instead

#### Inherited from

`typescript.TypeScriptProjectOptions.mergify`

***

### ~~mergifyOptions?~~

> `readonly` `optional` **mergifyOptions?**: `MergifyOptions`

Options for mergify

#### Default

```ts
- default options
```

#### Deprecated

use `githubOptions.mergifyOptions` instead

#### Inherited from

`typescript.TypeScriptProjectOptions.mergifyOptions`

***

### minMajorVersion?

> `readonly` `optional` **minMajorVersion?**: `number`

Minimal Major version to release

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

#### Default

```ts
- No minimum version is being enforced
```

#### Inherited from

`typescript.TypeScriptProjectOptions.minMajorVersion`

***

### minNodeVersion?

> `readonly` `optional` **minNodeVersion?**: `string`

The minimum node version required by this package to function.
Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

#### Default

```ts
- no minimum version is enforced
```

#### Inherited from

`typescript.TypeScriptProjectOptions.minNodeVersion`

***

### ~~mutableBuild?~~

> `readonly` `optional` **mutableBuild?**: `boolean`

Automatically update files modified during builds to pull-request branches. This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

#### Default

```ts
true
```

#### Deprecated

- Use `buildWorkflowOptions.mutableBuild`

#### Inherited from

`typescript.TypeScriptProjectOptions.mutableBuild`

***

### name

> `readonly` **name**: `string`

This is the name of your project.

#### Default

```ts
$BASEDIR
```

#### Featured

#### Inherited from

`typescript.TypeScriptProjectOptions.name`

***

### nextVersionCommand?

> `readonly` `optional` **nextVersionCommand?**: `string`

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

#### Default

```ts
- The next version will be determined based on the commit history and project settings.
```

#### Inherited from

`typescript.TypeScriptProjectOptions.nextVersionCommand`

***

### npmAccess?

> `readonly` `optional` **npmAccess?**: `NpmAccess`

Access level of the npm package.

#### Default

- for scoped packages (e.g. `foo@bar`), the default is
`NpmAccess.RESTRICTED`, for non-scoped packages, the default is
`NpmAccess.PUBLIC`.

#### Inherited from

`typescript.TypeScriptProjectOptions.npmAccess`

***

### npmDistTag?

> `readonly` `optional` **npmDistTag?**: `string`

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

#### Default

```ts
"latest"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.npmDistTag`

***

### ~~npmignore?~~

> `readonly` `optional` **npmignore?**: `string`[]

Additional entries to .npmignore.

#### Deprecated

- use `project.addPackageIgnore`

#### Inherited from

`typescript.TypeScriptProjectOptions.npmignore`

***

### npmignoreEnabled?

> `readonly` `optional` **npmignoreEnabled?**: `boolean`

Defines an .npmignore file. Normally this is only needed for libraries that
are packaged as tarballs.

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.npmignoreEnabled`

***

### npmIgnoreOptions?

> `readonly` `optional` **npmIgnoreOptions?**: `IgnoreFileOptions`

Configuration options for .npmignore file

#### Inherited from

`typescript.TypeScriptProjectOptions.npmIgnoreOptions`

***

### npmProvenance?

> `readonly` `optional` **npmProvenance?**: `boolean`

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

#### See

https://docs.npmjs.com/generating-provenance-statements

#### Default

```ts
- true for public packages, false otherwise
```

#### Inherited from

`typescript.TypeScriptProjectOptions.npmProvenance`

***

### ~~npmRegistry?~~

> `readonly` `optional` **npmRegistry?**: `string`

The host name of the npm registry to publish to. Cannot be set together with `npmRegistryUrl`.

#### Deprecated

use `npmRegistryUrl` instead

#### Inherited from

`typescript.TypeScriptProjectOptions.npmRegistry`

***

### npmRegistryUrl?

> `readonly` `optional` **npmRegistryUrl?**: `string`

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

#### Default

```ts
"https://registry.npmjs.org"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.npmRegistryUrl`

***

### npmTokenSecret?

> `readonly` `optional` **npmTokenSecret?**: `string`

GitHub secret which contains the NPM token to use when publishing packages.

#### Default

```ts
"NPM_TOKEN"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.npmTokenSecret`

***

### npmTrustedPublishing?

> `readonly` `optional` **npmTrustedPublishing?**: `boolean`

Use trusted publishing for publishing to npmjs.com
Needs to be pre-configured on npm.js to work.

#### See

#### Default

```ts
- false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.npmTrustedPublishing`

***

### outdir?

> `readonly` `optional` **outdir?**: `string`

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

#### Default

```ts
"."
```

#### Inherited from

`typescript.TypeScriptProjectOptions.outdir`

***

### package?

> `readonly` `optional` **package?**: `boolean`

Defines a `package` task that will produce an npm tarball under the
artifacts directory (e.g. `dist`).

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.package`

***

### packageManager?

> `readonly` `optional` **packageManager?**: `NodePackageManager`

The Node Package Manager used to execute scripts

#### Default

- Detected from the calling process or `YARN_CLASSIC` if detection fails.

#### Pjnew

$PACKAGE_MANAGER

#### Inherited from

`typescript.TypeScriptProjectOptions.packageManager`

***

### packageName?

> `readonly` `optional` **packageName?**: `string`

The "name" in package.json

#### Default

```ts
- defaults to project name
```

#### Featured

#### Inherited from

`typescript.TypeScriptProjectOptions.packageName`

***

### parent?

> `readonly` `optional` **parent?**: `Project`

The parent project, if this project is part of a bigger project.

#### Inherited from

`typescript.TypeScriptProjectOptions.parent`

***

### peerDependencyOptions?

> `readonly` `optional` **peerDependencyOptions?**: `PeerDependencyOptions`

Options for `peerDeps`.

#### Inherited from

`typescript.TypeScriptProjectOptions.peerDependencyOptions`

***

### peerDeps?

> `readonly` `optional` **peerDeps?**: `string`[]

Peer dependencies for this module. Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

#### Default

```ts
[]
```

#### Inherited from

`typescript.TypeScriptProjectOptions.peerDeps`

***

### pnpmVersion?

> `readonly` `optional` **pnpmVersion?**: `string`

The version of PNPM to use if using PNPM as a package manager.

#### Default

```ts
"10.33.0"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.pnpmVersion`

***

### postBuildSteps?

> `readonly` `optional` **postBuildSteps?**: `JobStep`[]

Steps to execute after build as part of the release workflow.

#### Default

```ts
[]
```

#### Inherited from

`typescript.TypeScriptProjectOptions.postBuildSteps`

***

### precommitConfig?

> `readonly` `optional` **precommitConfig?**: `boolean`

Add a `.pre-commit-config.yaml` file to support use of `pre-commit` tool

#### Default

```ts
false
```

***

### prerelease?

> `readonly` `optional` **prerelease?**: `string`

Bump versions from the default branch as pre-releases (e.g. "beta",
"alpha", "pre").

#### Default

```ts
- normal semantic versions
```

#### Inherited from

`typescript.TypeScriptProjectOptions.prerelease`

***

### prettier?

> `readonly` `optional` **prettier?**: `boolean`

Setup prettier.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.prettier`

***

### prettierFlatConfig?

> `readonly` `optional` **prettierFlatConfig?**: `boolean`

Use `prettier.config.ts` instead of `.prettierrc.json` for eslint config

#### Default

```ts
false
```

***

### prettierOptions?

> `readonly` `optional` **prettierOptions?**: `PrettierOptions`

Prettier options

#### Default

```ts
- default options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.prettierOptions`

***

### projectTree?

> `readonly` `optional` **projectTree?**: `boolean`

Generate a project tree file (`.projen/tree.json`) that shows all
components and their relationships. Useful for understanding your
project structure and debugging.

#### Stability

experimental

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.projectTree`

***

### ~~projectType?~~

> `readonly` `optional` **projectType?**: `ProjectType`

Which type of project this is (library/app).

#### Default

```ts
ProjectType.UNKNOWN
```

#### Deprecated

no longer supported at the base project level

#### Inherited from

`typescript.TypeScriptProjectOptions.projectType`

***

### projenCommand?

> `readonly` `optional` **projenCommand?**: `string`

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

#### Default

```ts
"npx projen"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.projenCommand`

***

### projenCredentials?

> `readonly` `optional` **projenCredentials?**: `GithubCredentials`

Choose a method of providing GitHub API access for projen workflows.

#### Default

```ts
- use a personal access token named PROJEN_GITHUB_TOKEN
```

#### Inherited from

`typescript.TypeScriptProjectOptions.projenCredentials`

***

### projenDevDependency?

> `readonly` `optional` **projenDevDependency?**: `boolean`

Indicates of "projen" should be installed as a devDependency.

#### Default

```ts
- true if not a subproject
```

#### Inherited from

`typescript.TypeScriptProjectOptions.projenDevDependency`

***

### projenrcJs?

> `readonly` `optional` **projenrcJs?**: `boolean`

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable
.projenrc.js generation.

#### Default

```ts
- true if projenrcJson is false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.projenrcJs`

***

### projenrcJson?

> `readonly` `optional` **projenrcJson?**: `boolean`

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable
.projenrc.json generation.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.projenrcJson`

***

### projenrcJsonOptions?

> `readonly` `optional` **projenrcJsonOptions?**: `ProjenrcJsonOptions`

Options for .projenrc.json

#### Default

```ts
- default options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.projenrcJsonOptions`

***

### projenrcJsOptions?

> `readonly` `optional` **projenrcJsOptions?**: `ProjenrcOptions`

Options for .projenrc.js

#### Default

```ts
- default options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.projenrcJsOptions`

***

### projenrcTs?

> `readonly` `optional` **projenrcTs?**: `boolean`

Use TypeScript for your projenrc file (`.projenrc.ts`).

#### Default

```ts
false
```

#### Pjnew

true

#### Inherited from

`typescript.TypeScriptProjectOptions.projenrcTs`

***

### projenrcTsOptions?

> `readonly` `optional` **projenrcTsOptions?**: `ProjenrcOptions`

Options for .projenrc.ts

#### Inherited from

`typescript.TypeScriptProjectOptions.projenrcTsOptions`

***

### ~~projenTokenSecret?~~

> `readonly` `optional` **projenTokenSecret?**: `string`

The name of a secret which includes a GitHub Personal Access Token to be
used by projen workflows. This token needs to have the `repo`, `workflows`
and `packages` scope.

#### Default

```ts
"PROJEN_GITHUB_TOKEN"
```

#### Deprecated

use `projenCredentials`

#### Inherited from

`typescript.TypeScriptProjectOptions.projenTokenSecret`

***

### projenVersion?

> `readonly` `optional` **projenVersion?**: `string`

Version of projen to install.

#### Default

```ts
- Defaults to the latest version.
```

#### Inherited from

`typescript.TypeScriptProjectOptions.projenVersion`

***

### publishDryRun?

> `readonly` `optional` **publishDryRun?**: `boolean`

Instead of actually publishing to package managers, just print the publishing command.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.publishDryRun`

***

### publishTasks?

> `readonly` `optional` **publishTasks?**: `boolean`

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.publishTasks`

***

### pullRequestTemplate?

> `readonly` `optional` **pullRequestTemplate?**: `boolean`

Include a GitHub pull request template.

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.pullRequestTemplate`

***

### pullRequestTemplateContents?

> `readonly` `optional` **pullRequestTemplateContents?**: `string`[]

The contents of the pull request template.

#### Default

```ts
- default content
```

#### Inherited from

`typescript.TypeScriptProjectOptions.pullRequestTemplateContents`

***

### readme?

> `readonly` `optional` **readme?**: `SampleReadmeProps`

The README setup.

#### Default

```ts
- { filename: 'README.md', contents: '# replace this' }
```

#### Example

```ts
"{ filename: 'readme.md', contents: '# title' }"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.readme`

***

### releasableCommits?

> `readonly` `optional` **releasableCommits?**: `ReleasableCommits`

Find commits that should be considered releasable
Used to decide if a release is required.

#### Default

```ts
ReleasableCommits.everyCommit()
```

#### Inherited from

`typescript.TypeScriptProjectOptions.releasableCommits`

***

### release?

> `readonly` `optional` **release?**: `boolean`

Add release management to this project.

#### Default

```ts
- true (false for subprojects)
```

#### Inherited from

`typescript.TypeScriptProjectOptions.release`

***

### releaseBranches?

> `readonly` `optional` **releaseBranches?**: `object`

Defines additional release branches. A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

#### Index Signature

\[`name`: `string`\]: `BranchOptions`

#### Default

- no additional branches are used for release. you can use
`addBranch()` to add additional branches.

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseBranches`

***

### releaseEnvironment?

> `readonly` `optional` **releaseEnvironment?**: `string`

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

#### Default

```ts
- no environment used, unless set at the artifact level
```

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseEnvironment`

***

### ~~releaseEveryCommit?~~

> `readonly` `optional` **releaseEveryCommit?**: `boolean`

Automatically release new versions every commit to one of branches in `releaseBranches`.

#### Default

```ts
true
```

#### Deprecated

Use `releaseTrigger: ReleaseTrigger.continuous()` instead

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseEveryCommit`

***

### releaseFailureIssue?

> `readonly` `optional` **releaseFailureIssue?**: `boolean`

Create a github issue on every failed publishing task.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseFailureIssue`

***

### releaseFailureIssueLabel?

> `readonly` `optional` **releaseFailureIssueLabel?**: `string`

The label to apply to issues indicating publish failures.
Only applies if `releaseFailureIssue` is true.

#### Default

```ts
"failed-release"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseFailureIssueLabel`

***

### ~~releaseSchedule?~~

> `readonly` `optional` **releaseSchedule?**: `string`

CRON schedule to trigger new releases.

#### Default

```ts
- no scheduled releases
```

#### Deprecated

Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseSchedule`

***

### releaseTagPrefix?

> `readonly` `optional` **releaseTagPrefix?**: `string`

Automatically add the given prefix to release tags.
Useful if you are releasing on multiple branches with overlapping
version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

#### Default

```ts
"v"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseTagPrefix`

***

### releaseToGithub?

> `readonly` `optional` **releaseToGithub?**: `boolean`

Release to Github when running release tasks

#### Default

true if `repository` is set, `false` otherwise

***

### releaseToLocal?

> `readonly` `optional` **releaseToLocal?**: `boolean`

Release to Local archive folder when running release tasks

#### Default

```ts
true
```

***

### releaseToNpm?

> `readonly` `optional` **releaseToNpm?**: `boolean`

Automatically release to npm when new versions are introduced.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseToNpm`

***

### releaseTrigger?

> `readonly` `optional` **releaseTrigger?**: `ReleaseTrigger`

The release trigger to use.

#### Default

- Continuous releases (`ReleaseTrigger.continuous()`)

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseTrigger`

***

### ~~releaseWorkflow?~~

> `readonly` `optional` **releaseWorkflow?**: `boolean`

DEPRECATED: renamed to `release`.

#### Default

```ts
- true if not a subproject
```

#### Deprecated

see `release`.

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseWorkflow`

***

### releaseWorkflowEnv?

> `readonly` `optional` **releaseWorkflowEnv?**: `object`

Build environment variables for release workflows.

#### Index Signature

\[`key`: `string`\]: `string`

#### Default

```ts
{}
```

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseWorkflowEnv`

***

### releaseWorkflowName?

> `readonly` `optional` **releaseWorkflowName?**: `string`

The name of the default release workflow.

#### Default

```ts
"release"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseWorkflowName`

***

### releaseWorkflowSetupSteps?

> `readonly` `optional` **releaseWorkflowSetupSteps?**: `JobStep`[]

A set of workflow steps to execute in order to setup the workflow
container.

#### Inherited from

`typescript.TypeScriptProjectOptions.releaseWorkflowSetupSteps`

***

### renovatebot?

> `readonly` `optional` **renovatebot?**: `boolean`

Use renovatebot to handle dependency upgrades.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.renovatebot`

***

### renovatebotOptions?

> `readonly` `optional` **renovatebotOptions?**: `RenovatebotOptions`

Options for renovatebot.

#### Default

```ts
- default options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.renovatebotOptions`

***

### repoBuildPackageModel?

> `readonly` `optional` **repoBuildPackageModel?**: [`RepoBuildPackageModel`](../enumerations/RepoBuildPackageModel.md)

Type of repository, packaging, and release model to use.
Use value `RepoBuildPackageModel.SKIP_SETUP` to skip
any opinionated setup by the component.

#### Default

```ts
RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY
```

#### Featured

***

### repository?

> `readonly` `optional` **repository?**: `string`

The repository is the location where the actual code for your package lives.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

#### Inherited from

`typescript.TypeScriptProjectOptions.repository`

***

### repositoryDirectory?

> `readonly` `optional` **repositoryDirectory?**: `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo),
you can specify the directory in which it lives.

#### Inherited from

`typescript.TypeScriptProjectOptions.repositoryDirectory`

***

### sampleCode?

> `readonly` `optional` **sampleCode?**: `boolean`

Generate one-time sample in `src/` and `test/` if there are no files there.

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.sampleCode`

***

### scopedPackagesOptions?

> `readonly` `optional` **scopedPackagesOptions?**: `ScopedPackagesOptions`[]

Options for privately hosted scoped packages

#### Default

```ts
- fetch all scoped packages from the public npm registry
```

#### Inherited from

`typescript.TypeScriptProjectOptions.scopedPackagesOptions`

***

### ~~scripts?~~

> `readonly` `optional` **scripts?**: `object`

npm scripts to include. If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

#### Index Signature

\[`name`: `string`\]: `string`

#### Default

```ts
{}
```

#### Deprecated

use `project.addTask()` or `package.setScript()`

#### Inherited from

`typescript.TypeScriptProjectOptions.scripts`

***

### srcdir?

> `readonly` `optional` **srcdir?**: `string`

Typescript sources directory.

#### Default

```ts
"src"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.srcdir`

***

### stability?

> `readonly` `optional` **stability?**: `string`

Package's Stability

#### Inherited from

`typescript.TypeScriptProjectOptions.stability`

***

### stale?

> `readonly` `optional` **stale?**: `boolean`

Auto-close of stale issues and pull request. See `staleOptions` for options.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.stale`

***

### staleOptions?

> `readonly` `optional` **staleOptions?**: `StaleOptions`

Auto-close stale issues and pull requests. To disable set `stale` to `false`.

#### Default

- see defaults in `StaleOptions`

#### Inherited from

`typescript.TypeScriptProjectOptions.staleOptions`

***

### testdir?

> `readonly` `optional` **testdir?**: `string`

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

#### Default

```ts
"test"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.testdir`

***

### tsconfig?

> `readonly` `optional` **tsconfig?**: `TypescriptConfigOptions`

Custom TSConfig

#### Default

```ts
- default options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.tsconfig`

***

### tsconfigDev?

> `readonly` `optional` **tsconfigDev?**: `TypescriptConfigOptions`

Custom tsconfig options for the development tsconfig.json file (used for testing).

#### Default

```ts
- use the production tsconfig options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.tsconfigDev`

***

### tsconfigDevFile?

> `readonly` `optional` **tsconfigDevFile?**: `string`

The name of the development tsconfig.json file.

#### Default

```ts
"tsconfig.dev.json"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.tsconfigDevFile`

***

### tsJestOptions?

> `readonly` `optional` **tsJestOptions?**: `TsJestOptions`

Options for ts-jest

#### Inherited from

`typescript.TypeScriptProjectOptions.tsJestOptions`

***

### typescriptVersion?

> `readonly` `optional` **typescriptVersion?**: `string`

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

#### Default

```ts
"latest"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.typescriptVersion`

***

### versionrcOptions?

> `readonly` `optional` **versionrcOptions?**: `Record`\<`string`, `any`\>

Custom configuration used when creating changelog with commit-and-tag-version package.
Given values either append to default configuration or overwrite values in it.

#### Default

```ts
- standard configuration applicable for GitHub repositories
```

#### Inherited from

`typescript.TypeScriptProjectOptions.versionrcOptions`

***

### vscode?

> `readonly` `optional` **vscode?**: `boolean`

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

#### Default

```ts
true
```

#### Inherited from

`typescript.TypeScriptProjectOptions.vscode`

***

### workflowBootstrapSteps?

> `readonly` `optional` **workflowBootstrapSteps?**: `JobStep`[]

Workflow steps to use in order to bootstrap this repo.

#### Default

```ts
"yarn install --frozen-lockfile && yarn projen"
```

#### Inherited from

`typescript.TypeScriptProjectOptions.workflowBootstrapSteps`

***

### workflowContainerImage?

> `readonly` `optional` **workflowContainerImage?**: `string`

Container image to use for GitHub workflows.

#### Default

```ts
- default image
```

#### Inherited from

`typescript.TypeScriptProjectOptions.workflowContainerImage`

***

### workflowGitIdentity?

> `readonly` `optional` **workflowGitIdentity?**: `GitIdentity`

The git identity to use in workflows.

#### Default

```ts
- default GitHub Actions user
```

#### Inherited from

`typescript.TypeScriptProjectOptions.workflowGitIdentity`

***

### workflowNodeVersion?

> `readonly` `optional` **workflowNodeVersion?**: `string`

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

#### Default

- `minNodeVersion` if set, otherwise `lts/*`.

#### Inherited from

`typescript.TypeScriptProjectOptions.workflowNodeVersion`

***

### workflowPackageCache?

> `readonly` `optional` **workflowPackageCache?**: `boolean`

Enable Node.js package cache in GitHub workflows.

#### Default

```ts
false
```

#### Inherited from

`typescript.TypeScriptProjectOptions.workflowPackageCache`

***

### workflowRunsOn?

> `readonly` `optional` **workflowRunsOn?**: `string`[]

Github Runner selection labels

#### Default

```ts
["ubuntu-latest"]
```

#### Description

Defines a target Runner by labels

#### Throws

if both `runsOn` and `runsOnGroup` are specified

#### Inherited from

`typescript.TypeScriptProjectOptions.workflowRunsOn`

***

### workflowRunsOnGroup?

> `readonly` `optional` **workflowRunsOnGroup?**: `GroupRunnerOptions`

Github Runner Group selection options

#### Description

Defines a target Runner Group by name and/or labels

#### Throws

if both `runsOn` and `runsOnGroup` are specified

#### Inherited from

`typescript.TypeScriptProjectOptions.workflowRunsOnGroup`

***

### yarnBerryOptions?

> `readonly` `optional` **yarnBerryOptions?**: `YarnBerryOptions`

Options for Yarn Berry

#### Default

```ts
- Yarn Berry v4 with all default options
```

#### Inherited from

`typescript.TypeScriptProjectOptions.yarnBerryOptions`
