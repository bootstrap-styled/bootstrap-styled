'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _OffsetNav = require('./OffsetNav');

var _OffsetNav2 = _interopRequireDefault(_OffsetNav);

var _transition = require('../../styled/mixins/transition');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OffsetNavPush = (0, _styledComponents2.default)(_OffsetNav2.default).withConfig({
  displayName: 'OffsetNavPush__OffsetNavPush',
  componentId: 'OffsetNavPush__OffsetNavPush-10jzy6j'
})(['', ''], function (props) {
  return '\n    position: absolute;\n    top: 0;\n    ' + (0, _transition.transition)(props.theme['$enable-transitions'], 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms') + '\n\n    &.menu-left {\n      left: -' + props.theme['$menu-push-width'] + ';\n      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n    }\n    \n    &.menu-right {\n      right: -' + props.theme['$menu-push-width'] + ';\n      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n    }\n\n  ';
});

exports.default = OffsetNavPush;