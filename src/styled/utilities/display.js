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
  utilityList.push(`
    .d-print-block {
      display: none !important;
    
      @media print {
        display: block !important;
      }
    }
    
    .d-print-inline {
      display: none !important;
    
      @media print {
        display: inline !important;
      }
    }
    
    .d-print-inline-block {
      display: none !important;
    
      @media print {
        display: inline-block !important;
      }
    }
    
    .d-print-none {
      @media print {
        display: none !important;
      }
    }
  `);
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
      .d${infix}-inline-flex { display: inline-flex !important; }
    `);
  });
  return utilityList.join('\n');
}

export default {
  defaultProps,
  getDisplayUtilities,
};
