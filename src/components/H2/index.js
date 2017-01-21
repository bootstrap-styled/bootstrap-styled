/**
 * H2 Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { typography } from '../../styled/utilities/typography';
import theme from '../../config';

const defaultProps = { theme };

class H2 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <h2 className={this.props.className}>
        {this.props.children}
      </h2>
    );
  }
}

// eslint-disable-next-line no-class-assign
H2 = styled(H2)`
  ${(props) => `

    font-size: ${props.theme['$font-size-h2']};
    ${typography()}
       
    /* Reboot Scss */
    margin-top: 0;
  `}
`;

H2.defaultProps = defaultProps;

export default H2;
