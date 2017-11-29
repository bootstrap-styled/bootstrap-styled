/**
 * Kbd component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash.omit';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { boxShadow } from 'bootstrap-styled-mixins/lib/box-shadow';
import { makeTheme } from './theme';

const defaultProps = { theme: makeTheme() };

class KbdUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

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

export default Kbd;

