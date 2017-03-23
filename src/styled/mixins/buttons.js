import color from 'color';
import theme from 'theme';
import { borderRadius } from './border-radius';
import { hover, hoverFocus } from './hover';
import { boxShadow } from './box-shadow';
import { transition } from '../mixins/transition';
import { ifElse } from './conditional';
export const defaultProps = theme;


export function buttonVariant(enableShadows = defaultProps['$enable-shadows'], buttonColor, background, border, btnActiveBoxShadow = defaultProps['$btn-active-box-shadow'], btnBoxShadow = defaultProps['$btn-box-shadow']) {
  const activeBackground = color(background).darken(0.2).toString();
  const activeBorder = color(border).darken(0.12).toString();

  return `
    color: ${buttonColor};
    background-color: ${background};
    border-color: ${border};
    ${boxShadow(enableShadows, btnBoxShadow)}
  
    ${hover(`
      color: ${buttonColor};
      background-color: ${activeBackground};
      border-color: ${activeBorder};
    `)}
  
    &:focus,
    &.focus {
      ${ifElse(
        `box-shadow: ${btnBoxShadow}, 0 0 0 2px ${color(border).alpha(0.5).toString()};`,
        `box-shadow: 0 0 0 2px ${color(border).alpha(0.5).toString()};`
      )}
    }
  
    /* Disabled comes first so active can properly restyle */
    &.disabled,
    &:disabled {
      background-color: ${background};
      border-color: ${border};
    }
    
    &:active,
    &.active,
    .show > &.dropdown-toggle {
      color: ${buttonColor};
      background-color: ${activeBackground};
      background-image: none;
      border-color: ${activeBorder};
      ${boxShadow(enableShadows, btnActiveBoxShadow)}
    }
  `;
}

export function buttonOutlineVariant(buttonColor, buttonColorHover = '#fff') {
  return `
    color: ${buttonColor};
    background-image: none;
    background-color: transparent;
    border-color: ${buttonColor};
  
    ${hover(`
      color: ${buttonColorHover};
      background-color: ${buttonColor};
      border-color: ${buttonColor};
    `)}
  
    &:focus,
    &.focus {
      box-shadow: 0 0 0 2px ${color(buttonColor).alpha(0.5).toString()};
    }
  
    &.disabled,
    &:disabled {
      color: ${buttonColor};
      border-color: transparent;
    }
    
    &:active,
    &.active,
    & .open > &.dropdown-toggle {
      color: ${buttonColorHover};
      background-color: ${buttonColor};
      border-color: ${buttonColor};
    }
  `;
}

// Button sizes
export function buttonSize(enableRounded = defaultProps['$enable-rounded'], paddingY, paddingX, fontSize, btnBorderRadius) {
  return `
    padding: ${paddingY} ${paddingX};
    font-size: ${fontSize};
    ${borderRadius(enableRounded, btnBorderRadius)}
  `;
}

