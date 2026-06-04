// Copyright (c) 2024 Tim Hahn

import { readFileSync } from "node:fs";

import { SampleFile, Project, SampleReadmeProps } from "projen";

/**
 * Used to configure the PreCommitConfigFile construct
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

  readonly author?: string;

  readonly authorEmail?: string;

  readonly authorGithubUser?: string;

  readonly license?: string;
}

/**
 * This construct defines a README.md sample file for the project.
 *
 * By creating this file, the `README.md` file at the top of the
 * project will contain a set of sections which are typical
 * for TypeScript projects.
 */
export class ReadmeSampleFile extends SampleFile {
  private readonly filename: string;
  private readonly fileContents: string;

  /**
   * Creates a `ReadmeSampleFile` construct and adds it to the project.
   *
   * @param scope the project that this construct belongs to
   * @param options options to replace place-holders in the file
   */
  constructor(project: Project, options?: ReadmeSampleFileOptions) {
    const filename: string = options?.filename ?? "README.md";

    const fileContents: string = generateFileContents(options);

    super(project, filename, {
      contents: fileContents,
    });

    this.filename = filename;
    this.fileContents = fileContents;
  }

  getSampleReadmeProps(): SampleReadmeProps {
    return {
      filename: this.filename,
      contents: this.fileContents,
    };
  }
}

export function getSampleReadmeProps(
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
