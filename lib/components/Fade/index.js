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

var _styledComponents = require('styled-components');

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _parseTransition = require('../../utils/parseTransition');

var _parseTransition2 = _interopRequireDefault(_parseTransition);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

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
  } // eslint-disable-line react/prefer-stateless-function

  _createClass(Fade, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var theme = this.props.theme;

      var userThemeTransitionList = (0, _parseTransition2.default)(theme['$transition-fade']);
      this.setState({
        transitionEnterTimeout: userThemeTransitionList[0].duration,
        transitionAppearTimeout: userThemeTransitionList[0].duration,
        transitionLeaveTimeout: userThemeTransitionList[0].duration
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme', 'innerRef']),
          children = _omit.children,
          isOpen = _omit.isOpen,
          rest = _objectWithoutProperties(_omit, ['children', 'isOpen']);

      return _react2.default.createElement(
        _CSSTransitionGroup2.default,
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

Fade.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  children: _propTypes2.default.node.isRequired,
  theme: _propTypes2.default.object,
  isOpen: _propTypes2.default.bool
  /* eslint-enable react/no-unused-prop-types */
};


Fade.defaultProps = defaultProps;
exports.default = (0, _styledComponents.withTheme)(Fade);
module.exports = exports['default'];