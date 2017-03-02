// Resize anything

export function resizable(direction) {
  var available = ['horizontal', 'vertical', 'both'];
  if (available.indexOf(direction) === -1) {
    throw new Error('Wrong resize value. Available are ' + available.join(','));
  }
  return '\n    resize: ' + direction + '; /* Options: horizontal, vertical, both */\n    overflow: auto; /* Per CSS3 UI, \'resize\' only applies when \'overflow\' isn\'t \'visible\' */\n  ';
}

export default {
  resizable: resizable
};