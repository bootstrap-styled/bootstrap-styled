'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _clearfix = require('../../styled/mixins/clearfix');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clearfix
 */

var Clearfix = _styledComponents2.default.div.withConfig({
  displayName: 'Clearfix__Clearfix',
  componentId: 'Clearfix__Clearfix-1hcfztr'
})(['', ''], (0, _clearfix.clearfix)());

exports.default = Clearfix;