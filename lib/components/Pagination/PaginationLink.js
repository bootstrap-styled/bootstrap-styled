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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tools = require('../../utils/tools');

var _A = require('../A');

var _A2 = _interopRequireDefault(_A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A PaginationLink
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  tag: _A2.default
};

var PaginationLink = function (_React$Component) {
  _inherits(PaginationLink, _React$Component);

  function PaginationLink() {
    _classCallCheck(this, PaginationLink);

    return _possibleConstructorReturn(this, (PaginationLink.__proto__ || Object.getPrototypeOf(PaginationLink)).apply(this, arguments));
  }

  _createClass(PaginationLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          next = _props.next,
          previous = _props.previous,
          Tag = _props.tag,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'next', 'previous', 'tag']);

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, 'page-link'), cssModule);

      var defaultAriaLabel = void 0;
      if (previous) {
        defaultAriaLabel = 'Previous';
      } else if (next) {
        defaultAriaLabel = 'Next';
      }
      var ariaLabel = this.props['aria-label'] || defaultAriaLabel;

      var defaultCaret = void 0;
      if (previous) {
        defaultCaret = '\xAB';
      } else if (next) {
        defaultCaret = '\xBB';
      }

      var children = this.props.children;
      if (previous || next) {
        children = [_react2.default.createElement(
          'span',
          {
            'aria-hidden': 'true',
            key: 'caret'
          },
          children || defaultCaret
        ), _react2.default.createElement(
          'span',
          {
            className: 'sr-only',
            key: 'sr'
          },
          ariaLabel
        )];
      }

      return _react2.default.createElement(
        Tag,
        _extends({}, attributes, {
          className: classes,
          'aria-label': ariaLabel
        }),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return PaginationLink;
}(_react2.default.Component);

PaginationLink.propTypes = {
  'aria-label': _propTypes2.default.string,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  cssModule: _propTypes2.default.object,
  next: _propTypes2.default.bool,
  previous: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};


PaginationLink.defaultProps = defaultProps;

exports.default = PaginationLink;
module.exports = exports['default'];