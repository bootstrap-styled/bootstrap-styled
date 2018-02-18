'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sup = /*#__PURE__*/_styledComponents2.default.sup.withConfig({
  displayName: 'Sup'
})(['position:relative;font-size:75%;line-height:0;vertical-align:baseline;top:-.5em;']);
/** @component */
exports.default = Sup;
module.exports = exports['default'];