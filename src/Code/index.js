/**
 * Code component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash.omit';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';

export const defaultProps = {
  tag: 'a',
  theme: {
    '$code-font-size': '90%',
    '$code-padding-x': '.4rem',
    '$code-padding-y': '.2rem',
    '$code-color': '#bd4147',
    '$code-bg': '#f7f7f9',
    '$enable-rounded': false,
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$code-font-size': PropTypes.string,
    '$code-padding-x': PropTypes.string,
    '$code-padding-y': PropTypes.string,
    '$code-color': PropTypes.string,
    '$code-bg': PropTypes.string,
    '$enable-rounded': PropTypes.bool,
  }),
};
class CodeUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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
Code.propTypes = propTypes;

/** @component */
export default Code;

