'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertVariant = alertVariant;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function alertVariant(background, border, bodyColor) {
  return '\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    color: ' + bodyColor + ';\n  \n    hr {\n      border-top-color: ' + (0, _color2.default)(border).darken(0.5).toString() + ';\n    }\n    .alert-link {\n      color: ' + (0, _color2.default)(bodyColor).darken(0.1).toString() + ';\n    }\n  ';
}

exports.default = {
  alertVariant: alertVariant
};