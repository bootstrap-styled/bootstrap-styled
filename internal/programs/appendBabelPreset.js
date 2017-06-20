/**
 * Run this script from the project directory with `npm run install-external $moduleName`
 */
const path = require('path');
const async = require('async');

// const parseUtils = require(path.join(__dirname, '../utils/parse'));

const babelRcUtils = require(path.join(__dirname, '../utils/babelrc'));

function appendToBabelRc(name, cb) {
  const babelRc = babelRcUtils.readBabelRc();
  babelRc.presets.push(name);
  babelRcUtils.writeBabelRc(babelRc, cb);
}

function appendBabelPresetList(nameList, cb) {
  async.eachSeries(nameList, (name, done) => {
    appendBabelPreset(name, done);
  }, cb);
}

function appendBabelPreset(name, cb) {
  async.auto({
    babelRc: (done) => {
      appendToBabelRc(name, done);
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
  console.log('    npm run rollup-umd append-babel-preset [name] [...]');
  console.log('');
  console.log('example:');
  console.log('');
  console.log('npm run rollup-umd append-babel-preset react stage-0');
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
      appendBabelPresetList(args);
      break;
  }
}

module.exports = run;
