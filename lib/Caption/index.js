'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* A Caption (Box) */

var defaultProps = { theme: _theme2.default };

var Caption = _styledComponents2.default.caption.withConfig({
  displayName: 'Caption'
})(['', ''], function (props) {
  return '\n    padding-top: ' + props.theme['$table-cell-padding'] + ';\n    padding-bottom: ' + props.theme['$table-cell-padding'] + ';\n    color: ' + props.theme['$text-muted'] + ';\n    text-align: left;\n    caption-side: top;\n  ';
});

Caption.defaultProps = defaultProps;

exports.default = Caption;
module.exports = exports['default'];