import { unitUtils } from 'math-utils';
import { boxShadow } from '../mixins/box-shadow';
import { borderRadius } from '../mixins/border-radius';

export const defaultProps = {
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
      'en': 'Choose file...', // eslint-disable-line quote-props
    },
    'button-label': {
      'en': 'Browse', // eslint-disable-line quote-props
    },
  },
};

export function customForms(
  $enableRounded = defaultProps['$enable-rounded'],
  $enableShadows = defaultProps['$enable-shadows'],
  $customControlCheckedIndicatorBoxShadow = defaultProps['$custom-control-checked-indicator-box-shadow'],
  $customControlActiveIndicatorBoxShadow = defaultProps['$custom-control-active-indicator-box-shadow'],
  $customControlIndicatorBoxShadow = defaultProps['$custom-control-indicator-box-shadow'],
  $customCheckboxIndeterminateBoxShadow = defaultProps['$custom-checkbox-indeterminate-box-shadow'],
  $customSelectFocusBoxShadow = defaultProps['$custom-select-focus-box-shadow'],
  $customFileFocusBoxShadow = defaultProps['$custom-file-focus-box-shadow'],
  $customFileBoxShadow = defaultProps['$custom-file-box-shadow'],
  $customSelectBorderRadius = defaultProps['$custom-select-border-radius'],
  $customFileBorderRadius = defaultProps['$custom-file-border-radius'],
  $customCheckboxRadius = defaultProps['$custom-checkbox-radius'],
  $inputBg = defaultProps['$input-bg'],
  $customSelectLineHeight = defaultProps['$custom-select-line-height'],
  $lineHeightBase = defaultProps['$line-height-base'],
  $customControlGutter = defaultProps['$custom-control-gutter'],
  $customControlSpacerX = defaultProps['$custom-control-spacer-x'],
  $customControlCheckedIndicatorColor = defaultProps['$custom-control-checked-indicator-color'],
  $customControlCheckedIndicatorBg = defaultProps['$custom-control-checked-indicator-bg'],
  $customControlFocusIndicatorBoxShadow = defaultProps['$custom-control-focus-indicator-box-shadow'],
  $customControlActiveIndicatorColor = defaultProps['$custom-control-active-indicator-color'],
  $customControlActiveIndicatorBg = defaultProps['$custom-control-active-indicator-bg'],
  $customControlDisabledCursor = defaultProps['$custom-control-disabled-cursor'],
  $customControlDisabledIndicatorBg = defaultProps['$custom-control-disabled-indicator-bg'],
  $customControlDisabledDescriptionColor = defaultProps['$custom-control-disabled-description-color'],
  $customControlIndicatorSize = defaultProps['$custom-control-indicator-size'],
  $customControlIndicatorBg = defaultProps['$custom-control-indicator-bg'],
  $customControlIndicatorBgSize = defaultProps['$custom-control-indicator-bg-size'],
  $customCheckboxCheckedIcon = defaultProps['$custom-checkbox-checked-icon'],
  $customCheckboxIndeterminateBg = defaultProps['$custom-checkbox-indeterminate-bg'],
  $customCheckboxIndeterminateIcon = defaultProps['$custom-checkbox-indeterminate-icon'],
  $customRadioRadius = defaultProps['$custom-radio-radius'],
  $customRadioCheckedIcon = defaultProps['$custom-radio-checked-icon'],
  $customControlSpacerY = defaultProps['$custom-control-spacer-y'],
  $borderWidth = defaultProps['$border-width'],
  $inputHeight = defaultProps['$input-height'],
  $customSelectPaddingY = defaultProps['$custom-select-padding-y'],
  $customSelectPaddingX = defaultProps['$custom-select-padding-x'],
  $customSelectIndicatorPadding = defaultProps['$custom-select-indicator-padding'],
  $customSelectColor = defaultProps['$custom-select-color'],
  $customSelectBg = defaultProps['$custom-select-bg'],
  $customSelectIndicator = defaultProps['$custom-select-indicator'],
  $customSelectBgSize = defaultProps['$custom-select-bg-size'],
  $customSelectBorderWidth = defaultProps['$custom-select-border-width'],
  $customSelectBorderColor = defaultProps['$custom-select-border-color'],
  $customSelectFocusBorderColor = defaultProps['$custom-select-focus-border-color'],
  $inputColor = defaultProps['$input-color'],
  $customSelectDisabledColor = defaultProps['$custom-select-disabled-color'],
  $cursorDisabled = defaultProps['$cursor-disabled'],
  $customSelectDisabledBg = defaultProps['$custom-select-disabled-bg'],
  $customSelectSmFontSize = defaultProps['$custom-select-sm-font-size'],
  $customFileWidth = defaultProps['$custom-file-width'],
  $customFileHeight = defaultProps['$custom-file-height'],
  $customFilePaddingX = defaultProps['$custom-file-padding-x'],
  $customFilePaddingY = defaultProps['$custom-file-padding-y'],
  $customFileLineHeight = defaultProps['$custom-file-line-height'],
  $customFileColor = defaultProps['$custom-file-color'],
  $customFileBg = defaultProps['$custom-file-bg'],
  $customFileBorderWidth = defaultProps['$custom-file-border-width'],
  $customFileBorderColor = defaultProps['$custom-file-border-color'],
  $customFileButtonColor = defaultProps['$custom-file-button-color'],
  $customFileButtonBg = defaultProps['$custom-file-button-bg'],
  $customFileText = defaultProps['$custom-file-text'],
) {
  const customFileControlBeforeList = [];
  Object.keys($customFileText.placeholder).forEach(($lang) => {
    customFileControlBeforeList.push(`
      &:lang(${$lang})::after {
        content: "${$customFileText.placeholder[$lang]}";
      }   
    `);
  });

  const customFileControlAfterList = [];
  Object.keys($customFileText['button-label']).forEach(($lang) => {
    customFileControlAfterList.push(`
      &:lang(${$lang})::before {
        content: "${$customFileText['button-label'][$lang]}";
      }
    `);
  });
  const selectBorderWidth = unitUtils.math.multiply($borderWidth, 2);
  const customSelectPaddingRight = unitUtils.math.addition($customSelectPaddingY, $customSelectIndicatorPadding);
  const lineHeightBaseMinusCustomControlIndicatorSize = unitUtils.math.subtract($lineHeightBase, $customControlIndicatorSize);

  return `
    /* Embedded icons from Open Iconic. */
    /* Released under MIT and copyright 2014 Waybury. */
    /* https://useiconic.com/open */
    
    
    /* Checkboxes and radios */
    /* Base class takes care of all the key behavioral aspects. */
    
    & .custom-control {
      position: relative;
      display: inline-flex;
      min-height: calc(1rem * ${$lineHeightBase});
      padding-left: ${$customControlGutter};
      margin-right: ${$customControlSpacerX};
    }
    
    & .custom-control-input {
      position: absolute;
      z-index: -1; /* Put the input behind the label so it does not overlay text */
      opacity: 0;
    
      &:checked ~ .custom-control-indicator {
        color: ${$customControlCheckedIndicatorColor};
        background-color: ${$customControlCheckedIndicatorBg};
        ${boxShadow(
          $enableShadows,
          $customControlCheckedIndicatorBoxShadow
        )}
      }
    
      &:focus ~ .custom-control-indicator {
        /* the mixin is not used here to make sure there is feedback */
        box-shadow: ${$customControlFocusIndicatorBoxShadow};
      }
    
      &:active ~ .custom-control-indicator {
        color: ${$customControlActiveIndicatorColor};
        background-color: ${$customControlActiveIndicatorBg};
        ${boxShadow(
          $enableShadows,
          $customControlActiveIndicatorBoxShadow
        )}
      }
    
      &:disabled {
        ~ .custom-control-indicator {
          cursor: ${$customControlDisabledCursor};
          background-color: ${$customControlDisabledIndicatorBg};
        }
    
        ~ .custom-control-description {
          color: ${$customControlDisabledDescriptionColor};
          cursor: ${$customControlDisabledCursor};
        }
      }
    }
    
    /* Custom indicator */
    /* Generates a shadow element to create our makeshift checkbox/radio background. */
    
    & .custom-control-indicator {
      position: absolute;
      top: calc(${lineHeightBaseMinusCustomControlIndicatorSize} / 2);
      left: 0;
      display: block;
      width: ${$customControlIndicatorSize};
      height: ${$customControlIndicatorSize};
      pointer-events: none;
      user-select: none;
      background-color: ${$customControlIndicatorBg};
      background-repeat: no-repeat;
      background-position: center center;
      background-size: ${$customControlIndicatorBgSize};
      ${boxShadow(
        $enableShadows,
        $customControlIndicatorBoxShadow
      )}
    }
    
    /* Checkboxes */
    /* Tweak just a few things for checkboxes.  */
    
    & .custom-checkbox {
      & .custom-control-indicator {
        ${borderRadius(
          $enableRounded,
          $customCheckboxRadius
        )}
      }
    
      & .custom-control-input:checked ~ .custom-control-indicator {
        background-image: ${$customCheckboxCheckedIcon};
      }
    
      & .custom-control-input:indeterminate ~ .custom-control-indicator {
        background-color: ${$customCheckboxIndeterminateBg};
        background-image: ${$customCheckboxIndeterminateIcon};
        ${boxShadow(
          $enableShadows,
          $customCheckboxIndeterminateBoxShadow
        )}
      }
    }
    
    /* Radios */
    /* Tweak just a few things for radios. */
    
    & .custom-radio {
      & .custom-control-indicator {
        border-radius: ${$customRadioRadius};
      }
    
      & .custom-control-input:checked ~ .custom-control-indicator {
        background-image: ${$customRadioCheckedIcon};
      }
    }
    
    
    /* Layout options */
    /* By default radios and checkboxes are inline-block with no additional spacing */
    /* set. Use these optional classes to tweak the layout. */
    
    & .custom-controls-stacked {
      display: flex;
      flex-direction: column;
    
      & .custom-control {
        margin-bottom: ${$customControlSpacerY};
    
        + & .custom-control {
          margin-left: 0;
        }
      }
    }
    
    
    /* Select */
    /* Replaces the browser default select with a custom one, mostly pulled from */
    /* http://primercss.io. */
    
    & .custom-select {
      display: inline-block;
      max-width: 100%;
      height: calc(${$inputHeight} + ${selectBorderWidth});
      padding: ${$customSelectPaddingY} ${customSelectPaddingRight} ${$customSelectPaddingY} ${$customSelectPaddingX};
      line-height: ${$customSelectLineHeight};
      color: ${$customSelectColor};
      vertical-align: middle;
      background: ${$customSelectBg} ${$customSelectIndicator} no-repeat right ${$customSelectPaddingX} center;
      background-size: ${$customSelectBgSize};
      border: ${$customSelectBorderWidth} solid ${$customSelectBorderColor};
      ${borderRadius(
        $enableRounded,
        $customSelectBorderRadius
      )}
      /* Use vendor prefixes as appearance is not part of the CSS spec.  */
      -moz-appearance: none;
      -webkit-appearance: none;
    
      :focus {
        border-color: ${$customSelectFocusBorderColor};
        outline: none;
        ${boxShadow(
          $enableShadows,
          $customSelectFocusBoxShadow
        )}
    
        ::-ms-value {
          /* For visual consistency with other platforms/browsers, */
          /* supress the default white text on blue background highlight given to */
          /* the selected option text when the (still closed) <select> receives focus */
          /* in IE and (under certain conditions) Edge. */
          /* See https://github.com/twbs/bootstrap/issues/19398. */
          color: ${$inputColor};
          background-color: ${$inputBg};
        }
      }
    
      :disabled {
        color: ${$customSelectDisabledColor};
        cursor: ${$cursorDisabled};
        background-color: ${$customSelectDisabledBg};
      }
    
      /* Hides the default caret in IE11 */
      ::-ms-expand {
        opacity: 0;
      }
    }
    
    & .custom-select-sm {
      padding-top: ${$customSelectPaddingY};
      padding-bottom: ${$customSelectPaddingY};
      font-size: ${$customSelectSmFontSize};
    
      /* &:not([multiple]) { */
      /*   height: 26px; */
      /*   min-height: 26px; */
      /* } */
    }
    
    
    /* File */
    /* Custom file input. */
    
    & .custom-file {
      position: relative;
      display: inline-block;
      max-width: 100%;
      height: ${$customFileHeight};
      margin-bottom: 0;
    }
    
    & .custom-file-input {
      min-width: ${$customFileWidth};
      max-width: 100%;
      height: ${$customFileHeight};
      margin: 0;
      opacity: 0;
    
      &:focus ~ .custom-file-control {
        ${boxShadow(
          $enableShadows,
          $customFileFocusBoxShadow
        )}
      }
    }
    
    & .custom-file-control {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: 5;
      height: ${$customFileHeight};
      padding: ${$customFilePaddingX} ${$customFilePaddingY};
      line-height: ${$customFileLineHeight};
      color: ${$customFileColor};
      pointer-events: none;
      user-select: none;
      background-color: ${$customFileBg};
      border: ${$customFileBorderWidth} solid ${$customFileBorderColor};
      ${borderRadius(
        $enableRounded,
        $customFileBorderRadius
      )}
      ${boxShadow(
        $enableShadows,
        $customFileBoxShadow
      )}
      
      ${customFileControlBeforeList.join('\n')}
    
      &::before {
        position: absolute;
        top: ${$customFileBorderWidth};
        right: ${$customFileBorderWidth};
        bottom: ${$customFileBorderWidth};
        z-index: 6;
        display: block;
        height: ${$customFileHeight};
        padding: ${$customFilePaddingX} ${$customFilePaddingY};
        line-height: ${$customFileLineHeight};
        color: ${$customFileButtonColor};
        background-color: ${$customFileButtonBg};
        border: ${$customFileBorderWidth} solid ${$customFileBorderColor};
        ${borderRadius(0,
          $enableRounded,
          $customFileBorderRadius,
          $customFileBorderRadius,
          0
        )}
      }

      ${customFileControlAfterList.join('\n')}
    }
  `;
}

export default {
  customForms,
};
