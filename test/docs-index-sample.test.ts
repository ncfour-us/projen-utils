// Copyright (c) 2024 Tim Hahn

import { test, expect } from "@jest/globals";

// import { LogLevel } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { Testing } from "projen/lib/testing";

import { TypeScriptProject } from "projen/lib/typescript";

import { DocsIndexSampleFile } from "../src/docs-index-sample";

test("DocsIndexSampleFile - no options", () => {
  // Arrange - Given
  const project = new TypeScriptProject({
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.NPM,
  });

  // Act - When
  new DocsIndexSampleFile(project);

  const snapshot = Testing.synth(project);

  // Assert - Then

  // get information from synthed project
  const synthedDocsIndex = snapshot["docs/index.md"];
  const synthedConfigYml = snapshot["docs/_config.yml"];

  expect(synthedDocsIndex).toBeDefined();
  expect(synthedConfigYml).toBeDefined();
});

test("DocsIndexSampleFile - set docsFolderName", () => {
  // Arrange - Given
  const project = new TypeScriptProject({
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.NPM,
  });

  // Act - When
  new DocsIndexSampleFile(project, {
    docsFolderName: "mydocs",
  });

  const snapshot = Testing.synth(project);

  // Assert - Then

  // get information from synthed project
  const synthedDocsIndex = snapshot["mydocs/index.md"];
  const synthedConfigYml = snapshot["mydocs/_config.yml"];

  expect(synthedDocsIndex).toBeDefined();
  expect(synthedConfigYml).toBeDefined();
});

test("DocsIndexSampleFile - skip _config.yml", () => {
  // Arrange - Given
  const project = new TypeScriptProject({
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.NPM,
  });

  // Act - When
  new DocsIndexSampleFile(project, {
    githubPagesConfig: false,
  });

  const snapshot = Testing.synth(project);

  // Assert - Then

  // get information from synthed project
  const synthedDocsIndex = snapshot["docs/index.md"];
  const synthedConfigYml = snapshot["docs/_config.yml"];

  expect(synthedDocsIndex).toBeDefined();
  expect(synthedConfigYml).toBeUndefined();
});
