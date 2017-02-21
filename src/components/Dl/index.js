/**
 *Definition List
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { makeRow } from '../../styled/mixins/grid';

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
  /* Reboot Scss */
  margin-top: 0;
  margin-bottom: 1rem;
  
  ${(props) => `
    ${makeRow(
      props.theme['$enable-grid-classes'],
      props.theme['$grid-gutter-widths']
    )}
  `}
`;

Dl.defaultProps = defaultProps;

export default Dl;
