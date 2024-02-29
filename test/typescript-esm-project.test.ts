// Copyright (c) 2024 Tim Hahn

import { spawn } from "child_process";
import fs from "fs";
import { test, expect } from "@jest/globals";

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
  });

  // create the project
  esmProject.synth();

  // read the package.json file
  const synthedPackageJson = fs.readFileSync(
    `${esmProject.outdir}/package.json`,
    { encoding: "utf-8" },
  );

  // parse the file so it can be evaluated
  const packageJson = JSON.parse(synthedPackageJson);

  const createVersionCommand = packageJson.scripts["create-version"];

  // read the package.json file
  const synthedGitIgnore = fs.readFileSync(`${esmProject.outdir}/.gitignore`, {
    encoding: "utf-8",
  });

  const gitIgnoreLines = synthedGitIgnore.split("\n");

  let foundVersionIgnore = false;
  for (const line of gitIgnoreLines) {
    if (line === "src/version.ts") {
      foundVersionIgnore = true;
    }
  }

  // clean up the synthesized folder
  spawn("rm", ["-rf", esmProject.outdir]);

  // unit test checks
  expect(packageJson.type).toBe("module");
  expect(createVersionCommand.startsWith("echo")).toBe(true);
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
  });

  // create the project
  esmProject.synth();

  // read the package.json file
  const synthedPackageJson = fs.readFileSync(
    `${esmProject.outdir}/package.json`,
    { encoding: "utf-8" },
  );

  // parse the file so it can be evaluated
  const packageJson = JSON.parse(synthedPackageJson);

  const command1Command = packageJson.scripts.command1;
  const command2Command = packageJson.scripts.command2;

  const command1Bin = packageJson.bin.command1;
  const command2Bin = packageJson.bin.command2;

  // clean up the synthesized folder
  spawn("rm", ["-rf", esmProject.outdir]);

  // unit test checks
  expect(packageJson.type).toBe("module");
  expect(command1Command).toBe("node ./lib/command1.js");
  expect(command2Command).toBe("node ./lib/command2.js");
  expect(command1Bin).toBe("./lib/command1.js");
  expect(command2Bin).toBe("./lib/command2.js");
});

test("typescript-esm-project-instantiate", () => {
  const esmProject = new TypeScriptESMProject({
    name: "test-esm-project",
    description: "test-esm-project description",
    packageName: "test-esm-package-name",
    defaultReleaseBranch: "main",
  });

  const preCommitConfig = new PreCommitConfigFile(esmProject, {
    fileTypes: [
      PreCommitConfigFileTypes.PYTHON,
      PreCommitConfigFileTypes.TYPESCRIPT,
    ],
  });

  // create the project
  esmProject.synth();

  // read the file
  const synthedPackageJson = fs.readFileSync(
    `${esmProject.outdir}/package.json`,
    { encoding: "utf-8" },
  );

  // parse the file so it can be evaluated
  const packageJson = JSON.parse(synthedPackageJson);

  // read the file
  const synthedFile = fs.readFileSync(
    `${esmProject.outdir}/.pre-commit-config.yaml`,
    { encoding: "utf-8" },
  );

  // parse the file so it can be evaluated
  const yamlDocument = YAML.parse(synthedFile);

  // clean up the synthesized folder
  spawn("rm", ["-rf", esmProject.outdir]);

  expect(preCommitConfig.path).toBeDefined();
  expect(packageJson.type).toBe("module");
  expect(yamlDocument.repos).toBeDefined();
  expect(yamlDocument.repos.length).toBe(4);
  expect(yamlDocument.repos[0].repo).toBe(
    "https://github.com/pre-commit/pre-commit-hooks",
  );
});
