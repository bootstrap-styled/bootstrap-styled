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
import unitUtils from 'bootstrap-styled-utils/lib/unitUtils';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { formControl, formControlValidation } from 'bootstrap-styled-mixins/lib/forms';
import { mediaBreakpointUp } from 'bootstrap-styled-mixins/lib/breakpoints';
import { customForms } from 'bootstrap-styled-mixins/lib/customForms';
import { makeRow } from 'bootstrap-styled-mixins/lib/grid';


const defaultProps = {
  tag: 'form',
  theme: {
    '$brand-primary': '#0275d8',
    '$brand-success': '#5cb85c',
    '$brand-info': '#5bc0de',
    '$brand-warning': '#f0ad4e',
    '$brand-danger': '#d9534f',
    '$gray-dark': '#292b2c',
    '$gray': '#464a4c',
    '$gray-light': '#636c72',
    '$gray-lighter': '#eceeef',
    '$gray-lightest': '#f7f7f9',
    '$border-width': '1px',
    '$spacer': '1rem',
    '$spacer-y': '1rem',
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    '$grid-gutter-width-base': '30px',
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px',
    },
    '$font-size-base': '1rem',
    '$font-size-lg': '1.25rem',
    '$font-size-sm': '.875rem',
    '$font-size-xs': '.75rem',
    '$text-muted': '#636c72',
    '$line-height-base': '1.5',
    '$line-height-lg': '1.6',
    '$line-height-sm': '1.3',
    '$border-radius': '.25rem',
    '$border-radius-lg': '.3rem',
    '$border-radius-sm': '.2rem',
    '$input-padding-x': '.75rem',
    '$input-padding-y': '.5rem',
    '$input-line-height': '1.25',
    '$input-bg': '#fff',
    '$input-bg-disabled': '#eceeef',
    '$input-color': '#464a4c',
    '$input-border-color': 'rgba(0, 0, 0, 0.15)',
    '$input-btn-border-width': '1px',
    '$input-box-shadow': 'rgba(0, 0, 0, 0.15)',
    '$input-border-radius': '.25rem',
    '$input-border-radius-lg': '.3rem',
    '$input-border-radius-sm': '.2rem',
    '$input-bg-focus': '#fff',
    '$input-border-focus': 'hsl(207.79999999999995, 98.2%, 53.4%)',
    '$input-box-shadow-focus': 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(undefined,.6)',
    '$input-color-focus': '#464a4c',
    '$input-color-placeholder': '#636c72',
    '$input-padding-x-sm': '.5rem',
    '$input-padding-y-sm': '.25rem',
    '$input-padding-x-lg': '1.5rem',
    '$input-padding-y-lg': '.75rem',
    '$input-height': '2.5rem',
    '$input-height-sm': '1.6375rem',
    '$input-height-lg': '3.5rem',
    '$input-transition': '.15s',
    '$form-text-margin-top': '.25rem',
    '$form-feedback-margin-top': '.25rem',
    '$form-check-margin-bottom': '.5rem',
    '$form-check-input-gutter': '1.25rem',
    '$form-check-input-margin-y': '.25rem',
    '$form-check-input-margin-x': '.25rem',
    '$form-check-inline-margin-x': '.75rem',
    '$form-group-margin-bottom': '1rem',
    '$input-group-addon-bg': '#eceeef',
    '$input-group-addon-border-color': 'rgba(0, 0, 0, 0.15)',
    '$cursor-disabled': 'not-allowed',
    '$custom-control-gutter': '1.5rem',
    '$custom-control-spacer-x': '1rem',
    '$custom-control-spacer-y': '.25rem',
    '$custom-control-indicator-size': '1rem',
    '$custom-control-indicator-bg': '#ddd',
    '$custom-control-indicator-bg-size': '50%',
    '$custom-control-indicator-box-shadow': 'inset 0 .25rem .25rem rgba(0, 0, 0, 0.1)',
    '$custom-control-disabled-cursor': 'not-allowed',
    '$custom-control-disabled-indicator-bg': '#eceeef',
    '$custom-control-disabled-description-color': '#636c72',
    '$custom-control-checked-indicator-color': '#fff',
    '$custom-control-checked-indicator-bg': '#0275d8',
    '$custom-control-checked-indicator-box-shadow': 'none',
    '$custom-control-focus-indicator-box-shadow': '0 0 0 1px #fff, 0 0 0 3px #0275d8',
    '$custom-control-active-indicator-color': '#fff',
    '$custom-control-active-indicator-bg': 'hsl(207.79999999999995, 98.2%, 57.7%)',
    '$custom-control-active-indicator-box-shadow': 'none',
    '$custom-checkbox-radius': '.25rem',
    '$custom-checkbox-checked-icon': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="#fff" d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/%3E%3C/svg%3E\')',
    '$custom-checkbox-indeterminate-bg': '#0275d8',
    '$custom-checkbox-indeterminate-indicator-color': '#fff',
    '$custom-checkbox-indeterminate-icon': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4"%3E%3Cpath stroke="undefined" d="M0 2h4"/%3E%3C/svg%3E\')',
    '$custom-checkbox-indeterminate-box-shadow': 'none',
    '$custom-radio-radius': '50%',
    '$custom-radio-checked-icon': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 8 8"%3E%3Ccircle r="3" fill="#fff"/%3E%3C/svg%3E\')',
    '$custom-select-padding-x': '.75rem',
    '$custom-select-padding-y': '.375rem',
    '$custom-select-indicator-padding': '1rem',
    '$custom-select-line-height': '1.25',
    '$custom-select-color': '#464a4c',
    '$custom-select-disabled-color': '#636c72',
    '$custom-select-bg': '#fff',
    '$custom-select-disabled-bg': '#eceeef',
    '$custom-select-bg-size': '8px 10px',
    '$custom-select-indicator-color': '#333',
    '$custom-select-indicator': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="#333" d="M2 0L0 2h4zm0 5L0 3h4z"/%3E%3C/svg%3E\')',
    '$custom-select-border-width': '1px',
    '$custom-select-border-color': 'rgba(0, 0, 0, 0.15)',
    '$custom-select-border-radius': '.25rem',
    '$custom-select-focus-border-color': 'hsl(207.79999999999995, 98.2%, 53.4%)',
    '$custom-select-focus-box-shadow': 'inset 0 1px 2px rgba(0, 0, 0, 0.75), 0 0 5px rgba(hsl(207.79999999999995, 98.2%, 53.4%), .5) ',
    '$custom-select-sm-font-size': '75%',
    '$custom-file-height': '2.5rem',
    '$custom-file-width': '14rem',
    '$custom-file-focus-box-shadow': '0 0 0 .075rem #fff, 0 0 0 .2rem #0275d8',
    '$custom-file-padding-x': '.5rem',
    '$custom-file-padding-y': '1rem',
    '$custom-file-line-height': '1.5',
    '$custom-file-color': '#464a4c',
    '$custom-file-bg': '#fff',
    '$custom-file-border-width': '1px',
    '$custom-file-border-color': 'rgba(0, 0, 0, 0.15)',
    '$custom-file-border-radius': '.25rem',
    '$custom-file-box-shadow': 'inset 0 .2rem .4rem rgba(0, 0, 0, 0.05)',
    '$custom-file-button-color': '#464a4c',
    '$custom-file-button-bg': '#eceeef',
    '$custom-file-text': {
      placeholder: {
        en: 'Choose file...',
      },
      'button-label': {
        en: 'Browse',
      },
    },
    '$form-icon-success-color': '#5cb85c',
    '$form-icon-success': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="undefined" d="M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/%3E%3C/svg%3E\')',
    '$form-icon-warning-color': '#f0ad4e',
    '$form-icon-warning': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="undefined" d="M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z"/%3E%3C/svg%3E\')',
    '$form-icon-danger-color': '#d9534f',
    '$form-icon-danger': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="undefined" viewBox="-2 -2 7 7"%3E%3Cpath stroke="%23d9534f" d="M0 0l3 3m0-3L0 3"/%3E%3Ccircle r=".5"/%3E%3Ccircle cx="3" r=".5"/%3E%3Ccircle cy="3" r=".5"/%3E%3Ccircle cx="3" cy="3" r=".5"/%3E%3C/svg%3E\')',
  },
};

