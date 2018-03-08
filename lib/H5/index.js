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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _typography = require('bootstrap-styled-mixins/lib/typography');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  theme: {
    '$font-size-h5': '1.25rem',
    '$headings-margin-bottom': '0.5rem',
    '$headings-font-family': 'inherit',
    '$headings-font-weight': '500',
    '$headings-line-height': '1.1',
    '$headings-color': 'inherit',
    '$display1-size': '6rem',
    '$display2-size': '5.5rem',
    '$display3-size': '4.5rem',
    '$display4-size': '3.5rem',
    '$display1-weight': '300',
    '$display2-weight': '300',
    '$display3-weight': '300',
    '$display4-weight': '300',
    '$lead-font-size': '1.25rem',
    '$lead-font-weight': '300'
  }
};
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$link-color': _propTypes2.default.string,
    '$font-size-h5': _propTypes2.default.string,
    '$headings-margin-bottom': _propTypes2.default.string,
    '$headings-font-family': _propTypes2.default.string,
    '$headings-font-weight': _propTypes2.default.string,
    '$headings-line-height': _propTypes2.default.string,
    '$headings-color': _propTypes2.default.string,
    '$display1-size': _propTypes2.default.string,
    '$display2-size': _propTypes2.default.string,
    '$display3-size': _propTypes2.default.string,
    '$display4-size': _propTypes2.default.string,
    '$display1-weight': _propTypes2.default.string,
    '$display2-weight': _propTypes2.default.string,
    '$display3-weight': _propTypes2.default.string,
    '$display4-weight': _propTypes2.default.string,
    '$lead-font-size': _propTypes2.default.string,
    '$lead-font-weight': _propTypes2.default.string
  }),
  /** Color variables. Can be: */
  color: _propTypes2.default.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  /** Toggles lead CSS style. */
  lead: _propTypes2.default.bool,
  /**
   * Replace or remove a className from the component.
   * See example [here](https://www.npmjs.com/package/map-to-css-modules).
   */
  cssModule: _propTypes2.default.object
};

var H5Unstyled = function (_React$Component) {
  _inherits(H5Unstyled, _React$Component);

  function H5Unstyled() {
    _classCallCheck(this, H5Unstyled);

    return _possibleConstructorReturn(this, (H5Unstyled.__proto__ || Object.getPrototypeOf(H5Unstyled)).apply(this, arguments));
  }

  _createClass(H5Unstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = _objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);

      return _react2.default.createElement(
        'h5',
        _extends({ className: classes }, attributes),
        children
      );
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return H5Unstyled;
}(_react2.default.Component);

H5Unstyled.defaultProps = defaultProps;
H5Unstyled.propTypes = propTypes;


var H5 = (0, _styledComponents2.default)(H5Unstyled).withConfig({
  displayName: 'H5'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h5'] + ';\n    ' + (0, _typography.typography)(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n \n    &.lead {\n     font-size: ' + props.theme['$lead-font-size'] + ';\n     font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});

H5.defaultProps = defaultProps;
H5.propTypes = propTypes;

/** @component */
exports.default = H5;
module.exports = exports['default'];