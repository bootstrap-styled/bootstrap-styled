import color from 'color';
import theme from 'theme';
import { borderRadius } from './border-radius';
import { boxShadow } from './box-shadow';
import { transition } from '../mixins/transition';

export var defaultProps = theme;

export function formControl() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var $enableTransitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-transitions'];
  var $enableShadows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$enable-shadows'];
  var $inputHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$input-height'];
  var $inputPaddingY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$input-padding-y'];
  var $inputPaddingX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$input-padding-x'];
  var $fontSizeBase = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$font-size-base'];
  var $inputLineHeight = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$input-line-height'];
  var $inputColor = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$input-color'];
  var $inputBg = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$input-bg'];
  var $inputBorderRadius = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$input-border-radius'];
  var $inputBtnBorderWidth = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$input-btn-border-width'];
  var $inputBorderColor = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$input-border-color'];
  var $inputTransition = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$input-transition'];
  var $inputBoxShadow = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$input-box-shadow'];
  var $inputColorFocus = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$input-color-focus'];
  var $inputBgFocus = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$input-bg-focus'];
  var $inputBorderFocus = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$input-border-focus'];
  var $inputBoxShadowFocus = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$input-box-shadow-focus'];
  var $inputColorPlaceholder = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$input-color-placeholder'];
  var $inputBgDisabled = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$input-bg-disabled'];
  var $cursorDisabled = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$cursor-disabled'];

  return '\n      & .form-control {\n        display: block;\n        width: 100%;\n  \n        /* Make inputs at least the height of their button counterpart (base line-height + padding + border) */\n        /* height: ' + $inputHeight + '; */\n  \n        padding: ' + $inputPaddingY + ' ' + $inputPaddingX + ';\n        font-size: ' + $fontSizeBase + ';\n        line-height: ' + $inputLineHeight + ';\n        color: ' + $inputColor + ';\n        background-color: ' + $inputBg + ';\n  \n        /* Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214. */\n        background-image: none;\n        background-clip: padding-box;\n        /* Note: This has no effect on <select>s in some browsers, due to the limited stylability of <select>s in CSS. */\n        ' + ($enableRounded ? 'border-radius: ' + $inputBorderRadius + ';' : 'border-radius: 0;') + ' /* Manually use the if/else instead of the mixin to account for iOS override */\n        border: ' + $inputBtnBorderWidth + ' solid ' + $inputBorderColor + ';\n        ' + transition($enableTransitions, $inputTransition) + '\n        ' + boxShadow($enableShadows, $inputBoxShadow) + '\n  \n        /* Unstyle the caret on selects in IE10+. */\n        &::-ms-expand {\n          background-color: transparent;\n          border: 0;\n        }\n  \n        /* Customize the :focus state to imitate native WebKit styles. */\n        ' + formControlFocus($enableShadows, $inputColorFocus, $inputBgFocus, $inputBorderFocus, $inputBoxShadowFocus) + '\n  \n        /* Placeholder */\n        &::placeholder {\n          color: ' + $inputColorPlaceholder + ';\n          /* Override Firefox unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526. */\n          opacity: 1;\n        }\n  \n        /* Disabled and read-only inputs\n         HTML5 says that controls under a fieldset > legend:first-child will not be\n         disabled if the fieldset is disabled. Due to implementation difficulty, we\n         do not honor that edge case; we style them as disabled anyway.\n         */\n  \n        &:disabled,\n        &[readonly] {\n          background-color:' + $inputBgDisabled + ';\n          /* iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655. */\n          opacity: 1;\n        }\n  \n        &:disabled {\n          cursor: ' + $cursorDisabled + ';\n        }\n      }\n  ';
}

// Form validation states
//
// Used in _forms.scss to generate the form validation CSS for warnings, errors,
// and successes.
export function formControlValidation() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var formColor = arguments[1];
  var inputBoxShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$input-box-shadow'];

  return '\n    /* Color the label and help text */\n    & .form-control-feedback,\n    & .form-control-label,\n    & .col-form-label,\n    & .form-check-label,\n    & .custom-control {\n      color: ' + formColor + ';\n    }\n  \n    /* Set the border and box shadow on specific inputs to match */\n      \n    & .form-control,\n    & .custom-select,\n    & .custom-file-control {\n      border-color: ' + formColor + ';\n  \n      &:focus {\n        ' + boxShadow(enableShadows, inputBoxShadow + ', 0 0 6px ' + color(formColor).lighten(0.2).toString()) + '\n      }\n    }\n  \n    /* Set validation states also for addons */\n    .input-group-addon {\n      color: ' + formColor + ';\n      border-color: ' + formColor + ';\n      background-color: ' + color(formColor).lighten(0.40).toString() + ';\n    }\n  ';
}
// Form control focus state
//
// Generate a customized focus state and for any input with the specified color,
// which defaults to the `@input-border-focus` variable.
//
// We highly encourage you to not customize the default value, but instead use
// this to tweak colors on an as-needed basis. This aesthetic change is based on
// WebKit's default styles, but applicable to a wider range of browsers. Its
// usability and accessibility should be taken into account with any change.
//
// Example usage: change the default blue border and shadow to white for better
// contrast against a dark gray background.
export function formControlFocus() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var inputColorFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$input-color-focus'];
  var inputBgFocus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$input-bg-focus'];
  var inputBorderFocus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$input-border-focus'];
  var inputBoxShadowFocus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$input-box-shadow-focus'];

  return '\n    &:focus {\n      color: ' + inputColorFocus + ';\n      background-color: ' + inputBgFocus + ';\n      border-color: ' + inputBorderFocus + ';\n      outline: none;\n      ' + boxShadow(enableShadows, inputBoxShadowFocus) + '\n    }\n  ';
}
// Form control sizing
//
// Relative text size, padding, and border-radii changes for form controls. For
// horizontal sizing, wrap controls in the predefined grid classes. `<select>`
// element gets special love because it's special, and that's a fact!
export function inputSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var parent = arguments[1];
  var inputHeight = arguments[2];
  var paddingY = arguments[3];
  var paddingX = arguments[4];
  var fontSize = arguments[5];
  var lineHeight = arguments[6];
  var inputBorderRadius = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$input-border-radius'];

  return '\n    ' + parent + ' {\n      height: ' + inputHeight + ';\n      padding: ' + paddingY + ' ' + paddingX + ';\n      font-size: ' + fontSize + ';\n      line-height: ' + lineHeight + ';\n      ' + borderRadius(enableRounded, inputBorderRadius) + '\n    }\n  \n    select' + parent + ' {\n      height: ' + inputHeight + ';\n      line-height: ' + inputHeight + ';\n    }\n  \n    textarea' + parent + ',\n      select[multiple]' + parent + ' {\n      height: auto;\n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  formControl: formControl,
  formControlValidation: formControlValidation,
  formControlFocus: formControlFocus,
  inputSize: inputSize
};