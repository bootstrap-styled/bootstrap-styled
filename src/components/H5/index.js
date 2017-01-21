/**
 * H5 Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';
import { typography } from '../../styled/utilities/typography';

const defaultProps = { theme };

class H5 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <h5 className={this.props.className}>
        {this.props.children}
      </h5>
    );
  }
}

// eslint-disable-next-line no-class-assign
H5 = styled(H5)`
  ${(props) => `
    font-size: ${props.theme['$font-size-h5']};
    ${typography()}
       
    /* Reboot Scss */
    margin-top: 0;
  `}
`;

H5.defaultProps = defaultProps;

export default H5;
