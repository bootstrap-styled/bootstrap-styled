/**
 * Dfn component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';

import bsTheme from 'theme';

const defaultProps = {
  theme: bsTheme,
};

class Dfn extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <dfn
        className={className}
        {...rest}
      >
        {children}
      </dfn>
    );
  }

}

// eslint-disable-next-line no-class-assign
Dfn = styled(Dfn)`
  font-style: italic; /* Add the correct font style in Android 4.3- */
`;

Dfn.defaultProps = defaultProps;

export default Dfn;

