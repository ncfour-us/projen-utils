// Copyright (c) 2024 Tim Hahn

import { test, expect } from "@jest/globals";

// import { Component, Project } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { Testing } from "projen/lib/testing";

import { TypeScriptProject } from "projen/lib/typescript";

import { getSampleReadmeProps } from "../src/readme-sample";

test("readme all options specified", () => {
  const project = new TypeScriptProject({
    name: "test-project",
    description: "test-project description",
    packageName: "test-package-name",
    defaultReleaseBranch: "main",

    // Remove implied dependency on/use of yarn package manager
    packageManager: NodePackageManager.NPM,

    // enable prettier
    prettier: true,

    readme: getSampleReadmeProps({
      author: "tim",
      license: "MIT",
      project: "test-project",
      namespace: "@test-namespace",
      organization: "test-organization",
      authorEmail: "tim@ncfour.us",
      authorGithubUser: "timgh",
    }),
  });

  // project.tryRemoveFile("./README.md");

  // const readme2File = new ReadmeSampleFile(project, {
  //   author: "tim",
  //   license: "MIT",
  //   project: "test-project",
  //   namespace: "@test-namespace",
  //   organization: "test-organization",
  //   authorEmail: "tim@ncfour.us",
  //   authorGithubUser: "timgh",
  // });

  // const path = project.tryRemoveFile("./README.md");
  // console.log(`return from tryRemoveFile: ${path?.toString()}`);
  // tryRemoveFile(project, "README.md");

  // console.log(`added readme: ${readme2File.toString()}`);

  const snapshot = Testing.synth(project);

  // get information from synthed project
  const synthedReadme = snapshot["README.md"];

  console.log(synthedReadme);

  expect(synthedReadme.length).toBeGreaterThan(0);
});

// function tryFindGenericFile(
//   project: Project,
//   filePath: string,
// ): Component | undefined {
//   // const absolute = filePath;
//   console.log(`finding: ${filePath}`);

//   const candidate = project.node.findAll().find((c): c is Component => {
//     const id = c.node.id.toString();
//     const matchSample = id.startsWith("SampleReadme");
//     console.log(`node: ${c.node.id.toString()}, match: ${matchSample}`);
//     return isComponent(c) && c.node.id.toString().startsWith("SampleReadme");
//   });

//   return candidate;
// }

// function tryRemoveFile(
//   project: Project,
//   filePath: string,
// ): Component | undefined {
//   const candidate = tryFindGenericFile(project, filePath);

//   console.log(`candidate: ${candidate?.node.id}`);

//   if (candidate) {
//     candidate.node.scope?.node.tryRemoveChild(candidate.node.id);
//     return candidate;
//   }

//   return undefined;
// }

// // function isFile(c: Component): c is FileBase {
// //   return c instanceof FileBase;
// // }

// const COMPONENT_SYMBOL = Symbol.for("projen.Component");

// function isComponent(x: unknown): x is Component {
//   return x !== null && typeof x === "object" && COMPONENT_SYMBOL in x;
// }
