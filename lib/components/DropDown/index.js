var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * DropDown
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import onClickOutside from 'react-onclickoutside';
import theme from 'theme';
import Button from '../Button';
import { borderRadius } from '../../styled/mixins/border-radius';
import { boxShadow } from '../../styled/mixins/box-shadow';
import { navDivider } from '../../styled/mixins/nav-divider';
import { hoverFocus } from '../../styled/mixins/hover';
import { buttonGroup } from '../../styled/utilities/buttonGroup';
import { ifThen } from '../../styled/mixins/conditional';

var defaultProps = {
  type: 'link',
  button: { Button: Button },
  buttonProps: {
    type: 'button',
    children: 'Dropdown'
  },
  theme: theme
};

var _ref2 = _jsx('span', {
  className: 'sr-only'
});

var DropDown = function (_React$Component) {
  _inherits(DropDown, _React$Component);

  function DropDown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropDown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dropped: false
    }, _this.handleClick = function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (e.target.tagName === 'A') {
        e.target.classList.toggle('show');
      }

      _this.setState({
        dropped: !_this.state.dropped
      });
    }, _this.closeMenu = function () {
      _this.setState({
        dropped: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  _createClass(DropDown, [{
    key: 'render',
    value: function render() {
      var Btn = this.props.button;

      var _props$buttonProps = this.props.buttonProps,
          href = _props$buttonProps.href,
          value = _props$buttonProps.value,
          className = _props$buttonProps.className,
          rest = _objectWithoutProperties(_props$buttonProps, ['href', 'value', 'className']);

      var dropdown = _jsx('div', {
        className: this.props.className
      }, void 0, React.createElement(
        Btn,
        _extends({
          className: cn(className, 'dropdown-toggle'),
          href: href,
          onClick: this.handleClick
        }, rest),
        value
      ), _jsx('div', {
        className: cn({ 'dropdown-hide': !this.state.dropped })
      }, void 0, this.props.dropdown));

      if (this.props['dropdown-split']) {
        return _jsx('div', {
          className: this.props.className
        }, void 0, React.createElement(
          Btn,
          _extends({
            className: className
          }, rest),
          value
        ), React.createElement(
          Btn,
          _extends({}, rest, {
            className: cn(className, 'dropdown-toggle', 'dropdown-toggle-split'),
            href: href,
            onClick: this.handleClick
          }),
          _ref2
        ), _jsx('div', {
          className: cn({
            'dropdown-hide': !this.state.dropped
          })
        }, void 0, this.props.dropdown));
      }
      return dropdown;
    }
  }]);

  return DropDown;
}(React.Component);

// eslint-disable-next-line no-class-assign


DropDown = onClickOutside(DropDown, {
  handleClickOutside: function handleClickOutside(instance) {
    return instance.closeMenu;
  }
});

// eslint-disable-next-line no-class-assign
DropDown = styled(DropDown)(_templateObject, function (props) {
  return '\n\n    &.dropup,\n    &.dropdown {\n      position: relative;\n    }\n\n    & .dropdown-hide {\n      display: none;\n    }\n    \n    & .dropdown-toggle {\n      /* Generate the caret automatically */\n      &::after {\n        display: inline-block;\n        width: 0;\n        height: 0;\n        margin-left: ' + props.theme['$caret-width'] + ';\n        vertical-align: middle;\n        content: \'\';\n        border-top: ' + props.theme['$caret-width'] + ' solid;\n        border-right: ' + props.theme['$caret-width'] + ' solid transparent;\n        border-left: ' + props.theme['$caret-width'] + ' solid transparent;\n      }\n\n      /* Prevent the focus on the dropdown toggle when closing dropdowns */\n      &:focus {\n        outline: 0;\n      }\n    }\n\n    &.dropup {\n      .dropdown-toggle {\n        &::after {\n          border-top: 0;\n          border-bottom: ' + props.theme['$caret-width'] + ' solid;\n        }\n      }\n    }\n\n    & .dropdown-menu {\n      clear: left;\n      position: absolute;\n      top: 100%;\n      left: 0;\n      z-index: ' + props.theme['$zindex-dropdown'] + ';\n      display: block; /* none by default, but block on \'open\' of the menu */\n      float: left;\n      min-width: ' + props.theme['$dropdown-min-width'] + ';\n      padding: ' + props.theme['$dropdown-padding-y'] + ' 0;\n      margin: ' + props.theme['$dropdown-margin-top'] + ' 0; /* override default ul */\n      font-size: ' + props.theme['$font-size-base'] + ';\n      color: ' + props.theme['$body-color'] + ';\n      text-align: left; /* Ensures proper alignment if parent has it changed (e.g., modal footer) */\n      list-style: none;\n      background-color: ' + props.theme['$dropdown-bg'] + ';\n      background-clip: padding-box;\n      border: ' + props.theme['$dropdown-border-width'] + ' solid ' + props.theme['$dropdown-border-color'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n      ' + boxShadow(props.theme['$enable-shadows'], props.theme['$dropdown-box-shadow']) + '\n    }\n\n    /* mixin from bootstrap 4, see : scss/mixins/_nav-divider.css */\n    & .dropdown-divider {\n      ' + navDivider(props.theme['$spacer-y'], props.theme['$dropdown-divider-bg']) + '\n    }\n\n    & .dropdown-item {\n      display: block;\n      width: 100%; /* For <button>s */\n      padding: 3px ' + props.theme['$dropdown-item-padding-x'] + ';\n      clear: both;\n      font-weight: ' + props.theme['$font-weight-normal'] + ';\n      color: ' + props.theme['$dropdown-link-color'] + ';\n      text-align: inherit; /* For <button>s */\n      white-space: nowrap; /* prevent links from randomly breaking onto new lines */\n      background: none; /* For <button>s */\n      border: 0; /* For <button>s */\n\n      ' + hoverFocus(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$dropdown-link-hover-color'] + ';\n        text-decoration: none;\n        background-color: ' + props.theme['$dropdown-link-hover-bg'] + '\n      ') + '\n\n      &.active,\n      &:active {\n        color: ' + props.theme['$dropdown-link-active-color'] + ';\n        text-decoration: none;\n        background-color: ' + props.theme['$dropdown-link-active-bg'] + '\n      }\n\n      &.disabled,\n      &:disabled{\n        color: ' + props.theme['$dropdown-link-disabled-color'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n        background-color: transparent;\n        ' + ifThen(props.theme['$enabled-gradients'], 'background-image: none; /* Remove CSS gradient */') + '\n      }\n    }\n\n    &.show {\n      /* show the menu */\n      &>.dropdown-menu {\n        display: block;\n      }\n\n      & > a {\n        outline: 0;\n      }\n    }\n\n\n    /* Menu positioning */\n\n    /* Add extra class to .dropdown-menu to flip the alignment of the dropdown*\n    /* menu with the parent. */\n    & .dropdown-menu-right {\n      right: 0;\n      left: auto; /* Reset the default from .dropdown-menu */\n    }\n\n    & .dropdown-menu-left {\n      right: auto;\n      left: 0;\n    }\n\n    /* Dropdown section headers */\n    & .dropdown-header {\n      display: block;\n      padding: ' + props.theme['$dropdown-padding-y'] + ' ' + props.theme['$dropdown-item-padding-x'] + ';\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      color: ' + props.theme['$dropdown-header-color'] + ';\n      white-space: nowrap; /* as with > li > a */\n    }\n    /* Dropdown section footers */\n    & .dropdown-footer {\n      display: block;\n      padding: ' + props.theme['$dropdown-padding-y'] + ' ' + props.theme['$dropdown-item-padding-x'] + ';\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      color: ' + props.theme['$dropdown-header-color'] + ';\n      white-space: nowrap; /* as with > li > a */\n    }\n    \n\n    /* Backdrop to catch body clicks on mobile, etc. */\n    & .dropdown-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-dropdown-backdrop'] + ';\n    }\n\n    /* Allow for dropdowns to go bottom up (aka, dropup-menu) */\n\n    /* Just add .dropup after the standard .dropdown class and you\'re set. */\n    /* TODO: abstract this so that the navbar fixed styles are not placed here? */\n\n    &.dropup {\n      .dropdown-menu {\n        top: auto;\n        bottom: 100%;\n        margin-bottom: ' + props.theme['$dropdown-margin-top'] + ';\n      }\n    }\n        \n    /* Added Mixin boutonGroup to enable dropdown to beneficiate from buttonGroup classes */\n    ' + buttonGroup(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-toolbar-margin'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$caret-width-lg'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-border-width']) + '\n  ';
});

DropDown.defaultProps = defaultProps;

export default DropDown;