/**
 * Small component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';

const defaultProps = { theme };

class Small extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    return (
      <small className={this.props.className}>
        {this.props.children}
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
