export const defaultProps = {
  '$enable-hover-media-query': false,
};

export function hover(content) {
// TODO: re-enable along with mq4-hover-shim
//  @if $enable-hover-media-query {
//    // See Media Queries Level 4: https://drafts.csswg.org/mediaqueries/#hover
//    // Currently shimmed by https://github.com/twbs/mq4-hover-shim
//    @media (hover: hover) {
//      &:hover { @content }
//    }
//  }
//  @else {
  return `
    &:hover { ${content} }
  `;
}

export function hoverFocus(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], content) {
  if (enableHoverMediaQuery) {
    return ` 
      &:focus { ${content} }
      ${hover(content)}
    `;
  }
  return `
    &:focus,
    &:hover {
      ${content}
    }
  `;
}

export function plainHoverFocus(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], content) {
  if (enableHoverMediaQuery) {
    return `
      &, &:focus {
        ${content}
      }
      ${hover(content)}
    `;
  }
  return ` 
    &, &:focus, &:hover {
      ${content}
    }
  `;
}

export function hoverFocusActive(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], content) {
  if (enableHoverMediaQuery) {
    return `
      &:focus,
      &:active {
        ${content}
      }
      ${hover(content)}
    `;
  }
  return `
    &:focus, &:active, &:hover {
     ${content}
    }
  `;
}


hover.focus = hoverFocus;
hover.plainFocus = plainHoverFocus;
hover.activeFocus = hoverFocusActive;

export default {
  defaultProps,
  hover,
  hoverFocus,
  plainHoverFocus,
  hoverFocusActive,
};
