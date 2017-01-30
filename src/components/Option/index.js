/* Option */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

class Option extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;


    return (
      <option {...rest}>
        {children}
      </option>
    );
  }
}

// eslint-disable-next-line no-class-assign
Option = styled(Option)`
`;

export default Option;
