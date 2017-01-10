/**
 * Description Term
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import theme from 'config';

const defaultProps = { theme };

class Dt extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <dt className={this.props.className}>
        {this.props.children}
      </dt>
    );
  }
}

// eslint-disable-next-line no-class-assign
Dt = styled(Dt)` 
  ${(props) => `
    /* Reboot Scss */
    font-weight: ${props.theme['$dt-font-weight']};
  `}
`;

Dt.defaultProps = defaultProps;

export default Dt;
