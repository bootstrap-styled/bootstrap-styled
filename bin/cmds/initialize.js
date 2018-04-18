/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle, prefer-destructuring, no-shadow, no-useless-escape */
const pkg = require(path.join(__base, 'package.json'));
const async = require('async');
const rimraf = require('rimraf');
const copyDocHandler = require('./documentation_cmds/copy').handler;

function run(argv, { name, domain, namespace }, done) {
  const repository = argv.repository;
  async.auto({
    cleanFolders: (cb) => {
      const srcLocation = path.join(argv.path, 'src');
      const gitLocation = path.join(argv.path, '.git');
      const gitlabciPath = path.join(argv.path, '.gitlab-ci.yml');
      const sonarProjectPath = path.join(argv.path, 'sonar-project.properties');
      const docsPath = path.join(argv.path, 'docs');
      const readmePath = path.join(argv.path, 'README.md');
      const changelogPath = path.join(argv.path, 'CHANGELOG.md');
      const licensePath = path.join(argv.path, 'LICENSE.md');
      const styleguideConfigPath = path.join(argv.path, 'styleguide/styleguide.config.json');

      rimraf.sync(srcLocation);
      rimraf.sync(gitLocation);
      rimraf.sync(gitlabciPath);
      rimraf.sync(sonarProjectPath);
      rimraf.sync(docsPath);
      rimraf.sync(readmePath);
      rimraf.sync(changelogPath);
      rimraf.sync(licensePath);
      rimraf.sync(styleguideConfigPath);

      fs.mkdirSync(srcLocation);
      cb();
    },
    copyDoc: (cb) => copyDocHandler(argv, cb),
    sonarProjectName: (cb) => {
      const projectName = `${domain.split('.').reverse().join('.')}.${namespace}.${name}`;
      cb(null, projectName);
    },
    gitignore: (cb) => {
      const output = path.join(argv.path, '.gitignore');
      const before = 'lib\n|dist\n'; // eslint-disable-line no-useless-escape
      const after = '';
      sedReplace(output, before, after, output, cb);
    },
    rollupPkg: (cb) => {
      cb(null, require(path.join(argv.path, 'package.json')));
    },
    url: (cb) => cb(null, `https://${domain}/${namespace}/${name}`),
    gitInit: ['cleanFolders', (results, cb) => spawn(`git -C ${argv.path} init`, cb)],
    gitRemoteAddOrigin: ['gitInit', (results, cb) => spawn(`git -C ${argv.path} remote add origin ${repository}`, cb)],
    initPackageJson: ['gitRemoteAddOrigin', (results, cb) => {
      const packageJsonPath = path.join(argv.path, 'package.json');
      const pkg = require(packageJsonPath);
      const newPkg = Object.assign({}, pkg, {
        name,
        description: name,
        version: '0.0.1',
        module: `dist/${name}.es.js`,
        'jsnext:main': `dist/${name}.es.js`,
        repository: {
          type: 'git',
          url: repository,
        },
        bugs: {
          url: `${results.url}/issues`,
        },
        keywords: [''],
        author: 'Yeutech Company Limited <contact@yeutech.com>',
        license: 'SEE LICENSE IN LICENSE.md',
      });
      delete newPkg.scripts.create;
      fs.writeFileSync(packageJsonPath, JSON.stringify(newPkg, null, 2), { encoding: 'utf8' });
      cb();
    }],
    createGitlabCi: ['initPackageJson', (results, cb) => {
      const input = path.join(argv.path, 'internals/templates/.gitlab-ci.yml');
      const output = path.join(argv.path, '.gitlab-ci.yml');
      spawn(`cp ${input} ${output}`, cb);
    }],
    createChangelog: ['initPackageJson', (results, cb) => {
      const input = path.join(argv.path, 'internals/templates/CHANGELOG.md');
      const output = path.join(argv.path, 'CHANGELOG.md');
      spawn(`mv ${input} ${output}`, cb);
    }],
    createLicense: ['createChangelog', (results, cb) => {
      const input = path.join(argv.path, 'internals/templates/LICENSE.md');
      const output = path.join(argv.path, 'LICENSE.md');
      const before = '$YEAR';
      const after = new Date().getFullYear();
      sedReplace(input, before, after, output, cb);
    }],
    createReadme: ['createLicense', (results, cb) => {
      const input = path.join(argv.path, 'internals/templates/README.md');
      const output = path.join(argv.path, 'README.md');
      async.series([
        (cb) => sedReplace(input, '$CI_PROJECT_URL', results.url, output, cb),
        (cb) => sedReplace(output, '$PACKAGE_NAMESPACE', domain, output, cb),
        (cb) => sedReplace(output, '$PACKAGE_NAME', name, output, cb),
        (cb) => sedReplace(output, '$YEAR', new Date().getFullYear(), output, cb),
        (cb) => sedReplace(output, '$ROLLUP_VERSION', results.rollupPkg.version, output, cb),
      ], cb);
    }],
    createSonarProject: ['createReadme', (results, cb) => {
      const input = path.join(argv.path, 'internals/templates/sonar-project.properties');
      const output = path.join(argv.path, 'sonar-project.properties');
      const before = '$SONAR_NAME';
      const after = results.sonarProjectName;
      sedReplace(input, before, after, output, cb);
    }],
    createStyleguideConfig: ['createSonarProject', (results, cb) => {
      const input = path.join(argv.path, 'internals/templates/styleguide/styleguide.config.json');
      const output = path.join(argv.path, 'styleguide/styleguide.config.json');
      spawn(`cp ${input} ${output}`, cb);
    }],
  }, done);
}


