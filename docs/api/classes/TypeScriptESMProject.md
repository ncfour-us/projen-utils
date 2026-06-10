[@ncfour-us/projen-utils](../index.md) / TypeScriptESMProject

# Class: TypeScriptESMProject

TypeScript ESM project

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

## Pjid

typescript-esm

## Extends

- `TypeScriptProject`

## Constructors

### Constructor

> **new TypeScriptESMProject**(`options`): `TypeScriptESMProject`

Create a TypeScriptESMProject construct for the project.

#### Parameters

##### options

[`TypeScriptESMProjectOptions`](../interfaces/TypeScriptESMProjectOptions.md)

options for configuring the project.  Extends `TypeScriptProjectOptions`.

#### Returns

`TypeScriptESMProject`

#### Overrides

`typescript.TypeScriptProject.constructor`

## Properties

### addVersionFile

> `readonly` **addVersionFile**: `boolean`

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

***

### apiDocumentation

> `readonly` **apiDocumentation**: `boolean`

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

***

### apiEntryPoints?

> `readonly` `optional` **apiEntryPoints?**: `string`[]

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

***

### artifactsDirectory

> `readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

`typescript.TypeScriptProject.artifactsDirectory`

***

### artifactsJavascriptDirectory

> `readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

`typescript.TypeScriptProject.artifactsJavascriptDirectory`

***

### autoApprove?

> `readonly` `optional` **autoApprove?**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

`typescript.TypeScriptProject.autoApprove`

***

### autoMerge?

> `readonly` `optional` **autoMerge?**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

`typescript.TypeScriptProject.autoMerge`

***

### biome?

> `readonly` `optional` **biome?**: `Biome`

#### Inherited from

`typescript.TypeScriptProject.biome`

***

### buildTagTask

> `readonly` **buildTagTask**: `boolean`

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

***

### buildWorkflow?

> `readonly` `optional` **buildWorkflow?**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

`typescript.TypeScriptProject.buildWorkflow`

***

### bundler

> `readonly` **bundler**: `Bundler`

#### Inherited from

`typescript.TypeScriptProject.bundler`

***

### commands

> `readonly` **commands**: [`CommandParameters`](../interfaces/CommandParameters.md)[]

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

***

### commitGenerated

> `readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

`typescript.TypeScriptProject.commitGenerated`

***

### defaultTask?

> `readonly` `optional` **defaultTask?**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

`typescript.TypeScriptProject.defaultTask`

***

### deps

> `readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

`typescript.TypeScriptProject.deps`

***

### devContainer

> `readonly` **devContainer**: `DevContainer` \| `undefined`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

`typescript.TypeScriptProject.devContainer`

***

### docgen?

> `readonly` `optional` **docgen?**: `boolean`

#### Inherited from

`typescript.TypeScriptProject.docgen`

***

### docsDirectory

> `readonly` **docsDirectory**: `string`

#### Inherited from

`typescript.TypeScriptProject.docsDirectory`

***

### docsIndex

> `readonly` **docsIndex**: `boolean`

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

***

### eslint?

> `readonly` `optional` **eslint?**: `Eslint`

#### Inherited from

`typescript.TypeScriptProject.eslint`

***

### eslintFlatConfig

> `readonly` **eslintFlatConfig**: `boolean`

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

***

### gitattributes

> `readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

`typescript.TypeScriptProject.gitattributes`

***

### github

> `readonly` **github**: `GitHub` \| `undefined`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

`typescript.TypeScriptProject.github`

***

### gitignore

> `readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

`typescript.TypeScriptProject.gitignore`

***

### gitpod

> `readonly` **gitpod**: `Gitpod` \| `undefined`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

`typescript.TypeScriptProject.gitpod`

***

### initProject?

> `readonly` `optional` **initProject?**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

`typescript.TypeScriptProject.initProject`

***

### jest?

> `readonly` `optional` **jest?**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

`typescript.TypeScriptProject.jest`

***

### libdir

> `readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

`typescript.TypeScriptProject.libdir`

***

### localPackageArchiveDir

> `readonly` **localPackageArchiveDir**: `string`

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

***

### logger

> `readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

`typescript.TypeScriptProject.logger`

***

### name

> `readonly` **name**: `string`

Project name.

#### Inherited from

`typescript.TypeScriptProject.name`

