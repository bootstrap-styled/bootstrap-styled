/**
 * Small component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';

const defaultProps = { theme: bsTheme };

class Small extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, ...rest } = this.props; // eslint-disable-line no-unused-vars

    return (
      <small className={className} {...rest}>
        {children}
      </small>
    );
  }

}

// eslint-disable-next-line no-class-assign
Small = styled(Small)`
  ${(props) => `
    /* Reboot Scss */
    font-size: ${props.theme['$small-font-size']};
    font-weight: normal;
  `}
`;

Small.defaultProps = defaultProps;

export default Small;