exports.command = ['initialize <repository>', 'init'];
exports.desc = 'Initialize rollup for a given repository';
exports.builder = (yargs) => yargs
  .option('path', {
    alias: 'p',
    describe: 'path',
    default: process.cwd(),
  });
exports.handler = (argv) => {
  switch (argv.path[0]) {
    case '/':
      break;
    default:
      argv.path = argv.path[1] === '/' ? path.join(process.cwd(), argv.path.slice(2)) : path.join(process.cwd(), argv.path);
      break;
  }
  const reRepository = /^(?:(?:https?|ssh):\/\/|(?=git@))([^@]+)@([^:]+):(?:\d+\/)?([^\/]+)\/([\w-]+)\.git$/;
  const matches = argv.repository.match(reRepository);
  if (!matches) {
    console.error('[ERROR] You can initialize the repo for git url only (start with "ssh|http|https|git" and end up with ".git", example: ssh://git@github.com:yeutech/sample-project.git');
    process.exit(1);
  }

  run(argv, {
    name: matches[4],
    domain: matches[2],
    namespace: matches[3],
  }, (e, res) => {
    if (e) {
      console.error(`[ERROR] ${e.message}`);
      process.exit(1);
    }

    async.auto({
      whoami: (cb) => spawn('whoami', (e, r) => cb(e, r[0].replace(/\n/, ''))),
      add: (cb) => spawn(`git -C ${argv.path} add -A`, cb),
      commit: ['add', (results, cb) => spawn(`git -C ${argv.path} commit -m 'Initialization'`, cb)],
      push: ['commit', (results, cb) => {
        spawn(`git -C ${argv.path} push origin master`, (err, stdout, stderr) => {
          if (err) {
            console.log(`[Warning] We could not push on master branch. You must have permissions to push on the repository first. Try again with command:\n     git -C ${argv.path} push origin master\n`);
          }
          cb(null, stdout || stderr);
        });
      }],
      checkoutDev: ['push', (results, cb) => spawn(`git -C ${argv.path} checkout -b dev`, cb)],
      pushDev: ['checkoutDev', (results, cb) => {
        spawn(`git -C ${argv.path} push origin dev`, (err, stdout, stderr) => {
          if (err) {
            console.log(`[Warning] We could not push on dev branch. You must have permissions to push on the repository first. Try again with command:\n$     git -C ${argv.path} push origin dev\n`);
          }
          cb(null, stdout || stderr);
        });
      }],
      checkoutWhoAmI: ['pushDev', (results, cb) => spawn(`git -C ${argv.path} checkout -b ${results.whoami}-dev`, cb)],
    }, (err, results) => {
      if (err) {
        console.error(`[ERROR] Fail during branch preparation: ${err.message}`);
        process.exit(1);
      }
      console.log('[Success] Rollup initialized!');
      console.log('Use the following command to create your working branch:');
      console.log('');
      console.log(`git -C ${argv.path} push origin ${results.whoami}-dev`);
    });
  });
};

