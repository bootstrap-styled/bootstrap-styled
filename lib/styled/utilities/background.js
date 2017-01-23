import { bgVariant } from '../mixins/background-variant';

export var defaultProps = {
  '$body-bg': '#fff',
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
  return '\n    ' + bgFaded() + '\n    ' + bgPrimary() + '\n    ' + bgSuccess() + '\n    ' + bgInfo() + '\n    ' + bgWarning() + '\n    ' + bgDanger() + '\n    ' + bgInverse() + '\n  ';
}

export function bgFaded() {
  var greyBackground = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$gray-lightest'];

  return '\n    &.bg-faded {\n      background-color: ' + greyBackground + ';\n    }\n  ';
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