const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$brand-primary': PropTypes.string,
    '$brand-success': PropTypes.string,
    '$brand-info': PropTypes.string,
    '$brand-warning': PropTypes.string,
    '$brand-danger': PropTypes.string,
    '$gray-dark': PropTypes.string,
    '$gray': PropTypes.string,
    '$gray-light': PropTypes.string,
    '$gray-lighter': PropTypes.string,
    '$gray-lightest': PropTypes.string,
    '$border-width': PropTypes.string,
    '$spacer': PropTypes.string,
    '$spacer-y': PropTypes.string,
    '$grid-breakpoints': PropTypes.shape({
      'xs': PropTypes.string,
      'sm': PropTypes.string,
      'md': PropTypes.string,
      'lg': PropTypes.string,
      'xl': PropTypes.string,
    }),
    '$grid-gutter-width-base': PropTypes.string,
    '$grid-gutter-widths': PropTypes.shape({
      'xs': PropTypes.string,
      'sm': PropTypes.string,
      'md': PropTypes.string,
      'lg': PropTypes.string,
      'xl': PropTypes.string,
    }),
    '$font-size-base': PropTypes.string,
    '$font-size-lg': PropTypes.string,
    '$font-size-sm': PropTypes.string,
    '$font-size-xs': PropTypes.string,
    '$text-muted': PropTypes.string,
    '$line-height-base': PropTypes.string,
    '$line-height-lg': PropTypes.string,
    '$line-height-sm': PropTypes.string,
    '$border-radius': PropTypes.string,
    '$border-radius-lg': PropTypes.string,
    '$border-radius-sm': PropTypes.string,
    '$input-padding-x': PropTypes.string,
    '$input-padding-y': PropTypes.string,
    '$input-line-height': PropTypes.string,
    '$input-bg': PropTypes.string,
    '$input-bg-disabled': PropTypes.string,
    '$input-color': PropTypes.string,
    '$input-border-color': PropTypes.string,
    '$input-btn-border-width': PropTypes.string,
    '$input-box-shadow': PropTypes.string,
    '$input-border-radius': PropTypes.string,
    '$input-border-radius-lg': PropTypes.string,
    '$input-border-radius-sm': PropTypes.string,
    '$input-bg-focus': PropTypes.string,
    '$input-border-focus': PropTypes.string,
    '$input-box-shadow-focus': PropTypes.string,
    '$input-color-focus': PropTypes.string,
    '$input-color-placeholder': PropTypes.string,
    '$input-padding-x-sm': PropTypes.string,
    '$input-padding-y-sm': PropTypes.string,
    '$input-padding-x-lg': PropTypes.string,
    '$input-padding-y-lg': PropTypes.string,
    '$input-height': PropTypes.string,
    '$input-height-sm': PropTypes.string,
    '$input-height-lg': PropTypes.string,
    '$input-transition': PropTypes.string,
    '$form-text-margin-top': PropTypes.string,
    '$form-feedback-margin-top': PropTypes.string,
    '$form-check-margin-bottom': PropTypes.string,
    '$form-check-input-gutter': PropTypes.string,
    '$form-check-input-margin-y': PropTypes.string,
    '$form-check-input-margin-x': PropTypes.string,
    '$form-check-inline-margin-x': PropTypes.string,
    '$form-group-margin-bottom': PropTypes.string,
    '$input-group-addon-bg': PropTypes.string,
    '$input-group-addon-border-color': PropTypes.string,
    '$cursor-disabled': PropTypes.string,
    '$custom-control-gutter': PropTypes.string,
    '$custom-control-spacer-x': PropTypes.string,
    '$custom-control-spacer-y': PropTypes.string,
    '$custom-control-indicator-size': PropTypes.string,
    '$custom-control-indicator-bg': PropTypes.string,
    '$custom-control-indicator-bg-size': PropTypes.string,
    '$custom-control-indicator-box-shadow': PropTypes.string,
    '$custom-control-disabled-cursor': PropTypes.string,
    '$custom-control-disabled-indicator-bg': PropTypes.string,
    '$custom-control-disabled-description-color': PropTypes.string,
    '$custom-control-checked-indicator-color': PropTypes.string,
    '$custom-control-checked-indicator-bg': PropTypes.string,
    '$custom-control-checked-indicator-box-shadow': PropTypes.string,
    '$custom-control-focus-indicator-box-shadow': PropTypes.string,
    '$custom-control-active-indicator-color': PropTypes.string,
    '$custom-control-active-indicator-bg': PropTypes.string,
    '$custom-control-active-indicator-box-shadow': PropTypes.string,
    '$custom-checkbox-radius': PropTypes.string,
    '$custom-checkbox-checked-icon': PropTypes.string,
    '$custom-checkbox-indeterminate-bg': PropTypes.string,
    '$custom-checkbox-indeterminate-indicator-color': PropTypes.string,
    '$custom-checkbox-indeterminate-icon': PropTypes.string,
    '$custom-checkbox-indeterminate-box-shadow': PropTypes.string,
    '$custom-radio-radius': PropTypes.string,
    '$custom-radio-checked-icon': PropTypes.string,
    '$custom-select-padding-x': PropTypes.string,
    '$custom-select-padding-y': PropTypes.string,
    '$custom-select-indicator-padding': PropTypes.string,
    '$custom-select-line-height': PropTypes.string,
    '$custom-select-color': PropTypes.string,
    '$custom-select-disabled-color': PropTypes.string,
    '$custom-select-bg': PropTypes.string,
    '$custom-select-disabled-bg': PropTypes.string,
    '$custom-select-bg-size': PropTypes.string,
    '$custom-select-indicator-color': PropTypes.string,
    '$custom-select-indicator': PropTypes.string,
    '$custom-select-border-width': PropTypes.string,
    '$custom-select-border-color': PropTypes.string,
    '$custom-select-border-radius': PropTypes.string,
    '$custom-select-focus-border-color': PropTypes.string,
    '$custom-select-focus-box-shadow': PropTypes.string,
    '$custom-select-sm-font-size': PropTypes.string,
    '$custom-file-height': PropTypes.string,
    '$custom-file-width': PropTypes.string,
    '$custom-file-focus-box-shadow': PropTypes.string,
    '$custom-file-padding-x': PropTypes.string,
    '$custom-file-padding-y': PropTypes.string,
    '$custom-file-line-height': PropTypes.string,
    '$custom-file-color': PropTypes.string,
    '$custom-file-bg': PropTypes.string,
    '$custom-file-border-width': PropTypes.string,
    '$custom-file-border-color': PropTypes.string,
    '$custom-file-border-radius': PropTypes.string,
    '$custom-file-box-shadow': PropTypes.string,
    '$custom-file-button-color': PropTypes.string,
    '$custom-file-button-bg': PropTypes.string,
    '$custom-file-text': PropTypes.object,
    '$form-icon-success-color': PropTypes.string,
    '$form-icon-success': PropTypes.string,
    '$form-icon-warning-color': PropTypes.string,
    '$form-icon-warning': PropTypes.string,
    '$form-icon-danger-color': PropTypes.string,
    '$form-icon-danger': PropTypes.string,
  }),
  /** Toggles inline CSS style. */
  inline: PropTypes.bool,
  /** Use that property to pass a ref callback to the native button component. */
  innerRef: PropTypes.func,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class FormUnstyled extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */


  render() {
    const {
      className,
      cssModule,
      inline,
      tag: Tag,
      innerRef,
      ...rest
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      inline ? 'form-inline' : false
    ), cssModule);

    return (
      <Tag ref={innerRef} className={classes} {...rest} />
    );
  }
}
/**
 * Use our `<Form />` component in order to quick create reliable Form. It use `<FormsGroup />` containing `<Label />` and `<Input />` you want to use.
 * You can also use `hidden` attribute in order to hide `<Label />` or `check` (when using checkbox).
 */
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
Form.propTypes = propTypes;

/** @component */
export default Form;
