/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle, prefer-destructuring */
exports.command = 'add <text>';
exports.desc = 'Append new log to current version';
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

  const text = argv.text[argv.text.length - 1] === '.' ? argv.text : `${argv.text}.`;
  const p = path.join(argv.path, 'CHANGELOG.md');
  const content = fs.readFileSync(p, { encoding: 'utf8' });

  const regex = /^(# Changelog[\s\S]*?(?:\n- .*)+)/g;
  const match = regex.exec(content);
  const before = content.slice(0, match[0].length);
  const after = content.slice(match[0].length);

  const log = `\n- ${text}`;
  const newContent = `${before}${log}${after}`;
  fs.writeFileSync(p, newContent, { encoding: 'utf8' });
  console.log('[Success] CHANGELOG.md modified.');
};
