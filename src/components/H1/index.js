/**
 * H1 Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'config';
import { typography } from '../../styled/utilities/typography';

const defaultProps = { theme };

class H1 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <h1 className={this.props.className}>
        {this.props.children}
      </h1>
    );
  }
}

// eslint-disable-next-line no-class-assign
H1 = styled(H1)`
  ${(props) => `

    font-size: ${props.theme['$font-size-h1']};
     ${typography()}
     
    /* Reboot Scss */
    margin-top: 0;
  `}
`;

H1.defaultProps = defaultProps;

export default H1;
