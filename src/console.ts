/* eslint-disable import/no-extraneous-dependencies */
import ts from 'typescript'
import { Command } from 'commander'
import { loadCompiler } from '@adonisjs/require-ts'
import { Repl } from '@adonisjs/repl/build/standalone'

const program = new Command()

// Basically just a placeholder section to tinker with scripts
// and then just run `yarn console tinker` and it'll do whatever's described below.
program
  .command('tinker')
  .description('Basically just a placeholder section to tinker with scripts')
  .action(() => {
    const repl = new Repl(
      loadCompiler(__dirname, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2019,
          module: ts.ModuleKind.CommonJS,
          allowSyntheticDefaultImports: true,
          esModuleInterop: true,
        },
      }),
    )

    repl.start()
  })

program.parse()
