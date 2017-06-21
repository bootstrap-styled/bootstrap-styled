"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textHide = textHide;
// CSS image replacement
function textHide() {
  return "\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n  ";
}

exports.default = {
  textHide: textHide
};