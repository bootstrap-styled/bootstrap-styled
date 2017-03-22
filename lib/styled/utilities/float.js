'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getFloatUtilities = getFloatUtilities;

var _float = require('../mixins/float');

var _breakpoints = require('../mixins/breakpoints');

var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

function getFloatUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];

  var floatUtilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = (0, _breakpoints.breakpointInfix)(breakpoint, gridBreakpoints);
    var floatUtility = (0, _breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n      .float' + infix + '-left {\n        ' + (0, _float.floatLeft)() + '\n      }\n      .float' + infix + '-right {\n        ' + (0, _float.floatRight)() + '\n      }\n      .float' + infix + '-none {\n        ' + (0, _float.floatNone)() + '\n      }\n    ');
    floatUtilityList.push(floatUtility);
  });

  return floatUtilityList.join('\n');
}

exports.default = {
  defaultProps: defaultProps,
  getFloatUtilities: getFloatUtilities
};