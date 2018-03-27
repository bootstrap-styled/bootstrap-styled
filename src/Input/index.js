/**
 * Input component
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { button } from 'bootstrap-styled-mixins/lib/buttons';

export const defaultProps = {
  tag: 'p',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-hover-media-query': false,
    '$enable-transitions': true,
    '$font-weight-normal': 'normal',
    '$font-size-base': '1rem',
    '$font-size-lg': '1.25rem',
    '$font-size-sm': '.875rem',
    '$font-size-xs': '.75rem',
    '$btn-padding-x': '1rem',
    '$btn-padding-y': '.5rem',
    '$btn-line-height': '1.25',
    '$btn-font-weight': 'normal',
    '$btn-transition': 'all .2s ease-in-out',
    '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
    '$btn-block-spacing-y': '.5rem',
    '$btn-primary-color': '#fff',
    '$btn-primary-bg': '#0275d8',
    '$btn-primary-border': '#0275d8',
    '$btn-secondary-color': '#292b2c',
    '$btn-secondary-bg': '#fff',
    '$btn-secondary-border': '#ccc',
    '$btn-info-color': '#fff',
    '$btn-info-bg': '#5bc0de',
    '$btn-info-border': '#5bc0de',
    '$btn-success-color': '#fff',
    '$btn-success-bg': '#5cb85c',
    '$btn-success-border': '#5cb85c',
    '$btn-warning-color': '#fff',
    '$btn-warning-bg': '#f0ad4e',
    '$btn-warning-border': '#f0ad4e',
    '$btn-danger-color': '#fff',
    '$btn-danger-bg': '#d9534f',
    '$btn-danger-border': '#d9534f',
    '$btn-link-disabled-color': '#636c72',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$btn-border-radius': '.25rem',
    '$btn-border-radius-lg': '1.25rem',
    '$btn-border-radius-sm': '.875rem',
    '$input-btn-border-width': '1px', // For form controls and buttons
    '$link-color': '#0275d8',
    '$link-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
    '$link-hover-decoration': 'underline',
    '$cursor-disabled': 'not-allowed',
  },
  type: 'text',
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<Input />` component. */
  children: PropTypes.node,
  /** Specified string define the type of input to display. */
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'textarea',
    'select',
    'time',
    'url',
    'week',
  ]),
  /** Specified string define the input size, small or large. */
  size: PropTypes.oneOf([
    'sm',
    'lg',
  ]),
  /** Specified string define the input state. */
  state: PropTypes.oneOf([
    'success',
    'warning',
    'danger',
  ]),
  /** Use that property to pass a ref callback to the native button component. */
  innerRef: PropTypes.func,
  /** Toggles static CSS style. */
  static: PropTypes.bool,
  /** Toggles addon CSS style. */
  addon: PropTypes.bool,
  /** Call specified function when `onChange` event is triggered. */
  onChange: PropTypes.func,
  /** Toggles indeterminate CSS style. */
  indeterminate: PropTypes.bool,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$enable-shadows': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
    '$enable-transitions': PropTypes.bool,
    '$font-weight-normal': PropTypes.string,
    '$font-size-base': PropTypes.string,
    '$font-size-lg': PropTypes.string,
    '$font-size-sm': PropTypes.string,
    '$font-size-xs': PropTypes.string,
    '$btn-padding-x': PropTypes.string,
    '$btn-padding-y': PropTypes.string,
    '$btn-line-height': PropTypes.string,
    '$btn-font-weight': PropTypes.string,
    '$btn-transition': PropTypes.string,
    '$btn-box-shadow': PropTypes.string,
    '$btn-block-spacing-y': PropTypes.string,
    '$btn-primary-color': PropTypes.string,
    '$btn-primary-bg': PropTypes.string,
    '$btn-primary-border': PropTypes.string,
    '$btn-secondary-color': PropTypes.string,
    '$btn-secondary-bg': PropTypes.string,
    '$btn-secondary-border': PropTypes.string,
    '$btn-info-color': PropTypes.string,
    '$btn-info-bg': PropTypes.string,
    '$btn-info-border': PropTypes.string,
    '$btn-success-color': PropTypes.string,
    '$btn-success-bg': PropTypes.string,
    '$btn-success-border': PropTypes.string,
    '$btn-warning-color': PropTypes.string,
    '$btn-warning-bg': PropTypes.string,
    '$btn-warning-border': PropTypes.string,
    '$btn-danger-color': PropTypes.string,
    '$btn-danger-bg': PropTypes.string,
    '$btn-danger-border': PropTypes.string,
    '$btn-link-disabled-color': PropTypes.string,
    '$btn-padding-x-lg': PropTypes.string,
    '$btn-padding-y-lg': PropTypes.string,
    '$btn-padding-x-sm': PropTypes.string,
    '$btn-padding-y-sm': PropTypes.string,
    '$btn-border-radius': PropTypes.string,
    '$btn-border-radius-lg': PropTypes.string,
    '$btn-border-radius-sm': PropTypes.string,
    '$input-btn-border-width': PropTypes.string, // For form controls and buttons
    '$link-color': PropTypes.string,
    '$link-hover-color': PropTypes.string,
    '$link-hover-decoration': PropTypes.string,
    '$cursor-disabled': PropTypes.string,
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class InputUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      type,
      size,
      state,
      tag,
      addon,
      static: staticInput,
      innerRef,
      ...attributes
    } = omit(this.props, ['theme']);

    const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    const fileInput = type === 'file';
    const textareaInput = type === 'textarea';
    const selectInput = type === 'select';
    let Tag = selectInput || textareaInput ? type : 'input';

    let formControlClass = 'form-control';

    if (staticInput) {
      formControlClass = `${formControlClass}-static`;
      Tag = tag;
    } else if (fileInput) {
      formControlClass = `${formControlClass}-file`;
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    const classes = mapToCssModules(cn(
      className,
      state ? `form-control-${state}` : false,
      size ? `form-control-${size}` : false,
      formControlClass
    ), cssModule);

    if (Tag === 'input') {
      attributes.type = type;
    }
    return (
      <Tag {...attributes} ref={innerRef} className={classes} />
    );
  }
}
/**
 * `<Input />` component specifies an input field where the user can enter data.
 */
