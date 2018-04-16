exports.command = ['publish <command>', 'publishing'];
exports.desc = 'Manage publishing configuration';
exports.builder = (yargs) => yargs
  .commandDir('publish_cmds');
