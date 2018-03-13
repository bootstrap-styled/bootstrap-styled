import styled from 'styled-components';
import { navbar } from 'bootstrap-styled-mixins/lib/navbar';
import { ifThen } from 'bootstrap-styled-mixins/lib/conditional';
import PropTypes from 'prop-types';

export const defaultProps = {
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$border-width': '1px',
    '$font-size-lg': '1.25rem',
    '$border-radius': '.25rem',
    '$navbar-padding-x': '1rem',
    '$navbar-padding-y': '0.5rem',
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
  /** Toggle shadow CSS style. */
  shadowHeader: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
    '$border-width': PropTypes.string,
    '$font-size-lg': PropTypes.string,
    '$border-radius': PropTypes.string,
    '$navbar-padding-x': PropTypes.string,
    '$navbar-padding-y': PropTypes.string,
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
};
/**
 * You can use `<Header />` with **components** or **className**.
 * Alternatively we provide **Display** header in order to give more flexibility on header sizing.
 */
const Header = styled.header`
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
    ${ifThen(
      props.shadowHeader,
      'box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);'
    )}
  `}  
`;

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

/** @component */
export default Header;
