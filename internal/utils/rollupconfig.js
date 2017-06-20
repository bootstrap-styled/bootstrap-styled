const path = require('path');
const fs = require('fs');
const rollupConfigPath = path.join(__dirname, '../../rollup.config.js');

function readRollupConfig() {
  return fs.readFileSync(rollupConfigPath, 'utf8');
}

function writeRollupConfig(rollupConfig, cb) {
  try {
    fs.writeFileSync(rollupConfigPath, rollupConfig, { encoding: 'utf8' });
    cb();
  } catch (e) {
    cb(e);
  }
}

module.exports = {
  readRollupConfig,
  writeRollupConfig,
};
