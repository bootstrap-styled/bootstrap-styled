'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mark component
 */

var defaultProps = { theme: _theme2.default };

var Mark = _styledComponents2.default.mark.withConfig({
  displayName: 'Mark__Mark',
  componentId: 'Mark__Mark-1mkw575'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    padding: ' + props.theme['$mark-padding'] + ';\n    background-color: ' + props.theme['$mark-bg'] + ';\n  ';
});

Mark.defaultProps = defaultProps;

exports.default = Mark;