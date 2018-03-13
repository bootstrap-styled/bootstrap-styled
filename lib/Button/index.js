'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _buttons = require('bootstrap-styled-mixins/lib/buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A button with natures
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = exports.defaultProps = {
  tag: 'button',
  color: 'primary',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-hover-media-query': true,
    '$enable-transitions': true,
    '$btn-padding-x': '1rem',
    '$btn-padding-y': '.5rem',
    '$btn-line-height': '1.25',
    '$btn-font-weight': 'normal',
    '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
    '$btn-focus-box-shadow': '0 0 0 2px rgba(2, 117, 216, 0.25)',
    '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
    '$btn-primary-color': '#fff',
    '$btn-primary-bg': '#0275d8',
    '$btn-primary-border': '#0275d8',
    '$btn-secondary-color': '#292b2c',
    '$btn-secondary-bg': '#fff',
    '$btn-secondary-border': '#ccc',
    '$btn-info-color': '#fff',
    '$btn-info-bg': '#5bc0de',
    '$btn-info-border': '#5bc0de',
    '$btn-success-color': '#fff',
    '$btn-success-bg': '#5cb85c',
    '$btn-success-border': '#5cb85c',
    '$btn-warning-color': '#fff',
    '$btn-warning-bg': '#f0ad4e',
    '$btn-warning-border': '#f0ad4e',
    '$btn-danger-color': '#fff',
    '$btn-danger-bg': '#d9534f',
    '$btn-danger-border': '#d9534f',
    '$btn-link-disabled-color': '#636c72',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-block-spacing-y': '.5rem',
    '$btn-border-radius': '.25rem',
    '$btn-border-radius-lg': '.3rem',
    '$btn-border-radius-sm': '.2rem',
    '$btn-transition': 'all .2s ease-in-out'
  }
};
var propTypes = exports.propTypes = {
  /** Toggles active CSS color. */
  active: _propTypes2.default.bool,
  /** Toggles block CSS display. */
  block: _propTypes2.default.bool,
  /** Toggles disable mouse event and CSS color. */
  disabled: _propTypes2.default.bool,
  /** Toggles outline CSS border and background color. */
  outline: _propTypes2.default.bool,
  /** @ignore */
  className: _propTypes2.default.string,
  /** Color variables. Can be: */
  color: _propTypes2.default.oneOf(['link', 'primary', 'secondary', 'success', 'info', 'warning', 'danger']),
  /** Replace the default component tag reference by the one specified. Can be: */
  getRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /** Start specified function when on click event is trigger. */
  onClick: _propTypes2.default.func,
  /** Buttons use default size base and can use different size such as: */
  size: _propTypes2.default.oneOf(['sm', 'lg']),
  /** Toggles drop up CSS style. */
  dropup: _propTypes2.default.bool,
  /** Replace the default component tag by the one specified. Can be: */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$btn-padding-x': _propTypes2.default.string,
    '$btn-padding-y': _propTypes2.default.string,
    '$btn-line-height': _propTypes2.default.string,
    '$btn-font-weight': _propTypes2.default.string,
    '$btn-box-shadow': _propTypes2.default.string,
    '$btn-focus-box-shadow': _propTypes2.default.string,
    '$btn-active-box-shadow': _propTypes2.default.string,
    '$btn-primary-color': _propTypes2.default.string,
    '$btn-primary-bg': _propTypes2.default.string,
    '$btn-primary-border': _propTypes2.default.string,
    '$btn-secondary-color': _propTypes2.default.string,
    '$btn-secondary-bg': _propTypes2.default.string,
    '$btn-secondary-border': _propTypes2.default.string,
    '$btn-info-color': _propTypes2.default.string,
    '$btn-info-bg': _propTypes2.default.string,
    '$btn-info-border': _propTypes2.default.string,
    '$btn-success-color': _propTypes2.default.string,
    '$btn-success-bg': _propTypes2.default.string,
    '$btn-success-border': _propTypes2.default.string,
    '$btn-warning-color': _propTypes2.default.string,
    '$btn-warning-bg': _propTypes2.default.string,
    '$btn-warning-border': _propTypes2.default.string,
    '$btn-danger-color': _propTypes2.default.string,
    '$btn-danger-bg': _propTypes2.default.string,
    '$btn-danger-border': _propTypes2.default.string,
    '$btn-link-disabled-color': _propTypes2.default.string,
    '$btn-padding-x-sm': _propTypes2.default.string,
    '$btn-padding-y-sm': _propTypes2.default.string,
    '$btn-padding-x-lg': _propTypes2.default.string,
    '$btn-padding-y-lg': _propTypes2.default.string,
    '$btn-block-spacing-y': _propTypes2.default.string,
    '$btn-border-radius': _propTypes2.default.string,
    '$btn-border-radius-lg': _propTypes2.default.string,
    '$btn-border-radius-sm': _propTypes2.default.string,
    '$btn-transition': _propTypes2.default.string,
    '$link-hover-decoration': _propTypes2.default.string,
    '$enable-rounded': _propTypes2.default.bool,
    '$enable-shadows': _propTypes2.default.bool,
    '$enable-hover-media-query': _propTypes2.default.bool,
    '$enable-transitions': _propTypes2.default.bool
  }),
  /**
   * Replace or remove a className from the component.
   * See example [here](https://www.npmjs.com/package/map-to-css-modules).
   */
  cssModule: _propTypes2.default.object
};

var ButtonUnstyled = function (_React$Component) {
  _inherits(ButtonUnstyled, _React$Component);

  function ButtonUnstyled() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ButtonUnstyled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ButtonUnstyled.__proto__ || Object.getPrototypeOf(ButtonUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */

  /* eslint-enable react/no-unused-prop-types */

  _createClass(ButtonUnstyled, [{
    key: 'render',
    value: function render() {
      var _cn;

      /* eslint-disable prefer-const */
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          active = _omit.active,
          disabled = _omit.disabled,
          block = _omit.block,
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          color = _omit.color,
          outline = _omit.outline,
          size = _omit.size,
          getRef = _omit.getRef,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['active', 'disabled', 'block', 'className', 'cssModule', 'dropup', 'color', 'outline', 'size', 'getRef', 'tag']);
      /* eslint-enable prefer-const */

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'btn', (_cn = {
        dropup: dropup,
        active: active,
        disabled: disabled
      }, _defineProperty(_cn, 'btn-' + size, size), _defineProperty(_cn, 'btn-block', block), _cn), 'btn' + (outline ? '-outline' : '') + '-' + color), cssModule);

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      return _react2.default.createElement(Tag, _extends({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined,
        className: classes,
        ref: getRef
      }, attributes, {
        onClick: this.onClick
      }));
    }
  }]);

  return ButtonUnstyled;
}(_react2.default.Component);
/**
 * Use our default **link**, **colored** or **outlined** `Buttons` blocks, to emphasize part of your page.
 * You can also use different `size` or another `tag` instead of `<Button />`.
 */


ButtonUnstyled.defaultProps = defaultProps;
ButtonUnstyled.propTypes = propTypes;
var Button = (0, _styledComponents2.default)(ButtonUnstyled).withConfig({
  displayName: 'Button'
})(['', ' '], function (props) {
  return '\n    ' + (0, _buttons.button)(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

/** @component */
exports.default = Button;