/**
 * NavBar
 */

import React, { PropTypes } from 'react';
import styled, { withTheme } from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import A from 'components/A';
import Collapse from 'components/Collapse/Collapse';
import NavBarToggler from './NavBarToggler';
import Container from '../Container';
import { navbar } from '../../styled/mixins/navbar';
import { nav } from '../../styled/mixins/nav';
import { ifThen } from '../../styled/mixins/conditional';

const defaultProps = {
  brand: {
    component: A,
    children: 'fix', // important to correct the height if no text is provided
  },
  theme: bsTheme,
};

class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.text,
      PropTypes.node,
    ]),
    className: PropTypes.string,
    theme: PropTypes.object,
    contained: PropTypes.shape({
      className: PropTypes.string,
    }),
    toggler: PropTypes.shape({
      right: PropTypes.bool,
      left: PropTypes.bool,
      className: PropTypes.string,
    }),
    collapse: PropTypes.shape({
      children: PropTypes.oneOfType([
        PropTypes.text,
        PropTypes.node,
      ]).isRequired,
      className: PropTypes.string,
    }),
    brand: PropTypes.shape({
      component: PropTypes.component,
      children: PropTypes.oneOfType([
        PropTypes.text,
        PropTypes.node,
      ]).isRequired,
      className: PropTypes.string,
    }),
    'navbar-inverse': PropTypes.bool,
    'navbar-light': PropTypes.bool,
    'static-top': PropTypes.bool,
    'sticky-top': PropTypes.bool,
    'fixed-top': PropTypes.bool,
    'fixed-bottom': PropTypes.bool,
    'bg-inverse': PropTypes.bool,
    'bg-faded': PropTypes.bool,
  };

  state = {
    isOpened: false,
  }

  componentWillMount() {
    this.closeCollapse();
  }

  componentDidMount() {
    window.addEventListener('resize', this.closeCollapse);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.closeCollapse);
  }

  closeCollapse = () => {
    this.setState({ isOpened: false });
  }

  handleToggler = () => {
    this.setState({
      isOpened: !this.state.isOpened,
    });
  }

  render() {
    const {
      className,
      children,
      theme,  // eslint-disable-line no-unused-vars
      toggler,
      brand,
      collapse,
      contained,
      'navbar-inverse': navbarInverse,
      'bg-inverse': bgInverse,
      'navbar-light': navbarLight,
      'bg-faded': bgFaded,
      'static-top': staticTop,
      'sticky-top': stickyTop,
      'fixed-top': fixedTop,
      'fixed-bottom': fixedBottom,
      ...rest
    } = this.props;

    const { component: NavBarBrand, children: childrenBrand, className: classNameBrand, ...restBrand } = brand;
    const { children: childrenCollapse, className: classNameCollapse, ...restCollapse } = collapse || {};
    const { className: containerClassName } = contained || {};

    const { isOpened } = this.state;

    const cssClasses = cn('navbar', className, {
      'navbar-inverse': navbarInverse,
      'bg-inverse': bgInverse,
      'navbar-light': navbarLight,
      'bg-faded': bgFaded,
      'navbar-static-top': staticTop,
      'navbar-sticky-top': stickyTop,
      'navbar-fixed-top': fixedTop,
      'navbar-fixed-bottom': fixedBottom,
    });

    return contained ? (
      <nav className={cssClasses} {...rest}>
        <Container>
          <div className={containerClassName}>
            {toggler && (
              <NavBarToggler className={toggler.className} left={toggler.left} right={toggler.right} onClick={this.handleToggler} />
            )}
            {childrenBrand && (
              <NavBarBrand className={cn('navbar-brand', classNameBrand)} {...restBrand}>{childrenBrand}</NavBarBrand>
            )}
          </div>
          {childrenCollapse && (
            <Collapse isOpened={isOpened} keepCollapsedContent className={cn('navbar-collapse', classNameCollapse)} {...restCollapse}>
              {childrenCollapse}
            </Collapse>
          )}
          {children}
        </Container>
      </nav>
    ) : (
      <nav className={cssClasses} {...rest}>
        {toggler && (
          <NavBarToggler className={toggler.className} left={toggler.left} right={toggler.right} onClick={this.handleToggler} />
        )}
        {childrenBrand && (
          <NavBarBrand className={cn('navbar-brand', classNameBrand)} {...restBrand}>{childrenBrand}</NavBarBrand>
        )}
        {childrenCollapse && (
          <Collapse isOpened={isOpened} keepCollapsedContent className={cn('navbar-collapse', classNameCollapse)} {...restCollapse}>
            {childrenCollapse}
          </Collapse>
        )}
        {children}
      </nav>
    );
  }
}

// eslint-disable-next-line no-class-assign
NavBar = styled(NavBar)`
  ${(props) => `
    ${navbar(
      props.theme['$grid-breakpoints'],
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$navbar-padding-y'],
      props.theme['$navbar-padding-x'],
      props.theme['$zindex-navbar'],
      props.theme['$zindex-navbar-fixed'],
      props.theme['$zindex-navbar-sticky'],
      props.theme['$navbar-brand-padding-y'],
      props.theme['$font-size-lg'],
      props.theme['$navbar-divider-padding-y'],
      props.theme['$navbar-toggler-padding-y'],
      props.theme['$navbar-toggler-padding-x'],
      props.theme['$navbar-toggler-font-size'],
      props.theme['$border-width'],
      props.theme['$navbar-toggler-border-radius'],
      props.theme['$navbar-light-active-color'],
      props.theme['$navbar-light-color'],
      props.theme['$navbar-light-hover-color'],
      props.theme['$navbar-light-toggler-border'],
      props.theme['$navbar-light-disabled-color'],
      props.theme['$navbar-light-toggler-bg'],
      props.theme['$navbar-inverse-active-color'],
      props.theme['$navbar-inverse-color'],
      props.theme['$navbar-inverse-hover-color'],
      props.theme['$navbar-inverse-toggler-border'],
      props.theme['$navbar-inverse-toggler-bg'],
      props.theme['$navbar-inverse-disabled-color'],
    )}
    ${nav(
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$nav-link-padding'],
      props.theme['$nav-disabled-link-color'],
      props.theme['$cursor-disabled'],
      props.theme['$nav-tabs-border-width'],
      props.theme['$nav-tabs-border-color'],
      props.theme['$nav-tabs-border-radius'],
      props.theme['$nav-tabs-link-hover-border-color'],
      props.theme['$nav-tabs-active-link-hover-color'],
      props.theme['$nav-tabs-active-link-hover-bg'],
      props.theme['$nav-tabs-active-link-hover-border-color'],
      props.theme['$nav-pills-border-radius'],
      props.theme['$nav-pills-active-link-color'],
      props.theme['$nav-pills-active-link-bg'],
    )}
    ${ifThen(props.brand && props.brand.children === 'fix', '.navbar-brand { visibility: hidden !important ; }')}
  `}
`;

NavBar.defaultProps = defaultProps;

export default withTheme(NavBar);
