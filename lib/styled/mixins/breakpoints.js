'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.breakpointNext = breakpointNext;
exports.breakpointMin = breakpointMin;
exports.breakpointMax = breakpointMax;
exports.breakpointInfix = breakpointInfix;
exports.mediaBreakpointUp = mediaBreakpointUp;
exports.mediaBreakpointDown = mediaBreakpointDown;
exports.mediaBreakpointBetween = mediaBreakpointBetween;
exports.mediaBreakpointOnly = mediaBreakpointOnly;

var _mathUtils = require('math-utils');

var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
// Breakpoint viewport sizes and media queries.
//
// Breakpoints are defined as a map of (name: minimum width), order from small to large:
//
//    (xs: 0, sm: 544px, md: 768px)
//
// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.

// Name of the next breakpoint, or null for the last breakpoint.
//
//    >> breakpoint-next(sm)
//    md
//    >> breakpoint-next(sm, (xs: 0, sm: 544px, md: 768px))
//    md
//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md))
//    md
function breakpointNext(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var breakpointNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.keys(breakpoints);

  var n = breakpointNames.indexOf(name);
  if (n !== -1 && n + 1 < breakpointNames.length) {
    return breakpointNames[n + 1];
  }
  return null;
}

// Minimum breakpoint width. Null for the smallest (first) breakpoint.
//
//    >> breakpoint-min(sm, (xs: 0, sm: 544px, md: 768px))
//    544px
function breakpointMin(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];

  var min = breakpoints[name];
  return min !== '0' ? min : null;
}

// Maximum breakpoint width. Null for the largest (last) breakpoint.
// The maximum value is calculated as the minimum of the next one less 0.1.
//
//    >> breakpoint-max(sm, (xs: 0, sm: 544px, md: 768px))
//    767px
function breakpointMax(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];

  var next = breakpointNext(name, breakpoints);
  if (next) {
    var min = _mathUtils.unitUtils.rmUnit(breakpointMin(next, breakpoints), _mathUtils.unitUtils.UNIT.PX);
    return (min - 1).toString() + _mathUtils.unitUtils.UNIT.PX;
  }
  return null;
}

// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash infront.
// Useful for making responsive utilities.
//
//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
//    ""  (Returns a blank string)
//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
//    "-sm"
function breakpointInfix(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];

  return breakpointMin(name, breakpoints) == null ? '' : '-' + name;
}

// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
// Makes the @content apply to the given breakpoint and wider.
function mediaBreakpointUp(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var content = arguments[2];

  var min = breakpointMin(name, breakpoints);
  if (min) {
    return '\n      @media (min-width: ' + min + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}

// Media of at most the maximum breakpoint width. No query for the largest breakpoint.
// Makes the @content apply to the given breakpoint and narrower.
function mediaBreakpointDown(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var content = arguments[2];

  var max = breakpointMax(name, breakpoints);
  if (max) {
    return '\n      @media (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}

// // Media that spans multiple breakpoint widths.
// // Makes the @content apply between the min and max breakpoints
// export function mediaBreakpointBetween(lower, upper, breakpoints = defaultProps['$grid-breakpoints'], content) {
//   return mediaBreakpointUp(lower, breakpoints, mediaBreakpointDown(upper, breakpoints, content));
// }
function mediaBreakpointBetween(lower, upper) {
  var breakpoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-breakpoints'];
  var content = arguments[3];

  var min = breakpointMin(lower, breakpoints);
  var max = breakpointMax(upper, breakpoints);
  if (min && max) {
    return '\n      @media (min-width: ' + min + ') and (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  } else if (min) {
    return '\n      @media (min-width: ' + min + ') {\n        ' + content + '\n      }\n    ';
  } else if (max) {
    return '\n      @media (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}

// Media between the breakpoint's minimum and maximum widths.
// No minimum for the smallest breakpoint, and no maximum for the largest one.
// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
function mediaBreakpointOnly(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var content = arguments[2];

  return mediaBreakpointBetween(name, name, breakpoints, content);
}

exports.default = {
  defaultProps: defaultProps,
  up: mediaBreakpointUp,
  down: mediaBreakpointDown,
  between: mediaBreakpointBetween,
  only: mediaBreakpointOnly
};