// Copyright (c) 2024 Tim Hahn

import { test, expect } from "@jest/globals";

// import { LogLevel } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { Testing } from "projen/lib/testing";

import { TypeScriptProject } from "projen/lib/typescript";

import YAML from "yaml";

import { PnpmWorkspace } from "../src/pnpm-workspace";

test("PnpmWorkspace - no options", () => {
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
  new PnpmWorkspace(project);

  const snapshot = Testing.synth(project);

  // Assert - Then

  // get information from synthed project
  const synthedPnpmWorkspace = snapshot["pnpm-workspace.yaml"];

  const pnpmWorkspace = YAML.parse(synthedPnpmWorkspace);

  console.log(`synthed file:\n${synthedPnpmWorkspace}`);

  expect(pnpmWorkspace.packages).toBeDefined();
  expect(pnpmWorkspace.packages[0]).toBe("packages/*");
  expect(pnpmWorkspace.minimumReleaseAge).toBe(1440);
  expect(pnpmWorkspace.blockExoticSubdeps).toBe(true);
  expect(pnpmWorkspace.trustPolicy).toBe("no-downgrade");
  expect(JSON.stringify(pnpmWorkspace.allowBuilds)).toBe(
    JSON.stringify({
      electron: true,
      esbuild: true,
    }),
  );
});

test("PnpmWorkspace - zero length packages array", () => {
  // Arrange - Given
  const project = new TypeScriptProject({
    // logging: {
    //   level: LogLevel.DEBUG,
    // },
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.NPM,
  });

  // Act - When
  new PnpmWorkspace(project, {
    packages: [],
  });

  const snapshot = Testing.synth(project);

  // Assert - Then

  // get information from synthed project
  const synthedPnpmWorkspace = snapshot["pnpm-workspace.yaml"];

  const pnpmWorkspace = YAML.parse(synthedPnpmWorkspace);

  console.log(`synthed file:\n${synthedPnpmWorkspace}`);

  expect(pnpmWorkspace.packages).toBeUndefined();
  expect(pnpmWorkspace.minimumReleaseAge).toBe(1440);
  expect(pnpmWorkspace.blockExoticSubdeps).toBe(true);
  expect(pnpmWorkspace.trustPolicy).toBe("no-downgrade");
  expect(JSON.stringify(pnpmWorkspace.allowBuilds)).toBe(
    JSON.stringify({
      electron: true,
      esbuild: true,
    }),
  );
});
