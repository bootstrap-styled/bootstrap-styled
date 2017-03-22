'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getBordersUtilities = getBordersUtilities;
exports.rounded = rounded;
exports.roundedTop = roundedTop;
exports.roundedRight = roundedRight;
exports.roundedBottom = roundedBottom;
exports.roundedLeft = roundedLeft;
exports.roundedCircle = roundedCircle;
exports.resetBorder = resetBorder;
exports.resetBorderTop = resetBorderTop;
exports.resetBorderRight = resetBorderRight;
exports.resetBorderBottom = resetBorderBottom;
exports.resetBorderLeft = resetBorderLeft;

var _borderRadius = require('../mixins/border-radius');

var defaultProps = exports.defaultProps = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};

function getBordersUtilities() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  return '\n    ' + rounded(enableRounded, radius) + '\n    ' + roundedTop(enableRounded, radius) + '\n    ' + roundedRight(enableRounded, radius) + '\n    ' + roundedBottom(enableRounded, radius) + '\n    ' + roundedLeft(enableRounded, radius) + '\n    ' + roundedCircle(enableRounded, radius) + '\n    ' + resetBorder() + '\n    ' + resetBorderTop() + '\n    ' + resetBorderRight() + '\n    ' + resetBorderLeft() + '\n    ' + resetBorderBottom() + '\n  ';
}

function rounded() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  return '\n    .rounded {\n      ' + (0, _borderRadius.borderRadius)(enableRounded, radius) + '\n    }\n  ';
}

function roundedTop() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  return '\n    .rounded-top {\n      ' + (0, _borderRadius.borderTopRadius)(enableRounded, radius) + '\n    }\n  ';
}

function roundedRight() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  return '\n    .rounded-right {\n      ' + (0, _borderRadius.borderRightRadius)(enableRounded, radius) + '\n    }\n  ';
}

function roundedBottom() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  return '\n    .rounded-bottom {\n      ' + (0, _borderRadius.borderBottomRadius)(enableRounded, radius) + '\n    }\n  ';
}

function roundedLeft() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  return '\n    .rounded-left {\n      ' + (0, _borderRadius.borderLeftRadius)(enableRounded, radius) + '\n    }\n  ';
}

function roundedCircle() {
  return '\n    .rounded-circle {\n      border-radius: 50%;\n    }\n  ';
}

function resetBorder() {
  return '\n    .border-0 {\n      border: 0 !important;\n    }\n  ';
}

function resetBorderTop() {
  return '\n    .border-top-0 {\n      border-top: 0 !important;\n    }\n  ';
}

function resetBorderRight() {
  return '\n    .border-right-0 {\n      border-right: 0 !important;\n    }\n  ';
}

function resetBorderBottom() {
  return '\n    .border-bottom-0 {\n      border-bottom: 0 !important;\n    }\n  ';
}

function resetBorderLeft() {
  return '\n    .border-left-0 {\n      border-left: 0 !important;\n    }\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  getBordersUtilities: getBordersUtilities,
  rounded: rounded,
  roundedTop: roundedTop,
  roundedRight: roundedRight,
  roundedBottom: roundedBottom,
  roundedLeft: roundedLeft,
  roundedCircle: roundedCircle
};