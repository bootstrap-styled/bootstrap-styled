export var defaultProps = {
  '$enable-shadows': false
};

export function boxShadow() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];

  if (enableShadows) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return '\n      box-shadow: ' + args.join(' ') + ';\n    ';
  }
  return '';
}

export default {
  defaultProps: defaultProps,
  boxShadow: boxShadow
};