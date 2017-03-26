'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _OffsetNav = require('./OffsetNav');

var _OffsetNav2 = _interopRequireDefault(_OffsetNav);

var _transition = require('../../styled/mixins/transition');

var _boxShadow = require('../../styled/mixins/box-shadow');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OffsetNavPush = (0, _styledComponents2.default)(_OffsetNav2.default).withConfig({
  displayName: 'OffsetNavPush__OffsetNavPush',
  componentId: 'OffsetNavPush__OffsetNavPush-1f6yq8a'
})(['', ''], function (props) {
  return '\n    position: absolute;\n    top: 0;\n\n    ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$menu-offset-nav-box-shadow']) + '    \n\n    &.menu-left {\n      left: -' + props.theme['$menu-push-width'] + ';\n      ' + (0, _transition.transition)(props.theme['$enable-transitions'], props.theme['$menu-offset-nav-transition']) + '\n    }\n    \n    &.menu-right {\n      right: -' + props.theme['$menu-push-width'] + ';\n      ' + (0, _transition.transition)(props.theme['$enable-transitions'], props.theme['$menu-offset-nav-transition']) + '\n    }\n\n  ';
});

exports.default = OffsetNavPush;