import { cdk } from "projen";
const project = new cdk.JsiiProject({
  author: "Tim Hahn",
  authorAddress: "hahntj@gmail.com",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.3.0",
  name: "projen-utils",
  projenrcTs: true,
  repositoryUrl: "https://github.com/hahntj/projen-utils.git",

  // set up the package name in package.json
  packageName: "@ncfour/projen-utils",

  // set up the project with a LICENSE and copyright info
  license: "MIT",
  copyrightOwner: "Tim Hahn",
  copyrightPeriod: "2024",

  // eslint options
  eslintOptions: {
    dirs: ["src"],
    prettier: true,
  },

  /* Peer dependencies of this module. */
  // Needed to switch this from deps to peerDeps for 'projen' and 'constructs' when switching to a JSII module
  peerDeps: ["projen", "constructs"],

  /* Build dependencies for this module. */
  // Needed to add peerDeps for 'projen' and 'constructs' to devDeps as well when switching to a JSII module
  devDeps: [
    "projen",
    "constructs",
    "@types/node",
    "@jest/globals",
    "fs",
    "yaml",
  ],
});
project.synth();
