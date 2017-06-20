const childProcess = require('child_process');

function init(cb) {
  childProcess.exec('git init', (err, stdout) => {
    console.log(stdout);
    cb(err, stdout);
  });
}

function remoteAddOrigin(gitUrl, cb) {
  childProcess.exec(`git remote add origin ${gitUrl}`, (err, stdout) => {
    console.log(stdout);
    cb(err, stdout);
  });
}

module.exports = {
  init,
  remoteAddOrigin,
};
