'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bgVariant = bgVariant;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bgVariant(selector, bgColor) {
  return '\n    ' + selector + ' {\n      background-color: ' + bgColor + ' !important;\n    }\n    a' + selector + ' {\n      background-color: ' + (0, _color2.default)(bgColor).darken(0.1).toString() + ' !important;\n    }\n  ';
}

exports.default = {
  bgVariant: bgVariant
};