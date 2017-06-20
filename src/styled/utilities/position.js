export const defaultProps = {
  '$zindex-fixed': '1030',
  '$zindex-sticky': '1030',
};

export function getPositionUtilities(
  zindexFixed = defaultProps['$zindex-fixed'],
  zindexSticky = defaultProps['$zindex-sticky'],
) {
  return `
    ${fixedTop(zindexFixed)}
    ${fixedBottom(zindexFixed)}
    ${stickTop(zindexSticky)}
  `;
}

export function fixedTop(zindexFixed = defaultProps['$zindex-fixed']) {
  return `
  .fixed-top {
    position: fixed !important;
    top: 0;
    right: 0;
    left: 0;
    z-index: ${zindexFixed};
  }
  `;
}

export function fixedBottom(zindexFixed = defaultProps['$zindex-fixed']) {
  return `
    .fixed-bottom {
      position: fixed !important;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: ${zindexFixed};
    }
  `;
}

export function stickTop(zindexSticky = defaultProps['$zindex-sticky']) {
  return `
    .sticky-top {
      position: sticky !important;
      top: 0;
      z-index: ${zindexSticky};
    }
  `;
}

export default {
  defaultProps,
  getPositionUtilities,
  fixedTop,
  fixedBottom,
  stickTop,
};
