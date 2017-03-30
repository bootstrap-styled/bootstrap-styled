export const defaultProps = {
  '$border-radius': '.25rem',
  '$enable-rounded': true,
};

export function borderRadius(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  if (enableRounded) {
    return `
      border-radius: ${radius};
    `;
  }
  return '';
}

export function borderTopRadius(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  if (enableRounded) {
    return `
      border-top-right-radius: ${radius};
      border-top-left-radius: ${radius};
    `;
  }
  return '';
}

export function borderRightRadius(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  if (enableRounded) {
    return `
      border-bottom-right-radius: ${radius};
      border-top-right-radius: ${radius};
    `;
  }
  return '';
}

export function borderBottomRadius(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  if (enableRounded) {
    return `
      border-bottom-right-radius: ${radius};
      border-bottom-left-radius: ${radius};
    `;
  }
  return '';
}

export function borderLeftRadius(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  if (enableRounded) {
    return `
      border-bottom-left-radius: ${radius};
      border-top-left-radius: ${radius};
    `;
  }
  return '';
}

export default {
  defaultProps,
  all: borderRadius,
  top: borderTopRadius,
  right: borderRightRadius,
  bottom: borderBottomRadius,
  left: borderLeftRadius,
};
