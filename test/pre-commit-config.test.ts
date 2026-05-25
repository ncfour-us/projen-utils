// Copyright (c) 2024 Tim Hahn

import { spawn } from "child_process";
import fs from "fs";
import { test, expect } from "@jest/globals";

import { typescript } from "projen";
import { NodePackageManager } from "projen/lib/javascript";

import YAML from "yaml";

import {
  PreCommitConfigFile,
  PreCommitConfigFileTypes,
} from "../src/pre-commit-config";

test("pre-commit-config defaults", () => {
  const project = new typescript.TypeScriptProject({
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.NPM,

    // enable prettier
    prettier: true,
  });

  const preCommitConfig = new PreCommitConfigFile(project);

  // create the file
  preCommitConfig.synthesize();

  // read the file
  const synthedFile = fs.readFileSync(
    `${project.outdir}/.pre-commit-config.yaml`,
    { encoding: "utf-8" },
  );

  // parse the file so it can be evaluated
  const yamlDocument = YAML.parse(synthedFile);

  // clean up the synthesized folder
  spawn("rm", ["-rf", project.outdir]);

  expect(preCommitConfig.path).toBeDefined();
  expect(yamlDocument.repos).toBeDefined();
  expect(yamlDocument.repos.length).toBe(2);
  expect(yamlDocument.repos[0].repo).toBe(
    "https://github.com/commitizen-tools/commitizen",
  );
});

test("pre-commit-config PYTHON, TYPESCRIPT, default packageManager", () => {
  const project = new typescript.TypeScriptProject({
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.NPM,

    // enable prettier
    prettier: true,
  });

  const preCommitConfig = new PreCommitConfigFile(project, {
    fileTypes: [
      PreCommitConfigFileTypes.PYTHON,
      PreCommitConfigFileTypes.TYPESCRIPT,
    ],
  });

  // create the file
  preCommitConfig.synthesize();

  // read the file
  const synthedFile = fs.readFileSync(
    `${project.outdir}/.pre-commit-config.yaml`,
    { encoding: "utf-8" },
  );

  // parse the file so it can be evaluated
  const yamlDocument = YAML.parse(synthedFile);

  // clean up the synthesized folder
  spawn("rm", ["-rf", project.outdir]);

  expect(preCommitConfig.path).toBeDefined();
  expect(yamlDocument.repos).toBeDefined();
  expect(yamlDocument.repos.length).toBe(6);
  expect(yamlDocument.repos[0].repo).toBe(
    "https://github.com/commitizen-tools/commitizen",
  );
  expect(yamlDocument.repos[5].hooks[0].entry).toStrictEqual("npm run eslint");
});

test("pre-commit-config PNPM, TYPESCRIPT only", () => {
  const project = new typescript.TypeScriptProject({
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.PNPM,

    // enable prettier
    prettier: true,
  });

  const preCommitConfig = new PreCommitConfigFile(project, {
    fileTypes: [PreCommitConfigFileTypes.TYPESCRIPT],
    packageManager: NodePackageManager.PNPM,
  });

  // create the file
  preCommitConfig.synthesize();

  // read the file
  const synthedFile = fs.readFileSync(
    `${project.outdir}/.pre-commit-config.yaml`,
    { encoding: "utf-8" },
  );

  // parse the file so it can be evaluated
  const yamlDocument = YAML.parse(synthedFile);

  // clean up the synthesized folder
  spawn("rm", ["-rf", project.outdir]);

  expect(preCommitConfig.path).toBeDefined();
  expect(yamlDocument.repos).toBeDefined();
  expect(yamlDocument.repos.length).toBe(4);
  expect(yamlDocument.repos[0].repo).toBe(
    "https://github.com/commitizen-tools/commitizen",
  );
  expect(yamlDocument.repos[3].hooks[0].entry).toStrictEqual("pnpm eslint");
});

test("pre-commit-config YARN, TYPESCRIPT only", () => {
  const project = new typescript.TypeScriptProject({
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.YARN_BERRY,

    // enable prettier
    prettier: true,
  });

  const preCommitConfig = new PreCommitConfigFile(project, {
    fileTypes: [PreCommitConfigFileTypes.TYPESCRIPT],
    packageManager: NodePackageManager.YARN_BERRY,
  });

  // create the file
  preCommitConfig.synthesize();

  // read the file
  const synthedFile = fs.readFileSync(
    `${project.outdir}/.pre-commit-config.yaml`,
    { encoding: "utf-8" },
  );

  // parse the file so it can be evaluated
  const yamlDocument = YAML.parse(synthedFile);

  // clean up the synthesized folder
  spawn("rm", ["-rf", project.outdir]);

  expect(preCommitConfig.path).toBeDefined();
  expect(yamlDocument.repos).toBeDefined();
  expect(yamlDocument.repos.length).toBe(4);
  expect(yamlDocument.repos[0].repo).toBe(
    "https://github.com/commitizen-tools/commitizen",
  );
  expect(yamlDocument.repos[3].hooks[0].entry).toStrictEqual("yarn eslint");
});

test("pre-commit-config BUN, TYPESCRIPT only", () => {
  const project = new typescript.TypeScriptProject({
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.BUN,

    // enable prettier
    prettier: true,
  });

  const preCommitConfig = new PreCommitConfigFile(project, {
    fileTypes: [PreCommitConfigFileTypes.TYPESCRIPT],
    packageManager: NodePackageManager.BUN,
  });

  // create the file
  preCommitConfig.synthesize();

  // read the file
  const synthedFile = fs.readFileSync(
    `${project.outdir}/.pre-commit-config.yaml`,
    { encoding: "utf-8" },
  );

  // parse the file so it can be evaluated
  const yamlDocument = YAML.parse(synthedFile);

  // clean up the synthesized folder
  spawn("rm", ["-rf", project.outdir]);

  expect(preCommitConfig.path).toBeDefined();
  expect(yamlDocument.repos).toBeDefined();
  expect(yamlDocument.repos.length).toBe(4);
  expect(yamlDocument.repos[0].repo).toBe(
    "https://github.com/commitizen-tools/commitizen",
  );
  expect(yamlDocument.repos[3].hooks[0].entry).toStrictEqual("bun run eslint");
});
