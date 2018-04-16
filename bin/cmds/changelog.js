exports.command = ['changelog <command>', 'log'];
exports.desc = 'Manage changelog configuration';
exports.builder = (yargs) => yargs.commandDir('changelog_cmds');
