/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle, prefer-destructuring */
const p = path.join(__base, 'internals/declination');
const files = fs.existsSync(p) ? fs.readdirSync(p) : [];
const declinationList = files
  .filter((f) => f !== 'create');

exports.command = 'declination <tag>';
exports.desc = `Run the declination scripts in order :\n${declinationList.join('\n')}`;
exports.builder = (yargs) => yargs
  .option('path', {
    alias: 'p',
    describe: 'path',
    default: process.cwd(),
  })
  .commandDir('declination_cmds');

exports.handler = (argv) => {
  switch (argv.path[0]) {
    case '/':
      break;
    default:
      argv.path = argv.path[1] === '/' ? path.join(process.cwd(), argv.path.slice(2)) : path.join(process.cwd(), argv.path);
      break;
  }

  const cmd = path.join(argv.path, 'internals/declination/create');
  const executor = process.env.CI ? exec : spawn;
  executor(`${cmd} "${argv.tag}"`, (err, stdout) => {
    if (err) {
      console.error(`[ERROR] ${err.message}`);
      process.exit(1);
    }
    console.log(stdout);
  });
};
