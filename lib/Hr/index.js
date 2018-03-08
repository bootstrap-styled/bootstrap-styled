'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  theme: {
    '$hr-border-width': '1px',
    '$hr-border-color': 'rgba(0, 0, 0, 0.1)'
  }
};
var propTypes = {
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$hr-border-width': _propTypes2.default.string,
    '$hr-border-color': _propTypes2.default.string
  })
};

var Hr = _styledComponents2.default.hr.withConfig({
  displayName: 'Hr'
})(['', ''], function (props) {
  return '\n    margin-top: ' + props.theme['$spacer-y'] + ';\n    margin-bottom: ' + props.theme['$spacer-y'] + ';\n    border: 0;\n    border-top: ' + props.theme['$hr-border-width'] + ' solid ' + props.theme['$hr-border-color'] + ';\n  ';
});

Hr.defaultProps = defaultProps;
Hr.propTypes = propTypes;

/** @component */
exports.default = Hr;
module.exports = exports['default'];