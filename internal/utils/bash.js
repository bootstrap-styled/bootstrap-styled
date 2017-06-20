const fs = require('fs');
const childProcess = require('child_process');

function sedReplace(input, before, after, output, cb) {
  try {
    const file = fs.readFileSync(input, 'utf8');
    const newFile = file.replace(new RegExp(`\\${before}`, 'g'), after);
    fs.writeFileSync(output, newFile, 'utf8');
    cb();
  } catch (e) {
    cb(e);
  }
}

function cp(input, output, cb) {
  childProcess.exec(`cp ${input} ${output}`, (err, stdout) => {
    console.log(stdout);
    cb(err, stdout);
  });
}

module.exports = {
  sedReplace,
  cp,
};
