// Only display content to screen readers
//
// See: http://a11yproject.com/posts/how-to-hide-content

export function srOnly() {
  return `
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  `;
}

// Use in conjunction with .sr-only to only display content when it's focused.
//
// Useful for 'Skip to main content' links; see https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1
//
// Credit: HTML5 Boilerplate

export function srOnlyFocusable() {
  return `
    &:active,
    &:focus {
      position: static;
      width: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      clip: auto;
    }
  `;
}

export default {
  srOnly,
  srOnlyFocusable,
};
