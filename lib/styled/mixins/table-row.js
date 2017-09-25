'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableRowVariant = tableRowVariant;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _hover = require('./hover');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Tables
function tableRowVariant(state, background) {
  var hoverBackground = (0, _color2.default)(background).darken(0.05).toString();
  return '\n  /* Exact selectors below required to override \'.table-striped\' and prevent */\n  /* inheritance to nested tables. */\n  & .table-' + state + ' {\n    &,\n    > th,\n    > td {\n      background-color: ' + background + ';\n    }\n  }\n\n  /* Hover states for \'.table-hover\' */\n  /* Note: this is not available for cells or rows within \'thead\' or \'tfoot\'. */\n  &.table-hover {\n\n    .table-' + state + ' {\n      ' + (0, _hover.hover)('\n        background-color: ' + hoverBackground + ';\n\n        > td,\n        > th {\n          background-color: ' + hoverBackground + ';\n        }\n      ') + '\n    }\n  }\n  ';
}

exports.default = {
  tableRowVariant: tableRowVariant
};