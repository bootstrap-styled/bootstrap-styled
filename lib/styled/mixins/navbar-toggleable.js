import { breakpointNext, mediaBreakpointDown, mediaBreakpointUp, breakpointInfix } from './breakpoints';

export var defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

export function navbarToggleable() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];

  var navbarBreakpointList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var next = breakpointNext(breakpoint, gridBreakpoints);
    var infix = breakpointInfix(breakpoint, gridBreakpoints);

    var navbarBreakpoint = '\n      &.navbar-toggleable' + infix + ' {\n        ' + mediaBreakpointDown(breakpoint, gridBreakpoints, '\n          .navbar-nav {\n            .dropdown-menu {\n              position: static;\n              float: none;\n            }\n          }\n\n          > .container {\n            padding-right: 0;\n            padding-left: 0;\n          }\n        ') + '\n        ' + mediaBreakpointUp(next, gridBreakpoints, '\n          flex-direction: row;\n          flex-wrap: nowrap;\n          align-items: center;\n  \n          .navbar-nav {\n            flex-direction: row;\n  \n            .nav-link {\n              padding-right: .5rem;\n              padding-left: .5rem;\n            }\n          }\n  \n          /* For nesting containers, have to redeclare for alignment purposes */\n          > .container {\n            display: flex;\n            flex-wrap: nowrap;\n            align-items: center;\n          }\n  \n          /* scss-lint:disable ImportantRule  */\n          .navbar-collapse {\n            display: flex !important;\n            width: 100%;\n            height: auto !important;\n            \n            >div:first-child,\n            >div:first-child>div:first-child { /* solve the wrapping issue */\n              display: flex;\n            }\n          }\n          \n          /* scss-lint:enable ImportantRule */\n          .navbar-toggler {\n            display: none;\n          }\n        ') + '\n      }\n    ';
    navbarBreakpointList.push(navbarBreakpoint);
  });
  return '\n    ' + navbarBreakpointList.join('\n') + '\n  ';
}

export default {
  defaultProps: defaultProps,
  navbarToggleable: navbarToggleable
};