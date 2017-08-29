'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizable = resizable;
// Resize anything

function resizable(direction) {
  var available = ['horizontal', 'vertical', 'both'];
  if (available.indexOf(direction) === -1) {
    throw new Error('Wrong resize value. Available are ' + available.join(','));
  }
  return '\n    resize: ' + direction + '; /* Options: horizontal, vertical, both */\n    overflow: auto; /* Per CSS3 UI, \'resize\' only applies when \'overflow\' isn\'t \'visible\' */\n  ';
}

exports.default = {
  resizable: resizable
};