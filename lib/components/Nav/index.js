var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Nav Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';
import { hoverFocus } from '../../styled/mixins/hover';
import { borderRadius, borderTopRadius } from '../../styled/mixins/border-radius';
import { nav } from '../../styled/utilities/nav';

var defaultProps = { theme: theme };

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      return _jsx('nav', {
        className: this.props.className
      }, void 0, this.props.children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Nav;
}(React.Component);

// eslint-disable-next-line no-class-assign


Nav = styled(Nav)(_templateObject, function (props) {
  return '\n    /* Base class\n    \n     Kickstart any navigation component with a set of style resets. Works with\n     navs or uls.\n     */\n    \n    ' + nav() + '\n\n    & .nav-link {\n      display: block;\n      padding: ' + props.theme['$nav-link-padding'] + ';\n      \n      ' + hoverFocus(props.theme['$enable-hover-media-query'], 'text-decoration: none;') + '\n\n      /* Disabled state lightens text and removes hover/tab effects */\n      &.disabled {\n        color: ' + props.theme['$nav-disabled-link-color'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + '; \n      }\n    }\n        \n    /*\n     Tabs\n    */\n    \n    &.nav-tabs {\n      border-bottom: ' + props.theme['$nav-tabs-border-width'] + ' solid ' + props.theme['$nav-tabs-border-color'] + ';\n      & .nav-item {\n        margin-bottom: -' + props.theme['$nav-tabs-border-width'] + ';\n      }\n   \n      & .nav-link {\n        border: ' + props.theme['$nav-tabs-border-width'] + ' solid transparent;\n        ' + borderTopRadius(props.theme['$enable-rounded'], props.theme['$nav-tabs-border-radius']) + '\n      \n        ' + hoverFocus(props.theme['$enable-hover-media-query'], '\n            border-color: ' + props.theme['$nav-tabs-link-hover-border-color'] + ' ' + props.theme['$nav-tabs-link-hover-border-color'] + ' ' + props.theme['$nav-tabs-border-color'] + ';\n          ') + ';\n      \n        &.disabled {\n          color: ' + props.theme['$nav-disabled-link-color'] + ';\n          background-color: transparent;\n          border-color: transparent;\n        }\n      }\n      \n      & .nav-link.active,\n      .nav-item.open .nav-link {\n        color: ' + props.theme['$nav-tabs-active-link-hover-color'] + ';\n        background-color: ' + props.theme['$nav-tabs-active-link-hover-bg'] + ';\n        border-color: ' + props.theme['$nav-tabs-active-link-hover-border-color'] + ' ' + props.theme['$nav-tabs-active-link-hover-border-color'] + ' transparent;\n      }\n      \n      & .dropdown-menu {\n        /* Make dropdown border overlap tab border */\n        margin-top: -' + props.theme['$nav-tabs-border-width'] + ';\n        /* Remove the top rounded corners here since there is a hard edge above the menu */\n        ' + borderTopRadius(props.theme['$enable-rounded'], '0') + ';\n      }\n    }\n    \n    /*\n     Pills\n    */\n    \n    &.nav-pills {\n      .nav-item {\n        width: 100%;\n        float: left;\n        + .nav-item {\n          margin-left: ' + props.theme['$nav-item-margin'] + ';\n        }\n      }\n    \n      .nav-link {\n        display: block;\n        padding: ' + props.theme['$nav-link-padding'] + ';\n        ' + borderRadius(props.theme['$enable-rounded'], props.theme['$nav-pills-border-radius']) + ';\n      }\n    \n      .nav-link.active,\n      .nav-item.open .nav-link {\n        color: ' + props.theme['$nav-pills-active-link-color'] + ';\n        background-color: ' + props.theme['$nav-pills-active-link-bg'] + ';\n      }\n    }\n    \n    &.nav-stacked {\n      .nav-item {\n        display: block;\n        float: none;\n    \n        + .nav-item {\n          margin-top: ' + props.theme['$nav-item-margin'] + ';\n          margin-left: 0;\n        }\n      }\n    }\n    \n    /*\n      Justified variants\n    */\n    \n    &.nav-fill {\n      .nav-item {\n        flex: 1 1 auto;\n        text-align: center;\n      }\n    }\n    \n    &.nav-justified {\n      .nav-item {\n        flex: 1 1 100%;\n        text-align: center;\n      }\n    }\n    \n    /*\n     Tabbable tabs\n    */\n    \n    /* Hide tabbable panes to start, show them when .active */\n    &.tab-content {\n      > .tab-pane {\n        display: none;\n      }\n      > .active {\n        display: block;\n      }\n    }\n  ';
});

Nav.defaultProps = defaultProps;

export default Nav;