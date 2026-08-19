// Copyright (c) 2024 Tim Hahn

import { test, expect } from "@jest/globals";

// import { LogLevel } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { Testing } from "projen/lib/testing";

import { TypeScriptProject } from "projen/lib/typescript";

import { ExamplesFolder } from "../src/examples-folder";

test("ExamplesFolder - no options", () => {
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
  new ExamplesFolder(project);

  const snapshot = Testing.synth(project);

  // Assert - Then

  // get information from synthed project
  const synthedExamplesTsconfig = snapshot["examples/tsconfig.json"];
  const synthedExamplesFile = snapshot["examples/example.ts"];

  expect(synthedExamplesTsconfig).toBeDefined();
  expect(synthedExamplesFile).toBeDefined();
});

test("ExamplesFolder - set examplesFolderName", () => {
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
  new ExamplesFolder(project, {
    examplesFolderName: "my-examples",
  });

  const snapshot = Testing.synth(project);

  // Assert - Then

  // get information from synthed project
  const synthedExamplesTsconfig = snapshot["my-examples/tsconfig.json"];
  const synthedExampleFile = snapshot["my-examples/example.ts"];
  const notCreatedFile = snapshot["examples/tsconfig.json"];

  expect(synthedExamplesTsconfig).toBeDefined();
  expect(synthedExampleFile).toBeDefined();
  expect(notCreatedFile).toBeUndefined();
});

test("ExamplesFolder - skip example.ts", () => {
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
  new ExamplesFolder(project, {
    exampleTsFile: false,
  });

  const snapshot = Testing.synth(project);

  // Assert - Then

  // get information from synthed project
  const synthedExamplesTsconfig = snapshot["examples/tsconfig.json"];
  const synthedExamplesFile = snapshot["examples/example.ts"];

  expect(synthedExamplesTsconfig).toBeDefined();
  expect(synthedExamplesFile).toBeUndefined();
});
