/**
 * InputGroup Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { hoverFocusActive } from 'bootstrap-styled-mixins/lib/hover';
import { borderRadius, borderLeftRadius, borderRightRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { formControl } from 'bootstrap-styled-mixins/lib/forms';


export const defaultProps = {
  tag: 'div',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-hover-media-query': false,
    '$enable-transitions': true,
    '$font-size-base': '1rem', // Assumes the browser default, typically `16px`
    '$font-size-lg': '1.25rem',
    '$font-size-sm': '.875rem',
    '$font-size-xs': '.75rem',
    '$line-height-base': '1.5',
    '$border-radius': '.25rem',
    '$border-radius-lg': '.3rem',
    '$border-radius-sm': '.2rem',
    '$input-padding-x': '.75rem',
    '$input-padding-y': '.5rem',
    '$input-bg': '#fff',
    '$input-bg-disabled': '#eceeef',
    '$input-padding-x-lg': '1.5rem',
    '$input-padding-y-lg': '.75rem',
    '$input-line-height': '1.25',
    '$input-height': '2.5rem',
    '$input-box-shadow': 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
    '$input-btn-border-width': '1px', // For form controls and buttons
    '$input-group-addon-bg': '#eceeef',
    '$input-border-color': 'rgba(0, 0, 0, 0.15)',
    '$input-border-focus': 'hsl(207.79999999999995, 98.2%, 53.4%)',
    '$input-box-shadow-focus': 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(hsl(207.79999999999995, 98.2%, 53.4%),.6)',
    '$input-color': '#464a4c',
    '$input-group-addon-border-color': 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    '$input-padding-x-sm': '.5rem',
    '$input-padding-y-sm': '.25rem',
    '$input-color-placeholder': '#636c72',
    '$input-border-radius-lg': '.3rem',
    '$input-border-radius-sm': '.2rem',
    '$input-border-radius': '.25rem',
    '$input-transition': 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    '$input-color-focus': '#464a4c',
    '$input-bg-focus': '#fff',
    '$cursor-disabled': 'not-allowed',
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified string define the input size, small or large. */
  size: PropTypes.oneOf([
    'sm',
    'lg',
  ]),
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$enable-shadows': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
    '$enable-transitions': PropTypes.bool,
    '$font-size-base': PropTypes.string, // Assumes the browser default, typically `16px`
    '$font-size-lg': PropTypes.string,
    '$font-size-sm': PropTypes.string,
    '$font-size-xs': PropTypes.string,
    '$line-height-base': PropTypes.string,
    '$border-radius': PropTypes.string,
    '$border-radius-lg': PropTypes.string,
    '$border-radius-sm': PropTypes.string,
    '$input-padding-x': PropTypes.string,
    '$input-padding-y': PropTypes.string,
    '$input-bg': PropTypes.string,
    '$input-bg-disabled': PropTypes.string,
    '$input-padding-x-lg': PropTypes.string,
    '$input-padding-y-lg': PropTypes.string,
    '$input-line-height': PropTypes.string,
    '$input-height': PropTypes.string,
    '$input-box-shadow': PropTypes.string,
    '$input-btn-border-width': PropTypes.string, // For form controls and buttons
    '$input-group-addon-bg': PropTypes.string,
    '$input-border-color': PropTypes.string,
    '$input-border-focus': PropTypes.string,
    '$input-box-shadow-focus': PropTypes.string,
    '$input-color': PropTypes.string,
    '$input-group-addon-border-color': PropTypes.string,
    '$input-padding-x-sm': PropTypes.string,
    '$input-padding-y-sm': PropTypes.string,
    '$input-color-placeholder': PropTypes.string,
    '$input-border-radius-lg': PropTypes.string,
    '$input-border-radius-sm': PropTypes.string,
    '$input-border-radius': PropTypes.string,
    '$input-transition': PropTypes.string,
    '$input-color-focus': PropTypes.string,
    '$input-bg-focus': PropTypes.string,
    '$cursor-disabled': PropTypes.string,
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class InputGroupUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      size,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      'input-group',
      size ? `input-group-${size}` : null
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}
/**
 * Use our `<InputGroup />` component with `<InputGroupAddon />` and `<InputGroupAddon />` components.
 * You can also add `Button Dropdown` and customize `Sizing`.
 */
const InputGroup = styled(InputGroupUnstyled)`
  ${(props) => `
    /*
     Base styles
    */
   
    &.input-group {
      position: relative;
      display: flex;
      width: 100%;

      .form-control {
        /* 
          Ensure that the input is always above the *appended* addon button for
          proper border colors.
        */
        
        position: relative;
        z-index: 2;
        flex: 1 1 auto;
        /* Add width 1% and flex-basis auto to ensure that button will not wrap out */
        /* the column. Applies to IE Edge+ and Firefox. Chrome does not require this. */
        width: 1%;
        margin-bottom: 0;
        
        ${hoverFocusActive(
          props.theme['$enable-hover-media-query'],
          'z-index: 3;'
        )}
      }
    }
    
    & .input-group-addon,
    & .input-group-btn,
    &.input-group .form-control {
      /* Vertically centers the content of the addons within the input group */
      display: flex;
      flex-direction: column;
      justify-content: center;


      &:not(:first-child):not(:last-child) {
        ${borderRadius(
          props.theme['$enable-rounded'],
          '0'
        )}
      }
    }
   
    & .input-group-addon,
    & .input-group-btn {

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
   
      /* 
      Nuke default margins from checkboxes and radios to vertically center within.
      */
      input[type="radio"],
      input[type="checkbox"] {
        margin-top: 0;
      }
    }
   
   
    /*
     Reset rounded corners
    */
   
    &.input-group .form-control:not(:last-child),
    & .input-group-addon:not(:last-child),
    & .input-group-btn:not(:last-child) > .btn,
    & .input-group-btn:not(:last-child) > .btn-group > .btn,
    & .input-group-btn:not(:last-child) > .dropdown-toggle,
    & .input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),
    & .input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {
      ${borderRightRadius(
        props.theme['$enable-rounded'],
        '0'
      )}
    }
    & .input-group-addon:not(:last-child) {
      border-right: 0;
    }
    &.input-group .form-control:not(:first-child),
    & .input-group-addon:not(:first-child),
    & .input-group-btn:not(:first-child) > .btn,
    & .input-group-btn:not(:first-child) > .btn-group > .btn,
    & .input-group-btn:not(:first-child) > .dropdown-toggle,
    & .input-group-btn:not(:last-child) > .btn:not(:first-child),
    & .input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {
      ${borderLeftRadius(
        props.theme['$enable-rounded'],
        '0'
      )}
    }
    & .form-control + .input-group-addon:not(:first-child) {
      border-left: 0;
    }
   
    /*
     Button input groups
    */
   
    & .input-group-btn {
      position: relative;
      /* Jankily prevent input button groups from wrapping with white-space and
      font-size in combination with inline-block on buttons.
      */
      font-size: 0;
      white-space: nowrap;
   
      /* Negative margin for spacing, position for bringing hovered/focused/actived
      element above the siblings.
      */
      > .btn {
        position: relative;
        /* Vertically stretch the button and center its content */
        flex: 1;
        
        + .btn {
          margin-left: -${props.theme['$input-btn-border-width']};
        }
        
        /* Bring the active button to the front */
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
    
   /* Added So that Inputs in InputGroup grab the same .form-control class as in Component Form Not Bs4 */
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
  `}
`;

InputGroup.defaultProps = defaultProps;
InputGroup.propTypes = propTypes;

/** @component */
export default InputGroup;
