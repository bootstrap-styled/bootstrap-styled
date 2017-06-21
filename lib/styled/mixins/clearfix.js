"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearfix = clearfix;
function clearfix() {
  return "\n    &::after {\n      content: \"\";\n      display: table;\n      clear: both;\n    }\n  ";
}

exports.default = {
  clearfix: clearfix
};