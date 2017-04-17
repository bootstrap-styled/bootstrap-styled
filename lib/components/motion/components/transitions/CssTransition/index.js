'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _theme = require('theme');

var _tools = require('utils/tools');

var _transition = require('styled/utilities/transition');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  theme: _theme.theme,
  children: _jsx('p', {}, void 0, 'item'),
  willLeave: false,
  enterAnimation: 'fade',
  enterActiveAnimation: 'show',
  leaveAnimation: 'fade',
  transitionTimingFunction: 'ease',
  transitionDelay: '0ms',
  transitionDuration: 500
};

var CssTransition = function (_React$Component) {
  _inherits(CssTransition, _React$Component);

  function CssTransition() {
    _classCallCheck(this, CssTransition);

    return _possibleConstructorReturn(this, (CssTransition.__proto__ || Object.getPrototypeOf(CssTransition)).apply(this, arguments));
  }

  _createClass(CssTransition, [{
    key: 'render',

    /* eslint-disable react/no-unused-prop-types */

    value: function render() {
      var _omit = (0, _tools.omit)(this.props, ['enterAnimation', 'enterActiveAnimation', 'leaveAnimation', 'leaveActiveAnimation', 'transitionTimingFunction', 'transitionDelay', 'transitionDuration']),
          theme = _omit.theme,
          children = _omit.children,
          className = _omit.className,
          willLeave = _omit.willLeave,
          rest = _objectWithoutProperties(_omit, ['theme', 'children', 'className', 'willLeave']);

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        _extends({
          transitionName: {
            enter: 'enter',
            enterActive: 'enter-active',
            leave: 'leave',
            leaveActive: 'leave-active'
          },
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 300,
          className: className
        }, rest),
        willLeave && children
      );
    } // eslint-disable-line react/prefer-stateless-function
    /* eslint-disable react/no-unused-prop-types */

  }]);

  return CssTransition;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


CssTransition = (0, _styledComponents2.default)(CssTransition).withConfig({
  displayName: 'CssTransition__CssTransition'
})(['', ''], function () {
  return '\n    ' + (0, _transition.makeReactTransition)() + '\n  ';
});

CssTransition.defaultProps = defaultProps;

exports.default = (0, _styledComponents.withTheme)(CssTransition);