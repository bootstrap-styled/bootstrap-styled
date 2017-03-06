"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlignUtilities = getAlignUtilities;
exports.alignBaseline = alignBaseline;
exports.alignTop = alignTop;
exports.alignMiddle = alignMiddle;
exports.alignBottom = alignBottom;
exports.alignTextBottom = alignTextBottom;
exports.alignTextTop = alignTextTop;
function getAlignUtilities() {
  return "\n   " + alignBaseline() + "\n   " + alignTop() + "\n   " + alignMiddle() + "\n   " + alignBottom() + "\n   " + alignTextBottom() + "\n   " + alignTextTop() + "\n  ";
}

function alignBaseline() {
  return "\n    .align-baseline { vertical-align: baseline !important; } /* Browser default */\n  ";
}

function alignTop() {
  return "\n    .align-top { vertical-align: top !important; }\n  ";
}

function alignMiddle() {
  return "\n    .align-middle { vertical-align: middle !important; }\n  ";
}

function alignBottom() {
  return "\n    .align-bottom { vertical-align: bottom !important; }\n  ";
}

function alignTextBottom() {
  return "\n    .align-text-bottom { vertical-align: text-bottom !important; }\n  ";
}

function alignTextTop() {
  return "\n    .align-text-top { vertical-align: text-top !important; }\n  ";
}

exports.default = {
  getAlignUtilities: getAlignUtilities,
  alignBaseline: alignBaseline,
  alignTop: alignTop,
  alignMiddle: alignMiddle,
  alignBottom: alignBottom,
  alignTextBottom: alignTextBottom,
  alignTextTop: alignTextTop
};