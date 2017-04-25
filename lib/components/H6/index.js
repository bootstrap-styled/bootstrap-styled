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

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tools = require('utils/tools');

var _typography = require('../../styled/mixins/typography');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = { theme: _theme2.default };

var H6 = function (_React$Component) {
  _inherits(H6, _React$Component);

  function H6() {
    _classCallCheck(this, H6);

    return _possibleConstructorReturn(this, (H6.__proto__ || Object.getPrototypeOf(H6)).apply(this, arguments));
  }

  _createClass(H6, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          theme = _props.theme,
          children = _props.children,
          cssModule = _props.cssModule,
          lead = _props.lead,
          attributes = _objectWithoutProperties(_props, ['className', 'color', 'theme', 'children', 'cssModule', 'lead']);

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);

      return _react2.default.createElement(
        'h6',
        _extends({ className: classes }, attributes),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return H6;
}(_react2.default.Component);
// eslint-disable-next-line no-class-assign


H6 = (0, _styledComponents2.default)(H6).withConfig({
  displayName: 'H6__H6'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h6'] + ';\n    ' + (0, _typography.typography)(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    \n    &.lead {\n     font-size: ' + props.theme['$lead-font-size'] + ';\n     font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});

H6.defaultProps = defaultProps;

exports.default = H6;