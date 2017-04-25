import React from 'react';
import PropTypes from 'prop-types';
import findDOMNode from 'react-dom/lib/findDOMNode';

// import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import Button from '../Button';
import Header from '../Header';
import OffsetNavPush from './OffsetNavPush';
import OffsetNavSlide from './OffsetNavSlide';
import Overlay from './Overlay';

const defaultProps = {
  button: {
    component: Button,
  },
  show: false,
  theme: bsTheme,
  noOverlay: false,
  belowNav: false,
};

class HeaderNavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    show: PropTypes.bool,
    onClick: PropTypes.func,
    belowHeader: PropTypes.bool,
    offsetNavWidth: PropTypes.string,
    noOverlay: PropTypes.bool,
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
    'animation-push': PropTypes.bool,
  }

  state = {
    show: false,
  };

  componentDidMount() {
    const componentAsANodeReact = findDOMNode(this);
    const node = componentAsANodeReact.querySelector('.navbar.justify-content-between');
    const nodeHeight = node.clientHeight;
    const offsetNav = componentAsANodeReact.querySelector('.offset-nav-margin-top');
    this.props.belowHeader ? (offsetNav.style.marginTop = `${nodeHeight}px`) : null; // eslint-disable-line no-unused-expressions
  }

  handleClick = (e) => {
    const { onClick, 'animation-push': animationPush, 'menu-right': menuRight } = this.props;
    const { show } = this.state;
    if (onClick) {
      onClick(e);
    }
    this.setState({ show: !show });

    // add .overflow class to body when triggered
    document.body.classList.toggle('overflow');

    //  menu-push animation
    if (animationPush) {
      menuRight ? ( // eslint-disable-line no-unused-expressions
        document.getElementById('wrapper').classList.toggle('right')
      ) : (
        document.getElementById('wrapper').classList.toggle('left')
      );
    }
  };

  render() {
    const {
      className,
      children,
      theme,  // eslint-disable-line no-unused-vars
      button,
      noOverlay,
      offsetNavWidth,
      belowHeader,  // eslint-disable-line no-unused-vars
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
      'animation-push': animationPush,
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

    const OffsetMenuAnimated = animationPush ? (
      <OffsetNavPush className="offset-nav-margin-top" elementWidth={offsetNavWidth} active={this.state.show} menu-right={menuRight} animation-push={animationPush} dismiss={this.handleClick}>
        {children}
      </OffsetNavPush>
    ) : (
      <OffsetNavSlide className="offset-nav-margin-top" elementWidth={offsetNavWidth} active={this.state.show} menu-right={menuRight} animation-push={animationPush} dismiss={this.handleClick}>
        {children}
      </OffsetNavSlide>
    );

    return (
      <div>
        {!noOverlay && (<Overlay active={this.state.show} onClick={this.handleClick} />)}
        <Header className={cn(cssClasses)} {...rest} innerRef={(header) => { this.header = header; }}>
          <ButtonToggle className={buttonClasses} onClick={this.handleClick} {...restButton} />
          {navTop && (<div>{navTop}</div>)}
        </Header>
        {OffsetMenuAnimated}
      </div>
    );
  }
}


HeaderNavBar.defaultProps = defaultProps;
export default HeaderNavBar;

