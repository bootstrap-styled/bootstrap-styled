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

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _A = require('../A');

var _A2 = _interopRequireDefault(_A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  'data-toggle': 'dropdown',
  'aria-haspopup': true,
  color: 'secondary'
};

var DropdownToggle = function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropdownToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (_this.props.nav && !_this.props.tag) {
        e.preventDefault();
      }

      if (_this.props.onClick) {
        _this.props.onClick(e);
      }

      _this.context.toggle();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropdownToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          caret = _props.caret,
          split = _props.split,
          nav = _props.nav,
          tag = _props.tag,
          props = _objectWithoutProperties(_props, ['className', 'cssModule', 'caret', 'split', 'nav', 'tag']);

      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        active: this.context.isOpen,
        'nav-link': nav
      }), cssModule);
      var children = props.children || _jsx('span', {
        className: 'sr-only'
      }, void 0, ariaLabel);

      var Tag = void 0;

      if (nav && !tag) {
        Tag = _A2.default;
        props.href = '#';
      } else if (!tag) {
        Tag = _Button2.default;
      } else {
        Tag = tag;
      }

      return _react2.default.createElement(
        Tag,
        _extends({}, props, {
          className: classes,
          onClick: this.onClick,
          'aria-haspopup': 'true',
          'aria-expanded': this.context.isOpen
        }),
        children
      );
    }
  }]);

  return DropdownToggle;
}(_react2.default.Component);

DropdownToggle.contextTypes = {
  isOpen: _react.PropTypes.bool.isRequired,
  toggle: _react.PropTypes.func.isRequired
};


DropdownToggle.defaultProps = defaultProps;

exports.default = DropdownToggle;