const Input = styled(InputUnstyled)`
  ${(props) => `
    /* Reboot Scss */
    touch-action: manipulation;
    
    &[type="radio"],
    &[type="checkbox"] {
      box-sizing: border-box; /* 1. Add the correct box sizing in IE 10- */
      padding: 0; /* 2. Remove the padding in IE 10- */
      /*
       Apply a disabled cursor for radios and checkboxes.
       Note: Neither radios nor checkboxes can be readonly.
      */
   
      &:disabled {
        cursor: ${props.theme['$cursor-disabled']};
      }
    }
    
    /* Normalize includes font: inherit;, so font-family. font-size, etc are */
    /* properly inherited. However, line-height is not inherited there. */
    line-height: inherit;
   
    &.disabled {
      cursor: ${props.theme['$cursor-disabled']};
    }
   
    &[type="date"],
    &[type="time"],
    &[type="datetime-local"],
    &[type="month"] {
    /* Remove the default appearance of temporal inputs to avoid a Mobile Safari
       bug where setting a custom line-height prevents text from being vertically
       centered within the input.
       Bug report: https://github.com/twbs/bootstrap/issues/11266
     */
      -webkit-appearance: listbox;
    }
      
    /* Correct the cursor style of increment and decrement buttons in Chrome. */
    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    
    &[type="search"] {
      /* This overrides the extra rounded corners on search inputs in iOS so that our
      .form-control class can properly style them. Note that this cannot simply
       be added to .form-control as it is not specific enough. For details, see
       https://github.com/twbs/bootstrap/issues/11586.
       */
      outline-offset: -2px; /* 2. Correct the outline style in Safari. */
      -webkit-appearance: none;
    }
    
    /* Remove the inner padding and cancel buttons in Chrome and Safari on macOS. */
    &[type="search"]::-webkit-search-cancel-button,
    &[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    
    ${button(
      props.theme['$enable-shadows'],
      props.theme['$enable-hover-media-query'],
      props.theme['$enable-transitions'],
      props.theme['$enable-rounded'],
      props.theme['$font-weight-normal'],
      props.theme['$btn-font-weight'],
      props.theme['$btn-line-height'],
      props.theme['$btn-transition'],
      props.theme['$input-btn-border-width'],
      props.theme['$btn-padding-x'],
      props.theme['$btn-padding-y'],
      props.theme['$font-size-base'],
      props.theme['$btn-border-radius'],
      props.theme['$btn-box-shadow'],
      props.theme['$btn-focus-box-shadow'],
      props.theme['$btn-active-box-shadow'],
      props.theme['$cursor-disabled'],
      props.theme['$link-color'],
      props.theme['$link-hover-color'],
      props.theme['$link-hover-decoration'],
      props.theme['$btn-link-disabled-color'],
      props.theme['$btn-padding-x-lg'],
      props.theme['$btn-padding-y-lg'],
      props.theme['$font-size-lg'],
      props.theme['$btn-border-radius-lg'],
      props.theme['$btn-padding-x-sm'],
      props.theme['$btn-padding-y-sm'],
      props.theme['$font-size-sm'],
      props.theme['$btn-border-radius-sm'],
      props.theme['$btn-block-spacing-y'],
      props.theme['$btn-primary-color'],
      props.theme['$btn-primary-bg'],
      props.theme['$btn-primary-border'],
      props.theme['$btn-secondary-color'],
      props.theme['$btn-secondary-bg'],
      props.theme['$btn-secondary-border'],
      props.theme['$btn-info-color'],
      props.theme['$btn-info-bg'],
      props.theme['$btn-info-border'],
      props.theme['$btn-success-color'],
      props.theme['$btn-success-bg'],
      props.theme['$btn-success-border'],
      props.theme['$btn-warning-color'],
      props.theme['$btn-warning-bg'],
      props.theme['$btn-warning-border'],
      props.theme['$btn-danger-color'],
      props.theme['$btn-danger-bg'],
      props.theme['$btn-danger-border'],
    )}
 `}
`;

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

/** @component */
export default Input;
