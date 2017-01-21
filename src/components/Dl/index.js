/**
 *Definition List
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';
import { ifElse } from '../../styled/mixins/conditional';

const defaultProps = { theme };

class Dl extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <dl className={this.props.className}>
        {this.props.children}
      </dl>
    );
  }
}

// eslint-disable-next-line no-class-assign
Dl = styled(Dl)` 
  ${(props) => `
    /* Reboot Scss */
    margin-top: 0;
    margin-bottom: 1rem;
    
    /* Type Scss */
    /* Clean up some horizontal 'dl's built with grids */
  
    ${ifElse(
      props.theme['$enable-flex'],
      '',
      `&.row {
        > dd + dt {
          clear: left;
        }
      }`
    )}     
  `}
`;

Dl.defaultProps = defaultProps;

export default Dl;
