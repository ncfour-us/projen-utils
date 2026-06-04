// Copyright (c) 2024 Tim Hahn

import { test, expect } from "@jest/globals";

// import { Component, Project } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { Testing } from "projen/lib/testing";

import { TypeScriptProject } from "projen/lib/typescript";

import { sampleReadmeProps, ReadmeSampleFile } from "../src/readme-sample";

test("readme all options specified, getSampleReadmeProps() method", () => {
  const project = new TypeScriptProject({
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.NPM,

    // enable prettier
    prettier: true,

    readme: sampleReadmeProps({
      author: "someone",
      license: "MIT",
      project: "test-project",
      namespace: "@test-namespace",
      organization: "test-organization",
      authorEmail: "someone@example.com",
      authorGithubUser: "someGithubUser",
    }),
  });

  const snapshot = Testing.synth(project);

  // get information from synthed project
  const synthedReadme = snapshot["README.md"];

  console.log(synthedReadme);

  const authorExists = synthedReadme.search(/someone/);
  const organizationExists = synthedReadme.search(/test-organization/);

  expect(synthedReadme.length).toBeGreaterThan(0);
  expect(authorExists).toBeGreaterThanOrEqual(0);
  expect(organizationExists).toBeGreaterThanOrEqual(0);
});

test("readme all options specified, ReadmeSampleFile() construct", () => {
  const project = new TypeScriptProject({
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.NPM,

    // enable prettier
    prettier: true,

    // NOTE: by not setting the "readme" option, the project
    // will DEFAULT to creating a "README.md" file.
  });

  new ReadmeSampleFile(project, {
    author: "authorName",
    license: "MIT",
    project: "test-project",
    namespace: "@test-namespace",
    organization: "test-organization",
    authorEmail: "emailid@example.com",
    authorGithubUser: "githubUserId",
  });

  const snapshot = Testing.synth(project);

  // get information from synthed project
  const synthedReadme = snapshot["README.md"];

  const authorExists = synthedReadme.search(/authorName/);
  const organizationExists = synthedReadme.search(/test-organization/);

  expect(synthedReadme.length).toBeGreaterThan(0);
  expect(authorExists).toBeGreaterThanOrEqual(0);
  expect(organizationExists).toBeGreaterThanOrEqual(0);
});
