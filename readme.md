# serverless-ts-starter

Starter Boilerplate for building a project using Serverless & Typescript.
This project contains a sample serverless.yml file and sets up dotenv and typescript to be used with it.

## Setup Instructions

1. Clone or download the project.
2. `cd` in the project directory.
3. If you cloned the project, make sure you remove the remote reference to this project by running `git remote rm origin`.
4. Copy `.env.example` to `.env` as that file is used to load up all your environment variables.
4. Run `yarn install` or `npm install` to install all dependencies.

## Commands

- `yarn serverless:hello-world`: Basically invokes a serverless function locally. Example command.
- `yarn lint`: To run the ESLint based linter to find out the issues in the project.
- `yarn format`: To autoformat all the issues.
- `yarn console tinker`: If you need a Node.js based Typescript REPL, run this to be able to quickly test scripts and small pieces of code.
- `yarn upgrade --latest`: To upgrade all packages to their latest versions (could include breaking changes).
