/* eslint dot-notation: 'off' */

/**
 * Blockquote
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';

const defaultProps = {
  theme: bsTheme,
};

class Blockquote extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.object,
  }

  render() {
    const { theme, className, children, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <blockquote className={className} {...rest}>
        {children}
      </blockquote>
    );
  }
}

// eslint-disable-next-line no-class-assign
Blockquote = styled(Blockquote)` 
  ${(props) => `

    
    /* Reboot from bootstrap v4 */
    margin: 0 0 1rem;
    /* Type Scss */
    /* Blockquotes */
    &.blockquote {
      padding: ${props.theme['$spacer-halved']} ${props.theme['$spacer']};
      margin-bottom: ${props.theme['$spacer']};
      font-size: ${props.theme['$blockquote-font-size']};
      border-left: ${props.theme['$blockquote-border-width']} solid ${props.theme['$blockquote-border-color']};
    }
    

    /* back to default font-size */
    &.blockquote-footer {
      display: block;
      font-size: 80%; 
      color: ${props.theme['$blockquote-small-color']};
    
      &::before {
        content: '\\2014 \\00A0';
      }
    }
    
    /* Opposite alignment of blockquote */
    &.blockquote-reverse {
      padding-right: ${props.theme['$spacer']};
      padding-left: 0;
      text-align: right;
      border-right: ${props.theme['$blockquote-border-width']} solid ${props.theme['$blockquote-border-color']};
      border-left: 0;
    }
    
    &.blockquote-reverse .blockquote-footer {
      &::before {
        content: "";
      }
      &::after {
        content: '\\00A0 \\2014';
      }
    }
 `} 

`;

Blockquote.defaultProps = defaultProps;

export default Blockquote;
