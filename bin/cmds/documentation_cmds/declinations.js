/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle, prefer-destructuring */
const async = require('async');
const pkg = require('../../../package.json');

exports.command = 'declinations';
exports.desc = 'Generate declination documentation into `docs/declinations`.';
exports.builder = (yargs) => yargs
  .option('path', {
    alias: 'p',
    describe: 'path',
    default: process.cwd(),
  });
exports.handler = (argv) => {
  const defPath = argv.path;
  argv.path = defPath || process.cwd();
  switch (argv.path[0]) {
    case '/':
      break;
    default:
      argv.path = argv.path[1] === '/' ? path.join(process.cwd(), argv.path.slice(2)) : path.join(process.cwd(), argv.path);
      break;
  }
  const binPath = path.join(argv.path, pkg.bin['rollup-umd']);
  const dirPath = path.join(argv.path, 'docs/declinations');

  async.auto({
    clean: (cb) => spawn(`rm -rf ${dirPath}`, cb),
    mkdir: ['clean', (results, cb) => spawn(`mkdir -p ${dirPath}`, cb)],
    list: ['mkdir', (results, cb) => spawn(`${binPath} declination list -p ${argv.path} -t numbered-dashed`, cb)],
    createDoc: ['list', (results, cb) => {
      const declinationList = results.list[0].split('\n').filter((f) => !!f);
      declinationList.forEach((d) => {
        const script = fs.readFileSync(path.join(argv.path, 'internals/declination', d), { encoding: 'utf8' });
        const doc = `\`\`\`bash\n${script}\n\`\`\``;
        fs.writeFileSync(path.join(dirPath, `${d}.md`), doc, { encoding: 'utf8' });
      });
      const configPath = path.join(argv.path, 'styleguide/styleguide.config.json');
      const config = require(configPath);

      let pos;
      let page;

      config.sections.filter((p, i) => {
        if (p.name === 'Declinations') {
          pos = i;
          page = p;
        }
        return p;
      });

      if (!pos || !page) {
        throw new Error('You must have { name: \'Declinations:\' } existing.');
      }
      page.sections = declinationList.map((d) => ({ name: d, content: `docs/declinations/${d}.md` }));
      const newSections = config.sections.slice(0, pos).concat(page).concat(config.sections.slice(pos + 1));
      config.sections = newSections;
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2), { encoding: 'utf8' });
      cb();
    }],
  }, (err, res) => {
    if (err) {
      console.error(`[ERROR] ${err.message}`);
      process.exit(1);
    }
    console.log('[Success] Declination documentation generated.');
  });
};
