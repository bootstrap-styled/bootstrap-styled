'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _tools = require('utils/tools');

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
  color: 'success',
  isOpen: true,
  tag: 'div',
  transitionAppearTimeout: 150,
  transitionEnterTimeout: 150,
  transitionLeaveTimeout: 150,
  theme: _theme2.default
};

var FirstChild = function FirstChild(_ref) {
  var children = _ref.children;
  return _react2.default.Children.toArray(children)[0] || null;
};

var Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          color = _omit.color,
          isOpen = _omit.isOpen,
          toggle = _omit.toggle,
          children = _omit.children,
          transitionAppearTimeout = _omit.transitionAppearTimeout,
          transitionEnterTimeout = _omit.transitionEnterTimeout,
          transitionLeaveTimeout = _omit.transitionLeaveTimeout,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'color', 'isOpen', 'toggle', 'children', 'transitionAppearTimeout', 'transitionEnterTimeout', 'transitionLeaveTimeout']);

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, 'alert', 'alert-' + color, { 'alert-dismissible': toggle }), cssModule);

      var alert = _react2.default.createElement(
        Tag,
        _extends({}, attributes, { className: classes, role: 'alert' }),
        toggle && _jsx(_Close2.default, {
          onDismiss: toggle
        }),
        children
      );

      return _jsx(_CSSTransitionGroup2.default, {
        component: FirstChild,
        transitionName: {
          appear: 'fade',
          appearActive: 'show',
          enter: 'fade',
          enterActive: 'show',
          leave: 'fade',
          leaveActive: 'out'
        },
        transitionAppear: transitionAppearTimeout > 0,
        transitionAppearTimeout: transitionAppearTimeout,
        transitionEnter: transitionEnterTimeout > 0,
        transitionEnterTimeout: transitionEnterTimeout,
        transitionLeave: transitionLeaveTimeout > 0,
        transitionLeaveTimeout: transitionLeaveTimeout
      }, void 0, isOpen ? alert : null);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Alert;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Alert = (0, _styledComponents2.default)(Alert).withConfig({
  displayName: 'Alert__Alert'
})(['', ''], function (props) {
  return '\n    /*\n    Base styles\n    */\n    \n    &.alert{\n      padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n      margin-bottom: ' + props.theme['$alert-margin-bottom'] + ';\n      border: ' + props.theme['$alert-border-width'] + ' solid transparent;\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$alert-border-radius']) + '\n    }\n    \n    /* Headings for larger alerts */\n    &.alert-heading {\n      /* Specified to prevent conflicts of changing $headings-color */\n      color: inherit;\n    }\n    \n    /* Provide class for links that match alerts */\n    & .alert-link { \n      font-weight: ' + props.theme['$alert-link-font-weight'] + ';\n    }\n    \n    /* Dismissible alerts Expand the right padding and account for the close buttons positioning. */\n    \n    &.alert-dismissible {    \n      /* Adjust close link position */\n      & .close {\n        position: relative;\n        top: -' + props.theme['$alert-padding-y'] + ';\n        right: -' + props.theme['$alert-padding-x'] + ';\n        padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n        color: inherit;\n      }\n    }\n    /* Alternate styles Generate contextual modifier classes for colorizing the alert. */\n\n    &.alert-success{\n      ' + (0, _alert.alertVariant)(props.theme['$alert-success-bg'], props.theme['$alert-success-border'], props.theme['$alert-success-text']) + '    \n    }\n    &.alert-info{\n      ' + (0, _alert.alertVariant)(props.theme['$alert-info-bg'], props.theme['$alert-info-border'], props.theme['$alert-info-text']) + '\n    } \n    &.alert-warning{\n      ' + (0, _alert.alertVariant)(props.theme['$alert-warning-bg'], props.theme['$alert-warning-border'], props.theme['$alert-warning-text']) + ' \n    }\n    &.alert-danger{\n      ' + (0, _alert.alertVariant)(props.theme['$alert-danger-bg'], props.theme['$alert-danger-border'], props.theme['$alert-danger-text']) + ' \n    }\n  ';
});

Alert.defaultProps = defaultProps;

exports.default = (0, _styledComponents.withTheme)(Alert);