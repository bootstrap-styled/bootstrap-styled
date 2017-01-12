import { mediaBreakpointUp } from '../mixins/breakpoints';

export const defaultProps = {
  '$enable-flex': false,
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export function getFlexUtilities(enableFlex = defaultProps['$enable-flex'], gridBreakpoints = defaultProps['$grid-breakpoints']) {
  if (enableFlex) {
    const flexUtilityList = [];
    Object.keys(gridBreakpoints).forEach((breakpoint) => {
      flexUtilityList.push(`
        /* Flex column reordering */
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .flex-${breakpoint}-first { order: -1; }
          .flex-${breakpoint}-last { order: 1; }
          .flex-${breakpoint}-unordered { order: 0; }
        `)}
    
        /* Flex direction */ 
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .flex-${breakpoint}-row            { flex-direction: row !important; }
          .flex-${breakpoint}-column         { flex-direction: column !important; }
          .flex-${breakpoint}-row-reverse    { flex-direction: row-reverse !important; }
          .flex-${breakpoint}-column-reverse { flex-direction: column-reverse !important; }
        `)}
        
        /* Flex wrap */ 
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .flex-${breakpoint}-wrap         { flex-wrap: wrap !important; }
          .flex-${breakpoint}-nowrap       { flex-wrap: nowrap !important; }
          .flex-${breakpoint}-wrap-reverse { flex-wrap: wrap-reverse !important; }
        `)}
        /* Flex justify-content */ 
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .justify-content-${breakpoint}-start   { justify-content: flex-start !important; }
          .justify-content-${breakpoint}-end     { justify-content: flex-end !important; }
          .justify-content-${breakpoint}-center  { justify-content: center !important; }
          .justify-content-${breakpoint}-between { justify-content: space-between !important; }
          .justify-content-${breakpoint}-around  { justify-content: space-around !important; }
        `)}
        /* Flex align-items */ 
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .align-items-${breakpoint}-start    { align-items: flex-start !important; }
          .align-items-${breakpoint}-end      { align-items: flex-end !important; }
          .align-items-${breakpoint}-center   { align-items: center !important; }
          .align-items-${breakpoint}-baseline { align-items: baseline !important; }
          .align-items-${breakpoint}-stretch  { align-items: stretch !important; }
        `)}
        /* Flex align-content */ 
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .align-content-${breakpoint}-start   { align-content: flex-start !important; }
          .align-content-${breakpoint}-end     { align-content: flex-end !important; }
          .align-content-${breakpoint}-center  { align-content: center !important; }
          .align-content-${breakpoint}-between { align-content: space-between !important; }
          .align-content-${breakpoint}-around  { align-content: space-around !important; }
          .align-content-${breakpoint}-stretch { align-content: stretch !important; }
        `)}
        /* Flex align-self */ 
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .align-self-${breakpoint}-auto     { align-self: auto !important; }
          .align-self-${breakpoint}-start    { align-self: flex-start !important; }
          .align-self-${breakpoint}-end      { align-self: flex-end !important; }
          .align-self-${breakpoint}-center   { align-self: center !important; }
          .align-self-${breakpoint}-baseline { align-self: baseline !important; }
          .align-self-${breakpoint}-stretch  { align-self: stretch !important; }
        `)} 
      `);
    });
    return flexUtilityList.join('\n');
  }
  return '';
}

export default {
  defaultProps,
  getFlexUtilities,
};
