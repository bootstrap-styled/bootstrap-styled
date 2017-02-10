import color from 'color';
import { hoverFocus } from './hover';

export const defaultProps = {
  '$enable-hover-mediaQuery': false,
};

export function badgeVariant(enableHoverMediaQuery = defaultProps['$enable-hover-mediaQuery'], badgeColor) {
  return `
    background-color: ${badgeColor};
    
    &[href] {
      ${hoverFocus(
        enableHoverMediaQuery,
        `background-color: ${color(badgeColor).darken(0.1).toString()};`
      )}
    }
  `;
}

export default {
  defaultProps,
  badgeVariant,
};
