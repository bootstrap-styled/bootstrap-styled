import { unitUtils } from 'math-utils';

export var defaultProps = {
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

export function navbarVerticalAlign() {
  var navbarHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$navbar-height'];
  var elementHeight = arguments[1];

  var marginTop = '' + (unitUtils.rmUnit(navbarHeight, unitUtils.UNIT.PX) - unitUtils.rmUnit(elementHeight, unitUtils.UNIT.PX)) / 2 + unitUtils.UNIT.PX;
  var marginBottom = '' + (unitUtils.rmUnit(navbarHeight, unitUtils.UNIT.PX) - unitUtils.rmUnit(elementHeight, unitUtils.UNIT.PX)) / 2 + unitUtils.UNIT.PX;
  return '\n    margin-top: ' + marginTop + ';\n    margin-bottom: ' + marginBottom + ';  \n  ';
}

export default {
  defaultProps: defaultProps,
  navbarVerticalAlign: navbarVerticalAlign
};