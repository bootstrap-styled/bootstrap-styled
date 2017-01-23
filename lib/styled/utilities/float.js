import { floatLeft, floatRight, floatNone } from '../mixins/float';
import { mediaBreakpointUp, breakpointInfix } from '../mixins/breakpoints';

export var defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

export function getFloatUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];

  var floatUtilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = breakpointInfix(breakpoint, gridBreakpoints);
    var floatUtility = mediaBreakpointUp(breakpoint, gridBreakpoints, '\n      .float' + infix + '-left {\n        ' + floatLeft() + '\n      }\n      .float' + infix + '-right {\n        ' + floatRight() + '\n      }\n      .float' + infix + '-none {\n        ' + floatNone() + '\n      }\n    ');
    floatUtilityList.push(floatUtility);
  });

  return floatUtilityList.join('\n');
}

export default {
  defaultProps: defaultProps,
  getFloatUtilities: getFloatUtilities
};