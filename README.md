# projen-utils

This project contains a couple of constructs which are meant
to be used with the [projen](https://projen.io) project.  These utilities
extend existing `projen` constructs to enable easier development
of TypeScript ESM projects/packages as well as handling
`pre-commit` configuration in `projen`-managed projects.

## Badges

![GitHub top language](https://img.shields.io/github/languages/top/ncfour-us/projen-utils?logo=typescript)
![GitHub License](https://img.shields.io/github/license/ncfour-us/projen-utils?logo=github)
![GitHub Release](https://img.shields.io/github/v/release/ncfour-us/projen-utils?logo=github)
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/ncfour-us/projen-utils?logo=github)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-raw/ncfour-us/projen-utils?logo=github)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/ncfour-us/projen-utils?logo=github)

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ncfour-us/projen-utils/release.yml?label=release&logo=github)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ncfour-us/projen-utils/upgrade-main.yml?label=upgrade-main&logo=github)

![NPM Version](https://img.shields.io/npm/v/%40ncfour-us%2Fprojen-utils?logo=npm)
![NPM Last Update](https://img.shields.io/npm/last-update/%40ncfour-us%2Fprojen-utils?logo=npm)
![NPM Downloads](https://img.shields.io/npm/dw/%40ncfour-us%2Fprojen-utils?logo=npm)

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## Installation

Install using `npm`, `yarn`, or `pnpm` (preferred).

```bash
pnpm add --save-dev @ncfour-us/projen-utils
```

## Getting Started

> Documentation on constructs.dev: [@ncfour-us/projen-utils](https://constructs.dev/packages/@ncfour-us/projen-utils/)
>
> Project documentation: [@ncfour-us/projen-utils](https://ncfour-us.github.io/projen-utils)

The `TypeScriptESMProject` supports both "local" and "Github workflow" styles
of build/release handling.  (**NOTE**: "Github workflow" handling is still
under development).

### Local build and release processing

With "local" style builds/releases, a project is managed from a user's
workstation terminal interface, using the `pnpm build` and `pnpm release`
commands.

Support exists for publishing build artifacts to:

- "local" archive (a folder on the local workstation)
- "npm" package registry (the [NPM](https://npmjs.com) Package registry)
- "github" creating tagged releases in the associated Github-hosted Git repository

There are some preparatory steps required before publishing to NPM and Github
will work.

For publishing to NPM, the package **MUST** have first been created in NPM
by a manual publishing step.

The command to publish to NPM is:

```bash
npm publish <file name .tgz file containing the package> --access public
```

This command will create the package in the NPM registry.

The command to create a Github repository, using the `gh` GitHub CLI is:

```bash
gh repo create ncfour-us/byte-buffer --public --source=. --remote=origin
```

This command will use the contents of the current folder to create a
Git repository on Github and link the remote repository with name `origin`.

After creating the repository, use `git push` to link the `main` branch
of the local repository to the `main` branch in GitHub using command:

```bash
git push -u origin main
```

Once these steps are completed, the publish tasks for NPM and GitHub can
be enabled by setting:

```typescript
    ...
    releaseToNpm: true,
    releaseToGithub: true
    ...
```

in the constructor options of the `TypeScriptESMProject` project.

When running `pnpm release` locally, there is a requirement that the user
has active login credentials to both NPM and GitHub.  For NPM, 2FA login
is **required** when running a `npm publish`.  If interactive user
credentials are being used, the user will be prompted to supply their
2FA login info during the `publish:npm` task processing.

To login to GitHub, use the `gh auth login` command.  Login status
can be checked using the `gh auth status` command.  GitHub login credentials
are used during the `publish:github` task processing.

## Contributing

Fork this repository and submit a PR.

## Authors

- Tim Hahn ([hahntj@gmail.com](mailto:hahntj@gmail.com), github: @climbertjh)

## License

The project is covered by the MIT license, see [LICENSE](./LICENSE).

## Acknowledgements
