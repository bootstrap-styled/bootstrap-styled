/**
 * InputGroup Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'config';

import { hoverFocusActive } from '../../styled/mixins/hover';
import { borderRadius, borderLeftRadius, borderRightRadius } from '../../styled/mixins/border-radius';
import { ifElse } from '../../styled/mixins/conditional';
import { transition } from '../../styled/mixins/transition';
import { boxShadow } from '../../styled/mixins/box-shadow';
import { formControlFocus } from '../../styled/mixins/forms';

const defaultProps = { theme };

class InputGroup extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div
        className={this.props.className}
      >
        {this.props.children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
InputGroup = styled(InputGroup)`
  ${(props) => `
    /*
     Base styles
    */
   
    &.input-group {
      position: relative;
      width: 100%;
   
      ${ifElse(
        props.theme['$enable-flex'],
        `
          display: flex;
        `
        ,
        `
          display: table;
          /* Prevent input groups from inheriting border styles from table cells when placed within a table. */
          border-collapse: separate;
        `
      )}
   
      .form-control {
        /* Ensure that the input is always above the *appended* addon button for
        proper border colors.
        */
        position: relative;
        z-index: 2;
        /* Bring the "active" form control to the front */

        ${hoverFocusActive(
          props.theme['$enable-hover-media-query'],
          'z-index: 3;'
        )}
        
        ${ifElse(
          props.theme['$enable-flex'],
        `
          flex: 1;
        `
        ,
        `
          /* IE9 fubars the placeholder attribute in text inputs and the arrows on
          select elements in input groups. To fix it, we float the input. Details:
          https://github.com/twbs/bootstrap/issues/11561#issuecomment-28936855
          */
          float: left;
          width: 100%;
        `
        )}
        
        margin-bottom: 0;
      }
    }
    
    /* Added So that Inputs in InputGroup grab the same .form-control class as in Component Form Not Bs4 */
    & .form-control {
      display: block;
      width: 100%;
      
      /* Make inputs at least the height of their button counterpart (base line-height + padding + border) */
      /* height: ${props.theme['$input-height']}; */
      
      padding: ${props.theme['$input-padding-y']} ${props.theme['$input-padding-x']};
      font-size: ${props.theme['$font-size-base']};
      line-height: ${props.theme['$input-line-height']};
      color: ${props.theme['$input-color']};
      background-color: ${props.theme['$input-bg']};
      
      /* Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214. */
      background-image: none;
      background-clip: padding-box;
      ${props.theme['$enable-rounded'] ? `
        border-radius: ${props.theme['$input-border-radius']}
      ` : ` 
        border-radius: 0;
      `}
      border: ${props.theme['$input-btn-border-width']} solid ${props.theme['$input-border-color']};
      ${transition(
        props.theme['$enable-transitions'],
        'border-color ease-in-out .15s, box-shadow ease-in-out .15s'
      )}
      ${boxShadow(
        props.theme['$enable-shadows'],
        props.theme['$input-box-shadow']
      )}

      /* Unstyle the caret on selects in IE10+. */
      &::-ms-expand {
        background-color: transparent;
        border: 0;
      }
    
      /* Customize the :focus state to imitate native WebKit styles. */
      ${formControlFocus(
        props.theme['$enable-shadows'],
        props.theme['$input-color-focus'],
        props.theme['$input-bg-focus'],
        props.theme['$input-border-focus'],
        props.theme['$input-box-shadow-focus'],
      )}
    
      /* Placeholder */
      &::placeholder {
        color: ${props.theme['$input-color-placeholder']};
        /* Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526. */
        opacity: 1;
      }
    
      /* Disabled and read-only inputs
       HTML5 says that controls under a fieldset > legend:first-child won't be
       disabled if the fieldset is disabled. Due to implementation difficulty, we
       don't honor that edge case; we style them as disabled anyway.
       */
       
      &:disabled,
      &[readonly] {
        background-color:${props.theme['$input-bg-disabled']};
        /* iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655. */
        opacity: 1;
      }
    
      &:disabled {
        cursor: ${props.theme['$cursor-disabled']};
      }
    }
   
    & .input-group-addon,
    .input-group-btn,
    .input-group .form-control {
      ${ifElse(
        props.theme['$enable-flex'],
        '',
        'display: table-cell;'
      )}
   
      &:not(:first-child):not(:last-child) {
        ${borderRadius(
          props.theme['$enable-rounded'],
          '0'
        )}
      }
    }
   
    & .input-group-addon,
    .input-group-btn {
      ${ifElse(
        props.theme['$enable-flex'],
        '',
        'width: 1%;'
      )}
      white-space: nowrap;
      vertical-align: middle; /* Match the inputs */
    }
   
   
    /* Sizing options
    Remix the default form control sizing classes into new ones for easier
    manipulation.
    */
   
    &.input-group-lg > .form-control,
    &.input-group-lg > .input-group-addon,
    &.input-group-lg > .input-group-btn > .btn {
      padding: ${props.theme['$input-padding-y-lg']} ${props.theme['$input-padding-x-lg']};
      font-size: ${props.theme['$font-size-lg']};
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$input-border-radius-lg']
      )}
    }
    
    &.input-group-sm > .form-control,
    &.input-group-sm > .input-group-addon,
    &.input-group-sm > .input-group-btn > .btn {
      padding: ${props.theme['$input-padding-y-sm']} ${props.theme['$input-padding-x-sm']};
      font-size: ${props.theme['$font-size-sm']};
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$input-border-radius-sm']
      )}
    }
   
   
    /*
    Text input groups
    */
   
    & .input-group-addon {
      padding: ${props.theme['$input-padding-y']} ${props.theme['$input-padding-x']};
      margin-bottom: 0; /* Allow use of <label> elements by overriding our default margin-bottom */
      font-size: ${props.theme['$font-size-base']};
      font-weight: normal;
      line-height: ${props.theme['$input-line-height']};
      color: ${props.theme['$input-color']};
      text-align: center;
      background-color: ${props.theme['$input-group-addon-bg']};
      border: ${props.theme['$input-btn-border-width']} solid ${props.theme['$input-group-addon-border-color']};
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$input-border-radius']
      )}
   
      /* Sizing */
      &.form-control-sm {
        padding: ${props.theme['$input-padding-y-sm']} ${props.theme['$input-padding-x-sm']};
        font-size: ${props.theme['$font-size-sm']};
        ${borderRadius(
          props.theme['$enable-rounded'],
          props.theme['$input-border-radius-sm']
        )}
      }
      &.form-control-lg {
        padding: ${props.theme['$input-padding-y-lg']} ${props.theme['$input-padding-x-lg']};
        font-size: ${props.theme['$font-size-lg']};
        ${borderRadius(
          props.theme['$enable-rounded'],
          props.theme['$input-border-radius-lg']
        )}
      }
   
      /* scss-lint:disable QualifyingElement
      Nuke default margins from checkboxes and radios to vertically center within.
      */
      input[type="radio"],
      input[type="checkbox"] {
        margin-top: 0;
      }
      /* scss-lint:enable QualifyingElement */
    }
   
   
    /*
     Reset rounded corners
    */
   
    &.input-group .form-control:not(:last-child),
    .input-group-addon:not(:last-child),
    .input-group-btn:not(:last-child) > .btn,
    .input-group-btn:not(:last-child) > .btn-group > .btn,
    .input-group-btn:not(:last-child) > .dropdown-toggle,
    .input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),
    .input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {
      ${borderRightRadius(
        props.theme['$enable-rounded'],
        '0'
      )}
    }
    & .input-group-addon:not(:last-child) {
      border-right: 0;
    }
    &.input-group .form-control:not(:first-child),
    .input-group-addon:not(:first-child),
    .input-group-btn:not(:first-child) > .btn,
    .input-group-btn:not(:first-child) > .btn-group > .btn,
    .input-group-btn:not(:first-child) > .dropdown-toggle,
    .input-group-btn:not(:last-child) > .btn:not(:first-child),
    .input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {
      ${borderLeftRadius(
        props.theme['$enable-rounded'],
        '0'
      )}
    }
    &.form-control + .input-group-addon:not(:first-child) {
      border-left: 0;
    }
   
    /*
     Button input groups
    */
   
    & .input-group-btn {
      position: relative;
      /* Jankily prevent input button groups from wrapping with 'white-space' and
      'font-size' in combination with 'inline-block' on buttons.
      */
      font-size: 0;
      white-space: nowrap;
   
      /* Negative margin for spacing, position for bringing hovered/focused/actived
      element above the siblings.
      */
      > .btn {
        position: relative;
        + .btn {
          margin-left: -${props.theme['$input-btn-border-width']};
        }
        /* Bring the "active" button to the front */
        ${hoverFocusActive(
          props.theme['$enable-hover-media-query'],
          'z-index: 3;'
        )}
      }
   
      /* Negative margin to only have a single, shared border between the two */
      &:not(:last-child) {
        > .btn,
        > .btn-group {
          margin-right: -${props.theme['$input-btn-border-width']};
        }
      }
      &:not(:first-child) {
        > .btn,
        > .btn-group {
          z-index: 2;
          margin-left: -${props.theme['$input-btn-border-width']};
          /* Because specificity */
        ${hoverFocusActive(
          props.theme['$enable-hover-media-query'],
          'z-index: 3;'
        )}
        }
      }
    }

  `}
`;

InputGroup.defaultProps = defaultProps;

export default InputGroup;
