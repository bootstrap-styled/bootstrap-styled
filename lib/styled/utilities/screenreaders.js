'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenReadersUtilities = getScreenReadersUtilities;

var _screenReader = require('../mixins/screen-reader');

function getScreenReadersUtilities() {
  return '\n    .sr-only {\n      ' + (0, _screenReader.srOnly)() + '\n    }\n    \n    .sr-only-focusable {\n      ' + (0, _screenReader.srOnlyFocusable)() + '\n    }\n  ';
}

exports.default = {
  getScreenReadersUtilities: getScreenReadersUtilities
};