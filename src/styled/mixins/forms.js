import color from 'color';
import { borderRadius } from './border-radius';
import { boxShadow } from './box-shadow';
export const defaultProps = {
  '$enable-shadows': false,
  '$enable-rounded': true,
  '$input-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075)',
  '$input-color-focus': '#55595c',
  '$input-bg-focus': '#fff',
  '$input-border-focus': '#66afe9',
  '$input-border-radius': '.25rem',
  '$input-box-shadow-focus': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)',
};
// Form validation states
//
// Used in _forms.scss to generate the form validation CSS for warnings, errors,
// and successes.
export function formControlValidation(enableShadows = defaultProps['$enable-shadows'], formColor, inputBoxShadow = defaultProps['$input-box-shadow']) {
  return `
    /* Color the label and help text */
    & .form-control-feedback,
    & .form-control-label,
    & .col-form-label,
    & .form-check-label,
    & .custom-control {
      color: ${formColor};
    }
  
    /* Set the border and box shadow on specific inputs to match */
      
    & .form-control,
    & .custom-select,
    & .custom-file-control {
      border-color: ${formColor};
  
      &:focus {
        ${boxShadow(enableShadows, `${inputBoxShadow}, 0 0 6px ${color(formColor).lighten(0.2).toString()}`)};
      }
    }
  
    /* Set validation states also for addons */
    .input-group-addon {
      color: ${formColor};
      border-color: ${formColor};
      background-color: ${color(formColor).lighten(0.40).toString()};
    }
  `;
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
export function formControlFocus(enableShadows = defaultProps['$enable-shadows'], inputColorFocus = defaultProps['$input-color-focus'], inputBgFocus = defaultProps['$input-bg-focus'], inputBorderFocus = defaultProps['$input-border-focus'], inputBoxShadowFocus = defaultProps['$input-box-shadow-focus']) {
  return `
    &:focus {
      color: ${inputColorFocus};
      background-color: ${inputBgFocus};
      border-color: ${inputBorderFocus};
      outline: none;
      ${boxShadow(enableShadows, inputBoxShadowFocus)}
    }
  `;
}
// Form control sizing
//
// Relative text size, padding, and border-radii changes for form controls. For
// horizontal sizing, wrap controls in the predefined grid classes. `<select>`
// element gets special love because it's special, and that's a fact!
export function inputSize(enableRounded = defaultProps['$enable-rounded'], parent, inputHeight, paddingY, paddingX, fontSize, lineHeight, inputBorderRadius = defaultProps['$input-border-radius']) {
  return `
    ${parent} {
      height: ${inputHeight};
      padding: ${paddingY} ${paddingX};
      font-size: ${fontSize};
      line-height: ${lineHeight};
      ${borderRadius(enableRounded, inputBorderRadius)}
    }
  
    select${parent} {
      height: ${inputHeight};
      line-height: ${inputHeight};
    }
  
    textarea${parent},
      select[multiple]${parent} {
      height: auto;
    }
  `;
}
export default {
  defaultProps,
  formControlValidation,
  formControlFocus,
  inputSize,
};
