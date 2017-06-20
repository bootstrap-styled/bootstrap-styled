const path = require('path');
const fs = require('fs');
const babelRcPath = path.join(__dirname, '../../.babelrc');

function readBabelRc() {
  return JSON.parse(fs.readFileSync(babelRcPath, 'utf8'));
}

function writeBabelRc(babelRc, cb) {
  try {
    fs.writeFileSync(babelRcPath, JSON.stringify(babelRc, null, 2), { encoding: 'utf8' });
    cb();
  } catch (e) {
    cb(e);
  }
}

module.exports = {
  readBabelRc,
  writeBabelRc,
};
