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
import theme from 'config';

import Header from '../Header';
import A from '../A';
import Nav from '../Nav';
import MenuCollapse from '../MenuCollapse';
import MenuSlide from '../MenuSlide';
import MenuPush from '../MenuPush';
import MenuAccount from '../MenuAccount';
import Container from '../Container';
import ContainerFluid from '../ContainerFluid';
import Button from '../Button';
import { transition } from '../../styled/mixins/transition';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import { getFlexUtilities } from '../../styled/utilities/flex';
import { navbarToggleable } from '../../styled/mixins/navbar-toggleable';
import shapeMenuOffsetPush from './shapeMenuOffsetPush';
import shapeMenuTopPush from './shapeMenuTopPush';
import shapeMenuOffsetSlide from './shapeMenuOffsetSlide';
import shapeMenuTopSlide from './shapeMenuTopSlide';
import shapeMenuCollapsed from './shapeMenuCollapsed';
import collapse from './composeCollapse';
import slide from './composeSlide';
import push from './composePush';

export const composeCollapse = collapse;
export const composeSlide = slide;
export const composePush = push;

const defaultProps = {
  theme,
  btnText: 'Bootstrap',
  container: false,
  'container-fluid': false,
  'navbar-dark': false,
  'navbar-light': true,
  'navbar-static-top': true,
  'navbar-fixed-top': false,
};

class HeaderNavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    btnText: PropTypes.string,
    container: PropTypes.bool,
    composeCollapsed: PropTypes.shape({
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
      menuOffset: shapeMenuOffsetPush,
      menuTop: shapeMenuTopPush,
    }),
    'container-fluid': PropTypes.bool,
    'navbar-dark': PropTypes.bool,
    'navbar-light': PropTypes.bool,
    'navbar-static-top': PropTypes.bool,
    'navbar-fixed-top': PropTypes.bool,
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
  }

  render() {
    const classConfig = [];
    if (this.props.composeCollapsed) {
      classConfig.push('navbar-toggleable-md');
    }
    const cssClasses = cn('navbar', 'bd-navbar', classConfig, this.props.className, {
      'navbar-dark': this.props['navbar-dark'],
      'bg-inverse': this.props['navbar-dark'],
      'navbar-light': !this.props['navbar-dark'] && this.props['navbar-light'],
      'bg-faded': !this.props['navbar-dark'] && this.props['navbar-light'],
      'navbar-static-top': !this.props['navbar-fixed-top'] && this.props['navbar-static-top'],
      'navbar-fixed-top': this.props['navbar-fixed-top'],

    });

    const title = this.props.btnText;
    const Wrapper = this.wrapper;

    return (
      <div>
        <Header className={cssClasses} ref={(node) => { this.node = node; }}>
          <Wrapper>
            <Nav>
              {this.props.composePush && (
              <div>
                <Button
                  className="navbar-toggler float-xs-left ma-2"
                  type="button"
                  onClick={this.props.composePush.onClick}
                />
                <MenuAccount>
                  {this.props.composePush.menuTop.menuAccount}
                </MenuAccount>
              </div>
              )}
              {this.props.composeSlide && (
                <div>
                  <Button
                    className="navbar-toggler float-xs-left ma-3"
                    type="button"
                    onClick={this.props.composeSlide.onClick}
                  />
                  <MenuAccount>
                    {this.props.composeSlide.menuTop.menuAccount}
                  </MenuAccount>
                </div>
              )}
              {this.props.composeCollapsed && (
                <Container>
                  <div className="d-flex justify-content-xs-between hidden-lg-up">
                    <A className="navbar-brand" href="/">
                      {title}
                    </A>
                    <Button
                      className="navbar-toggler"
                      type="button"
                      onClick={this.props.composeCollapsed.onClick}
                    />
                  </div>
                  <MenuCollapse active={this.props.composeCollapsed.isCollapsed}>
                    {this.props.composeCollapsed.menuCollapsed.menu}
                  </MenuCollapse>
                </Container>
              )}
            </Nav>
          </Wrapper>
        </Header>
        {this.props.composeSlide && (
          <MenuSlide active={!this.props.composeSlide.isHidden} menu-right={this.props.composeSlide.menuOffset.isRight} menu-left={this.props.composeSlide.menuOffset.isLeft}>
            {this.props.composeSlide.menuOffset.menu}
          </MenuSlide>
        )}
        {this.props.composePush && (
          <MenuPush active={!this.props.composePush.isHidden} menu-right={this.props.composePush.menuOffset.isRight} menu-left={this.props.composePush.menuOffset.isLeft}>
            {this.props.composePush.menuOffset.menu}
          </MenuPush>
        )}
      </div>
    );
  }
}
// eslint-disable-next-line no-class-assign
HeaderNavBar = styled(HeaderNavBar)`
  ${(props) => `
    
    outline: 1px solid #E7EAEC;
    
    ${getFlexUtilities(true, props.theme['$grid-breakpoints'])}
    ${navbarToggleable(props.theme['$grid-breakpoints'])}
    ${transition(
      props.theme['$enable-transitions'],
      props.theme['$menu-push-transition-duration']
    )}
    
    
    & .collapse {
      max-height: 0;
      position: relative;
      overflow: hidden;
      ${transition(
        props.theme['$enable-transitions'],
        'ease-in-out, .35s, max-height'
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
