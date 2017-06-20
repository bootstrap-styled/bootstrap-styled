/**
 * Run this script from the project directory with `npm run create $newPackageName`
 */

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const async = require('async');

const npmUtils = require(path.join(__dirname, '../utils/npm'));
const git = require(path.join(__dirname, '../utils/git'));
const bash = require(path.join(__dirname, '../utils/bash'));

function cleanFolders(cb) {
  const srcLocation = path.join(__dirname, '../../src');
  const gitLocation = path.join(__dirname, '../../.git');
  const gitlabciPath = path.join(__dirname, '../../.gitlab-ci.yml');
  const sonarProjectPath = path.join(__dirname, '../../sonar-project.properties');
  const readmePath = path.join(__dirname, '../../README.md');
  const changelogPath = path.join(__dirname, '../../CHANGELOG.md');

  rimraf.sync(srcLocation);
  rimraf.sync(gitLocation);
  rimraf.sync(gitlabciPath);
  rimraf.sync(sonarProjectPath);
  rimraf.sync(readmePath);
  rimraf.sync(changelogPath);

  fs.mkdirSync(srcLocation);
  cb();
}

function initPackageJson(name, gitUrl, httpUrl, cb) {
  const pkg = npmUtils.readPackageJson();
  const newPkg = Object.assign({}, pkg, {
    name,
    description: `Library ${name} description`,
    version: '0.0.1',
    module: `dist/${name}.es.js`,
    'jsnext:main': `dist/${name}.es.js`,
    repository: {
      type: 'git',
      url: gitUrl,
    },
    bugs: {
      url: `${httpUrl}/issues`,
    },
    keywords: '',
    author: '',
    license: 'UNLICENSED',
  });
  delete newPkg.scripts.create;

  npmUtils.writePackageJson(newPkg, cb);
}

function initPackage(args, cb) {
  if (args.length < 0) {
    throw new Error('Missing git repository url parameter');
  }
  const gitUrl = args[0];

  async.auto({
    name: (done) => {
      const match = gitUrl.match(/\/([A-z0-9-]+).git/);
      done(null, match[1]);
    },
    domain: (done) => {
      const match = gitUrl.match(/@([A-z0-9.]+)/);
      done(null, match[1]);
    },
    group: (done) => {
      const match = gitUrl.match(/([A-z0-9-]+)\/[A-z0-9-]+.git/);
      done(null, match[1]);
    },
    url: ['name', 'domain', 'group', (results, done) => {
      const url = `https://${results.domain}/${results.group}/${results.name}`;
      done(null, url);
    }],
    sonarProjectName: ['url', (results, done) => {
      const projectName = `${results.domain.split('.').reverse().join('.')}.${results.group}.${results.name}`;
      done(null, projectName);
    }],
    cleanFolders: ['sonarProjectName', (results, done) => {
      cleanFolders(done);
    }],
    gitInit: ['cleanFolders', (results, done) => {
      git.init(done);
    }],
    gitRemoteAddOrigin: ['gitInit', (results, done) => {
      git.remoteAddOrigin(gitUrl, done);
    }],
    initPackageJson: ['gitRemoteAddOrigin', (results, done) => {
      initPackageJson(results.name, gitUrl, results.url, done);
    }],
    createGitlabCi: ['initPackageJson', (results, done) => {
      const input = path.join(__dirname, '../templates/.gitlab-ci.yml');
      const output = path.join(__dirname, '../../.gitlab-ci.yml');
      bash.cp(input, output, done);
    }],
    createChangelog: ['initPackageJson', (results, done) => {
      const input = path.join(__dirname, '../templates/CHANGELOG.md');
      const output = path.join(__dirname, '../../CHANGELOG.md');
      const before = '$TODAY_DATE';
      const after = new Date().toISOString().split('T')[0];
      bash.sedReplace(input, before, after, output, done);
    }],
    createReadme: ['createChangelog', (results, done) => {
      const input = path.join(__dirname, '../templates/README.md');
      const output = path.join(__dirname, '../../README.md');
      const before = '$NAME';
      const after = results.name;
      bash.sedReplace(input, before, after, output, () => {
        const beforeGit = '$GIT_URL';
        const afterGit = gitUrl;
        bash.sedReplace(output, beforeGit, afterGit, output, () => {
          const beforeHttp = '$HTTP_GIT_URL';
          const afterHttp = results.url;
          bash.sedReplace(output, beforeHttp, afterHttp, output, done);
        });
      });
    }],
    createSonarProject: ['createReadme', (results, done) => {
      const input = path.join(__dirname, '../templates/sonar-project.properties');
      const output = path.join(__dirname, '../../sonar-project.properties');
      const before = '$SONAR_NAME';
      const after = results.sonarProjectName;
      bash.sedReplace(input, before, after, output, done);
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
  console.log('    npm run rollup-umd create [git-url]');
  console.log('');
  console.log('example:');
  console.log('');
  console.log('npm run rollup-umd create ssh://git@module.kopaxgroup.com:20024/example/my-sample-package.git');
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
      initPackage(args);
      break;
  }
}

module.exports = run;
