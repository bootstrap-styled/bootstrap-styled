'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = composeRotation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function composeRotation(AbstractAnim, variableName) {
  var Rotation = function Rotation(props) {
    var rotation = props.rotation,
        theme = props.theme,
        rest = _objectWithoutProperties(props, ['rotation', 'theme']);

    var degree = rotation || theme[variableName];
    if (!isNaN(rotation) || degree.indexOf('deg') === -1) {
      degree = parseInt(degree, 10).toString() + 'deg';
    }

    return _react2.default.createElement(AbstractAnim, _extends({
      rotation: degree
    }, rest));
  };

  Rotation.propTypes = {
    theme: _propTypes2.default.object,
    rotation: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  };

  return (0, _styledComponents.withTheme)(Rotation);
}
module.exports = exports['default'];