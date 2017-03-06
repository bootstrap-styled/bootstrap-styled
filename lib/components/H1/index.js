'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../styled/mixins/typography');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = { theme: _theme2.default };

// eslint-disable-next-line no-class-assign
/**
 * H1 Component
 *
 *
 */
var H1 = _styledComponents2.default.h1.withConfig({
  displayName: 'H1__H1',
  componentId: 'H1__H1-s985iy'
})(['', ''], function (props) {
  return '\n\n    font-size: ' + props.theme['$font-size-h1'] + ';\n    ' + (0, _typography.typography)(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});

H1.defaultProps = defaultProps;

exports.default = H1;