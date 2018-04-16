/* eslint-disable no-undef, no-unused-vars, no-unused-expressions */
const async = require('async');
const cliUpgrade = require('git-cli-upgrade-tool');
const pkg = require(path.join(__dirname, '../../package.json'));
const p = path.join(__base, 'internals/declination');

const files = fs.existsSync(p) ? fs.readdirSync(p) : [];
const declinationList = files
  .filter((f) => f !== 'create')
  .map((file) => `${file.split('-').slice(1).join('-')}`);

exports.command = ['create <name> [declination]', '*'];
exports.desc = 'Create new rollup';
exports.builder = (yargs) => yargs
  .option('skip-upgrade', {
    alias: 'u',
    describe: 'Disable CLI upgrade',
    default: false,
  })
  .positional('declination', {
    describe: 'Choose a declination',
    default: '',
    choices: [''].concat(declinationList),
  })
  .commandDir('declination_cmds');

exports.handler = (argv) => {
  fs.existsSync(path.join(argv.name, 'package.json')) ? console.log('[ERROR] Cannot create, already exists') || process.exit(1) : null;
  const declination = argv.declination.length > 0 ? `-${argv.declination}` : '';

  console.log('Please wait while project is being created...');
  async.auto({
    latestVersion: (cb) => cliUpgrade({ ...argv, 'no-suffix': true }, pkg, cb),
    clone: ['latestVersion', (results, cb) => spawn(`git clone ${pkg.repository.url} ${argv.name}`, cb)],
    checkoutLatest: ['clone', (results, cb) => spawn(`git -C ${argv.name} checkout ${declination ? `${results.latestVersion}${declination}` : results.latestVersion.split('-')[0]}`, cb)],
    install: ['checkoutLatest', (results, cb) => spawn(`npm install --prefix ${argv.name}`, cb)],
  }, (err, results) => {
    if (err) {
      console.error(`[ERROR] ${err.message}`);
      process.exit(1);
    }
    console.log(`[Success] Created rollup package named ${argv.name}`);
  });
};
