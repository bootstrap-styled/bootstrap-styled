import color from 'color';
import { hoverFocus } from './hover';

export const defaultProps = {
  '$enable-hover-media-query': false,
};

export function bgVariant(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], selector, bgColor) {
  return `
    ${selector} {
      background-color: ${bgColor} !important;
    }
    a${selector} {
      ${hoverFocus(
        enableHoverMediaQuery,
        `background-color: ${color(bgColor).darken(0.2).rgb()} !important;`
      )}
    }
  `;
}

export default {
  bgVariant,
};
