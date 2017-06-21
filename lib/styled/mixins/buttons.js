'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.buttonVariant = buttonVariant;
exports.buttonOutlineVariant = buttonOutlineVariant;
exports.buttonSize = buttonSize;
exports.button = button;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _borderRadius = require('./border-radius');

var _hover = require('./hover');

var _boxShadow = require('./box-shadow');

var _transition = require('../mixins/transition');

var _conditional = require('./conditional');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = _theme2.default;

function buttonVariant() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var buttonColor = arguments[1];
  var background = arguments[2];
  var border = arguments[3];
  var btnActiveBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$btn-active-box-shadow'];
  var btnBoxShadow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$btn-box-shadow'];

  var activeBackground = (0, _color2.default)(background).darken(0.2).toString();
  var activeBorder = (0, _color2.default)(border).darken(0.12).toString();

  return '\n    color: ' + buttonColor + ';\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    ' + (0, _boxShadow.boxShadow)(enableShadows, btnBoxShadow) + '\n  \n    ' + (0, _hover.hover)('\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n      border-color: ' + activeBorder + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      ' + (0, _conditional.ifElse)('box-shadow: ' + btnBoxShadow + ', 0 0 0 2px ' + (0, _color2.default)(border).alpha(0.5).toString() + ';', 'box-shadow: 0 0 0 2px ' + (0, _color2.default)(border).alpha(0.5).toString() + ';') + '\n    }\n  \n    /* Disabled comes first so active can properly restyle */\n    &.disabled,\n    &:disabled {\n      background-color: ' + background + ';\n      border-color: ' + border + ';\n    }\n    \n    &:active,\n    &.active,\n    .show > &.dropdown-toggle {\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n      background-image: none;\n      border-color: ' + activeBorder + ';\n      ' + (0, _boxShadow.boxShadow)(enableShadows, btnActiveBoxShadow) + '\n    }\n  ';
}

function buttonOutlineVariant(buttonColor) {
  var buttonColorHover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#fff';

  return '\n    color: ' + buttonColor + ';\n    background-image: none;\n    background-color: transparent;\n    border-color: ' + buttonColor + ';\n  \n    ' + (0, _hover.hover)('\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n      border-color: ' + buttonColor + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      box-shadow: 0 0 0 2px ' + (0, _color2.default)(buttonColor).alpha(0.5).toString() + ';\n    }\n  \n    &.disabled,\n    &:disabled {\n      color: ' + buttonColor + ';\n      border-color: transparent;\n    }\n    \n    &:active,\n    &.active,\n    & .open > &.dropdown-toggle {\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n      border-color: ' + buttonColor + ';\n    }\n  ';
}

// Button sizes
function buttonSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var btnBorderRadius = arguments[4];

  return '\n    padding: ' + paddingY + ' ' + paddingX + ';\n    font-size: ' + fontSize + ';\n    ' + (0, _borderRadius.borderRadius)(enableRounded, btnBorderRadius) + '\n  ';
}

