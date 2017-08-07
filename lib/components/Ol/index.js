'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _lists = require('../../styled/mixins/lists');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = { theme: _theme2.default }; /**
                                                * Ordered List Tabs and Pills
                                                *
                                                * The form with a username and a password input field, both of which are
                                                * controlled via the application state.
                                                *
                                                */

var Ol = _styledComponents2.default.ol.withConfig({
  displayName: 'Ol__Ol'
})(['  ', ''], function (props) {
  return '\n    /* Type Scss */\n    &.list-unstyled {\n      ' + (0, _lists.listUnstyled)() + '\n    }\n\n    &.list-inline {\n      ' + (0, _lists.listInline)() + '\n    }\n\n    &.list-inline-item {\n      ' + (0, _lists.listInlineItem)(props.theme['$list-inline-padding']) + '\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n    margin-bottom: 1rem;\n\n    & ol,\n    & ul {\n      margin-bottom: 0;\n    }\n  ';
});

Ol.defaultProps = defaultProps;

exports.default = Ol;
module.exports = exports['default'];