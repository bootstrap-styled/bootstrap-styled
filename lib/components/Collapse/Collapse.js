'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCollapse = require('react-collapse');

var _reactCollapse2 = _interopRequireDefault(_reactCollapse);

var _styledComponents = require('styled-components');

var _composeCollapse = require('./composeCollapse');

var _composeCollapse2 = _interopRequireDefault(_composeCollapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _styledComponents.withTheme)((0, _composeCollapse2.default)(_reactCollapse2.default));