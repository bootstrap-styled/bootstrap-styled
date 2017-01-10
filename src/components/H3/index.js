/**
 * H3 Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'config';
import { typography } from '../../styled/utilities/typography';

const defaultProps = { theme };

class H3 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <h3 className={this.props.className}>
        {this.props.children}
      </h3>
    );
  }
}

// eslint-disable-next-line no-class-assign
H3 = styled(H3)`
  ${(props) => `
    font-size: ${props.theme['$font-size-h3']};
    ${typography()}

    /* Reboot Scss */
    margin-top: 0;
  `}
`;

H3.defaultProps = defaultProps;

export default H3;
