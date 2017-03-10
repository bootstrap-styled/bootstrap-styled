import color from 'color';
import theme from 'theme';
import { borderRadius } from './border-radius';
import { hover, hoverFocus } from './hover';
import { boxShadow } from './box-shadow';
import { transition } from '../mixins/transition';
import { tabFocus } from './tab-focus';
import { ifElse } from './conditional';

export const defaultProps = theme;


export function buttonVariant(enableShadows = defaultProps['$enable-shadows'], buttonColor, background, border, btnBoxShadow = defaultProps['$btn-box-shadow'], btnActiveBoxShadow = defaultProps['$btn-active-box-shadow']) {
  const activeBackground = color(background).darken(0.1).hex();
  const activeBorder = color(border).darken(0.12).hex();

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
      ${ifElse(enableShadows,
        `box-shadow: ${btnBoxShadow}, 0 0 0 2px ${color(border).alpha(0.5).toString()};`,
        `box-shadow: 0 0 0 2px ${color(border).alpha(0.5).toString()});`
      )}
    }
  
    &:active,
    &.active,
    .show > &.dropdown-toggle {
      color: ${buttonColor};
      background-color: ${activeBackground};
      border-color: ${activeBorder};
      /* Remove the gradient for the pressed/active state */
      background-image: none;
      ${boxShadow(enableShadows, btnActiveBoxShadow)}
    }
  
    &.disabled,
    &:disabled {
      background-color: ${background};
      border-color: ${border};
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
      box-shadow: 0 0 0 2px rgba(${buttonColor}, .5);
    }
    
    &.disabled,
    &:disabled {
      color: ${buttonColor};
      background-color: transparent;
    }
  
    &:active,
    &.active,
    & .show > &.dropdown-toggle {
      color: ${buttonColorHover};
      background-color: ${buttonColor};
      border-color: ${buttonColor};
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
  $btnFontWeight = defaultProps['$btn-font-weight'],
  $btnLineHeight = defaultProps['$btn-line-height'],
  $btnTransition = defaultProps['$btn-transition'],
  $inputBtnBorderWidth = defaultProps['$input-btn-border-width'],
  $btnPaddingX = defaultProps['$btn-padding-x'],
  $btnPaddingY = defaultProps['$btn-padding-y'],
  $fontSizeBase = defaultProps['$font-size-base'],
  $btnBorderRadius = defaultProps['$btn-border-radius'],
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
    /*
     Base styles
    */
    font-family: inherit;

    &.btn {
      /* Adapt the colors based on primary prop */
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
     
      &,
      &:active,
      &.active {
        &:focus,
        &.focus {
          ${tabFocus()}
        }
      }
     
      ${hoverFocus(
        $enableHoverMediaQuery,
        `
          text-decoration: none;
          &.focus {
            text-decoration: none;
          }
        `
      )};
     
      &:active,
      &.active {
        background-image: none;
        outline: 0;
        ${boxShadow(
          $enableShadows,
          $btnActiveBoxShadow
        )}
      }
     
      &.disabled,
      &:disabled {
        cursor: ${$cursorDisabled};
        opacity: .65;
        ${boxShadow($enableShadows, 'none')}
      }
    }   
 
    /* Future-proof disabling of clicks on a elements */
    a.btn.disabled,
    fieldset[disabled] a.btn {
      pointer-events: none;
    }
   
   
    /* Alternate buttons */
   
    &.btn-primary {
      ${buttonVariant(
        $enableHoverMediaQuery,
        $btnPrimaryColor,
        $btnPrimaryBg,
        $btnPrimaryBorder,
      )}
    }
    &.btn-secondary {
      ${buttonVariant(
        $enableHoverMediaQuery,
        $btnSecondaryColor,
        $btnSecondaryBg,
        $btnSecondaryBorder,
      )}
    }
    &.btn-info {
      ${buttonVariant(
        $enableHoverMediaQuery,
        $btnInfoColor,
        $btnInfoBg,
        $btnInfoBorder,
      )}
    }
    &.btn-success {
      ${buttonVariant(
        $enableHoverMediaQuery,
        $btnSuccessColor,
        $btnSuccessBg,
        $btnSuccessBorder,
      )}
    }
    &.btn-warning {
      ${buttonVariant(
        $enableHoverMediaQuery,
        $btnWarningColor,
        $btnWarningBg,
        $btnWarningBorder,
      )}
    }
    &.btn-danger {
      ${buttonVariant(
        $enableHoverMediaQuery,
        $btnDangerColor,
        $btnDangerBg,
        $btnDangerBorder,
      )}
    }
   
   /* Remove all backgrounds */

    &.btn-outline-primary {
      ${buttonOutlineVariant(
        $btnPrimaryBg,
      )}
    }    
    &.btn-outline-secondary {
      ${buttonOutlineVariant(
        $btnSecondaryBorder,
      )}
    }    
    &.btn-outline-info {
      ${buttonOutlineVariant(
        $btnInfoBg,
      )}
    }    
    &.btn-outline-success {
      ${buttonOutlineVariant(
        $btnSuccessBg,
      )}
    }
    &.btn-outline-warning {
      ${buttonOutlineVariant(
        $btnWarningBg,
      )}
    }
    &.btn-outline-danger {
      ${buttonOutlineVariant(
        $btnDangerBg,
      )}
    }
   
    /*
     Link buttons
    */
   
    /* Make a button look and behave like a link */
    &.btn-link {
      font-weight: normal;
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
        ${hoverFocus(
          $enableHoverMediaQuery,
          `
            color: ${$btnLinkDisabledColor};
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
    /* Normalize includes font: inherit;, so font-family. font-size, etc are */
    /* properly inherited. However, line-height is not inherited there. */
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
