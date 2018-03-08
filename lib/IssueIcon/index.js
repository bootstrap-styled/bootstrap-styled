'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IssueIcon(props) {
  return _react2.default.createElement(
    'svg',
    {
      height: '1em',
      width: '0.875em',
      className: props.className
    },
    _react2.default.createElement('path', { d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z' })
  );
}

IssueIcon.propTypes = {
  className: _propTypes2.default.string
};

/** @component */
exports.default = IssueIcon;
module.exports = exports['default'];