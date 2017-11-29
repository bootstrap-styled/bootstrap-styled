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

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint dot-notation: 'off' */

/**
 * Blockquote
 *
 */

var defaultProps = {
  tag: 'blockquote',
  theme: (0, _theme.makeTheme)()
};

var BlockquoteUnstyled = function (_React$Component) {
  _inherits(BlockquoteUnstyled, _React$Component);

  function BlockquoteUnstyled() {
    _classCallCheck(this, BlockquoteUnstyled);

    return _possibleConstructorReturn(this, (BlockquoteUnstyled.__proto__ || Object.getPrototypeOf(BlockquoteUnstyled)).apply(this, arguments));
  }

  _createClass(BlockquoteUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          reverse = _omit.reverse,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'reverse', 'tag']);

      return _react2.default.createElement(Tag, _extends({
        className: (0, _classnames2.default)(className, 'blockquote', {
          'blockquote-reverse': reverse
        })
      }, attributes));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return BlockquoteUnstyled;
}(_react2.default.Component);

BlockquoteUnstyled.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  tag: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
  /* eslint-enable react/no-unused-prop-types */
};


var Blockquote = (0, _styledComponents2.default)(BlockquoteUnstyled).withConfig({
  displayName: 'Blockquote'
})(['  ', ' '], function (props) {
  return '\n    &.blockquote {\n      padding: ' + props.theme['$spacer-halved'] + ' ' + props.theme['$spacer'] + ';\n      margin-bottom: ' + props.theme['$spacer'] + ';\n      font-size: ' + props.theme['$blockquote-font-size'] + ';\n      border-left: ' + props.theme['$blockquote-border-width'] + ' solid ' + props.theme['$blockquote-border-color'] + ';\n      \n      .blockquote-footer {\n        display: block;\n        font-size: 80%; \n        color: ' + props.theme['$blockquote-small-color'] + ';\n        &::before {\n          content: \'\\2014 \\00A0\';\n        }\n      }\n    }\n\n    &.blockquote-reverse {\n      padding-right: ' + props.theme['$spacer'] + ';\n      padding-left: 0;\n      text-align: right;\n      border-right: ' + props.theme['$blockquote-border-width'] + ' solid ' + props.theme['$blockquote-border-color'] + ';\n      border-left: 0;\n      \n      .blockquote-footer {\n        display: block;\n        font-size: 80%; \n        color: ' + props.theme['$blockquote-small-color'] + ';\n        &::before {\n          content: "";\n        }\n        &::after {\n          content: \'\\00A0 \\2014\';\n        }\n      }\n    }\n    \n    /* Reboot from bootstrap v4 */\n    margin: 0 0 1rem;\n ';
});

Blockquote.defaultProps = defaultProps;

exports.default = Blockquote;
module.exports = exports['default'];