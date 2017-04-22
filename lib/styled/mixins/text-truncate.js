"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textTruncate = textTruncate;
// Text truncate
// Requires inline-block or block for proper styling

function textTruncate() {
  return "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  ";
}

exports.default = {
  textTruncate: textTruncate
};