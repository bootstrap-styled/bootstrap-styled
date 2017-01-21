/**
 * Abbr component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';

import theme from '../../config';

const defaultProps = {
  theme,
};

class Abbr extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <abbr
        className={this.props.className}
        title={this.props.title}
      >
        {this.props.children}
      </abbr>
    );
  }

}

// eslint-disable-next-line no-class-assign
Abbr = styled(Abbr)`
  ${(props) => `
    /* Reboot Scss */
    /* Abbreviations and acronyms */
    &[title],
    /* Add data-* attribute to help out our tooltip plugin, per https://github.com/twbs/bootstrap/issues/5257 */
    &[data-original-title] {
      cursor: help;
      border-bottom: 1px dotted ${props.theme['$abbr-border-color']};
    }
    
    /* Type Scss */
    
    &.initialism {
      font-size: 90%;
      text-transform: uppercase;
    }
    
  `}
`;

Abbr.defaultProps = defaultProps;

export default Abbr;