***

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

`typescript.TypeScriptProject.node`

***

### nodeVersion?

> `protected` `readonly` `optional` **nodeVersion?**: `string`

#### Inherited from

`typescript.TypeScriptProject.nodeVersion`

***

### npmignore?

> `readonly` `optional` **npmignore?**: `IgnoreFile`

The .npmignore file.

#### Inherited from

`typescript.TypeScriptProject.npmignore`

***

### outdir

> `readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

`typescript.TypeScriptProject.outdir`

***

### package

> `readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

`typescript.TypeScriptProject.package`

***

### parent?

> `readonly` `optional` **parent?**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

`typescript.TypeScriptProject.parent`

***

### precommitConfig

> `readonly` **precommitConfig**: `boolean`

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

***

### prettier?

> `readonly` `optional` **prettier?**: `Prettier`

#### Inherited from

`typescript.TypeScriptProject.prettier`

***

### prettierFlatConfig

> `readonly` **prettierFlatConfig**: `boolean`

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

***

### projectBuild

> `readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

`typescript.TypeScriptProject.projectBuild`

***

### projectType

> `readonly` **projectType**: `ProjectType`

#### Inherited from

`typescript.TypeScriptProject.projectType`

***

### ~~publisher?~~

> `readonly` `optional` **publisher?**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

#### Deprecated

use `release.publisher`.

#### Inherited from

`typescript.TypeScriptProject.publisher`

***

### release?

> `readonly` `optional` **release?**: `Release`

Release management.

#### Inherited from

`typescript.TypeScriptProject.release`

***

### repoBuildPackageModel

> `readonly` **repoBuildPackageModel**: [`RepoBuildPackageModel`](../enumerations/RepoBuildPackageModel.md)

see [TypeScriptESMProjectOptions](#typescriptesmprojectoptions).

***

### runScriptCommand

> `readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

`typescript.TypeScriptProject.runScriptCommand`

***

### srcdir

> `readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

`typescript.TypeScriptProject.srcdir`

***

### tasks

> `readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

`typescript.TypeScriptProject.tasks`

***

### testdir

> `readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

`typescript.TypeScriptProject.testdir`

***

### tsconfig?

> `readonly` `optional` **tsconfig?**: `TypescriptConfig`

#### Inherited from

`typescript.TypeScriptProject.tsconfig`

***

### tsconfigDev

> `readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

`typescript.TypeScriptProject.tsconfigDev`

***

### tsconfigEslint?

> `readonly` `optional` **tsconfigEslint?**: `TypescriptConfig`

#### Inherited from

`typescript.TypeScriptProject.tsconfigEslint`

***

### upgradeWorkflow?

> `readonly` `optional` **upgradeWorkflow?**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

`typescript.TypeScriptProject.upgradeWorkflow`

***

### vscode

> `readonly` **vscode**: `VsCode` \| `undefined`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

`typescript.TypeScriptProject.vscode`

***

### watchTask

> `readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

`typescript.TypeScriptProject.watchTask`

***

### workflowBootstrapSteps

> `protected` `readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

`typescript.TypeScriptProject.workflowBootstrapSteps`

***

### workflowPackageCache

> `protected` `readonly` **workflowPackageCache**: `boolean`

#### Inherited from

`typescript.TypeScriptProject.workflowPackageCache`

***

### DEFAULT\_TASK

> `readonly` `static` **DEFAULT\_TASK**: `"default"` = `"default"`

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

`typescript.TypeScriptProject.DEFAULT_TASK`

***

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

> `readonly` `static` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: "^.+\\.\[t\]sx?$" = "^.+\\.\[t\]sx?$"

#### Inherited from

`typescript.TypeScriptProject.DEFAULT_TS_JEST_TRANFORM_PATTERN`

## Accessors

### allowLibraryDependencies

#### Get Signature

> **get** **allowLibraryDependencies**(): `boolean`

##### Deprecated

use `package.allowLibraryDependencies`

##### Returns

`boolean`

#### Inherited from

`typescript.TypeScriptProject.allowLibraryDependencies`

***

### buildTask

#### Get Signature

> **get** **buildTask**(): `Task`

##### Returns

`Task`

#### Inherited from

`typescript.TypeScriptProject.buildTask`

***

### buildWorkflowJobId

#### Get Signature

