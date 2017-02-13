var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import { unitUtils } from 'math-utils';
import { mediaBreakpointUp } from './breakpoints';

export var defaultProps = {
  '$grid-gutter-widths': {
    xs: '30px',
    sm: '30px',
    md: '30px',
    lg: '30px',
    xl: '30px'
  },
  '$container-max-widths': {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  },
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$grid-columns': 12,
  '$enable-grid-classes': true
};

// Grid system
//
// Generate semantic grid columns with these mixins.

export function makeContainer() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-grid-classes'];
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-gutter-widths'];

  if (enableGridClasses) {
    var _ret = function () {
      var columns = [];
      Object.keys(gridGutterWidths).forEach(function (breakpoint) {
        var gutter = gridGutterWidths[breakpoint];
        var column = mediaBreakpointUp(breakpoint, gutter, '\n        padding-right: ' + unitUtils.rmUnit(gutter) / 2 + unitUtils.detectUnit(gutter) + ';\n        padding-left:  ' + unitUtils.rmUnit(gutter) / 2 + unitUtils.detectUnit(gutter) + ';\n      ');
        columns.push(column);
      });
      return {
        v: '\n      position: relative;\n      margin-left: auto;\n      margin-right: auto;    \n      ' + columns.join('\n') + '\n    '
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return '';
}

// For each breakpoint, define the maximum width of the container in a media query
export function makeContainerMaxWidths() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-grid-classes'];
  var containerMaxWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$container-max-widths'];
  var gridBreakpoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-breakpoints'];

  if (enableGridClasses) {
    var _ret2 = function () {
      var maximumWidthList = [];
      Object.keys(containerMaxWidths).forEach(function (breakpoint) {
        var maximumWidth = mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        width: ' + containerMaxWidths[breakpoint] + ';\n        max-width: 100%;\n      ');
        maximumWidthList.push(maximumWidth);
      });
      return {
        v: '\n      ' + maximumWidthList.join('\n') + '\n    '
      };
    }();

    if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
  }
  return '';
}

export function makeGutters() {
  var gridGutterWidths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-gutter-widths'];

  var gutterList = [];
  Object.keys(gridGutterWidths).forEach(function (breakpoint) {
    var gutterValue = gridGutterWidths[breakpoint];
    gutterValue = '' + unitUtils.rmUnit(gutterValue) / 2 + unitUtils.detectUnit(gutterValue);
    var gutter = mediaBreakpointUp(breakpoint, gridGutterWidths, '\n      padding-right: ' + gutterValue + ';\n      padding-left:  ' + gutterValue + ';\n    ');
    gutterList.push(gutter);
  });
  return '\n    ' + gutterList.join('\n') + '\n  ';
}

export function makeRow() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-grid-classes'];
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-gutter-widths'];

  if (enableGridClasses) {
    var _ret3 = function () {
      var rowList = [];
      Object.keys(gridGutterWidths).forEach(function (breakpoint) {
        var gutter = gridGutterWidths[breakpoint];
        gutter = '' + unitUtils.rmUnit(gutter) / -2 + unitUtils.detectUnit(gutter);
        var row = '\n        margin-right: ' + gutter + ';\n        margin-left:  ' + gutter + ';\n      ';
        rowList.push(row);
      });
      return {
        v: '\n      display: flex;\n      flex-wrap: wrap;\n      ' + rowList.join('\n') + '\n    '
      };
    }();

    if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
  }
  return '';
}

export function makeColReady() {
  var gridGutterWidths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-gutter-widths'];

  var colReadyList = [];
  Object.keys(gridGutterWidths).forEach(function (breakpoint) {
    var gutter = gridGutterWidths[breakpoint];
    gutter = '' + unitUtils.rmUnit(gutter) / 2 + unitUtils.detectUnit(gutter);
    var colReady = mediaBreakpointUp(breakpoint, gridGutterWidths, '\n      padding-right: ' + gutter + ';\n      padding-left:  ' + gutter + ';\n    ');
    colReadyList.push(colReady);
  });
  return '\n    position: relative;\n    /* Prevent columns from becoming too narrow when at smaller grid tiers by */\n    /* always setting \'width: 100%;\'. This works because we use \'flex\' values */\n    /* later on to override this initial width. */\n    min-height: 1px; /* Prevent collapsing */\n    width: 100%;\n    ' + colReadyList.join('\n') + '\n  ';
}

export function makeCol(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];

  return '\n    flex: 0 0 ' + unitUtils.toPercent(size, columns) + ';\n    /* Add a \'max-width\' to ensure content within each column does not blow out */\n    /* the width of the column. Applies to IE10+ and Firefox. Chrome and Safari */\n    /* do not appear to require this. */\n    max-width: ' + unitUtils.toPercent(size, columns) + ';\n  ';
}

export function makeColOffset($size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];

  return '\n    margin-left: ' + unitUtils.toPercent($size, columns) + ';\n  ';
}

export function makeColPush(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];

  return '\n    left: ' + (size > 0 ? unitUtils.toPercent(size, columns) : 'auto') + ';\n  ';
}

export function makeColPull(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];

  return '\n    right: ' + (size > 0 ? unitUtils.toPercent(size, columns) : 'auto') + ';\n  ';
}

export function makeColModifier(type, size, columns) {
  var TYPE = {
    PUSH: 'push',
    PULL: 'pull',
    OFFSET: 'offset'
  };

  var modifier = '';
  if (type === TYPE.PUSH) {
    modifier = makeColPush(size, columns);
  } else if (type === TYPE.PULL) {
    modifier = makeColPull(size, columns);
  } else if (type === TYPE.OFFSET) {
    modifier = makeColOffset(size, columns);
  }
  return '\n    ' + modifier + '\n  ';
}

export default {
  defaultProps: defaultProps,
  makeContainer: makeContainer,
  makeContainerMaxWidths: makeContainerMaxWidths,
  makeGutters: makeGutters,
  makeRow: makeRow,
  makeColReady: makeColReady,
  makeCol: makeCol,
  makeColOffset: makeColOffset,
  makeColPush: makeColPush,
  makeColPull: makeColPull,
  makeColModifier: makeColModifier
};