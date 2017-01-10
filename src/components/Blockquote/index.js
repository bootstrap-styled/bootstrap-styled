/* eslint dot-notation: 'off' */

/**
 * Blockquote
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'config';

const defaultProps = {
  theme,
};

class Blockquote extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <blockquote className={this.props.className}>
        {this.props.children}
      </blockquote>
    );
  }
}

// eslint-disable-next-line no-class-assign
Blockquote = styled(Blockquote)` 
  ${(props) => `

    /* Type Scss */
    
    /* Blockquotes */
    &.blockquote {
      padding: ${props.theme['$spacer-halved']} ${props.theme['$spacer']};
      margin-bottom: ${props.theme['$spacer']};
      font-size: ${props.theme['$blockquote-font-size']};
      border-left: ${props.theme['$blockquote-border-width']} solid ${props.theme['$blockquote-border-color']};
    }
    
    & .blockquote-footer {
      display: block;
      font-size: 80%; /* back to default font-size */
      color: ${props.theme['$blockquote-small-color']};
    
      &::before {
        /* content: '\\2014 \\00A0'; em dash, nbsp */
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
        /* content: '\\00A0 \\2014'; nbsp, em dash */
      }
    }
 `} 

`;

Blockquote.defaultProps = defaultProps;

export default Blockquote;
