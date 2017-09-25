'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _transition = require('bootstrap-styled-mixins/lib/transition');

var _boxShadow = require('bootstrap-styled-mixins/lib/box-shadow');

var _OffsetNav = require('./OffsetNav');

var _OffsetNav2 = _interopRequireDefault(_OffsetNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OffsetNavSlide = (0, _styledComponents2.default)(_OffsetNav2.default).withConfig({
  displayName: 'OffsetNavSlide'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    ' + (0, _transition.transition)(props.theme['$enable-transitions'], props.theme['$menu-offset-nav-transition']) + '\n    ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$menu-offset-nav-box-shadow']) + '  \n    &.menu-left {\n      left: 0;\n      transform: translateX(-100%);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n    \n    &.menu-right {\n      right: 0;\n      transform: translateX(100%);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n\n  ';
});

exports.default = OffsetNavSlide;
module.exports = exports['default'];