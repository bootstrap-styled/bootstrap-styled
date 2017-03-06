'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _Close = require('../Close');

var _Close2 = _interopRequireDefault(_Close);

var _alert = require('../../styled/mixins/alert');

var _borderRadius = require('../../styled/mixins/border-radius');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Alert component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  closeLabel: 'Close',
  theme: _theme2.default
};

var Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dismissed: false
    }, _this.componentWillMount = function () {
      var dismissed = _this.props.dismissed;

      if (dismissed) {
        _this.setState({
          dismissed: dismissed
        });
      }
    }, _this.regAnimationDuration = new RegExp(/(\.\d+)s/), _this.handleDisappearing = function (alertElement) {
      var theme = _this.props.theme;

      var animationDurationMs = 0;

      if (theme['$enable-transition']) {
        var animationDurationS = theme['$transition-fade'].match(_this.regAnimationDuration)[1];
        animationDurationMs = parseFloat(animationDurationS) * 1000;
      }

      setTimeout(function () {
        alertElement.classList.add('d-none');
      }, animationDurationMs);
    }, _this.handleDismiss = function (e) {
      _this.setState({
        dismissed: true
      });

      var target = e.target;
      var alertElement = target.parentElement;
      while (!alertElement.classList.contains('alert-dismissible')) {
        alertElement = alertElement.parentElement;
      }
      _this.handleDisappearing(alertElement);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  // eg: [0] = .2s [1] = .2, assuming we only use animation shorter than 1 sec

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          unused = _props.dismissed,
          close = _props.close,
          children = _props.children,
          closeLabel = _props.closeLabel,
          rest = _objectWithoutProperties(_props, ['className', 'theme', 'dismissed', 'close', 'children', 'closeLabel']); // eslint-disable-line no-unused-vars


      var dismissed = this.state.dismissed;


      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)(className, 'alert', {
            'alert-dismissible': close,
            fade: close,
            show: close && !dismissed
          })
        }, rest),
        close && _jsx(_Close2.default, {
          onDismiss: this.handleDismiss
        }),
        children,
        close && _jsx(_Close2.default, {
          'sr-only': true,
          onDismiss: this.handleDismiss,
          closeLabel: closeLabel
        })
      );
    }
  }]);

  return Alert;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Alert = (0, _styledComponents2.default)(Alert).withConfig({
  displayName: 'Alert__Alert',
  componentId: 'Alert__Alert-hkoc2q'
})(['', ''], function (props) {
  return '\n    /*\n    Base styles\n    */\n    \n    &.alert{\n      padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n      margin-bottom: ' + props.theme['$alert-margin-bottom'] + ';\n      border: ' + props.theme['$alert-border-width'] + ' solid transparent;\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$alert-border-radius']) + '\n    }\n    \n    /* Headings for larger alerts */\n    &.alert-heading {\n      /* Specified to prevent conflicts of changing $headings-color */\n      color: inherit;\n    }\n    \n    /* Provide class for links that match alerts */\n    & .alert-link { \n      font-weight: ' + props.theme['$alert-link-font-weight'] + ';\n    }\n    \n    /* Dismissible alerts Expand the right padding and account for the close buttons positioning. */\n    \n    &.alert-dismissible {    \n      /* Adjust close link position */\n      & .close {\n        position: relative;\n        top: -' + props.theme['$alert-padding-y'] + ';\n        right: -' + props.theme['$alert-padding-x'] + ';\n        padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n        color: inherit;\n      }\n    }\n    /* Alternate styles Generate contextual modifier classes for colorizing the alert. */\n\n    &.alert-success{\n      ' + (0, _alert.alertVariant)(props.theme['$alert-success-bg'], props.theme['$alert-success-border'], props.theme['$alert-success-text']) + '    \n    }\n    &.alert-info{\n      ' + (0, _alert.alertVariant)(props.theme['$alert-info-bg'], props.theme['$alert-info-border'], props.theme['$alert-info-text']) + '\n    } \n    &.alert-warning{\n      ' + (0, _alert.alertVariant)(props.theme['$alert-warning-bg'], props.theme['$alert-warning-border'], props.theme['$alert-warning-text']) + ' \n    }\n    &.alert-danger{\n      ' + (0, _alert.alertVariant)(props.theme['$alert-danger-bg'], props.theme['$alert-danger-border'], props.theme['$alert-danger-text']) + ' \n    }\n  ';
});

Alert.defaultProps = defaultProps;

exports.default = (0, _styledComponents.withTheme)(Alert);