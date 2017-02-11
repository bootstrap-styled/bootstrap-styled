/**
 * Strong component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';

import bsTheme from 'theme';

const defaultProps = {
  theme: bsTheme,
};

class Strong extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <strong
        className={className}
        {...rest}
      >
        {children}
      </strong>
    );
  }

}

// eslint-disable-next-line no-class-assign
Strong = styled(Strong)`
  font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
`;

Strong.defaultProps = defaultProps;

export default Strong;

