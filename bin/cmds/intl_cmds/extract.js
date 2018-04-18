/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-restricted-syntax, no-await-in-loop */
/**
 * This script will extract the internationalization messages from all components
 and package them in the translation json files in the translations file.
 */
const fs = require('fs');
const nodeGlob = require('glob');
const shell = require('shelljs');
const { transform } = require('babel-core');
const { animateProgress, addCheckMark } = require('kopaxgroup-cli-helpers');
require('shelljs/global');

// Glob to match all js files except test files
const FILES_TO_PARSE = 'src/**/!(*.test).js';

const newLine = () => process.stdout.write('\n');

// Progress Logger
let progress;
const task = (message) => {
  progress = animateProgress(message);
  process.stdout.write(message);

  return (error) => {
    if (error) {
      process.stderr.write(error);
    }
    clearTimeout(progress);
    return addCheckMark(() => newLine());
  };
};

// Wrap async functions below into a promise
const glob = (pattern) => new Promise((resolve, reject) => {
  nodeGlob(pattern, (error, value) => (error ? reject(error) : resolve(value)));
});

const readFile = (fileName) => new Promise((resolve, reject) => {
  fs.readFile(fileName, (error, value) => (error ? reject(error) : resolve(value)));
});

const writeFile = (fileName, data) => new Promise((resolve, reject) => {
  fs.writeFile(fileName, data, (error, value) => (error ? reject(error) : resolve(value)));
});

const doSpawn = (cmd) => new Promise((resolve, reject) => {
  spawn(cmd, (error, value) => (error ? reject(error) : resolve(value)));
});


// Store existing translations into memory
const oldLocaleMappings = [];
const localeMappings = [];

const setOldLocalMappings = (argv, locales) => {
  // Loop to run once per locale
  locales.forEach((locale) => {
    oldLocaleMappings[locale] = {};
    localeMappings[locale] = {};
    // File to store translation messages into
    const translationFileName = `${argv.target}/${locale}.json`;
    try {
      // Parse the old translation message JSON files
      const messages = JSON.parse(fs.readFileSync(translationFileName));
      const messageKeys = Object.keys(messages);
      messageKeys.forEach((messageKey) => {
        oldLocaleMappings[locale][messageKey] = messages[messageKey];
      });
    } catch (error) {
      if (error.code !== 'ENOENT') {
        process.stderr.write(`There was an error loading this translation file: ${translationFileName}\n${error}`);
      }
    }
  });
};

const extractFromFile = async (argv, fileName, defaultLocale, locales, presets, plugins) => {
  try {
    const code = await readFile(fileName);
    // Use babel plugin to extract instances where react-intl is used
    const { metadata: result } = await transform(code, { presets, plugins }); // object-shorthand
    for (const message of result['react-intl'].messages) {
      for (const locale of locales) {
        const oldLocaleMapping = oldLocaleMappings[locale][message.id];
        // Merge old translations into the babel extracted instances where react-intl is used
        const newMsg = locale === defaultLocale ? message.defaultMessage : '';
        localeMappings[locale][message.id] = oldLocaleMapping || newMsg;
      }
    }
  } catch (error) {
    process.stderr.write(`Error transforming file: ${fileName}\n${error}`);
  }
};

exports.command = 'extract';
exports.desc = 'Extract intl messages to json files.';
exports.builder = (yargs) => yargs
  .option('path', {
    alias: 'p',
    describe: 'path',
    default: process.cwd(),
  })
  .option('target', {
    alias: 't',
    describe: 'Output target directory',
    default: 'translation',
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
  const babelRcPath = path.join(argv.path, '.babelrc');

  const babelrc = fs.existsSync(babelRcPath) ? JSON.parse(fs.readFileSync(babelRcPath, 'utf-8')) : { presets: ['react-app'] };
  const { presets } = babelrc;
  const plugins = babelrc.plugins || [];
  plugins.push(['react-intl']);

  if (!pkg.dependencies['react-intl']) {
    console.log('[Error] - You must use a intl declination to use this command!');
    return;
  }

  if (!pkg.translation) {
    console.log('[Error] - You must run "intl install" at least once before running this command!');
    return;
  }

  (async function main() {
    const memoryTaskDone = task('Storing language files in memory');
    const files = await glob(FILES_TO_PARSE);
    memoryTaskDone();

    const extractTaskDone = task('Run extraction on all files');


    if (presets.indexOf('react-app') !== -1 && Object.keys(pkg.devDependencies || {}).indexOf('babel-preset-react-app') === -1) {
      console.log('\nRequired dependencies will be installed: babel-cli babel-plugin-react-intl babel-preset-react-app\n');
      try {
        await doSpawn(`npm install --prefix ${argv.path} babel-cli babel-plugin-react-intl babel-preset-react-app --save-dev`);
      } catch (e) {
        throw e;
      }
    }

    setOldLocalMappings(argv, pkg.translation.locales);

    // Run extraction on all files that match the glob on line 16
    await Promise.all(files.map((fileName) => extractFromFile(argv, fileName, pkg.translation.locale, pkg.translation.locales, presets, plugins)));

    extractTaskDone();

    if (!fs.existsSync(argv.target)) {
      shell.mkdir('-p', argv.target);
    }

    for (const locale of pkg.translation.locales) {
      const translationFileName = `${argv.target}/${locale}.json`;

      try {
        const localeTaskDone = task(`Writing translation messages for ${locale} to: ${translationFileName}`);

        // Sort the translation JSON file so that git diffing is easier
        // Otherwise the translation messages will jump around every time we extract
        const messages = {};
        Object.keys(localeMappings[locale]).sort().forEach((key) => {
          messages[key] = localeMappings[locale][key];
        });

        // Write to file the JSON representation of the translation messages
        const prettified = `${JSON.stringify(messages, null, 2)}\n`;
        await writeFile(translationFileName, prettified);

        localeTaskDone();
      } catch (error) {
        localeTaskDone(`There was an error saving this translation file: ${translationFileName}
        \n${error}`);
      }
    }

    process.exit();
  }());
};
