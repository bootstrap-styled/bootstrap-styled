'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HeaderNavBar = require('./HeaderNavBar');

var _HeaderNavBar2 = _interopRequireDefault(_HeaderNavBar);

var _composeCollapse = require('./composeCollapse');

var _composeCollapse2 = _interopRequireDefault(_composeCollapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _composeCollapse2.default)(_HeaderNavBar2.default);