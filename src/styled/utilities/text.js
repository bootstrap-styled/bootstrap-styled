import { mediaBreakpointUp, breakpointInfix } from '../mixins/breakpoints';
import { textTruncate } from '../mixins/text-truncate';
import { textHide } from '../mixins/text-hide';
import { textEmphasisVariant } from '../mixins/text-emphasis';

export const defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  '$enable-hover-media-query': false,
  '$font-weight-normal': 'normal',
  '$font-weight-bold': 'bold',
  '$text-muted': '#818a91',
  '$brand-primary': '#0275d8',
  '$brand-success': '#5cb85c',
  '$brand-info': '#5bc0de',
  '$brand-warning': '#f0ad4e',
  '$brand-danger': '#d9534f',
  '$gray-dark': '#373a3c',
};

export function getTextUtilities(
  enableHoverMediaQuery = defaultProps['$enable-hover-media-query'],
  gridBreakpoints = defaultProps['$grid-breakpoints'],
  fontWeightNormal = defaultProps['$font-weight-normal'],
  fontWeightBold = defaultProps['$font-weight-bold'],
  textMuted = defaultProps['$text-muted'],
  brandPrimary = defaultProps['$brand-primary'],
  brandSuccess = defaultProps['$brand-success'],
  brandInfo = defaultProps['$brand-info'],
  brandWarning = defaultProps['$brand-warning'],
  brandDanger = defaultProps['$brand-danger'],
  grayDark = defaultProps['$gray-dark']
) {
  const responseAlignmentList = [];
  Object.keys(gridBreakpoints).forEach((bp) => {
    const infix = breakpointInfix(bp, gridBreakpoints);
    const responsiveAlignement = mediaBreakpointUp(bp, gridBreakpoints, `
      .text${infix}-left { text-align: left !important; }
      .text${infix}-right  { text-align: right !important; }
      .text${infix}-center { text-align: center !important; }
    `);
    responseAlignmentList.push(responsiveAlignement);
  });
  return `
    /* Text */

    /* Alignment */

    .text-justify        { text-align: justify !important; }
    .text-nowrap         { white-space: nowrap !important; }
    .text-truncate       { ${textTruncate()} }

    /* Responsive alignment */

    ${responseAlignmentList.join('\n')}

    /* Transformation */

    .text-lowercase      { text-transform: lowercase !important; }
    .text-uppercase      { text-transform: uppercase !important; }
    .text-capitalize     { text-transform: capitalize !important; }

    /* Weight and italics */

    .font-weight-normal  { font-weight: ${fontWeightNormal}; }
    .font-weight-bold    { font-weight: ${fontWeightBold}; }
    .font-italic         { font-style: italic; }

    /* Contextual colors */

    .text-white {
      color: #fff !important;
    }

    ${textEmphasisVariant(enableHoverMediaQuery, '.text-muted', textMuted)}

    ${textEmphasisVariant(enableHoverMediaQuery, '.text-primary', brandPrimary)}

    ${textEmphasisVariant(enableHoverMediaQuery, '.text-success', brandSuccess)}

    ${textEmphasisVariant(enableHoverMediaQuery, '.text-info', brandInfo)}

    ${textEmphasisVariant(enableHoverMediaQuery, '.text-warning', brandWarning)}

    ${textEmphasisVariant(enableHoverMediaQuery, '.text-danger', brandDanger)}

    /* Font color */

    ${textEmphasisVariant(enableHoverMediaQuery, '.text-gray-dark', grayDark)}

    /* Misc */

    .text-hide {
      ${textHide()}
    }

  `;
}

export default {
  defaultProps,
  getTextUtilities,
};
