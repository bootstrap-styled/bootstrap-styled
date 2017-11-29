/**
 * Code component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash.omit';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import themeCode from './theme';

const defaultProps = {
  tag: 'code',
  theme: themeCode,
};

class CodeUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    theme: PropTypes.object,
    tag: PropTypes.string,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      children,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <Tag className={className} {...attributes}>
        {children}
      </Tag>
    );
  }

}

const Code = styled(CodeUnstyled)`
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

