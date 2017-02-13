export var defaultProps = {
  '$enable-transitions': false,
  '$transition-base': 'all .2s ease-in-out',
  '$transition-fade': 'opacity .15s linear',
  '$transition-collapse': 'height .35s ease'
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

export function fadeWithClass() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-fade'];

  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return '\n    &.fade {\n      ' + fade.apply(undefined, [enableTransitions, transitionFade].concat(args)) + '\n    }\n  ';
}

export function fade() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-fade'];

  for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return '\n    opacity: 0;\n    ' + transition.apply(undefined, [enableTransitions, transitionFade].concat(args)) + ';\n\n    &.in {\n      opacity: 1;\n    }\n  ';
}

export function collapseWithClass() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-collapse'];

  for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    args[_key4 - 2] = arguments[_key4];
  }

  return '\n    &.collapse {\n      ' + collapse.apply(undefined, [enableTransitions, transitionCollapse].concat(args)) + '\n    }\n  ';
}

export function collapse() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-collapse'];

  for (var _len5 = arguments.length, args = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    args[_key5 - 2] = arguments[_key5];
  }

  return '\n    display: none;\n    ' + transition.apply(undefined, [enableTransitions, transitionCollapse].concat(args)) + ';\n    \n    &.in {\n      display: block;\n    }\n  ';
}

export function collapsingWithClass() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-collapse'];

  for (var _len6 = arguments.length, args = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    args[_key6 - 2] = arguments[_key6];
  }

  return '\n    &.collapsing {\n      ' + collapsing.apply(undefined, [enableTransitions, transitionCollapse].concat(args)) + '\n    }\n  ';
}

export function collapsing() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-collapse'];

  for (var _len7 = arguments.length, args = Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
    args[_key7 - 2] = arguments[_key7];
  }

  return '\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    ' + transition.apply(undefined, [enableTransitions, transitionCollapse].concat(args)) + ';\n  ';
}

export function collapseTrWithClass() {
  return '\n    tr {\n      &.collapse.in {\n        ' + collapseTr() + '\n      }\n    }\n  ';
}

export function collapseTr() {
  return '\n    display: table-row;\n  ';
}

export function collapseTbodyWithClass() {
  return '\n    tbody {\n      &.collapse.in {\n        ' + collapseTbody() + '\n      }\n    }\n  ';
}

export function collapseTbody() {
  return '\n    display: table-row-group;\n  ';
}

export default {
  defaultProps: defaultProps,
  transition: transition,
  fadeWithClass: fadeWithClass,
  fade: fade,
  collapseWithClass: collapseWithClass,
  collapse: collapse,
  collapseTrWithClass: collapseTrWithClass,
  collapseTr: collapseTr,
  collapseTbodyWithClass: collapseTbodyWithClass,
  collapseTbody: collapseTbody,
  collapsingWithClass: collapsingWithClass,
  collapsing: collapsing
};