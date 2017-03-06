'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _nav = require('../../styled/mixins/nav');

var _breadcrumb = require('../../styled/mixins/breadcrumb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Nav Component
 *
 *
 */
var defaultProps = { theme: _theme2.default };

// eslint-disable-next-line no-class-assign
var Nav = _styledComponents2.default.nav.withConfig({
  displayName: 'Nav__Nav',
  componentId: 'Nav__Nav-112hn0s'
})(['', ''], function (props) {
  return '\n    ' + (0, _nav.nav)(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n    ' + (0, _breadcrumb.breadcrumb)(props.theme['$enable-rounded'], props.theme['$border-radius'], props.theme['$breadcrumb-padding-y'], props.theme['$breadcrumb-padding-x'], props.theme['$spacer-y'], props.theme['$breadcrumb-bg'], props.theme['$breadcrumb-item-padding'], props.theme['$breadcrumb-divider-color'], props.theme['$breadcrumb-divider'], props.theme['$breadcrumb-active-color']) + '\n  ';
});

Nav.defaultProps = defaultProps;

exports.default = Nav;