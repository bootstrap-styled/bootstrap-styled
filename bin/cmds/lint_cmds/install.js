/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle */
const async = require('async');

function install(argv, filename, done) {
  const packageJsonPath = path.join(argv.path, 'package.json');
  const packageJson = require(packageJsonPath);
  const json = require(path.join(argv.path, filename)); // eslint-disable-line global-require
  packageJson.eslintConfig.rules = Object.assign(packageJson.eslintConfig.rules, json);
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), { encoding: 'utf8' });

  spawn(`npm run rollup-umd -- changelog add 'Inserted linting rules from file ${filename}'`, () => {
    done(null, `${filename} inserted in package.json`);
  });
}

exports.command = ['install <file> [files..]', 'add'];
exports.desc = 'Read lint rule from json file and add it to package.json';
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

  async.map([].concat(argv.file).concat(argv.files), (filename, cb) => install(argv, filename, cb), (err, results) => {
    if (err) {
      console.error(`[ERROR] ${err.message}`);
      process.exit(1);
    }
    console.log(results.join('\n'));
  });
};
