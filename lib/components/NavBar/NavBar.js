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
 * NavBar
 */

import React, { PropTypes } from 'react';
import styled, { withTheme } from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import A from 'components/A';
import Collapse from 'components/Collapse/Collapse';
import NavBarToggler from './NavBarToggler';
import Container from '../Container';
import { navbar } from '../../styled/utilities/navbar';
import { nav } from '../../styled/utilities/nav';
import { ifThen } from '../../styled/mixins/conditional';

var defaultProps = {
  brand: {
    component: A,
    children: 'fix' },
  theme: bsTheme
};

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpened: false
    }, _this.closeCollapse = function () {
      _this.setState({ isOpened: false });
    }, _this.handleToggler = function () {
      _this.setState({
        isOpened: !_this.state.isOpened
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavBar, [{
    key: 'componentWillMount',
    // eslint-disable-line react/prefer-stateless-function

    value: function componentWillMount() {
      this.closeCollapse();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.closeCollapse);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.closeCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          theme = _props.theme,
          toggler = _props.toggler,
          brand = _props.brand,
          collapse = _props.collapse,
          contained = _props.contained,
          rest = _objectWithoutProperties(_props, ['className', 'children', 'theme', 'toggler', 'brand', 'collapse', 'contained']); // eslint-disable-line no-unused-vars


      var NavBarBrand = brand.component,
          childrenBrand = brand.children,
          classNameBrand = brand.className,
          restBrand = _objectWithoutProperties(brand, ['component', 'children', 'className']);

      var _ref2 = collapse || {},
          childrenCollapse = _ref2.children,
          classNameCollapse = _ref2.className,
          restCollapse = _objectWithoutProperties(_ref2, ['children', 'className']);

      var isOpened = this.state.isOpened;


      return contained ? React.createElement(
        'nav',
        _extends({ className: cn('navbar', className) }, rest),
        React.createElement(
          Container,
          rest,
          toggler && _jsx(NavBarToggler, {
            className: toggler.className,
            left: toggler.left,
            right: toggler.right,
            onClick: this.handleToggler
          }),
          childrenBrand && React.createElement(
            NavBarBrand,
            _extends({ className: cn('navbar-brand', classNameBrand) }, restBrand),
            childrenBrand
          ),
          childrenCollapse && React.createElement(
            Collapse,
            _extends({ isOpened: isOpened, keepCollapsedContent: true, className: cn('navbar-collapse', classNameCollapse) }, restCollapse),
            childrenCollapse
          ),
          children
        )
      ) : React.createElement(
        'nav',
        _extends({ className: cn('navbar', className) }, rest),
        toggler && _jsx(NavBarToggler, {
          className: toggler.className,
          left: toggler.left,
          right: toggler.right,
          onClick: this.handleToggler
        }),
        childrenBrand && React.createElement(
          NavBarBrand,
          _extends({ className: cn('navbar-brand', classNameBrand) }, restBrand),
          childrenBrand
        ),
        childrenCollapse && React.createElement(
          Collapse,
          _extends({ isOpened: isOpened, keepCollapsedContent: true, className: cn('navbar-collapse', classNameCollapse) }, restCollapse),
          childrenCollapse
        ),
        children
      );
    }
  }]);

  return NavBar;
}(React.Component);

// eslint-disable-next-line no-class-assign


NavBar = styled(NavBar)(_templateObject, function (props) {
  return '\n    ' + navbar(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n    ' + nav(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n    ' + ifThen(props.brand && props.brand.children === 'fix', '.navbar-brand { visibility: hidden !important ; }') + '\n  ';
});

NavBar.defaultProps = defaultProps;

export default withTheme(NavBar);