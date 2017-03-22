'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.textEmphasisVariant = textEmphasisVariant;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _hover = require('./hover');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = {
  '$enable-hover-media-query': false
};

// Typography
function textEmphasisVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var parent = arguments[1];
  var textColor = arguments[2];

  return '\n    ' + parent + ' {\n      color: ' + textColor + ' !important;\n    }\n    a' + parent + ' {\n      ' + (0, _hover.hoverFocus)(enableHoverMediaQuery, 'color: ' + (0, _color2.default)(textColor).darken(0.20).rgb() + ' !important;') + '\n    }\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  textEmphasisVariant: textEmphasisVariant
};