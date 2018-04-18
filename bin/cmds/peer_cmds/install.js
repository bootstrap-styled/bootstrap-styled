/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console */
const async = require('async');

function install(dependency, argv, done) {
  const installName = dependency.split('*')[0];
  const globalName = dependency.split('*')[1];
  const reRepository = /(^git\+[ssh|https]+:\/\/.*@.*\/(.*)\.git)#?([\w\d]+)?/;
  const reNameGitUrl = new RegExp('/([A-z1-9-]+).git{1}');

  async.auto({
    install: (cb) => spawn(`npm install --prefix ${argv.path} ${installName} --save-dev`, cb),
    isRepositoryUrl: ['install', (results, cb) => {
      const match = dependency.match(reRepository);
      cb(null, match && match.length > 0);
    }],
    repositoryUrl: ['isRepositoryUrl', (results, cb) => {
      if (results.isRepositoryUrl) {
        const matches = installName.match(reRepository);
        const url = matches[1];
        cb(null, url);
      } else {
        cb(null);
      }
    }],
    packageName: ['repositoryUrl', (results, cb) => {
      if (results.isRepositoryUrl) {
        const match = installName.match(reNameGitUrl);
        const packageName = match[1];
        cb(null, packageName);
        return;
      }
      cb(null, installName.split('@')[0]);
    }],
    version: ['packageName', (results, cb) => {
      const re = new RegExp(`${results.packageName}@\\^?([0-9A-z\\.-]+)`, 'i');
      const match = results.install[0].match(re);
      const version = match[1];
      cb(null, version);
    }],
    installPeer: ['version', (results, cb) => {
      if (!argv.singleton) {
        cb();
        return;
      }
      const value = results.isRepositoryUrl ? `${results.repositoryUrl}#${results.version}` : `^${results.version}`;
      const packageJsonPath = path.join(argv.path, 'package.json');
      const packageJson = require(packageJsonPath);
      if (!(packageJson.peerDependencies instanceof Object)) {
        packageJson.peerDependencies = {};
      }
      packageJson.peerDependencies[results.packageName] = value;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), { encoding: 'utf8' });
      cb();
    }],
    installNonPeer: ['installPeer', (results, cb) => {
      if (argv.singleton) {
        cb();
        return;
      }
      const value = results.isRepositoryUrl ? `${results.repositoryUrl}#${results.version}` : `^${results.version}`;
      const packageJsonPath = path.join(argv.path, 'package.json');
      const packageJson = require(packageJsonPath);
      if (!(packageJson.dependencies instanceof Object)) {
        packageJson.dependencies = {};
      }
      packageJson.dependencies[results.packageName] = value.replace('^', '');
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), { encoding: 'utf8' });
      cb();
    }],
    installDev: ['installNonPeer', (results, cb) => {
      if (!argv.singleton) {
        cb();
        return;
      }
      const value = results.isRepositoryUrl ? `${results.repositoryUrl}#${results.version}` : `^${results.version}`;
      const packageJsonPath = path.join(argv.path, 'package.json');
      const packageJson = require(packageJsonPath);
      if (!(packageJson.devDependencies instanceof Object)) {
        packageJson.devDependencies = {};
      }
      packageJson.devDependencies[results.packageName] = value;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), { encoding: 'utf8' });
      cb();
    }],
    installRollupExternal: ['installDev', (results, cb) => {
      if (!argv.singleton) {
        cb();
        return;
      }
      const declinationJsonPath = path.join(argv.path, 'declination.json');
      const declination = JSON.parse(fs.readFileSync(declinationJsonPath, { encoding: 'utf8' }));
      if (declination.external.indexOf(results.packageName) === -1) {
        declination.external.push(results.packageName);
        fs.writeFileSync(declinationJsonPath, JSON.stringify(declination, null, 2), { encoding: 'utf8' });
      }
      cb();
    }],
    installRollupGlobal: ['installRollupExternal', (results, cb) => {
      if (!argv.singleton) {
        cb();
        return;
      }
      const declinationJsonPath = path.join(argv.path, 'declination.json');
      const declination = JSON.parse(fs.readFileSync(declinationJsonPath, { encoding: 'utf8' }));

      if (!declination.globals[results.packageName]) {
        declination.globals[results.packageName] = globalName || results.packageName;
        fs.writeFileSync(declinationJsonPath, JSON.stringify(declination, null, 2), { encoding: 'utf8' });
      }
      cb();
    }],
  }, done);
}

exports.command = ['install <name> [names..]', 'add'];
exports.desc = 'Add in declination.json to "external" and "global" and in package.json to "peerDependencies" or "dependencies" and "devDependencies"\nIf you want to have a different global name `<name>*<globalName>`';
exports.builder = (yargs) => yargs
  .option('path', {
    alias: 'p',
    describe: 'path',
    default: process.cwd(),
  })
  .option('singleton', {
    alias: 's',
    describe: 'Singleton will be saved as peerDependencies, otherwise we keep it as a dependency of the module',
    default: false,
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
