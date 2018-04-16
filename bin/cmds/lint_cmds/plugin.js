/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle */
const async = require('async');

function install(plugin, argv, done) {
  const pkgPath = path.join(argv.path, 'package.json');
  const pkg = require(pkgPath);
  const { eslintConfig } = pkg;
  if (!eslintConfig.plugins) {
    eslintConfig.plugins = [];
  }

  eslintConfig.plugins.push(plugin);

  const newPkg = {
    ...pkg,
    eslintConfig,
  };

  fs.writeFileSync(pkgPath, JSON.stringify(newPkg, null, 2), { encoding: 'utf8' });
  done();
}

exports.command = 'plugin <name> [names..]';
exports.desc = 'Append a plugin to eslintConfig';
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

  async.map([].concat(argv.name).concat(argv.names), (name, cb) => install(name, argv, cb), (err, results) => {
    if (err) {
      console.error(`[ERROR] ${err.message}`);
      process.exit(1);
    }
  });
};
