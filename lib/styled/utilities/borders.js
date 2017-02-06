import { borderRadius, borderTopRadius, borderRightRadius, borderBottomRadius, borderLeftRadius } from '../mixins/border-radius';

export var defaultProps = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};

export function getBordersUtilities() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  return '\n    ' + rounded(enableRounded, radius) + '\n    ' + roundedTop(enableRounded, radius) + '\n    ' + roundedRight(enableRounded, radius) + '\n    ' + roundedBottom(enableRounded, radius) + '\n    ' + roundedLeft(enableRounded, radius) + '\n    ' + roundedCircle(enableRounded, radius) + '\n    ' + resetBorder() + '\n    ' + resetBorderTop() + '\n    ' + resetBorderRight() + '\n    ' + resetBorderLeft() + '\n    ' + resetBorderBottom() + '\n  ';
}

export function rounded() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  return '\n    .rounded {\n      ' + borderRadius(enableRounded, radius) + '\n    }\n  ';
}

export function roundedTop() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  return '\n    .rounded-top {\n      ' + borderTopRadius(enableRounded, radius) + '\n    }\n  ';
}

export function roundedRight() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  return '\n    .rounded-right {\n      ' + borderRightRadius(enableRounded, radius) + '\n    }\n  ';
}

export function roundedBottom() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  return '\n    .rounded-bottom {\n      ' + borderBottomRadius(enableRounded, radius) + '\n    }\n  ';
}

export function roundedLeft() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  return '\n    .rounded-left {\n      ' + borderLeftRadius(enableRounded, radius) + '\n    }\n  ';
}

export function roundedCircle() {
  return '\n    .rounded-circle {\n      border-radius: 50%;\n    }\n  ';
}

export function resetBorder() {
  return '\n    .border-0 {\n      border: 0;\n    }\n  ';
}

export function resetBorderTop() {
  return '\n    .border-top-0 {\n      border-top: 0;\n    }\n  ';
}

export function resetBorderRight() {
  return '\n    .border-right-0 {\n      border-right: 0;\n    }\n  ';
}

export function resetBorderBottom() {
  return '\n    .border-bottom-0 {\n      border-bottom: 0;\n    }\n  ';
}

export function resetBorderLeft() {
  return '\n    .border-left-0 {\n      border-left: 0;\n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  getBordersUtilities: getBordersUtilities,
  rounded: rounded,
  roundedTop: roundedTop,
  roundedRight: roundedRight,
  roundedBottom: roundedBottom,
  roundedLeft: roundedLeft,
  roundedCircle: roundedCircle
};