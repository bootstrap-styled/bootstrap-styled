/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle, prefer-destructuring */
const p = path.join(__base, 'internals/declination');
const files = fs.existsSync(p) ? fs.readdirSync(p) : [];
const declinationList = files
  .filter((f) => f !== 'create');

exports.command = 'list';
exports.desc = 'List available declinations.';
exports.builder = (yargs) => yargs
  .option('path', {
    alias: 'p',
    describe: 'path',
    default: process.cwd(),
  })
  .option('type', {
    alias: 't',
    describe: 'Choose a type',
    default: 'numbered-markdown',
    choices: ['numbered-markdown', 'numbered-dashed', 'array'],
  });

exports.handler = (argv) => {
  switch (argv.path[0]) {
    case '/':
      break;
    default:
      argv.path = argv.path[1] === '/' ? path.join(process.cwd(), argv.path.slice(2)) : path.join(process.cwd(), argv.path);
      break;
  }

  let after;
  switch (argv.type) {
    case 'numbered-markdown':
      after = declinationList.map((i) => `${i.split('-')[0]}. ${i.split('-').slice(1).join('-')}`).join('\n');
      break;
    case 'numbered-dashed':
      after = declinationList.join('\n');
      break;
    case 'array':
      after = declinationList.map((i) => `${i.split('-').slice(1).join('-')}`).join('\n');
      break;
    default:
      break;
  }

  console.log(after);
};
