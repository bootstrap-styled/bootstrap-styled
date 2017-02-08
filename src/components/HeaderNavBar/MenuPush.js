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
import theme from 'theme';

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
    position: fixed;
    top: 0;
    height: 100%;
    background-color: ${props.theme['$menu-push-bg']};
    z-index: ${props.theme['$zindex-menu-push']};
  `}
`;


MenuPush.defaultProps = defaultProps;

export default MenuPush;
