'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _propTypes2.default.node,
  isOpen: _propTypes2.default.bool.isRequired,
  toggle: _propTypes2.default.func.isRequired
};

var ButtonDropdown = function ButtonDropdown(props) {
  // eslint-disable-line arrow-body-style
  return _react2.default.createElement(_Dropdown2.default, _extends({}, props, { group: true }));
};

ButtonDropdown.propTypes = propTypes;

exports.default = ButtonDropdown;
module.exports = exports['default'];