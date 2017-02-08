/**
 * Kbd component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import { borderRadius } from '../../styled/mixins/border-radius';
import { boxShadow } from '../../styled/mixins/box-shadow';
const defaultProps = { theme };

class Kbd extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    return (
      <kbd className={this.props.className}>
        {this.props.children}
      </kbd>
    );
  }

}

// eslint-disable-next-line no-class-assign
Kbd = styled(Kbd)`
  ${(props) => `
    /* User input typically entered via keyboard */
    padding: ${props.theme['$code-padding-y']} ${props.theme['$code-padding-x']}
    font-size: ${props.theme['$code-font-size']};
    color: ${props.theme['$kbd-color']};
    background-color: ${props.theme['$kbd-bg']};
    ${borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius-sm'])};
    ${boxShadow(props.theme['$enable-shadows'], props.theme['$kbd-box-shadow'])};
    
    kbd {
      padding: 0;
      font-size: 100%;
      font-weight: ${props.theme['$nested-kbd-font-weight']};
      ${boxShadow(props.theme['$enable-shadows'], 'none')};
    }
    
    /* Bootstrap 4 does not place this css rule straight into Kbd tag see: bootstrap/scss/code.scss */
    font-family: ${props.theme['$font-family-monospace']};;
  `}
`;

Kbd.defaultProps = defaultProps;

export default Kbd;

