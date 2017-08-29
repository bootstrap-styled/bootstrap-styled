'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClearfixUtilities = getClearfixUtilities;
exports.getClearfix = getClearfix;

var _clearfix = require('../mixins/clearfix');

function getClearfixUtilities() {
  return '\n   ' + getClearfix() + '\n  ';
}

function getClearfix() {
  return '\n    .clearfix {\n      ' + (0, _clearfix.clearfix)() + '\n    }\n  ';
}

exports.default = {
  getClearfixUtilities: getClearfixUtilities,
  getClearfix: getClearfix
};