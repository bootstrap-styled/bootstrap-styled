import { breakpointNext, mediaBreakpointDown, mediaBreakpointUp, breakpointInfix } from './breakpoints';

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
    const infix = breakpointInfix(breakpoint, gridBreakpoints);

    const navbarBreakpoint = `
      &.navbar-toggleable${infix} {
        ${mediaBreakpointDown(breakpoint, gridBreakpoints, `
          .navbar-nav {
            .dropdown-menu {
              position: static;
              float: none;
            }
          }

          > .container {
            padding-right: 0;
            padding-left: 0;
          }
        `)}
        ${mediaBreakpointUp(next, gridBreakpoints, `
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
  
          .navbar-nav {
            flex-direction: row;
  
            .nav-link {
              padding-right: .5rem;
              padding-left: .5rem;
            }
          }
  
          /* For nesting containers, have to redeclare for alignment purposes */
          > .container {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
          }
  
          .navbar-collapse {
            display: flex !important;
            width: 100%;

           }
           
          .navbar-toggler {
            display: none;
          }
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
