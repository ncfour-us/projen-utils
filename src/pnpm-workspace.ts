// Copyright (c) 2024 Tim Hahn

import { YamlFile, Project } from "projen";
import { NodePackageManager, NodeProject } from "projen/lib/javascript";

/**
 * Used to configure the PreCommitConfigFile construct
 *
 * If any values are NOT set, then the associated markers
 * in the sample file will NOT be replaced.  This allows
 * an author to easily find and replace those values
 * when updating the file after the project has been
 * synthesized.
 */
export interface PnpmWorkspaceOptions {
  /**
   * package folders for the monorepo workspace
   */
  readonly packages?: string[];

  /**
   * pnpm.minimumReleaseAge value for pnpm-workspace.yaml
   */
  readonly minimumReleaseAge?: number;

  /**
   * pnpm.blockExoticSubdeps value for pnpm-workspace.yaml
   */
  readonly blockExoticSubdeps?: number;

  /**
   * pnpm.trustPolicy value for pnpm-workspace.yaml
   */
  readonly trustPolicy?: string;

  /**
   * pnpm.allowBuilds value for pnpm-workspace.yaml
   */
  readonly allowBuilds?: { [key: string]: boolean };

  /**
   * Additional options to add to the `pnpm-workspace.yaml` file
   *
   * @jsii ignore
   */
  [key: string]: string | string[] | boolean | number | object | undefined;
}

/**
 * This construct defines a pnpm-workspace.yaml file for the project.
 *
 * Only a subset of options for the pnpm-workspace.yaml file are
 * supported.  Opinionated default values for the supported options
 * are configured when not specified in the constructdor.
 */
export class PnpmWorkspace extends YamlFile {
  /**
   * Creates a `PnpmWorksapce` construct and adds it to the project.
   *
   * The `pnpm-workspace.yaml` file is also added to the package ignore list.
   *
   * @param scope the project that this construct belongs to
   * @param options options to set various settings in pnpm-workspace.yaml
   */
  constructor(project: Project, options?: PnpmWorkspaceOptions) {
    const contents: any = {
      ...options, // pass through any additional configuration attributes
      packages: options?.packages
        ? options.packages.length === 0
          ? undefined
          : options.packages
        : ["packages/*"],
      minimumReleaseAge: options?.minimumReleaseAge || 1440,
      blockExoticSubdeps: options?.blockExoticSubdeps || true,
      trustPolicy: options?.trustPolicy || "no-downgrade",
      allowBuilds: options?.allowBuilds || {
        electron: true,
        esbuild: true,
      },
    };

    super(project, "pnpm-workspace.yaml", {
      obj: contents,
    });

    (project as NodeProject).addPackageIgnore("pnpm-workspace.yaml");

    if (
      (project as NodeProject).package.packageManager !==
      NodePackageManager.PNPM
    ) {
      project.logger?.warn(
        `project appears to be using ${(project as NodeProject).package.packageManager} rather than pnpm`,
      );
    }
  }
}
