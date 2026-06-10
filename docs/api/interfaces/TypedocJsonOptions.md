[@ncfour-us/projen-utils](../index.md) / TypedocJsonOptions

# Interface: TypedocJsonOptions

Used to configure the TypedocJson construct

## Indexable

> \[`key`: `string`\]: `string` \| `number` \| `boolean` \| `object` \| `string`[] \| `undefined`

Additional options to add to the `pnpm-workspace.yaml` file

### Jsii

ignore

## Properties

### entryPoints?

> `readonly` `optional` **entryPoints?**: `string`[]

source file entry point(s) which define the API

If not specified, Typedoc will use information from `package.json`
