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

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _nav = require('../../styled/mixins/nav');

var _lists = require('../../styled/mixins/lists');

var _navbar = require('../../styled/mixins/navbar');

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

var defaultProps = { theme: _theme2.default };

var Ul = function (_React$Component) {
  _inherits(Ul, _React$Component);

  function Ul() {
    _classCallCheck(this, Ul);

    return _possibleConstructorReturn(this, (Ul.__proto__ || Object.getPrototypeOf(Ul)).apply(this, arguments));
  }

  _createClass(Ul, [{
    key: 'render',
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
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Ul;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Ul.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  inline: _propTypes2.default.bool,
  unstyled: _propTypes2.default.bool
  /* eslint-enable react/no-unused-prop-types */
};
Ul = (0, _styledComponents2.default)(Ul).withConfig({
  displayName: 'Ul__Ul'
})(['', ''], function (props) {
  return '\n    ' + (0, _nav.nav)(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n    ' + (0, _navbar.navbar)(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n\n    /* Type Scss */\n    &.list-unstyled {\n      ' + (0, _lists.listUnstyled)() + '\n    }\n\n    &.list-inline {\n      ' + (0, _lists.listInline)() + '\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;\n    margin-bottom: 1rem;\n  \n    & ol,\n    & ul {\n      margin-bottom: 0;\n    }\n  ';
});

Ul.defaultProps = defaultProps;

exports.default = Ul;
module.exports = exports['default'];