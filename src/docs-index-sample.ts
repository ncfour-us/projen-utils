// Copyright (c) 2026 Tim Hahn

import { readFileSync } from "node:fs";

import { SampleFile, Project } from "projen";

/**
 * Options for the `DocsIndexSampleFile` construct
 */
export interface DocsIndexSampleFileOptions {
  /**
   * The folder name to use for storing documentation
   *
   * @default 'docs'
   */
  readonly docsFolderName?: string;

  /**
   * Generate a `_config.yml` file in the docs folder
   *
   * @default true
   */
  readonly githubPagesConfig?: boolean;
}

/**
 * This construct defines a `docs/index.md` sample file for the project.
 *
 */
export class DocsIndexSampleFile extends SampleFile {
  /**
   * Creates a `DocsIndexSampleFile` construct and adds it to the project.
   *
   * @param project the project that this construct belongs to
   */
  constructor(project: Project, options?: DocsIndexSampleFileOptions) {
    const fileContents: string = readFileSync(
      `${__dirname}/files/docs-index.md.sample`,
      {
        encoding: "utf8",
      },
    );

    const docsFolderName: string = options?.docsFolderName ?? "docs";
    const githubPagesConfig: boolean = options?.githubPagesConfig ?? true;

    super(project, `${docsFolderName}/index.md`, {
      contents: fileContents,
    });

    if (githubPagesConfig) {
      new SampleFile(project, `${docsFolderName}/_config.yml`, {
        contents: `
# This is a configuration file for Github Pages

# More information on this file can be found at:
#  https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll

remote_theme: pages-themes/slate@v0.2.0
plugins:
- jekyll-remote-theme # add this line to the plugins list if you already have one

title: "TODO: enter title here"
description: "TODO: enter description here"

show_downloads: true
        `,
      });
    }
  }
}
