exports.command = ['documentation <command>', 'doc'];
exports.desc = 'Initialize documentation.';
exports.builder = (yargs) => yargs.commandDir('documentation_cmds');

