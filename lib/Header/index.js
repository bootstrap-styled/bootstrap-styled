'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _navbar = require('bootstrap-styled-mixins/lib/navbar');

var _conditional = require('bootstrap-styled-mixins/lib/conditional');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = {
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
    '$navbar-inverse-disabled-color': 'rgba(255, 255, 255, 0.25)'
  }
};
var propTypes = exports.propTypes = {
  /** Toggle shadow CSS style. */
  shadowHeader: _propTypes2.default.bool,
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$enable-rounded': _propTypes2.default.bool,
    '$enable-hover-media-query': _propTypes2.default.bool,
    '$border-width': _propTypes2.default.string,
    '$font-size-lg': _propTypes2.default.string,
    '$border-radius': _propTypes2.default.string,
    '$navbar-padding-x': _propTypes2.default.string,
    '$navbar-padding-y': _propTypes2.default.string,
    '$zindex-navbar': _propTypes2.default.string,
    '$zindex-navbar-fixed': _propTypes2.default.string,
    '$zindex-navbar-sticky': _propTypes2.default.string,
    '$navbar-brand-padding-y': _propTypes2.default.string,
    '$navbar-divider-padding-y': _propTypes2.default.string,
    '$navbar-toggler-padding-y': _propTypes2.default.string,
    '$navbar-toggler-padding-x': _propTypes2.default.string,
    '$navbar-toggler-font-size': _propTypes2.default.string,
    '$navbar-toggler-border-radius': _propTypes2.default.string,
    '$navbar-light-active-color': _propTypes2.default.string,
    '$navbar-light-color': _propTypes2.default.string,
    '$navbar-light-hover-color': _propTypes2.default.string,
    '$navbar-light-toggler-border': _propTypes2.default.string,
    '$navbar-light-disabled-color': _propTypes2.default.string,
    '$navbar-light-toggler-bg': _propTypes2.default.string,
    '$navbar-inverse-active-color': _propTypes2.default.string,
    '$navbar-inverse-color': _propTypes2.default.string,
    '$navbar-inverse-hover-color': _propTypes2.default.string,
    '$navbar-inverse-toggler-border': _propTypes2.default.string,
    '$navbar-inverse-toggler-bg': _propTypes2.default.string,
    '$navbar-inverse-disabled-color': _propTypes2.default.string
  })
};
/**
 * You can use `<Header />` with **components** or **className**.
 * Alternatively we provide **Display** header in order to give more flexibility on header sizing.
 */
var Header = _styledComponents2.default.header.withConfig({
  displayName: 'Header'
})(['', '  '], function (props) {
  return '\n    ' + (0, _navbar.navbar)(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n    ' + (0, _conditional.ifThen)(props.shadowHeader, 'box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);') + '\n  ';
});

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

/** @component */
exports.default = Header;