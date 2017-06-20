import { bgVariant } from '../mixins/background-variant';

export const defaultProps = {
  '$enable-hover-media-query': false,
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
  $enableHoverMediaQuery = defaultProps['$enable-hover-media-query'],
  $brandPrimary = defaultProps['$brand-primary'],
  $brandSuccess = defaultProps['$brand-success'],
  $brandInfo = defaultProps['$brand-info'],
  $brandWarning = defaultProps['$brand-warning'],
  $brandDanger = defaultProps['$brand-danger'],
  $brandInverse = defaultProps['$brand-inverse'],
  $grayLightest = defaultProps['$gray-lightest'],
) {
  return `
    ${bgVariant($enableHoverMediaQuery, '.bg-primary', $brandPrimary)}
    ${bgVariant($enableHoverMediaQuery, '.bg-success', $brandSuccess)}
    ${bgVariant($enableHoverMediaQuery, '.bg-info', $brandInfo)}
    ${bgVariant($enableHoverMediaQuery, '.bg-warning', $brandWarning)}
    ${bgVariant($enableHoverMediaQuery, '.bg-danger', $brandDanger)}
    ${bgVariant($enableHoverMediaQuery, '.bg-inverse', $brandInverse)}
    ${bgVariant($enableHoverMediaQuery, '.bg-faded', $grayLightest)}
  `;
}
export const bgPrimary = ($enableHoverMediaQuery, bgColor = defaultProps['$brand-primary']) => bgVariant($enableHoverMediaQuery, '.bg-primary', bgColor);
export const bgSuccess = ($enableHoverMediaQuery, bgColor = defaultProps['$brand-success']) => bgVariant($enableHoverMediaQuery, '.bg-success', bgColor);
export const bgInfo = ($enableHoverMediaQuery, bgColor = defaultProps['$brand-info']) => bgVariant($enableHoverMediaQuery, '.bg-info', bgColor);
export const bgWarning = ($enableHoverMediaQuery, bgColor = defaultProps['$brand-warning']) => bgVariant($enableHoverMediaQuery, '.bg-warning', bgColor);
export const bgDanger = ($enableHoverMediaQuery, bgColor = defaultProps['$brand-danger']) => bgVariant($enableHoverMediaQuery, '.bg-danger', bgColor);
export const bgInverse = ($enableHoverMediaQuery, bgColor = defaultProps['$brand-inverse']) => bgVariant($enableHoverMediaQuery, '.bg-inverse', bgColor);
export const bgFaded = ($enableHoverMediaQuery, bgColor = defaultProps['$gray-lightest']) => bgVariant($enableHoverMediaQuery, '.bg-faded', bgColor);

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
