/**
* Input component
**/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';

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
 `}
`;

Input.defaultProps = defaultProps;

export default Input;
