const path = require('path');
const fs = require('fs');
const childProcess = require('child_process');
const packageJsonPath = path.join(__dirname, '../../package.json');

function installDevDependency(name, cb) {
  childProcess.exec(`npm install ${name} --save-dev`, (err, output) => {
    console.log(output);
    cb(err, output);
  });
}

function readPackageJson() {
  return require(packageJsonPath); // eslint-disable-line global-require
}

function writePackageJson(packageJson, cb) {
  try {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), { encoding: 'utf8' });
    cb();
  } catch (e) {
    cb(e);
  }
}

module.exports = {
  readPackageJson,
  writePackageJson,
  installDevDependency,
};
