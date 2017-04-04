'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.customForms = customForms;

var _mathUtils = require('math-utils');

var _boxShadow = require('../mixins/box-shadow');

var _borderRadius = require('../mixins/border-radius');

var defaultProps = exports.defaultProps = {
  '$enable-rounded': true,
  '$enable-shadows': false,
  '$custom-control-checked-indicator-box-shadow': 'none',
  '$custom-control-active-indicator-box-shadow': 'none',
  '$custom-control-indicator-box-shadow': 'inset 0 .25rem .25rem rgba(0, 0, 0, 0.1)',
  '$custom-checkbox-indeterminate-box-shadow': 'none',
  '$custom-select-focus-box-shadow': 'inset 0 1px 2px rgba(0, 0, 0, 0.75), 0 0 5px rgba(hsl(207.79999999999995, 98.2%, 53.4%), .5)',
  '$custom-file-focus-box-shadow': '0 0 0 .075rem #fff, 0 0 0 .2rem #0275d8',
  '$custom-file-box-shadow': 'inset 0 .2rem .4rem rgba(0, 0, 0, 0.05)',
  '$custom-select-border-radius': '.25rem',
  '$custom-file-border-radius': '.25rem',
  '$input-bg': '#fff',
  '$custom-select-line-height': '1.25px',
  '$line-height-base': '1.5',
  '$custom-control-gutter': '1.5rem',
  '$custom-control-spacer-x': '1rem',
  '$custom-control-checked-indicator-color': '#fff',
  '$custom-control-checked-indicator-bg': '#0275d8',
  '$custom-control-focus-indicator-box-shadow': '0 0 0 1px #fff, 0 0 0 3px #0275d8',
  '$custom-control-active-indicator-color': '#fff',
  '$custom-control-active-indicator-bg': 'hsl(207.79999999999995, 98.2%, 57.7%)',
  '$custom-control-disabled-cursor': 'not-allowed',
  '$custom-control-disabled-indicator-bg': '#eceeef',
  '$custom-control-disabled-description-color': '#636c72',
  '$custom-control-indicator-size': '1rem',
  '$custom-control-indicator-bg': '#ddd',
  '$custom-control-indicator-bg-size': '50% 50%',
  '$custom-checkbox-checked-icon': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3E%3Cpath fill=\'#fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3E%3C/svg%3E")',
  '$custom-checkbox-indeterminate-bg': '#0275d8',
  '$custom-checkbox-indeterminate-icon': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\'%3E%3Cpath stroke=\'#fff\' d=\'M0 2h4\'/%3E%3C/svg%3E")',
  '$custom-radio-radius': '50%',
  '$custom-radio-checked-icon': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3E%3Ccircle r=\'3\' fill=\'#fff\'/%3E%3C/svg%3E")',
  '$custom-control-spacer-y': '.25rem',
  '$border-width': '1px',
  '$input-height': '2.5rem',
  '$custom-select-padding-y': '.375rem',
  '$custom-select-padding-x': '.75rem ',
  '$custom-select-indicator-padding': '1rem',
  '$custom-select-color': '#464a4c',
  '$custom-select-bg': '#fff',
  '$custom-select-indicator': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'#333\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E")',
  '$custom-select-bg-size': '8px 10px',
  '$custom-select-border-width': '1px',
  '$custom-select-border-color': 'rgba(0, 0, 0, 0.15)',
  '$custom-select-focus-border-color': 'hsl(207.79999999999995, 98.2%, 53.4%)',
  '$input-color': '#464a4c',
  '$custom-select-disabled-color': '#636c72',
  '$cursor-disabled': 'not-allowed',
  '$custom-select-disabled-bg': '#eceeef',
  '$custom-select-sm-font-size': '75%',
  '$custom-file-width': '14rem',
  '$custom-file-height': '2.5rem',
  '$custom-file-padding-x': '.5rem',
  '$custom-file-padding-y': '1rem',
  '$custom-file-line-height': '1.5',
  '$custom-file-color': '#464a4c',
  '$custom-file-bg': '#fff',
  '$custom-file-border-width': '1px',
  '$custom-file-border-color': 'rgba(0, 0, 0, 0.15)',
  '$custom-file-button-color': '#464a4c',
  '$custom-file-button-bg': '#eceeef',
  '$custom-checkbox-radius': '.25rem',
  '$custom-file-text': {
    'placeholder': { // eslint-disable-line quote-props
      'en': 'Choose file...' },
    'button-label': {
      'en': 'Browse' }
  }
};

