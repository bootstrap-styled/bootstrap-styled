/**
 * Nav Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { nav } from 'bootstrap-styled-mixins/lib/nav';
import { navbar as navbarMixin } from 'bootstrap-styled-mixins/lib/navbar';
import Ul from '../Ul';


export const defaultProps = {
  tag: Ul,
  toggleable: 'false',
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$border-width': '1px',
    '$font-size-lg': '1.25rem',
    '$body-bg': '#fff',
    '$component-active-bg': '#0275d8',
    '$component-active-color': '#fff',
    '$border-radius': '.25rem',
    '$navbar-padding-x': '1rem',
    '$navbar-padding-y': '0.5rem',
    '$nav-link-padding': '.5em 1em',
    '$nav-disabled-link-color': '#636c72',
    '$nav-tabs-border-color': '#ddd',
    '$nav-tabs-border-width': '1px',
    '$nav-tabs-border-radius': '.5em 1em',
    '$nav-tabs-link-hover-border-color': '#eceeef',
    '$nav-tabs-active-link-hover-color': '#464a4c',
    '$nav-tabs-active-link-hover-bg': '#fff',
    '$nav-tabs-active-link-hover-border-color': '#ddd',
    '$nav-pills-border-radius': '.25rem',
    '$nav-pills-active-link-color': '#fff',
    '$nav-pills-active-link-bg': '#0275d8',
    '$cursor-disabled': 'not-allowed',
    '$zindex-navbar': '1000',
    '$zindex-navbar-fixed': '1030',
    '$zindex-navbar-sticky': '1030',
    '$navbar-brand-padding-y': '.25rem',
    '$navbar-divider-padding-y': '.425rem',
    '$navbar-toggler-padding-y': '.5rem',
    '$navbar-toggler-padding-x': '.75rem',
    '$navbar-toggler-font-size': '1.25rem',
    '$navbar-toggler-border-radius': '.25rem',
    '$navbar-light-active-color': 'rgba(0,0,0,.9)',
    '$navbar-light-color': 'rgba(0,0,0,.5)',
    '$navbar-light-hover-color': 'rgba(0,0,0,.7)',
    '$navbar-light-toggler-border': 'rgba(0,0,0,.1)',
    '$navbar-light-disabled-color': 'rgba(0, 0, 0, 0.3)',
    '$navbar-light-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0,0,0,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-active-color': 'rgba(255,255,255,1)',
    '$navbar-inverse-color': 'rgba(255,255,255,.5)',
    '$navbar-inverse-hover-color': 'rgba(255,255,255,.75)',
    '$navbar-inverse-toggler-border': 'rgba(255,255,255,.1)',
    '$navbar-inverse-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-disabled-color': 'rgba(255, 255, 255, 0.25)',
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Toggles passed as a string. Can be `true` or `false` */
  toggleable: PropTypes.string,
  /** Toggles inline CSS style. */
  inline: PropTypes.bool,
  /** Toggles vertical CSS style. */
  vertical: PropTypes.bool,
  /** Toggles justified CSS style. */
  justified: PropTypes.bool,
  /** Toggles fill CSS style. */
  fill: PropTypes.bool,
  /** Toggles tabs CSS style. */
  tabs: PropTypes.bool,
  /** Toggles pills CSS style. */
  pills: PropTypes.bool,
  /** Toggles stacked CSS style. */
  stacked: PropTypes.bool,
  /** Toggles navbar CSS style. */
  navbar: PropTypes.bool,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$border-width': PropTypes.string,
    '$font-size-lg': PropTypes.string,
    '$body-bg': PropTypes.string,
    '$component-active-bg': PropTypes.string,
    '$component-active-color': PropTypes.string,
    '$border-radius': PropTypes.string,
    '$navbar-padding-x': PropTypes.string,
    '$navbar-padding-y': PropTypes.string,
    '$nav-link-padding': PropTypes.string,
    '$nav-disabled-link-color': PropTypes.string,
    '$nav-tabs-border-color': PropTypes.string,
    '$nav-tabs-border-width': PropTypes.string,
    '$nav-tabs-border-radius': PropTypes.string,
    '$nav-tabs-link-hover-border-color': PropTypes.string,
    '$nav-tabs-active-link-hover-color': PropTypes.string,
    '$nav-tabs-active-link-hover-bg': PropTypes.string,
    '$nav-tabs-active-link-hover-border-color': PropTypes.string,
    '$nav-pills-border-radius': PropTypes.string,
    '$nav-pills-active-link-color': PropTypes.string,
    '$nav-pills-active-link-bg': PropTypes.string,
    '$cursor-disabled': PropTypes.string,
    '$zindex-navbar': PropTypes.string,
    '$zindex-navbar-fixed': PropTypes.string,
    '$zindex-navbar-sticky': PropTypes.string,
    '$navbar-brand-padding-y': PropTypes.string,
    '$navbar-divider-padding-y': PropTypes.string,
    '$navbar-toggler-padding-y': PropTypes.string,
    '$navbar-toggler-padding-x': PropTypes.string,
    '$navbar-toggler-font-size': PropTypes.string,
    '$navbar-toggler-border-radius': PropTypes.string,
    '$navbar-light-active-color': PropTypes.string,
    '$navbar-light-color': PropTypes.string,
    '$navbar-light-hover-color': PropTypes.string,
    '$navbar-light-toggler-border': PropTypes.string,
    '$navbar-light-disabled-color': PropTypes.string,
    '$navbar-light-toggler-bg': PropTypes.string,
    '$navbar-inverse-active-color': PropTypes.string,
    '$navbar-inverse-color': PropTypes.string,
    '$navbar-inverse-hover-color': PropTypes.string,
    '$navbar-inverse-toggler-border': PropTypes.string,
    '$navbar-inverse-toggler-bg': PropTypes.string,
    '$navbar-inverse-disabled-color': PropTypes.string,
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
  /** Toggles disabled CSS style. */
};
class NavUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      tabs,
      pills,
      fill,
      inline,
      stacked,
      vertical,
      justified,
      navbar,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      navbar ? 'navbar-nav' : 'nav',
      {
        'nav-tabs': tabs,
        'nav-pills': pills,
        'nav-fill': fill,
        'nav-inline': inline,
        'nav-stacked': stacked,
        'nav-justified': justified,
        'flex-column': vertical,
      }
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}
/**
 * A classic `<Nav />` component.
 * Use **list** or **link based**, with **horizontal** or **vertical** alignment.
 * you can also use `tabs` or `pills` attributes with `justified` and `fill` attributes.
 * It also work well with with **flex utilities** and you can even add `<Dropdown />` menu.
 */
const Nav = styled(NavUnstyled)`
  ${(props) => `
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
    
    ${navbarMixin(
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
  `}
`;

Nav.defaultProps = defaultProps;
Nav.propTypes = propTypes;

/** @component */
export default Nav;
