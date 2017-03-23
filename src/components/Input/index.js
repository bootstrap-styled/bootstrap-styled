/**
* Input component
**/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { button } from '../../styled/mixins/buttons';
import { mapToCssModules } from '../../styled/utilities/tools';

const defaultProps = {
  theme: bsTheme,
  type: 'text',
  tag: 'p',
};

class Input extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    size: PropTypes.string,
    state: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    static: PropTypes.bool,
    addon: PropTypes.bool,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    theme: PropTypes.object,
    onChange: PropTypes.func,
    indeterminate: PropTypes.bool,
  }

  render() {
    const {
      className,
      cssModule,
      theme,   // eslint-disable-line no-unused-vars
      type,
      size,
      state,
      tag,
      addon,
      static: staticInput,
      getRef,
      ...attributes
    } = this.props;


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
      <Tag {...attributes} ref={getRef} className={classes} />
    );
  }
}

// eslint-disable-next-line no-class-assign
Input = styled(Input)`
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

export default Input;
