'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.listGroupItemVariant = listGroupItemVariant;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _hover = require('./hover');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = {
  '$enable-hover-media-query': false
};

function listGroupItemVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var state = arguments[1];
  var background = arguments[2];
  var listColor = arguments[3];

  return '\n    & .list-group-item-' + state + ' {\n      color: ' + listColor + ';\n      background-color: ' + background + ';\n    }\n  \n    & a.list-group-item-' + state + ',\n    button.list-group-item-' + state + ' {\n      color: ' + listColor + ';\n  \n      .list-group-item-heading {\n        color: inherit;\n      }\n  \n      ' + (0, _hover.hoverFocus)(enableHoverMediaQuery, 'color: ' + listColor + ';\n        background-color: ' + (0, _color2.default)(background).darken(0.05).toString() + ';') + '\n  \n      &.active {\n        ' + (0, _hover.plainHoverFocus)(enableHoverMediaQuery, 'color: #fff;\n          background-color: ' + listColor + ';\n          border-color: ' + listColor + ';') + '\n      }\n    }\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  listGroupItemVariant: listGroupItemVariant
};