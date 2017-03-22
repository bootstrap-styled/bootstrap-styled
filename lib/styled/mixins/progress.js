"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progressVariant = progressVariant;
function progressVariant(bgColor) {
  return "\n    &[value]::-webkit-progress-value {\n      background-color: " + bgColor + ";\n    }\n    \n    &[value]::-moz-progress-bar {\n      background-color: " + bgColor + ";\n    }\n    \n    /* IE10+, Microsoft Edge */\n    &[value]::-ms-fill {\n      background-color: " + bgColor + ";\n    }\n    \n    /* IE9 */\n    @media screen and (min-width:0\\0) {\n    .progress-bar {\n        background-color: " + bgColor + ";\n      }\n    }\n  ";
}

exports.default = {
  progressVariant: progressVariant
};