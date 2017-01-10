import { breakpointMin } from '../mixins/breakpoints';

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
    const min = breakpointMin(breakpoint, gridBreakpoints);
    if (min) {
      utilityList.push(`
        @media (min-width: ${min}) {
          .d-${breakpoint}-none { display: none !important; }
          .d-${breakpoint}-inline { display: inline !important; }
          .d-${breakpoint}-inline-block { display: inline-block !important; }
          .d-${breakpoint}-block { display: block !important; }
          .d-${breakpoint}-table { display: table !important; }
          .d-${breakpoint}-table-cell { display: table-cell !important; }
          .d-${breakpoint}-flex { display: flex !important; }
        }
      `);
    } else {
      utilityList.push(`
        .d-none { display: none !important; }
        .d-inline { display: inline !important; }
        .d-inline-block { display: inline-block !important; }
        .d-block { display: block !important; }
        .d-table { display: table !important; }
        .d-table-cell { display: table-cell !important; }
        .d-flex { display: flex !important; }
      `);
    }
  });
  return utilityList.join('\n');
}

export default {
  defaultProps,
  getDisplayUtilities,
};
