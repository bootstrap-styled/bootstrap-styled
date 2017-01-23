export var defaultProps = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};

export function borderRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  if (enableRounded) {
    return '\n      border-radius: ' + radius + ';\n    ';
  }
  return '';
}

export function borderTopRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  if (enableRounded) {
    return '\n      border-top-right-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}

export function borderRightRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-top-right-radius: ' + radius + ';\n    ';
  }
  return '';
}

export function borderBottomRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-bottom-left-radius: ' + radius + ';\n    ';
  }
  return '';
}

export function borderLeftRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];

  if (enableRounded) {
    return '\n      border-bottom-left-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}

export default {
  defaultProps: defaultProps,
  borderRadius: borderRadius,
  borderTopRadius: borderTopRadius,
  borderRightRadius: borderRightRadius,
  borderBottomRadius: borderBottomRadius,
  borderLeftRadius: borderLeftRadius
};