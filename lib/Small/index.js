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

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Small component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = { theme: (0, _theme.makeTheme)() };

var SmallUnstyled = function (_React$Component) {
  _inherits(SmallUnstyled, _React$Component);

  function SmallUnstyled() {
    _classCallCheck(this, SmallUnstyled);

    return _possibleConstructorReturn(this, (SmallUnstyled.__proto__ || Object.getPrototypeOf(SmallUnstyled)).apply(this, arguments));
  }

  _createClass(SmallUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          attributes = _objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule']);

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, color ? 'text-' + color : false), cssModule);

      return _react2.default.createElement(
        'small',
        _extends({ className: classes }, attributes),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return SmallUnstyled;
}(_react2.default.Component);

SmallUnstyled.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  theme: _propTypes2.default.object,
  color: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
  /* eslint-enable react/no-unused-prop-types */
};


var Small = (0, _styledComponents2.default)(SmallUnstyled).withConfig({
  displayName: 'Small'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    font-size: ' + props.theme['$small-font-size'] + ';\n    font-weight: normal;\n  ';
});

Small.defaultProps = defaultProps;

exports.default = Small;
module.exports = exports['default'];