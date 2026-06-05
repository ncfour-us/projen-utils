// Copyright (c) 2024 Tim Hahn

import { readFileSync } from "node:fs";

import { IConstruct } from "constructs";
import { SampleFile, Project, SampleReadmeProps, Component } from "projen";

/**
 * Used to configure the ReadmeSampleFile construct
 *
 * If any values are NOT set, then the associated markers
 * in the sample file will NOT be replaced.  This allows
 * an author to easily find and replace those values
 * when updating the file after the project has been
 * synthesized.
 */
export interface ReadmeSampleFileOptions {
  /**
   * filename of the Readme sample file
   */
  readonly filename?: string;

  /**
   * Namespace/organization/user associated with the Git repository.
   */
  readonly namespace?: string;

  /**
   * Name of the Git repository.
   */
  readonly project?: string;

  /**
   * Namespace/organization/user associated with the Git repository.
   */
  readonly organization?: string;

  /**
   * Author of the project.
   */
  readonly author?: string;

  /**
   * Author e-mail for the project.
   */
  readonly authorEmail?: string;

  /**
   * Author github user for the project.
   */
  readonly authorGithubUser?: string;

  /**
   * Designated license for the project.
   */
  readonly license?: string;
}

/**
 * This construct defines a README.md sample file for the project.
 *
 * By creating this file, the `README.md` file at the top of the
 * project will contain a set of sections which are typical
 * for TypeScript projects.
 *
 * In many cases, this construct will not be provided on the
 * initial creation of the project.  This results in the default
 * `README.md` file being created (as a sample file which is
 * only created if the file does not already exist).
 *
 * To replace the default file with the `README.md` file (sample)
 * provided by this construct, perform the following steps:
 * 1) remove the current `README.md` file (use `rm` or `git rm`)
 * 1) add this construct to your `.projenrc.ts` file
 * 1) re-run `pnpm projen` to update configuration files
 *
 * At this point, the `README.md` file at the top of the project
 * should contain the text provided by this construct.
 *
 * Complete the change by committing the updates with `git commit`.
 */
export class ReadmeSampleFile extends SampleFile {
  // static methods for walking the Component tree to find the SampleReadme
  private static tryRemoveSampleReadme(
    project: Project,
    filePath: string,
  ): Component | undefined {
    const candidate = ReadmeSampleFile.tryFindSampleReadme(project, filePath);

    if (candidate) {
      candidate.node.scope?.node.tryRemoveChild(candidate.node.id);
      return candidate;
    }

    return undefined;
  }

  private static tryFindSampleReadme(
    project: Project,
    filePath: string,
  ): Component | undefined {
    // use the components getter to get all the components in the project
    // go through the components, looking for a SampleReadme object
    // with filePath attribute which matches the supplied filePath
    const candidate: Component = project.components.find((c: IConstruct) => {
      // determine if the item is a SampleReadme
      let foundFilePath: [string, any] | undefined;
      if (isComponent(c) && c.node.id.toString().startsWith("SampleReadme")) {
        // we have a possible candidate, now check if the filePath matches
        const objEntries = Object.entries(c);
        foundFilePath = objEntries.find((entry) => {
          return entry[0] === "filePath" && entry[1] === filePath;
        });
      }

      // the construct meets both criteria, return true
      if (foundFilePath) {
        return true;
      }

      return false;
    }) as Component;

    return candidate;
  }

  // private members
  private readonly filename: string;
  private readonly fileContents: string;

  /**
   * Creates a `ReadmeSampleFile` construct and adds it to the project.
   *
   * @param project the project that this construct belongs to
   * @param options options to replace place-holders in the file
   */
  constructor(project: Project, options?: ReadmeSampleFileOptions) {
    const filename: string = options?.filename ?? "README.md";

    const fileContents: string = generateFileContents(options);

    // if there is already a SampleReadme construct, with the specified filename
    // try to remove it before calling the SampleFile constructor
    // Since a SampleFile is a Component, NOT a FileBase, tryRemoveFile()
    // will not find the SampleReadme construct.
    ReadmeSampleFile.tryRemoveSampleReadme(project, filename);

    super(project, filename, {
      contents: fileContents,
    });

    this.filename = filename;
    this.fileContents = fileContents;
  }

  /**
   *
   * This getter could be used to pass the result of creating this Construct
   * to another project's constructor.
   *
   * @returns SampleReadmeProps to be passed to the `readme` property on Project constructors
   */
  public get sampleReadmeProps(): SampleReadmeProps {
    return {
      filename: this.filename,
      contents: this.fileContents,
    };
  }
}

/**
 *
 * This function is used to pass the result of creating this Construct
 * to another project's constructor.
 *
 * For projects which have a `readme` option in their constructor, use
 * this function as follows:
 * ```typescript
 *   ...
 *   readme: sampleReadmeProps(...),
 *   ...
 * ```
 *
 * @param options ReadmeSampleFileOptions to be used in adjusting the README file
 * @returns SampleReadmeProps to be used in a Project constructor
 */
export function sampleReadmeProps(
  options?: ReadmeSampleFileOptions,
): SampleReadmeProps {
  return {
    filename: options?.filename ?? "README.md",
    contents: generateFileContents(options),
  };
}

function generateFileContents(options?: ReadmeSampleFileOptions) {
  const namespace: string = options?.namespace ?? "{{namespace}}";
  const projectName: string = options?.project ?? "{{project}}";
  const organization: string = options?.organization ?? "{{organization}}";
  const author: string = options?.author ?? "{{author}}";
  const authorEmail: string = options?.authorEmail ?? "{{authorEmail}}";
  const authorGithubUser: string =
    options?.authorGithubUser ?? "{{authorGithubUser}}";
  const license: string = options?.license ?? "{{license}}";

  let fileContents: string = readFileSync(
    `${__dirname}/files/README.md.sample`,
    {
      encoding: "utf8",
    },
  );

  fileContents = replaceAll(fileContents, "{{namespace}}", namespace);
  fileContents = replaceAll(fileContents, "{{project}}", projectName);
  fileContents = replaceAll(fileContents, "{{organization}}", organization);
  fileContents = replaceAll(fileContents, "{{author}}", author);
  fileContents = replaceAll(fileContents, "{{authorEmail}}", authorEmail);
  fileContents = replaceAll(
    fileContents,
    "{{authorGithubUser}}",
    authorGithubUser,
  );
  fileContents = replaceAll(fileContents, "{{license}}", license);

  return fileContents;
}

function replaceAll(
  source: string,
  target: string,
  replacement: string,
): string {
  const regExp: RegExp = new RegExp(target, "g");

  return source.replace(regExp, replacement);
}

// This code was copied from the projen project as a way
// of determining if a given node in a Construct tree
// is a projen component.
const COMPONENT_SYMBOL = Symbol.for("projen.Component");

function isComponent(x: unknown): x is Component {
  return x !== null && typeof x === "object" && COMPONENT_SYMBOL in x;
}
// End copied code
