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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tools = require('../../styled/utilities/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Small component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = { theme: _theme2.default };

var Small = function (_React$Component) {
  _inherits(Small, _React$Component);

  function Small() {
    _classCallCheck(this, Small);

    return _possibleConstructorReturn(this, (Small.__proto__ || Object.getPrototypeOf(Small)).apply(this, arguments));
  }

  _createClass(Small, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          theme = _props.theme,
          children = _props.children,
          cssModule = _props.cssModule,
          attributes = _objectWithoutProperties(_props, ['className', 'color', 'theme', 'children', 'cssModule']);

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, color ? 'text-' + color : false), cssModule);

      return _react2.default.createElement(
        'small',
        _extends({ className: classes }, attributes),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Small;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Small = (0, _styledComponents2.default)(Small).withConfig({
  displayName: 'Small__Small',
  componentId: 'Small__Small-1lwzykh'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    font-size: ' + props.theme['$small-font-size'] + ';\n    font-weight: normal;\n  ';
});

Small.defaultProps = defaultProps;

exports.default = Small;