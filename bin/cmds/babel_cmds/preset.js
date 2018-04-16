/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle, prefer-destructuring */
const async = require('async');

function install(argv, name, done) {
  const babelRcPath = path.join(argv.path, '.babelrc');
  const babelRc = JSON.parse(fs.readFileSync(babelRcPath, 'utf8'));
  babelRc.presets.push(name);
  fs.writeFileSync(babelRcPath, JSON.stringify(babelRc, null, 2), { encoding: 'utf8' });

  spawn(`npm run rollup-umd -- changelog add 'Install babel preset ${name}'`, () => {
    done(null, `${name} preset inserted in .babelrc`);
  });
}

exports.command = 'preset <name> [names..]';
exports.desc = 'Append to .babelrc the preset(s)';
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
  async.map([].concat(argv.name).concat(argv.names), (name, cb) => install(argv, name, cb), (err, results) => {
    if (err) {
      console.error(`[ERROR] ${err.message}`);
      process.exit(1);
    }
    console.log(results.join('\n'));
  });
};
