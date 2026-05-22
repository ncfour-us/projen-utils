// Copyright (c) 2024 Tim Hahn

// import { spawn, spawnSync } from "child_process";
// import fs from "fs";
import { test, expect } from "@jest/globals";

import { NodePackageManager } from "projen/lib/javascript";
import { Testing } from "projen/lib/testing";

import YAML from "yaml";

import {
  PreCommitConfigFile,
  PreCommitConfigFileTypes,
} from "../src/pre-commit-config";
import { TypeScriptESMProject } from "../src/typescript-esm-project";

test("typescript-esm-project-version-file", () => {
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",
    // add versionFile to project
    addVersionFile: true,

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.PNPM,
  });

  // create the project
  const snapshot = Testing.synth(esmProject);

  // get information from synthed project
  const synthedGitIgnore = snapshot[".gitignore"];

  const gitIgnoreLines = synthedGitIgnore.split("\n");

  let foundVersionIgnore = false;
  for (const line of gitIgnoreLines) {
    if (line === "src/version.ts") {
      foundVersionIgnore = true;
    }
  }

  // unit test checks
  expect(snapshot["package.json"].type).toBe("module");
  expect(
    snapshot["package.json"].scripts["create-version"].startsWith("echo"),
  ).toBe(true);
  expect(foundVersionIgnore).toBe(true);
});

test("typescript-esm-project-commands", () => {
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",
    // add commands to project
    commands: [
      {
        name: "command1",
        file: "command1.js",
      },
      {
        name: "command2",
        file: "command2.js",
      },
    ],

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.PNPM,
  });

  // create the project
  const snapshot = Testing.synth(esmProject);

  // unit test checks
  expect(snapshot["package.json"].type).toBe("module");
  expect(snapshot["package.json"].scripts.command1).toBe(
    "node ./lib/command1.js",
  );
  expect(snapshot["package.json"].scripts.command2).toBe(
    "node ./lib/command2.js",
  );
  expect(snapshot["package.json"].bin.command1).toBe("./lib/command1.js");
  expect(snapshot["package.json"].bin.command2).toBe("./lib/command2.js");
});

test("typescript-esm-project-instantiate", () => {
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.PNPM,
  });

  const preCommitConfig = new PreCommitConfigFile(esmProject, {
    fileTypes: [
      PreCommitConfigFileTypes.PYTHON,
      PreCommitConfigFileTypes.TYPESCRIPT,
    ],
  });

  // create the project
  const snapshot = Testing.synth(esmProject);

  // parse the file so it can be evaluated
  const yamlDocument = YAML.parse(snapshot[".pre-commit-config.yaml"]);

  expect(preCommitConfig.path).toBeDefined();
  expect(snapshot["package.json"].type).toBe("module");
  expect(yamlDocument.repos).toBeDefined();
  expect(yamlDocument.repos.length).toBe(6);
  expect(yamlDocument.repos[0].repo).toBe(
    "https://github.com/commitizen-tools/commitizen",
  );
});

test("typescript-esm-project-instantiate esLintFlatConfig", () => {
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.PNPM,

    eslintFlatConfig: true,
  });

  // create the project
  const snapshot = Testing.synth(esmProject);

  expect(snapshot["package.json"].type).toBe("module");
  expect(snapshot["eslint.config.ts"].length).toBeGreaterThan(0);
});

test("typescript-esm-project-instantiate precommitConfig", () => {
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.PNPM,

    precommitConfig: true,
  });

  // create the project
  const snapshot = Testing.synth(esmProject);

  // read the file
  const synthedFile = snapshot[".pre-commit-config.yaml"];

  // parse the file so it can be evaluated
  const yamlDocument = YAML.parse(synthedFile);

  expect(snapshot["package.json"].type).toBe("module");
  expect(yamlDocument.repos).toBeDefined();
  expect(yamlDocument.repos.length).toBe(4);
  expect(yamlDocument.repos[0].repo).toBe(
    "https://github.com/commitizen-tools/commitizen",
  );
});
