'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.bgVariant = bgVariant;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _hover = require('./hover');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = {
  '$enable-hover-media-query': false
};

function bgVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var selector = arguments[1];
  var bgColor = arguments[2];

  return '\n    ' + selector + ' {\n      background-color: ' + bgColor + ' !important;\n    }\n    a' + selector + ' {\n      ' + (0, _hover.hoverFocus)(enableHoverMediaQuery, 'background-color: ' + (0, _color2.default)(bgColor).darken(0.2).rgb() + ' !important;') + '\n    }\n  ';
}

exports.default = {
  bgVariant: bgVariant
};