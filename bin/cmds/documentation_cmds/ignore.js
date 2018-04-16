/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle, prefer-destructuring */
const async = require('async');

exports.command = 'ignore <glob> [globs..]';
exports.desc = 'Push to styleguideConfig.ignore the provided <glob>';
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
  const configPath = path.join(argv.path, 'styleguide/styleguide.config.json');
  const config = require(configPath);

  async.map([].concat(argv.glob).concat(argv.globs), (glob, cb) => {
    cb(null, glob);
  }, (err, results) => {
    if (err) {
      console.error(`[ERROR] ${err.message}`);
      process.exit(1);
    }
    config.ignore = [...new Set(config.ignore.concat(Object.values(results)))];
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), { encoding: 'utf8' });
  });
};
