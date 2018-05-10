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

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _borderRadius = require('bootstrap-styled-mixins/lib/border-radius');

var _background = require('bootstrap-styled-mixins/lib/utilities/background');

var _gradients = require('bootstrap-styled-mixins/lib/gradients');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Progress */

var defaultProps = exports.defaultProps = {
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$progress-height': '1rem',
    '$progress-font-size': '.75rem',
    '$progress-bg': '#eceeef',
    '$progress-border-radius': '.25rem',
    '$progress-box-shadow': 'inset 0 .1rem .1rem rgba(0, 0, 0, 0.1)',
    '$progress-bar-color': '#fff',
    '$progress-bar-bg': '#0275d8',
    '$progress-bar-animation-timing': '1s linear infinite'
  }
};
var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<Progress />` component. */
  children: _propTypes2.default.node,
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$enable-rounded': _propTypes2.default.bool,
    '$enable-hover-media-query': _propTypes2.default.bool,
    '$progress-height': _propTypes2.default.string,
    '$progress-font-size': _propTypes2.default.string,
    '$progress-bg': _propTypes2.default.string,
    '$progress-border-radius': _propTypes2.default.string,
    '$progress-box-shadow': _propTypes2.default.string,
    '$progress-bar-color': _propTypes2.default.string,
    '$progress-bar-bg': _propTypes2.default.string,
    '$progress-bar-animation-timing': _propTypes2.default.string
  })
};

var ProgressUnstyled = function (_React$Component) {
  _inherits(ProgressUnstyled, _React$Component);

  function ProgressUnstyled() {
    _classCallCheck(this, ProgressUnstyled);

    return _possibleConstructorReturn(this, (ProgressUnstyled.__proto__ || Object.getPrototypeOf(ProgressUnstyled)).apply(this, arguments));
  }

  _createClass(ProgressUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          children = _omit.children,
          className = _omit.className,
          rest = _objectWithoutProperties(_omit, ['children', 'className']);

      return _react2.default.createElement(
        'div',
        _extends({ className: (0, _classnames2.default)('progress', className) }, rest),
        children
      );
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return ProgressUnstyled;
}(_react2.default.Component);

ProgressUnstyled.defaultProps = defaultProps;
ProgressUnstyled.propTypes = propTypes;


var backgroundPositionKeyFrame = function backgroundPositionKeyFrame(props) {
  return (0, _styledComponents.keyframes)(['from{background-position:', ' 0;}to{background-position:0 0;}'], props.theme['$progress-height']);
};
/**
 * A classic `<Progress />` component. Can be used with **customized** value.
 * You can also control `height` and `backgrounds` colors or **multiple bars**.
 * Striped or Animated stripes.
 */
var Progress = (0, _styledComponents2.default)(ProgressUnstyled).withConfig({
  displayName: 'Progress'
})(['', ''], function (props) {
  return '\n    \n    &.progress {\n      display: flex;\n      overflow: hidden; // force rounded corners by cropping it\n      font-size: ' + props.theme['$progress-font-size'] + ';\n      line-height: ' + props.theme['$progress-height'] + ';\n      text-align: center;\n      background-color: ' + props.theme['$progress-bg'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n      ' + (0, _background.getBackgroundUtilities)(props.theme['$enable-hover-media-query'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest']) + '\n    }\n    \n    .progress-bar {\n      height: ' + props.theme['$progress-height'] + ';\n      line-height: ' + props.theme['$progress-height'] + ';\n      color: ' + props.theme['$progress-bar-color'] + ';\n      background-color: ' + props.theme['$progress-bar-bg'] + ';\n    }\n    \n    .progress-bar-striped {\n      ' + (0, _gradients.gradientStriped)() + '\n      background-size: ' + props.theme['$progress-height'] + ' ' + props.theme['$progress-height'] + ';\n      background-repeat: repeat; /* Not present in bootstrap original but required to repeat the background */\n    }\n    \n    .progress-bar-animated {\n      animation: ' + backgroundPositionKeyFrame(props) + ' ' + props.theme['$progress-bar-animation-timing'] + ';\n    }\n\n  ';
});

Progress.defaultProps = defaultProps;
Progress.propTypes = propTypes;

/** @component */
exports.default = Progress;