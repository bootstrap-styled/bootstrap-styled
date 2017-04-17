/**
 * InputGroup Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';
import { hoverFocusActive } from '../../styled/mixins/hover';
import { borderRadius, borderLeftRadius, borderRightRadius } from '../../styled/mixins/border-radius';
import { formControl } from '../../styled/mixins/forms';

const defaultProps = {
  theme: bsTheme,
  tag: 'div',
};


class InputGroup extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    size: PropTypes.string,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    theme: PropTypes.object,
  };

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      size,
      theme,  // eslint-disable-line
      ...attributes
    } = this.props;

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

// eslint-disable-next-line no-class-assign
InputGroup = styled(InputGroup)`
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

export default InputGroup;
