// Copyright (c) 2026 Tim Hahn

import { readFileSync } from "node:fs";

import { SampleFile, Project } from "projen";

/**
 * This construct defines a docs/index.md sample file for the project.
 *
 */
export class DocsIndexSampleFile extends SampleFile {
  /**
   * Creates a `DocsIndexSampleFile` construct and adds it to the project.
   *
   * @param scope the project that this construct belongs to
   */
  constructor(project: Project) {
    const fileContents: string = readFileSync(
      `${__dirname}/files/docs-index.md.sample`,
      {
        encoding: "utf8",
      },
    );

    super(project, "docs/index.md", {
      contents: fileContents,
    });
  }
}
