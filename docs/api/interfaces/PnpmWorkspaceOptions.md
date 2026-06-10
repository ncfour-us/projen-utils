[@ncfour-us/projen-utils](../index.md) / PnpmWorkspaceOptions

# Interface: PnpmWorkspaceOptions

Used to configure the `PnpmWorkspace` construct

If any values are NOT set, then the associated markers
in the sample file will NOT be replaced.  This allows
an author to easily find and replace those values
when updating the file after the project has been
synthesized.

## Indexable

> \[`key`: `string`\]: `string` \| `number` \| `boolean` \| `object` \| `string`[] \| `undefined`

Additional options to add to the `pnpm-workspace.yaml` file

### Jsii

ignore

## Properties

### allowBuilds?

> `readonly` `optional` **allowBuilds?**: `object`

`allowBuilds` value for `pnpm-workspace.yaml`

#### Index Signature

\[`key`: `string`\]: `boolean`

***

### blockExoticSubdeps?

> `readonly` `optional` **blockExoticSubdeps?**: `number`

`blockExoticSubdeps` value for `pnpm-workspace.yaml`

***

### minimumReleaseAge?

> `readonly` `optional` **minimumReleaseAge?**: `number`

`minimumReleaseAge` value for `pnpm-workspace.yaml`

***

### packages?

> `readonly` `optional` **packages?**: `string`[]

package folders for the monorepo workspace

***

### trustPolicy?

> `readonly` `optional` **trustPolicy?**: `string`

`trustPolicy` value for `pnpm-workspace.yaml`
