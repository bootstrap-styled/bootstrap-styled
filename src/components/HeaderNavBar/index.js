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
import { ifElse } from '../../styled/mixins/conditional';
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
    button: PropTypes.bool,
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
    const classConfig = [];
    if (this.props.composeCollapsed) {
      classConfig.push('navbar-toggleable-md');
    }
    const cssClasses = cn('navbar', 'bd-navbar', classConfig, this.props.className, {
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

    return (
      <div>
        <Header className={cssClasses} ref={(node) => { this.node = node; }}>
          <Wrapper>
            <Nav>
              {this.props.composePush && (
                <div>
                  <ButtonToggle
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
                  <ButtonToggle
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
                  <div className="d-flex justify-content-between hidden-lg-up">
                    <A className="navbar-brand" href="/">
                      {this.props.composeCollapsed.brandTitle}
                    </A>
                    <ButtonToggle
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
          <MenuSlide
            active={!this.props.composeSlide.isHidden}
            menu-right={this.props.composeSlide.menuOffset.isRight}
            menu-left={this.props.composeSlide.menuOffset.isLeft}
          >
            {this.props.composeSlide.menuOffset.menu}
          </MenuSlide>
        )}
        {this.props.composePush && (
          <MenuPush
            active={!this.props.composePush.isHidden}
            menu-right={this.props.composePush.menuOffset.isRight}
            menu-left={this.props.composePush.menuOffset.isLeft}
          >
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
    
    ${getFlexUtilities(props.theme['$enable-flex'], props.theme['$grid-breakpoints'])}
        
    ${transition(
      props.theme['$enable-transitions'],
      '.6s'
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
