import { mediaBreakpointUp, mediaBreakpointDown } from '../mixins/breakpoints';
import { invisible } from '../mixins/visibility';

export const defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export function getVisibilityUtilities(gridBreakpoints = defaultProps['$grid-breakpoints']) {
  const responsiveVisibilityList = [];
  Object.keys(gridBreakpoints).forEach((bp) => {
    responsiveVisibilityList.push(`
      .hidden-${bp}-up{
        ${mediaBreakpointUp(bp, gridBreakpoints, `
          display: none !important;
        `)}
      }
      .hidden-${bp}-down {
        ${mediaBreakpointDown(bp, gridBreakpoints, `
          display: none !important;
        `)}
      }
    `);
  });

  return `
    
    /* Visibility utilities */
    
    
    &.invisible,
     .invisible{
      ${invisible()}
    }
    
    /* Responsive visibility utilities */
    
    ${responsiveVisibilityList.join('\n')}
    
    
    /* Print utilities */
    /* Media queries are placed on the inside to be mixin-friendly. */
    
    &.visible-print-block,
     .visible-print-block {
      display: none !important;
    
      @media print {
        display: block !important;
      }
    }
    &.visible-print-inline,
     .visible-print-inline {
      display: none !important;
    
      @media print {
        display: inline !important;
      }
    }
    &.visible-print-inline-block,
     .visible-print-inline-block {
      display: none !important;
    
      @media print {
        display: inline-block !important;
      }
    }
    
    &.hidden-print,
     .hidden-print {
      @media print {
        display: none !important;
      }
    }

  `;
}

export default {
  defaultProps,
  getVisibilityUtilities,
};
