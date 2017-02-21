import { hover } from './hover';
import { borderRadius, borderTopRadius, borderBottomRadius } from './border-radius';
import { cardVariant, cardOutlineVariant, cardInverse } from './cards';

export var defaultProps = {

  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$card-spacer-y': '.75rem',
  '$card-spacer-x': '1.25rem',
  '$card-bg': '#fff',
  '$card-border-width': '1px',
  '$card-border-color': 'rgba(0,0,0,.125)',
  '$card-border-radius': '.25rem',
  '$card-margin-y-halved': 'calc(.75rem / 2)',
  '$card-margin-x-halved': 'calc(1.25rem / 2)',
  '$card-cap-bg': '#f5f5f5',
  '$card-border-radius-inner': 'calc(.25rem - 1px)',
  '$brand-primary': '#0275d8',
  '$brand-success': '#5cb85c',
  '$brand-info': '#5bc0de',
  '$brand-warning': '#f0ad4e',
  '$brand-danger': '#d9534f',
  '$btn-primary-bg': '#0275d8',
  '$btn-secondary-border': '#ccc',
  '$btn-info-bg': '#5bc0de',
  '$btn-success-bg': '#5cb85c',
  '$btn-warning-bg': '#f0ad4e',
  '$btn-danger-bg': '#d9534f',
  '$card-link-hover-color': '#fff',
  '$card-img-overlay-padding': '1.25rem'
};

export function card() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-hover-media-query'];
  var $cardSpacerY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$card-spacer-y'];
  var $cardSpacerX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$card-spacer-x'];
  var $cardBg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$card-bg'];
  var $cardBorderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$card-border-width'];
  var $cardBorderColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$card-border-color'];
  var $cardBorderRadius = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$card-border-radius'];
  var $cardMarginYHalved = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$card-margin-y-halved'];
  var $cardMarginXHalved = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$card-margin-x-halved'];
  var $cardCapBg = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$card-cap-bg'];
  var $cardBorderRadiusInner = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$card-border-radius-inner'];
  var $brandPrimary = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$brand-primary'];
  var $brandSuccess = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$brand-success'];
  var $brandInfo = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$brand-info'];
  var $brandWarning = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$brand-warning'];
  var $brandDanger = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$brand-danger'];
  var $btnPrimaryBg = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$btn-primary-bg'];
  var $btnSecondaryBorder = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$btn-secondary-border'];
  var $btnInfoBg = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$btn-info-bg'];
  var $btnSuccessBg = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$btn-success-bg'];
  var $btnWarningBg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$btn-warning-bg'];
  var $btnDangerBg = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$btn-danger-bg'];
  var $cardLinkHoverColor = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$card-link-hover-color'];
  var $cardImgOverlayPadding = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$card-img-overlay-padding'];

  return '\n    \n    /*\n    Base styles\n    */\n    \n    & .card{\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + $cardBg + ';\n      border: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n      ' + borderRadius($enableRounded, $cardBorderRadius) + ';\n    }\n    \n\n    & .card-block{\n      flex: 1 1 auto;\n\n      padding: ' + $cardSpacerX + ';\n    }\n    \n    & .card-title {\n      margin-bottom: ' + $cardSpacerY + ';\n    }\n    \n    & .card-subtitle {\n      margin-top: -' + $cardMarginYHalved + ';\n      margin-bottom: 0;\n    }\n    \n    & .card-text:last-child {\n      margin-bottom: 0;\n    }\n   \n    & .card-link {\n      ' + hover('\n        text-decoration: none;;\n      ') + '\n    \n      + .card-link {\n        margin-left: ' + $cardSpacerX + ';\n      }\n    }\n    \n    & .card{\n      > .list-group:first-child {\n        .list-group-item:first-child {\n          ' + borderTopRadius($enableRounded, $cardBorderRadius) + '\n        }\n      }\n    \n      > .list-group:last-child {\n        .list-group-item:last-child {\n          ' + borderBottomRadius($enableRounded, $cardBorderRadius) + '\n        }\n      }\n    }\n    \n    \n    /*\n     Optional textual caps\n    */\n    \n    & .card-header {\n      padding: ' + $cardSpacerY + ' ' + $cardSpacerX + ';\n      margin-bottom: 0; /* Removes the default margin-bottom of <hN> */\n      background-color: ' + $cardCapBg + ';\n      border-bottom: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n    \n      &:first-child {\n        ' + borderRadius($enableRounded, $cardBorderRadiusInner, $cardBorderRadiusInner, '0', '0') + ';\n      }\n    }\n    \n    & .card-footer {\n      padding: ' + $cardSpacerY + ' ' + $cardSpacerX + ';\n      background-color: ' + $cardCapBg + ';\n      border-top: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n    \n      &:last-child {\n        ' + borderRadius($enableRounded, '0', '0', $cardBorderRadiusInner, $cardBorderRadiusInner) + ';\n      }\n    }\n    \n    \n    /*\n     Header navs\n    */\n    \n    & .card-header-tabs {\n      margin-right: -' + $cardMarginXHalved + ';\n      margin-bottom: -' + $cardSpacerY + ';\n      margin-left: -' + $cardMarginXHalved + ';\n      border-bottom: 0;\n    }\n    \n    & .card-header-pills {\n      margin-right: -' + $cardMarginXHalved + ';\n      margin-left: -' + $cardMarginXHalved + ';\n    }\n    \n    \n    /*\n     Background variations\n    */\n    \n    & .card-primary{\n      ' + cardVariant($brandPrimary, $brandPrimary) + '\n    }\n    & .card-success{\n      ' + cardVariant($brandSuccess, $brandSuccess) + '\n    }\n    & .card-info{\n      ' + cardVariant($brandInfo, $brandInfo) + '\n    }\n    & .card-warning{\n      ' + cardVariant($brandWarning, $brandWarning) + '\n    }\n    & .card-danger{\n      ' + cardVariant($brandDanger, $brandDanger) + '\n    }\n    \n    /* Remove all backgrounds */\n    & .card-outline-primary{\n      ' + cardOutlineVariant($btnPrimaryBg) + '\n    }\n    & .card-outline-secondary{\n      ' + cardOutlineVariant($btnSecondaryBorder) + '\n    }\n    & .card-outline-info{\n      ' + cardOutlineVariant($btnInfoBg) + '\n    }\n    & .card-outline-success{\n      ' + cardOutlineVariant($btnSuccessBg) + '\n    }\n    & .card-outline-warning{\n      ' + cardOutlineVariant($btnWarningBg) + '\n    }\n    & .card-outline-danger{\n      ' + cardOutlineVariant($btnDangerBg) + '\n    }\n    \n    /*\n     Inverse text within a card for use with dark backgrounds\n    */\n    \n    & .card-inverse{\n      ' + cardInverse($enableHoverMediaQuery, $cardLinkHoverColor) + '\n    }\n    \n    /*\n     Blockquote\n    */\n    \n    & .card-blockquote {\n      padding: 0;\n      margin-bottom: 0;\n      border-left: 0;\n    }\n    \n    /* Card image */\n    & .card-img {\n      /* margin: -1.325rem; */\n      ' + borderRadius($enableRounded, $cardBorderRadiusInner) + '\n    }\n    \n    & .card-img-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: ' + $cardImgOverlayPadding + ';\n    }\n    \n    \n    \n    /* Card image caps */\n    & .card-img-top {\n      ' + borderTopRadius($enableRounded, $cardBorderRadiusInner) + '\n    }\n    \n    & .card-img-bottom {\n      ' + borderBottomRadius($enableRounded, $cardBorderRadiusInner) + '\n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  card: card
};