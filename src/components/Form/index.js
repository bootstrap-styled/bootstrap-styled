/* eslint-disable quote-props, dot-notation */
/**
 * Form Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import themeBs from '../../config';
import { boxShadow } from '../../styled/mixins/box-shadow';
import { borderRadius } from '../../styled/mixins/border-radius';
import { transition } from '../../styled/mixins/transition';
import { formControlFocus, formControlValidation } from '../../styled/mixins/forms';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import { math } from '../../styled/mixins/unit';

const defaultProps = { theme: themeBs };

class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { theme , children, ...rest } = this.props; // eslint-disable-line

    return (
      <form {...rest}>
        {children}
      </form>
    );
  }
}

// eslint-disable-next-line no-class-assign
Form = styled(Form)` 
  ${(props) => `
    /*
     Textual form controls
    */ 
    &.form {
    
      .form {
      
      }
      
    }
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
      ${props.theme['$enable-rounded'] ? `border-radius: ${props.theme['$input-border-radius']}` : 'border-radius: 0;'}
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
    
    select.form-control {
      &:not([size]):not([multiple]) {
        height: calc(${props.theme['$input-height']} - ${props.theme['$border-width']});
      }
    
      &:focus::-ms-value {
        /* Suppress the nested default white text on blue background highlight given to
         the selected option text when the (still closed) <select> receives focus
         in IE and (under certain conditions) Edge, as it looks bad and cannot be made to
         match the appearance of the native widget.
         See https://github.com/twbs/bootstrap/issues/19398.
         */
        color: ${props.theme['$input-color']};
        background-color: ${props.theme['$input-bg']};
      }
    }
    
    /* Make file inputs better match text inputs by forcing them to new lines. */
    .form-control-file,
    .form-control-range {
      display: block;
    }
    
    
    /*
     Labels
    */
    
    /* For use with horizontal and inline forms, when you need the label text to */
    /*  align with the form controls. */
    & .col-form-label {
      padding-top: calc(${props.theme['$input-padding-y']} - ${props.theme['$input-btn-border-width']} *2);
      padding-bottom: calc(${props.theme['$input-padding-y']} - ${props.theme['$input-btn-border-width']} *2);
      margin-bottom: 0; /* Override the '<label>' default */
    }
    
    & .col-form-label-lg {
      padding-top: calc(${props.theme['$input-padding-y-lg']} - ${props.theme['$input-btn-border-width']} *2);
      padding-bottom: calc(${props.theme['$input-padding-y-lg']} - ${props.theme['$input-btn-border-width']} *2);
      font-size: ${props.theme['$font-size-lg']};
    }
    
    & .col-form-label-sm {
      padding-top: calc(${props.theme['$input-padding-y-sm']} - ${props.theme['$input-btn-border-width']} *2);
      padding-bottom: calc(${props.theme['$input-padding-y-sm']} - ${props.theme['$input-btn-border-width']} *2);
      font-size: ${props.theme['$font-size-sm']};
    }
    
    /*
     Legends
    */
    
    /* For use with horizontal and inline forms, when you need the legend text to */
    /* be the same size as regular labels, and to align with the form controls. */
    & .col-form-legend {
      padding-top: ${props.theme['$input-padding-y']};
      padding-bottom: ${props.theme['$input-padding-y']};
      margin-bottom: 0;
      font-size: ${props.theme['$font-size-base']};
    }
    
    
    /* Static form control text
    
     Apply class to an element to make any string of text align with labels in a
     horizontal form layout.
    */
    
    & .form-control-static {
      padding-top: ${props.theme['$input-padding-y']};
      padding-bottom: ${props.theme['$input-padding-y']};
      line-height: ${props.theme['$input-line-height']};
      border: solid transparent;
      border-width: ${props.theme['$input-btn-border-width']} 0;
    
      &.form-control-sm,
      &.form-control-lg {
        padding-right: 0;
        padding-left: 0;
      }
    }
    
    
    /* Form control sizing
    
     Build on '.form-control' with modifier classes to decrease or increase the
     height and font-size of form controls.
    
     The '.form-group-* form-control' variations are sadly duplicated to avoid the
     issue documented in https://github.com/twbs/bootstrap/issues/15074.
    */
    
    & .form-control-sm {
      padding: ${props.theme['$input-padding-y-sm']} ${props.theme['$input-padding-x-sm']};
      font-size: ${props.theme['$font-size-sm']};
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$input-border-radius-sm']
      )}
    }
    
    select.form-control-sm {
      &:not([size]):not([multiple]) {
        height: ${props.theme['$input-height-sm']};
      }
    }
    
    & .form-control-lg {
      padding: ${props.theme['$input-padding-y-lg']} ${props.theme['$input-padding-x-lg']};
      font-size: ${props.theme['$font-size-lg']};
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$input-border-radius-lg']
      )}
    }
    
    select.form-control-lg {
      &:not([size]):not([multiple]) {
        height: ${props.theme['$input-height-lg']};
      }
    }
    
    
    /* Form groups
     Designed to help with the organization and spacing of vertical forms. For
     horizontal forms, use the predefined grid classes.
    */
    
    &.form-group,
     & .form-group {
      margin-bottom: ${props.theme['$form-group-margin-bottom']};
    }
    
    & .form-text {
      display: block;
      margin-top: ${props.theme['$form-text-margin-top']}
    }
    
    
    /* Checkboxes and radios
     Indent the labels to position radios/checkboxes as hanging controls.
    */
    
    &.form-check,
    & .form-check {
      position: relative;
      display: block;
      margin-bottom: ${props.theme['$form-check-margin-bottom']};
    
      &.disabled {
        .form-check-label {
          color: ${props.theme['$text-muted']};
          cursor: ${props.theme['$cursor-disabled']};
        }
      }
    }
    
    & .form-check-label {
      padding-left: ${props.theme['$form-check-input-gutter']};
      margin-bottom: 0; /* Override default '<label>' bottom margin */
      cursor: pointer;
    }
    
    & .form-check-input {
      position: absolute;
      margin-top: .${props.theme['$form-check-input-margin-y']};
      margin-left: ${props.theme['$form-check-input-gutter']};
    
      &:only-child {
        position: static;
      }
    }
    
    /*  Radios and checkboxes on same line */
    & .form-check-inline {
      display: inline-block;    
      .form-check-label {
        vertical-align: middle;
      }
      
      + .form-check-inline {
        margin-left: ${props.theme['$form-check-inline-margin-x']};
      }
    
      &.disabled {
        color: ${props.theme['$text-muted']};
        cursor: ${props.theme['$cursor-disabled']};
      }
    }
    
    
    /* Form control feedback states
     Apply contextual and semantic states to individual form controls.
    */
    & .form-control-feedback {
      margin-top: ${props.theme['$form-feedback-margin-top']};
    }
    
    & .form-control-success,
    & .form-control-warning,
    & .form-control-danger {
      padding-right: ${math.multiply(props.theme['$input-padding-x'], 3)};
      background-repeat: no-repeat;
      background-position: center right ${math.divide(props.theme['$input-height'], 4)};
      background-size: ${math.divide(props.theme['$input-height'], 2)} ${math.divide(props.theme['$input-height'], 2)};
    }
    
    /* Form validation states */
    &.has-success {
      ${formControlValidation(props.theme['$enable-shadows'], props.theme['$brand-success'], props.theme['$box-shadow'])}
    
      .form-control-success {
        background-image: ${props.theme['$form-icon-success']};
      }
    }
    
    &.has-warning {
      ${formControlValidation(props.theme['$enable-shadows'], props.theme['$brand-warning'], props.theme['$box-shadow'])}
          
      .form-control-warning {
        background-image: ${props.theme['$form-icon-warning']};
      }
    }
    
    &.has-danger {
      ${formControlValidation(props.theme['$enable-shadows'], props.theme['$brand-danger'], props.theme['$box-shadow'])}
    
      .form-control-danger {
        background-image: ${props.theme['$form-icon-danger']};
      }
    }
    
    
    /* Inline forms
    
     Make forms appear inline(-block) by adding the '.form-inline' class. Inline
     forms begin stacked on extra small (mobile) devices and then go inline when
     viewports reach <768px.
    
     Requires wrapping inputs and labels with '.form-group' for proper display of
     default HTML form controls and our custom form controls (e.g., input groups).
    */
    
    &.form-inline {
      display: flex;
      flex-flow: row-wrap;
        .form-check {
          width: 100%;
        }
    
      /* Kick in the inline */
      ${mediaBreakpointUp('sm', props.theme['$grid-breakpoints'],
        `
          .label {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0;
          }
          
          /* Inline-block all the things for 'inline' */
          .form-group {
            display: flex;
            flex: 0 0 auto;
            flex-flow: row wrap;
            margin-bottom: 0;
          }
      
          /* Allow folks to *not* use '.form-group' */
          .form-control {
            display: inline-block;
            width: auto; /* Prevent labels from stacking above inputs in '.form-group' */
            vertical-align: middle;
          }
      
          /* Make static controls behave like regular ones */
          .form-control-static {
            display: inline-block;
          }
      
          .input-group {
            width: auto;
          }
          
          .form-control-label {
             margin-bottom: 0;
            vertical-align: middle;
          }
      
          /* Remove default margin on radios/checkboxes that were used for stacking, and */
          /*  then undo the floating of radios and checkboxes to match. */
          .form-check {
            display: flex;
            align-items: center;
            justify-content: center;
            width: auto;
            margin-top: 0;
            margin-bottom: 0;
          }
          .form-check-label {
            padding-left: 0;
          }
          .form-check-input {
            position: relative;
            margin-left: 0;
            margin-top: 0;
            ${props.theme['$form-feedback-margin-top']}
          }
          
          /* Custom form controls */
          .custom-control {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 0;
          }
          
          .custom-control-indicator {
            position: static;
            display: inline-block;
            margin-right: ${props.theme['$form-check-input-margin-x']}; /* Flexbox alignment means we lose our HTML space here, so we compensate. */
            vertical-align: text-bottom;
          }
          
          /* Re-override the feedback icon. */
          .has-feedback .form-control-feedback {
            top: 0;
          }

        `
      )}
    }
 
  `}
`;

Form.defaultProps = defaultProps;

export default Form;
