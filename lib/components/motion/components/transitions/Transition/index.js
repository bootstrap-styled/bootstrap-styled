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

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

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
  transitionTimingFunction: 'ease',
  transitionDelay: '0ms',
  transitionDuration: 500
};

var Transition = function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition() {
    _classCallCheck(this, Transition);

    return _possibleConstructorReturn(this, (Transition.__proto__ || Object.getPrototypeOf(Transition)).apply(this, arguments));
  }

  _createClass(Transition, [{
    key: 'render',

    /* eslint-disable react/no-unused-prop-types */

    // componentWillAppear() {
    //
    // }
    //
    // componentWillLeave() {
    //
    // }

    value: function render() {
      var _omit = (0, _tools.omit)(this.props, ['willLeave', 'enterAnimation', 'enterActiveAnimation', 'leaveAnimation', 'leaveActiveAnimation', 'transitionTimingFunction', 'transitionDelay', 'transitionDuration']),
          theme = _omit.theme,
          children = _omit.children,
          className = _omit.className,
          willLeave = _omit.willLeave,
          rest = _objectWithoutProperties(_omit, ['theme', 'children', 'className', 'willLeave']);

      return _react2.default.createElement(
        _reactAddonsTransitionGroup2.default,
        _extends({ className: className }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function
    /* eslint-disable react/no-unused-prop-types */

  }]);

  return Transition;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Transition = (0, _styledComponents2.default)(Transition).withConfig({
  displayName: 'Transition__Transition'
})(['', ''], function () {
  return '\n    ' + (0, _transition.makeReactTransition)() + '\n  ';
});

Transition.defaultProps = defaultProps;

exports.default = (0, _styledComponents.withTheme)(Transition);