import color from 'color';
import { hoverFocus } from './hover';

export const defaultProps = {
  '$enable-hover-media-query': false,
};

export function tagVariant(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], backgroundColor) {
  return `
    background-color: ${backgroundColor};
    
    &[href] {
      ${hoverFocus(
        enableHoverMediaQuery,
        `
          background-color: ${color(backgroundColor).darken(0.1).toString()};
        `
      )} 
    }
  `;
}

export default {
  defaultProps,
  tagVariant,
};
