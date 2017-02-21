import { breakpointInfix } from '../mixins/breakpoints';

export var defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

export function getDisplayUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];

  var utilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = breakpointInfix(breakpoint, gridBreakpoints);
    utilityList.push('\n      .d' + infix + '-none { display: none !important; }\n      .d' + infix + '-inline { display: inline !important; }\n      .d' + infix + '-inline-block { display: inline-block !important; }\n      .d' + infix + '-block { display: block !important; }\n      .d' + infix + '-table { display: table !important; }\n      .d' + infix + '-table-cell { display: table-cell !important; }\n      .d' + infix + '-flex { display: flex !important; }\n    ');
  });
  return utilityList.join('\n');
}

export default {
  defaultProps: defaultProps,
  getDisplayUtilities: getDisplayUtilities
};