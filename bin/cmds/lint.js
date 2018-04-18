exports.command = 'lint <command>';
exports.desc = 'Manage linting configuration';
exports.builder = (yargs) => yargs.commandDir('lint_cmds');
