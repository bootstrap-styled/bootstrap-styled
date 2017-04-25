'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mathUtils = require('math-utils');

var _tools = require('utils/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* ProgressBar */

var ProgressBar = function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProgressBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      classNameProgress: '',
      classNameProgressBar: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  _createClass(ProgressBar, [{
    key: 'getWidth',
    value: function getWidth(valueNow, valueMin, valueMax) {
      return _mathUtils.rangeUtils.mapBetween(valueNow, valueMin, valueMax) + '%';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          className = _props.className,
          cssModule = _props.cssModule,
          valueNow = _props.valueNow,
          valueMin = _props.valueMin,
          valueMax = _props.valueMax,
          height = _props.height,
          striped = _props.striped,
          animated = _props.animated,
          rest = _objectWithoutProperties(_props, ['children', 'color', 'className', 'cssModule', 'valueNow', 'valueMin', 'valueMax', 'height', 'striped', 'animated']); // eslint-disable-line no-unused-vars

      var progressBarClasses = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, 'progress-bar', animated ? 'progress-bar-animated' : null, color ? 'bg-' + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);

      return _react2.default.createElement(
        'div',
        _extends({
          className: progressBarClasses,
          style: Object.assign({ width: this.getWidth(valueNow, valueMin, valueMax) }, { height: height })
        }, rest),
        children
      );
    }
  }]);

  return ProgressBar;
}(_react2.default.Component);

ProgressBar.defaultProps = {
  valueMin: 0,
  valueMax: 100,
  valueNow: 0,
  striped: false,
  animated: false
};
exports.default = ProgressBar;