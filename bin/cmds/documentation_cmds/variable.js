/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle, prefer-destructuring */
const async = require('async');
const glob = require('glob');

exports.command = 'variable <variable> [variables..]';
exports.desc = 'Replace variable(s) in `docs/**/*.md` (eg: `SOMETHING=value`)';
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

  const d = path.join(argv.path, 'docs');

  const options = {
    nonull: true,
  };
  glob(`${d}/**/*.md`, options, (er, files) => {
    files.forEach((file) => {
      async.map([].concat(argv.variable).concat(argv.variables), (variable, cb) => {
        const split = variable.split('=');
        let before = split[0];
        before = before[0] === '$' ? before : `$${before}`;
        const after = split[1];
        const output = file;
        sedReplace(output, before, after, output, cb);
      }, (err, results) => {
        if (err) {
          console.error(`[ERROR] ${err.message}`);
          process.exit(1);
        }
      });
    });
  });
};
