var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import { mediaBreakpointUp, breakpointInfix } from '../mixins/breakpoints';

export var defaultProps = {
  '$enable-flex': false,
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

export function getFlexUtilities() {
  var enableFlex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-flex'];
  var gridBreakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];

  if (enableFlex) {
    var _ret = function () {
      var flexUtilityList = [];
      Object.keys(gridBreakpoints).forEach(function (breakpoint) {
        var infix = breakpointInfix(breakpoint, gridBreakpoints);
        flexUtilityList.push('\n        /* Flex column reordering */\n        ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n          .flex' + infix + '-first { order: -1; }\n          .flex' + infix + '-last { order: 1; }\n          .flex' + infix + '-unordered { order: 0; }\n        ') + '\n    \n        /* Flex direction */ \n        ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n          .flex' + infix + '-row            { flex-direction: row !important; }\n          .flex' + infix + '-column         { flex-direction: column !important; }\n          .flex' + infix + '-row-reverse    { flex-direction: row-reverse !important; }\n          .flex' + infix + '-column-reverse { flex-direction: column-reverse !important; }\n        ') + '\n        \n        /* Flex wrap */ \n        ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n          .flex' + infix + '-wrap         { flex-wrap: wrap !important; }\n          .flex' + infix + '-nowrap       { flex-wrap: nowrap !important; }\n          .flex' + infix + '-wrap-reverse { flex-wrap: wrap-reverse !important; }\n        ') + '\n        /* Flex justify-content */ \n        ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n          .justify-content' + infix + '-start   { justify-content: flex-start !important; }\n          .justify-content' + infix + '-end     { justify-content: flex-end !important; }\n          .justify-content' + infix + '-center  { justify-content: center !important; }\n          .justify-content' + infix + '-between { justify-content: space-between !important; }\n          .justify-content' + infix + '-around  { justify-content: space-around !important; }\n        ') + '\n        /* Flex align-items */ \n        ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n          .align-items' + infix + '-start    { align-items: flex-start !important; }\n          .align-items' + infix + '-end      { align-items: flex-end !important; }\n          .align-items' + infix + '-center   { align-items: center !important; }\n          .align-items' + infix + '-baseline { align-items: baseline !important; }\n          .align-items' + infix + '-stretch  { align-items: stretch !important; }\n        ') + '\n        /* Flex align-content */ \n        ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n          .align-content' + infix + '-start   { align-content: flex-start !important; }\n          .align-content' + infix + '-end     { align-content: flex-end !important; }\n          .align-content' + infix + '-center  { align-content: center !important; }\n          .align-content' + infix + '-between { align-content: space-between !important; }\n          .align-content' + infix + '-around  { align-content: space-around !important; }\n          .align-content' + infix + '-stretch { align-content: stretch !important; }\n        ') + '\n        /* Flex align-self */ \n        ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n          .align-self' + infix + '-auto     { align-self: auto !important; }\n          .align-self' + infix + '-start    { align-self: flex-start !important; }\n          .align-self' + infix + '-end      { align-self: flex-end !important; }\n          .align-self' + infix + '-center   { align-self: center !important; }\n          .align-self' + infix + '-baseline { align-self: baseline !important; }\n          .align-self' + infix + '-stretch  { align-self: stretch !important; }\n        ') + ' \n      ');
      });
      return {
        v: flexUtilityList.join('\n')
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return '';
}

export default {
  defaultProps: defaultProps,
  getFlexUtilities: getFlexUtilities
};