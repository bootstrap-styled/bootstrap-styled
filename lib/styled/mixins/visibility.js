'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.invisible = invisible;
exports.hiddenBpUp = hiddenBpUp;
exports.visiblePrintBlock = visiblePrintBlock;
exports.visiblePrintInline = visiblePrintInline;
exports.visiblePrintInlineBlock = visiblePrintInlineBlock;
exports.hiddenPrint = hiddenPrint;

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

// Visibility

function invisible() {
  return '\n    visibility: hidden !important;\n  ';
}

// Responsive visibility utilities
function hiddenBpUp() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];

  var hiddenBpList = [];
  Object.keys(gridBreakpoints).forEach(function (bp) {
    var hiddenBpUpClass = '\n      .hidden-' + bp + '-up {\n        ' + (0, _breakpoints.mediaBreakpointUp)(bp, gridBreakpoints, 'display: none !important') + '\n      }\n    ';
    var hiddenBpDownClass = '\n      .hidden-' + bp + '-down {\n        ' + (0, _breakpoints.mediaBreakpointDown)(bp, gridBreakpoints, 'display: none !important') + '\n      }\n    ';
    hiddenBpList.push(hiddenBpUpClass);
    hiddenBpList.push(hiddenBpDownClass);
  });
  return hiddenBpList.join('\n');
}

// Print utilities
//
// Media queries are placed on the inside to be mixin-friendly.

function visiblePrintBlock() {
  return '\n    .visible-print-block {\n      display: none !important;\n      \n      @media print {\n        display: block !important;\n      }\n    }\n  ';
}

function visiblePrintInline() {
  return '\n    .visible-print-inline {\n      display: none !important;\n      \n      @media print {\n        display: inline !important;\n      }\n    }\n  ';
}

function visiblePrintInlineBlock() {
  return '\n    .visible-print-inline-block {\n      display: none !important;\n      \n      @media print {\n        display: inline-block !important;\n      }\n    }\n  ';
}

function hiddenPrint() {
  return '\n    .hidden-print {\n      @media print {\n        display: none !important;\n      }\n    }\n  ';
}

exports.default = {
  visiblePrintBlock: visiblePrintBlock,
  visiblePrintInline: visiblePrintInline,
  visiblePrintInlineBlock: visiblePrintInlineBlock,
  hiddenPrint: hiddenPrint
};