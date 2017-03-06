'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navbarVerticalAlign = navbarVerticalAlign;

var _mathUtils = require('math-utils');

var defaultProps = exports.defaultProps = {
  '$navbar-height': '50px'
};

// Navbar vertical align
//
// Vertically center elements in the navbar.
// Example: an element has a height of 30px, so write out `.navbar-vertical-align(30px);` to calculate the appropriate top margin.

// @mixin navbar-vertical-align($element-height) {
//   margin-top: (($navbar-height - $element-height) / 2);
//   margin-bottom: (($navbar-height - $element-height) / 2);
// }

function navbarVerticalAlign() {
  var navbarHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$navbar-height'];
  var elementHeight = arguments[1];

  var marginTop = '' + (_mathUtils.unitUtils.rmUnit(navbarHeight, _mathUtils.unitUtils.UNIT.PX) - _mathUtils.unitUtils.rmUnit(elementHeight, _mathUtils.unitUtils.UNIT.PX)) / 2 + _mathUtils.unitUtils.UNIT.PX;
  var marginBottom = '' + (_mathUtils.unitUtils.rmUnit(navbarHeight, _mathUtils.unitUtils.UNIT.PX) - _mathUtils.unitUtils.rmUnit(elementHeight, _mathUtils.unitUtils.UNIT.PX)) / 2 + _mathUtils.unitUtils.UNIT.PX;
  return '\n    margin-top: ' + marginTop + ';\n    margin-bottom: ' + marginBottom + ';  \n  ';
}

exports.default = {
  defaultProps: defaultProps,
  navbarVerticalAlign: navbarVerticalAlign
};