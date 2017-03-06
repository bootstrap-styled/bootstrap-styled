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
var MenuPushSimple = (0, _styledComponents2.default)(_MenuPush2.default).withConfig({
  displayName: 'MenuPushSimple__MenuPushSimple',
  componentId: 'MenuPushSimple__MenuPushSimple-i75voj'
})(['', ''], function (props) {
  return ' \n    ' + (0, _transition.transition)(props.theme['$enable-transitions'], 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms') + '\n    transform: translate3d(-102%, 0, 0);\n    ' + (0, _breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], '\n        transform: translateX(0);\n      ') + '\n    \n    &.menu-left {\n      left:0;\n    }\n    \n    &.menu-right {\n      right:0;\n    }\n    \n    &.active {\n      transform: translateX(0);\n      width: 100%;\n      ' + (0, _breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], '\n            display: block;\n            width: ' + props.theme['$menu-push-width'] + ';\n          ') + '\n    }\n  ';
});

MenuPushSimple.defaultProps = defaultProps;

exports.default = MenuPushSimple;