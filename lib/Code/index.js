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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Code component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  tag: 'a',
  theme: {
    '$code-font-size': '90%',
    '$code-padding-x': '.4rem',
    '$code-padding-y': '.2rem',
    '$code-color': '#bd4147',
    '$code-bg': '#f7f7f9',
    '$enable-rounded': false
  }
};
var propTypes = {
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
    '$code-font-size': _propTypes2.default.string,
    '$code-padding-x': _propTypes2.default.string,
    '$code-padding-y': _propTypes2.default.string,
    '$code-color': _propTypes2.default.string,
    '$code-bg': _propTypes2.default.string,
    '$enable-rounded': _propTypes2.default.bool
  })
};

var CodeUnstyled = function (_React$Component) {
  _inherits(CodeUnstyled, _React$Component);

  function CodeUnstyled() {
    _classCallCheck(this, CodeUnstyled);

    return _possibleConstructorReturn(this, (CodeUnstyled.__proto__ || Object.getPrototypeOf(CodeUnstyled)).apply(this, arguments));
  }

  _createClass(CodeUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'children', 'tag']);

      return _react2.default.createElement(
        Tag,
        _extends({ className: className }, attributes),
        children
      );
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return CodeUnstyled;
}(_react2.default.Component);

CodeUnstyled.defaultProps = defaultProps;
CodeUnstyled.propTypes = propTypes;


var Code = (0, _styledComponents2.default)(CodeUnstyled).withConfig({
  displayName: 'Code'
})(['', ''], function (props) {
  return '\n    /* Inline code */\n    padding: ' + props.theme['$code-padding-y'] + ' ' + props.theme['$code-padding-x'] + ';\n    font-size: ' + props.theme['$code-font-size'] + ';\n    color: ' + props.theme['$code-color'] + ';\n    background-color: ' + props.theme['$code-bg'] + ';\n    ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius']) + ';\n    \n    /* Streamline the style when inside anchors to avoid broken underline and more */\n    a > & {\n      padding: 0;\n      color: inherit;\n      background-color: inherit;\n    }\n    \n    /* Bootstrap 4 does not place this css rule straight into Code tag see: bootstrap/scss/code.scss */\n    font-family: ' + props.theme['$font-family-monospace'] + ';\n  ';
});

Code.defaultProps = defaultProps;
Code.propTypes = propTypes;

/** @component */
exports.default = Code;
module.exports = exports['default'];