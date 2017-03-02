/**
 * Menu component
 */


import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import cn from 'classnames';
import Button from '../Button';
import Header from '../Header';
import OffsetNav from './OffsetNav';
import Overlay from './Overlay';

const defaultProps = {
  button: {
    component: Button,
  },
  show: false,
};

class HeaderNavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    show: PropTypes.bool,
    onClick: PropTypes.func,
    button: PropTypes.shape({
      component: PropTypes.component,
      className: PropTypes.string,
    }),
    'nav-top': PropTypes.node,
    'menu-right': PropTypes.bool,
    'navbar-inverse': PropTypes.bool,
    'navbar-light': PropTypes.bool,
    'static-top': PropTypes.bool,
    'sticky-top': PropTypes.bool,
    'fixed-top': PropTypes.bool,
    'fixed-bottom': PropTypes.bool,
    'bg-inverse': PropTypes.bool,
    'bg-faded': PropTypes.bool,
  }

  state = {
    show: false,
  };


  handleClick = (e) => {
    const { onClick } = this.props;
    const { show } = this.state;
    if (onClick) {
      onClick(e);
    }
    this.setState({ show: !show });
  };

  render() {
    const {
      className,
      children,
      button,
      'nav-top': navTop,
      'menu-right': menuRight,
      'navbar-inverse': navbarInverse,
      'bg-inverse': bgInverse,
      'navbar-light': navbarLight,
      'bg-faded': bgFaded,
      'static-top': staticTop,
      'sticky-top': stickyTop,
      'fixed-top': fixedTop,
      'fixed-bottom': fixedBottom,
      ...restTmp
    } = this.props;

    const { onClick: unused, ...rest } = restTmp; // eslint-disable-line no-unused-vars
    const { component: ButtonToggle, className: classNameButton, ...restButton } = button;

    const cssClasses = cn('navbar', 'justify-content-between', 'flex-row', className, {
      'navbar-inverse': navbarInverse,
      'bg-inverse': bgInverse,
      'navbar-light': navbarLight,
      'bg-faded': bgFaded,
      'navbar-static-top': staticTop,
      'navbar-sticky-top': stickyTop,
      'navbar-fixed-top': fixedTop,
      'navbar-fixed-bottom': fixedBottom,
    });

    const buttonMenuRight = menuRight ? 'flex-last' : '';
    const buttonClasses = cn(buttonMenuRight, classNameButton, { 'navbar-toggler-icon p-3 my-auto': !classNameButton });

    return (
      <div>
        <Overlay active={this.state.show} onClick={this.handleClick} />
        <Header className={cn(cssClasses)} {...rest}>
          <ButtonToggle className={buttonClasses} onClick={this.handleClick} {...restButton} />
          {navTop && (<div>{navTop}</div>)}
        </Header>
        <OffsetNav active={this.state.show} menu-right={menuRight}>
          {children}
        </OffsetNav>
      </div>
    );
  }
}


HeaderNavBar.defaultProps = defaultProps;
export default HeaderNavBar;

