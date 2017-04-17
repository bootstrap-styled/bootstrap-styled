'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tools = require('utils/tools');

var _A = require('../A');

var _A2 = _interopRequireDefault(_A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Breadcrumb
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  tag: _A2.default
};

var PaginationItem = function (_React$Component) {
  _inherits(PaginationItem, _React$Component);

  function PaginationItem() {
    _classCallCheck(this, PaginationItem);

    return _possibleConstructorReturn(this, (PaginationItem.__proto__ || Object.getPrototypeOf(PaginationItem)).apply(this, arguments));
  }

  _createClass(PaginationItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          next = _props.next,
          previous = _props.previous,
          Tag = _props.tag,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'next', 'previous', 'tag']);

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, 'page-link'), cssModule);

      var defaultAriaLabel = void 0;
      if (previous) {
        defaultAriaLabel = 'Previous';
      } else if (next) {
        defaultAriaLabel = 'Next';
      }
      var ariaLabel = this.props['aria-label'] || defaultAriaLabel;

      var defaultCaret = void 0;
      if (previous) {
        defaultCaret = '\xAB';
      } else if (next) {
        defaultCaret = '\xBB';
      }

      var children = this.props.children;
      if (previous || next) {
        children = [_jsx('span', {
          'aria-hidden': 'true'
        }, 'caret', children || defaultCaret), _jsx('span', {
          className: 'sr-only'
        }, 'sr', ariaLabel)];
      }

      return _react2.default.createElement(
        Tag,
        _extends({}, attributes, {
          className: classes,
          'aria-label': ariaLabel
        }),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return PaginationItem;
}(_react2.default.Component);

PaginationItem.defaultProps = defaultProps;

exports.default = PaginationItem;