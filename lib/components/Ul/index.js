var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Unordered List Tabs and Pills
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';

import { nav } from '../../styled/mixins/nav';
import { listUnstyled, listInline, listInlineItem } from '../../styled/mixins/lists';
import { navbar } from '../../styled/mixins/navbar';
import { pagination } from '../../styled/mixins/paginations';

var defaultProps = { theme: bsTheme };

var Ul = function (_React$Component) {
  _inherits(Ul, _React$Component);

  function Ul() {
    _classCallCheck(this, Ul);

    return _possibleConstructorReturn(this, (Ul.__proto__ || Object.getPrototypeOf(Ul)).apply(this, arguments));
  }

  _createClass(Ul, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['theme', 'className', 'children']); // eslint-disable-line no-unused-vars


      return React.createElement(
        'ul',
        _extends({ className: className }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Ul;
}(React.Component);

// eslint-disable-next-line no-class-assign


Ul = styled(Ul).withConfig({
  displayName: 'Ul__Ul',
  componentId: 'Ul__Ul-dv0nng'
})(['', ''], function (props) {
  return '\n  \n    ' + nav(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n    ' + navbar(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n    \n    ' + pagination(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$border-radius'], props.theme['$pagination-active-color'], props.theme['$pagination-active-bg'], props.theme['$pagination-active-border'], props.theme['$pagination-disabled-color'], props.theme['$cursor-disabled'], props.theme['$pagination-disabled-bg'], props.theme['$pagination-disabled-border'], props.theme['$pagination-padding-y'], props.theme['$pagination-padding-x'], props.theme['$pagination-line-height'], props.theme['$pagination-color'], props.theme['$pagination-bg'], props.theme['$pagination-border-width'], props.theme['$pagination-border-color'], props.theme['$pagination-hover-color'], props.theme['$pagination-hover-bg'], props.theme['$pagination-hover-border'], props.theme['$pagination-padding-y-lg'], props.theme['$pagination-padding-x-lg'], props.theme['$font-size-lg'], props.theme['$line-height-lg'], props.theme['$border-radius-lg'], props.theme['$pagination-padding-y-sm'], props.theme['$pagination-padding-x-sm'], props.theme['$font-size-sm'], props.theme['$line-height-sm'], props.theme['$border-radius-sm']) + '\n    \n\n    /* Type Scss */\n    &.list-unstyled {\n      ' + listUnstyled() + '\n    }\n    \n    &.list-inline {\n      ' + listInline() + '\n    }\n    \n    &.list-inline-item {\n      ' + listInlineItem(props.theme['$list-inline-padding']) + '\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;\n    margin-bottom: 1rem;\n  \n    & ol,\n    & ul {\n      margin-bottom: 0;\n    }\n  ';
});

Ul.defaultProps = defaultProps;

export default Ul;