'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = composeDistance;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function composeDistance(AbstractAnim, variableName) {
  var Distance = function Distance(props) {
    var distance = props.distance,
        theme = props.theme,
        rest = _objectWithoutProperties(props, ['distance', 'theme']);

    return _react2.default.createElement(AbstractAnim, _extends({
      distance: distance || theme[variableName]
    }, rest));
  };

  Distance.propTypes = {
    theme: _propTypes2.default.object,
    distance: _propTypes2.default.string
  };

  return (0, _styledComponents.withTheme)(Distance);
}
module.exports = exports['default'];