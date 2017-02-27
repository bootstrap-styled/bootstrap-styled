var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */
/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * MenuPush Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'theme';

var defaultProps = { theme: theme };

var MenuPush = function (_React$Component) {
  _inherits(MenuPush, _React$Component);

  function MenuPush() {
    _classCallCheck(this, MenuPush);

    return _possibleConstructorReturn(this, (MenuPush.__proto__ || Object.getPrototypeOf(MenuPush)).apply(this, arguments));
  }

  _createClass(MenuPush, [{
    key: 'render',
    value: function render() {
      return _jsx('div', {
        className: cn('navbar-toggleable-xs', this.props.className, {
          'menu-right': this.props['menu-right'],
          'menu-left': this.props['menu-left'],
          active: this.props.active
        })
      }, void 0, this.props.children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return MenuPush;
}(React.Component);

// eslint-disable-next-line no-class-assign


MenuPush = styled(MenuPush).withConfig({
  displayName: 'MenuPush__MenuPush',
  componentId: 'MenuPush__MenuPush-1a6tl7m'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    top: 0;\n    height: 100%;\n    background-color: ' + props.theme['$menu-push-bg'] + ';\n    z-index: ' + props.theme['$zindex-menu-push'] + ';\n  ';
});

MenuPush.defaultProps = defaultProps;

export default MenuPush;