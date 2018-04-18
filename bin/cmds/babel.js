exports.command = 'babel <command>';
exports.desc = 'Manage babel configuration';
exports.builder = (yargs) => yargs.commandDir('babel_cmds');
