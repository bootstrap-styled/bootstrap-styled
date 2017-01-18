/* eslint-disable */
/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * MenuPush Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'config';

import { transition } from '../../styled/mixins/transition';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';

const defaultProps = { theme };


class MenuPush extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
MenuPush = styled(MenuPush)`
  ${(props) => `
    background-color: #243746;
    z-index: 2001;
    position: fixed;
    top: 0;
    height: 100%;
    width: ${props.theme['$menu-push-mini-width']};
    ${transition(
      props.theme['$enable-transitions'],
      props.theme['$menu-push-transition-duration']
    )}
  
    &.menu-left {
      left:0;
      transform: translate3d(-${props.theme['$menu-push-mini-width']},0,0);
      opacity: 0;
      &.active {
        transform: translateX(0);
        opacity: 1;

      }
      ${mediaBreakpointUp(
        'md',
        props.theme['$grid-breakpoints'],
        `
          opacity: 1;
          transform: translateX(0);
          width: ${props.theme['$menu-push-width']};
          &.active {
            transform: translateX(0);
            width: ${props.theme['$menu-push-mini-width']};
          }
        `
      )}
    }
    &.menu-right {
      right:0;
      transform: translate3d(${props.theme['$menu-push-mini-width']},0,0);
      &.active {
        transform: translateX(0);
      }
      ${mediaBreakpointUp(
        'md',
        props.theme['$grid-breakpoints'],
        `
          transform: translateX(0);
          width: ${props.theme['$menu-push-width']};
          &.active {
            transform: translateX(0);
            width: ${props.theme['$menu-push-mini-width']};
          }
        `
      )}
    }
  `}
`;


MenuPush.defaultProps = defaultProps;

export default MenuPush;
