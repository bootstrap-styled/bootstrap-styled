'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.paginationSize = paginationSize;
exports.paginationSizeBootstrap = paginationSizeBootstrap;
exports.pagination = pagination;

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _hover = require('./hover');

var _borderRadius = require('./border-radius');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = _theme2.default;

/**
 * Wrapper for paginationSizeBootstrap
 * @param paddingY
 * @param paddingX
 * @param fontSize
 * @param lineHeight
 * @param borderRadius
 * @returns {string}
 */
function paginationSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var borderRadiusPagination = arguments[4];

  return paginationSizeBootstrap(enableRounded, paddingY, paddingX, fontSize, null, borderRadiusPagination);
}

/**
 * This is the original function, however, lineHeight is never used (only with null values)
 * we wrap and keep it for history
 * @param paddingY
 * @param paddingX
 * @param fontSize
 * @param lineHeight
 * @param borderRadius
 * @returns {string}
 */
function paginationSizeBootstrap() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var lineHeight = arguments[4];
  var borderRadiusPagination = arguments[5];

  return '\n    .page-link {\n      padding: ' + paddingY + ' ' + paddingX + ';\n      font-size: ' + fontSize + ';\n    }\n  \n    .page-item {\n      &:first-child {\n        .page-link {\n          ' + (0, _borderRadius.borderLeftRadius)(enableRounded, borderRadiusPagination) + '\n        }\n      }\n      &:last-child {\n        .page-link {\n          ' + (0, _borderRadius.borderRightRadius)(enableRounded, borderRadiusPagination) + '\n        }\n      }\n    }\n  ';
}

function pagination($enableRounded, $enableHoverMediaQuery, $borderRadius, $paginationActiveColor, $paginationActiveBg, $paginationActiveBorder, $paginationDisabledColor, $cursorDisabled, $paginationDisabledBg, $paginationDisabledBorder, $paginationPaddingY, $paginationPaddingX, $paginationLineHeight, $paginationColor, $paginationBg, $paginationBorderWidth, $paginationBorderColor, $paginationHoverColor, $paginationHoverBg, $paginationHoverBorder, $paginationPaddingYLg, $paginationPaddingXLg, $fontSizeLg, $lineHeightLg, $borderRadiusLg, $paginationPaddingYSm, $paginationPaddingXSm, $fontSizeSm, $lineHeightSm, $borderRadiusSm) {
  return '\n  &.pagination {\n    display: flex;\n    padding-left: 0;\n    list-style: none; \n    ' + (0, _borderRadius.borderRadius)($enableRounded) + '\n  }\n  \n  & .page-item {\n    &:first-child {\n      .page-link {\n        margin-left: 0;\n        ' + (0, _borderRadius.borderLeftRadius)($enableRounded, $borderRadius) + '\n      }\n    }\n    &:last-child {\n      .page-link {\n      ' + (0, _borderRadius.borderRightRadius)($enableRounded, $borderRadius) + '\n      }\n    }\n  \n    &.active .page-link {\n      z-index: 2;\n      color: ' + $paginationActiveColor + ';\n      background-color: ' + $paginationActiveBg + ';\n      border-color: ' + $paginationActiveBorder + ';\n    }\n  \n    &.disabled .page-link {\n      color: ' + $paginationDisabledColor + ';\n      pointer-events: none;\n      cursor: ' + $cursorDisabled + ';\n      background-color: ' + $paginationDisabledBg + ';\n      border-color: ' + $paginationDisabledBorder + ';\n    }\n  }\n  \n  & .page-link {\n    position: relative;\n    display: block;\n    padding: ' + $paginationPaddingY + ' ' + $paginationPaddingX + ';\n    margin-left: -1px;\n    line-height: ' + $paginationLineHeight + ';\n    color: ' + $paginationColor + ';\n    background-color: ' + $paginationBg + ';\n    border: ' + $paginationBorderWidth + ' solid ' + $paginationBorderColor + ';\n    \n    ' + (0, _hover.hoverFocus)($enableHoverMediaQuery, '\n        color: ' + $paginationHoverColor + ';\n        text-decoration: none;\n        background-color: ' + $paginationHoverBg + ';\n        border-color: ' + $paginationHoverBorder + ';\n      ') + '\n  }\n  \n  /* Sizing */\n  &.pagination-lg {\n    ' + paginationSize($enableRounded, $paginationPaddingYLg, $paginationPaddingXLg, $fontSizeLg, $lineHeightLg, $borderRadiusLg) + '\n  }\n  \n  &.pagination-sm {\n    ' + paginationSize($enableRounded, $paginationPaddingYSm, $paginationPaddingXSm, $fontSizeSm, $lineHeightSm, $borderRadiusSm) + '\n  }\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  paginationSize: paginationSize,
  paginationSizeBootstrap: paginationSizeBootstrap,
  pagination: pagination
};