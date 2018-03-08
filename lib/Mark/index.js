'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mark component
 */

var defaultProps = {
  theme: {
    '$mark-padding': '.2em',
    '$mark-bg': '#fcf8e3'
  }
};
var propTypes = {
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$mark-padding': _propTypes2.default.string,
    '$mark-bg': _propTypes2.default.string
  })
};
var Mark = _styledComponents2.default.mark.withConfig({
  displayName: 'Mark'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    padding: ' + props.theme['$mark-padding'] + ';\n    background-color: ' + props.theme['$mark-bg'] + ';\n  ';
});

Mark.defaultProps = defaultProps;
Mark.propTypes = propTypes;

/** @component */
exports.default = Mark;
module.exports = exports['default'];