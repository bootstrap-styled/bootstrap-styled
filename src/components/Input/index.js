/**
* Input component
**/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { button } from '../../styled/utilities/button';

const defaultProps = {
  theme,
  type: 'text',
};

class Input extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    theme: PropTypes.object,
  }

  render() {
    const { theme, ...rest } = this.props; // eslint-disable-line
    return (
      <input {...rest} />
    );
  }

}

// eslint-disable-next-line no-class-assign
Input = styled(Input)`
  ${(props) => `
    /* Reboot Scss */
    touch-action: manipulation;
    
    /* Normalize includes 'font: inherit;', so 'font-family'. 'font-size', etc are */
    /* properly inherited. However, 'line-height' isn't inherited there. */
    line-height: inherit;
   
    &.disabled {
      cursor: ${props.theme['$cursor-disabled']};
    }
   
    input[type="date"],
    input[type="time"],
    input[type="datetime-local"],
    input[type="month"] {
    /* Remove the default appearance of temporal inputs to avoid a Mobile Safari
       bug where setting a custom line-height prevents text from being vertically
       centered within the input.
       Bug report: https://github.com/twbs/bootstrap/issues/11266
     */
      -webkit-appearance: listbox;
    }
      
    input[type="search"] {
      /* This overrides the extra rounded corners on search inputs in iOS so that our
      '.form-control' class can properly style them. Note that this cannot simply
       be added to '.form-control' as it's not specific enough. For details, see
       https://github.com/twbs/bootstrap/issues/11586.
       */
      -webkit-appearance: none;
    }
    
    ${button(
      props.theme['$enable-shadows'],
      props.theme['$enable-hover-media-query'],
      props.theme['$enable-transitions'],
      props.theme['$enable-rounded'],
      props.theme['$btn-font-weight'],
      props.theme['$btn-line-height'],
      props.theme['$input-btn-border-width'],
      props.theme['$btn-padding-x'],
      props.theme['$btn-padding-y'],
      props.theme['$font-size-base'],
      props.theme['$btn-border-radius'],
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
