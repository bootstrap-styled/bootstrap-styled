import color from 'color';
import { borderRadius } from './border-radius';
import { boxShadow } from './box-shadow';
export var defaultProps = {
  '$enable-shadows': false,
  '$enable-rounded': true,
  '$input-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075)',
  '$input-color-focus': '#55595c',
  '$input-bg-focus': '#fff',
  '$input-border-focus': '#66afe9',
  '$input-border-radius': '.25rem',
  '$input-box-shadow-focus': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)'
};
// Form validation states
//
// Used in _forms.scss to generate the form validation CSS for warnings, errors,
// and successes.
export function formControlValidation() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var formColor = arguments[1];
  var inputBoxShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$input-box-shadow'];

  return '\n    /* Color the label and help text */\n    & .form-control-feedback,\n    & .form-control-label,\n    & .col-form-label,\n    & .form-check-label,\n    & .form-check-inline,\n    & .custom-control {\n      color: ' + formColor + ';\n    }\n  \n    /* Set the border and box shadow on specific inputs to match */\n    & .form-control {\n      border-color: ' + formColor + ';\n  \n      &:focus {\n        ' + boxShadow(enableShadows, inputBoxShadow + ', 0 0 6px ' + color(formColor).lighten(0.2).toString()) + ';\n      }\n    }\n  \n    /* Set validation states also for addons */\n    .input-group-addon {\n      color: ' + formColor + ';\n      border-color: ' + formColor + ';\n      background-color: ' + color(formColor).lighten(0.40).toString() + ';\n    }\n  ';
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
  formControlValidation: formControlValidation,
  formControlFocus: formControlFocus,
  inputSize: inputSize
};