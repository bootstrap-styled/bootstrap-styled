exports.command = 'peer <command>';
exports.desc = 'Manage peer dependencies configuration';
exports.builder = (yargs) => yargs.commandDir('peer_cmds');
