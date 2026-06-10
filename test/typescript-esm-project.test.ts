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
import {
  RepoBuildPackageModel,
  TypeScriptESMProject,
} from "../src/typescript-esm-project";

test("typescript-esm-project-version-file", () => {
  // Arrange - Given

  // Act - When
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

  // Assert - Then
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
  // Arrange - Given

  // Act - When
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

  // Assert - Then
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
  // Arrange - Given

  // Act - When
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

  // Assert - Then
  // create the project
  const snapshot = Testing.synth(esmProject);

  // parse the file so it can be evaluated
  const yamlDocument = YAML.parse(snapshot[".pre-commit-config.yaml"]);

  expect(preCommitConfig.path).toBeDefined();
  expect(snapshot["package.json"].type).toBe("module");
  expect(yamlDocument.repos).toBeDefined();
  expect(yamlDocument.repos.length).toBe(5);
  expect(yamlDocument.repos[0].repo).toBe(
    "https://github.com/commitizen-tools/commitizen",
  );
});

test("typescript-esm-project-instantiate esLintFlatConfig", () => {
  // Arrange - Given

  // Act - When
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.PNPM,

    eslintFlatConfig: true,
  });

  // Assert - Then
  // create the project
  const snapshot = Testing.synth(esmProject);

  expect(snapshot["package.json"].type).toBe("module");
  expect(snapshot["eslint.config.ts"].length).toBeGreaterThan(0);
});

test("typescript-esm-project-instantiate precommitConfig", () => {
  // Arrange - Given

  // Act - When
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.PNPM,

    precommitConfig: true,
  });

  // Assert - Then
  // create the project
  const snapshot = Testing.synth(esmProject);

  // read the file
  const synthedFile = snapshot[".pre-commit-config.yaml"];

  // parse the file so it can be evaluated
  const yamlDocument = YAML.parse(synthedFile);

  expect(snapshot["package.json"].type).toBe("module");
  expect(yamlDocument.repos).toBeDefined();
  expect(yamlDocument.repos.length).toBe(3);
  expect(yamlDocument.repos[0].repo).toBe(
    "https://github.com/commitizen-tools/commitizen",
  );
});

test("typescript-esm-project-instantiate prettierFlatConfig, precommitConfig", () => {
  // Arrange - Given

  // Act - When
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.PNPM,

    precommitConfig: true,
    prettierFlatConfig: true,
  });

  // Assert - Then
  // create the project
  const snapshot = Testing.synth(esmProject);

  // read the file
  const synthedFile = snapshot[".pre-commit-config.yaml"];

  // parse the file so it can be evaluated
  const yamlDocument = YAML.parse(synthedFile);

  // read the prettier.config.ts file
  const prettierFile = snapshot["prettier.config.ts"];

  expect(snapshot["package.json"].type).toBe("module");
  expect(yamlDocument.repos).toBeDefined();
  expect(yamlDocument.repos.length).toBe(4);
  expect(yamlDocument.repos[0].repo).toBe(
    "https://github.com/commitizen-tools/commitizen",
  );
  expect(prettierFile.length).toBeGreaterThan(0);
});

test("typescript-esm-project-instantiate addDocIndex, apiDocumentation", () => {
  // Arrange - Given

  // Act - When
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.PNPM,

    docsIndex: true,
    apiDocumentation: true,
    apiEntryPoints: ["src/file1.ts", "src/file2.ts"],
  });

  // Assert - Then
  // create the project
  const snapshot = Testing.synth(esmProject);

  // read the file
  const synthedTypedoc = snapshot["typedoc.json"];

  // read the prettier.config.ts file
  const docsIndexFile = snapshot["docs/index.md"];

  expect(docsIndexFile.length).toBeGreaterThan(0);
  expect(docsIndexFile.startsWith("# Introduction")).toBe(true);
  expect(synthedTypedoc.entryPoints[0]).toBe("src/file1.ts");
  expect(synthedTypedoc.out).toBe("docs/api");
  expect(synthedTypedoc.disableSources).toBe(true);
});

