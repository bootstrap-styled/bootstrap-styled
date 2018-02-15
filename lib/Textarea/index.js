'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = _styledComponents2.default.textarea.withConfig({
  displayName: 'Textarea'
})(['touch-action:manipulation;line-height:inherit;resize:vertical;']);

/** @component */
/* A Textarea (Box) */

/**
 * A Textarea tag
 */
exports.default = Textarea;
module.exports = exports['default'];