> **get** **buildWorkflowJobId**(): `string` \| `undefined`

The job ID of the build workflow.

##### Returns

`string` \| `undefined`

#### Inherited from

`typescript.TypeScriptProject.buildWorkflowJobId`

***

### compileTask

#### Get Signature

> **get** **compileTask**(): `Task`

##### Returns

`Task`

#### Inherited from

`typescript.TypeScriptProject.compileTask`

***

### components

#### Get Signature

> **get** **components**(): `Component`[]

Returns all the components within this project.

##### Returns

`Component`[]

#### Inherited from

`typescript.TypeScriptProject.components`

***

### ejected

#### Get Signature

> **get** **ejected**(): `boolean`

Whether or not the project is being ejected.

##### Returns

`boolean`

#### Inherited from

`typescript.TypeScriptProject.ejected`

***

### entrypoint

#### Get Signature

> **get** **entrypoint**(): `string`

##### Deprecated

use `package.entrypoint`

##### Returns

`string`

#### Inherited from

`typescript.TypeScriptProject.entrypoint`

***

### files

#### Get Signature

> **get** **files**(): `FileBase`[]

All files in this project.

##### Returns

`FileBase`[]

#### Inherited from

`typescript.TypeScriptProject.files`

***

### manifest

#### Get Signature

> **get** **manifest**(): `any`

##### Deprecated

use `package.addField(x, y)`

##### Returns

`any`

#### Inherited from

`typescript.TypeScriptProject.manifest`

***

### maxNodeVersion

#### Get Signature

> **get** **maxNodeVersion**(): `string` \| `undefined`

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

##### Returns

`string` \| `undefined`

#### Inherited from

`typescript.TypeScriptProject.maxNodeVersion`

***

### minNodeVersion

#### Get Signature

> **get** **minNodeVersion**(): `string` \| `undefined`

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

##### Returns

`string` \| `undefined`

#### Inherited from

`typescript.TypeScriptProject.minNodeVersion`

***

### npmrc

#### Get Signature

> **get** **npmrc**(): `NpmConfig`

The .npmrc file

##### Returns

`NpmConfig`

#### Inherited from

`typescript.TypeScriptProject.npmrc`

***

### packageManager

#### Get Signature

> **get** **packageManager**(): `NodePackageManager`

The package manager to use.

##### Deprecated

use `package.packageManager`

##### Returns

`NodePackageManager`

#### Inherited from

`typescript.TypeScriptProject.packageManager`

***

### packageTask

#### Get Signature

> **get** **packageTask**(): `Task`

##### Returns

`Task`

#### Inherited from

`typescript.TypeScriptProject.packageTask`

***

### postCompileTask

#### Get Signature

> **get** **postCompileTask**(): `Task`

##### Returns

`Task`

#### Inherited from

`typescript.TypeScriptProject.postCompileTask`

***

### preCompileTask

#### Get Signature

> **get** **preCompileTask**(): `Task`

##### Returns

`Task`

#### Inherited from

`typescript.TypeScriptProject.preCompileTask`

***

### projenCommand

#### Get Signature

> **get** **projenCommand**(): `string`

The command to use in order to run the projen CLI.

##### Returns

`string`

#### Inherited from

`typescript.TypeScriptProject.projenCommand`

***

### root

#### Get Signature

> **get** **root**(): `Project`

The root project.

##### Returns

`Project`

#### Inherited from

`typescript.TypeScriptProject.root`

***

### subprojects

#### Get Signature

> **get** **subprojects**(): `Project`[]

Returns all the subprojects within this project.

##### Returns

`Project`[]

#### Inherited from

`typescript.TypeScriptProject.subprojects`

***

### testTask

#### Get Signature

> **get** **testTask**(): `Task`

##### Returns

`Task`

#### Inherited from

`typescript.TypeScriptProject.testTask`

## Methods

### addBins()

> **addBins**(`bins`): `void`

#### Parameters

##### bins

`Record`\<`string`, `string`\>

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.addBins`

***

### addBundledDeps()

> **addBundledDeps**(...`deps`): `void`

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

#### Parameters

##### deps

...`string`[]

Names modules to install. By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.addBundledDeps`

***

### ~~addCompileCommand()~~

> **addCompileCommand**(...`commands`): `void`

DEPRECATED

#### Parameters

##### commands

