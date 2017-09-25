'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bgFaded = exports.bgInverse = exports.bgDanger = exports.bgWarning = exports.bgInfo = exports.bgSuccess = exports.bgPrimary = exports.defaultProps = undefined;
exports.getBackgroundUtilities = getBackgroundUtilities;

var _backgroundVariant = require('../mixins/background-variant');

var defaultProps = exports.defaultProps = {
  '$enable-hover-media-query': false,
  '$brand-primary': '#0275d8',
  '$brand-success': '#5cb85c',
  '$brand-info': '#5bc0de',
  '$brand-warning': '#f0ad4e',
  '$brand-danger': '#d9543f',
  '$brand-inverse': '#373a3c',
  '$gray-lightest': '#f7f7f9'
};

//
// Contextual backgrounds
//

function getBackgroundUtilities() {
  var $enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var $brandPrimary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-primary'];
  var $brandSuccess = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$brand-success'];
  var $brandInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$brand-info'];
  var $brandWarning = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$brand-warning'];
  var $brandDanger = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$brand-danger'];
  var $brandInverse = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$brand-inverse'];
  var $grayLightest = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$gray-lightest'];

  return '\n    ' + (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-primary', $brandPrimary) + '\n    ' + (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-success', $brandSuccess) + '\n    ' + (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-info', $brandInfo) + '\n    ' + (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-warning', $brandWarning) + '\n    ' + (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-danger', $brandDanger) + '\n    ' + (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-inverse', $brandInverse) + '\n    ' + (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-faded', $grayLightest) + '\n  ';
}
var bgPrimary = exports.bgPrimary = function bgPrimary($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-primary'];
  return (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-primary', bgColor);
};
var bgSuccess = exports.bgSuccess = function bgSuccess($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-success'];
  return (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-success', bgColor);
};
var bgInfo = exports.bgInfo = function bgInfo($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-info'];
  return (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-info', bgColor);
};
var bgWarning = exports.bgWarning = function bgWarning($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-warning'];
  return (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-warning', bgColor);
};
var bgDanger = exports.bgDanger = function bgDanger($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-danger'];
  return (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-danger', bgColor);
};
var bgInverse = exports.bgInverse = function bgInverse($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-inverse'];
  return (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-inverse', bgColor);
};
var bgFaded = exports.bgFaded = function bgFaded($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$gray-lightest'];
  return (0, _backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-faded', bgColor);
};

exports.default = {
  defaultProps: defaultProps,
  getBackgroundUtilities: getBackgroundUtilities,
  bgFaded: bgFaded,
  bgPrimary: bgPrimary,
  bgSuccess: bgSuccess,
  bgInfo: bgInfo,
  bgWarning: bgWarning,
  bgDanger: bgDanger,
  bgInverse: bgInverse
};