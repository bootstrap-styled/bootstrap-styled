/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * HeaderNavBar Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import Header from '../Header';
import Nav from '../Nav';
import MenuSlide from './MenuSlide';
import MenuPushMini from './MenuPushMini';
import MenuPushSimple from './MenuPushSimple';
import MenuAccount from './MenuAccount';
import Container from '../Container';
import ContainerFluid from '../ContainerFluid';
import Button from '../Button';
import shapeMenuOffsetPush from './shapeMenuOffsetPush';
import shapeMenuTopPush from './shapeMenuTopPush';
import shapeMenuOffsetSlide from './shapeMenuOffsetSlide';
import shapeMenuTopSlide from './shapeMenuTopSlide';
import slide from './composeSlide';
import push from './composePush';

export const compSlide = slide;
export const compPush = push;

const defaultProps = {
  theme: bsTheme,
  btnText: 'Bootstrap',
  container: false,
  'container-fluid': false,
  'navbar-inverse': false,
  'navbar-light': false,
  'static-top': false,
  'sticky-top': false,
  'fixed-top': false,
  'fixed-bottom': false,
};

class HeaderNavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    container: PropTypes.bool,
    button: PropTypes.node,
    composeSlide: PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      isHidden: PropTypes.bool,
      menuOffset: shapeMenuOffsetSlide,
      menuTop: shapeMenuTopSlide,
    }),
    composePush: PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      isHidden: PropTypes.bool,
      isMini: PropTypes.bool,
      menuOffset: shapeMenuOffsetPush,
      menuTop: shapeMenuTopPush,
    }),
    'container-fluid': PropTypes.bool,
    'navbar-inverse': PropTypes.bool,
    'navbar-light': PropTypes.bool,
    'static-top': PropTypes.bool,
    'sticky-top': PropTypes.bool,
    'fixed-top': PropTypes.bool,
    'fixed-bottom': PropTypes.bool,
  };

  state = {
    button: Button,
    wrapper: (props) => (<div>{props.children}</div>),
  }

  componentWillMount() {
    const {
      container: isContainer,
      'container-fluid': isContainerFluid,
      button: customButton,
    } = this.props;
    const { wrapper: defaultStateWrapper } = this.state;

    let wrapper = defaultStateWrapper;
    if (isContainer) {
      wrapper = Container;
    }
    if (isContainerFluid) {
      wrapper = ContainerFluid;
    }

    let button = Button;
    if (customButton) {
      button = customButton;
    }

    this.setState({
      wrapper,
      button,
    });
  }

  render() {
    const {
      className,
      composePush,
      composeSlide,
      theme,  // eslint-disable-line no-unused-vars
    } = this.props;

    const cssClasses = cn('navbar', 'bd-navbar', className, {
      'navbar-inverse': this.props['navbar-inverse'],
      'bg-inverse': this.props['navbar-inverse'],
      'navbar-light': this.props['navbar-light'],
      'bg-faded': this.props['navbar-light'],
      'navbar-static-top': this.props['static-top'],
      'navbar-sticky-top': this.props['sticky-top'],
      'navbar-fixed-top': this.props['fixed-top'],
      'navbar-fixed-bottom': this.props['fixed-bottom'],
    });

    const { wrapper: Wrapper, button: ButtonToggle } = this.state;

    const navTopPush = (composePush) ? (
      <div className="nav-account-top">
        <ButtonToggle
          className="navbar-toggler navbar-toggler-icon d-md-none float-xs-left m-2 p-3"
          type="button"
          onClick={composePush.onClick}
        />
        <MenuAccount>
          {composePush.menuTop.menuAccount}
        </MenuAccount>
      </div>
    ) : null;

    const navTopSlide = (composeSlide) ? (
      <div className="nav-account-top">
        <ButtonToggle
          className="navbar-toggler navbar-toggler-icon float-xs-left m-2 p-3"
          type="button"
          onClick={composeSlide.onClick}
        />
        <MenuAccount>
          {composeSlide.menuTop.menuAccount}
        </MenuAccount>
      </div>
    ) : null;

    const containerPushMini = (composePush && composePush.isMini) ? (
      <MenuPushMini
        active={!composePush.isHidden}
        menu-right={composePush.menuOffset.isRight}
        menu-left={composePush.menuOffset.isLeft}
        onClick={composePush.onClick}
      >
        {composePush.menuOffset.menu}
      </MenuPushMini>
    ) : null;

    const containerPush = (composePush && !composePush.isMini) ? (
      <MenuPushSimple
        active={!composePush.isHidden}
        menu-right={composePush.menuOffset.isRight}
        menu-left={composePush.menuOffset.isLeft}
        onClose={composePush.onClick}
      >
        {composePush.menuOffset.menu}
      </MenuPushSimple>
    ) : null;

    const containerSlide = (composeSlide) ? (
      <MenuSlide
        active={!composeSlide.isHidden}
        menu-right={composeSlide.menuOffset.isRight}
        menu-left={composeSlide.menuOffset.isLeft}
      >
        {composeSlide.menuOffset.menu}
      </MenuSlide>
    ) : null;

    return (
      <div>
        <Header className={cssClasses} ref={(node) => { this.node = node; }}>
          <Wrapper>
            <Nav className="nav">
              {navTopPush}
              {navTopSlide}
            </Nav>
          </Wrapper>
        </Header>
        {containerSlide}
        {containerPushMini}
        {containerPush}
      </div>
    );
  }
}
// eslint-disable-next-line no-class-assign
HeaderNavBar = styled(HeaderNavBar)`
  ${(props) => `
    outline: ${props.theme['$header-navbar-border-width']} solid ${props.theme['$header-navbar-border-color']};
    
    &.navbar {
      padding: 0;
      .nav-account-top {
        height: ${props.theme['$navbar-height']};
      }
    }
  `}
`;


HeaderNavBar.defaultProps = defaultProps;

export default HeaderNavBar;
