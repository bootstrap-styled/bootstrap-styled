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

var _theme = require('theme');

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _transition = require('styled/utilities/transition');

var _tools = require('utils/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  theme: _theme.theme,
  children: _jsx('p', {}, void 0, 'item'),
  willChange: false,
  propertyValues: 'translate3d',
  fromX: '0',
  toX: '0',
  fromY: '0',
  toY: '0',
  fromZ: '0',
  toZ: '0',
  transitionDuration: 500,
  transitionTimingFunction: 'ease',
  transitionDelay: '0ms'
};

var TransitionGroupSwap = function (_React$Component) {
  _inherits(TransitionGroupSwap, _React$Component);

  function TransitionGroupSwap() {
    _classCallCheck(this, TransitionGroupSwap);

    return _possibleConstructorReturn(this, (TransitionGroupSwap.__proto__ || Object.getPrototypeOf(TransitionGroupSwap)).apply(this, arguments));
  }

  _createClass(TransitionGroupSwap, [{
    key: 'render',

    /* eslint-disable react/no-unused-prop-types */
    value: function render() {
      var _omit = (0, _tools.omit)(this.props, ['willChange', 'propertyValues', 'fromX', 'toX', 'fromY', 'toY', 'fromZ', 'toZ', 'duration', 'transitionDuration', 'transitionTimingFunction', 'transitionDelay']),
          className = _omit.className,
          theme = _omit.theme,
          children = _omit.children,
          rest = _objectWithoutProperties(_omit, ['className', 'theme', 'children']);

      return _react2.default.createElement(
        _reactAddonsTransitionGroup2.default,
        _extends({ className: className }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function
    /* eslint-disable react/no-unused-prop-types */

  }]);

  return TransitionGroupSwap;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


TransitionGroupSwap = (0, _styledComponents2.default)(TransitionGroupSwap).withConfig({
  displayName: 'TransitionGroupSwap__TransitionGroupSwap'
})(['', ''], function (props) {
  return '\n     &.moving-element,\n      & .moving-element {\n        transform: ' + props.propertyValues + '(' + props.fromX + ', ' + props.fromY + ', ' + props.fromZ + ');\n        ' + (0, _transition.getReactTransition)(props.theme['$enable-transitions'], 'transform ' + props.transitionDuration + 'ms ' + props.transitionTimingFunction) + '\n\n        &.transforming {\n          transform: ' + props.propertyValues + '(' + props.toX + ', ' + props.toY + ', ' + props.toZ + ');\n          ' + (0, _transition.getReactTransition)(props.theme['$enable-transitions'], 'transform ' + props.transitionDuration + 'ms ' + props.transitionTimingFunction) + '\n        }\n     }\n  ';
});

TransitionGroupSwap.defaultProps = defaultProps;

exports.default = (0, _styledComponents.withTheme)(TransitionGroupSwap);