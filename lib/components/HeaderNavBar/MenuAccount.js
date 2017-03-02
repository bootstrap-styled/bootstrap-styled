var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * MenuCollapse Component
 *
 */
import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

var MenuAccount = function (_React$Component) {
  _inherits(MenuAccount, _React$Component);

  function MenuAccount() {
    _classCallCheck(this, MenuAccount);

    return _possibleConstructorReturn(this, (MenuAccount.__proto__ || Object.getPrototypeOf(MenuAccount)).apply(this, arguments));
  }

  _createClass(MenuAccount, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;

      return _jsx('div', {
        className: cn(className, 'nav-account')
      }, void 0, children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return MenuAccount;
}(React.Component);
// eslint-disable-next-line no-class-assign


MenuAccount = styled(MenuAccount).withConfig({
  displayName: 'MenuAccount__MenuAccount',
  componentId: 'MenuAccount__MenuAccount-12yw2pr'
})(['', ''], function (props) {
  return '\n    &.nav-account {\n      position: absolute;\n      top: 0;\n      right: 0;\n      \n      .nav-item {\n        .dropdown-menu {\n          margin-top: 0;\n        }\n        .nav-link {\n          display: block;\n          height: ' + props.theme['$navbar-height'] + ';\n          width: 100%;\n          padding: 1.25rem 1rem;\n          &:hover {\n            background-color: ' + props.theme['$nav-link-hover-bg'] + ';\n          }\n        }      \n      } \n    }\n  ';
});
export default MenuAccount;