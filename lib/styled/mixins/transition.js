export var defaultProps = {
  '$enable-transitions': false
};

// eslint-disable-next-line consistent-return
export function transition() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];

  if (enableTransitions) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return '\n      transition: ' + args.join(' ') + ';\n    ';
  }
  return '';
}

export default {
  defaultProps: defaultProps,
  transition: transition
};