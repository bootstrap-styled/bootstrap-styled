import { unitUtils } from 'math-utils';
import { hover } from '../mixins/hover';
import { borderRightRadius, borderLeftRadius, borderBottomRadius, borderTopRadius } from '../mixins/border-radius';
import { boxShadow } from '../mixins/box-shadow';
import { buttonSize } from '../mixins/button';

export const defaultProps = {
  '$enable-shadows': true,
  '$enable-rounded': true,
  '$input-btn-border-width': '1px',
  '$btn-toolbar-margin': '.5rem',
  '$btn-padding-x': '1rem',
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0,0,0,.125)',
  '$caret-width': '.3em',
  '$caret-width-lg': '.3em',
  '$btn-padding-x-lg': '1.5rem',
  '$btn-padding-y-lg': '.75rem',
  '$font-size-lg': '1.25rem',
  '$btn-border-radius-lg': '.3rem',
  '$btn-padding-y-sm': '.25rem',
  '$btn-padding-x-sm': '.5rem',
  '$font-size-sm': '.875rem',
  '$btn-border-radius-sm': '.2rem',
  '$btn-border-width': '1px',
};

export function buttonGroup(
  $enableShadows = defaultProps['$enable-shadows'],
  $enableRounded = defaultProps['$enable-rounded'],
  $inputBtnBorderWidth = defaultProps['$input-btn-border-width'],
  $btnToolbarMargin = defaultProps['$btn-toolbar-margin'],
  $btnPaddingX = defaultProps['$btn-padding-x'],
  $btnActiveBoxShadow = defaultProps['$btn-active-box-shadow'],
  $caretWidthLg = defaultProps['$caret-width-lg'],
  $btnPaddingXLg = defaultProps['$btn-padding-x-lg'],
  $btnPaddingYLg = defaultProps['$btn-padding-y-lg'],
  $fontSizeLg = defaultProps['$font-size-lg'],
  $btnBorderRadiusLg = defaultProps['$btn-border-radius-lg'],
  $btnPaddingXSm = defaultProps['$btn-padding-x-sm'],
  $btnPaddingYSm = defaultProps['$btn-padding-y-sm'],
  $fontSizeSm = defaultProps['$font-size-sm'],
  $btnBorderRadiusSm = defaultProps['$btn-border-radius-sm'],
  $btnBorderWidth = defaultProps['$btn-border-width']
) {
  return ` 
    /*  Make the div behave like a button */
    &.btn-group,
    & .btn-group,
    &.btn-group-vertical,
    & .btn-group-vertical {
      position: relative;
      display: inline-flex;
      vertical-align: middle; /* match .btn alignment given font-size hack above */
    
      > .btn {
        position: relative;
        flex: 0 1 auto;
        margin-bottom: 0;
    
        /* Bring the "active" button to the front */
        &:focus,
        &:active,
        &.active {
          z-index: 2;
        }
        ${hover(`
          z-index: 2;
        `)}
      }
    }
    
    /*  Prevent double borders when buttons are next to each other */
    &.btn-group,
    & .btn-group{
      .btn + .btn,
      .btn + .btn-group,
      .btn-group + .btn,
      .btn-group + .btn-group {
        margin-left: -${$btnBorderWidth};
      }
    }
    
    /* Optional: Group multiple button groups together for a toolbar */
    &.btn-toolbar,
    & .btn-toolbar{
       display: flex;
       flex-wrap: wrap;
      justify-content: flex-start;
    
      .input-group {
        width: auto;
      }
    }
     
    &.btn-group,
    & .btn-group {
      > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
        border-radius: 0;
      }
    }
    
    /* Set corners individual because sometimes a single button can be in a .btn-group and we need :first-child and :last-child to both match */
    &.btn-group,
    & .btn-group {
      > .btn:first-child {
        margin-left: 0;
    
        &:not(:last-child):not(.dropdown-toggle) {
          ${borderRightRadius(
            $enableRounded,
            '0'
          )}
        }
      }
    }
    /* Need .dropdown-toggle since :last-child doesn't apply given a .dropdown-menu immediately after it */
    &.btn-group > .btn:last-child:not(:first-child),
    & .btn-group > .btn:last-child:not(:first-child),
    &.btn-group > .dropdown-toggle:not(:first-child),
    & .btn-group > .dropdown-toggle:not(:first-child) {
      ${borderLeftRadius(
        $enableRounded,
        '0'
      )}
    }
    
    /* Custom edits for including btn-groups within btn-groups (useful for including dropdown buttons within a btn-group) */
    &.btn-group > .btn-group,
    & .btn-group > .btn-group{
      float: left;
    }
    &.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn,
    & .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
      border-radius: 0;
    }
    &.btn-group > .btn-group:first-child:not(:last-child)
    & .btn-group > .btn-group:first-child:not(:last-child) {
      > .btn:last-child,
      > .dropdown-toggle {
        ${borderRightRadius(
          $enableRounded,
          '0'
        )}
      }
    }
    &.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child,
    & .btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
      ${borderLeftRadius(
        $enableRounded,
        '0'
      )}
    }
    
    /* On active and open, don't show outline */
    &.btn-group .dropdown-toggle:active,
    & .btn-group .dropdown-toggle:active,
    &.btn-group.open .dropdown-toggle,
    & .btn-group.open .dropdown-toggle {
      outline: 0;
    }
    
    
    /* 
    Sizing Remix the default button sizing classes into new ones for easier manipulation.
    */
    
    &.btn-group-sm > .btn,
    & .btn-group-sm > .btn{ 
      ${buttonSize(
        $enableRounded,
        $btnPaddingYSm,
        $btnPaddingXSm,
        $fontSizeSm,
        $btnBorderRadiusSm,
      )}
    }
    &.btn-group-lg > .btn,
    & .btn-group-lg > .btn {
      ${buttonSize(
        $enableRounded,
        $btnPaddingYLg,
        $btnPaddingXLg,
        $fontSizeLg,
        $btnBorderRadiusLg,
      )}
    }
    
    
    /*
     Split button dropdowns
    */
    
    & .btn + .dropdown-toggle-split {
      padding-right: ${unitUtils.math.multiply($btnPaddingX, 0.75)};
      padding-left: ${unitUtils.math.multiply($btnPaddingX, 0.75)};
    
      &::after {
        margin-left: 0;
      }
    }
    
    & .btn-sm + .dropdown-toggle-split {
      padding-right: ${unitUtils.math.multiply($btnPaddingXSm, 0.75)};
      padding-left: ${unitUtils.math.multiply($btnPaddingXSm, 0.75)};
    }
    
    & .btn-lg + .dropdown-toggle-split {
      padding-right: ${unitUtils.math.multiply($btnPaddingXLg, 0.75)};
      padding-left: ${unitUtils.math.multiply($btnPaddingXLg, 0.75)};
    }
    
    
    /* The clickable button for toggling the menu */
    /* Remove the gradient and set the same inset shadow as the :active state */
    &.btn-group.open .dropdown-toggle {
      ${boxShadow(
        $enableShadows,
        $btnActiveBoxShadow,
      )}
    
      /* Show no shadow for '.btn-link' since it has no other button styles. */
      &.btn-link {
        ${boxShadow(
          $enableShadows,
          'none',
        )}
      }
    }
    
    
    /* Reposition the caret */
    & .btn .caret {
      margin-left: 0;
    }
    /* Carets in other button sizes */
    & .btn-lg .caret {
      border-width: ${$caretWidthLg} ${$caretWidthLg} 0;
      border-bottom-width: 0;
    }
    /* Upside down carets for .dropup */
    & .dropup .btn-lg .caret {
      border-width: 0 ${$caretWidthLg} ${$caretWidthLg};
    }
    
    
    
    /*
     Vertical button groups
    */
    
    &.btn-group-vertical,
    & .btn-group-vertical {
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    
      .btn,
      .btn-group {
        width: 100%;
      }
      
      > .btn + .btn,
      > .btn + .btn-group,
      > .btn-group + .btn,
      > .btn-group + .btn-group {
        margin-top: -${$inputBtnBorderWidth};
        margin-left: 0;
      }
    }
    
    &.btn-group-vertical > .btn,
    & .btn-group-vertical > .btn {
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
      &:first-child:not(:last-child) {
        ${borderBottomRadius($enableRounded,
          '0'
        )}
      }
      &:last-child:not(:first-child) {
        ${borderTopRadius($enableRounded,
          '0'
        )}
      }
    }
    
    &.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn,
    & .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
      border-radius: 0;
    }
    
    &.btn-group-vertical > .btn-group:first-child:not(:last-child),
    & .btn-group-vertical > .btn-group:first-child:not(:last-child) {
      > .btn:last-child,
      > .dropdown-toggle {
        ${borderBottomRadius($enableRounded,
          '0'
        )}      
      }
    }
    &.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child,
    & .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
      ${borderTopRadius($enableRounded,
        '0'
      )}
    }
  
  /*
   Checkbox and radio options
  
   In order to support the browser's form validation feedback, powered by the
   required attribute, we have to "hide" the inputs via clip. We cannot use
   display: none; or visibility: hidden; as that also hides the popover.
   Simply visually hiding the inputs via opacity would leave them clickable in
   certain cases which is prevented by using clip and pointer-events.
   This way, we ensure a DOM element is visible to position the popover from.
  
   See https://github.com/twbs/bootstrap/pull/12794 and
   https://github.com/twbs/bootstrap/pull/14559 for more information.
  
  [data-toggle="buttons"] {
    > .btn,
    > .btn-group > .btn {
      input[type="radio"],
      input[type="checkbox"] {
        position: absolute;
        clip: rect(0,0,0,0);
        pointer-events: none;
      }
    }
  }
  */
  
  `;
}

export default {
  defaultProps,
  buttonGroup,
};
