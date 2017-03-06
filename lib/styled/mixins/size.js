"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.size = size;
// Sizing shortcuts

function size(width) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;

  return "\n    width: " + width + ";\n    height: " + height + ";\n  ";
}

exports.default = {
  size: size
};