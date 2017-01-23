var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import { mediaBreakpointUp } from './breakpoints';
import { clearfix } from './clearfix';
import { toPercent, rmUnit, detectUnit } from '../mixins/unit';

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
  '$enable-grid-classes': true,
  '$enable-flex': false
};

// Grid system
//
// Generate semantic grid columns with these mixins.

export function makeContainer() {
  var enableFlex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-flex'];
  var enableGridClasses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-grid-classes'];
  var gridGutterWidths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-gutter-widths'];

  if (enableGridClasses) {
    var _ret = function () {
      var columns = [];
      Object.keys(gridGutterWidths).forEach(function (breakpoint) {
        var gutter = gridGutterWidths[breakpoint];
        var column = mediaBreakpointUp(breakpoint, gutter, '\n        padding-right: ' + rmUnit(gutter) / 2 + detectUnit(gutter) + ';\n        padding-left:  ' + rmUnit(gutter) / 2 + detectUnit(gutter) + ';\n      ');
        columns.push(column);
      });
      return {
        v: '\n      margin-left: auto;\n      margin-right: auto;\n    \n      ' + (!enableFlex ? clearfix() : '') + '\n    \n      ' + columns.join('\n') + '\n    '
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
    gutterValue = '' + rmUnit(gutterValue) / 2 + detectUnit(gutterValue);
    var gutter = mediaBreakpointUp(breakpoint, gridGutterWidths, '\n      padding-right: ' + gutterValue + ';\n      padding-left:  ' + gutterValue + ';\n    ');
    gutterList.push(gutter);
  });
  return '\n    ' + gutterList.join('\n') + '\n  ';
}

export function makeRow() {
  var enableFlex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-flex'];
  var enableGridClasses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-grid-classes'];
  var gridGutterWidths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-gutter-widths'];

  if (enableGridClasses) {
    var _ret3 = function () {
      var clear = void 0;
      if (enableFlex) {
        clear = '\n        display: flex;\n        flex-wrap: wrap;\n      ';
      } else {
        clear = clearfix();
      }

      var rowList = [];
      Object.keys(gridGutterWidths).forEach(function (breakpoint) {
        var gutter = gridGutterWidths[breakpoint];
        gutter = '' + rmUnit(gutter) / -2 + detectUnit(gutter);
        var row = '\n        margin-right: ' + gutter + ';\n        margin-left:  ' + gutter + ';\n      ';
        rowList.push(row);
      });
      return {
        v: '\n      ' + clear + '\n  \n      ' + rowList.join('\n') + '\n    '
      };
    }();

    if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
  }
  return '';
}

export function makeColReady() {
  var enableFlex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-flex'];
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-gutter-widths'];

  var flexWidth = enableFlex ? 'width: 100%;' : '';

  var colReadyList = [];
  Object.keys(gridGutterWidths).forEach(function (breakpoint) {
    var gutter = gridGutterWidths[breakpoint];
    gutter = '' + rmUnit(gutter) / 2 + detectUnit(gutter);
    var colReady = mediaBreakpointUp(breakpoint, gridGutterWidths, '\n      padding-right: ' + gutter + ';\n      padding-left:  ' + gutter + ';\n    ');
    colReadyList.push(colReady);
  });
  return '\n    position: relative;\n    min-height: 1px; /* Prevent collapsing */\n\n    /* Prevent columns from becoming too narrow when at smaller grid tiers by */\n    /* always setting \'width: 100%;\'. This works because we use \'flex\' values */\n    /* later on to override this initial width. */\n    ' + flexWidth + '\n\n    ' + colReadyList.join('\n') + '\n  ';
}

export function makeCol() {
  var enableFlex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-flex'];
  var size = arguments[1];
  var columns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-columns'];

  var col = void 0;
  if (enableFlex) {
    col = '\n      flex: 0 0 ' + toPercent(size, columns) + ';\n      /* Add a \'max-width\' to ensure content within each column does not blow out */\n      /* the width of the column. Applies to IE10+ and Firefox. Chrome and Safari */\n      /* do not appear to require this. */\n      max-width: ' + toPercent(size, columns) + ';\n    ';
  } else {
    col = '\n      float: left;\n      width: ' + toPercent(size, columns) + ';\n    ';
  }
  return '\n    ' + col + '\n  ';
}

export function makeColOffset($size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];

  return '\n    margin-left: ' + toPercent($size, columns) + ';\n  ';
}

export function makeColPush(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];

  return '\n    left: ' + (size > 0 ? toPercent(size, columns) : 'auto') + ';\n  ';
}

export function makeColPull(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];

  return '\n    right: ' + (size > 0 ? toPercent(size, columns) : 'auto') + ';\n  ';
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