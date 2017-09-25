"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invisible = invisible;

// Visibility

function invisible(visibility) {
  return "\n    visibility: " + visibility + " !important;\n  ";
}

exports.default = {
  invisible: invisible
};