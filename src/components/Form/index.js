/* eslint-disable quote-props, dot-notation */
/**
 * Form Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';
import { boxShadow } from '../../styled/mixins/box-shadow';
import { borderRadius } from '../../styled/mixins/border-radius';
import { transition } from '../../styled/mixins/transition';
import { formControlFocus, formControlValidation } from '../../styled/mixins/forms';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import { makeRow } from '../../styled/mixins/grid';
import { makeGridColumns } from '../../styled/mixins/grid-framework';
import { math } from '../../styled/mixins/unit';

const defaultProps = { theme };

class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    action: PropTypes.string,
    onSubmit: PropTypes.func,
    className: PropTypes.string,
  }

  render() {
    const { children, className, action, onSubmit } = this.props;

    return (
      <form
        className={className}
        action={action}
        onSubmit={onSubmit}
      >
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
      padding-top: ${props.theme['$input-padding-y']};
      padding-bottom: ${props.theme['$input-padding-y']};
      margin-bottom: 0; /* Override the '<label>' default */
    }
    
    & .col-form-label-lg {
      padding-top: ${props.theme['$input-padding-y-lg']};
      padding-bottom: ${props.theme['$input-padding-y-lg']};
      font-size: ${props.theme['$font-size-lg']};
    }
    
    & .col-form-label-sm {
      padding-top: ${props.theme['$input-padding-y-sm']};
      padding-bottom: ${props.theme['$input-padding-y-sm']};
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
      border-width: 1px 0;
    
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
      margin-top: ${math.multiply(props.theme['$spacer'], 0.25)}
    }
    
    
    /* Checkboxes and radios
     Indent the labels to position radios/checkboxes as hanging controls.
    */
    
    &.form-check,
    & .form-check {
      position: relative;
      display: block;
      margin-bottom: ${math.multiply(props.theme['$spacer'], 0.75)};
    
      /* Move up sibling radios or checkboxes for tighter spacing */
      + .form-check {
        margin-top: -.25rem;
      }
    
      &.disabled {
        .form-check-label {
          color: ${props.theme['$text-muted']};
          cursor: ${props.theme['$cursor-disabled']};
        }
      }
    }
    
    & .form-check-label {
      padding-left: 1.25rem;
      margin-bottom: 0; /* Override default '<label>' bottom margin */
      cursor: pointer;
    }
    
    & .form-check-input {
      position: absolute;
      margin-top: .25rem;
      margin-left: -1.25rem;
    
      &:only-child {
        position: static;
      }
    }
    
    /*  Radios and checkboxes on same line */
    & .form-check-inline {
      position: relative;
      display: inline-block;
      padding-left: 1.25rem;
      margin-bottom: 0; /* Override default '<label>' bottom margin */
      vertical-align: middle;
      cursor: pointer;
    
      + .form-check-inline {
        margin-left: .75rem;
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
      margin-top: ${math.multiply(props.theme['$spacer'], 0.25)};
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
    
      /* Kick in the inline */
      ${mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], `
        /* Inline-block all the things for 'inline' */
        .form-group {
          display: inline-block;
          margin-bottom: 0;
          vertical-align: middle;
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
          display: inline-table;
          width: auto;
          vertical-align: middle;
    
          .input-group-addon,
          .input-group-btn,
          .form-control {
            width: auto;
          }
        }
    
        /* Input groups need that 100% width though */
        .input-group > .form-control {
          width: 100%;
        }
    
        .form-control-label {
          margin-bottom: 0;
          vertical-align: middle;
        }
    
        /* Remove default margin on radios/checkboxes that were used for stacking, and */
        /*  then undo the floating of radios and checkboxes to match. */
        .form-check {
          display: inline-block;
          margin-top: 0;
          margin-bottom: 0;
          vertical-align: middle;
        }
        .form-check-label {
          padding-left: 0;
        }
        .form-check-input {
          position: relative;
          margin-left: 0;
        }
    
        /* Re-override the feedback icon. */
        .has-feedback .form-control-feedback {
          top: 0;
        }
      `)}
    }
    

    /* Embedded icons from Open Iconic.
     Released under MIT and copyright 2014 Waybury.
     https://useiconic.com/open
    */
    
    /* 
    Checkboxes and radios
    Base class takes care of all the key behavioral aspects.
    */
    
    & .custom-control {
      position: relative;
      display: inline-block;
      padding-left: ${props.theme['$custom-control-gutter']};
      cursor: pointer;
    
      + .custom-control {
        margin-left: ${props.theme['$custom-control-spacer-x']};
      }
    }
    
    & .custom-control-input {
      position: absolute;
      z-index: -1; /* Put the input behind the label so it doesn't overlay text */
      opacity: 0;
    
      &:checked ~ .custom-control-indicator {
        color: ${props.theme['$custom-control-checked-indicator-color']};
        background-color: ${props.theme['$custom-control-checked-indicator-bg']};
        ${boxShadow(
          props.theme['$enable-shadows'],
          props.theme['$custom-control-checked-indicator-box-shadow']
        )}
      }
    
      &:focus ~ .custom-control-indicator {
        /* the mixin is not used here to make sure there is feedback */
        box-shadow: ${props.theme['$custom-control-focus-indicator-box-shadow']};
      }
    
      &:active ~ .custom-control-indicator {
        color: ${props.theme['$custom-control-active-indicator-color']};
        background-color: ${props.theme['$custom-control-active-indicator-bg']};
        ${boxShadow(
          props.theme['$enable-shadows'],
          props.theme['$custom-control-active-indicator-box-shadow']
        )}
      }
    
      &:disabled {
        ~ .custom-control-indicator {
          cursor: ${props.theme['$custom-control-disabled-cursor']};
          background-color: ${props.theme['$custom-control-disabled-indicator-bg']};
        }
    
        ~ .custom-control-description {
          color: ${props.theme['$custom-control-disabled-description-color']};
          cursor: ${props.theme['$custom-control-disabled-cursor']};
        }
      }
    }
    
    /* Custom indicator
    
    Generates a shadow element to create our makeshift checkbox/radio background.
    */
    
    & .custom-control-indicator {
      position: absolute;
      top: .25rem;
      left: 0;
      display: block;
      width: ${props.theme['$custom-control-indicator-size']};
      height: ${props.theme['$custom-control-indicator-size']};
      pointer-events: none;
      user-select: none;
      background-color: ${props.theme['$custom-control-indicator-bg']};
      background-repeat: no-repeat;
      background-position: center center;
      background-size: ${props.theme['$custom-control-indicator-bg-size']};
      ${boxShadow(
        props.theme['$enable-shadows'],
        props.theme['$custom-control-indicator-box-shadow']
      )}
    }
    
    /* Checkboxes
    
    Tweak just a few things for checkboxes.
    */
    
    & .custom-checkbox {
      .custom-control-indicator {
        ${borderRadius(
          props.theme['$enable-rounded'],
          props.theme['$custom-checkbox-radius']
        )}
      }
    
      .custom-control-input:checked ~ .custom-control-indicator {
        background-image: ${props.theme['$custom-checkbox-checked-icon']};
      }
    
      .custom-control-input:indeterminate ~ .custom-control-indicator {
        background-color: ${props.theme['$custom-checkbox-indeterminate-bg']};
        background-image: ${props.theme['$custom-checkbox-indeterminate-icon']};
        ${boxShadow(
          props.theme['$enable-shadows'],
          props.theme['$custom-checkbox-indeterminate-box-shadow']
        )}
      }
    }
    
    /* Radios
    
    Tweak just a few things for radios.
    */
    & .custom-radio {
      .custom-control-indicator {
        border-radius: ${props.theme['$custom-radio-radius']};
      }
    
      .custom-control-input:checked ~ .custom-control-indicator {
        background-image: ${props.theme['$custom-radio-checked-icon']};
      }
    }
    
    
    /* Layout options
    
     By default radios and checkboxes are 'inline-block' with no additional spacing
     set. Use these optional classes to tweak the layout.
    */
    & .custom-controls-stacked {
      .custom-control {
        float: left;
        clear: left;
    
        + .custom-control {
          margin-left: 0;
        }
      }
    }
    
    
    /* Select
    
     Replaces the browser default select with a custom one, mostly pulled from
     http://primercss.io.
    
     Includes IE9-specific hacks (noted by ' \9').
    */
    
    & .custom-select {
      display: inline-block;
      max-width: 100%;
      height: calc(#{$input-height} - #{$select-border-width});
      padding: ${props.theme['$custom-select-padding-y']} (${props.theme['$custom-select-padding-x']} + ${props.theme['$custom-select-indicator-padding']}) ${props.theme['$custom-select-padding-y']} ${props.theme['$custom-select-padding-x']};
      padding-right: ${props.theme['$custom-select-padding-x']} /*\9 */;
      color: ${props.theme['$custom-select-color']};
      vertical-align: middle;
      background: ${props.theme['$custom-select-bg']} ${props.theme['$custom-select-indicator']} no-repeat right ${props.theme['$custom-select-padding-x']} center;
      background-image: none /* \9 */; 
      background-size: ${props.theme['$custom-select-bg-size']};
      border: ${props.theme['$custom-select-border-width']} solid ${props.theme['$custom-select-border-color']};
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$custom-select-border-radius']
      )}
      /* Use vendor prefixes as 'appearance' isn't part of the CSS spec. */
      -moz-appearance: none;
      -webkit-appearance: none;
    
      &:focus {
        border-color: ${props.theme['$custom-select-focus-border-color']};
        outline: none;
        ${boxShadow(
          props.theme['$enable-shadows'],
          props.theme['$custom-select-focus-box-shadow']
        )}
    
        &::-ms-value {
          // For visual consistency with other platforms/browsers,
          // supress the default white text on blue background highlight given to
          // the selected option text when the (still closed) <select> receives focus
          // in IE and (under certain conditions) Edge.
          // See https://github.com/twbs/bootstrap/issues/19398.
          color: ${props.theme['$input-color']};
          background-color: ${props.theme['$input-bg']};
        }
      }
    
      &:disabled {
        color: ${props.theme['$custom-select-disabled-color']};
        cursor: ${props.theme['$cursor-disabled']};
        background-color: ${props.theme['$custom-select-disabled-bg']};
      }
    
      /* Hides the default caret in IE11 */
      &::-ms-expand {
        opacity: 0;
      }
    }
    
    & .custom-select-sm {
      padding-top: ${props.theme['$custom-select-padding-y']};
      padding-bottom: ${props.theme['$custom-select-padding-y']};
      font-size: ${props.theme['$custom-select-sm-font-size']};
    
      /* &:not([multiple]) {
         height: 26px;
         min-height: 26px;
       }
       */
    }
    
    
    /* File
    Custom file input.
    */ 
    
    & .custom-file {
      position: relative;
      display: inline-block;
      max-width: 100%;
      height: ${props.theme['$custom-file-height']};
      cursor: pointer;
    }
    
    & .custom-file-input {
      min-width: ${props.theme['$custom-file-width']};
      max-width: 100%;
      margin: 0;
      filter: alpha(opacity = 0);
      opacity: 0;
    
      &:focus ~ .custom-file-control {
        ${boxShadow(
          props.theme['$enable-shadows'],
          props.theme['$custom-file-focus-box-shadow']
        )}
      }
    }
    
    & .custom-file-control {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: 5;
      height: ${props.theme['$custom-file-height']};
      padding: ${props.theme['$custom-file-padding-x']} ${props.theme['$custom-file-padding-y']};
      line-height: ${props.theme['$custom-file-line-height']};
      color: ${props.theme['$custom-file-color']};
      user-select: none;
      background-color: ${props.theme['$custom-file-bg']};
      border: ${props.theme['$custom-file-border-width']} solid ${props.theme['$custom-file-border-color']};
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$custom-file-border-radius']
      )}
      ${boxShadow(
        props.theme['$enable-shadows'],
        props.theme['$custom-file-box-shadow']
      )}
    
      /* @each $lang, $text in map-get($custom-file-text, placeholder) {
        &:lang(#{$lang})::after {
          content: $text;
        }
      }
      */
    
      &::before {
        position: absolute;
        top: -${props.theme['$custom-file-border-width']};
        right: -${props.theme['$custom-file-border-width']};
        bottom: -${props.theme['$custom-file-border-width']};
        z-index: 6;
        display: block;
        height: ${props.theme['$custom-file-height']};
        padding: ${props.theme['$custom-file-padding-x']} ${props.theme['$custom-file-padding-y']};
        line-height: ${props.theme['$custom-file-line-height']};
        color: ${props.theme['$custom-file-button-color']};
        background-color: ${props.theme['$custom-file-button-bg']};
        border: ${props.theme['$custom-file-border-width']} solid ${props.theme['$custom-file-border-color']};
        ${borderRadius(
          props.theme['$enable-rounded'],
          `
            0 ${props.theme['$custom-file-border-radius']} ${props.theme['$custom-file-border-radius']} 0
          `
        )}
      }
    
      /* @each $lang, $text in map-get($custom-file-text, button-label) {
        &:lang(#{$lang})::before {
          content: $text;
        }
      }
      */
    }

    &.row,
    & .row{
      ${makeRow(
        props.theme['$enable-flex'],
        props.theme['$enable-grid-classes'],
        props.theme['$grid-gutter-widths']
      )}
    }
    ${makeGridColumns(
      props.theme['$enable-flex'],
      props.theme['$enable-grid-classes'],
      props.theme['$grid-columns'],
      props.theme['$grid-gutter-widths'],
      props.theme['$grid-breakpoints']
    )}
    
  `}
`;

Form.defaultProps = defaultProps;

export default Form;
