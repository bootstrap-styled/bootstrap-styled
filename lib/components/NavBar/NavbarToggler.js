'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tools = require('utils/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  tag: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  type: _react.PropTypes.string,
  className: _react.PropTypes.string,
  cssModule: _react.PropTypes.object,
  children: _react.PropTypes.node,
  right: _react.PropTypes.bool,
  left: _react.PropTypes.bool
};

var defaultProps = {
  tag: 'button',
  type: 'button'
};

var navbarToggleIcon = _jsx('span', {
  className: 'navbar-toggler-icon'
});

var NavbarToggler = function NavbarToggler(props) {
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      right = props.right,
      left = props.left,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'children', 'right', 'left', 'tag']);

  var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, 'navbar-toggler', right && 'navbar-toggler-right', left && 'navbar-toggler-left'), cssModule);

  return _react2.default.createElement(
    Tag,
    _extends({}, attributes, { className: classes }),
    children || navbarToggleIcon
  );
};

NavbarToggler.defaultProps = defaultProps;

exports.default = NavbarToggler;