/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle */
exports.command = ['npm-install-cmd', 'npm'];
exports.desc = 'Display the npm installation command for the peers of the module';
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

  let pkg;
  try {
    pkg = require(path.join(argv.path, 'package.json'));
  } catch (e) {
    console.error('[ERROR] You must be in a project to read it\'s dependencies');
    process.exit(1);
  }
  const peer = pkg.peerDependencies;
  const installList = Object.keys(peer).map((key) => peer[key].match(/^git@?\+?/gm) ? peer[key] : `${key}@${peer[key]}`);
  const installCmd = `npm install --save ${installList.join(' ')}`;
  console.log(installCmd);
};
