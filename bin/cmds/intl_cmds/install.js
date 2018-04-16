/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle */
const async = require('async');

function install(argv, locale, done) {
  const binPkgJsonPath = path.join(__base, 'package.json');
  const binPkgJson = require(binPkgJsonPath);
  const packageJsonPath = path.join(argv.path, 'package.json');
  const packageJson = require(packageJsonPath);
  // create default if never existed before
  if (!packageJson.translation) {
    packageJson.translation = { locale: 'en', locales: ['en'] };
  }
  // change default if requested
  if (argv.default && packageJson.translation.locale !== argv.default) {
    packageJson.translation.locale = argv.default;
  }
  // add locales
  if (packageJson.translation.locales.indexOf(locale) === -1) {
    packageJson.translation.locales.push(locale);
    packageJson.translation.locales = packageJson.translation.locales.sort();
  }
  // add precommit
  if (!packageJson['pre-commit']) {
    packageJson['pre-commit'] = [];
  }
  if (packageJson['pre-commit'].indexOf('extract-intl') === -1) {
    packageJson['pre-commit'].push('extract-intl');
    const target = binPkgJson.name === 'rollapp' ? ' --target=src/i18n/translation' : '';
    packageJson.scripts['extract-intl'] = `NODE_ENV=production ${binPkgJson.name} intl extract${target}`;
  }
  if (packageJson['pre-commit'].indexOf('extract-intl:doc') === -1) {
    packageJson['pre-commit'].push('extract-intl:doc');
    packageJson.scripts['extract-intl:doc'] = `NODE_ENV=production ${binPkgJson.name} doc intl`;
  }
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), { encoding: 'utf8' });
  done(null, `${locale} has been installed`);
}

exports.command = 'install <locale> [locales..]';
exports.desc = 'Install locales';
exports.builder = (yargs) => yargs
  .option('default', {
    alias: 'd',
    describe: 'Change the default locale (Does not apply if the application use browser locale auto detection)\nIf no default locale is present, english will be used in first install by default.',
    default: null,
  })
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
  const pkg = require(path.join(argv.path, 'package.json'));
  if (!pkg.dependencies['react-intl']) {
    console.log('[Error] - You must use a intl declination to use this command!');
    return;
  }

  async.map([].concat(argv.locale).concat(argv.locales), (locale, cb) => install(argv, locale, cb), (err, results) => {
    if (err) {
      console.error(`[ERROR] ${err.message}`);
      process.exit(1);
    }
    console.log(results.join('\n'));
  });
};
