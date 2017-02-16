import { breakpointInfix } from '../mixins/breakpoints';

export const defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export function getDisplayUtilities(gridBreakpoints = defaultProps['$grid-breakpoints']) {
  const utilityList = [];
  Object.keys(gridBreakpoints).forEach((breakpoint) => {
    const infix = breakpointInfix(breakpoint, gridBreakpoints);
    utilityList.push(`
      .d${infix}-none { display: none !important; }
      .d${infix}-inline { display: inline !important; }
      .d${infix}-inline-block { display: inline-block !important; }
      .d${infix}-block { display: block !important; }
      .d${infix}-table { display: table !important; }
      .d${infix}-table-cell { display: table-cell !important; }
      .d${infix}-flex { display: flex !important; }
    `);
  });
  return utilityList.join('\n');
}

export default {
  defaultProps,
  getDisplayUtilities,
};
