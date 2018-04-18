/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle, prefer-destructuring, no-shadow */
const async = require('async');

exports.command = 'copy';
exports.desc = 'Copy template documentation from `internal/templates/docs` to `docs`.';
exports.builder = (yargs) => yargs
  .option('path', {
    alias: 'p',
    describe: 'path',
    default: process.cwd(),
  });
exports.handler = (argv, cb) => {
  switch (argv.path[0]) {
    case '/':
      break;
    default:
      argv.path = argv.path[1] === '/' ? path.join(process.cwd(), argv.path.slice(2)) : path.join(process.cwd(), argv.path);
      break;
  }

  const p = path.join(argv.path, 'internals/templates/docs');
  const d = path.join(argv.path, 'docs');
  async.series([
    (cb) => spawn(`mkdir -p ${d}`, cb),
  ], (err, results) => {
    if (err) {
      console.error(`[ERROR] ${err.message}`);
      process.exit(1);
    }
    const files = fs.readdirSync(p);
    async.map(files, (file, done) => spawn(`cp ${path.join(p, file)} ${path.join(d, file)}`, done), (err, results) => {
      if (err) {
        console.error(`[ERROR] ${err.message}`);
        process.exit(1);
      }
      if (cb) {
        cb(null, results);
      }
    });
  });
};
