/**
 * Run this script from the project directory with `npm run install-external $moduleName`
 */
const fs = require('fs');
const path = require('path');
const async = require('async');
const npmUtils = require(path.join(__dirname, '../utils/npm'));

const babelRcPath = path.join(__dirname, '../../.babelrc');

function installBabelRc(name, cb) {
  const babelRc = JSON.parse(fs.readFileSync(babelRcPath, { encoding: 'utf8' }));
  const pluginName = name.indexOf('babel-plugin-') === -1 ? name : name.slice(name.indexOf('babel-plugin-') + 'babel-plugin-'.length);
  if (babelRc.plugins.indexOf(pluginName) === -1) {
    babelRc.plugins.push(pluginName);
  }

  fs.writeFileSync(babelRcPath, JSON.stringify(babelRc, null, 2), { encoding: 'utf8' });
  cb();
}


function installBabelPluginList(dependencyList, cb) {
  async.eachSeries(dependencyList, (name, done) => {
    installBabelPlugin(name, done);
  }, cb);
}

function installBabelPlugin(dependency, cb) {
  const name = dependency;

  async.auto({
    installDevDependency: (done) => {
      npmUtils.installDevDependency(name, done);
    },
    installBabelRc: ['installDevDependency', (results, done) => {
      installBabelRc(name, done);
    }],
  }, (err, results) => {
    if (err) {
      throw err;
    }
    if (cb) cb(err, results);
  });
}


function help() {
  console.log('');
  console.log('    npm run rollup-umd install-babel-plugin [packageName] [...]');
  console.log('');
  console.log('example:');
  console.log('');
  console.log('npm run rollup-umd install-babel-plugin babel-plugin-styled-components');
}

function run(args) {
  const program = args[0];
  switch (program) {
    case 'help':
      help();
      break;
    case undefined:
      help();
      break;
    default:
      installBabelPluginList(args);
      break;
  }
}

module.exports = run;
