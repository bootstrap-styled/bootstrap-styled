import { tabFocus } from '../mixins/tab-focus';
import { hoverFocus } from '../mixins/hover';

export const defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  '$link-color': '#0275d8',
  '$link-decoration': 'none',
  '$link-hover-color': '#014C8D',
  '$link-hover-decoration': 'underline',
  '$enable-hover-media-query': false,
};

export function a(
  $linkColor = defaultProps['$link-color'],
  $linkDecoration = defaultProps['$link-decoration'],
  $linkHoverColor = defaultProps['$link-hover-color'],
  $linkHoverDecoration = defaultProps['$link-hover-decoration'],
  $enableHoverMediaQuery = defaultProps['$enable-hover-media-query'],

) {
  return `
    color: ${$linkColor};
    text-decoration: ${$linkDecoration};
  
    ${hoverFocus(
        $enableHoverMediaQuery,
      `
        color: ${$linkHoverColor};
        text-decoration: ${$linkHoverDecoration};
      `
    )};
    
    &:focus {
      ${tabFocus()}
    }

  `;
}

export default {
  defaultProps,
  a,
};
