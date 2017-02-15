/**
 * NavBar
 */

import React, { PropTypes } from 'react';
import styled, { withTheme } from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import Collapse from 'react-collapse';
import A from 'components/A';
import MediaQuery from 'react-responsive';
import NavBarToggler from './NavBarToggler';
import { navbar } from '../../styled/utilities/navbar';
import { nav } from '../../styled/utilities/nav';
import { ifThen } from '../../styled/mixins/conditional';

const defaultProps = {
  brand: {
    component: A,
    text: 'fix', // important to correct the height if no text is provided
  },
  theme: bsTheme,
};

class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.object,
    toggler: PropTypes.shape({
      right: PropTypes.bool,
      left: PropTypes.bool,
      className: PropTypes.string,
    }),
    brand: PropTypes.shape({
      component: PropTypes.component,
      text: PropTypes.string.isRequired,
      className: PropTypes.string,
    }),
  };

  state = {
    isOpened: false,
  }

  handleToggler = () => {
    console.log('toggle state', !this.state.isOpened);
    this.setState({
      isOpened: !this.state.isOpened,
    });
  }

  render() {
    const { className, children, theme, toggler, brand, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const { component: NavBarBrand, text: textBrand, className: classNameBrand, ...restBrand } = brand;
    const { isOpened } = this.state;
    const { sm } = theme['$grid-breakpoints'];
    return (
      <nav className={cn(className, 'navbar')} {...rest}>
        {toggler && (
          <NavBarToggler className={toggler.className} left={toggler.left} right={toggler.right} onClick={this.handleToggler} />
        )}
        {textBrand && (
          <NavBarBrand className={cn(classNameBrand, 'navbar-brand')} {...restBrand}>{textBrand}</NavBarBrand>
        )}

        <MediaQuery maxDeviceWidth={sm}>
          <Collapse isOpened={isOpened}>
            {children}
          </Collapse>
        </MediaQuery>
        <Collapse isOpened={isOpened}>
          <MediaQuery maxDeviceWidth={sm}>
            {children}
          </MediaQuery>
        </Collapse>
        <MediaQuery minDeviceWidth={sm}>
          {children}
        </MediaQuery>
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
    ${ifThen(props.brand && props.brand.text === 'fix', '.navbar-brand { visibility: hidden !important ; }')}
  `}
`;

NavBar.defaultProps = defaultProps;

export default withTheme(NavBar);
