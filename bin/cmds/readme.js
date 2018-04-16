exports.command = 'readme <command>';
exports.desc = 'Initialize readme.';
exports.builder = (yargs) => yargs.commandDir('readme_cmds');

