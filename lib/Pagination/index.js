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

var _paginations = require('bootstrap-styled-mixins/lib/paginations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Pagination
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  tag: 'ul',
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$pagination-padding-x': '.75rem',
    '$pagination-padding-y': '.5rem',
    '$pagination-padding-x-sm': '.5rem',
    '$pagination-padding-y-sm': '.25rem',
    '$pagination-padding-x-lg': '1.5rem',
    '$pagination-padding-y-lg': '.75rem',
    '$pagination-line-height': '1.25',
    '$pagination-color': '#0275d8',
    '$pagination-bg': '#fff',
    '$pagination-border-width': '1px',
    '$pagination-border-color': '#ddd',
    '$pagination-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
    '$pagination-hover-bg': '#eceeef',
    '$pagination-hover-border': '#ddd',
    '$pagination-active-color': '#fff',
    '$pagination-active-bg': '#0275d8',
    '$pagination-active-border': '#0275d8',
    '$pagination-disabled-color': '#636c72',
    '$pagination-disabled-bg': '#fff',
    '$pagination-disabled-border': '#ddd'
  }
};
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<Pagination />` component. */
  children: _propTypes2.default.node,
  /** Pagination use default size base and can use different size such as: */
  size: _propTypes2.default.oneOf(['sm', 'lg']),
  /** Replace the default component tag by the one specified. Can be: */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$enable-rounded': _propTypes2.default.bool,
    '$enable-hover-media-query': _propTypes2.default.bool,
    '$pagination-padding-x': _propTypes2.default.string,
    '$pagination-padding-y': _propTypes2.default.string,
    '$pagination-padding-x-sm': _propTypes2.default.string,
    '$pagination-padding-y-sm': _propTypes2.default.string,
    '$pagination-padding-x-lg': _propTypes2.default.string,
    '$pagination-padding-y-lg': _propTypes2.default.string,
    '$pagination-line-height': _propTypes2.default.string,
    '$pagination-color': _propTypes2.default.string,
    '$pagination-bg': _propTypes2.default.string,
    '$pagination-border-width': _propTypes2.default.string,
    '$pagination-border-color': _propTypes2.default.string,
    '$pagination-hover-color': _propTypes2.default.string,
    '$pagination-hover-bg': _propTypes2.default.string,
    '$pagination-hover-border': _propTypes2.default.string,
    '$pagination-active-color': _propTypes2.default.string,
    '$pagination-active-bg': _propTypes2.default.string,
    '$pagination-active-border': _propTypes2.default.string,
    '$pagination-disabled-color': _propTypes2.default.string,
    '$pagination-disabled-bg': _propTypes2.default.string,
    '$pagination-disabled-border': _propTypes2.default.string
  }),
  /** Color variables. Can be: */
  color: _propTypes2.default.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  /**
   * Replace or remove a className from the component.
   * See example [here](https://www.npmjs.com/package/map-to-css-modules).
   */
  cssModule: _propTypes2.default.object
};

var PaginationUnstyled = function (_React$Component) {
  _inherits(PaginationUnstyled, _React$Component);

  function PaginationUnstyled() {
    _classCallCheck(this, PaginationUnstyled);

    return _possibleConstructorReturn(this, (PaginationUnstyled.__proto__ || Object.getPrototypeOf(PaginationUnstyled)).apply(this, arguments));
  }

  _createClass(PaginationUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          size = _omit.size,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'size']);

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'pagination', _defineProperty({}, 'pagination-' + size, !!size)), cssModule);

      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return PaginationUnstyled;
}(_react2.default.Component);

PaginationUnstyled.defaultProps = defaultProps;
PaginationUnstyled.propTypes = propTypes;


var Pagination = (0, _styledComponents2.default)(PaginationUnstyled).withConfig({
  displayName: 'Pagination'
})(['', ''], function (props) {
  return '\n    ' + (0, _paginations.pagination)(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$border-radius'], props.theme['$pagination-active-color'], props.theme['$pagination-active-bg'], props.theme['$pagination-active-border'], props.theme['$pagination-disabled-color'], props.theme['$cursor-disabled'], props.theme['$pagination-disabled-bg'], props.theme['$pagination-disabled-border'], props.theme['$pagination-padding-y'], props.theme['$pagination-padding-x'], props.theme['$pagination-line-height'], props.theme['$pagination-color'], props.theme['$pagination-bg'], props.theme['$pagination-border-width'], props.theme['$pagination-border-color'], props.theme['$pagination-hover-color'], props.theme['$pagination-hover-bg'], props.theme['$pagination-hover-border'], props.theme['$pagination-padding-y-lg'], props.theme['$pagination-padding-x-lg'], props.theme['$font-size-lg'], props.theme['$line-height-lg'], props.theme['$border-radius-lg'], props.theme['$pagination-padding-y-sm'], props.theme['$pagination-padding-x-sm'], props.theme['$font-size-sm'], props.theme['$line-height-sm'], props.theme['$border-radius-sm']) + '\n  ';
});

Pagination.defaultProps = defaultProps;
Pagination.propTypes = propTypes;

/** @component */
exports.default = Pagination;
module.exports = exports['default'];