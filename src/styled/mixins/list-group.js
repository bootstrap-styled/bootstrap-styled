import color from 'color';
import { plainHoverFocus, hoverFocus } from './hover';

export const defaultProps = {
  '$enable-hover-media-query': false,
};

export function listGroupItemVariant(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], state, background, listColor) {
  return `
    & .list-group-item-${state} {
      color: ${listColor};
      background-color: ${background};
    }
  
    & a.list-group-item-${state},
    button.list-group-item-${state} {
      color: ${listColor};
  
      .list-group-item-heading {
        color: inherit;
      }
  
      ${hoverFocus(
        enableHoverMediaQuery,
        `color: ${listColor};
        background-color: ${color(background).darken(0.05).toString()};`
      )}
  
      &.active {
        ${plainHoverFocus(
          enableHoverMediaQuery,
          `color: #fff;
          background-color: ${listColor};
          border-color: ${listColor};`
        )}
      }
    }
  `;
}

export default {
  defaultProps,
  listGroupItemVariant,
};
