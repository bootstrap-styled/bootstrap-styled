import React, { PropTypes } from 'react';
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

  constructor(props) {
    super(props);
    const sheet = window.document.styleSheets[0];
    sheet.insertRule('.overflow { overflow: hidden; padding-right:15px; }', sheet.cssRules.length);
  }


  state = {
    show: false,
  };

  componentDidMount() {
    //  Setting height of HeaderNavbar to OffsetNav if props belowHeader is true
    const headerNavbar = document.getElementById('header-nav');
    const headerNavbarHeight = headerNavbar.offsetHeight + 'px';  // eslint-disable-line prefer-template
    const offsetNav = document.getElementById('offset-nav');
    this.props.belowHeader ? (offsetNav.style.marginTop = headerNavbarHeight) : null; // eslint-disable-line no-unused-expressions
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
      <OffsetNavPush active={this.state.show} menu-right={menuRight} animation-push={animationPush} id="offset-nav" dismiss={this.handleClick}>
        {children}
      </OffsetNavPush>
    ) : (
      <OffsetNavSlide active={this.state.show} menu-right={menuRight} animation-push={animationPush} dismiss={this.handleClick} id="offset-nav">
        {children}
      </OffsetNavSlide>
    );

    return (
      <div>
        {!noOverlay && (<Overlay active={this.state.show} onClick={this.handleClick} />)}
        <Header className={cn(cssClasses)} {...rest} id="header-nav">
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

