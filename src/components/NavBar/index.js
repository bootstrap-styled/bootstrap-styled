/**
 * NavBar
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { navbar } from '../../styled/utilities/navbar';
import { nav } from '../../styled/utilities/nav';

const defaultProps = { theme: bsTheme };

class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.object,
  };

  render() {
    const { className, children, theme, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <nav className={cn(className, 'navbar')} {...rest}>
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
  `}
`;

NavBar.defaultProps = defaultProps;

export default NavBar;
