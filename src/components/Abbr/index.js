/**
 * Abbr component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';

import bsTheme from 'theme';

const defaultProps = {
  theme: bsTheme,
};

class Abbr extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, title, children, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <abbr
        className={className}
        title={title}
        {...rest}
      >
        {children}
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
      text-decoration: underline;
      text-decoration: underline dotted;
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

