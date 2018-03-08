'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

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
  'aria-haspopup': true,
  'data-toggle': 'dropdown',
  color: 'primary'
};
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: _propTypes2.default.node,
  /** Toggles popup CSS style. */
  'aria-haspopup': _propTypes2.default.bool,
  /** Toggles caret CSS style. */
  caret: _propTypes2.default.bool,
  /** Change toggle content with specified string. */
  'data-toggle': _propTypes2.default.string,
  /** Toggles disabled CSS style. */
  disabled: _propTypes2.default.bool,
  /** Call specified function when on click event is triggered. */
  onClick: _propTypes2.default.func,
  /** Toggles nav CSS style. */
  nav: _propTypes2.default.bool,
  /** Toggles split CSS style. */
  split: _propTypes2.default.bool,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  /**
   * Replace or remove a className from the component.
   * See example [here](https://www.npmjs.com/package/map-to-css-modules).
   */
  cssModule: _propTypes2.default.object
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

  /* eslint-disable react/no-unused-prop-types */

  /* eslint-enable react/no-unused-prop-types */

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
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'caret', 'split', 'nav', 'tag']);

      var ariaLabel = attributes['aria-label'] || 'Toggle Dropdown';
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        active: this.context.isOpen,
        'nav-link': nav
      }), cssModule);
      var children = attributes.children || _react2.default.createElement(
        'span',
        { className: 'sr-only' },
        ariaLabel
      );

      var Tag = void 0;

      if (nav && !tag) {
        Tag = _A2.default;
        attributes.href = '#';
      } else if (!tag) {
        Tag = _Button2.default;
      } else {
        Tag = tag;
      }

      return _react2.default.createElement(
        Tag,
        _extends({
          className: classes,
          onClick: this.onClick,
          'aria-haspopup': 'true',
          'aria-expanded': this.context.isOpen
        }, attributes),
        children
      );
    }
  }]);

  return DropdownToggle;
}(_react2.default.Component);

DropdownToggle.defaultProps = defaultProps;
DropdownToggle.propTypes = propTypes;
DropdownToggle.contextTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  toggle: _propTypes2.default.func.isRequired
};


DropdownToggle.defaultProps = defaultProps;
DropdownToggle.propTypes = propTypes;
/** @component */
exports.default = DropdownToggle;
module.exports = exports['default'];