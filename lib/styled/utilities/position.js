export var defaultProps = {
  '$zindex-fixed': '1030',
  '$zindex-sticky': '1030'
};

export function getPositionUtilities() {
  var zindexFixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$zindex-fixed'];
  var zindexSticky = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$zindex-sticky'];

  return '\n    ' + fixedTop(zindexFixed) + '\n    ' + fixedBottom(zindexFixed) + '\n    ' + stickTop(zindexSticky) + '\n  ';
}

export function fixedTop() {
  var zindexFixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$zindex-fixed'];

  return '\n  .fixed-top {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: ' + zindexFixed + ';\n  }\n  ';
}

export function fixedBottom() {
  var zindexFixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$zindex-fixed'];

  return '\n    .fixed-bottom {\n      position: fixed;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + zindexFixed + ';\n    }\n  ';
}

export function stickTop() {
  var zindexSticky = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$zindex-sticky'];

  return '\n    .sticky-top {\n      position: sticky;\n      top: 0;\n      z-index: ' + zindexSticky + ';\n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  getPositionUtilities: getPositionUtilities,
  fixedTop: fixedTop,
  fixedBottom: fixedBottom,
  stickTop: stickTop
};