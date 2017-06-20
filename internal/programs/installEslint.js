/**
 * Run this script from the project directory with `npm run install-external $moduleName`
 */
const path = require('path');
const async = require('async');

const npmUtils = require(path.join(__dirname, '../utils/npm'));

function addLintFromFilename(fileName, cb) {
  const packageJson = npmUtils.readPackageJson();
  const json = require(path.join(__dirname, `../../${fileName}`)); // eslint-disable-line global-require
  packageJson.eslintConfig.rules = Object.assign(packageJson.eslintConfig.rules, json);
  npmUtils.writePackageJson(packageJson, cb);
}

function installEslintRulesList(fileNameList, cb) {
  async.eachSeries(fileNameList, (name, done) => {
    installEslintRules(name, done);
  }, cb);
}

function installEslintRules(fileName, cb) {
  async.auto({
    addLintFromFilename: (done) => {
      addLintFromFilename(fileName, done);
    },
  }, (err, results) => {
    if (err) {
      throw err;
    }
    if (cb) cb(err, results);
  });
}

function help() {
  console.log('');
  console.log('    npm run rollup-umd eslint-add [fileName] [...]');
  console.log('');
  console.log('example:');
  console.log('');
  console.log('npm run rollup-umd eslint-add tmp.json');
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
      installEslintRulesList(args);
      break;
  }
}

module.exports = run;