export function button(
  $enableShadows = defaultProps['$enable-shadows'],
  $enableHoverMediaQuery = defaultProps['$enable-hover-media-query'],
  $enableTransitions = defaultProps['$enable-transitions'],
  $enableRounded = defaultProps['$enable-rounded'],
  $fontWeightNormal = defaultProps['$font-weight-normal'],
  $btnFontWeight = defaultProps['$btn-font-weight'],
  $btnLineHeight = defaultProps['$btn-line-height'],
  $btnTransition = defaultProps['$btn-transition'],
  $inputBtnBorderWidth = defaultProps['$input-btn-border-width'],
  $btnPaddingX = defaultProps['$btn-padding-x'],
  $btnPaddingY = defaultProps['$btn-padding-y'],
  $fontSizeBase = defaultProps['$font-size-base'],
  $btnBorderRadius = defaultProps['$btn-border-radius'],
  $btnBoxShadow = defaultProps['$btn-box-shadow'],
  $btnFocusBoxShadow = defaultProps['$btn-focus-box-shadow'],
  $btnActiveBoxShadow = defaultProps['$btn-active-box-shadow'],
  $cursorDisabled = defaultProps['$cursor-disabled'],
  $linkColor = defaultProps['$link-color'],
  $linkHoverColor = defaultProps['$link-hover-color'],
  $linkHoverDecoration = defaultProps['$link-hover-decoration'],
  $btnLinkDisabledColor = defaultProps['$btn-link-disabled-color'],
  $btnPaddingXLg = defaultProps['$btn-padding-x-lg'],
  $btnPaddingYLg = defaultProps['$btn-padding-y-lg'],
  $fontSizeLg = defaultProps['$font-size-lg'],
  $btnBorderRadiusLg = defaultProps['$btn-border-radius-lg'],
  $btnPaddingXSm = defaultProps['$btn-padding-x-sm'],
  $btnPaddingYSm = defaultProps['$btn-padding-y-sm'],
  $fontSizeSm = defaultProps['$font-size-sm'],
  $btnBorderRadiusSm = defaultProps['$btn-border-radius-sm'],
  $btnBlockSpacingY = defaultProps['$btn-block-spacing-y'],
  $btnPrimaryColor = defaultProps['$btn-primary-color'],
  $btnPrimaryBg = defaultProps['$btn-primary-bg'],
  $btnPrimaryBorder = defaultProps['$btn-primary-border'],
  $btnSecondaryColor = defaultProps['$btn-secondary-color'],
  $btnSecondaryBg = defaultProps['$btn-secondary-bg'],
  $btnSecondaryBorder = defaultProps['$btn-secondary-border'],
  $btnInfoColor = defaultProps['$btn-info-color'],
  $btnInfoBg = defaultProps['$btn-info-bg'],
  $btnInfoBorder = defaultProps['$btn-info-border'],
  $btnSuccessColor = defaultProps['$btn-success-color'],
  $btnSuccessBg = defaultProps['$btn-success-bg'],
  $btnSuccessBorder = defaultProps['$btn-success-border'],
  $btnWarningColor = defaultProps['$btn-warning-color'],
  $btnWarningBg = defaultProps['$btn-warning-bg'],
  $btnWarningBorder = defaultProps['$btn-warning-border'],
  $btnDangerColor = defaultProps['$btn-danger-color'],
  $btnDangerBg = defaultProps['$btn-danger-bg'],
  $btnDangerBorder = defaultProps['$btn-danger-border'],
) {
  return `
  
    font-family: inherit;
    
    &.btn {
      display: inline-block;
      font-weight: ${$btnFontWeight};
      line-height: ${$btnLineHeight};
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      border: ${$inputBtnBorderWidth} solid transparent;
      ${buttonSize(
        $enableRounded,
        $btnPaddingY,
        $btnPaddingX,
        $fontSizeBase,
        $btnBorderRadius
      )}
      ${transition(
        $enableTransitions,
        $btnTransition
      )}
     
      ${hoverFocus(
        $enableHoverMediaQuery,
        'text-decoration: none;'
      )}

      &:focus,
      &.focus {
        outline: 0;
        box-shadow: ${$btnFocusBoxShadow};
      }

      &.disabled,
      &:disabled {
        cursor: ${$cursorDisabled};
        opacity: .65;
        ${boxShadow($enableShadows, 'none')}
      }  

      &:active,
      &.active {
        background-image: none;
        ${boxShadow($enableShadows, $btnFocusBoxShadow, $btnActiveBoxShadow)}
      }
    }
    
    a.btn.disabled,
    fieldset[disabled] a.btn {
      pointer-events: none;
    }
   
   
    /* Alternate buttons */
   
    &.btn-primary {
      ${buttonVariant(
        $enableShadows,
        $btnPrimaryColor,
        $btnPrimaryBg,
        $btnPrimaryBorder,
        $btnActiveBoxShadow,
        $btnBoxShadow
      )}
    }
    &.btn-secondary {
      ${buttonVariant(
        $enableShadows,
        $btnSecondaryColor,
        $btnSecondaryBg,
        $btnSecondaryBorder,
        $btnActiveBoxShadow,
        $btnBoxShadow
      )}
    }
    &.btn-info {
      ${buttonVariant(
        $enableShadows,
        $btnInfoColor,
        $btnInfoBg,
        $btnInfoBorder,
        $btnActiveBoxShadow,
        $btnBoxShadow
      )}
    }
    &.btn-success {
      ${buttonVariant(
        $enableShadows,
        $btnSuccessColor,
        $btnSuccessBg,
        $btnSuccessBorder,
        $btnActiveBoxShadow,
        $btnBoxShadow
      )}
    }
    &.btn-warning {
      ${buttonVariant(
        $enableShadows,
        $btnWarningColor,
        $btnWarningBg,
        $btnWarningBorder,
        $btnActiveBoxShadow,
        $btnBoxShadow
      )}
    }
    &.btn-danger {
      ${buttonVariant(
        $enableShadows,
        $btnDangerColor,
        $btnDangerBg,
        $btnDangerBorder,
        $btnActiveBoxShadow,
        $btnBoxShadow
      )}
    }
   
    &.btn-outline-primary {
      ${buttonOutlineVariant(
        $btnPrimaryBg,
        $btnPrimaryColor,
      )}
    }    
    &.btn-outline-secondary {
      ${buttonOutlineVariant(
        $btnSecondaryBorder,
        $btnSecondaryColor,
      )}
    }    
    &.btn-outline-info {
      ${buttonOutlineVariant(
        $btnInfoBg,
        $btnInfoColor,
      )}
    }    
    &.btn-outline-success {
      ${buttonOutlineVariant(
        $btnSuccessBg,
        $btnSuccessColor,
      )}
    }
    &.btn-outline-warning {
      ${buttonOutlineVariant(
        $btnWarningBg,
        $btnWarningColor,
      )}
    }
    &.btn-outline-danger {
      ${buttonOutlineVariant(
        $btnDangerBg,
        $btnDangerColor,
      )}
    }
   
    /*
     Link buttons
    */
   
    &.btn-link {
      font-weight: ${$fontWeightNormal};
      color: ${$linkColor};
      border-radius: 0;
   
      &,
      &:active,
      &.active,
      &:disabled {
        background-color: transparent;
        ${boxShadow(
          $enableShadows,
          'none'
        )}
      }
     
      &,
      &:focus,
      &:active {
        border-color: transparent;
      }
     
      ${hover(`
        border-color: transparent;
      `)}
     
      ${hoverFocus(
        $enableHoverMediaQuery,
        `
          color: ${$linkHoverColor};
          text-decoration: ${$linkHoverDecoration};
          background-color: transparent;
        `
      )}
     
      &:disabled {
        color: ${$btnLinkDisabledColor};
        ${hoverFocus(
          $enableHoverMediaQuery,
          `
            text-decoration: none;
          `
        )}
      }
    }
  
  
    /*
     Button Sizes
    */
   
    &.btn-lg {
      /* line-height: ensure even-numbered height of button next to large input */
      ${buttonSize(
        $enableRounded,
        $btnPaddingYLg,
        $btnPaddingXLg,
        $fontSizeLg,
        $btnBorderRadiusLg
      )}
    }
   
    &.btn-sm {
      /* line-height: ensure proper height of button next to small input */
      ${buttonSize(
        $enableRounded,
        $btnPaddingYSm,
        $btnPaddingXSm,
        $fontSizeSm,
        $btnBorderRadiusSm
      )}
    }
   
   
    /*
     Block button
    */
   
    &.btn-block {
      display: block;
      width: 100%;
    }
   
    /* Vertically space out multiple block buttons */
    &.btn-block + .btn-block {
      margin-top: ${$btnBlockSpacingY};
    }
   
    /* Specificity overrides */
    input[type="submit"],
    input[type="reset"],
    input[type="button"] {
      &.btn-block {
        width: 100%;
      }
    }
   
    /* Reboot Scss */
    touch-action: manipulation;
    line-height: inherit;
    &:focus{
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }
    
    &[type="button"],
    &[type="reset"],
    &[type="submit"] {
      -webkit-appearance: button;
    }
    
    &::-moz-focus-inner,
    &[type="button"]::-moz-focus-inner,
    &[type="reset"]::-moz-focus-inner,
    &[type="submit"]::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }

  `;
}

export default {
  defaultProps,
  buttonVariant,
  buttonOutlineVariant,
  buttonSize,
  button,
};