function button() {
  var $enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-hover-media-query'];
  var $enableTransitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$enable-transitions'];
  var $enableRounded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$enable-rounded'];
  var $fontWeightNormal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$font-weight-normal'];
  var $btnFontWeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$btn-font-weight'];
  var $btnLineHeight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$btn-line-height'];
  var $btnTransition = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$btn-transition'];
  var $inputBtnBorderWidth = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$input-btn-border-width'];
  var $btnPaddingX = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$btn-padding-x'];
  var $btnPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$btn-padding-y'];
  var $fontSizeBase = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$font-size-base'];
  var $btnBorderRadius = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$btn-border-radius'];
  var $btnBoxShadow = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$btn-box-shadow'];
  var $btnFocusBoxShadow = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$btn-focus-box-shadow'];
  var $btnActiveBoxShadow = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$btn-active-box-shadow'];
  var $cursorDisabled = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$cursor-disabled'];
  var $linkColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$link-color'];
  var $linkHoverColor = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$link-hover-color'];
  var $linkHoverDecoration = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$link-hover-decoration'];
  var $btnLinkDisabledColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$btn-link-disabled-color'];
  var $btnPaddingXLg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$btn-padding-x-lg'];
  var $btnPaddingYLg = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$btn-padding-y-lg'];
  var $fontSizeLg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$font-size-lg'];
  var $btnBorderRadiusLg = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$btn-border-radius-lg'];
  var $btnPaddingXSm = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$btn-padding-x-sm'];
  var $btnPaddingYSm = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps['$btn-padding-y-sm'];
  var $fontSizeSm = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps['$font-size-sm'];
  var $btnBorderRadiusSm = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps['$btn-border-radius-sm'];
  var $btnBlockSpacingY = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps['$btn-block-spacing-y'];
  var $btnPrimaryColor = arguments.length > 30 && arguments[30] !== undefined ? arguments[30] : defaultProps['$btn-primary-color'];
  var $btnPrimaryBg = arguments.length > 31 && arguments[31] !== undefined ? arguments[31] : defaultProps['$btn-primary-bg'];
  var $btnPrimaryBorder = arguments.length > 32 && arguments[32] !== undefined ? arguments[32] : defaultProps['$btn-primary-border'];
  var $btnSecondaryColor = arguments.length > 33 && arguments[33] !== undefined ? arguments[33] : defaultProps['$btn-secondary-color'];
  var $btnSecondaryBg = arguments.length > 34 && arguments[34] !== undefined ? arguments[34] : defaultProps['$btn-secondary-bg'];
  var $btnSecondaryBorder = arguments.length > 35 && arguments[35] !== undefined ? arguments[35] : defaultProps['$btn-secondary-border'];
  var $btnInfoColor = arguments.length > 36 && arguments[36] !== undefined ? arguments[36] : defaultProps['$btn-info-color'];
  var $btnInfoBg = arguments.length > 37 && arguments[37] !== undefined ? arguments[37] : defaultProps['$btn-info-bg'];
  var $btnInfoBorder = arguments.length > 38 && arguments[38] !== undefined ? arguments[38] : defaultProps['$btn-info-border'];
  var $btnSuccessColor = arguments.length > 39 && arguments[39] !== undefined ? arguments[39] : defaultProps['$btn-success-color'];
  var $btnSuccessBg = arguments.length > 40 && arguments[40] !== undefined ? arguments[40] : defaultProps['$btn-success-bg'];
  var $btnSuccessBorder = arguments.length > 41 && arguments[41] !== undefined ? arguments[41] : defaultProps['$btn-success-border'];
  var $btnWarningColor = arguments.length > 42 && arguments[42] !== undefined ? arguments[42] : defaultProps['$btn-warning-color'];
  var $btnWarningBg = arguments.length > 43 && arguments[43] !== undefined ? arguments[43] : defaultProps['$btn-warning-bg'];
  var $btnWarningBorder = arguments.length > 44 && arguments[44] !== undefined ? arguments[44] : defaultProps['$btn-warning-border'];
  var $btnDangerColor = arguments.length > 45 && arguments[45] !== undefined ? arguments[45] : defaultProps['$btn-danger-color'];
  var $btnDangerBg = arguments.length > 46 && arguments[46] !== undefined ? arguments[46] : defaultProps['$btn-danger-bg'];
  var $btnDangerBorder = arguments.length > 47 && arguments[47] !== undefined ? arguments[47] : defaultProps['$btn-danger-border'];

  return '\n  \n    font-family: inherit;\n    \n    &.btn {\n      display: inline-block;\n      font-weight: ' + $btnFontWeight + ';\n      line-height: ' + $btnLineHeight + ';\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      user-select: none;\n      border: ' + $inputBtnBorderWidth + ' solid transparent;\n      ' + buttonSize($enableRounded, $btnPaddingY, $btnPaddingX, $fontSizeBase, $btnBorderRadius) + '\n      ' + (0, _transition.transition)($enableTransitions, $btnTransition) + '\n     \n      ' + (0, _hover.hoverFocus)($enableHoverMediaQuery, 'text-decoration: none;') + '\n\n      &:focus,\n      &.focus {\n        outline: 0;\n        box-shadow: ' + $btnFocusBoxShadow + ';\n      }\n\n      &.disabled,\n      &:disabled {\n        cursor: ' + $cursorDisabled + ';\n        opacity: .65;\n        ' + (0, _boxShadow.boxShadow)($enableShadows, 'none') + '\n      }  \n\n      &:active,\n      &.active {\n        background-image: none;\n        ' + (0, _boxShadow.boxShadow)($enableShadows, $btnFocusBoxShadow, $btnActiveBoxShadow) + '\n      }\n    }\n    \n    a.btn.disabled,\n    fieldset[disabled] a.btn {\n      pointer-events: none;\n    }\n   \n   \n    /* Alternate buttons */\n   \n    &.btn-primary {\n      ' + buttonVariant($enableShadows, $btnPrimaryColor, $btnPrimaryBg, $btnPrimaryBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-secondary {\n      ' + buttonVariant($enableShadows, $btnSecondaryColor, $btnSecondaryBg, $btnSecondaryBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-info {\n      ' + buttonVariant($enableShadows, $btnInfoColor, $btnInfoBg, $btnInfoBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-success {\n      ' + buttonVariant($enableShadows, $btnSuccessColor, $btnSuccessBg, $btnSuccessBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-warning {\n      ' + buttonVariant($enableShadows, $btnWarningColor, $btnWarningBg, $btnWarningBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-danger {\n      ' + buttonVariant($enableShadows, $btnDangerColor, $btnDangerBg, $btnDangerBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n   \n    &.btn-outline-primary {\n      ' + buttonOutlineVariant($btnPrimaryBg, $btnPrimaryColor) + '\n    }    \n    &.btn-outline-secondary {\n      ' + buttonOutlineVariant($btnSecondaryBorder, $btnSecondaryColor) + '\n    }    \n    &.btn-outline-info {\n      ' + buttonOutlineVariant($btnInfoBg, $btnInfoColor) + '\n    }    \n    &.btn-outline-success {\n      ' + buttonOutlineVariant($btnSuccessBg, $btnSuccessColor) + '\n    }\n    &.btn-outline-warning {\n      ' + buttonOutlineVariant($btnWarningBg, $btnWarningColor) + '\n    }\n    &.btn-outline-danger {\n      ' + buttonOutlineVariant($btnDangerBg, $btnDangerColor) + '\n    }\n   \n    /*\n     Link buttons\n    */\n   \n    &.btn-link {\n      font-weight: ' + $fontWeightNormal + ';\n      color: ' + $linkColor + ';\n      border-radius: 0;\n   \n      &,\n      &:active,\n      &.active,\n      &:disabled {\n        background-color: transparent;\n        ' + (0, _boxShadow.boxShadow)($enableShadows, 'none') + '\n      }\n     \n      &,\n      &:focus,\n      &:active {\n        border-color: transparent;\n      }\n     \n      ' + (0, _hover.hover)('\n        border-color: transparent;\n      ') + '\n     \n      ' + (0, _hover.hoverFocus)($enableHoverMediaQuery, '\n          color: ' + $linkHoverColor + ';\n          text-decoration: ' + $linkHoverDecoration + ';\n          background-color: transparent;\n        ') + '\n     \n      &:disabled {\n        color: ' + $btnLinkDisabledColor + ';\n        ' + (0, _hover.hoverFocus)($enableHoverMediaQuery, '\n            text-decoration: none;\n          ') + '\n      }\n    }\n  \n  \n    /*\n     Button Sizes\n    */\n   \n    &.btn-lg {\n      /* line-height: ensure even-numbered height of button next to large input */\n      ' + buttonSize($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg) + '\n    }\n   \n    &.btn-sm {\n      /* line-height: ensure proper height of button next to small input */\n      ' + buttonSize($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm) + '\n    }\n   \n   \n    /*\n     Block button\n    */\n   \n    &.btn-block {\n      display: block;\n      width: 100%;\n    }\n   \n    /* Vertically space out multiple block buttons */\n    &.btn-block + .btn-block {\n      margin-top: ' + $btnBlockSpacingY + ';\n    }\n   \n    /* Specificity overrides */\n    input[type="submit"],\n    input[type="reset"],\n    input[type="button"] {\n      &.btn-block {\n        width: 100%;\n      }\n    }\n   \n    /* Reboot Scss */\n    touch-action: manipulation;\n    line-height: inherit;\n    &:focus{\n      outline: 1px dotted;\n      outline: 5px auto -webkit-focus-ring-color;\n    }\n    \n    &[type="button"],\n    &[type="reset"],\n    &[type="submit"] {\n      -webkit-appearance: button;\n    }\n    \n    &::-moz-focus-inner,\n    &[type="button"]::-moz-focus-inner,\n    &[type="reset"]::-moz-focus-inner,\n    &[type="submit"]::-moz-focus-inner {\n      padding: 0;\n      border-style: none;\n    }\n\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  buttonVariant: buttonVariant,
  buttonOutlineVariant: buttonOutlineVariant,
  buttonSize: buttonSize,
  button: button
};