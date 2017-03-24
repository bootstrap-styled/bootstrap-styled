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

var _lists = require('../../styled/mixins/lists');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = { theme: _theme2.default }; /**
                                                * Ordered List Tabs and Pills
                                                *
                                                * The form with a username and a password input field, both of which are
                                                * controlled via the application state.
                                                *
                                                */

var Ol = _styledComponents2.default.ol.withConfig({
  displayName: 'Ol__Ol',
  componentId: 'Ol__Ol-1tage47'
})([' ', ''], function (props) {
  return '\n    ' + (0, _nav.nav)(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n    ' + (0, _breadcrumb.breadcrumb)(props.theme['$enable-rounded'], props.theme['$border-radius'], props.theme['$breadcrumb-padding-y'], props.theme['$breadcrumb-padding-x'], props.theme['$spacer-y'], props.theme['$breadcrumb-bg'], props.theme['$breadcrumb-item-padding'], props.theme['$breadcrumb-divider-color'], props.theme['$breadcrumb-divider'], props.theme['$breadcrumb-active-color']) + '\n\n    /* Type Scss */\n    &.list-unstyled {\n      ' + (0, _lists.listUnstyled)() + '\n    }\n\n    &.list-inline {\n      ' + (0, _lists.listInline)() + '\n    }\n\n    &.list-inline-item {\n      ' + (0, _lists.listInlineItem)(props.theme['$list-inline-padding']) + '\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n    margin-bottom: 1rem;\n\n    & ol,\n    & ul {\n      margin-bottom: 0;\n    }\n  ';
});

Ol.defaultProps = defaultProps;

exports.default = Ol;