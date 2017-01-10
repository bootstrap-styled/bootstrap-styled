import { clearfix } from './clearfix';
import { breakpointNext, mediaBreakpointDown, mediaBreakpointUp } from './breakpoints';

export const defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export function navbarToggleable(gridBreakpoints = defaultProps['$grid-breakpoints']) {
  const navbarBreakpointList = [];
  Object.keys(gridBreakpoints).forEach((breakpoint) => {
    const next = breakpointNext(breakpoint, gridBreakpoints);
    const navbarBreakpoint = `
      & .navbar-toggleable-${breakpoint} {
        ${clearfix()}
       
        ${mediaBreakpointDown(breakpoint, gridBreakpoints, `

         & .navbar-brand {
            display: block;
            float: none;
            margin-top: .5rem;
            margin-right: 0;
          }
         
         & .navbar-nav {
            margin-top: .5rem;
            margin-bottom: .5rem;
            
            & .dropdown-menu {
              position: static;
              float: none;
            }
          }        
        `)}
      
        ${mediaBreakpointUp(next, gridBreakpoints, `
          display: block;
        `)}
      }
    `;
    navbarBreakpointList.push(navbarBreakpoint);
  });
  return `
    ${navbarBreakpointList.join('\n')}
  `;
}

export default {
  defaultProps,
  navbarToggleable,
};
