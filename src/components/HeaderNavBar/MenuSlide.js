/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * MenuSlide Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'theme';

import { transition } from '../../styled/mixins/transition';

const defaultProps = { theme };

export class MenuSlide extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    'menu-right': PropTypes.bool,
    'menu-left': PropTypes.bool,
  };

  render() {
    return (
      <div
        className={cn('navbar-toggleable-xs', this.props.className, {
          'menu-right': this.props['menu-right'],
          'menu-left': this.props['menu-left'],
          active: this.props.active,
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
MenuSlide = styled(MenuSlide)`
  ${(props) => `
    width: 100%;
    z-index: 1999;
    position: absolute;
    top: ${props.theme['$navbar-height']};
    bottom: 0;
    ${transition(
      props.theme['$enable-transitions'],
      props.theme['$menu-slide-transition-duration'],
    )}
    
    &.menu-right {
      transform: translate3d(100%,0,0);
    }
    &.menu-right.active {
      display: block;
      transform: translate3d(0,0,0);
    }
    &.menu-left {
      transform: translate3d(-100%,0,0);
    }
    &.menu-left.active {
      transform: translateX(0);
    }
  `}
`;

MenuSlide.defaultProps = defaultProps;

export default MenuSlide;
