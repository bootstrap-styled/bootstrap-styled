import { borderRadius, borderTopRadius, borderRightRadius, borderBottomRadius, borderLeftRadius } from '../mixins/border-radius';

export const defaultProps = {
  '$border-radius': '.25rem',
  '$enable-rounded': true,
};

export function getBordersUtilities(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  return `
    ${rounded(enableRounded, radius)}
    ${roundedTop(enableRounded, radius)}
    ${roundedRight(enableRounded, radius)}
    ${roundedBottom(enableRounded, radius)}
    ${roundedLeft(enableRounded, radius)}
    ${roundedCircle(enableRounded, radius)}
    ${resetBorder()}
    ${resetBorderTop()}
    ${resetBorderRight()}
    ${resetBorderLeft()}
    ${resetBorderBottom()}
  `;
}

export function rounded(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  return `
    .rounded {
      ${borderRadius(enableRounded, radius)}
    }
  `;
}

export function roundedTop(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  return `
    .rounded-top {
      ${borderTopRadius(enableRounded, radius)}
    }
  `;
}

export function roundedRight(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  return `
    .rounded-right {
      ${borderRightRadius(enableRounded, radius)}
    }
  `;
}

export function roundedBottom(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  return `
    .rounded-bottom {
      ${borderBottomRadius(enableRounded, radius)}
    }
  `;
}

export function roundedLeft(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  return `
    .rounded-left {
      ${borderLeftRadius(enableRounded, radius)}
    }
  `;
}

export function roundedCircle() {
  return `
    .rounded-circle {
      border-radius: 50%;
    }
  `;
}

export function resetBorder() {
  return `
    .border-0 {
      border: 0 !important;
    }
  `;
}

export function resetBorderTop() {
  return `
    .border-top-0 {
      border-top: 0 !important;
    }
  `;
}

export function resetBorderRight() {
  return `
    .border-right-0 {
      border-right: 0 !important;
    }
  `;
}


export function resetBorderBottom() {
  return `
    .border-bottom-0 {
      border-bottom: 0 !important;
    }
  `;
}

export function resetBorderLeft() {
  return `
    .border-left-0 {
      border-left: 0 !important;
    }
  `;
}

export default {
  defaultProps,
  getBordersUtilities,
  rounded,
  roundedTop,
  roundedRight,
  roundedBottom,
  roundedLeft,
  roundedCircle,
};
