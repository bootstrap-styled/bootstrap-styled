/**
 * Ordered List Tabs and Pills
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { nav } from '../../styled/utilities/nav';
import { listUnstyled } from '../../styled/mixins/lists';

class Ol extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <ol className={this.props.className}>
        {this.props.children}
      </ol>
    );
  }
}

// eslint-disable-next-line no-class-assign
Ol = styled(Ol)` 
  ${nav()}
  
  /* Type Scss */
  &.list-unstyled {
    ${listUnstyled()};
  }
  
  /* Reboot Scss */
  margin-top: 0;
  margin-bottom: 1rem;
  
  & ol,
  & ul {
    margin-bottom: 0;
  }

`;

export default Ol;
