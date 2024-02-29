import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Tim Hahn',
  authorAddress: 'hahntj@gmail.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'projen-utils',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/hahntj/projen-utils.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();