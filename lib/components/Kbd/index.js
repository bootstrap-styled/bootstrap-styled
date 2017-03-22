'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _borderRadius = require('../../styled/mixins/border-radius');

var _boxShadow = require('../../styled/mixins/box-shadow');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Kbd component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = { theme: _theme2.default };

var Kbd = function (_React$Component) {
  _inherits(Kbd, _React$Component);

  function Kbd() {
    _classCallCheck(this, Kbd);

    return _possibleConstructorReturn(this, (Kbd.__proto__ || Object.getPrototypeOf(Kbd)).apply(this, arguments));
  }

  _createClass(Kbd, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['className', 'theme', 'children']); // eslint-disable-line no-unused-vars

      return _react2.default.createElement(
        'kbd',
        _extends({ className: className }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Kbd;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Kbd = (0, _styledComponents2.default)(Kbd).withConfig({
  displayName: 'Kbd__Kbd',
  componentId: 'Kbd__Kbd-pbdvpv'
})(['', ''], function (props) {
  return '\n    /* User input typically entered via keyboard */\n    padding: ' + props.theme['$code-padding-y'] + ' ' + props.theme['$code-padding-x'] + ';\n    font-size: ' + props.theme['$code-font-size'] + ';\n    color: ' + props.theme['$kbd-color'] + ';\n    background-color: ' + props.theme['$kbd-bg'] + ';\n    ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius-sm']) + '\n    ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$kbd-box-shadow']) + '\n    \n    & kbd {\n      padding: 0;\n      font-size: 100%;\n      font-weight: ' + props.theme['$nested-kbd-font-weight'] + ';\n      ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], 'none') + '\n    }\n    \n    /* Bootstrap 4 does not place this css rule straight into Kbd tag see: bootstrap/scss/code.scss */\n    font-family: ' + props.theme['$font-family-monospace'] + ';\n  ';
});

Kbd.defaultProps = defaultProps;

exports.default = Kbd;