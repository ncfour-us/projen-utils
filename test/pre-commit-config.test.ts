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

test("pre-commit-config-instantiate", () => {
  const project = new typescript.TypeScriptProject({
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.NPM,
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
  expect(yamlDocument.repos.length).toBe(4);
  expect(yamlDocument.repos[0].repo).toBe(
    "https://github.com/pre-commit/pre-commit-hooks",
  );
});
