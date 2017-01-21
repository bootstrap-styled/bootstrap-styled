/**
 * H4 Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';

import theme from '../../config';

import { typography } from '../../styled/utilities/typography';

const defaultProps = { theme };

class H4 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <h4 className={this.props.className}>
        {this.props.children}
      </h4>
    );
  }
}

// eslint-disable-next-line no-class-assign
H4 = styled(H4)`
  ${(props) => `
    font-size: ${props.theme['$font-size-h4']};
    ${typography()}

    /* Reboot Scss */
    margin-top: 0;
  `}
`;

H4.defaultProps = defaultProps;

export default H4;
