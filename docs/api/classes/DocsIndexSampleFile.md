[@ncfour-us/projen-utils](../index.md) / DocsIndexSampleFile

# Class: DocsIndexSampleFile

This construct defines a `docs/index.md` sample file for the project.

## Extends

- `SampleFile`

## Constructors

### Constructor

> **new DocsIndexSampleFile**(`project`, `options?`): `DocsIndexSampleFile`

Creates a `DocsIndexSampleFile` construct and adds it to the project.

#### Parameters

##### project

`Project`

the project that this construct belongs to

##### options?

[`DocsIndexSampleFileOptions`](../interfaces/DocsIndexSampleFileOptions.md)

#### Returns

`DocsIndexSampleFile`

#### Overrides

`SampleFile.constructor`

## Properties

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

`SampleFile.node`

***

### project

> `readonly` **project**: `Project`

#### Inherited from

`SampleFile.project`

## Methods

### postSynthesize()

> **postSynthesize**(): `void`

Called after synthesis. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

`SampleFile.postSynthesize`

***

### preSynthesize()

> **preSynthesize**(): `void`

Called before synthesis.

#### Returns

`void`

#### Inherited from

`SampleFile.preSynthesize`

***

### synthesize()

> **synthesize**(): `void`

Synthesizes files to the project output directory.

#### Returns

`void`

#### Inherited from

`SampleFile.synthesize`

***

### toString()

> **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

`SampleFile.toString`

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

`SampleFile.with`

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

`SampleFile.isComponent`

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

`SampleFile.isConstruct`
