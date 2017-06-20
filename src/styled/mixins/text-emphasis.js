import color from 'color';
import { hoverFocus } from './hover';

export const defaultProps = {
  '$enable-hover-media-query': false,
};

// Typography
export function textEmphasisVariant(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], parent, textColor) {
  return `
    ${parent} {
      color: ${textColor} !important;
    }
    a${parent} {
      ${hoverFocus(
        enableHoverMediaQuery,
        `color: ${color(textColor).darken(0.20).rgb()} !important;`
       )}
    }
  `;
}

export default {
  defaultProps,
  textEmphasisVariant,
};
