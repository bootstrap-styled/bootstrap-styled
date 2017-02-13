import { breakpointMin } from '../mixins/breakpoints';

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
    var min = breakpointMin(breakpoint, gridBreakpoints);
    if (min) {
      utilityList.push('\n        @media (min-width: ' + min + ') {\n          .d-' + breakpoint + '-none { display: none !important; }\n          .d-' + breakpoint + '-inline { display: inline !important; }\n          .d-' + breakpoint + '-inline-block { display: inline-block !important; }\n          .d-' + breakpoint + '-block { display: block !important; }\n          .d-' + breakpoint + '-table { display: table !important; }\n          .d-' + breakpoint + '-table-cell { display: table-cell !important; }\n          .d-' + breakpoint + '-flex { display: flex !important; }\n        }\n      ');
    } else {
      utilityList.push('\n        .d-none { display: none !important; }\n        .d-inline { display: inline !important; }\n        .d-inline-block { display: inline-block !important; }\n        .d-block { display: block !important; }\n        .d-table { display: table !important; }\n        .d-table-cell { display: table-cell !important; }\n        .d-flex { display: flex !important; }\n      ');
    }
  });
  return utilityList.join('\n');
}

export default {
  defaultProps: defaultProps,
  getDisplayUtilities: getDisplayUtilities
};