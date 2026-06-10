[@ncfour-us/projen-utils](../index.md) / ReadmeSampleFileOptions

# Interface: ReadmeSampleFileOptions

Used to configure the ReadmeSampleFile construct

If values are **NOT** set, then the associated markers
in the sample file will **NOT be replaced**.  This allows
an author to easily find and replace those values
when updating the file after the project has been
synthesized.

If neither `namespace` (deprecated) or `npmScope`
are specified, then the package is presumed to **NOT**
have a NPM scope and is omitted from the generated
`README.md` text.

If `authorGithubUser` is specified and `organization`
is **NOT** specified, then the project is presumed
to be a personal project and the Github userid is
used for the organization name.

## Properties

### author?

> `readonly` `optional` **author?**: `string`

Author of the project.

***

### authorEmail?

> `readonly` `optional` **authorEmail?**: `string`

Author e-mail for the project.

***

### authorGithubUser?

> `readonly` `optional` **authorGithubUser?**: `string`

Author github user for the project.

***

### filename?

> `readonly` `optional` **filename?**: `string`

filename of the Readme sample file

***

### license?

> `readonly` `optional` **license?**: `string`

Designated license for the project.

***

### ~~namespace?~~

> `readonly` `optional` **namespace?**: `string`

Namespace/organization/user associated with the Git repository.

#### Deprecated

use `npmScope` instead

***

### npmScope?

> `readonly` `optional` **npmScope?**: `string`

NPM scope for the package.

***

### organization?

> `readonly` `optional` **organization?**: `string`

Namespace/organization/user associated with the Git repository.

***

### project?

> `readonly` `optional` **project?**: `string`

Name of the Git repository.