function customForms() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var $enableShadows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-shadows'];
  var $customControlCheckedIndicatorBoxShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$custom-control-checked-indicator-box-shadow'];
  var $customControlActiveIndicatorBoxShadow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$custom-control-active-indicator-box-shadow'];
  var $customControlIndicatorBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$custom-control-indicator-box-shadow'];
  var $customCheckboxIndeterminateBoxShadow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$custom-checkbox-indeterminate-box-shadow'];
  var $customSelectFocusBoxShadow = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$custom-select-focus-box-shadow'];
  var $customFileFocusBoxShadow = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$custom-file-focus-box-shadow'];
  var $customFileBoxShadow = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$custom-file-box-shadow'];
  var $customSelectBorderRadius = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$custom-select-border-radius'];
  var $customFileBorderRadius = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$custom-file-border-radius'];
  var $customCheckboxRadius = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$custom-checkbox-radius'];
  var $inputBg = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$input-bg'];
  var $customSelectLineHeight = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$custom-select-line-height'];
  var $lineHeightBase = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$line-height-base'];
  var $customControlGutter = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$custom-control-gutter'];
  var $customControlSpacerX = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$custom-control-spacer-x'];
  var $customControlCheckedIndicatorColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$custom-control-checked-indicator-color'];
  var $customControlCheckedIndicatorBg = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$custom-control-checked-indicator-bg'];
  var $customControlFocusIndicatorBoxShadow = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$custom-control-focus-indicator-box-shadow'];
  var $customControlActiveIndicatorColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$custom-control-active-indicator-color'];
  var $customControlActiveIndicatorBg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$custom-control-active-indicator-bg'];
  var $customControlDisabledCursor = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$custom-control-disabled-cursor'];
  var $customControlDisabledIndicatorBg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$custom-control-disabled-indicator-bg'];
  var $customControlDisabledDescriptionColor = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$custom-control-disabled-description-color'];
  var $customControlIndicatorSize = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$custom-control-indicator-size'];
  var $customControlIndicatorBg = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps['$custom-control-indicator-bg'];
  var $customControlIndicatorBgSize = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps['$custom-control-indicator-bg-size'];
  var $customCheckboxCheckedIcon = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps['$custom-checkbox-checked-icon'];
  var $customCheckboxIndeterminateBg = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps['$custom-checkbox-indeterminate-bg'];
  var $customCheckboxIndeterminateIcon = arguments.length > 30 && arguments[30] !== undefined ? arguments[30] : defaultProps['$custom-checkbox-indeterminate-icon'];
  var $customRadioRadius = arguments.length > 31 && arguments[31] !== undefined ? arguments[31] : defaultProps['$custom-radio-radius'];
  var $customRadioCheckedIcon = arguments.length > 32 && arguments[32] !== undefined ? arguments[32] : defaultProps['$custom-radio-checked-icon'];
  var $customControlSpacerY = arguments.length > 33 && arguments[33] !== undefined ? arguments[33] : defaultProps['$custom-control-spacer-y'];
  var $borderWidth = arguments.length > 34 && arguments[34] !== undefined ? arguments[34] : defaultProps['$border-width'];
  var $inputHeight = arguments.length > 35 && arguments[35] !== undefined ? arguments[35] : defaultProps['$input-height'];
  var $customSelectPaddingY = arguments.length > 36 && arguments[36] !== undefined ? arguments[36] : defaultProps['$custom-select-padding-y'];
  var $customSelectPaddingX = arguments.length > 37 && arguments[37] !== undefined ? arguments[37] : defaultProps['$custom-select-padding-x'];
  var $customSelectIndicatorPadding = arguments.length > 38 && arguments[38] !== undefined ? arguments[38] : defaultProps['$custom-select-indicator-padding'];
  var $customSelectColor = arguments.length > 39 && arguments[39] !== undefined ? arguments[39] : defaultProps['$custom-select-color'];
  var $customSelectBg = arguments.length > 40 && arguments[40] !== undefined ? arguments[40] : defaultProps['$custom-select-bg'];
  var $customSelectIndicator = arguments.length > 41 && arguments[41] !== undefined ? arguments[41] : defaultProps['$custom-select-indicator'];
  var $customSelectBgSize = arguments.length > 42 && arguments[42] !== undefined ? arguments[42] : defaultProps['$custom-select-bg-size'];
  var $customSelectBorderWidth = arguments.length > 43 && arguments[43] !== undefined ? arguments[43] : defaultProps['$custom-select-border-width'];
  var $customSelectBorderColor = arguments.length > 44 && arguments[44] !== undefined ? arguments[44] : defaultProps['$custom-select-border-color'];
  var $customSelectFocusBorderColor = arguments.length > 45 && arguments[45] !== undefined ? arguments[45] : defaultProps['$custom-select-focus-border-color'];
  var $inputColor = arguments.length > 46 && arguments[46] !== undefined ? arguments[46] : defaultProps['$input-color'];
  var $customSelectDisabledColor = arguments.length > 47 && arguments[47] !== undefined ? arguments[47] : defaultProps['$custom-select-disabled-color'];
  var $cursorDisabled = arguments.length > 48 && arguments[48] !== undefined ? arguments[48] : defaultProps['$cursor-disabled'];
  var $customSelectDisabledBg = arguments.length > 49 && arguments[49] !== undefined ? arguments[49] : defaultProps['$custom-select-disabled-bg'];
  var $customSelectSmFontSize = arguments.length > 50 && arguments[50] !== undefined ? arguments[50] : defaultProps['$custom-select-sm-font-size'];
  var $customFileWidth = arguments.length > 51 && arguments[51] !== undefined ? arguments[51] : defaultProps['$custom-file-width'];
  var $customFileHeight = arguments.length > 52 && arguments[52] !== undefined ? arguments[52] : defaultProps['$custom-file-height'];
  var $customFilePaddingX = arguments.length > 53 && arguments[53] !== undefined ? arguments[53] : defaultProps['$custom-file-padding-x'];
  var $customFilePaddingY = arguments.length > 54 && arguments[54] !== undefined ? arguments[54] : defaultProps['$custom-file-padding-y'];
  var $customFileLineHeight = arguments.length > 55 && arguments[55] !== undefined ? arguments[55] : defaultProps['$custom-file-line-height'];
  var $customFileColor = arguments.length > 56 && arguments[56] !== undefined ? arguments[56] : defaultProps['$custom-file-color'];
  var $customFileBg = arguments.length > 57 && arguments[57] !== undefined ? arguments[57] : defaultProps['$custom-file-bg'];
  var $customFileBorderWidth = arguments.length > 58 && arguments[58] !== undefined ? arguments[58] : defaultProps['$custom-file-border-width'];
  var $customFileBorderColor = arguments.length > 59 && arguments[59] !== undefined ? arguments[59] : defaultProps['$custom-file-border-color'];
  var $customFileButtonColor = arguments.length > 60 && arguments[60] !== undefined ? arguments[60] : defaultProps['$custom-file-button-color'];
  var $customFileButtonBg = arguments.length > 61 && arguments[61] !== undefined ? arguments[61] : defaultProps['$custom-file-button-bg'];
  var $customFileText = arguments.length > 62 && arguments[62] !== undefined ? arguments[62] : defaultProps['$custom-file-text'];

  var customFileControlBeforeList = [];
  Object.keys($customFileText.placeholder).forEach(function ($lang) {
    customFileControlBeforeList.push('\n      &:lang(' + $lang + ')::after {\n        content: "' + $customFileText.placeholder[$lang] + '";\n      }   \n    ');
  });

  var customFileControlAfterList = [];
  Object.keys($customFileText['button-label']).forEach(function ($lang) {
    customFileControlAfterList.push('\n      &:lang(' + $lang + ')::before {\n        content: "' + $customFileText['button-label'][$lang] + '";\n      }\n    ');
  });
  var selectBorderWidth = _mathUtils.unitUtils.math.multiply($borderWidth, 2);
  var customSelectPaddingRight = _mathUtils.unitUtils.math.addition($customSelectPaddingY, $customSelectIndicatorPadding);
  var lineHeightBaseMinusCustomControlIndicatorSize = _mathUtils.unitUtils.math.subtract($lineHeightBase, $customControlIndicatorSize);

  return '\n    /* Embedded icons from Open Iconic. */\n    /* Released under MIT and copyright 2014 Waybury. */\n    /* https://useiconic.com/open */\n    \n    \n    /* Checkboxes and radios */\n    /* Base class takes care of all the key behavioral aspects. */\n    \n    & .custom-control {\n      position: relative;\n      display: inline-flex;\n      min-height: calc(1rem * ' + $lineHeightBase + ');\n      padding-left: ' + $customControlGutter + ';\n      margin-right: ' + $customControlSpacerX + ';\n    }\n    \n    & .custom-control-input {\n      position: absolute;\n      z-index: -1; /* Put the input behind the label so it does not overlay text */\n      opacity: 0;\n    \n      &:checked ~ .custom-control-indicator {\n        color: ' + $customControlCheckedIndicatorColor + ';\n        background-color: ' + $customControlCheckedIndicatorBg + ';\n        ' + (0, _boxShadow.boxShadow)($enableShadows, $customControlCheckedIndicatorBoxShadow) + '\n      }\n    \n      &:focus ~ .custom-control-indicator {\n        /* the mixin is not used here to make sure there is feedback */\n        box-shadow: ' + $customControlFocusIndicatorBoxShadow + ';\n      }\n    \n      &:active ~ .custom-control-indicator {\n        color: ' + $customControlActiveIndicatorColor + ';\n        background-color: ' + $customControlActiveIndicatorBg + ';\n        ' + (0, _boxShadow.boxShadow)($enableShadows, $customControlActiveIndicatorBoxShadow) + '\n      }\n    \n      &:disabled {\n        ~ .custom-control-indicator {\n          cursor: ' + $customControlDisabledCursor + ';\n          background-color: ' + $customControlDisabledIndicatorBg + ';\n        }\n    \n        ~ .custom-control-description {\n          color: ' + $customControlDisabledDescriptionColor + ';\n          cursor: ' + $customControlDisabledCursor + ';\n        }\n      }\n    }\n    \n    /* Custom indicator */\n    /* Generates a shadow element to create our makeshift checkbox/radio background. */\n    \n    & .custom-control-indicator {\n      position: absolute;\n      top: calc(' + lineHeightBaseMinusCustomControlIndicatorSize + ' / 2);\n      left: 0;\n      display: block;\n      width: ' + $customControlIndicatorSize + ';\n      height: ' + $customControlIndicatorSize + ';\n      pointer-events: none;\n      user-select: none;\n      background-color: ' + $customControlIndicatorBg + ';\n      background-repeat: no-repeat;\n      background-position: center center;\n      background-size: ' + $customControlIndicatorBgSize + ';\n      ' + (0, _boxShadow.boxShadow)($enableShadows, $customControlIndicatorBoxShadow) + '\n    }\n    \n    /* Checkboxes */\n    /* Tweak just a few things for checkboxes.  */\n    \n    & .custom-checkbox {\n      & .custom-control-indicator {\n        ' + (0, _borderRadius.borderRadius)($enableRounded, $customCheckboxRadius) + '\n      }\n    \n      & .custom-control-input:checked ~ .custom-control-indicator {\n        background-image: ' + $customCheckboxCheckedIcon + ';\n      }\n    \n      & .custom-control-input.indeterminate ~ .custom-control-indicator {\n        background-color: ' + $customCheckboxIndeterminateBg + ';\n        background-image: ' + $customCheckboxIndeterminateIcon + ';\n        ' + (0, _boxShadow.boxShadow)($enableShadows, $customCheckboxIndeterminateBoxShadow) + '\n      }\n    }\n    \n    /* Radios */\n    /* Tweak just a few things for radios. */\n    \n    & .custom-radio {\n      & .custom-control-indicator {\n        border-radius: ' + $customRadioRadius + ';\n      }\n    \n      & .custom-control-input:checked ~ .custom-control-indicator {\n        background-image: ' + $customRadioCheckedIcon + ';\n      }\n    }\n    \n    \n    /* Layout options */\n    /* By default radios and checkboxes are inline-block with no additional spacing */\n    /* set. Use these optional classes to tweak the layout. */\n    \n    & .custom-controls-stacked {\n      display: flex;\n      flex-direction: column;\n    \n      & .custom-control {\n        margin-bottom: ' + $customControlSpacerY + ';\n    \n        + & .custom-control {\n          margin-left: 0;\n        }\n      }\n    }\n    \n    \n    /* Select */\n    /* Replaces the browser default select with a custom one, mostly pulled from */\n    /* http://primercss.io. */\n    \n    & .custom-select {\n      display: inline-block;\n      max-width: 100%;\n      height: calc(' + $inputHeight + ' + ' + selectBorderWidth + ');\n      padding: ' + $customSelectPaddingY + ' ' + customSelectPaddingRight + ' ' + $customSelectPaddingY + ' ' + $customSelectPaddingX + ';\n      line-height: ' + $customSelectLineHeight + ';\n      color: ' + $customSelectColor + ';\n      vertical-align: middle;\n      background: ' + $customSelectBg + ' ' + $customSelectIndicator + ' no-repeat right ' + $customSelectPaddingX + ' center;\n      background-size: ' + $customSelectBgSize + ';\n      border: ' + $customSelectBorderWidth + ' solid ' + $customSelectBorderColor + ';\n      ' + (0, _borderRadius.borderRadius)($enableRounded, $customSelectBorderRadius) + '\n      /* Use vendor prefixes as appearance is not part of the CSS spec.  */\n      -moz-appearance: none;\n      -webkit-appearance: none;\n    \n      &:focus {\n        border-color: ' + $customSelectFocusBorderColor + ';\n        outline: none;\n        ' + (0, _boxShadow.boxShadow)($enableShadows, $customSelectFocusBoxShadow) + '\n    \n        ::-ms-value {\n          /* For visual consistency with other platforms/browsers, */\n          /* supress the default white text on blue background highlight given to */\n          /* the selected option text when the (still closed) <select> receives focus */\n          /* in IE and (under certain conditions) Edge. */\n          /* See https://github.com/twbs/bootstrap/issues/19398. */\n          color: ' + $inputColor + ';\n          background-color: ' + $inputBg + ';\n        }\n      }\n    \n      &:disabled {\n        color: ' + $customSelectDisabledColor + ';\n        cursor: ' + $cursorDisabled + ';\n        background-color: ' + $customSelectDisabledBg + ';\n      }\n    \n      /* Hides the default caret in IE11 */\n      ::-ms-expand {\n        opacity: 0;\n      }\n    }\n    \n    & .custom-select-sm {\n      padding-top: ' + $customSelectPaddingY + ';\n      padding-bottom: ' + $customSelectPaddingY + ';\n      font-size: ' + $customSelectSmFontSize + ';\n    \n      /* &:not([multiple]) { */\n      /*   height: 26px; */\n      /*   min-height: 26px; */\n      /* } */\n    }\n    \n    \n    /* File */\n    /* Custom file input. */\n    \n    & .custom-file {\n      position: relative;\n      display: inline-block;\n      max-width: 100%;\n      height: ' + $customFileHeight + ';\n      margin-bottom: 0;\n    }\n    \n    & .custom-file-input {\n      min-width: ' + $customFileWidth + ';\n      max-width: 100%;\n      height: ' + $customFileHeight + ';\n      margin: 0;\n      opacity: 0;\n    \n      &:focus ~ .custom-file-control {\n        ' + (0, _boxShadow.boxShadow)($enableShadows, $customFileFocusBoxShadow) + '\n      }\n    }\n    \n    & .custom-file-control {\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      z-index: 5;\n      height: ' + $customFileHeight + ';\n      padding: ' + $customFilePaddingX + ' ' + $customFilePaddingY + ';\n      line-height: ' + $customFileLineHeight + ';\n      color: ' + $customFileColor + ';\n      pointer-events: none;\n      user-select: none;\n      background-color: ' + $customFileBg + ';\n      border: ' + $customFileBorderWidth + ' solid ' + $customFileBorderColor + ';\n      ' + (0, _borderRadius.borderRadius)($enableRounded, $customFileBorderRadius) + '\n      ' + (0, _boxShadow.boxShadow)($enableShadows, $customFileBoxShadow) + '\n      \n      ' + customFileControlBeforeList.join('\n') + '\n    \n      &::before {\n        position: absolute;\n        top: ' + $customFileBorderWidth + ';\n        right: ' + $customFileBorderWidth + ';\n        bottom: ' + $customFileBorderWidth + ';\n        z-index: 6;\n        display: block;\n        height: ' + $customFileHeight + ';\n        padding: ' + $customFilePaddingX + ' ' + $customFilePaddingY + ';\n        line-height: ' + $customFileLineHeight + ';\n        color: ' + $customFileButtonColor + ';\n        background-color: ' + $customFileButtonBg + ';\n        border: ' + $customFileBorderWidth + ' solid ' + $customFileBorderColor + ';\n        ' + (0, _borderRadius.borderRadius)(0, $enableRounded, $customFileBorderRadius, $customFileBorderRadius, 0) + '\n      }\n\n      ' + customFileControlAfterList.join('\n') + '\n    }\n  ';
}

exports.default = {
  customForms: customForms
};