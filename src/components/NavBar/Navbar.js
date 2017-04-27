/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import themeBs from '../../theme';
import { mapToCssModules } from 'utils/tools';
import { navbar } from '../../styled/mixins/navbar';
import { nav } from '../../styled/mixins/nav';


const defaultProps = {
  tag: 'nav',
  role: 'navigation',
  toggleable: false,
  theme: themeBs,
};

const getToggleableClass = (toggleable) => { // eslint-disable-line react/prefer-stateless-function
  if (toggleable === false) {
    return false;
  } else if (toggleable === true || toggleable === 'xs') {
    return 'navbar-toggleable';
  }

  return `navbar-toggleable-${toggleable}`;
};

class Navbar extends React.Component {
  static propTypes = {
    light: PropTypes.bool,
    inverse: PropTypes.bool,
    full: PropTypes.bool,
    fixed: PropTypes.string,
    sticky: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
    toggleable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    theme: PropTypes.object,
  };
  render() {
    const {
      toggleable,
      className,
      cssModule,
      light,
      inverse,
      full,
      fixed,
      sticky,
      color,
      tag: Tag,
      theme,  // eslint-disable-line
      ...attributes
    } = this.props;
  
    const classes = mapToCssModules(cn(
      className,
      'navbar',
      getToggleableClass(toggleable),
      {
        'navbar-light': light,
        'navbar-inverse': inverse,
        [`bg-${color}`]: color,
        'navbar-full': full,
        [`fixed-${fixed}`]: fixed,
        [`sticky-${sticky}`]: sticky,
      }
    ), cssModule);
  
    return(  
      <Tag {...attributes} className={classes} />
    )
  }
};

// eslint-disable-next-line no-class-assign
Navbar = styled(Navbar)`
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
Navbar.defaultProps = defaultProps;

export default Navbar;
