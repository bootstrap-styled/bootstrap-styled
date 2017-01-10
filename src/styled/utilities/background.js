import { bgVariant } from '../mixins/background-variant';

export const defaultProps = {
  '$body-bg': '#fff',
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

export function getBackgroundUtilities() {
  return `
    ${bgFaded()}
    ${bgPrimary()}
    ${bgSuccess()}
    ${bgInfo()}
    ${bgWarning()}
    ${bgDanger()}
    ${bgInverse()}
  `;
}

export function bgFaded(greyBackground = defaultProps['$gray-lightest']) {
  return `
    &.bg-faded {
      background-color: ${greyBackground};
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
