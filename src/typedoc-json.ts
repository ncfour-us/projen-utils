// Copyright (c) 2026 Tim Hahn

import { JsonFile, Project } from "projen";

/**
 * Used to configure the TypedocJson construct
 *
 */
export interface TypedocJsonOptions {
  /**
   * source file entry point(s) which define the API
   *
   * If not specified, Typedoc will use information from `package.json`
   */
  readonly entryPoints?: string[];
}

/**
 * This construct defines a docs/index.md sample file for the project.
 *
 */
export class TypedocJson extends JsonFile {
  /**
   * Creates a `DocsIndexSampleFile` construct and adds it to the project.
   *
   * @param scope the project that this construct belongs to
   */
  constructor(project: Project, options: TypedocJsonOptions) {
    super(project, "typedoc.json", {
      obj: {
        $schema: "https://typedoc.org/schema.json",
        plugin: ["typedoc-plugin-markdown"],
        entryPoints: options?.entryPoints ?? undefined,
        out: "docs/api",
        cleanOutputDir: true,
        readme: "none",
        disableSources: true,
        // typedoc-plugin-markdown options
        entryFileName: "index",
        mergeReadme: false,
        hidePageHeader: true,
      },
      marker: false,
    });

    project.addPackageIgnore("typedoc.json");
  }
}
