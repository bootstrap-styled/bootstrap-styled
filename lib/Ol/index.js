'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lists = require('bootstrap-styled-mixins/lib/lists');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = {
  theme: {
    '$list-inline-padding': '5px'
  }
}; /**
    * Ordered List Tabs and Pills
    *
    * The form with a username and a password input field, both of which are
    * controlled via the application state.
    *
    */

var propTypes = exports.propTypes = {
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$list-inline-padding': _propTypes2.default.string
  })
};
var Ol = _styledComponents2.default.ol.withConfig({
  displayName: 'Ol'
})(['', ''], function (props) {
  return '\n    /* Type Scss */\n    &.list-unstyled {\n      ' + (0, _lists.listUnstyled)() + '\n    }\n\n    &.list-inline {\n      ' + (0, _lists.listInline)() + '\n    }\n\n    &.list-inline-item {\n      ' + (0, _lists.listInlineItem)(props.theme['$list-inline-padding']) + '\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n    margin-bottom: 1rem;\n\n    & ol,\n    & ul {\n      margin-bottom: 0;\n    }\n  ';
});

Ol.defaultProps = defaultProps;
Ol.propTypes = propTypes;

/** @component */
exports.default = Ol;