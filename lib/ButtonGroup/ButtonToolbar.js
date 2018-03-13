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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _buttonGroup = require('bootstrap-styled-mixins/lib/buttonGroup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ButtonToolbar
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = exports.defaultProps = {
  tag: 'div',
  role: 'toolbar',
  theme: {
    '$input-btn-border-width': '1px',
    '$btn-padding-x': '1rem',
    '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$font-size-lg': '1.25rem',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$font-size-sm': '.875rem',
    '$btn-border-radius-lg': '.3rem',
    '$btn-border-radius-sm': '.2rem',
    '$enable-rounded': true,
    '$enable-shadows': true
  }
};
var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$input-btn-border-width': _propTypes2.default.string,
    '$btn-padding-x': _propTypes2.default.string,
    '$btn-active-box-shadow': _propTypes2.default.string,
    '$btn-padding-x-lg': _propTypes2.default.string,
    '$btn-padding-y-lg': _propTypes2.default.string,
    '$font-size-lg': _propTypes2.default.string,
    '$btn-padding-x-sm': _propTypes2.default.string,
    '$btn-padding-y-sm': _propTypes2.default.string,
    '$font-size-sm': _propTypes2.default.string,
    '$btn-border-radius-lg': _propTypes2.default.string,
    '$btn-border-radius-sm': _propTypes2.default.string,
    '$enable-rounded': _propTypes2.default.bool,
    '$enable-shadows': _propTypes2.default.bool
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var ButtonToolbarUnstyled = function (_React$Component) {
  _inherits(ButtonToolbarUnstyled, _React$Component);

  function ButtonToolbarUnstyled() {
    _classCallCheck(this, ButtonToolbarUnstyled);

    return _possibleConstructorReturn(this, (ButtonToolbarUnstyled.__proto__ || Object.getPrototypeOf(ButtonToolbarUnstyled)).apply(this, arguments));
  }

  _createClass(ButtonToolbarUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);

      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'btn-toolbar'), cssModule)
      }, attributes));
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return ButtonToolbarUnstyled;
}(_react2.default.Component);
/**
 * Button with toolbar like CSS style and display.
 */


ButtonToolbarUnstyled.defaultProps = defaultProps;
ButtonToolbarUnstyled.propTypes = propTypes;
var ButtonToolbar = (0, _styledComponents2.default)(ButtonToolbarUnstyled).withConfig({
  displayName: 'ButtonToolbar'
})(['', '  '], function (props) {
  return '\n    ' + (0, _buttonGroup.buttonGroup)(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']) + '\n  ';
});

ButtonToolbar.defaultProps = defaultProps;
ButtonToolbar.propTypes = propTypes;

/** @component */
exports.default = ButtonToolbar;