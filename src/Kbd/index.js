/**
 * Kbd component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash.omit';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { boxShadow } from 'bootstrap-styled-mixins/lib/box-shadow';

export const defaultProps = {
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$font-family-monospace': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    '$font-weight-bold': 'bold',
    '$border-radius-sm': '.2rem',
    '$code-font-size': '90%',
    '$code-padding-x': '.4rem',
    '$code-padding-y': '.2rem',
    '$kbd-color': '#fff',
    '$kbd-bg': '#292b2c',
    '$kbd-box-shadow': 'inset 0 -.1rem 0 rgba(0, 0, 0, 0.25)',
    '$nested-kbd-font-weight': 'bold',
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<Kbd />` component. */
  children: PropTypes.node.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$enable-shadows': PropTypes.bool,
    '$font-family-monospace': PropTypes.string,
    '$font-weight-bold': PropTypes.string,
    '$border-radius-sm': PropTypes.string,
    '$code-font-size': PropTypes.string,
    '$code-padding-x': PropTypes.string,
    '$code-padding-y': PropTypes.string,
    '$kbd-color': PropTypes.string,
    '$kbd-bg': PropTypes.string,
    '$kbd-box-shadow': PropTypes.string,
    '$nested-kbd-font-weight': PropTypes.string,
  }),
};

class KbdUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      children,
      ...rest
    } = omit(this.props, ['theme']);

    return (
      <kbd className={className} {...rest}>
        {children}
      </kbd>
    );
  }

}
/**
 * Replace or remove a className from the component.
 * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
 */
const Kbd = styled(KbdUnstyled)`
  ${(props) => `
    /* User input typically entered via keyboard */
    padding: ${props.theme['$code-padding-y']} ${props.theme['$code-padding-x']};
    font-size: ${props.theme['$code-font-size']};
    color: ${props.theme['$kbd-color']};
    background-color: ${props.theme['$kbd-bg']};
    ${borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius-sm'])}
    ${boxShadow(props.theme['$enable-shadows'], props.theme['$kbd-box-shadow'])}
    
    & kbd {
      padding: 0;
      font-size: 100%;
      font-weight: ${props.theme['$nested-kbd-font-weight']};
      ${boxShadow(props.theme['$enable-shadows'], 'none')}
    }
    
    /* Bootstrap 4 does not place this css rule straight into Kbd tag see: bootstrap/scss/code.scss */
    font-family: ${props.theme['$font-family-monospace']};
  `}
`;

Kbd.defaultProps = defaultProps;
Kbd.propTypes = propTypes;

/** @component */
export default Kbd;