...`string`[]

#### Returns

`void`

#### Deprecated

use `project.compileTask.exec()`

#### Inherited from

`typescript.TypeScriptProject.addCompileCommand`

***

### addDeps()

> **addDeps**(...`deps`): `void`

Defines normal dependencies.

#### Parameters

##### deps

...`string`[]

Names modules to install. By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.addDeps`

***

### addDevDeps()

> **addDevDeps**(...`deps`): `void`

Defines development/test dependencies.

#### Parameters

##### deps

...`string`[]

Names modules to install. By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.addDevDeps`

***

### addExcludeFromCleanup()

> **addExcludeFromCleanup**(...`globs`): `void`

Exclude the matching files from pre-synth cleanup. Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

#### Parameters

##### globs

...`string`[]

The glob patterns to match

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.addExcludeFromCleanup`

***

### addFields()

> **addFields**(`fields`): `void`

Directly set fields in `package.json`.

#### Parameters

##### fields

The fields to set

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.addFields`

***

### addGitIgnore()

> **addGitIgnore**(`pattern`): `void`

Adds a .gitignore pattern.

#### Parameters

##### pattern

`string`

The glob pattern to ignore.

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.addGitIgnore`

***

### addKeywords()

> **addKeywords**(...`keywords`): `void`

Adds keywords to package.json (deduplicated)

#### Parameters

##### keywords

...`string`[]

The keywords to add

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.addKeywords`

***

### addPackageIgnore()

> **addPackageIgnore**(`pattern`): `void`

Adds patterns to be ignored by npm.

#### Parameters

##### pattern

`string`

The pattern to ignore.

#### Returns

`void`

#### Remarks

If you are having trouble getting an ignore to populate, try using your construct or component's preSynthesize method to properly delay calling this method.

#### Inherited from

`typescript.TypeScriptProject.addPackageIgnore`

***

### addPeerDeps()

> **addPeerDeps**(...`deps`): `void`

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

#### Parameters

##### deps

...`string`[]

Names modules to install. By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.addPeerDeps`

***

### addScripts()

> **addScripts**(`scripts`): `void`

Replaces the contents of multiple npm package.json scripts.

#### Parameters

##### scripts

The scripts to set

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.addScripts`

***

### addTask()

> **addTask**(`name`, `props?`): `Task`

Adds a new task to this project. This will fail if the project already has
a task with this name.

#### Parameters

##### name

`string`

The task name to add

##### props?

`TaskOptions`

Task properties

#### Returns

`Task`

#### Inherited from

`typescript.TypeScriptProject.addTask`

***

### ~~addTestCommand()~~

> **addTestCommand**(...`commands`): `void`

DEPRECATED

#### Parameters

##### commands

...`string`[]

#### Returns

`void`

#### Deprecated

use `project.testTask.exec()`

#### Inherited from

`typescript.TypeScriptProject.addTestCommand`

***

### ~~addTip()~~

> **addTip**(`message`): `void`

Prints a "tip" message during synthesis.

#### Parameters

##### message

`string`

The message

#### Returns

`void`

#### Deprecated

- use `project.logger.info(message)` to show messages during synthesis

#### Inherited from

`typescript.TypeScriptProject.addTip`

***

### annotateGenerated()

> **annotateGenerated**(`glob`): `void`

Marks the provided file(s) as being generated. This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

#### Parameters

##### glob

`string`

the glob pattern to match (could be a file path).

#### Returns

`void`

#### See

https://github.com/github/linguist/blob/master/docs/overrides.md

#### Inherited from

`typescript.TypeScriptProject.annotateGenerated`

***

### defaultTypeScriptCompilerOptions()

> `protected` **defaultTypeScriptCompilerOptions**(): `TypeScriptCompilerOptions`

Projen default Typescript compiler options.

#### Returns

`TypeScriptCompilerOptions`

#### Inherited from

`typescript.TypeScriptProject.defaultTypeScriptCompilerOptions`

***

### ~~hasScript()~~

> **hasScript**(`name`): `boolean`

Indicates if a script by the name name is defined.

#### Parameters

##### name

`string`

The name of the script

#### Returns

`boolean`

#### Deprecated

Use `project.tasks.tryFind(name)`

#### Inherited from

`typescript.TypeScriptProject.hasScript`

***

### postSynthesize()

