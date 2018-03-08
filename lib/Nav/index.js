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

var _nav = require('bootstrap-styled-mixins/lib/nav');

var _navbar = require('bootstrap-styled-mixins/lib/navbar');

var _Ul = require('../Ul');

var _Ul2 = _interopRequireDefault(_Ul);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Nav Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultProps = {
  tag: _Ul2.default,
  toggleable: 'false',
  theme: {
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
  /** Toggles passed as a string. Can be `true` or `false` */
  toggleable: _propTypes2.default.string,
  /** Toggles inline CSS style. */
  inline: _propTypes2.default.bool,
  /** Toggles vertical CSS style. */
  vertical: _propTypes2.default.bool,
  /** Toggles justified CSS style. */
  justified: _propTypes2.default.bool,
  /** Toggles fill CSS style. */
  fill: _propTypes2.default.bool,
  /** Toggles tabs CSS style. */
  tabs: _propTypes2.default.bool,
  /** Toggles pills CSS style. */
  pills: _propTypes2.default.bool,
  /** Toggles stacked CSS style. */
  stacked: _propTypes2.default.bool,
  /** Toggles navbar CSS style. */
  navbar: _propTypes2.default.bool,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
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
  }),
  /**
   * Replace or remove a className from the component.
   * See example [here](https://www.npmjs.com/package/map-to-css-modules).
   */
  cssModule: _propTypes2.default.object
  /** Toggles disabled CSS style. */
};

var NavUnstyled = function (_React$Component) {
  _inherits(NavUnstyled, _React$Component);

  function NavUnstyled() {
    _classCallCheck(this, NavUnstyled);

    return _possibleConstructorReturn(this, (NavUnstyled.__proto__ || Object.getPrototypeOf(NavUnstyled)).apply(this, arguments));
  }

  _createClass(NavUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          tabs = _omit.tabs,
          pills = _omit.pills,
          fill = _omit.fill,
          inline = _omit.inline,
          stacked = _omit.stacked,
          vertical = _omit.vertical,
          justified = _omit.justified,
          navbar = _omit.navbar,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'tabs', 'pills', 'fill', 'inline', 'stacked', 'vertical', 'justified', 'navbar', 'tag']);

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, navbar ? 'navbar-nav' : 'nav', {
        'nav-tabs': tabs,
        'nav-pills': pills,
        'nav-fill': fill,
        'nav-inline': inline,
        'nav-stacked': stacked,
        'nav-justified': justified,
        'flex-column': vertical
      }), cssModule);

      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return NavUnstyled;
}(_react2.default.Component);
/**
 * A classic `<Nav />` component.
 * Use **list** or **link based**, with **horizontal** or **vertical** alignment.
 * you can also use `tabs` or `pills` attributes with `justified` and `fill` attributes.
 * It also work well with with **flex utilities** and you can even add `<Dropdown />` menu.
 */


NavUnstyled.defaultProps = defaultProps;
NavUnstyled.propTypes = propTypes;
var Nav = (0, _styledComponents2.default)(NavUnstyled).withConfig({
  displayName: 'Nav'
})(['', ''], function (props) {
  return '\n    ' + (0, _nav.nav)(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n    \n    ' + (0, _navbar.navbar)(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n  ';
});

Nav.defaultProps = defaultProps;
Nav.propTypes = propTypes;

/** @component */
exports.default = Nav;
module.exports = exports['default'];