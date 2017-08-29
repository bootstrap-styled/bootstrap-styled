'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.badgeVariant = badgeVariant;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _hover = require('./hover');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = {
  '$enable-hover-mediaQuery': false
};

function badgeVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-mediaQuery'];
  var badgeColor = arguments[1];

  return '\n    background-color: ' + badgeColor + ';\n    \n    &[href] {\n      ' + (0, _hover.hoverFocus)(enableHoverMediaQuery, 'background-color: ' + (0, _color2.default)(badgeColor).darken(0.1).toString() + ';') + '\n    }\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  badgeVariant: badgeVariant
};