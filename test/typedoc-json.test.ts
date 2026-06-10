// Copyright (c) 2024 Tim Hahn

import { test, expect } from "@jest/globals";

// import { LogLevel } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { Testing } from "projen/lib/testing";

import { TypeScriptProject } from "projen/lib/typescript";

import { TypedocJson } from "../src/typedoc-json";

test("TypedocJson - no options", () => {
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
  new TypedocJson(project);

  const snapshot = Testing.synth(project);

  // Assert - Then

  // get information from synthed project
  const synthedTypedoc = snapshot["typedoc.json"];

  expect(synthedTypedoc.out).toStrictEqual("docs/api");
  expect(synthedTypedoc.readme).toStrictEqual("none");
  expect(synthedTypedoc.disableSources).toStrictEqual(true);
});

test("TypedocJson - only entryPoints option", () => {
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
  new TypedocJson(project, {
    entryPoints: ["src/my-entry.ts"],
  });

  const snapshot = Testing.synth(project);

  // Assert - Then

  // get information from synthed project
  const synthedTypedoc = snapshot["typedoc.json"];

  expect(synthedTypedoc.out).toStrictEqual("docs/api");
  expect(synthedTypedoc.readme).toStrictEqual("none");
  expect(synthedTypedoc.entryPoints).toStrictEqual(["src/my-entry.ts"]);
});

test("TypedocJson - override out option", () => {
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
  new TypedocJson(project, {
    entryPoints: ["src/my-entry.ts"],
    out: "mydocs/api",
  });

  const snapshot = Testing.synth(project);

  // Assert - Then

  // get information from synthed project
  const synthedTypedoc = snapshot["typedoc.json"];

  expect(synthedTypedoc.out).toStrictEqual("mydocs/api");
  expect(synthedTypedoc.readme).toStrictEqual("none");
  expect(synthedTypedoc.entryPoints).toStrictEqual(["src/my-entry.ts"]);
});

test("TypedocJson - add arbitrary option", () => {
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
  new TypedocJson(project, {
    entryPoints: ["src/my-entry.ts"],
    anotherOption: "optionValue",
  });

  const snapshot = Testing.synth(project);

  // Assert - Then

  // get information from synthed project
  const synthedTypedoc = snapshot["typedoc.json"];

  expect(synthedTypedoc.out).toStrictEqual("docs/api");
  expect(synthedTypedoc.readme).toStrictEqual("none");
  expect(synthedTypedoc.entryPoints).toStrictEqual(["src/my-entry.ts"]);
  expect(synthedTypedoc.anotherOption).toStrictEqual("optionValue");
});
