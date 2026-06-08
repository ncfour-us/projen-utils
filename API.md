# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocsIndexSampleFile <a name="DocsIndexSampleFile" id="@ncfour-us/projen-utils.DocsIndexSampleFile"></a>

This construct defines a `docs/index.md` sample file for the project.

#### Initializers <a name="Initializers" id="@ncfour-us/projen-utils.DocsIndexSampleFile.Initializer"></a>

```typescript
import { DocsIndexSampleFile } from '@ncfour-us/projen-utils'

new DocsIndexSampleFile(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.DocsIndexSampleFile.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | the project that this construct belongs to. |

---

##### `project`<sup>Required</sup> <a name="project" id="@ncfour-us/projen-utils.DocsIndexSampleFile.Initializer.parameter.project"></a>

- *Type:* projen.Project

the project that this construct belongs to.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.DocsIndexSampleFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ncfour-us/projen-utils.DocsIndexSampleFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@ncfour-us/projen-utils.DocsIndexSampleFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@ncfour-us/projen-utils.DocsIndexSampleFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@ncfour-us/projen-utils.DocsIndexSampleFile.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@ncfour-us/projen-utils.DocsIndexSampleFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@ncfour-us/projen-utils.DocsIndexSampleFile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@ncfour-us/projen-utils.DocsIndexSampleFile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postSynthesize` <a name="postSynthesize" id="@ncfour-us/projen-utils.DocsIndexSampleFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@ncfour-us/projen-utils.DocsIndexSampleFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@ncfour-us/projen-utils.DocsIndexSampleFile.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.DocsIndexSampleFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ncfour-us/projen-utils.DocsIndexSampleFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@ncfour-us/projen-utils.DocsIndexSampleFile.isConstruct"></a>

```typescript
import { DocsIndexSampleFile } from '@ncfour-us/projen-utils'

DocsIndexSampleFile.isConstruct(x: any)
```

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

###### `x`<sup>Required</sup> <a name="x" id="@ncfour-us/projen-utils.DocsIndexSampleFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@ncfour-us/projen-utils.DocsIndexSampleFile.isComponent"></a>

```typescript
import { DocsIndexSampleFile } from '@ncfour-us/projen-utils'

DocsIndexSampleFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@ncfour-us/projen-utils.DocsIndexSampleFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.DocsIndexSampleFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ncfour-us/projen-utils.DocsIndexSampleFile.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ncfour-us/projen-utils.DocsIndexSampleFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@ncfour-us/projen-utils.DocsIndexSampleFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### PnpmWorkspace <a name="PnpmWorkspace" id="@ncfour-us/projen-utils.PnpmWorkspace"></a>

This construct defines a pnpm-workspace.yaml file for the project.

Only a subset of options for the pnpm-workspace.yaml file are
supported.  Opinionated default values for the supported options
are configured when not specified in the constructdor.

#### Initializers <a name="Initializers" id="@ncfour-us/projen-utils.PnpmWorkspace.Initializer"></a>

```typescript
import { PnpmWorkspace } from '@ncfour-us/projen-utils'