> **postSynthesize**(): `void`

Called after all components are synthesized. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.postSynthesize`

***

### preSynthesize()

> **preSynthesize**(): `void`

Called before all components are synthesized.

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.preSynthesize`

***

### removeScript()

> **removeScript**(`name`): `void`

Removes the npm script (always successful).

#### Parameters

##### name

`string`

The name of the script.

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.removeScript`

***

### removeTask()

> **removeTask**(`name`): `Task` \| `undefined`

Removes a task from a project.

#### Parameters

##### name

`string`

The name of the task to remove.

#### Returns

`Task` \| `undefined`

The `Task` that was removed, otherwise `undefined`.

#### Inherited from

`typescript.TypeScriptProject.removeTask`

***

### renderWorkflowSetup()

> **renderWorkflowSetup**(`options?`): `JobStep`[]

Returns the set of workflow steps which should be executed to bootstrap a
workflow.

#### Parameters

##### options?

`RenderWorkflowSetupOptions`

Options.

#### Returns

`JobStep`[]

Job steps

#### Inherited from

`typescript.TypeScriptProject.renderWorkflowSetup`

***

### runTaskCommand()

> **runTaskCommand**(`task`): `string`

Returns the shell command to execute in order to run a task. This will
typically be `pnpm projen TASK`.

#### Parameters

##### task

`Task`

The task for which the command is required

#### Returns

`string`

#### Inherited from

`typescript.TypeScriptProject.runTaskCommand`

***

### setScript()

> **setScript**(`name`, `command`): `void`

Replaces the contents of an npm package.json script.

#### Parameters

##### name

`string`

The script name

##### command

`string`

The command to execute

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.setScript`

***

### synth()

> **synth**(): `void`

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

#### Returns

`void`

#### Inherited from

`typescript.TypeScriptProject.synth`

***

### toString()

> **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

`typescript.TypeScriptProject.toString`

***

### tryFindFile()

> **tryFindFile**(`filePath`): `FileBase` \| `undefined`

Finds a file at the specified relative path within this project and all
its subprojects.

#### Parameters

##### filePath

`string`

The file path. If this path is relative, it will be resolved
from the root of _this_ project.

#### Returns

`FileBase` \| `undefined`

a `FileBase` or undefined if there is no file in that path

#### Inherited from

`typescript.TypeScriptProject.tryFindFile`

***

### ~~tryFindJsonFile()~~

> **tryFindJsonFile**(`filePath`): `JsonFile` \| `undefined`

Finds a json file by name.

#### Parameters

##### filePath

`string`

The file path.

#### Returns

`JsonFile` \| `undefined`

#### Deprecated

use `tryFindObjectFile`

#### Inherited from

`typescript.TypeScriptProject.tryFindJsonFile`

***

### tryFindObjectFile()

> **tryFindObjectFile**(`filePath`): `ObjectFile` \| `undefined`

Finds an object file (like JsonFile, YamlFile, etc.) by name.

#### Parameters

##### filePath

`string`

The file path.

#### Returns

`ObjectFile` \| `undefined`

#### Inherited from

`typescript.TypeScriptProject.tryFindObjectFile`

***

### tryRemoveFile()

> **tryRemoveFile**(`filePath`): `FileBase` \| `undefined`

Finds a file at the specified relative path within this project and removes
it.

#### Parameters

##### filePath

`string`

The file path. If this path is relative, it will be
resolved from the root of _this_ project.

#### Returns

`FileBase` \| `undefined`

a `FileBase` if the file was found and removed, or undefined if
the file was not found.

#### Inherited from

`typescript.TypeScriptProject.tryRemoveFile`

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

`typescript.TypeScriptProject.with`

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

`typescript.TypeScriptProject.isConstruct`

***

### isProject()

> `static` **isProject**(`x`): `x is Project`

Test whether the given construct is a project.

#### Parameters

##### x

`any`

#### Returns

`x is Project`

#### Inherited from

`typescript.TypeScriptProject.isProject`

***

### of()

> `static` **of**(`construct`): `Project`

Find the closest ancestor project for given construct.
When given a project, this it the project itself.

#### Parameters

##### construct

`IConstruct`

#### Returns

`Project`

#### Throws

when no project is found in the path to the root

#### Inherited from

`typescript.TypeScriptProject.of`
