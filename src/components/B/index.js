/**
 * B component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';

import bsTheme from 'theme';

const defaultProps = {
  theme: bsTheme,
};

class B extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <b
        className={className}
        {...rest}
      >
        {children}
      </b>
    );
  }

}

// eslint-disable-next-line no-class-assign
B = styled(B)`
  font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
`;

B.defaultProps = defaultProps;

export default B;

