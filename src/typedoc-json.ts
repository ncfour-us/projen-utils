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

  /**
   * Additional options to add to the `pnpm-workspace.yaml` file
   *
   * @jsii ignore
   */
  [key: string]: string | string[] | boolean | number | object | undefined;
}

/**
 * This construct defines a `typedoc.json` file for the project
 * which is used by the `typedoc` tool when generating API documentation
 * for the project.
 *
 */
export class TypedocJson extends JsonFile {
  /**
   * Creates a `TypedocJson` construct and adds it to the project.
   *
   * The `typedoc.json` file is also added to the package ignore list.
   *
   * @param project the project that this construct belongs to
   */
  constructor(project: Project, options?: TypedocJsonOptions) {
    super(project, "typedoc.json", {
      obj: {
        $schema: "https://typedoc.org/schema.json",
        plugin: ["typedoc-plugin-markdown"],
        out: "docs/api",
        cleanOutputDir: true,
        readme: "none",
        disableSources: true,
        // typedoc-plugin-markdown options
        entryFileName: "index",
        mergeReadme: false,
        hidePageHeader: true,
        ...options,
        entryPoints: options?.entryPoints ?? undefined,
      },
      marker: false,
    });

    project.addPackageIgnore("typedoc.json");
  }
}
