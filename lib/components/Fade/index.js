'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _transition = require('../../styled/utilities/transition');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  isOpen: true,
  theme: _theme2.default
};

var Fade = function (_React$Component) {
  _inherits(Fade, _React$Component);

  function Fade() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fade);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fade.__proto__ || Object.getPrototypeOf(Fade)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      transitionEnterTimeout: null,
      transitionAppearTimeout: null,
      transitionLeaveTimeout: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fade, [{
    key: 'componentWillMount',
    // eslint-disable-line react/prefer-stateless-function

    value: function componentWillMount() {
      var theme = this.props.theme;

      var userThemeDurationInMs = (0, _transition.parseTransition)(theme['$enable-transitions'], theme['$transition-fade']);

      this.setState({
        transitionEnterTimeout: userThemeDurationInMs.duration,
        transitionAppearTimeout: userThemeDurationInMs.duration,
        transitionLeaveTimeout: userThemeDurationInMs.duration
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          children = _props.children,
          isOpen = _props.isOpen,
          rest = _objectWithoutProperties(_props, ['theme', 'children', 'isOpen']); // eslint-disable-line no-unused-vars


      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        _extends({
          transitionAppearTimeout: this.state.transitionEnterTimeout,
          transitionEnterTimeout: this.state.transitionAppearTimeout,
          transitionLeaveTimeout: this.state.transitionLeaveTimeout,
          transitionName: {
            appear: 'fade',
            appearActive: 'show',
            enter: 'fade',
            enterActive: 'show',
            leave: 'fade'
          }
        }, rest),
        isOpen ? children : null
      );
    }
  }]);

  return Fade;
}(_react2.default.Component);

Fade.defaultProps = defaultProps;
exports.default = (0, _styledComponents.withTheme)(Fade);