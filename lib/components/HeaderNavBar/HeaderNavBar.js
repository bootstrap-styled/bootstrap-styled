var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Menu component
 */

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import cn from 'classnames';
import Button from '../Button';
import Header from '../Header';
import OffsetNav from './OffsetNav';
import Overlay from './Overlay';

var defaultProps = {
  button: {
    component: Button
  },
  show: false
};

var HeaderNavBar = function (_React$Component) {
  _inherits(HeaderNavBar, _React$Component);

  function HeaderNavBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderNavBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderNavBar.__proto__ || Object.getPrototypeOf(HeaderNavBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false
    }, _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      var show = _this.state.show;

      if (onClick) {
        onClick(e);
      }
      _this.setState({ show: !show });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  _createClass(HeaderNavBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          button = _props.button,
          navTop = _props['nav-top'],
          menuRight = _props['menu-right'],
          navbarInverse = _props['navbar-inverse'],
          bgInverse = _props['bg-inverse'],
          navbarLight = _props['navbar-light'],
          bgFaded = _props['bg-faded'],
          staticTop = _props['static-top'],
          stickyTop = _props['sticky-top'],
          fixedTop = _props['fixed-top'],
          fixedBottom = _props['fixed-bottom'],
          restTmp = _objectWithoutProperties(_props, ['className', 'children', 'button', 'nav-top', 'menu-right', 'navbar-inverse', 'bg-inverse', 'navbar-light', 'bg-faded', 'static-top', 'sticky-top', 'fixed-top', 'fixed-bottom']);

      var unused = restTmp.onClick,
          rest = _objectWithoutProperties(restTmp, ['onClick']); // eslint-disable-line no-unused-vars


      var ButtonToggle = button.component,
          classNameButton = button.className,
          restButton = _objectWithoutProperties(button, ['component', 'className']);

      var cssClasses = cn('navbar', 'justify-content-between', 'flex-row', className, {
        'navbar-inverse': navbarInverse,
        'bg-inverse': bgInverse,
        'navbar-light': navbarLight,
        'bg-faded': bgFaded,
        'navbar-static-top': staticTop,
        'navbar-sticky-top': stickyTop,
        'navbar-fixed-top': fixedTop,
        'navbar-fixed-bottom': fixedBottom
      });

      var buttonMenuRight = menuRight ? 'flex-last' : '';
      var buttonClasses = cn(buttonMenuRight, classNameButton, { 'navbar-toggler-icon p-3 my-auto': !classNameButton });

      return _jsx('div', {}, void 0, _jsx(Overlay, {
        active: this.state.show,
        onClick: this.handleClick
      }), React.createElement(
        Header,
        _extends({ className: cn(cssClasses) }, rest),
        React.createElement(ButtonToggle, _extends({ className: buttonClasses, onClick: this.handleClick }, restButton)),
        navTop && _jsx('div', {}, void 0, navTop)
      ), _jsx(OffsetNav, {
        active: this.state.show,
        'menu-right': menuRight
      }, void 0, children));
    }
  }]);

  return HeaderNavBar;
}(React.Component);

HeaderNavBar.defaultProps = defaultProps;
export default HeaderNavBar;