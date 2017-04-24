'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnSizeClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _tools = require('utils/tools');

var _gridFramework = require('../../styled/mixins/grid-framework');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]);

var columnProps = _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.shape({
  size: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.string]),
  push: stringOrNumberProp,
  pull: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var defaultProps = {
  theme: _theme2.default,
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = exports.getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? '' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }

  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var Col = function (_React$Component) {
  _inherits(Col, _React$Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          widths = _props.widths,
          Tag = _props.tag,
          theme = _props.theme,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'widths', 'tag', 'theme']);

      var colClasses = [];

      widths.forEach(function (colWidth, i) {
        var columnProp = _this2.props[colWidth];

        if (!i && columnProp === undefined) {
          columnProp = true;
        }

        delete attributes[colWidth];

        if (!columnProp) {
          return;
        }

        var isXs = !i;
        var colClass = void 0;

        if ((typeof columnProp === 'undefined' ? 'undefined' : _typeof(columnProp)) === 'object') {
          var _cn;

          var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
          colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

          colClasses.push((0, _tools.mapToCssModules)((0, _classnames2.default)((_cn = {}, _defineProperty(_cn, colClass, columnProp.size || columnProp.size === ''), _defineProperty(_cn, 'push' + colSizeInterfix + columnProp.push, columnProp.push), _defineProperty(_cn, 'pull' + colSizeInterfix + columnProp.pull, columnProp.pull), _defineProperty(_cn, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset), _cn))), cssModule);
        } else {
          colClass = getColumnSizeClass(isXs, colWidth, columnProp);
          colClasses.push(colClass);
        }
      });

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)('col', className, colClasses), cssModule);

      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Col;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Col = (0, _styledComponents2.default)(Col).withConfig({
  displayName: 'Col__Col'
})(['', ''], function (props) {
  return '\n    ' + (0, _gridFramework.makeGridColumns)(props.theme['$enable-grid-classes'], props.theme['$grid-columns'], props.theme['$grid-gutter-widths'], props.theme['$grid-breakpoints']) + '\n  ';
});

Col.defaultProps = defaultProps;

exports.default = Col;