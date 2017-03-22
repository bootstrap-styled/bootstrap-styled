'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = _styledComponents2.default.textarea.withConfig({
  displayName: 'Textarea__Textarea',
  componentId: 'Textarea__Textarea-1muw0dc'
})(['touch-action: manipulation;line-height: inherit;/* Textareas should really only resize vertically so they don\'t break their (horizontal) containers. */resize: vertical;']); /* A Textarea (Box) */

/**
 * A Textarea tag
 */
exports.default = Textarea;