var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import { makeGutters, makeCol, makeColModifier } from './grid';
import { mediaBreakpointUp, breakpointInfix } from './breakpoints';

export var defaultProps = {
  '$grid-gutter-widths': {
    xs: '30px',
    sm: '30px',
    md: '30px',
    lg: '30px',
    xl: '30px'
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

// Framework grid generation
//
// Used only by Bootstrap to generate the correct number of grid classes given
// any value of `$grid-columns`.

function getGridColumn() {
  var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-columns'];
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-gutter-widths'];

  return '\n    position: relative;\n    width: 100%;\n    min-height: 1px; /* Prevent columns from collapsing when empty */\n    ' + makeGutters(gridGutterWidths) + '\n  ';
}

function getColumnGridColumn() {
  var gridColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-columns'];
  var gridBreakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var gridGutterWidths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-gutter-widths'];
  var breakpoint = arguments[3];

  var columnList = [];
  var infix = breakpointInfix(breakpoint, gridBreakpoints);
  for (var i = 1; i <= gridColumns; i += 1) {
    var column = '\n      &.col' + infix + '-' + i + ',\n       & .col' + infix + '-' + i + '{\n        ' + getGridColumn(gridColumns, gridGutterWidths) + '\n      }\n    ';
    columnList.push(column);
  }
  return '\n    /* Allow columns to stretch full width below their breakpoints */\n    &.col' + infix + ',\n     & .col' + infix + '{\n      ' + getGridColumn(gridColumns, gridGutterWidths) + '\n    }\n\n    ' + columnList.join('\n') + '\n  ';
}

function getMediaBreakpointUp() {
  var gridColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-columns'];
  var gridBreakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var breakpoint = arguments[2];

  var infix = breakpointInfix(breakpoint, gridBreakpoints);
  var basic = '\n    &.col' + infix + ',\n     & .col' + infix + '{\n      flex-basis: 0;\n      flex-grow: 1;\n      max-width: 100%;\n    }\n    &.col' + infix + '-auto,\n     & .col' + infix + '-auto{\n      flex: 0 0 auto;\n      width: auto;\n    }\n  ';

  var columnList = [];
  for (var i = 1; i <= gridColumns; i += 1) {
    var column = '\n      &.col' + infix + '-' + i + ',\n       & .col' + infix + '-' + i + '{\n        ' + makeCol(i, gridColumns) + '\n      }\n    ';
    columnList.push(column);
  }
  var modifierList = ['pull', 'push'];
  var columnModifierList = [];
  modifierList.forEach(function (modifier) {
    for (var _i = 0; _i <= gridColumns; _i += 1) {
      var columnModifier = '\n        &.' + modifier + infix + '-' + _i + ',\n         & .' + modifier + infix + '-' + _i + '{\n          ' + makeColModifier(modifier, _i, gridColumns) + '\n        }\n      ';
      columnModifierList.push(columnModifier);
    }
  });
  // `$columns - 1` because offsetting by the width of an entire row isn't possible
  var offsetColumnList = [];
  for (var _i2 = 0; _i2 <= gridColumns - 1; _i2 += 1) {
    if (infix !== 1 || _i2 !== 0) {
      // Avoid emitting useless .offset-xs-0
      var offsetColumn = '\n        &.offset' + infix + '-' + _i2 + ',\n         & .offset' + infix + '-' + _i2 + '{\n          ' + makeColModifier('offset', _i2, gridColumns) + '\n        }\n      ';
      offsetColumnList.push(offsetColumn);
    }
  }
  return mediaBreakpointUp(breakpoint, gridBreakpoints, '\n    ' + basic + '\n    ' + columnList.join('\n') + '\n    ' + columnModifierList.join('\n') + '\n    ' + offsetColumnList.join('\n') + '\n  ');
}

export function makeGridColumns() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-grid-classes'];
  var gridColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];
  var gridGutterWidths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-gutter-widths'];
  var gridBreakpoints = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$grid-breakpoints'];

  if (enableGridClasses) {
    var _ret = function () {
      var gridColumnList = [];
      Object.keys(gridBreakpoints).forEach(function (breakpoint) {
        var gridColumn = '\n        ' + getColumnGridColumn(gridColumns, gridBreakpoints, gridGutterWidths, breakpoint) + '\n        ' + getMediaBreakpointUp(gridColumns, gridBreakpoints, breakpoint) + '\n      ';
        gridColumnList.push(gridColumn);
      });
      return {
        v: '\n      ' + gridColumnList.join('\n') + '\n    '
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return '';
}

export default {
  defaultProps: defaultProps,
  getGridColumn: getGridColumn,
  getColumnGridColumn: getColumnGridColumn,
  getMediaBreakpointUp: getMediaBreakpointUp,
  makeGridColumns: makeGridColumns
};