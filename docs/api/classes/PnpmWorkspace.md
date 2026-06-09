[@ncfour-us/projen-utils](../index.md) / PnpmWorkspace

# Class: PnpmWorkspace

This construct defines a pnpm-workspace.yaml file for the project.

Only a subset of options for the pnpm-workspace.yaml file are
supported.  Opinionated default values for the supported options
are configured when not specified in the constructdor.

## Extends

- `YamlFile`

## Constructors

### Constructor

> **new PnpmWorkspace**(`project`, `options?`): `PnpmWorkspace`

Creates a `PnpmWorksapce` construct and adds it to the project.

The `pnpm-workspace.yaml` file is also added to the package ignore list.

#### Parameters

##### project

`Project`

##### options?

[`PnpmWorkspaceOptions`](../interfaces/PnpmWorkspaceOptions.md)

options to set various settings in pnpm-workspace.yaml

#### Returns

`PnpmWorkspace`

#### Overrides

`YamlFile.constructor`

## Properties

### absolutePath

> `readonly` **absolutePath**: `string`

The absolute path of this file.

#### Inherited from

`YamlFile.absolutePath`

***

### executable

> **executable**: `boolean`

Indicates if the file should be marked as executable

#### Inherited from

`YamlFile.executable`

***

### lineWidth

> **lineWidth**: `number`

Maximum line width (set to 0 to disable folding).

#### Inherited from

`YamlFile.lineWidth`

***

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

`YamlFile.node`

***

### omitEmpty

> `readonly` **omitEmpty**: `boolean`

Indicates if empty objects and arrays are omitted from the output object.

#### Inherited from

`YamlFile.omitEmpty`

***

### path

> `readonly` **path**: `string`

The file path, relative to the project's outdir.

#### Inherited from

`YamlFile.path`

***

### project

> `readonly` **project**: `Project`

#### Inherited from

`YamlFile.project`

***

### readonly

> **readonly**: `boolean`

Indicates if the file should be read-only or read-write.

#### Inherited from

`YamlFile.readonly`

## Accessors

### changed

#### Get Signature

> **get** **changed**(): `boolean` \| `undefined`

Indicates if the file has been changed during synthesis. This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

##### Returns

`boolean` \| `undefined`

#### Inherited from

`YamlFile.changed`

***

### marker

#### Get Signature

> **get** **marker**(): `string` \| `undefined`

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

##### Returns

`string` \| `undefined`

#### Inherited from

`YamlFile.marker`

## Methods

### addDeletionOverride()

> **addDeletionOverride**(`path`): `void`

Syntactic sugar for `addOverride(path, undefined)`.

#### Parameters

##### path

`string`

The path of the value to delete

#### Returns

`void`

#### Inherited from

`YamlFile.addDeletionOverride`

***

### addOverride()

> **addOverride**(`path`, `value`): `void`

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`` itself will need to be escaped.

For example,
```typescript
project.tsconfig.file.addOverride('compilerOptions.alwaysStrict', true);
project.tsconfig.file.addOverride('compilerOptions.lib', ['dom', 'dom.iterable', 'esnext']);
```
would add the overrides
```json
"compilerOptions": {
  "alwaysStrict": true,
  "lib": [
    "dom",
    "dom.iterable",
    "esnext"
  ]
  ...
}
...
```

#### Parameters

##### path

`string`

The path of the property, you can use dot notation to
       override values in complex types. Any intermediate keys
       will be created as needed.

##### value

`any`

The value. Could be primitive or complex.

#### Returns

`void`

#### Inherited from

`YamlFile.addOverride`

***

### addToArray()

> **addToArray**(`path`, ...`values`): `void`

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`` itself will need to be escaped.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2020"]
  ...
}
...
```

```typescript
project.tsconfig.file.addToArray('compilerOptions.exclude', 'coverage');
project.tsconfig.file.addToArray('compilerOptions.lib', 'dom', 'dom.iterable', 'esnext');
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["es2020", "dom", "dom.iterable", "esnext"]
  ...
}
...
```

#### Parameters

##### path

`string`

The path of the property, you can use dot notation to
       att to arrays in complex types. Any intermediate keys
       will be created as needed.

##### values

...`any`

The values to add. Could be primitive or complex.

#### Returns

`void`

#### Inherited from

`YamlFile.addToArray`

***

### diff()

> **diff**(`colorize?`, `contextLines?`): `string`[] \| `undefined`

Returns a unified diff of the old and new file contents with context lines
and hunk headers. Only available after synthesis.

This is an expensive operation and should only be used on non time-critical
code paths, like debug output.

#### Parameters

##### colorize?

`boolean`

Whether to colorize the diff output.

##### contextLines?

`number`

Number of context lines around changes.

#### Returns

`string`[] \| `undefined`

the diff as an array of lines, or `undefined` if the file was
not changed or has not been synthesized yet.

#### Default

```ts
false
```

#### Default

```ts
3
```

#### Inherited from

`YamlFile.diff`

***

### patch()

> **patch**(...`patches`): `void`

Applies an RFC 6902 JSON-patch to the synthesized object file.
See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2020"]
  ...
}
...
```

```typescript
project.tsconfig.file.patch(JsonPatch.add("/compilerOptions/exclude/-", "coverage"));
project.tsconfig.file.patch(JsonPatch.replace("/compilerOptions/lib", ["dom", "dom.iterable", "esnext"]));
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["dom", "dom.iterable", "esnext"]
  ...
}
...
```

#### Parameters

##### patches

...`JsonPatch`[]

The patch operations to apply

#### Returns

`void`

#### Inherited from

`YamlFile.patch`

***

### postSynthesize()

> **postSynthesize**(): `void`

Called after synthesis. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

`YamlFile.postSynthesize`

***

### preSynthesize()

> **preSynthesize**(): `void`

Called before synthesis.

#### Returns

`void`

#### Inherited from

`YamlFile.preSynthesize`

***

### synthesize()

> **synthesize**(): `void`

Writes the file to the project's output directory

#### Returns

`void`

#### Inherited from

`YamlFile.synthesize`

***

### synthesizeContent()

> `protected` **synthesizeContent**(`resolver`): `string` \| `undefined`

#### Parameters

##### resolver

`IResolver`

#### Returns

`string` \| `undefined`

#### Inherited from

`YamlFile.synthesizeContent`

***

### toString()

> **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

`YamlFile.toString`

***

### with()

> **with**(...`mixins`): `IConstruct`

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

#### Parameters

##### mixins

...`IMixin`[]

The mixins to apply

#### Returns

`IConstruct`

This construct for chaining

#### Inherited from

`YamlFile.with`

***

### isComponent()

> `static` **isComponent**(`x`): `x is Component`

Test whether the given construct is a component.

#### Parameters

##### x

`any`

#### Returns

`x is Component`

#### Inherited from

`YamlFile.isComponent`

***

### isConstruct()

> `static` **isConstruct**(`x`): `x is Construct`

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

#### Parameters

##### x

`any`

Any object

#### Returns

`x is Construct`

true if `x` is an object created from a class which extends `Construct`.

#### Inherited from

`YamlFile.isConstruct`
