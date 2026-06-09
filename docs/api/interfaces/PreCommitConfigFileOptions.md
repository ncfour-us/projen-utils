[@ncfour-us/projen-utils](../index.md) / PreCommitConfigFileOptions

# Interface: PreCommitConfigFileOptions

Used to configure the PreCommitConfigFile construct

## Properties

### fileTypes?

> `readonly` `optional` **fileTypes?**: [`PreCommitConfigFileTypes`](../enumerations/PreCommitConfigFileTypes.md)[]

Array of file-types to configure the pre-commit file to handle.

***

### packageManager?

> `readonly` `optional` **packageManager?**: `NodePackageManager`

For JavaScript and/or TypeScript support, the package manager
defined for the project.
