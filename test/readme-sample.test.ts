// Copyright (c) 2024 Tim Hahn

import { test, expect, beforeEach, describe } from "@jest/globals";

// import { Component, Project } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { Testing } from "projen/lib/testing";

import { TypeScriptProject } from "projen/lib/typescript";

import { sampleReadmeProps, ReadmeSampleFile } from "../src/readme-sample";

describe("sampleReadmeProps() tests", () => {
  test("readme all options specified, sampleReadmeProps() function", () => {
    // Arrange - Given

    // Act - When
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

    // Assert - Then
    const snapshot = Testing.synth(project);

    // get information from synthed project
    const synthedReadme = snapshot["README.md"];

    const authorExists = synthedReadme.search(/someone/);
    const organizationExists = synthedReadme.search(/test-organization/);

    expect(synthedReadme.length).toBeGreaterThan(0);
    expect(authorExists).toBeGreaterThanOrEqual(0);
    expect(organizationExists).toBeGreaterThanOrEqual(0);
  });
});

describe("ReadmeSampleFile construct tests", () => {
  let project: TypeScriptProject;

  beforeEach(() => {
    project = new TypeScriptProject({
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
  });

  test("readme all options specified, ReadmeSampleFile() construct", () => {
    // Arrange - Given

    // Act - When
    new ReadmeSampleFile(project, {
      author: "authorName",
      license: "MIT",
      project: "test-project",
      namespace: "@test-namespace",
      organization: "test-organization",
      authorEmail: "emailid@example.com",
      authorGithubUser: "githubUserId",
    });

    // Assert - Then
    const snapshot = Testing.synth(project);

    // get information from synthed project
    const synthedReadme = snapshot["README.md"];

    const authorExists = synthedReadme.search(/authorName/);
    const organizationExists = synthedReadme.search(/test-organization/);

    expect(synthedReadme.length).toBeGreaterThan(0);
    expect(authorExists).toBeGreaterThanOrEqual(0);
    expect(organizationExists).toBeGreaterThanOrEqual(0);
  });

  test("readme npmScope option specified, ReadmeSampleFile() construct", () => {
    // Arrange - Given

    // Act - When
    new ReadmeSampleFile(project, {
      project: "test-project",
      npmScope: "@test-scope",
    });

    // Assert - Then
    const snapshot = Testing.synth(project);

    // get information from synthed project
    const synthedReadme = snapshot["README.md"];

    const fullProjectExists = synthedReadme.search(/@test-scope\/test-project/);

    expect(synthedReadme.length).toBeGreaterThan(0);
    expect(fullProjectExists).toBeGreaterThanOrEqual(0);
  });

  test("readme namespece option specified, ReadmeSampleFile() construct", () => {
    // Arrange - Given

    // Act - When
    new ReadmeSampleFile(project, {
      project: "test-project",
      namespace: "@test-namespace",
    });

    // Assert - Then
    const snapshot = Testing.synth(project);

    // get information from synthed project
    const synthedReadme = snapshot["README.md"];

    const fullProjectExists = synthedReadme.search(
      /@test-namespace\/test-project/,
    );

    expect(synthedReadme.length).toBeGreaterThan(0);
    expect(fullProjectExists).toBeGreaterThanOrEqual(0);
  });

  test("readme no scope specified, ReadmeSampleFile() construct", () => {
    // Arrange - Given

    // Act - When
    new ReadmeSampleFile(project, {
      project: "test-project",
    });

    // Assert - Then
    const snapshot = Testing.synth(project);

    // get information from synthed project
    const synthedReadme = snapshot["README.md"];

    const scopeFound = synthedReadme.search(/{{npmScope}}\/test-project/);

    expect(synthedReadme.length).toBeGreaterThan(0);
    expect(scopeFound).toBeLessThan(0);
  });

  test("readme organization specified, ReadmeSampleFile() construct", () => {
    // Arrange - Given

    // Act - When
    new ReadmeSampleFile(project, {
      project: "test-project",
      organization: "test-organization",
    });

    // Assert - Then
    const snapshot = Testing.synth(project);

    // get information from synthed project
    const synthedReadme = snapshot["README.md"];

    const fullRepoNameExists = synthedReadme.search(
      /test-organization\/test-project/,
    );

    expect(synthedReadme.length).toBeGreaterThan(0);
    expect(fullRepoNameExists).toBeGreaterThanOrEqual(0);
  });

  test("readme organization specified, ReadmeSampleFile() construct", () => {
    // Arrange - Given

    // Act - When
    new ReadmeSampleFile(project, {
      project: "test-project",
      organization: "test-organization",
      authorGithubUser: "test-user",
    });

    // Assert - Then
    const snapshot = Testing.synth(project);

    // get information from synthed project
    const synthedReadme = snapshot["README.md"];

    const fullRepoNameExists = synthedReadme.search(
      /test-organization\/test-project/,
    );
    const userRepoNameFound = synthedReadme.search(/test-user\/test-project/);

    expect(synthedReadme.length).toBeGreaterThan(0);
    expect(fullRepoNameExists).toBeGreaterThanOrEqual(0);
    expect(userRepoNameFound).toBeLessThan(0);
  });

  test("readme only user specified, ReadmeSampleFile() construct", () => {
    // Arrange - Given

    // Act - When
    new ReadmeSampleFile(project, {
      project: "test-project",
      authorGithubUser: "test-user",
    });

    // Assert - Then
    const snapshot = Testing.synth(project);

    // get information from synthed project
    const synthedReadme = snapshot["README.md"];

    const fullRepoNameExists = synthedReadme.search(/test-user\/test-project/);

    expect(synthedReadme.length).toBeGreaterThan(0);
    expect(fullRepoNameExists).toBeGreaterThanOrEqual(0);
  });
});
