/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle */
const async = require('async');

exports.isPrivate = (argv, cb) => {
  const packageJsonPath = path.join(argv.path, 'package.json');
  const pkg = require(packageJsonPath);
  if (pkg.scripts['ci-publish']) {
    cb(null, false);
    return false;
  }
  cb(null, true);
  return true;
};

exports.isProtected = (argv, cb) => exports.isPrivate(argv, (err, res) => cb(err, !res));

exports.isPublic = (argv, cb) => cb(new Error('Public publishing is not ready. (Please open a new issue)'));

function getBadgeUrl(status) {
  const badges = {
    private: 'https://img.shields.io/badge/publishing-private-red.svg',
    protected: 'https://img.shields.io/badge/publishing-protected-orange.svg',
    public: 'https://img.shields.io/badge/publishing-public-blue.svg',
  };
  return badges[status];
}

exports.command = 'status';
exports.desc = 'Display publishing status';
exports.builder = (yargs) => yargs
  .option('path', {
    alias: 'p',
    describe: 'path',
    default: process.cwd(),
  })
  .option('badge', {
    alias: 'b',
    default: false,
    describe: 'Display the shields badge url',
  });

exports.handler = (argv) => {
  switch (argv.path[0]) {
    case '/':
      break;
    default:
      argv.path = argv.path[1] === '/' ? path.join(process.cwd(), argv.path.slice(2)) : path.join(process.cwd(), argv.path);
      break;
  }

  const end = (status) => {
    console.log(argv.badge ? getBadgeUrl(status) : status);
  };

  async.auto({
    private: (cb) => exports.isPrivate(argv, cb),
    protected: (cb) => exports.isProtected(argv, cb),
    public: (cb) => exports.isPublic(argv, cb),
  }, (err, results) => {
    Object.keys(results).forEach((key) => {
      if (results[key]) {
        end(key);
        process.exit();
      }
    });
    if (err) {
      console.error(`[ERROR] ${err.message}`);
      process.exit(1);
    }
  });
};
