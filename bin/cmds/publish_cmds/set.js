/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console */
const async = require('async');
const status = require(path.join(__dirname, 'status'));

exports.command = 'set <privilege>';
exports.desc = 'Set publishing configuration';
exports.builder = (yargs) => yargs
  .positional('privilege', {
    default: 'private',
    describe: 'privilege level from private (gitlab), protected (npm), public (npm and github)). You can only increase the privilege level.',
    choices: [
      'private',
      'protected',
      'public',
    ],
  })
  .option('path', {
    alias: 'p',
    describe: 'path',
    default: process.cwd(),
  });

const jobs = {
  off: '## Job: !PUBLISH',
  on: `# Job: Publish
publish:
  stage: publish
  script:
    - git fetch --all
    - git checkout \${PACKAGE_VERSION}
    - git reset HEAD --hard
    - npm run ci-publish || echo true
  dependencies:
    - build
  only:
    - master
  tags:
    - docker`,
};

exports.handler = (argv) => {
  switch (argv.path[0]) {
    case '/':
      break;
    default:
      argv.path = argv.path[1] === '/' ? path.join(process.cwd(), argv.path.slice(2)) : path.join(process.cwd(), argv.path);
      break;
  }

  const packageJsonPath = path.join(argv.path, 'package.json');
  const ciPath = path.join(argv.path, '.gitlab-ci.yml');
  const docInstallPath = path.join(argv.path, 'docs/installation.md');

  switch (argv.privilege) {
    case 'protected':
      async.auto({
        isPrivate: (cb) => {
          status.isPrivate(argv, (err, isPrivate) => {
            if (!isPrivate) {
              cb(new Error('publishing as already an higher privilege.'));
              return;
            }
            cb();
          });
        },
        cipublisḧ́: (cb) => exec(`npm install --prefix ${argv.path} ci-publish --save-dev`, cb),
        addscript: ['cipublisḧ́', (results, cb) => {
          const re = new RegExp('ci-publish@\\^?([0-9A-z\\.-]+)', 'i');
          const match = results.cipublisḧ́[0].match(re);
          const version = match[1];
          const pkg = require(packageJsonPath);
          pkg.scripts['ci-publish'] = 'ci-publish';
          pkg.devDependencies['ci-publish'] = `^${version}`;
          fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2), { encoding: 'utf8' });
          cb();
        }],
        addstage: (cb) => sedReplace(ciPath, '#  - publish', '  - publish', ciPath, cb),
        addjob: ['addstage', (res, cb) => sedReplace(ciPath, jobs.off, jobs.on, ciPath, cb)],
        updateInstallDoc: ['addjob', (res, cb) => {
          if (!fs.existsSync(docInstallPath)) {
            console.log(`[Warning] File ${docInstallPath} was not found. The npm install command has not been updated with the npm registry one.`);
            cb();
            return;
          }
          sedReplace(docInstallPath, 'git+$CI_REPOSITORY_URL#$PACKAGE_VERSION', '$PACKAGE_NAME', docInstallPath, cb);
        }],
      }, (err, results) => {
        if (err) {
          console.error(`[ERROR] ${err.message}`);
          process.exit(1);
        }
        spawn(`npm install --prefix ${argv.path}`, () => {
          console.log('[Success] publishing configuration is now protected.');
        });
      });
      break;
    case 'public':
      console.log('[Warning] public publishing is not support yet. (Please open an issue)');
      break;
    default:
      async.series({
        isPrivate: (cb) => status.isPrivate(argv, cb),
      }, (err, results) => {
        if (!results.isPrivate) {
          console.error(`[ERROR] ${err.message}`);
          process.exit(1);
        }
        console.log('[Info] publishing is private.');
      });
      break;
  }
};
