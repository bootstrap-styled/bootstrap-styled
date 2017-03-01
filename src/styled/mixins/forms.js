import color from 'color';
import theme from 'theme';
import { borderRadius } from './border-radius';
import { boxShadow } from './box-shadow';
import { transition } from '../mixins/transition';

export const defaultProps = theme;

export function formControl(
  $enableRounded = defaultProps['$enable-rounded'],
  $enableTransitions = defaultProps['$enable-transitions'],
  $enableShadows = defaultProps['$enable-shadows'],
  $inputHeight = defaultProps['$input-height'],
  $inputPaddingY = defaultProps['$input-padding-y'],
  $inputPaddingX = defaultProps['$input-padding-x'],
  $fontSizeBase = defaultProps['$font-size-base'],
  $inputLineHeight = defaultProps['$input-line-height'],
  $inputColor = defaultProps['$input-color'],
  $inputBg = defaultProps['$input-bg'],
  $inputBorderRadius = defaultProps['$input-border-radius'],
  $inputBtnBorderWidth = defaultProps['$input-btn-border-width'],
  $inputBorderColor = defaultProps['$input-border-color'],
  $inputTransition = defaultProps['$input-transition'],
  $inputBoxShadow = defaultProps['$input-box-shadow'],
  $inputColorFocus = defaultProps['$input-color-focus'],
  $inputBgFocus = defaultProps['$input-bg-focus'],
  $inputBorderFocus = defaultProps['$input-border-focus'],
  $inputBoxShadowFocus = defaultProps['$input-box-shadow-focus'],
  $inputColorPlaceholder = defaultProps['$input-color-placeholder'],
  $inputBgDisabled = defaultProps['$input-bg-disabled'],
  $cursorDisabled = defaultProps['$cursor-disabled'],
) {
  return `
      & .form-control {
        display: block;
        width: 100%;
  
        /* Make inputs at least the height of their button counterpart (base line-height + padding + border) */
        /* height: ${$inputHeight}; */
  
        padding: ${$inputPaddingY} ${$inputPaddingX};
        font-size: ${$fontSizeBase};
        line-height: ${$inputLineHeight};
        color: ${$inputColor};
        background-color: ${$inputBg};
  
        /* Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214. */
        background-image: none;
        background-clip: padding-box;
        /* Note: This has no effect on <select>s in some browsers, due to the limited stylability of <select>s in CSS. */
        ${$enableRounded ? `border-radius: ${$inputBorderRadius};` : 'border-radius: 0;'} /* Manually use the if/else instead of the mixin to account for iOS override */
        border: ${$inputBtnBorderWidth} solid ${$inputBorderColor};
        ${transition(
          $enableTransitions,
          $inputTransition
        )}
        ${boxShadow(
          $enableShadows,
          $inputBoxShadow
        )}
  
        /* Unstyle the caret on selects in IE10+. */
        &::-ms-expand {
          background-color: transparent;
          border: 0;
        }
  
        /* Customize the :focus state to imitate native WebKit styles. */
        ${formControlFocus(
          $enableShadows,
            $inputColorFocus,
            $inputBgFocus,
            $inputBorderFocus,
            $inputBoxShadowFocus,
          )}
  
        /* Placeholder */
        &::placeholder {
          color: ${$inputColorPlaceholder};
          /* Override Firefox unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526. */
          opacity: 1;
        }
  
        /* Disabled and read-only inputs
         HTML5 says that controls under a fieldset > legend:first-child will not be
         disabled if the fieldset is disabled. Due to implementation difficulty, we
         do not honor that edge case; we style them as disabled anyway.
         */
  
        &:disabled,
        &[readonly] {
          background-color:${$inputBgDisabled};
          /* iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655. */
          opacity: 1;
        }
  
        &:disabled {
          cursor: ${$cursorDisabled};
        }
      }
  `;
}

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
        ${boxShadow(enableShadows, `${inputBoxShadow}, 0 0 6px ${color(formColor).lighten(0.2).toString()}`)}
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
  formControl,
  formControlValidation,
  formControlFocus,
  inputSize,
};