new PnpmWorkspace(project: Project, options?: PnpmWorkspaceOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.Initializer.parameter.options">options</a></code> | <code><a href="#@ncfour-us/projen-utils.PnpmWorkspaceOptions">PnpmWorkspaceOptions</a></code> | options to set various settings in pnpm-workspace.yaml. |

---

##### `project`<sup>Required</sup> <a name="project" id="@ncfour-us/projen-utils.PnpmWorkspace.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@ncfour-us/projen-utils.PnpmWorkspace.Initializer.parameter.options"></a>

- *Type:* <a href="#@ncfour-us/projen-utils.PnpmWorkspaceOptions">PnpmWorkspaceOptions</a>

options to set various settings in pnpm-workspace.yaml.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.diff">diff</a></code> | Returns a unified diff of the old and new file contents with context lines and hunk headers. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.addOverride">addOverride</a></code> | Adds an override to the synthesized object file. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.addToArray">addToArray</a></code> | Adds to an array in the synthesized object file. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.patch">patch</a></code> | Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information. |

---

##### `toString` <a name="toString" id="@ncfour-us/projen-utils.PnpmWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@ncfour-us/projen-utils.PnpmWorkspace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@ncfour-us/projen-utils.PnpmWorkspace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postSynthesize` <a name="postSynthesize" id="@ncfour-us/projen-utils.PnpmWorkspace.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@ncfour-us/projen-utils.PnpmWorkspace.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@ncfour-us/projen-utils.PnpmWorkspace.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `diff` <a name="diff" id="@ncfour-us/projen-utils.PnpmWorkspace.diff"></a>

```typescript
public diff(colorize?: boolean, contextLines?: number): string[]
```

Returns a unified diff of the old and new file contents with context lines and hunk headers.

Only available after synthesis.

This is an expensive operation and should only be used on non time-critical
code paths, like debug output.

###### `colorize`<sup>Optional</sup> <a name="colorize" id="@ncfour-us/projen-utils.PnpmWorkspace.diff.parameter.colorize"></a>

- *Type:* boolean

Whether to colorize the diff output.

---

###### `contextLines`<sup>Optional</sup> <a name="contextLines" id="@ncfour-us/projen-utils.PnpmWorkspace.diff.parameter.contextLines"></a>

- *Type:* number

Number of context lines around changes.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@ncfour-us/projen-utils.PnpmWorkspace.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@ncfour-us/projen-utils.PnpmWorkspace.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addOverride` <a name="addOverride" id="@ncfour-us/projen-utils.PnpmWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

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

###### `path`<sup>Required</sup> <a name="path" id="@ncfour-us/projen-utils.PnpmWorkspace.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@ncfour-us/projen-utils.PnpmWorkspace.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addToArray` <a name="addToArray" id="@ncfour-us/projen-utils.PnpmWorkspace.addToArray"></a>

```typescript
public addToArray(path: string, values: ...any[]): void
```

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

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

###### `path`<sup>Required</sup> <a name="path" id="@ncfour-us/projen-utils.PnpmWorkspace.addToArray.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to att to arrays in complex types.

Any intermediate keys
will be created as needed.

---

###### `values`<sup>Required</sup> <a name="values" id="@ncfour-us/projen-utils.PnpmWorkspace.addToArray.parameter.values"></a>

- *Type:* ...any[]

The values to add.

Could be primitive or complex.

---

##### `patch` <a name="patch" id="@ncfour-us/projen-utils.PnpmWorkspace.patch"></a>

```typescript
public patch(patches: ...JsonPatch[]): void
```

Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

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

###### `patches`<sup>Required</sup> <a name="patches" id="@ncfour-us/projen-utils.PnpmWorkspace.patch.parameter.patches"></a>

- *Type:* ...projen.JsonPatch[]

The patch operations to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@ncfour-us/projen-utils.PnpmWorkspace.isConstruct"></a>

```typescript
import { PnpmWorkspace } from '@ncfour-us/projen-utils'

PnpmWorkspace.isConstruct(x: any)
```

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

###### `x`<sup>Required</sup> <a name="x" id="@ncfour-us/projen-utils.PnpmWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@ncfour-us/projen-utils.PnpmWorkspace.isComponent"></a>

```typescript
import { PnpmWorkspace } from '@ncfour-us/projen-utils'

PnpmWorkspace.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@ncfour-us/projen-utils.PnpmWorkspace.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Indicates if empty objects and arrays are omitted from the output object. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspace.property.lineWidth">lineWidth</a></code> | <code>number</code> | Maximum line width (set to 0 to disable folding). |

---

##### `node`<sup>Required</sup> <a name="node" id="@ncfour-us/projen-utils.PnpmWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@ncfour-us/projen-utils.PnpmWorkspace.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="@ncfour-us/projen-utils.PnpmWorkspace.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="@ncfour-us/projen-utils.PnpmWorkspace.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="@ncfour-us/projen-utils.PnpmWorkspace.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="@ncfour-us/projen-utils.PnpmWorkspace.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="@ncfour-us/projen-utils.PnpmWorkspace.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="@ncfour-us/projen-utils.PnpmWorkspace.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `omitEmpty`<sup>Required</sup> <a name="omitEmpty" id="@ncfour-us/projen-utils.PnpmWorkspace.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean

Indicates if empty objects and arrays are omitted from the output object.

---

##### `lineWidth`<sup>Required</sup> <a name="lineWidth" id="@ncfour-us/projen-utils.PnpmWorkspace.property.lineWidth"></a>

```typescript
public readonly lineWidth: number;
```

- *Type:* number

Maximum line width (set to 0 to disable folding).

---


### PreCommitConfigFile <a name="PreCommitConfigFile" id="@ncfour-us/projen-utils.PreCommitConfigFile"></a>

This construct sets up the project to include a `.pre-commit-config.yaml` file at the top of the project.

The `.pre-commit-config.yaml` file will include checks for
git-commit messages (Commitizen) and default large files, end-of-file,
and check-yaml checks.

To activate `pre-commit` for the project/repository, follow these steps:
- install the pre-commit tool (see [pre-commit](https://pre-commit.com) for instructions)
- run the tool explicitly (using the pre-commit command) OR
- (preferred) install the pre-commit git hooks using command:
pre-commit install --hook-type commit-msg --hook-type pre-commit

Subsequent `git commit` commands issued after installing the git hooks
will run the specified checks on any files included in the commit.

The versions of pre-commit hooks configured into the `.pre-commit-config.yaml`
file can be updated by using `construct.addOverride()` calls to change
values in the generated file.

For example, to override the repository version for the Commitizen
pre-commit hook (usually the first hook in the configuraiton file)
place the following in your `.projenrc.ts` file:

```typescript
const precommitConfig = project.tryFindObjectFile('.pre-commit-config.yaml');
precommitConfig?.addOverride('repos.0.rev', 'v4.16.3');
```
The revision in `.pre-commit-config.yaml` for that repository will
be replaced with the value specified.

#### Initializers <a name="Initializers" id="@ncfour-us/projen-utils.PreCommitConfigFile.Initializer"></a>

```typescript
import { PreCommitConfigFile } from '@ncfour-us/projen-utils'

new PreCommitConfigFile(scope: IConstruct, options?: PreCommitConfigFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | the project that this construct belongs to. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.Initializer.parameter.options">options</a></code> | <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFileOptions">PreCommitConfigFileOptions</a></code> | options to configure the file. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ncfour-us/projen-utils.PreCommitConfigFile.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

the project that this construct belongs to.

---

##### `options`<sup>Optional</sup> <a name="options" id="@ncfour-us/projen-utils.PreCommitConfigFile.Initializer.parameter.options"></a>

- *Type:* <a href="#@ncfour-us/projen-utils.PreCommitConfigFileOptions">PreCommitConfigFileOptions</a>

options to configure the file.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.diff">diff</a></code> | Returns a unified diff of the old and new file contents with context lines and hunk headers. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.addOverride">addOverride</a></code> | Adds an override to the synthesized object file. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.addToArray">addToArray</a></code> | Adds to an array in the synthesized object file. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.patch">patch</a></code> | Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information. |

---

##### `toString` <a name="toString" id="@ncfour-us/projen-utils.PreCommitConfigFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@ncfour-us/projen-utils.PreCommitConfigFile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@ncfour-us/projen-utils.PreCommitConfigFile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postSynthesize` <a name="postSynthesize" id="@ncfour-us/projen-utils.PreCommitConfigFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@ncfour-us/projen-utils.PreCommitConfigFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@ncfour-us/projen-utils.PreCommitConfigFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `diff` <a name="diff" id="@ncfour-us/projen-utils.PreCommitConfigFile.diff"></a>

```typescript
public diff(colorize?: boolean, contextLines?: number): string[]
```

Returns a unified diff of the old and new file contents with context lines and hunk headers.

Only available after synthesis.

This is an expensive operation and should only be used on non time-critical
code paths, like debug output.

###### `colorize`<sup>Optional</sup> <a name="colorize" id="@ncfour-us/projen-utils.PreCommitConfigFile.diff.parameter.colorize"></a>

- *Type:* boolean

Whether to colorize the diff output.

---

###### `contextLines`<sup>Optional</sup> <a name="contextLines" id="@ncfour-us/projen-utils.PreCommitConfigFile.diff.parameter.contextLines"></a>

- *Type:* number

Number of context lines around changes.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@ncfour-us/projen-utils.PreCommitConfigFile.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@ncfour-us/projen-utils.PreCommitConfigFile.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addOverride` <a name="addOverride" id="@ncfour-us/projen-utils.PreCommitConfigFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

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

###### `path`<sup>Required</sup> <a name="path" id="@ncfour-us/projen-utils.PreCommitConfigFile.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@ncfour-us/projen-utils.PreCommitConfigFile.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addToArray` <a name="addToArray" id="@ncfour-us/projen-utils.PreCommitConfigFile.addToArray"></a>

```typescript
public addToArray(path: string, values: ...any[]): void
```

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

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

###### `path`<sup>Required</sup> <a name="path" id="@ncfour-us/projen-utils.PreCommitConfigFile.addToArray.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to att to arrays in complex types.

Any intermediate keys
will be created as needed.

---

###### `values`<sup>Required</sup> <a name="values" id="@ncfour-us/projen-utils.PreCommitConfigFile.addToArray.parameter.values"></a>

- *Type:* ...any[]

The values to add.

Could be primitive or complex.

---

##### `patch` <a name="patch" id="@ncfour-us/projen-utils.PreCommitConfigFile.patch"></a>

```typescript
public patch(patches: ...JsonPatch[]): void
```

Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

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

###### `patches`<sup>Required</sup> <a name="patches" id="@ncfour-us/projen-utils.PreCommitConfigFile.patch.parameter.patches"></a>

- *Type:* ...projen.JsonPatch[]

The patch operations to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@ncfour-us/projen-utils.PreCommitConfigFile.isConstruct"></a>

```typescript
import { PreCommitConfigFile } from '@ncfour-us/projen-utils'

PreCommitConfigFile.isConstruct(x: any)
```

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

###### `x`<sup>Required</sup> <a name="x" id="@ncfour-us/projen-utils.PreCommitConfigFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@ncfour-us/projen-utils.PreCommitConfigFile.isComponent"></a>

```typescript
import { PreCommitConfigFile } from '@ncfour-us/projen-utils'

PreCommitConfigFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@ncfour-us/projen-utils.PreCommitConfigFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Indicates if empty objects and arrays are omitted from the output object. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFile.property.lineWidth">lineWidth</a></code> | <code>number</code> | Maximum line width (set to 0 to disable folding). |

---

##### `node`<sup>Required</sup> <a name="node" id="@ncfour-us/projen-utils.PreCommitConfigFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@ncfour-us/projen-utils.PreCommitConfigFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="@ncfour-us/projen-utils.PreCommitConfigFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="@ncfour-us/projen-utils.PreCommitConfigFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="@ncfour-us/projen-utils.PreCommitConfigFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="@ncfour-us/projen-utils.PreCommitConfigFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="@ncfour-us/projen-utils.PreCommitConfigFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="@ncfour-us/projen-utils.PreCommitConfigFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `omitEmpty`<sup>Required</sup> <a name="omitEmpty" id="@ncfour-us/projen-utils.PreCommitConfigFile.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean

Indicates if empty objects and arrays are omitted from the output object.

---

##### `lineWidth`<sup>Required</sup> <a name="lineWidth" id="@ncfour-us/projen-utils.PreCommitConfigFile.property.lineWidth"></a>

```typescript
public readonly lineWidth: number;
```

- *Type:* number

Maximum line width (set to 0 to disable folding).

---


### ReadmeSampleFile <a name="ReadmeSampleFile" id="@ncfour-us/projen-utils.ReadmeSampleFile"></a>

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

#### Initializers <a name="Initializers" id="@ncfour-us/projen-utils.ReadmeSampleFile.Initializer"></a>

```typescript
import { ReadmeSampleFile } from '@ncfour-us/projen-utils'

new ReadmeSampleFile(project: Project, options?: ReadmeSampleFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFile.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | the project that this construct belongs to. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFile.Initializer.parameter.options">options</a></code> | <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFileOptions">ReadmeSampleFileOptions</a></code> | options to replace place-holders in the file. |

---

##### `project`<sup>Required</sup> <a name="project" id="@ncfour-us/projen-utils.ReadmeSampleFile.Initializer.parameter.project"></a>

- *Type:* projen.Project

the project that this construct belongs to.

---

##### `options`<sup>Optional</sup> <a name="options" id="@ncfour-us/projen-utils.ReadmeSampleFile.Initializer.parameter.options"></a>

- *Type:* <a href="#@ncfour-us/projen-utils.ReadmeSampleFileOptions">ReadmeSampleFileOptions</a>

options to replace place-holders in the file.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFile.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@ncfour-us/projen-utils.ReadmeSampleFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@ncfour-us/projen-utils.ReadmeSampleFile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@ncfour-us/projen-utils.ReadmeSampleFile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postSynthesize` <a name="postSynthesize" id="@ncfour-us/projen-utils.ReadmeSampleFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@ncfour-us/projen-utils.ReadmeSampleFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@ncfour-us/projen-utils.ReadmeSampleFile.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@ncfour-us/projen-utils.ReadmeSampleFile.isConstruct"></a>

```typescript
import { ReadmeSampleFile } from '@ncfour-us/projen-utils'

ReadmeSampleFile.isConstruct(x: any)
```

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

###### `x`<sup>Required</sup> <a name="x" id="@ncfour-us/projen-utils.ReadmeSampleFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@ncfour-us/projen-utils.ReadmeSampleFile.isComponent"></a>

```typescript
import { ReadmeSampleFile } from '@ncfour-us/projen-utils'

ReadmeSampleFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@ncfour-us/projen-utils.ReadmeSampleFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFile.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFile.property.sampleReadmeProps">sampleReadmeProps</a></code> | <code>projen.SampleReadmeProps</code> | This getter could be used to pass the result of creating this Construct to another project's constructor. |

---

##### `node`<sup>Required</sup> <a name="node" id="@ncfour-us/projen-utils.ReadmeSampleFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@ncfour-us/projen-utils.ReadmeSampleFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `sampleReadmeProps`<sup>Required</sup> <a name="sampleReadmeProps" id="@ncfour-us/projen-utils.ReadmeSampleFile.property.sampleReadmeProps"></a>

```typescript
public readonly sampleReadmeProps: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps

This getter could be used to pass the result of creating this Construct to another project's constructor.

---


### TypedocJson <a name="TypedocJson" id="@ncfour-us/projen-utils.TypedocJson"></a>

This construct defines a `typedoc.json` file for the project which is used by the `typedoc` tool when generating API documentation for the project.

#### Initializers <a name="Initializers" id="@ncfour-us/projen-utils.TypedocJson.Initializer"></a>

```typescript
import { TypedocJson } from '@ncfour-us/projen-utils'

new TypedocJson(project: Project, options: TypedocJsonOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | the project that this construct belongs to. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.Initializer.parameter.options">options</a></code> | <code><a href="#@ncfour-us/projen-utils.TypedocJsonOptions">TypedocJsonOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@ncfour-us/projen-utils.TypedocJson.Initializer.parameter.project"></a>

- *Type:* projen.Project

the project that this construct belongs to.

---

##### `options`<sup>Required</sup> <a name="options" id="@ncfour-us/projen-utils.TypedocJson.Initializer.parameter.options"></a>

- *Type:* <a href="#@ncfour-us/projen-utils.TypedocJsonOptions">TypedocJsonOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.diff">diff</a></code> | Returns a unified diff of the old and new file contents with context lines and hunk headers. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.addOverride">addOverride</a></code> | Adds an override to the synthesized object file. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.addToArray">addToArray</a></code> | Adds to an array in the synthesized object file. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.patch">patch</a></code> | Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information. |

---

##### `toString` <a name="toString" id="@ncfour-us/projen-utils.TypedocJson.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@ncfour-us/projen-utils.TypedocJson.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@ncfour-us/projen-utils.TypedocJson.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postSynthesize` <a name="postSynthesize" id="@ncfour-us/projen-utils.TypedocJson.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@ncfour-us/projen-utils.TypedocJson.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@ncfour-us/projen-utils.TypedocJson.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `diff` <a name="diff" id="@ncfour-us/projen-utils.TypedocJson.diff"></a>

```typescript
public diff(colorize?: boolean, contextLines?: number): string[]
```

Returns a unified diff of the old and new file contents with context lines and hunk headers.

Only available after synthesis.

This is an expensive operation and should only be used on non time-critical
code paths, like debug output.

###### `colorize`<sup>Optional</sup> <a name="colorize" id="@ncfour-us/projen-utils.TypedocJson.diff.parameter.colorize"></a>

- *Type:* boolean

Whether to colorize the diff output.

---

###### `contextLines`<sup>Optional</sup> <a name="contextLines" id="@ncfour-us/projen-utils.TypedocJson.diff.parameter.contextLines"></a>

- *Type:* number

Number of context lines around changes.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@ncfour-us/projen-utils.TypedocJson.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@ncfour-us/projen-utils.TypedocJson.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addOverride` <a name="addOverride" id="@ncfour-us/projen-utils.TypedocJson.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

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

###### `path`<sup>Required</sup> <a name="path" id="@ncfour-us/projen-utils.TypedocJson.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@ncfour-us/projen-utils.TypedocJson.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addToArray` <a name="addToArray" id="@ncfour-us/projen-utils.TypedocJson.addToArray"></a>

```typescript
public addToArray(path: string, values: ...any[]): void
```

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

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

###### `path`<sup>Required</sup> <a name="path" id="@ncfour-us/projen-utils.TypedocJson.addToArray.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to att to arrays in complex types.

Any intermediate keys
will be created as needed.

---

###### `values`<sup>Required</sup> <a name="values" id="@ncfour-us/projen-utils.TypedocJson.addToArray.parameter.values"></a>

- *Type:* ...any[]

The values to add.

Could be primitive or complex.

---

##### `patch` <a name="patch" id="@ncfour-us/projen-utils.TypedocJson.patch"></a>

```typescript
public patch(patches: ...JsonPatch[]): void
```

Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

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

###### `patches`<sup>Required</sup> <a name="patches" id="@ncfour-us/projen-utils.TypedocJson.patch.parameter.patches"></a>

- *Type:* ...projen.JsonPatch[]

The patch operations to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@ncfour-us/projen-utils.TypedocJson.isConstruct"></a>

```typescript
import { TypedocJson } from '@ncfour-us/projen-utils'

TypedocJson.isConstruct(x: any)
```

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

###### `x`<sup>Required</sup> <a name="x" id="@ncfour-us/projen-utils.TypedocJson.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@ncfour-us/projen-utils.TypedocJson.isComponent"></a>

```typescript
import { TypedocJson } from '@ncfour-us/projen-utils'

TypedocJson.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@ncfour-us/projen-utils.TypedocJson.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Indicates if empty objects and arrays are omitted from the output object. |
| <code><a href="#@ncfour-us/projen-utils.TypedocJson.property.supportsComments">supportsComments</a></code> | <code>boolean</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ncfour-us/projen-utils.TypedocJson.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@ncfour-us/projen-utils.TypedocJson.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="@ncfour-us/projen-utils.TypedocJson.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="@ncfour-us/projen-utils.TypedocJson.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="@ncfour-us/projen-utils.TypedocJson.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="@ncfour-us/projen-utils.TypedocJson.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="@ncfour-us/projen-utils.TypedocJson.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="@ncfour-us/projen-utils.TypedocJson.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `omitEmpty`<sup>Required</sup> <a name="omitEmpty" id="@ncfour-us/projen-utils.TypedocJson.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean

Indicates if empty objects and arrays are omitted from the output object.

---

##### `supportsComments`<sup>Required</sup> <a name="supportsComments" id="@ncfour-us/projen-utils.TypedocJson.property.supportsComments"></a>

```typescript
public readonly supportsComments: boolean;
```

- *Type:* boolean

---


### TypeScriptESMProject <a name="TypeScriptESMProject" id="@ncfour-us/projen-utils.TypeScriptESMProject"></a>

TypeScript ESM project.

This Project type extends `TypeScriptProject` to set up the project
as an ESM project rather than CommonJS.  This includes adjustments
to building/running the `projen` synthesize operation, adjustments
to `package.json`, and configuration for `jest` test running in ESM
mode.

Additional features available:
- use ESLint flat config rather than JSON config
- use Prettier flat config rather than JSON config
- add a `version.ts` helper to ease the referencing of the package
  version in package code.
- enable the project for using the `pre-commit` tool
- activate a local/github build/packaging mode for the project
- activate API documentation generation during builds (uses `typedoc`)
- create a sample `index.md` file in the `docs` folder (for usage guide,
  examples, and more detailed information than what is found in the `README.md`)
- create a more detailed sample `README.md` file

#### Initializers <a name="Initializers" id="@ncfour-us/projen-utils.TypeScriptESMProject.Initializer"></a>

```typescript
import { TypeScriptESMProject } from '@ncfour-us/projen-utils'

new TypeScriptESMProject(options: TypeScriptESMProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.Initializer.parameter.options">options</a></code> | <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions">TypeScriptESMProjectOptions</a></code> | options for configuring the project. |

---

##### `options`<sup>Required</sup> <a name="options" id="@ncfour-us/projen-utils.TypeScriptESMProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions">TypeScriptESMProjectOptions</a>

options for configuring the project.

Extends `TypeScriptProjectOptions`.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@ncfour-us/projen-utils.TypeScriptESMProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@ncfour-us/projen-utils.TypeScriptESMProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@ncfour-us/projen-utils.TypeScriptESMProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@ncfour-us/projen-utils.TypeScriptESMProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@ncfour-us/projen-utils.TypeScriptESMProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@ncfour-us/projen-utils.TypeScriptESMProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@ncfour-us/projen-utils.TypeScriptESMProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@ncfour-us/projen-utils.TypeScriptESMProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@ncfour-us/projen-utils.TypeScriptESMProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@ncfour-us/projen-utils.TypeScriptESMProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@ncfour-us/projen-utils.TypeScriptESMProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@ncfour-us/projen-utils.TypeScriptESMProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@ncfour-us/projen-utils.TypeScriptESMProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@ncfour-us/projen-utils.TypeScriptESMProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@ncfour-us/projen-utils.TypeScriptESMProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@ncfour-us/projen-utils.TypeScriptESMProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@ncfour-us/projen-utils.TypeScriptESMProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@ncfour-us/projen-utils.TypeScriptESMProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@ncfour-us/projen-utils.TypeScriptESMProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@ncfour-us/projen-utils.TypeScriptESMProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@ncfour-us/projen-utils.TypeScriptESMProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `pnpm projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@ncfour-us/projen-utils.TypeScriptESMProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@ncfour-us/projen-utils.TypeScriptESMProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@ncfour-us/projen-utils.TypeScriptESMProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@ncfour-us/projen-utils.TypeScriptESMProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@ncfour-us/projen-utils.TypeScriptESMProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@ncfour-us/projen-utils.TypeScriptESMProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@ncfour-us/projen-utils.TypeScriptESMProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@ncfour-us/projen-utils.TypeScriptESMProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@ncfour-us/projen-utils.TypeScriptESMProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@ncfour-us/projen-utils.TypeScriptESMProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@ncfour-us/projen-utils.TypeScriptESMProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@ncfour-us/projen-utils.TypeScriptESMProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@ncfour-us/projen-utils.TypeScriptESMProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@ncfour-us/projen-utils.TypeScriptESMProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@ncfour-us/projen-utils.TypeScriptESMProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@ncfour-us/projen-utils.TypeScriptESMProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@ncfour-us/projen-utils.TypeScriptESMProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@ncfour-us/projen-utils.TypeScriptESMProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@ncfour-us/projen-utils.TypeScriptESMProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@ncfour-us/projen-utils.TypeScriptESMProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@ncfour-us/projen-utils.TypeScriptESMProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@ncfour-us/projen-utils.TypeScriptESMProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@ncfour-us/projen-utils.TypeScriptESMProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@ncfour-us/projen-utils.TypeScriptESMProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@ncfour-us/projen-utils.TypeScriptESMProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@ncfour-us/projen-utils.TypeScriptESMProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@ncfour-us/projen-utils.TypeScriptESMProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@ncfour-us/projen-utils.TypeScriptESMProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@ncfour-us/projen-utils.TypeScriptESMProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@ncfour-us/projen-utils.TypeScriptESMProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@ncfour-us/projen-utils.TypeScriptESMProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@ncfour-us/projen-utils.TypeScriptESMProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@ncfour-us/projen-utils.TypeScriptESMProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@ncfour-us/projen-utils.TypeScriptESMProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@ncfour-us/projen-utils.TypeScriptESMProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@ncfour-us/projen-utils.TypeScriptESMProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@ncfour-us/projen-utils.TypeScriptESMProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@ncfour-us/projen-utils.TypeScriptESMProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@ncfour-us/projen-utils.TypeScriptESMProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@ncfour-us/projen-utils.TypeScriptESMProject.isConstruct"></a>

```typescript
import { TypeScriptESMProject } from '@ncfour-us/projen-utils'

TypeScriptESMProject.isConstruct(x: any)
```

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

###### `x`<sup>Required</sup> <a name="x" id="@ncfour-us/projen-utils.TypeScriptESMProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@ncfour-us/projen-utils.TypeScriptESMProject.isProject"></a>

```typescript
import { TypeScriptESMProject } from '@ncfour-us/projen-utils'

TypeScriptESMProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@ncfour-us/projen-utils.TypeScriptESMProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@ncfour-us/projen-utils.TypeScriptESMProject.of"></a>

```typescript
import { TypeScriptESMProject } from '@ncfour-us/projen-utils'

TypeScriptESMProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@ncfour-us/projen-utils.TypeScriptESMProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.addVersionFile">addVersionFile</a></code> | <code>boolean</code> | see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.apiDocumentation">apiDocumentation</a></code> | <code>boolean</code> | see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.buildTagTask">buildTagTask</a></code> | <code>boolean</code> | see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.commands">commands</a></code> | <code><a href="#@ncfour-us/projen-utils.CommandParameters">CommandParameters</a>[]</code> | see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.docsIndex">docsIndex</a></code> | <code>boolean</code> | see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.eslintFlatConfig">eslintFlatConfig</a></code> | <code>boolean</code> | see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.localPackageArchiveDir">localPackageArchiveDir</a></code> | <code>string</code> | see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.precommitConfig">precommitConfig</a></code> | <code>boolean</code> | see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.prettierFlatConfig">prettierFlatConfig</a></code> | <code>boolean</code> | see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.repoBuildPackageModel">repoBuildPackageModel</a></code> | <code><a href="#@ncfour-us/projen-utils.RepoBuildPackageModel">RepoBuildPackageModel</a></code> | see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.apiEntryPoints">apiEntryPoints</a></code> | <code>string[]</code> | see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions). |

---

##### `node`<sup>Required</sup> <a name="node" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `addVersionFile`<sup>Required</sup> <a name="addVersionFile" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.addVersionFile"></a>

```typescript
public readonly addVersionFile: boolean;
```

- *Type:* boolean

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

---

##### `apiDocumentation`<sup>Required</sup> <a name="apiDocumentation" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.apiDocumentation"></a>

```typescript
public readonly apiDocumentation: boolean;
```

- *Type:* boolean

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

---

##### `buildTagTask`<sup>Required</sup> <a name="buildTagTask" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.buildTagTask"></a>

```typescript
public readonly buildTagTask: boolean;
```

- *Type:* boolean

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

---

##### `commands`<sup>Required</sup> <a name="commands" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.commands"></a>

```typescript
public readonly commands: CommandParameters[];
```

- *Type:* <a href="#@ncfour-us/projen-utils.CommandParameters">CommandParameters</a>[]

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

---

##### `docsIndex`<sup>Required</sup> <a name="docsIndex" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.docsIndex"></a>

```typescript
public readonly docsIndex: boolean;
```

- *Type:* boolean

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

---

##### `eslintFlatConfig`<sup>Required</sup> <a name="eslintFlatConfig" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.eslintFlatConfig"></a>

```typescript
public readonly eslintFlatConfig: boolean;
```

- *Type:* boolean

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

---

##### `localPackageArchiveDir`<sup>Required</sup> <a name="localPackageArchiveDir" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.localPackageArchiveDir"></a>

```typescript
public readonly localPackageArchiveDir: string;
```

- *Type:* string

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

---

##### `precommitConfig`<sup>Required</sup> <a name="precommitConfig" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.precommitConfig"></a>

```typescript
public readonly precommitConfig: boolean;
```

- *Type:* boolean

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

---

##### `prettierFlatConfig`<sup>Required</sup> <a name="prettierFlatConfig" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.prettierFlatConfig"></a>

```typescript
public readonly prettierFlatConfig: boolean;
```

- *Type:* boolean

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

---

##### `repoBuildPackageModel`<sup>Required</sup> <a name="repoBuildPackageModel" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.repoBuildPackageModel"></a>

```typescript
public readonly repoBuildPackageModel: RepoBuildPackageModel;
```

- *Type:* <a href="#@ncfour-us/projen-utils.RepoBuildPackageModel">RepoBuildPackageModel</a>

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

---

##### `apiEntryPoints`<sup>Optional</sup> <a name="apiEntryPoints" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.apiEntryPoints"></a>

```typescript
public readonly apiEntryPoints: string[];
```

- *Type:* string[]

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@ncfour-us/projen-utils.TypeScriptESMProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CommandParameters <a name="CommandParameters" id="@ncfour-us/projen-utils.CommandParameters"></a>

additional commands to configure into the project (`scripts` in `package.json`).

#### Initializer <a name="Initializer" id="@ncfour-us/projen-utils.CommandParameters.Initializer"></a>

```typescript
import { CommandParameters } from '@ncfour-us/projen-utils'

const commandParameters: CommandParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.CommandParameters.property.file">file</a></code> | <code>string</code> | JavaScript file which implements/provides the command. |
| <code><a href="#@ncfour-us/projen-utils.CommandParameters.property.name">name</a></code> | <code>string</code> | name of the command. |

---

##### `file`<sup>Required</sup> <a name="file" id="@ncfour-us/projen-utils.CommandParameters.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

JavaScript file which implements/provides the command.

---

##### `name`<sup>Required</sup> <a name="name" id="@ncfour-us/projen-utils.CommandParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

name of the command.

---

### PnpmWorkspaceOptions <a name="PnpmWorkspaceOptions" id="@ncfour-us/projen-utils.PnpmWorkspaceOptions"></a>

Used to configure the PreCommitConfigFile construct.

If any values are NOT set, then the associated markers
in the sample file will NOT be replaced.  This allows
an author to easily find and replace those values
when updating the file after the project has been
synthesized.

#### Initializer <a name="Initializer" id="@ncfour-us/projen-utils.PnpmWorkspaceOptions.Initializer"></a>

```typescript
import { PnpmWorkspaceOptions } from '@ncfour-us/projen-utils'

const pnpmWorkspaceOptions: PnpmWorkspaceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspaceOptions.property.allowBuilds">allowBuilds</a></code> | <code>{[ key: string ]: boolean}</code> | pnpm.allowBuilds value for pnpm-workspace.yaml. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspaceOptions.property.blockExoticSubdeps">blockExoticSubdeps</a></code> | <code>number</code> | pnpm.blockExoticSubdeps value for pnpm-workspace.yaml. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspaceOptions.property.minimumReleaseAge">minimumReleaseAge</a></code> | <code>number</code> | pnpm.minimumReleaseAge value for pnpm-workspace.yaml. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspaceOptions.property.packages">packages</a></code> | <code>string[]</code> | package folders for the monorepo workspace. |
| <code><a href="#@ncfour-us/projen-utils.PnpmWorkspaceOptions.property.trustPolicy">trustPolicy</a></code> | <code>string</code> | pnpm.trustPolicy value for pnpm-workspace.yaml. |

---

##### `allowBuilds`<sup>Optional</sup> <a name="allowBuilds" id="@ncfour-us/projen-utils.PnpmWorkspaceOptions.property.allowBuilds"></a>

```typescript
public readonly allowBuilds: {[ key: string ]: boolean};
```

- *Type:* {[ key: string ]: boolean}

pnpm.allowBuilds value for pnpm-workspace.yaml.

---

##### `blockExoticSubdeps`<sup>Optional</sup> <a name="blockExoticSubdeps" id="@ncfour-us/projen-utils.PnpmWorkspaceOptions.property.blockExoticSubdeps"></a>

```typescript
public readonly blockExoticSubdeps: number;
```

- *Type:* number

pnpm.blockExoticSubdeps value for pnpm-workspace.yaml.

---

##### `minimumReleaseAge`<sup>Optional</sup> <a name="minimumReleaseAge" id="@ncfour-us/projen-utils.PnpmWorkspaceOptions.property.minimumReleaseAge"></a>

```typescript
public readonly minimumReleaseAge: number;
```

- *Type:* number

pnpm.minimumReleaseAge value for pnpm-workspace.yaml.

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@ncfour-us/projen-utils.PnpmWorkspaceOptions.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

package folders for the monorepo workspace.

---

##### `trustPolicy`<sup>Optional</sup> <a name="trustPolicy" id="@ncfour-us/projen-utils.PnpmWorkspaceOptions.property.trustPolicy"></a>

```typescript
public readonly trustPolicy: string;
```

- *Type:* string

pnpm.trustPolicy value for pnpm-workspace.yaml.

---

### PreCommitConfigFileOptions <a name="PreCommitConfigFileOptions" id="@ncfour-us/projen-utils.PreCommitConfigFileOptions"></a>

Used to configure the PreCommitConfigFile construct.

#### Initializer <a name="Initializer" id="@ncfour-us/projen-utils.PreCommitConfigFileOptions.Initializer"></a>

```typescript
import { PreCommitConfigFileOptions } from '@ncfour-us/projen-utils'

const preCommitConfigFileOptions: PreCommitConfigFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFileOptions.property.fileTypes">fileTypes</a></code> | <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFileTypes">PreCommitConfigFileTypes</a>[]</code> | Array of file-types to configure the pre-commit file to handle. |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFileOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | For JavaScript and/or TypeScript support, the package manager defined for the project. |

---

##### `fileTypes`<sup>Optional</sup> <a name="fileTypes" id="@ncfour-us/projen-utils.PreCommitConfigFileOptions.property.fileTypes"></a>

```typescript
public readonly fileTypes: PreCommitConfigFileTypes[];
```

- *Type:* <a href="#@ncfour-us/projen-utils.PreCommitConfigFileTypes">PreCommitConfigFileTypes</a>[]

Array of file-types to configure the pre-commit file to handle.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@ncfour-us/projen-utils.PreCommitConfigFileOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

For JavaScript and/or TypeScript support, the package manager defined for the project.

---

### ReadmeSampleFileOptions <a name="ReadmeSampleFileOptions" id="@ncfour-us/projen-utils.ReadmeSampleFileOptions"></a>

Used to configure the ReadmeSampleFile construct.

If any values are NOT set, then the associated markers
in the sample file will NOT be replaced.  This allows
an author to easily find and replace those values
when updating the file after the project has been
synthesized.

#### Initializer <a name="Initializer" id="@ncfour-us/projen-utils.ReadmeSampleFileOptions.Initializer"></a>

```typescript
import { ReadmeSampleFileOptions } from '@ncfour-us/projen-utils'

const readmeSampleFileOptions: ReadmeSampleFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.author">author</a></code> | <code>string</code> | Author of the project. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author e-mail for the project. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.authorGithubUser">authorGithubUser</a></code> | <code>string</code> | Author github user for the project. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.filename">filename</a></code> | <code>string</code> | filename of the Readme sample file. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.license">license</a></code> | <code>string</code> | Designated license for the project. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.namespace">namespace</a></code> | <code>string</code> | Namespace/organization/user associated with the Git repository. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.organization">organization</a></code> | <code>string</code> | Namespace/organization/user associated with the Git repository. |
| <code><a href="#@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.project">project</a></code> | <code>string</code> | Name of the Git repository. |

---

##### `author`<sup>Optional</sup> <a name="author" id="@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

Author of the project.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author e-mail for the project.

---

##### `authorGithubUser`<sup>Optional</sup> <a name="authorGithubUser" id="@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.authorGithubUser"></a>

```typescript
public readonly authorGithubUser: string;
```

- *Type:* string

Author github user for the project.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

filename of the Readme sample file.

---

##### `license`<sup>Optional</sup> <a name="license" id="@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

Designated license for the project.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace/organization/user associated with the Git repository.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Namespace/organization/user associated with the Git repository.

---

##### `project`<sup>Optional</sup> <a name="project" id="@ncfour-us/projen-utils.ReadmeSampleFileOptions.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Name of the Git repository.

---

### TypedocJsonOptions <a name="TypedocJsonOptions" id="@ncfour-us/projen-utils.TypedocJsonOptions"></a>

Used to configure the TypedocJson construct.

#### Initializer <a name="Initializer" id="@ncfour-us/projen-utils.TypedocJsonOptions.Initializer"></a>

```typescript
import { TypedocJsonOptions } from '@ncfour-us/projen-utils'

const typedocJsonOptions: TypedocJsonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.TypedocJsonOptions.property.entryPoints">entryPoints</a></code> | <code>string[]</code> | source file entry point(s) which define the API. |

---

##### `entryPoints`<sup>Optional</sup> <a name="entryPoints" id="@ncfour-us/projen-utils.TypedocJsonOptions.property.entryPoints"></a>

```typescript
public readonly entryPoints: string[];
```

- *Type:* string[]

source file entry point(s) which define the API.

If not specified, Typedoc will use information from `package.json`

---

### TypeScriptESMProjectOptions <a name="TypeScriptESMProjectOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions"></a>

Options for TypeScriptESMProject.

#### Initializer <a name="Initializer" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.Initializer"></a>

```typescript
import { TypeScriptESMProjectOptions } from '@ncfour-us/projen-utils'

const typeScriptESMProjectOptions: TypeScriptESMProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projectTree">projectTree</a></code> | <code>boolean</code> | Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.addPackageManagerToDevEngines">addPackageManagerToDevEngines</a></code> | <code>boolean</code> | Automatically add the resolved `packageManager` to `devEngines.packageManager` in `package.json`, setting `onFail` to `ignore`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.deleteOrphanedLockFiles">deleteOrphanedLockFiles</a></code> | <code>boolean</code> | Automatically delete lockfiles from package managers that are not the active one. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.devEngines">devEngines</a></code> | <code>projen.javascript.DevEngines</code> | Configure the `devEngines` field in `package.json`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmTrustedPublishing">npmTrustedPublishing</a></code> | <code>boolean</code> | Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | The GitHub Actions environment used for the release. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseWorkflowEnv">releaseWorkflowEnv</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables for release workflows. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.auditDeps">auditDeps</a></code> | <code>boolean</code> | Run security audit on dependencies. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.auditDepsOptions">auditDepsOptions</a></code> | <code>projen.javascript.AuditOptions</code> | Security audit options. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.biome">biome</a></code> | <code>boolean</code> | Setup Biome. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.biomeOptions">biomeOptions</a></code> | <code>projen.javascript.BiomeOptions</code> | Biome options. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.addVersionFile">addVersionFile</a></code> | <code>boolean</code> | Add a `version.ts` file which contains a `LIB_VERSION` global. The `LIB_VERSION` value is set based on the `version` field in `package.json`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.apiDocumentation">apiDocumentation</a></code> | <code>boolean</code> | Add API documentation to `docs/api` using `typedoc`. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.apiEntryPoints">apiEntryPoints</a></code> | <code>string[]</code> | API entry points for `typedoc` to use. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.buildTagTask">buildTagTask</a></code> | <code>boolean</code> | Add a `build:tag` task to the set of tasks for the project. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.commands">commands</a></code> | <code><a href="#@ncfour-us/projen-utils.CommandParameters">CommandParameters</a>[]</code> | Additional commands (scripts) to add to the `package.json` file. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.docsIndex">docsIndex</a></code> | <code>boolean</code> | Add a `docs/index.md` file to the project as a sample file. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.eslintFlatConfig">eslintFlatConfig</a></code> | <code>boolean</code> | Use `eslint.config.ts` instead of `.eslintrc.json` for eslint config. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.localPackageArchiveDir">localPackageArchiveDir</a></code> | <code>string</code> | Location for local archive of released artifacts. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.precommitConfig">precommitConfig</a></code> | <code>boolean</code> | Add a `.pre-commit-config.yaml` file to support use of `pre-commit` tool. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.prettierFlatConfig">prettierFlatConfig</a></code> | <code>boolean</code> | Use `prettier.config.ts` instead of `.prettierrc.json` for eslint config. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseToGithub">releaseToGithub</a></code> | <code>boolean</code> | Release to Github when running release tasks. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseToLocal">releaseToLocal</a></code> | <code>boolean</code> | Release to Local archive folder when running release tasks. |
| <code><a href="#@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.repoBuildPackageModel">repoBuildPackageModel</a></code> | <code><a href="#@ncfour-us/projen-utils.RepoBuildPackageModel">RepoBuildPackageModel</a></code> | Type of repository, packaging, and release model to use. |

---

##### `name`<sup>Required</sup> <a name="name" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projectTree`<sup>Optional</sup> <a name="projectTree" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projectTree"></a>

```typescript
public readonly projectTree: boolean;
```

- *Type:* boolean
- *Default:* false

Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `addPackageManagerToDevEngines`<sup>Optional</sup> <a name="addPackageManagerToDevEngines" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.addPackageManagerToDevEngines"></a>

```typescript
public readonly addPackageManagerToDevEngines: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add the resolved `packageManager` to `devEngines.packageManager` in `package.json`, setting `onFail` to `ignore`.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deleteOrphanedLockFiles`<sup>Optional</sup> <a name="deleteOrphanedLockFiles" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.deleteOrphanedLockFiles"></a>

```typescript
public readonly deleteOrphanedLockFiles: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically delete lockfiles from package managers that are not the active one.

Only triggered when the lockfile for the configured package
manager already exists.

This is useful when migrating between package managers to avoid conflicts.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `devEngines`<sup>Optional</sup> <a name="devEngines" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.devEngines"></a>

```typescript
public readonly devEngines: DevEngines;
```

- *Type:* projen.javascript.DevEngines

Configure the `devEngines` field in `package.json`.

The `devEngines.packageManager` field is automatically populated based on
the resolved `packageManager` value. Any fields provided here are merged
with the auto-populated `packageManager` entry.

> [https://docs.npmjs.com/cli/v10/configuring-npm/package-json#devengines](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#devengines)

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `npmTrustedPublishing`<sup>Optional</sup> <a name="npmTrustedPublishing" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmTrustedPublishing"></a>

```typescript
public readonly npmTrustedPublishing: boolean;
```

- *Type:* boolean
- *Default:* false

Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* Detected from the calling process or `YARN_CLASSIC` if detection fails.

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "10.33.0"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string
- *Default:* no environment used, unless set at the artifact level

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowEnv`<sup>Optional</sup> <a name="releaseWorkflowEnv" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseWorkflowEnv"></a>

```typescript
public readonly releaseWorkflowEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables for release workflows.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `auditDeps`<sup>Optional</sup> <a name="auditDeps" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.auditDeps"></a>

```typescript
public readonly auditDeps: boolean;
```

- *Type:* boolean
- *Default:* false

Run security audit on dependencies.

When enabled, creates an "audit" task that checks for known security vulnerabilities
in dependencies. By default, runs during every build and checks for "high" severity
vulnerabilities or above in all dependencies (including dev dependencies).

---

##### `auditDepsOptions`<sup>Optional</sup> <a name="auditDepsOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.auditDepsOptions"></a>

```typescript
public readonly auditDepsOptions: AuditOptions;
```

- *Type:* projen.javascript.AuditOptions
- *Default:* default options

Security audit options.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.biome"></a>

```typescript
public readonly biome: boolean;
```

- *Type:* boolean
- *Default:* false

Setup Biome.

---

##### `biomeOptions`<sup>Optional</sup> <a name="biomeOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.biomeOptions"></a>

```typescript
public readonly biomeOptions: BiomeOptions;
```

- *Type:* projen.javascript.BiomeOptions
- *Default:* default options

Biome options.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* OIDC auth is used

Define the secret name for a specified https://codecov.io/ token.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* `true` for root projects, `false` for subprojects

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* default GitHub Actions user

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true, unless biome is enabled

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `addVersionFile`<sup>Optional</sup> <a name="addVersionFile" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.addVersionFile"></a>

```typescript
public readonly addVersionFile: boolean;
```

- *Type:* boolean
- *Default:* false

Add a `version.ts` file which contains a `LIB_VERSION` global. The `LIB_VERSION` value is set based on the `version` field in `package.json`.

---

##### `apiDocumentation`<sup>Optional</sup> <a name="apiDocumentation" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.apiDocumentation"></a>

```typescript
public readonly apiDocumentation: boolean;
```

- *Type:* boolean
- *Default:* false

Add API documentation to `docs/api` using `typedoc`.

---

##### `apiEntryPoints`<sup>Optional</sup> <a name="apiEntryPoints" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.apiEntryPoints"></a>

```typescript
public readonly apiEntryPoints: string[];
```

- *Type:* string[]
- *Default:* undefined if not specified, then information in `package.json` will be used by `typedoc` to determine what entry points to include in the documentation.

API entry points for `typedoc` to use.

---

##### `buildTagTask`<sup>Optional</sup> <a name="buildTagTask" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.buildTagTask"></a>

```typescript
public readonly buildTagTask: boolean;
```

- *Type:* boolean
- *Default:* false

Add a `build:tag` task to the set of tasks for the project.

The `build:tag` task requires a single argument which **MUST**
match an existing tag (released version) in the git repository.

This task runs only in "local" (non-CI) environments.

Example for running the task (assumes tag/release `v0.0.4` exists):

```bash
pnpm build:tag v0.0.4
```

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.commands"></a>

```typescript
public readonly commands: CommandParameters[];
```

- *Type:* <a href="#@ncfour-us/projen-utils.CommandParameters">CommandParameters</a>[]
- *Default:* []

Additional commands (scripts) to add to the `package.json` file.

---

##### `docsIndex`<sup>Optional</sup> <a name="docsIndex" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.docsIndex"></a>

```typescript
public readonly docsIndex: boolean;
```

- *Type:* boolean
- *Default:* false

Add a `docs/index.md` file to the project as a sample file.

---

##### `eslintFlatConfig`<sup>Optional</sup> <a name="eslintFlatConfig" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.eslintFlatConfig"></a>

```typescript
public readonly eslintFlatConfig: boolean;
```

- *Type:* boolean
- *Default:* false

Use `eslint.config.ts` instead of `.eslintrc.json` for eslint config.

---

##### `localPackageArchiveDir`<sup>Optional</sup> <a name="localPackageArchiveDir" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.localPackageArchiveDir"></a>

```typescript
public readonly localPackageArchiveDir: string;
```

- *Type:* string
- *Default:* ~/.local-build-packages

Location for local archive of released artifacts.

Used only when `repoBuildPackageModel is set to
`RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY`.

---

##### `precommitConfig`<sup>Optional</sup> <a name="precommitConfig" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.precommitConfig"></a>

```typescript
public readonly precommitConfig: boolean;
```

- *Type:* boolean
- *Default:* false

Add a `.pre-commit-config.yaml` file to support use of `pre-commit` tool.

---

##### `prettierFlatConfig`<sup>Optional</sup> <a name="prettierFlatConfig" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.prettierFlatConfig"></a>

```typescript
public readonly prettierFlatConfig: boolean;
```

- *Type:* boolean
- *Default:* false

Use `prettier.config.ts` instead of `.prettierrc.json` for eslint config.

---

##### `releaseToGithub`<sup>Optional</sup> <a name="releaseToGithub" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseToGithub"></a>

```typescript
public readonly releaseToGithub: boolean;
```

- *Type:* boolean
- *Default:* true if `repository` is set, `false` otherwise

Release to Github when running release tasks.

---

##### `releaseToLocal`<sup>Optional</sup> <a name="releaseToLocal" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.releaseToLocal"></a>

```typescript
public readonly releaseToLocal: boolean;
```

- *Type:* boolean
- *Default:* true

Release to Local archive folder when running release tasks.

---

##### `repoBuildPackageModel`<sup>Optional</sup> <a name="repoBuildPackageModel" id="@ncfour-us/projen-utils.TypeScriptESMProjectOptions.property.repoBuildPackageModel"></a>

```typescript
public readonly repoBuildPackageModel: RepoBuildPackageModel;
```

- *Type:* <a href="#@ncfour-us/projen-utils.RepoBuildPackageModel">RepoBuildPackageModel</a>
- *Default:* RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY

Type of repository, packaging, and release model to use.

Use value `RepoBuildPackageModel.SKIP_SETUP` to skip
any opinionated setup by the component.

---



## Enums <a name="Enums" id="Enums"></a>

### PreCommitConfigFileTypes <a name="PreCommitConfigFileTypes" id="@ncfour-us/projen-utils.PreCommitConfigFileTypes"></a>

Used to specify the file types used in the project.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFileTypes.TERRAFORM">TERRAFORM</a></code> | Add support for Terraform file checks (not yet implemented). |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFileTypes.PYTHON">PYTHON</a></code> | Add support for Python file checks (black, bandit). |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFileTypes.CLOUDFORMATION">CLOUDFORMATION</a></code> | Add support for CloudFormation file checks (not yet implemented). |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFileTypes.JAVA">JAVA</a></code> | Add support for Java file checks (not yet implemented). |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFileTypes.JAVASCRIPT">JAVASCRIPT</a></code> | Add support for JavaScript file checks (prettier, eslint). |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFileTypes.TYPESCRIPT">TYPESCRIPT</a></code> | Add support for JavaScript file checks (prettier, eslint). |
| <code><a href="#@ncfour-us/projen-utils.PreCommitConfigFileTypes.SHELLSCRIPT">SHELLSCRIPT</a></code> | Add support for shell script file checks (not yet implemented). |

---

##### `TERRAFORM` <a name="TERRAFORM" id="@ncfour-us/projen-utils.PreCommitConfigFileTypes.TERRAFORM"></a>

Add support for Terraform file checks (not yet implemented).

---


##### `PYTHON` <a name="PYTHON" id="@ncfour-us/projen-utils.PreCommitConfigFileTypes.PYTHON"></a>

Add support for Python file checks (black, bandit).

---


##### `CLOUDFORMATION` <a name="CLOUDFORMATION" id="@ncfour-us/projen-utils.PreCommitConfigFileTypes.CLOUDFORMATION"></a>

Add support for CloudFormation file checks (not yet implemented).

---


##### `JAVA` <a name="JAVA" id="@ncfour-us/projen-utils.PreCommitConfigFileTypes.JAVA"></a>

Add support for Java file checks (not yet implemented).

---


##### `JAVASCRIPT` <a name="JAVASCRIPT" id="@ncfour-us/projen-utils.PreCommitConfigFileTypes.JAVASCRIPT"></a>

Add support for JavaScript file checks (prettier, eslint).

---


##### `TYPESCRIPT` <a name="TYPESCRIPT" id="@ncfour-us/projen-utils.PreCommitConfigFileTypes.TYPESCRIPT"></a>

Add support for JavaScript file checks (prettier, eslint).

---


##### `SHELLSCRIPT` <a name="SHELLSCRIPT" id="@ncfour-us/projen-utils.PreCommitConfigFileTypes.SHELLSCRIPT"></a>

Add support for shell script file checks (not yet implemented).

---


### RepoBuildPackageModel <a name="RepoBuildPackageModel" id="@ncfour-us/projen-utils.RepoBuildPackageModel"></a>

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

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ncfour-us/projen-utils.RepoBuildPackageModel.SKIP_SETUP">SKIP_SETUP</a></code> | Skip any build/release configuration that is offered by the TypeScriptESMProject component. |
| <code><a href="#@ncfour-us/projen-utils.RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY">LOCAL_DEV_BUILD_REGISTRY</a></code> | All development/build/packaging/distribution/publishing is driven from a local workstation or cloned repository. |

---

##### `SKIP_SETUP` <a name="SKIP_SETUP" id="@ncfour-us/projen-utils.RepoBuildPackageModel.SKIP_SETUP"></a>

Skip any build/release configuration that is offered by the TypeScriptESMProject component.

This is an "escape hatch" to allow the project
to define it's own customizations/configuration
for build/packaging and distribution/publishing

---


##### `LOCAL_DEV_BUILD_REGISTRY` <a name="LOCAL_DEV_BUILD_REGISTRY" id="@ncfour-us/projen-utils.RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY"></a>

All development/build/packaging/distribution/publishing is driven from a local workstation or cloned repository.

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

---

