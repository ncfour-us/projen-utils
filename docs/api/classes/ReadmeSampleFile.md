[@ncfour-us/projen-utils](../index.md) / ReadmeSampleFile

# Class: ReadmeSampleFile

This construct defines a README.md sample file for the project.

By creating this file, the `README.md` file at the top of the
project will contain a set of sections which are typical
for TypeScript projects.

In many cases, this construct will not be provided on the
initial creation of the project.  This results in the default
`README.md` file being created (as a sample file which is
only created if the file does not already exist).

To replace the default file with the `README.md` file (sample)
provided by this construct, perform the following steps:
1) remove the current `README.md` file (use `rm` or `git rm`)
1) add this construct to your `.projenrc.ts` file
1) re-run `pnpm projen` to update configuration files

At this point, the `README.md` file at the top of the project
should contain the text provided by this construct.

Complete the change by committing the updates with `git commit`.

## Extends

- `SampleFile`

## Constructors

### Constructor

> **new ReadmeSampleFile**(`project`, `options?`): `ReadmeSampleFile`

Creates a `ReadmeSampleFile` construct and adds it to the project.

#### Parameters

##### project

`Project`

the project that this construct belongs to

##### options?

[`ReadmeSampleFileOptions`](../interfaces/ReadmeSampleFileOptions.md)

options to replace place-holders in the file

#### Returns

`ReadmeSampleFile`

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

## Accessors

### sampleReadmeProps

#### Get Signature

> **get** **sampleReadmeProps**(): `SampleReadmeProps`

This getter could be used to pass the result of creating this Construct
to another project's constructor.

##### Returns

`SampleReadmeProps`

SampleReadmeProps to be passed to the `readme` property on Project constructors

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
