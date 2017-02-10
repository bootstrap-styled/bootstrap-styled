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
import theme from 'theme';
import Header from '../Header';
import A from '../A';
import Nav from '../Nav';
import MenuCollapse from './MenuCollapse';
import MenuSlide from './MenuSlide';
import MenuPushMini from './MenuPushMini';
import MenuPushSimple from './MenuPushSimple';
import MenuAccount from './MenuAccount';
import Container from '../Container';
import ContainerFluid from '../ContainerFluid';
import Button from '../Button';
import { transition } from '../../styled/mixins/transition';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import { ifElse } from '../../styled/mixins/conditional';
import shapeMenuOffsetPush from './shapeMenuOffsetPush';
import shapeMenuTopPush from './shapeMenuTopPush';
import shapeMenuOffsetSlide from './shapeMenuOffsetSlide';
import shapeMenuTopSlide from './shapeMenuTopSlide';
import shapeMenuCollapsed from './shapeMenuCollapsed';
import collapse from './composeCollapse';
import slide from './composeSlide';
import push from './composePush';

export const compCollapse = collapse;
export const compSlide = slide;
export const compPush = push;

const defaultProps = {
  theme,
  btnText: 'Bootstrap',
  container: false,
  'container-fluid': false,
  'navbar-dark': false,
  'navbar-light': false,
  'static-top': false,
  'sticky-top': false,
  'fixed-top': false,
  'fixed-bottom': false,
};

class HeaderNavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    container: PropTypes.bool,
    button: PropTypes.node,
    composeCollapsed: PropTypes.shape({
      brandTitle: PropTypes.string,
      isCollapsed: PropTypes.bool,
      onClick: PropTypes.func.isRequired,
      menuCollapsed: shapeMenuCollapsed,
    }),
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
    'navbar-dark': PropTypes.bool,
    'navbar-light': PropTypes.bool,
    'static-top': PropTypes.bool,
    'sticky-top': PropTypes.bool,
    'fixed-top': PropTypes.bool,
    'fixed-bottom': PropTypes.bool,
  };

  constructor(props) {
    super(props);

    const isContainer = this.props.container;
    const isContainerFluid = this.props['container-fluid'];

    if (!isContainer && !isContainerFluid) {
      this.wrapper = (p) => (<div>{p.children}</div>);
    } else if (isContainer) {
      this.wrapper = Container;
    } else if (isContainerFluid) {
      this.wrapper = ContainerFluid;
    }

    const isButton = this.props.button;

    if (!isButton) {
      this.button = Button;
    } else {
      this.button = this.props.button;
    }
  }

  render() {
    const {
      className,
      composeCollapsed,
      composePush,
      composeSlide,
    } = this.props;

    const classConfig = [];
    if (composeCollapsed) {
      classConfig.push('navbar-toggleable-md');
    }

    const cssClasses = cn('navbar', 'bd-navbar', classConfig, className, {
      'navbar-dark': this.props['navbar-dark'],
      'bg-inverse': this.props['navbar-dark'],
      'navbar-light': this.props['navbar-light'],
      'bg-faded': this.props['navbar-light'],
      'navbar-static-top': this.props['static-top'],
      'navbar-sticky-top': this.props['sticky-top'],
      'navbar-fixed-top': this.props['fixed-top'],
      'navbar-fixed-bottom': this.props['fixed-bottom'],
    });

    const Wrapper = this.wrapper;
    const ButtonToggle = this.button;

    const containerCollapse = (composeCollapsed) ? (
      <Container>
        <div className="d-flex justify-content-between hidden-lg-up">
          <A className="navbar-brand" href="/">
            {composeCollapsed.brandTitle}
          </A>
          <ButtonToggle
            className="navbar-toggler"
            type="button"
            onClick={composeCollapsed.onClick}
          />
        </div>
        <MenuCollapse active={composeCollapsed.isCollapsed}>
          {composeCollapsed.menuCollapsed.menu}
        </MenuCollapse>
      </Container>
    ) : null;

    const navTopPush = (composePush) ? (
      <div>
        <ButtonToggle
          className="navbar-toggler hidden-md-up float-xs-left ma-3"
          type="button"
          onClick={composePush.onClick}
        />
        <MenuAccount>
          {composePush.menuTop.menuAccount}
        </MenuAccount>
      </div>
    ) : null;

    const navTopSlide = (composeSlide) ? (
      <div>
        <ButtonToggle
          className="navbar-toggler float-xs-left ma-3"
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
      >
        {composePush.menuOffset.menu}
      </MenuPushMini>
    ) : null;

    const containerPush = (composePush && !composePush.isMini) ? (
      <MenuPushSimple
        active={!composePush.isHidden}
        menu-right={composePush.menuOffset.isRight}
        menu-left={composePush.menuOffset.isLeft}
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
            <Nav>
              {navTopPush}
              {navTopSlide}
              {containerCollapse}
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
            
    ${transition(
      props.theme['$enable-transitions'],
      props.theme['$header-navbar-transition-duration'],
    )}
    
    ${ifElse(
      props.composeCollapsed,
      `max-height: ${props.theme['$navbar-max-height']};`,
      `height: ${props.theme['$navbar-height']};`,
    )}
     
    & .collapse {
      max-height: 0;
      position: relative;
      overflow: hidden;
      ${transition(
        props.theme['$enable-transitions'],
        props.theme['$transition-collapse']
      )}
    
      &.active {
        display: block;
        max-height: ${props.theme['$header-max-height']};
      }
    }

    ${mediaBreakpointUp('sm',
      props.theme['$grid-breakpoints'],
      `
            & .collapse {
              height: auto;
              max-height: ${props.theme['$header-collapsed-max-height']};
            }
          `
    )}
  `}
`;


HeaderNavBar.defaultProps = defaultProps;

export default HeaderNavBar;
