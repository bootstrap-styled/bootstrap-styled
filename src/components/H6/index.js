/**
 * H6 Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';
import { typography } from '../../styled/utilities/typography';

const defaultProps = { theme };

class H6 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <h6 className={this.props.className}>
        {this.props.children}
      </h6>
    );
  }
}

// eslint-disable-next-line no-class-assign
H6 = styled(H6)`
  ${(props) => `
    font-size: ${props.theme['$font-size-h6']};
    ${typography()}

    /* Reboot Scss */
    margin-top: 0;
  `}
`;

H6.defaultProps = defaultProps;

export default H6;
