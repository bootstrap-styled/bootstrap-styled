'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fa = function (_React$Component) {
  _inherits(Fa, _React$Component);

  function Fa() {
    _classCallCheck(this, Fa);

    return _possibleConstructorReturn(this, (Fa.__proto__ || Object.getPrototypeOf(Fa)).apply(this, arguments));
  }

  _createClass(Fa, [{
    key: 'render',
    value: function render() {
      var _cn;

      var _props = this.props,
          className = _props.className,
          size = _props.size,
          color = _props.color,
          attributes = _objectWithoutProperties(_props, ['className', 'size', 'color']);

      var classes = (0, _classnames2.default)(className, 'fa', (_cn = {}, _defineProperty(_cn, 'text-' + color, color), _defineProperty(_cn, 'fa-' + size, size), _cn));

      return _react2.default.createElement('i', {
        className: (0, _classnames2.default)(classes, Object.keys(attributes).map(function (key) {
          return 'fa-' + key;
        }))
      });
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Fa;
}(_react2.default.Component);
// eslint-disable-next-line no-class-assign


Fa.propTypes = {
  className: _propTypes2.default.string,
  size: _propTypes2.default.string,
  color: _propTypes2.default.string
};
Fa = (0, _styledComponents2.default)(Fa).withConfig({
  displayName: 'Fa__Fa'
})(['&.fa-lg{vertical-align:-2%;}']);

exports.default = Fa;
module.exports = exports['default'];