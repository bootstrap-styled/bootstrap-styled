'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Address = _styledComponents2.default.address.withConfig({
  displayName: 'Address'
})(['margin-bottom:1rem;font-style:normal;line-height:inherit;']);
/**
 * An address tag component used to display direct contact information for the author/owner of a document or an article
 * This component have no props so you should use it only for let web crawler (google...) know you display an address.
 */

/** @component */
exports.default = Address;
module.exports = exports['default'];