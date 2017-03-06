'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.PropTypes.shape({
  menu: _react.PropTypes.node,
  isHidden: _react.PropTypes.bool.isRequired,
  isLeft: _react.PropTypes.bool,
  isRight: _react.PropTypes.bool,
  onClick: _react.PropTypes.func
});