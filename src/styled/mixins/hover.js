export const defaultProps = {
  '$enable-hover-media-query': false,
};

export function hover(content) {
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
