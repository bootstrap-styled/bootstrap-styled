"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetFilter = resetFilter;
// Reset filters for IE
//
// When you need to remove a gradient background, do not forget to use this to reset
// the IE filter for IE9.

function resetFilter() {
  return "\n    filter: \"progid:DXImageTransform.Microsoft.gradient(enabled = false)\";\n  ";
}

exports.default = {
  resetFilter: resetFilter
};