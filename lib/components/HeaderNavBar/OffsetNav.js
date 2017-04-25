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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _Close = require('../Close');

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Menu component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  theme: _theme2.default
};

var OffsetNav = function (_React$Component) {
  _inherits(OffsetNav, _React$Component);

  function OffsetNav() {
    _classCallCheck(this, OffsetNav);

    return _possibleConstructorReturn(this, (OffsetNav.__proto__ || Object.getPrototypeOf(OffsetNav)).apply(this, arguments));
  }

  _createClass(OffsetNav, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          active = _props.active,
          dismiss = _props.dismiss,
          menuRight = _props['menu-right'],
          animationPush = _props['animation-push'],
          theme = _props.theme,
          elementWidth = _props.elementWidth,
          rest = _objectWithoutProperties(_props, ['className', 'children', 'active', 'dismiss', 'menu-right', 'animation-push', 'theme', 'elementWidth']); // eslint-disable-line no-unused-vars


      var menuDirectionClassNames = menuRight ? 'menu-right' : 'menu-left';
      var cssClasses = (0, _classnames2.default)(className, menuDirectionClassNames, { active: active }); // eslint-disable-line  object-shorthand
      return _react2.default.createElement(
        'div',
        _extends({ className: cssClasses }, rest),
        dismiss && _jsx(_Close2.default, {
          'aria-label': 'Close',
          onDismiss: dismiss
        }),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return OffsetNav;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


OffsetNav = (0, _styledComponents2.default)(OffsetNav).withConfig({
  displayName: 'OffsetNav__OffsetNav'
})(['', ''], function (props) {
  return '\n    width: ' + (props.elementWidth ? props.elementWidth : props.theme['$menu-push-width']) + ';\n    height: 100%;\n    background-color: white;\n    z-index: ' + props.theme['$zindex-menu-push'] + ';\n  ';
});

OffsetNav.defaultProps = defaultProps;

exports.default = OffsetNav;