/* eslint-disable no-undef, no-param-reassign, global-require, no-unused-vars, no-console, no-underscore-dangle, prefer-destructuring, no-shadow */
const dirTree = require('directory-tree');
const pkg = require(path.join(__base, 'package.json'));

exports.command = 'cli-help';
exports.desc = 'Generate cli documentation into `docs/cli`.';
exports.builder = (yargs) => yargs
  .option('path', {
    alias: 'p',
    describe: 'path',
  });

function mkDirByPathSync(targetDir, { isRelativeToScript = true } = {}) {
  const sep = path.sep;
  const initDir = path.isAbsolute(targetDir) ? sep : '';
  const baseDir = isRelativeToScript ? __dirname : '.';

  targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);
    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code !== 'EEXIST') {
        throw err;
      }
    }

    return curDir;
  }, initDir);
}

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
  const KEY = 'CLI Commands';
  const cliPath = path.join(argv.path, pkg.bin['rollup-umd']);
  const inputPath = path.join(argv.path, 'bin/cmds');
  const outputPath = path.join(argv.path, 'docs/cli');
  const configPath = path.join(argv.path, 'styleguide/styleguide.config.json');
  const config = require(configPath);
  let pos;

  const styleguideRest = config.sections.filter((s) => s.name !== KEY);
  config.sections.filter((s, i) => {
    if (s.name === KEY) {
      pos = i;
    }
    return false;
  });

  const cliDoc = {
    name: KEY,
    sections: [],
  };

  function traverse(inputPath, outputPath) {
    const inputs = fs.readdirSync(inputPath);
    inputs.forEach((i) => {
      const isDirectory = i.indexOf('.js') === -1;
      if (!isDirectory) {
        const exported = require(path.join(inputPath, i));
        const exportedDest = path.join(outputPath, i.replace('.js', '.md'));
        const ui = {};

        if (typeof exported.command === 'string') {
          ui.name = exported.command;
          ui.aliases = '';
        } else {
          ui.name = exported.command.shift();
          ui.aliases = `\n\naliases: \`${exported.command.join('`, ')}\``;
        }

        ui.desc = exported.desc;

        mkDirByPathSync(outputPath);
        fs.writeFileSync(exportedDest, `${ui.desc}${ui.aliases}\n\n\`\`\`bash\n$ $HELP\n\`\`\``, { encoding: 'utf8' });
      } else {
        const iP = path.join(inputPath, i);
        const oP = path.join(outputPath, i.replace('_cmds', ''));
        traverse(iP, oP);
      }
    });
  }

  function linkDoc() {
    const pathTree = defPath ? path.join(defPath, 'docs/cli') : 'docs/cli';
    const tree = dirTree(pathTree);

    function link(tree, parentCmd) {
      return tree.map((i) => {
        const linked = {};
        const cmd = `${parentCmd} ${i.name.replace('.md', '')}`;
        linked.name = i.name.replace('.md', '');
        if (i.type === 'directory') {
          linked.sections = link(i.children, `${parentCmd} ${i.name}`);
        } else {
          linked.content = i.path;
          // linked.description = `\n\n\`\`\`bash\n$ ${cmd}\n\`\`\``;
          sedReplace(i.path, '$CMD', parentCmd, i.path);
          exec(`${cliPath} ${cmd.replace(pkg.name, '')} help`, (err, stdout) => {
            sedReplace(i.path, '$HELP', stdout.replace(`${pkg.name}.js`, pkg.name).replace(process.cwd(), ''), i.path);
          });
        }
        return linked;
      });
    }

    cliDoc.sections = link(tree.children, pkg.name);

    config.sections = styleguideRest.slice(0, pos)
      .concat(cliDoc)
      .concat(styleguideRest.slice(pos));

    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), { encoding: 'utf8' });
  }

  exec(`rm -rf ${outputPath}`, () => {
    traverse(inputPath, outputPath);
    setTimeout(() => {
      linkDoc();
    }, 10);
  });
};
