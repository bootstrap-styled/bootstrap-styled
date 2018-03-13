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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _borderRadius = require('bootstrap-styled-mixins/lib/border-radius');

var _clearfix = require('bootstrap-styled-mixins/lib/clearfix');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Breadcrumb
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = exports.defaultProps = {
  tag: 'ol',
  theme: {
    '$breadcrumb-padding-y': '.75rem',
    '$breadcrumb-padding-x': '1rem',
    '$breadcrumb-item-padding': '.5rem',
    '$breadcrumb-bg': '#eceeef',
    '$breadcrumb-divider-color': '#636c72',
    '$breadcrumb-active-color': '#636c72',
    '$breadcrumb-divider': '"/"',
    '$enable-rounded': false
  }
};
var propTypes = exports.propTypes = {
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
    '$breadcrumb-padding-y': _propTypes2.default.string,
    '$breadcrumb-padding-x': _propTypes2.default.string,
    '$breadcrumb-item-padding': _propTypes2.default.string,
    '$breadcrumb-bg': _propTypes2.default.string,
    '$breadcrumb-divider-color': _propTypes2.default.string,
    '$breadcrumb-active-color': _propTypes2.default.string,
    '$breadcrumb-divider': _propTypes2.default.string,
    '$enable-rounded': _propTypes2.default.bool
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var BreadcrumbUnstyled = function (_React$Component) {
  _inherits(BreadcrumbUnstyled, _React$Component);

  function BreadcrumbUnstyled() {
    _classCallCheck(this, BreadcrumbUnstyled);

    return _possibleConstructorReturn(this, (BreadcrumbUnstyled.__proto__ || Object.getPrototypeOf(BreadcrumbUnstyled)).apply(this, arguments));
  }

  _createClass(BreadcrumbUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);

      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'breadcrumb'), cssModule)
      }, attributes));
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return BreadcrumbUnstyled;
}(_react2.default.Component);

/**
 * Use our **default** `Breadcrumb` blocks, to emphasize part of your page.
 * You can also use another `tag` without list markup.
 */


BreadcrumbUnstyled.defaultProps = defaultProps;
BreadcrumbUnstyled.propTypes = propTypes;
var Breadcrumb = (0, _styledComponents2.default)(BreadcrumbUnstyled).withConfig({
  displayName: 'Breadcrumb'
})(['', ''], function (props) {
  return '\n    &.breadcrumb {\n      padding: ' + props.theme['$breadcrumb-padding-y'] + ' ' + props.theme['$breadcrumb-padding-x'] + ';\n      margin-bottom: ' + props.theme['$spacer-y'] + ';\n      list-style: none;\n      background-color: ' + props.theme['$breadcrumb-bg'] + ';\n \n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n            \n      ' + (0, _clearfix.clearfix)() + '\n    }\n\n    & .breadcrumb-item {\n      float: left;\n    \n      /* The separator between breadcrumbs (by default, a forward-slash: "/") */\n      + .breadcrumb-item::before {\n        display: inline-block; /* Suppress underlining of the separator in modern browsers */\n        padding-right: ' + props.theme['$breadcrumb-item-padding'] + ';\n        padding-left: ' + props.theme['$breadcrumb-item-padding'] + ';\n        color: ' + props.theme['$breadcrumb-divider-color'] + ';\n        content: ' + props.theme['$breadcrumb-divider'] + ';\n      }\n  \n      /* IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built\n       without \'ul\'s. The \'::before\' pseudo-element generates an element\n       *within* the .breadcrumb-item and thereby inherits the \'text-decoration\'.\n      \n       To trick IE into suppressing the underline, we give the pseudo-element an\n       underline and then immediately remove it.\n      */\n      \n      + .breadcrumb-item:hover::before {\n        text-decoration: underline;\n      }\n      + .breadcrumb-item:hover::before {\n        text-decoration: none;\n      }\n    \n      &.active {\n        color: ' + props.theme['$breadcrumb-active-color'] + ';\n      }\n    }\n  ';
});

Breadcrumb.defaultProps = defaultProps;
Breadcrumb.propTypes = propTypes;

/** @component */
exports.default = Breadcrumb;