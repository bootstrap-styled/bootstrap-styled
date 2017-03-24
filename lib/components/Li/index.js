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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _media = require('../../styled/mixins/media');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A list item.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = { theme: _theme2.default };

var Li = function (_React$Component) {
  _inherits(Li, _React$Component);

  function Li() {
    _classCallCheck(this, Li);

    return _possibleConstructorReturn(this, (Li.__proto__ || Object.getPrototypeOf(Li)).apply(this, arguments));
  }

  _createClass(Li, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          children = _props.children,
          inline = _props.inline,
          separator = _props.separator,
          media = _props.media,
          dropdownItem = _props['dropdown-item'],
          dropdownHeader = _props['dropdown-header'],
          dropdownFooter = _props['dropdown-footer'],
          attributes = _objectWithoutProperties(_props, ['className', 'theme', 'children', 'inline', 'separator', 'media', 'dropdown-item', 'dropdown-header', 'dropdown-footer']);

      var classes = (0, _classnames2.default)(className, separator ? 'dropdown-divider' : false, dropdownItem ? 'dropdown-item' : false, dropdownItem ? 'dropdown-item' : false, dropdownHeader ? 'dropdown-header' : false, dropdownFooter ? 'dropdown-footer' : false, inline ? 'list-inline-item' : false, media ? 'media' : false);
      return _react2.default.createElement(
        'li',
        _extends({
          className: classes
        }, attributes),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Li;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Li = (0, _styledComponents2.default)(Li).withConfig({
  displayName: 'Li__Li',
  componentId: 'Li__Li-17ga2bs'
})(['', ''], function (props) {
  return '\n    &.list-inline-item {\n      display: inline-block;\n    \n      &:not(:last-child) {\n        margin-right: ' + props.theme['$list-inline-padding'] + ';\n      }\n    }\n    \n    ' + (0, _media.media)() + '\n  ';
});

Li.defaultProps = defaultProps;

exports.default = Li;