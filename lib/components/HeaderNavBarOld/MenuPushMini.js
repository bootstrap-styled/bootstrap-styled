'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _transition = require('../../styled/mixins/transition');

var _breakpoints = require('../../styled/mixins/breakpoints');

var _MenuPush = require('./MenuPush');

var _MenuPush2 = _interopRequireDefault(_MenuPush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * MenuPush Component
 *
 *
 */
var defaultProps = { theme: _theme2.default };

// eslint-disable-next-line no-class-assign
var MenuPushMini = (0, _styledComponents2.default)(_MenuPush2.default).withConfig({
  displayName: 'MenuPushMini__MenuPushMini',
  componentId: 'MenuPushMini__MenuPushMini-di7por'
})(['', ''], function (props) {
  return '\n\n    width: ' + props.theme['$menu-push-mini-width'] + ';\n    ' + (0, _transition.transition)(props.theme['$enable-transitions'], props.theme['$menu-transition-duration']) + '\n  \n    &.menu-left {\n      left:0;\n      transform: translate3d(-' + props.theme['$menu-push-mini-width'] + ',0,0);\n      opacity: 0;\n      &.active {\n        transform: translateX(0);\n        opacity: 1;\n      }\n      ' + (0, _breakpoints.mediaBreakpointUp)('md', props.theme['$grid-breakpoints'], '\n          opacity: 1;\n          transform: translateX(0);\n          width: ' + props.theme['$menu-push-width'] + ';\n          &.active {\n            transform: translateX(0);\n            width: ' + props.theme['$menu-push-mini-width'] + ';\n          }\n        ') + '\n    }\n    &.menu-right {\n      right:0;\n      transform: translate3d(' + props.theme['$menu-push-mini-width'] + ',0,0);\n      &.active {\n        transform: translateX(0);\n      }\n      ' + (0, _breakpoints.mediaBreakpointUp)('md', props.theme['$grid-breakpoints'], '\n          transform: translateX(0);\n          width: ' + props.theme['$menu-push-width'] + ';\n          &.active {\n            transform: translateX(0);\n            width: ' + props.theme['$menu-push-mini-width'] + ';\n          }\n        ') + '\n    }\n  ';
});

MenuPushMini.defaultProps = defaultProps;

exports.default = MenuPushMini;