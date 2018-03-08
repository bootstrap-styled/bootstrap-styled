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

var _nav = require('bootstrap-styled-mixins/lib/nav');

var _lists = require('bootstrap-styled-mixins/lib/lists');

var _navbar = require('bootstrap-styled-mixins/lib/navbar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unordered List Tabs and Pills
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The form with a username and a password input field, both of which are
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * controlled via the application state.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  tag: 'nav',
  role: 'navigation',
  toggleable: 'false',
  theme: {
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$border-width': '1px',
    '$font-size-lg': '1.25rem',
    '$body-bg': '#fff',
    '$component-active-bg': '#0275d8',
    '$component-active-color': '#fff',
    '$border-radius': '.25rem',
    '$navbar-padding-x': '1rem',
    '$navbar-padding-y': '0.5rem',
    '$nav-link-padding': '.5em 1em',
    '$nav-disabled-link-color': '#636c72',
    '$nav-tabs-border-color': '#ddd',
    '$nav-tabs-border-width': '1px',
    '$nav-tabs-border-radius': '.5em 1em',
    '$nav-tabs-link-hover-border-color': '#eceeef',
    '$nav-tabs-active-link-hover-color': '#464a4c',
    '$nav-tabs-active-link-hover-bg': '#fff',
    '$nav-tabs-active-link-hover-border-color': '#ddd',
    '$nav-pills-border-radius': '.25rem',
    '$nav-pills-active-link-color': '#fff',
    '$nav-pills-active-link-bg': '#0275d8',
    '$cursor-disabled': 'not-allowed',
    '$zindex-navbar': '1000',
    '$zindex-navbar-fixed': '1030',
    '$zindex-navbar-sticky': '1030',
    '$navbar-brand-padding-y': '.25rem',
    '$navbar-divider-padding-y': '.425rem',
    '$navbar-toggler-padding-y': '.5rem',
    '$navbar-toggler-padding-x': '.75rem',
    '$navbar-toggler-font-size': '1.25rem',
    '$navbar-toggler-border-radius': '.25rem',
    '$navbar-light-active-color': 'rgba(0,0,0,.9)',
    '$navbar-light-color': 'rgba(0,0,0,.5)',
    '$navbar-light-hover-color': 'rgba(0,0,0,.7)',
    '$navbar-light-toggler-border': 'rgba(0,0,0,.1)',
    '$navbar-light-disabled-color': 'rgba(0, 0, 0, 0.3)',
    '$navbar-light-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0,0,0,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-active-color': 'rgba(255,255,255,1)',
    '$navbar-inverse-color': 'rgba(255,255,255,.5)',
    '$navbar-inverse-hover-color': 'rgba(255,255,255,.75)',
    '$navbar-inverse-toggler-border': 'rgba(255,255,255,.1)',
    '$navbar-inverse-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-disabled-color': 'rgba(255, 255, 255, 0.25)'
  }
};
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<Ul />` component. */
  children: _propTypes2.default.node.isRequired,
  /** Toggles inline CSS style. */
  inline: _propTypes2.default.bool,
  /** Toggles un-styled CSS style. */
  unstyled: _propTypes2.default.bool,
  /** Toggles passed as a string. Can be `true` or `false` */
  toggleable: _propTypes2.default.string,
  /** Theme variables. */
  theme: _propTypes2.default.shape({
    '$enable-rounded': _propTypes2.default.bool,
    '$enable-hover-media-query': _propTypes2.default.bool,
    '$grid-breakpoints': _propTypes2.default.object,
    '$border-width': _propTypes2.default.string,
    '$font-size-lg': _propTypes2.default.string,
    '$body-bg': _propTypes2.default.string,
    '$component-active-bg': _propTypes2.default.string,
    '$component-active-color': _propTypes2.default.string,
    '$border-radius': _propTypes2.default.string,
    '$navbar-padding-x': _propTypes2.default.string,
    '$navbar-padding-y': _propTypes2.default.string,
    '$nav-link-padding': _propTypes2.default.string,
    '$nav-disabled-link-color': _propTypes2.default.string,
    '$nav-tabs-border-color': _propTypes2.default.string,
    '$nav-tabs-border-width': _propTypes2.default.string,
    '$nav-tabs-border-radius': _propTypes2.default.string,
    '$nav-tabs-link-hover-border-color': _propTypes2.default.string,
    '$nav-tabs-active-link-hover-color': _propTypes2.default.string,
    '$nav-tabs-active-link-hover-bg': _propTypes2.default.string,
    '$nav-tabs-active-link-hover-border-color': _propTypes2.default.string,
    '$nav-pills-border-radius': _propTypes2.default.string,
    '$nav-pills-active-link-color': _propTypes2.default.string,
    '$nav-pills-active-link-bg': _propTypes2.default.string,
    '$cursor-disabled': _propTypes2.default.string,
    '$zindex-navbar': _propTypes2.default.string,
    '$zindex-navbar-fixed': _propTypes2.default.string,
    '$zindex-navbar-sticky': _propTypes2.default.string,
    '$navbar-brand-padding-y': _propTypes2.default.string,
    '$navbar-divider-padding-y': _propTypes2.default.string,
    '$navbar-toggler-padding-y': _propTypes2.default.string,
    '$navbar-toggler-padding-x': _propTypes2.default.string,
    '$navbar-toggler-font-size': _propTypes2.default.string,
    '$navbar-toggler-border-radius': _propTypes2.default.string,
    '$navbar-light-active-color': _propTypes2.default.string,
    '$navbar-light-color': _propTypes2.default.string,
    '$navbar-light-hover-color': _propTypes2.default.string,
    '$navbar-light-toggler-border': _propTypes2.default.string,
    '$navbar-light-disabled-color': _propTypes2.default.string,
    '$navbar-light-toggler-bg': _propTypes2.default.string,
    '$navbar-inverse-active-color': _propTypes2.default.string,
    '$navbar-inverse-color': _propTypes2.default.string,
    '$navbar-inverse-hover-color': _propTypes2.default.string,
    '$navbar-inverse-toggler-border': _propTypes2.default.string,
    '$navbar-inverse-toggler-bg': _propTypes2.default.string,
    '$navbar-inverse-disabled-color': _propTypes2.default.string
  })
};

var UlUnstyled = function (_React$Component) {
  _inherits(UlUnstyled, _React$Component);

  function UlUnstyled() {
    _classCallCheck(this, UlUnstyled);

    return _possibleConstructorReturn(this, (UlUnstyled.__proto__ || Object.getPrototypeOf(UlUnstyled)).apply(this, arguments));
  }

  _createClass(UlUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          inline = _omit.inline,
          unstyled = _omit.unstyled,
          children = _omit.children,
          rest = _objectWithoutProperties(_omit, ['className', 'inline', 'unstyled', 'children']);

      var classes = (0, _classnames2.default)(className, inline ? 'list-inline' : false, unstyled ? 'list-unstyled' : false);
      return _react2.default.createElement(
        'ul',
        _extends({ className: classes }, rest),
        children
      );
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return UlUnstyled;
}(_react2.default.Component);

UlUnstyled.defaultProps = defaultProps;
UlUnstyled.propTypes = propTypes;


var Ul = (0, _styledComponents2.default)(UlUnstyled).withConfig({
  displayName: 'Ul'
})(['', ''], function (props) {
  return '\n    ' + (0, _nav.nav)(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n    ' + (0, _navbar.navbar)(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$font-size-lg'], props.theme['$border-width'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n\n    /* Type Scss */\n    &.list-unstyled {\n      ' + (0, _lists.listUnstyled)() + '\n    }\n\n    &.list-inline {\n      ' + (0, _lists.listInline)() + '\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;\n    margin-bottom: 1rem;\n  \n    & ol,\n    & ul {\n      margin-bottom: 0;\n    }\n  ';
});

Ul.defaultProps = defaultProps;
Ul.propTypes = propTypes;

/** @component */
exports.default = Ul;
module.exports = exports['default'];