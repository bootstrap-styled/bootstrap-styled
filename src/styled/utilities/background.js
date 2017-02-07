import { bgVariant } from '../mixins/background-variant';

export const defaultProps = {
  '$brand-primary': '#0275d8',
  '$brand-success': '#5cb85c',
  '$brand-info': '#5bc0de',
  '$brand-warning': '#f0ad4e',
  '$brand-danger': '#d9543f',
  '$brand-inverse': '#373a3c',
  '$gray-lightest': '#f7f7f9',
};

//
// Contextual backgrounds
//

export function getBackgroundUtilities(
  $brandPrimary = defaultProps['$brand-primary'],
  $brandSuccess = defaultProps['$brand-success'],
  $brandInfo = defaultProps['$brand-info'],
  $brandWarning = defaultProps['$brand-warning'],
  $brandDanger = defaultProps['$brand-danger'],
  $brandInverse = defaultProps['$brand-inverse'],
  $grayLightest = defaultProps['$gray-lightest'],
) {
  return `
    ${bgPrimary($brandPrimary)}
    ${bgSuccess($brandSuccess)}
    ${bgInfo($brandInfo)}
    ${bgWarning($brandWarning)}
    ${bgDanger($brandDanger)}
    ${bgInverse($brandInverse)}
    ${bgFaded($grayLightest)}
  `;
}

export function bgFaded(grayBackground = defaultProps['$gray-lightest']) {
  return `
    .bg-faded {
      background-color: ${grayBackground};
    }
  `;
}

export const bgPrimary = (bgColor = defaultProps['$brand-primary']) => bgVariant('.bg-primary', bgColor);
export const bgSuccess = (bgColor = defaultProps['$brand-success']) => bgVariant('.bg-success', bgColor);
export const bgInfo = (bgColor = defaultProps['$brand-info']) => bgVariant('.bg-info', bgColor);
export const bgWarning = (bgColor = defaultProps['$brand-warning']) => bgVariant('.bg-warning', bgColor);
export const bgDanger = (bgColor = defaultProps['$brand-danger']) => bgVariant('.bg-danger', bgColor);
export const bgInverse = (bgColor = defaultProps['$brand-inverse']) => bgVariant('.bg-inverse', bgColor);

export default {
  defaultProps,
  getBackgroundUtilities,
  bgFaded,
  bgPrimary,
  bgSuccess,
  bgInfo,
  bgWarning,
  bgDanger,
  bgInverse,
};
