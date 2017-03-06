'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getVisibilityUtilities = getVisibilityUtilities;

var _breakpoints = require('../mixins/breakpoints');

var _visibility = require('../mixins/visibility');

var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

function getVisibilityUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];

  var responsiveVisibilityList = [];
  Object.keys(gridBreakpoints).forEach(function (bp) {
    responsiveVisibilityList.push('\n      .hidden-' + bp + '-up{\n        ' + (0, _breakpoints.mediaBreakpointUp)(bp, gridBreakpoints, '\n          display: none !important;\n        ') + '\n      }\n      .hidden-' + bp + '-down {\n        ' + (0, _breakpoints.mediaBreakpointDown)(bp, gridBreakpoints, '\n          display: none !important;\n        ') + '\n      }\n    ');
  });

  return '\n    \n    /* Visibility utilities */\n    \n    \n    &.invisible,\n     .invisible{\n      ' + (0, _visibility.invisible)() + '\n    }\n    \n    /* Responsive visibility utilities */\n    \n    ' + responsiveVisibilityList.join('\n') + '\n    \n    \n    /* Print utilities */\n    /* Media queries are placed on the inside to be mixin-friendly. */\n    \n    &.visible-print-block,\n     .visible-print-block {\n      display: none !important;\n    \n      @media print {\n        display: block !important;\n      }\n    }\n    &.visible-print-inline,\n     .visible-print-inline {\n      display: none !important;\n    \n      @media print {\n        display: inline !important;\n      }\n    }\n    &.visible-print-inline-block,\n     .visible-print-inline-block {\n      display: none !important;\n    \n      @media print {\n        display: inline-block !important;\n      }\n    }\n    \n    &.hidden-print,\n     .hidden-print {\n      @media print {\n        display: none !important;\n      }\n    }\n\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  getVisibilityUtilities: getVisibilityUtilities
};