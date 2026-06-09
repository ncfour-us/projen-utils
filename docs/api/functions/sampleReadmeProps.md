[@ncfour-us/projen-utils](../index.md) / sampleReadmeProps

# Function: sampleReadmeProps()

> **sampleReadmeProps**(`options?`): `SampleReadmeProps`

This function is used to pass the result of creating this Construct
to another project's constructor.

For projects which have a `readme` option in their constructor, use
this function as follows:
```typescript
  ...
  readme: sampleReadmeProps(...),
  ...
```

## Parameters

### options?

[`ReadmeSampleFileOptions`](../interfaces/ReadmeSampleFileOptions.md)

ReadmeSampleFileOptions to be used in adjusting the README file

## Returns

`SampleReadmeProps`

SampleReadmeProps to be used in a Project constructor
