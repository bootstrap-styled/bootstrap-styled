'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _Headings = require('./Headings');

var _Headings2 = _interopRequireDefault(_Headings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  theme: _theme2.default,
  tag: 'h2'
};

// eslint-disable-next-line no-class-assign
var H2 = (0, _styledComponents2.default)(_Headings2.default).withConfig({
  displayName: 'H2__H2'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h2'] + ';\n  ';
});

H2.defaultProps = defaultProps;

exports.default = H2;