test("typescript-esm-project-instantiate packageManger NPM, buildTagTask, addVersionFile", () => {
  // Arrange - Given

  // Act - When
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.NPM,

    buildTagTask: true,
    addVersionFile: true,
  });

  // Assert - Then
  // create the project
  const snapshot = Testing.synth(esmProject);

  // read the file
  const synthedPackageJson = snapshot["package.json"];

  // read the prettier.config.ts file
  const tasksJson = snapshot[".projen/tasks.json"];

  expect(synthedPackageJson.scripts["build:tag"]).toBe("projen build:tag");
  expect(synthedPackageJson.scripts["build:tag:env"]).toBe(
    "projen build:tag:env",
  );
  expect(tasksJson.tasks["build:tag"].steps[0].name).toBe("set environment");
  expect(tasksJson.tasks["setpkg:version"].steps[0].exec).toStrictEqual(
    "npm version --no-git-tag-version from-git --allow-same-version",
  );
  expect(tasksJson.tasks["build:tag:env"].steps[1].spawn).toStrictEqual(
    "stash:push",
  );
  expect(tasksJson.tasks["create-version"].steps[0].exec).toStrictEqual(
    "npm run create-version",
  );
});

test("typescript-esm-project-instantiate packageManger PNPM, buildTagTask, addVersionFile", () => {
  // Arrange - Given

  // Act - When
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.PNPM,

    buildTagTask: true,
    addVersionFile: true,
  });

  // Assert - Then
  // create the project
  const snapshot = Testing.synth(esmProject);

  // read the file
  const synthedPackageJson = snapshot["package.json"];

  // read the prettier.config.ts file
  const tasksJson = snapshot[".projen/tasks.json"];

  expect(synthedPackageJson.scripts["build:tag"]).toBe("projen build:tag");
  expect(synthedPackageJson.scripts["build:tag:env"]).toBe(
    "projen build:tag:env",
  );
  expect(tasksJson.tasks["build:tag"].steps[0].name).toBe("set environment");
  expect(tasksJson.tasks["setpkg:version"].steps[0].exec).toStrictEqual(
    "pnpm version --no-git-tag-version from-git --allow-same-version",
  );
  expect(tasksJson.tasks["build:tag:env"].steps[1].spawn).toStrictEqual(
    "stash:push",
  );
  expect(tasksJson.tasks["create-version"].steps[0].exec).toStrictEqual(
    "pnpm create-version",
  );
});

test("typescript-esm-project-instantiate packageManger NPM, buildTagTask, addVersionFile", () => {
  // Arrange - Given

  // Act - When
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.NPM,

    buildTagTask: true,
    addVersionFile: true,
  });

  // Assert - Then
  // create the project
  const snapshot = Testing.synth(esmProject);

  // read the file
  const synthedPackageJson = snapshot["package.json"];

  // read the prettier.config.ts file
  const tasksJson = snapshot[".projen/tasks.json"];

  expect(synthedPackageJson.scripts["build:tag"]).toBe("projen build:tag");
  expect(synthedPackageJson.scripts["build:tag:env"]).toBe(
    "projen build:tag:env",
  );
  expect(tasksJson.tasks["build:tag"].steps[0].name).toBe("set environment");
  expect(tasksJson.tasks["setpkg:version"].steps[0].exec).toStrictEqual(
    "npm version --no-git-tag-version from-git --allow-same-version",
  );
  expect(tasksJson.tasks["build:tag:env"].steps[1].spawn).toStrictEqual(
    "stash:push",
  );
  expect(tasksJson.tasks["create-version"].steps[0].exec).toStrictEqual(
    "npm run create-version",
  );
});

test("typescript-esm-project-instantiate packageManger PNPM, GITHUB_BUILD_PACKAGE", () => {
  // Arrange - Given

  // Act - When
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.PNPM,

    repoBuildPackageModel: RepoBuildPackageModel.GITHUB_BUILD_PACKAGE,
  });

  // Assert - Then
  // create the project
  const snapshot = Testing.synth(esmProject);

  // read the file
  const synthedPackageJson = snapshot["package.json"];

  expect(synthedPackageJson.type).toStrictEqual("module");
});
