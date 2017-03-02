var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * NavBar
 */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import Button from 'components/Button';

var _ref = _jsx('span', {
  className: 'navbar-toggler-icon'
});

var NavBarToggler = function (_React$Component) {
  _inherits(NavBarToggler, _React$Component);

  function NavBarToggler() {
    _classCallCheck(this, NavBarToggler);

    return _possibleConstructorReturn(this, (NavBarToggler.__proto__ || Object.getPrototypeOf(NavBarToggler)).apply(this, arguments));
  }

  _createClass(NavBarToggler, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          left = _props.left,
          right = _props.right,
          rest = _objectWithoutProperties(_props, ['className', 'theme', 'left', 'right']); // eslint-disable-line no-unused-vars


      return React.createElement(
        Button,
        _extends({
          className: cn(className, 'navbar-toggler', {
            'navbar-toggler-left': left,
            'navbar-toggler-right': right
          }),
          type: 'button',
          onClick: this.props.onClick }, rest),
        _ref
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return NavBarToggler;
}(React.Component);

export default NavBarToggler;