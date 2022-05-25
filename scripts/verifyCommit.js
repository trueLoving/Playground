// Invoked on the commit-msg git hook by husky.

// const fs = require('fs')
// const path = require('path')
// const cwd = process.cwd()
// const chalk = require('chalk')
// const msg = fs.readFileSync(path.join(cwd, '.git/COMMIT_EDITMSG'), 'utf-8')

// const releaseRE = /^v\d/
// const commitRE = /^(revert: )?(feat|fix|style|docs|typo|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/

// if (!releaseRE.test(msg) && !commitRE.test(msg)) {
//   console.log()
//   console.error(
//     `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
//       `invalid commit message format.`
//     )}\n\n` +
//     chalk.red(
//       `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
//     ) +
//     `    ${chalk.green(`feat: add 'comments' option`)}\n` +
//     `    ${chalk.green(`fix: handle events on blur (close #28)`)}\n\n` +
//     chalk.red(`  See .github/commit-convention.md for more details.\n`)
//   )
//   process.exit(1)
// }
