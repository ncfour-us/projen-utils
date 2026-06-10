[@ncfour-us/projen-utils](../index.md) / RepoBuildPackageModel

# Enumeration: RepoBuildPackageModel

The build/packaging model to use for the `TypeScriptESMProject`.

There are generally two models supported, along with an "escape hatch"
to allow individual customization without using the **opinionated**
support provided with this project type.

The two models:
- local build/packaging - this model presumes that most work
  on the project is performed locally, including build, packaging,
  and distribution/publishing to remote registries/repositories
- github build/packaging - (not yet implemented) this model
  presumes that Github workflows are used to build/package/distribute/publish
  the project.

In all cases, "trunk-based" development is presumed as the Git
branching/merging strategy.

## Enumeration Members

### GITHUB\_BUILD\_PACKAGE

> **GITHUB\_BUILD\_PACKAGE**: `"GITHUB_BUILD_PACKAGE"`

Development uses a trunk-based development model.

No direct commits are expect on the `main` branch
which is the development trunk branch.

All new work or updates are done on feature branches
in locally cloned or forked repositories.  Changes
are managed through pull requests to the `main` branch.

All build/packaging/distribution/publishing is
driven through Github actions associated with
commits to the trunk (`main` branch).

A new release is published on each non-"chore(release)"
commit to the `main` branch.

A remote git repository **MUST** be used which will
run the Github actions associated with the repository.

Use the `releaseToGithub` (default: `true`) option to configure
whether a Github release is created on each release.

The NPM registry (npmjs.com) can be configured as an additional
distribution/publishing "target".
Use the `releaseToNpm` (default: `true` if
`repository` is set, `false` otherwise) option to configure.

When using this mode, trusted publishing from Github
to NPM **MUST** be configured and a Github App **MUST**
be defined to allow for background Github actions to run
with appropriate credentials.

***

### LOCAL\_BUILD\_PACKAGE

> **LOCAL\_BUILD\_PACKAGE**: `"LOCAL_BUILD_PACKAGE"`

All development/build/packaging/distribution/publishing
is driven from a local workstation or cloned repository.

A "local" repository/registry (just a folder on the local
system) is the default location to distribute/publish.
Use the `releaseToLocal` (default: `true`) option to configure.
Use the [localPackageArchiveDir](#typescriptesmprojectoptions) option to specify
the folder location.

A remote git repository can be configured/used and becomes
a distribution/publishing "target" for "release" operations.
Use the `releaseToGithub` (default: `false`) option to configure.

The NPM registry (npmjs.com) can be configured as an additional
distribution/publishing "target".
Use the `releaseToNpm` (default: `true` if
`repository` is set, `false` otherwise) option to configure.

When using this mode, the user **MUST** have active
credentials in the local environment
for the remote distribution locations
when "release" tasks are invoked.

***

### ~~LOCAL\_DEV\_BUILD\_REGISTRY~~

> **LOCAL\_DEV\_BUILD\_REGISTRY**: `"LOCAL_DEV_BUILD_REGISTRY"`

All development/build/packaging/distribution/publishing
is driven from a local workstation or cloned repository.

A "local" repository/registry (just a folder on the local
system) is the default location to distribute/publish.
Use the `releaseToLocal` (default: `true`) option to configure.
Use the [localPackageArchiveDir](#typescriptesmprojectoptions) option to specify
the folder location.

A remote git repository can be configured/used and becomes
a distribution/publishing "target" for "release" operations.
Use the `releaseToGithub` (default: `false`) option to configure.

The NPM registry (npmjs.com) can be configured as an additional
distribution/publishing "target".
Use the `releaseToNpm` (default: `true` if
`repository` is set, `false` otherwise) option to configure.

When using this mode, the user **MUST** have active
credentials in the local environment
for the remote distribution locations
when "release" tasks are invoked.

#### Deprecated

use `LOCAL_BUILD_PACKAGE`

***

### SKIP\_SETUP

> **SKIP\_SETUP**: `"SKIP_SETUP"`

Skip any build/release configuration that is
offered by the TypeScriptESMProject component

This is an "escape hatch" to allow the project
to define it's own customizations/configuration
for build/packaging and distribution/publishing
