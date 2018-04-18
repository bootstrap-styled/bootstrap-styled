/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle */
const async = require('async');

exports.command = 'variable <variable> [variables..]';
exports.desc = 'Replace variable(s) in README.md (eg: SOMETHING=value)';
exports.builder = (yargs) => yargs
  .option('path', {
    alias: 'p',
    describe: 'path',
    default: process.cwd(),
  });
exports.handler = (argv) => {
  switch (argv.path[0]) {
    case '/':
      break;
    default:
      argv.path = argv.path[1] === '/' ? path.join(process.cwd(), argv.path.slice(2)) : path.join(process.cwd(), argv.path);
      break;
  }

  const d = path.join(argv.path, 'README.md');

  async.map([].concat(argv.variable).concat(argv.variables), (variable, cb) => {
    const split = variable.split('=');
    let before = split[0];
    before = before[0] === '$' ? before : `$${before}`;
    const after = split[1];
    sedReplace(d, before, after, d, cb);
  }, (err, results) => {
    if (err) {
      console.error(`[ERROR] ${err.message}`);
      process.exit(1);
    }
  });
};
