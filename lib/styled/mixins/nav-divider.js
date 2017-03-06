'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navDivider = navDivider;

var _mathUtils = require('math-utils');

var defaultProps = exports.defaultProps = {
  '$spacer-y': '1rem'
};

// Horizontal dividers
//
// Dividers (basically an hr) within dropdowns and nav lists
function navDivider() {
  var spacerY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$spacer-y'];
  var dividerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#e5e5e5';

  var marginY = '' + _mathUtils.unitUtils.rmUnit(spacerY, _mathUtils.unitUtils.UNIT.REM) / 2 + _mathUtils.unitUtils.UNIT.REM;
  return '\n    height: 1px;\n    margin: calc(' + marginY + ' / 2) 0;\n    overflow: hidden;\n    background-color: ' + dividerColor + ';\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  navDivider: navDivider
};