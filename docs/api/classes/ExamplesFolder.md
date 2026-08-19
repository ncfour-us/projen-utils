[@ncfour-us/projen-utils](../index.md) / ExamplesFolder

# Class: ExamplesFolder

This construct defines a folder to hold example programs for the project.

The source code, if present, in the examples folder will be included
in packaged resources but not compiled versions of that source code.

A separate "compile:examples" task is added to package.json.

Use command:
  pnpm compile:examples
to compile the examples programs.  Generated javascript files
will be placed in a lib folder under the examples folder.

To run the examples, use:
  node <examplesFolderName/lib/<exampleProgramName>.js

Example program source files are included in built packages.

Compiled examples files excluded from Git and excluded from a built package.

## Extends

- `Component`

## Constructors

### Constructor

> **new ExamplesFolder**(`project`, `options?`): `ExamplesFolder`

Creates a `DocsIndexSampleFile` construct and adds it to the project.

#### Parameters

##### project

`TypeScriptProject`

the project that this construct belongs to

##### options?

[`ExamplesFolderOptions`](../interfaces/ExamplesFolderOptions.md)

configuration options for the examples folder

#### Returns

`ExamplesFolder`

#### Overrides

`Component.constructor`

## Properties

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

`Component.node`

***

### project

> `readonly` **project**: `Project`

#### Inherited from

`Component.project`

## Methods

### postProjectCreation()

> **postProjectCreation**(`initProject`): `void`

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

#### Parameters

##### initProject

`InitProject`

Details about how the project was created, e.g. its type and the original CLI args.

#### Returns

`void`

#### Inherited from

`Component.postProjectCreation`

***

### postSynthesize()

> **postSynthesize**(): `void`

Called after synthesis. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

`Component.postSynthesize`

***

### preSynthesize()

> **preSynthesize**(): `void`

Called before synthesis.

#### Returns

`void`

#### Inherited from

`Component.preSynthesize`

***

### projectCreation()

> **projectCreation**(`initProject`): `void`

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

#### Parameters

##### initProject

`InitProject`

Details about how the project was created, e.g. its type and the original CLI args.

#### Returns

`void`

#### Inherited from

`Component.projectCreation`

***

### synthesize()

> **synthesize**(): `void`

Synthesizes files to the project output directory.

#### Returns

`void`

#### Inherited from

`Component.synthesize`

***

### toString()

> **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

`Component.toString`

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

`Component.with`

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

`Component.isComponent`

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

`Component.isConstruct`
