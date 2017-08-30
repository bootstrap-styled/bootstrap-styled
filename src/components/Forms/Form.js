/* eslint-disable quote-props, dot-notation */
/**
 * Form Component test
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import { unitUtils } from 'math-utils';
import omit from 'lodash.omit';
import bsTheme from '../../theme';
import { mapToCssModules } from '../../utils/tools';
import { borderRadius } from '../../styled/mixins/border-radius';
import { formControl, formControlValidation } from '../../styled/mixins/forms';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import { customForms } from '../../styled/mixins/customForms';
import { makeRow } from '../../styled/mixins/grid';

const defaultProps = {
  theme: bsTheme,
  tag: 'form',
};

const selectBorderWidth = unitUtils.math.multiply(bsTheme['$border-width'], 2);

class FormUnstyled extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.node,
    theme: PropTypes.object,
    inline: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      cssModule,
      inline,
      tag: Tag,
      getRef,
      ...rest
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      inline ? 'form-inline' : false
    ), cssModule);

    return (
      <Tag ref={getRef} className={classes} {...rest} />
    );
  }
}

const Form = styled(FormUnstyled)` 
  ${(props) => `
    /*
     Textual form controls
    */

    ${formControl(
      props.theme['$enable-rounded'],
      props.theme['$enable-transitions'],
      props.theme['$enable-shadows'],
      props.theme['$input-height'],
      props.theme['$input-padding-y'],
      props.theme['$input-padding-x'],
      props.theme['$font-size-base'],
      props.theme['$input-line-height'],
      props.theme['$input-color'],
      props.theme['$input-bg'],
      props.theme['$input-border-radius'],
      props.theme['$input-btn-border-width'],
      props.theme['$input-border-color'],
      props.theme['$input-transition'],
      props.theme['$input-box-shadow'],
      props.theme['$input-color-focus'],
      props.theme['$input-bg-focus'],
      props.theme['$input-border-focus'],
      props.theme['$input-box-shadow-focus'],
      props.theme['$input-color-placeholder'],
      props.theme['$input-bg-disabled'],
      props.theme['$cursor-disabled'],
    )}
    
    select.form-control {
      &:not([size]):not([multiple]) {
        height: calc(${props.theme['$input-height']} + ${selectBorderWidth});
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
    & .form-control-file,
    .form-control-range {
      display: block;
    }

    /*
     Labels
    */

    /* For use with horizontal and inline forms, when you need the label text to */
    /* align with the form controls. */
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
      margin-bottom: 0; /* match inputs if this class comes on inputs with default margins */
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

     Build on .form-control with modifier classes to decrease or increase the
     height and font-size of form controls.

     The .form-group-* form-control variations are sadly duplicated to avoid the
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


    /* Form groups Designed to help with the organization and spacing of vertical forms. For horizontal forms, use the predefined grid classes. */

    &.form-group,
     & .form-group {
      margin-bottom: ${props.theme['$form-group-margin-bottom']};
    }

    & .form-text {
      display: block;
      margin-top: ${props.theme['$form-text-margin-top']}
    }


    /* Checkboxes and radios Indent the labels to position radios/checkboxes as hanging controls. */

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
      margin-bottom: 0; /* Override default <label> bottom margin */
      cursor: pointer;
    }

    & .form-check-input {
      position: absolute;
      margin-top: ${props.theme['$form-check-input-margin-y']};
      margin-left: -${props.theme['$form-check-input-gutter']};

      &:only-child {
        position: static;
      }
    }

    /* Radios and checkboxes on same line */
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


    /* Form control feedback states Apply contextual and semantic states to individual form controls. */
    & .form-control-feedback {
      margin-top: ${props.theme['$form-feedback-margin-top']};
    }

    & .form-control-success,
    & .form-control-warning,
    & .form-control-danger {
      padding-right: ${unitUtils.math.multiply(props.theme['$input-padding-x'], 3)};
      background-repeat: no-repeat;
      background-position: center right ${unitUtils.math.divide(props.theme['$input-height'], 4)};
      background-size: ${unitUtils.math.divide(props.theme['$input-height'], 2)} ${unitUtils.math.divide(props.theme['$input-height'], 2)};
    }

    /* Form validation states */
    & .has-success {
      ${formControlValidation(props.theme['$enable-shadows'], props.theme['$brand-success'], props.theme['$box-shadow'])}

      .form-control-success {
        background-image: ${props.theme['$form-icon-success']};
      }
    }

    & .has-warning {
      ${formControlValidation(props.theme['$enable-shadows'], props.theme['$brand-warning'], props.theme['$box-shadow'])}

      .form-control-warning {
        background-image: ${props.theme['$form-icon-warning']};
      }
    }

    & .has-danger {
      ${formControlValidation(props.theme['$enable-shadows'], props.theme['$brand-danger'], props.theme['$box-shadow'])}

      .form-control-danger {
        background-image: ${props.theme['$form-icon-danger']};
      }
    }


    /* Inline forms

     Make forms appear inline(-block) by adding the .form-inline class. Inline
     forms begin stacked on extra small (mobile) devices and then go inline when
     viewports reach <768px.

     Requires wrapping inputs and labels with .form-group for proper display of
     default HTML form controls and our custom form controls (e.g., input groups).
    */

    &.form-inline {
      display: flex;
      flex-flow: row wrap;
      align-items: center; /* Prevent shorter elements from growing to same height as others (e.g., small buttons growing to normal sized button height) */

      & .form-check {
         width: 100%;
      }

      /* Kick in the inline */
      ${mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], `
          label {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0;
          }
          
          /* Inline-block all the things for inline */
          & .form-group {
            display: flex;
            flex: 0 0 auto;
            flex-flow: row wrap;
            margin-bottom: 0;
          }
      
          /* Allow folks to *not* use .form-group */
          & .form-control {
            display: inline-block;
            width: auto; /* Prevent labels from stacking above inputs in .form-group */
            vertical-align: middle;
          }
      
          /* Make static controls behave like regular ones */
          & .form-control-static {
            display: inline-block;
          }
      
          & .input-group {
            width: auto;
          }
          
          & .form-control-label {
             margin-bottom: 0;
            vertical-align: middle;
          }
      
          /* Remove default margin on radios/checkboxes that were used for stacking, and */
          /*  then undo the floating of radios and checkboxes to match. */
          & .form-check {
            display: flex;
            align-items: center;
            justify-content: center;
            width: auto;
            margin-top: 0;
            margin-bottom: 0;
          }
          & .form-check-label {
            padding-left: 0;
          }
          & .form-check-input {
            position: relative;
            margin-left: 0;
            margin-top: 0;
            margin-right: ${props.theme['$form-check-input-margin-x']};
          }
          
          /* Custom form controls */
          & .custom-control {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 0;
          }
          
          & .custom-control-indicator {
            position: static;
            display: inline-block;
            margin-right: ${props.theme['$form-check-input-margin-x']}; /* Flexbox alignment means we lose our HTML space here, so we compensate. */
            vertical-align: text-bottom;
          }
          
          /* Re-override the feedback icon. */
          & .has-feedback .form-control-feedback {
            top: 0;
          }
        `
      )}
    }
    ${customForms(
        props.theme['$enable-rounded'],
        props.theme['$enable-shadows'],
        props.theme['$custom-control-checked-indicator-box-shadow'],
        props.theme['$custom-control-active-indicator-box-shadow'],
        props.theme['$custom-control-indicator-box-shadow'],
        props.theme['$custom-checkbox-indeterminate-box-shadow'],
        props.theme['$custom-select-focus-box-shadow'],
        props.theme['$custom-file-focus-box-shadow'],
        props.theme['$custom-file-box-shadow'],
        props.theme['$custom-select-border-radius'],
        props.theme['$custom-file-border-radius'],
        props.theme['$custom-checkbox-radius'],
        props.theme['$input-bg'],
        props.theme['$custom-select-line-height'],
        props.theme['$line-height-base'],
        props.theme['$custom-control-gutter'],
        props.theme['$custom-control-spacer-x'],
        props.theme['$custom-control-checked-indicator-color'],
        props.theme['$custom-control-checked-indicator-bg'],
        props.theme['$custom-control-focus-indicator-box-shadow'],
        props.theme['$custom-control-active-indicator-color'],
        props.theme['$custom-control-active-indicator-bg'],
        props.theme['$custom-control-disabled-cursor'],
        props.theme['$custom-control-disabled-indicator-bg'],
        props.theme['$custom-control-disabled-description-color'],
        props.theme['$custom-control-indicator-size'],
        props.theme['$custom-control-indicator-bg'],
        props.theme['$custom-control-indicator-bg-size'],
        props.theme['$custom-checkbox-checked-icon'],
        props.theme['$custom-checkbox-indeterminate-bg'],
        props.theme['$custom-checkbox-indeterminate-icon'],
        props.theme['$custom-radio-radius'],
        props.theme['$custom-radio-checked-icon'],
        props.theme['$custom-control-spacer-y'],
        props.theme['$border-width'],
        props.theme['$input-height'],
        props.theme['$custom-select-padding-y'],
        props.theme['$custom-select-padding-x'],
        props.theme['$custom-select-indicator-padding'],
        props.theme['$custom-select-color'],
        props.theme['$custom-select-bg'],
        props.theme['$custom-select-indicator'],
        props.theme['$custom-select-bg-size'],
        props.theme['$custom-select-border-width'],
        props.theme['$custom-select-border-color'],
        props.theme['$custom-select-focus-border-color'],
        props.theme['$input-color'],
        props.theme['$custom-select-disabled-color'],
        props.theme['$cursor-disabled'],
        props.theme['$custom-select-disabled-bg'],
        props.theme['$custom-select-sm-font-size'],
        props.theme['$custom-file-width'],
        props.theme['$custom-file-height'],
        props.theme['$custom-file-padding-x'],
        props.theme['$custom-file-padding-y'],
        props.theme['$custom-file-line-height'],
        props.theme['$custom-file-color'],
        props.theme['$custom-file-bg'],
        props.theme['$custom-file-border-width'],
        props.theme['$custom-file-border-color'],
        props.theme['$custom-file-button-color'],
        props.theme['$custom-file-button-bg'],
        props.theme['$custom-file-text'],
      )}
    & .row {
      ${makeRow(
        props.theme['$enable-grid-classes'],
        props.theme['$grid-gutter-widths'],
      )}
    }
  `}
`;

Form.defaultProps = defaultProps;

export default Form;
