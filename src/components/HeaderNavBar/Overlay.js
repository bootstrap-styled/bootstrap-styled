/**
 * Menu component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { fade } from '../../styled/utilities/transition';
const defaultProps = { theme: bsTheme };

class Overlay extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    theme: PropTypes.object,

  }

  render() {
    const { className, children, active, theme, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const cssClasses = cn(
      className,
      'fade',
      active ? 'show' : false,
    );
    return (
      <div className={cssClasses} {...rest}>
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
Overlay = styled(Overlay)`
  ${(props) => `
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1990;
    background: rgba(0, 0, 0, 0.3);
    transform: translate3d(100%, 0, 0);
    ${fade(
      props.theme['$enable-transitions'],
      props.theme['$transition-fade'],
    )}
    &.show {
      transform: translate3d(0, 0, 0);
    }
  `}
`;

Overlay.defaultProps = defaultProps;

export default Overlay;

