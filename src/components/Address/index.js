/**
 * Address component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';

class Address extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    return (
      <address className={this.props.className}>
        {this.props.children}
      </address>
    );
  }

}

// eslint-disable-next-line no-class-assign
Address = styled(Address)`
  /* Reboot Scss */
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
  }
`;

export default Address;
