"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floatLeft = floatLeft;
exports.floatRight = floatRight;
exports.floatNone = floatNone;
function floatLeft() {
  return "\n    float: left !important;\n  ";
}

function floatRight() {
  return "\n    float: right !important;\n  ";
}

function floatNone() {
  return "\n    float: none !important;\n  ";
}

exports.default = {
  floatLeft: floatLeft,
  floatRight: floatRight,
  floatNone: floatNone
};