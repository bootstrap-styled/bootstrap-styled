'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderRadius = borderRadius;
exports.borderTopRadius = borderTopRadius;
exports.borderRightRadius = borderRightRadius;
exports.borderBottomRadius = borderBottomRadius;
exports.borderLeftRadius = borderLeftRadius;
var defaultProps = exports.defaultProps = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};

function borderRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  if (enableRounded) {
    return '\n      border-radius: ' + radius + ';\n    ';
  }
  return '';
}

function borderTopRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  if (enableRounded) {
    return '\n      border-top-right-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}

function borderRightRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-top-right-radius: ' + radius + ';\n    ';
  }
  return '';
}

function borderBottomRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-bottom-left-radius: ' + radius + ';\n    ';
  }
  return '';
}

function borderLeftRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  if (enableRounded) {
    return '\n      border-bottom-left-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}

exports.default = {
  defaultProps: defaultProps,
  all: borderRadius,
  top: borderTopRadius,
  right: borderRightRadius,
  bottom: borderBottomRadius,
  left: borderLeftRadius
};