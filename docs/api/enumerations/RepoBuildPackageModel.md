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

### LOCAL\_DEV\_BUILD\_REGISTRY

> **LOCAL\_DEV\_BUILD\_REGISTRY**: `1`

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

### SKIP\_SETUP

> **SKIP\_SETUP**: `0`

Skip any build/release configuration that is
offered by the TypeScriptESMProject component

This is an "escape hatch" to allow the project
to define it's own customizations/configuration
for build/packaging and distribution/publishing
