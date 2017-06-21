'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navbarToggleable = navbarToggleable;

var _breakpoints = require('./breakpoints');

var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

function navbarToggleable() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];

  var navbarBreakpointList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var next = (0, _breakpoints.breakpointNext)(breakpoint, gridBreakpoints);
    var infix = (0, _breakpoints.breakpointInfix)(breakpoint, gridBreakpoints);

    var navbarBreakpoint = '\n      &.navbar-toggleable' + infix + ' {\n        ' + (0, _breakpoints.mediaBreakpointDown)(breakpoint, gridBreakpoints, '\n          .navbar-nav {\n            .dropdown-menu {\n              position: static;\n              float: none;\n            }\n          }\n\n          > .container {\n            padding-right: 0;\n            padding-left: 0;\n          }\n        ') + '\n        ' + (0, _breakpoints.mediaBreakpointUp)(next, gridBreakpoints, '\n          flex-direction: row;\n          flex-wrap: nowrap;\n          align-items: center;\n  \n          .navbar-nav {\n            flex-direction: row;\n  \n            .nav-link {\n              padding-right: .5rem;\n              padding-left: .5rem;\n            }\n          }\n  \n          /* For nesting containers, have to redeclare for alignment purposes */\n          > .container {\n            display: flex;\n            flex-wrap: nowrap;\n            align-items: center;\n          }\n  \n          .navbar-collapse {\n            display: flex !important;\n            width: 100%;\n\n           }\n           \n          .navbar-toggler {\n            display: none;\n          }\n        ') + '\n      }\n    ';
    navbarBreakpointList.push(navbarBreakpoint);
  });
  return '\n    ' + navbarBreakpointList.join('\n') + '\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  navbarToggleable: navbarToggleable
};