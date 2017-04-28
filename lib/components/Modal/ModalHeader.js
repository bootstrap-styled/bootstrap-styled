'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tools = require('utils/tools');

var _H = require('../Headings/H4');

var _H2 = _interopRequireDefault(_H);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  wrapTag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  toggle: _propTypes2.default.func,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  children: _propTypes2.default.node
};

var defaultProps = {
  tag: _H2.default,
  wrapTag: 'div'
};

var ModalHeader = function ModalHeader(props) {
  var closeButton = void 0;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag']);

  var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, 'modal-header'), cssModule);

  if (toggle) {
    closeButton = _jsx('button', {
      type: 'button',
      onClick: toggle,
      className: 'close',
      'aria-label': 'Close'
    }, void 0, _jsx('span', {
      'aria-hidden': 'true'
    }, void 0, String.fromCharCode(215)));
  }

  return _react2.default.createElement(
    WrapTag,
    _extends({}, attributes, { className: classes }),
    _jsx(Tag, {
      className: (0, _tools.mapToCssModules)('modal-title', cssModule)
    }, void 0, children),
    closeButton
  );
};

ModalHeader.defaultProps = defaultProps;

exports.default = ModalHeader;