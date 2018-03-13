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

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _borderRadius = require('bootstrap-styled-mixins/lib/border-radius');

var _boxShadow = require('bootstrap-styled-mixins/lib/box-shadow');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Kbd component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$font-family-monospace': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    '$font-weight-bold': 'bold',
    '$border-radius-sm': '.2rem',
    '$code-font-size': '90%',
    '$code-padding-x': '.4rem',
    '$code-padding-y': '.2rem',
    '$kbd-color': '#fff',
    '$kbd-bg': '#292b2c',
    '$kbd-box-shadow': 'inset 0 -.1rem 0 rgba(0, 0, 0, 0.25)',
    '$nested-kbd-font-weight': 'bold'
  }
};
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<Kbd />` component. */
  children: _propTypes2.default.node.isRequired,
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$enable-rounded': _propTypes2.default.bool,
    '$enable-shadows': _propTypes2.default.bool,
    '$font-family-monospace': _propTypes2.default.string,
    '$font-weight-bold': _propTypes2.default.string,
    '$border-radius-sm': _propTypes2.default.string,
    '$code-font-size': _propTypes2.default.string,
    '$code-padding-x': _propTypes2.default.string,
    '$code-padding-y': _propTypes2.default.string,
    '$kbd-color': _propTypes2.default.string,
    '$kbd-bg': _propTypes2.default.string,
    '$kbd-box-shadow': _propTypes2.default.string,
    '$nested-kbd-font-weight': _propTypes2.default.string
  })
};

var KbdUnstyled = function (_React$Component) {
  _inherits(KbdUnstyled, _React$Component);

  function KbdUnstyled() {
    _classCallCheck(this, KbdUnstyled);

    return _possibleConstructorReturn(this, (KbdUnstyled.__proto__ || Object.getPrototypeOf(KbdUnstyled)).apply(this, arguments));
  }

  _createClass(KbdUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          rest = _objectWithoutProperties(_omit, ['className', 'children']);

      return _react2.default.createElement(
        'kbd',
        _extends({ className: className }, rest),
        children
      );
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return KbdUnstyled;
}(_react2.default.Component);
/**
 * Replace or remove a className from the component.
 * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
 */


KbdUnstyled.defaultProps = defaultProps;
KbdUnstyled.propTypes = propTypes;
var Kbd = (0, _styledComponents2.default)(KbdUnstyled).withConfig({
  displayName: 'Kbd'
})(['', ''], function (props) {
  return '\n    /* User input typically entered via keyboard */\n    padding: ' + props.theme['$code-padding-y'] + ' ' + props.theme['$code-padding-x'] + ';\n    font-size: ' + props.theme['$code-font-size'] + ';\n    color: ' + props.theme['$kbd-color'] + ';\n    background-color: ' + props.theme['$kbd-bg'] + ';\n    ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius-sm']) + '\n    ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$kbd-box-shadow']) + '\n    \n    & kbd {\n      padding: 0;\n      font-size: 100%;\n      font-weight: ' + props.theme['$nested-kbd-font-weight'] + ';\n      ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], 'none') + '\n    }\n    \n    /* Bootstrap 4 does not place this css rule straight into Kbd tag see: bootstrap/scss/code.scss */\n    font-family: ' + props.theme['$font-family-monospace'] + ';\n  ';
});

Kbd.defaultProps = defaultProps;
Kbd.propTypes = propTypes;

/** @component */
exports.default = Kbd;
module.exports = exports['default'];