import { mediaBreakpointUp, breakpointInfix } from '../mixins/breakpoints';

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
      const infix = breakpointInfix(breakpoint, gridBreakpoints);
      flexUtilityList.push(`
        /* Flex column reordering */
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .flex${infix}-first { order: -1; }
          .flex${infix}-last { order: 1; }
          .flex${infix}-unordered { order: 0; }
        `)}
    
        /* Flex direction */ 
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .flex${infix}-row            { flex-direction: row !important; }
          .flex${infix}-column         { flex-direction: column !important; }
          .flex${infix}-row-reverse    { flex-direction: row-reverse !important; }
          .flex${infix}-column-reverse { flex-direction: column-reverse !important; }
        `)}
        
        /* Flex wrap */ 
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .flex${infix}-wrap         { flex-wrap: wrap !important; }
          .flex${infix}-nowrap       { flex-wrap: nowrap !important; }
          .flex${infix}-wrap-reverse { flex-wrap: wrap-reverse !important; }
        `)}
        /* Flex justify-content */ 
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .justify-content${infix}-start   { justify-content: flex-start !important; }
          .justify-content${infix}-end     { justify-content: flex-end !important; }
          .justify-content${infix}-center  { justify-content: center !important; }
          .justify-content${infix}-between { justify-content: space-between !important; }
          .justify-content${infix}-around  { justify-content: space-around !important; }
        `)}
        /* Flex align-items */ 
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .align-items${infix}-start    { align-items: flex-start !important; }
          .align-items${infix}-end      { align-items: flex-end !important; }
          .align-items${infix}-center   { align-items: center !important; }
          .align-items${infix}-baseline { align-items: baseline !important; }
          .align-items${infix}-stretch  { align-items: stretch !important; }
        `)}
        /* Flex align-content */ 
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .align-content${infix}-start   { align-content: flex-start !important; }
          .align-content${infix}-end     { align-content: flex-end !important; }
          .align-content${infix}-center  { align-content: center !important; }
          .align-content${infix}-between { align-content: space-between !important; }
          .align-content${infix}-around  { align-content: space-around !important; }
          .align-content${infix}-stretch { align-content: stretch !important; }
        `)}
        /* Flex align-self */ 
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .align-self${infix}-auto     { align-self: auto !important; }
          .align-self${infix}-start    { align-self: flex-start !important; }
          .align-self${infix}-end      { align-self: flex-end !important; }
          .align-self${infix}-center   { align-self: center !important; }
          .align-self${infix}-baseline { align-self: baseline !important; }
          .align-self${infix}-stretch  { align-self: stretch !important; }
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
