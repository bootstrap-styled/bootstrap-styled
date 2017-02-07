import { bgVariant } from '../mixins/background-variant';

export var defaultProps = {
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

export function getBackgroundUtilities() {
  var $brandPrimary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$brand-primary'];
  var $brandSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-success'];
  var $brandInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$brand-info'];
  var $brandWarning = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$brand-warning'];
  var $brandDanger = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$brand-danger'];
  var $brandInverse = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$brand-inverse'];
  var $grayLightest = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$gray-lightest'];

  return '\n    ' + bgPrimary($brandPrimary) + '\n    ' + bgSuccess($brandSuccess) + '\n    ' + bgInfo($brandInfo) + '\n    ' + bgWarning($brandWarning) + '\n    ' + bgDanger($brandDanger) + '\n    ' + bgInverse($brandInverse) + '\n    ' + bgFaded($grayLightest) + '\n  ';
}

export function bgFaded() {
  var grayBackground = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$gray-lightest'];

  return '\n    .bg-faded {\n      background-color: ' + grayBackground + ';\n    }\n  ';
}

export var bgPrimary = function bgPrimary() {
  var bgColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$brand-primary'];
  return bgVariant('.bg-primary', bgColor);
};
export var bgSuccess = function bgSuccess() {
  var bgColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$brand-success'];
  return bgVariant('.bg-success', bgColor);
};
export var bgInfo = function bgInfo() {
  var bgColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$brand-info'];
  return bgVariant('.bg-info', bgColor);
};
export var bgWarning = function bgWarning() {
  var bgColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$brand-warning'];
  return bgVariant('.bg-warning', bgColor);
};
export var bgDanger = function bgDanger() {
  var bgColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$brand-danger'];
  return bgVariant('.bg-danger', bgColor);
};
export var bgInverse = function bgInverse() {
  var bgColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$brand-inverse'];
  return bgVariant('.bg-inverse', bgColor);
};

export default {
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