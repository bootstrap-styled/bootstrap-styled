'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVisibilityUtilities = getVisibilityUtilities;

var _visibility = require('../mixins/visibility');

function getVisibilityUtilities() {
  return '\n    .visible {\n      ' + (0, _visibility.invisible)('visible') + '\n    }\n    \n    .invisible {\n      ' + (0, _visibility.invisible)('hidden') + '\n    }\n   \n  ';
}

exports.default = {
  getVisibilityUtilities: getVisibilityUtilities
};