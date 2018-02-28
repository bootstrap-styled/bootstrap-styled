'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* A Caption (Box) */

var defaultProps = {
  theme: {
    '$table-cell-padding': '.75rem',
    '$text-muted': '#636c72'
  }
};
var propTypes = {
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$table-cell-padding': _propTypes2.default.string,
    '$text-muted': _propTypes2.default.string
  })
};
/**
 * A `<Caption />` tag component in order to add description title to a `<Table />` component.

 */
var Caption = _styledComponents2.default.caption.withConfig({
  displayName: 'Caption'
})(['', ''], function (props) {
  return '\n    padding-top: ' + props.theme['$table-cell-padding'] + ';\n    padding-bottom: ' + props.theme['$table-cell-padding'] + ';\n    color: ' + props.theme['$text-muted'] + ';\n    text-align: left;\n    caption-side: top;\n  ';
});

Caption.defaultProps = defaultProps;
Caption.propTypes = propTypes;

/** @component */
exports.default = Caption;
module.exports = exports['default'];