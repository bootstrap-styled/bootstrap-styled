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
import Clearfix from '../Clearfix';
import MenuCollapse from '../MenuCollapse';
import MenuSlide from '../MenuSlide';
import Container from '../Container';
import ContainerFluid from '../ContainerFluid';
import Button from '../Button';
import { transition } from '../../styled/mixins/transition';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import collapse from './composeCollapse';
import slide from './composeSlide';

export const composeCollapse = collapse;
export const composeSlide = slide;

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
    menu: PropTypes.node.isRequired,
    btnText: PropTypes.string,
    container: PropTypes.bool,
    composeCollapsed: PropTypes.shape({
      onToggleMenu: PropTypes.func.isRequired,
      isCollapsed: PropTypes.bool.isRequired,
    }),
    composeSlide: PropTypes.shape({
      onToggleMenu: PropTypes.func.isRequired,
      isHidden: PropTypes.bool.isRequired,
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

    if (this.props.composeCollapsed) {
      this.onToggleMenu = this.props.composeCollapsed.onToggleMenu;
    } else if (this.props.composeSlide) {
      this.onToggleMenu = this.props.composeSlide.onToggleMenu;
    }
  }

  render() {
    const cssClasses = cn('navbar', 'bd-navbar', this.props.className, {
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
              <Clearfix>
                <Button
                  className="navbar-toggler float-xs-right hidden-sm-up"
                  type="button"
                  onClick={this.onToggleMenu}
                />
                <A className="navbar-brand hidden-sm-up" href="/">
                  {title}
                </A>
              </Clearfix>
              {this.props.composeCollapsed && (
                <MenuCollapse active={this.props.composeCollapsed.isCollapsed}>
                  {this.props.menu}
                </MenuCollapse>
              )}
            </Nav>
          </Wrapper>
        </Header>
        {this.props.composeSlide && (
          <MenuSlide active={!this.props.composeSlide.isHidden} menu-right>
            {this.props.menu}
          </MenuSlide>
        )}
      </div>
    );
  }
}
// eslint-disable-next-line no-class-assign
HeaderNavBar = styled(HeaderNavBar)`
  ${(props) => `
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
