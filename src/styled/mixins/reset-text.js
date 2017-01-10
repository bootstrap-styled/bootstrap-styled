export const defaultProps = {
  '$font-family-base': true,
  '$font-weight-normal': true,
  '$line-height-base': true,
};

export function resetText(fontFamilyBase = defaultProps['$font-family-base'], fontWeightNormal = defaultProps['$font-weight-normal'], lineHeightBase = defaultProps['$line-height-base']) {
  return `
    font-family: ${fontFamilyBase};
    /* We deliberately do NOT reset font-size or word-wrap. */
    font-style: normal;
    font-weight: ${fontWeightNormal};
    letter-spacing: normal;
    line-break: auto;
    line-height: ${lineHeightBase};
    text-align: left; /* Fallback for where 'start' is not supported */
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
  `;
}

export default {
  defaultProps,
  resetText,
};
