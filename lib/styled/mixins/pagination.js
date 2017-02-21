import { paginationSize } from '../../styled/mixins/paginations';
import { borderRadius, borderLeftRadius, borderRightRadius } from './border-radius';
import { hoverFocus } from './hover';

export var defaultProps = {
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$border-radius': '.25rem',
  '$pagination-active-color': '#fff',
  '$pagination-active-bg': '#0275d8',
  '$pagination-active-border': '#0275d8',
  '$pagination-disabled-color': '#636c72',
  '$cursor-disabled': 'not-allowed',
  '$pagination-disabled-bg': '#fff',
  '$pagination-disabled-border': '#ddd',
  '$pagination-padding-y': '.75rem',
  '$pagination-padding-x': '.5rem',
  '$pagination-line-height': '1.25',
  '$pagination-color': '#0275d8',
  '$pagination-bg': '#fff',
  '$pagination-border-width': '1px',
  '$pagination-border-color': '#ddd',
  '$pagination-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
  '$pagination-hover-bg': '#eceeef',
  '$pagination-hover-border': '#ddd',
  '$pagination-padding-y-lg': '.75rem',
  '$pagination-padding-x-lg': '1.5rem',
  '$font-size-lg': '1.25rem',
  '$line-height-lg': '1.3',
  '$border-radius-lg': '.3rem',
  '$pagination-padding-y-sm': '.25rem',
  '$pagination-padding-x-sm': '.5rem',
  '$font-size-sm': '.875rem',
  '$line-height-sm': '1.5',
  '$border-radius-sm': '.2rem'
};

export function pagination() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-hover-media-query'];
  var $borderRadius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$border-radius'];
  var $paginationActiveColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$pagination-active-color'];
  var $paginationActiveBg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$pagination-active-bg'];
  var $paginationActiveBorder = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$pagination-active-border'];
  var $paginationDisabledColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$pagination-disabled-color'];
  var $cursorDisabled = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$cursor-disabled'];
  var $paginationDisabledBg = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$pagination-disabled-bg'];
  var $paginationDisabledBorder = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$pagination-disabled-border'];
  var $paginationPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$pagination-padding-y'];
  var $paginationPaddingX = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$pagination-padding-x'];
  var $paginationLineHeight = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$pagination-line-height'];
  var $paginationColor = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$pagination-color'];
  var $paginationBg = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$pagination-bg'];
  var $paginationBorderWidth = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$pagination-border-width'];
  var $paginationBorderColor = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$pagination-border-color'];
  var $paginationHoverColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$pagination-hover-color'];
  var $paginationHoverBg = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$pagination-hover-bg'];
  var $paginationHoverBorder = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$pagination-hover-border'];
  var $paginationPaddingYLg = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$pagination-padding-y-lg'];
  var $paginationPaddingXLg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$pagination-padding-x-lg'];
  var $fontSizeLg = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$font-size-lg'];
  var $lineHeightLg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$line-height-lg'];
  var $borderRadiusLg = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$border-radius-lg'];
  var $paginationPaddingYSm = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$pagination-padding-y-sm'];
  var $paginationPaddingXSm = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps['$pagination-padding-x-sm'];
  var $fontSizeSm = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps['$font-size-sm'];
  var $lineHeightSm = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps['$line-height-sm'];
  var $borderRadiusSm = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps['$border-radius-sm'];

  return '\n  &.pagination {\n    display: flex;\n    padding-left: 0;\n    list-style: none; \n    ' + borderRadius($enableRounded) + '\n  }\n  \n  & .page-item {\n    &:first-child {\n      .page-link {\n        margin-left: 0;\n        ' + borderLeftRadius($enableRounded, $borderRadius) + '\n      }\n    }\n    &:last-child {\n      .page-link {\n      ' + borderRightRadius($enableRounded, $borderRadius) + '\n      }\n    }\n  \n    &.active .page-link {\n      z-index: 2;\n      color: ' + $paginationActiveColor + ';\n      background-color: ' + $paginationActiveBg + ';\n      border-color: ' + $paginationActiveBorder + ';\n    }\n  \n    &.disabled .page-link {\n      color: ' + $paginationDisabledColor + ';\n      pointer-events: none;\n      cursor: ' + $cursorDisabled + ';\n      background-color: ' + $paginationDisabledBg + ';\n      border-color: ' + $paginationDisabledBorder + ';\n    }\n  }\n  \n  & .page-link {\n    position: relative;\n    display: block;\n    padding: ' + $paginationPaddingY + ' ' + $paginationPaddingX + ';\n    margin-left: -1px;\n    line-height: ' + $paginationLineHeight + ';\n    color: ' + $paginationColor + ';\n    background-color: ' + $paginationBg + ';\n    border: ' + $paginationBorderWidth + ' solid ' + $paginationBorderColor + ';\n    \n    ' + hoverFocus($enableHoverMediaQuery, '\n        color: ' + $paginationHoverColor + ';\n        text-decoration: none;\n        background-color: ' + $paginationHoverBg + ';\n        border-color: ' + $paginationHoverBorder + ';\n      ') + '\n  }\n  \n  /* Sizing */\n  &.pagination-lg {\n    ' + paginationSize($enableRounded, $paginationPaddingYLg, $paginationPaddingXLg, $fontSizeLg, $lineHeightLg, $borderRadiusLg) + '\n  }\n  \n  &.pagination-sm {\n    ' + paginationSize($enableRounded, $paginationPaddingYSm, $paginationPaddingXSm, $fontSizeSm, $lineHeightSm, $borderRadiusSm) + '\n  }\n  ';
}

export default {
  pagination: pagination
};