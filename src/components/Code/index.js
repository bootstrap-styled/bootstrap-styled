/**
 * Code component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';
import { borderRadius } from '../../styled/mixins/border-radius';

const defaultProps = { theme: bsTheme };

class Code extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, ...rest } = this.props; // eslint-disable-line no-unused-vars

    return (
      <code className={className} {...rest}>
        {children}
      </code>
    );
  }

}

// eslint-disable-next-line no-class-assign
Code = styled(Code)`
  ${(props) => `
    /* Inline code */
    padding: ${props.theme['$code-padding-y']} ${props.theme['$code-padding-x']};
    font-size: ${props.theme['$code-font-size']};
    color: ${props.theme['$code-color']};
    background-color: ${props.theme['$code-bg']};
    ${borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius'])};
    
    /* Streamline the style when inside anchors to avoid broken underline and more */
    a > & {
      padding: 0;
      color: inherit;
      background-color: inherit;
    }
    
    /* Bootstrap 4 does not place this css rule straight into Code tag see: bootstrap/scss/code.scss */
    font-family: ${props.theme['$font-family-monospace']};
  `}
`;

Code.defaultProps = defaultProps;

export default Code;

