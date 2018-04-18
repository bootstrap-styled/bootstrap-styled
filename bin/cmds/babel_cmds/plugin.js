/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle, prefer-destructuring */
const async = require('async');

function install(argv, name, done) {
  async.series([
    (cb) => spawn(`npm install --save-dev ${name}`, cb),
    (cb) => {
      const babelRcPath = path.join(argv.path, '.babelrc');
      const babelRc = JSON.parse(fs.readFileSync(babelRcPath, { encoding: 'utf8' }));
      const pluginName = name.indexOf('babel-plugin-') === -1 ? name : name.slice(name.indexOf('babel-plugin-') + 'babel-plugin-'.length);
      if (babelRc.plugins.indexOf(pluginName) === -1) {
        babelRc.plugins.push(pluginName);
      }
      fs.writeFileSync(babelRcPath, JSON.stringify(babelRc, null, 2), { encoding: 'utf8' });
      cb(null, `${name} plugin installed and inserted in .babelrc`);
    },
    (cb) => spawn(`npm run rollup-umd -- changelog add 'Install babel plugin ${name}'`, cb),
  ], done);
}

exports.command = 'plugin <package> [packages..]';
exports.desc = 'Install package and append to .babelrc the plugin(s) with `babel-plugin-` truncated';
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
  async.map([].concat(argv.package).concat(argv.packages), (name, cb) => install(argv, name, cb), (err, results) => {
    if (err) {
      console.error(`[ERROR] ${err.message}`);
      process.exit(1);
    }
    console.log(results.join('\n'));
  });
};
