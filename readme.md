# serverless-ts-starter

Starter Boilerplate for building a project using Serverless & Typescript.
This project contains a sample serverless.yml file and sets up dotenv and typescript to be used with it.

## Setup Instructions

1. Clone or download the project.
2. `cd` in the project directory.
3. If you cloned the project, make sure you remove the remote reference to this project by running `git remote rm origin`.
4. Copy `.env.example` to `.env` as that file is used to load up all your environment variables.
4. Run `yarn install` or `npm install` to install all dependencies.

## Features

- Git Hooks using [Husky](https://typicode.github.io/husky/) that run code and commit message linters before changes are committed.
- Source Code Lint using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).
- Commit Message linting with [commitlint](https://github.com/conventional-changelog/commitlint). Setup to use the [conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) style of commit messages.
- To help developers automatically write good commit messages, [commitizen](https://commitizen-tools.github.io/commitizen/) is fully setup to use the conventional style of commit messages.
  - Additionally, [devmoji](https://github.com/folke/devmoji) has been setup to emojify commit messages. These are also setup as a `prepare-commit-msg` git hook. If you wish to remove it, please update `.husky/prepare-commit-msg` and `package.json`.

## Commands

- `yarn serverless:hello-world`: Basically invokes a serverless function locally. Example command.
- `yarn lint`: To run the ESLint based linter to find out the issues in the project.
- `yarn format`: To autoformat all the issues.
- `yarn commit`: Launches an interactive terminal-based commit message writer. Uses [commitizen](https://commitizen-tools.github.io/commitizen/).
- `yarn console tinker` or `yarn tinker`: If you need a Node.js based Typescript REPL, run this to be able to quickly test scripts and small pieces of code.
- `yarn upgrade --latest`: To upgrade all packages to their latest versions (could include breaking changes).
