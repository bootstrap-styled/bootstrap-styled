var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * HeaderNavBar Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'theme';
import Header from '../Header';
import A from '../A';
import Nav from '../Nav';
import MenuCollapse from './MenuCollapse';
import MenuSlide from './MenuSlide';
import MenuPushMini from './MenuPushMini';
import MenuPushSimple from './MenuPushSimple';
import MenuAccount from './MenuAccount';
import Container from '../Container';
import ContainerFluid from '../ContainerFluid';
import Button from '../Button';
import { transition } from '../../styled/mixins/transition';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import { getFlexUtilities } from '../../styled/utilities/flex';
import { ifElse } from '../../styled/mixins/conditional';
import shapeMenuOffsetPush from './shapeMenuOffsetPush';
import shapeMenuTopPush from './shapeMenuTopPush';
import shapeMenuOffsetSlide from './shapeMenuOffsetSlide';
import shapeMenuTopSlide from './shapeMenuTopSlide';
import shapeMenuCollapsed from './shapeMenuCollapsed';
import collapse from './composeCollapse';
import slide from './composeSlide';
import push from './composePush';

export var compCollapse = collapse;
export var compSlide = slide;
export var compPush = push;

var defaultProps = {
  theme: theme,
  btnText: 'Bootstrap',
  container: false,
  'container-fluid': false,
  'navbar-dark': false,
  'navbar-light': false,
  'static-top': false,
  'sticky-top': false,
  'fixed-top': false,
  'fixed-bottom': false
};

var HeaderNavBar = function (_React$Component) {
  _inherits(HeaderNavBar, _React$Component);

  function HeaderNavBar(props) {
    _classCallCheck(this, HeaderNavBar);

    var _this = _possibleConstructorReturn(this, (HeaderNavBar.__proto__ || Object.getPrototypeOf(HeaderNavBar)).call(this, props));

    var isContainer = _this.props.container;
    var isContainerFluid = _this.props['container-fluid'];

    if (!isContainer && !isContainerFluid) {
      _this.wrapper = function (p) {
        return _jsx('div', {}, void 0, p.children);
      };
    } else if (isContainer) {
      _this.wrapper = Container;
    } else if (isContainerFluid) {
      _this.wrapper = ContainerFluid;
    }

    var isButton = _this.props.button;

    if (!isButton) {
      _this.button = Button;
    } else {
      _this.button = _this.props.button;
    }
    return _this;
  } // eslint-disable-line react/prefer-stateless-function

  _createClass(HeaderNavBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          composeCollapsed = _props.composeCollapsed,
          composePush = _props.composePush,
          composeSlide = _props.composeSlide;


      var classConfig = [];
      if (composeCollapsed) {
        classConfig.push('navbar-toggleable-md');
      }

      var cssClasses = cn('navbar', 'bd-navbar', classConfig, className, {
        'navbar-dark': this.props['navbar-dark'],
        'bg-inverse': this.props['navbar-dark'],
        'navbar-light': this.props['navbar-light'],
        'bg-faded': this.props['navbar-light'],
        'navbar-static-top': this.props['static-top'],
        'navbar-sticky-top': this.props['sticky-top'],
        'navbar-fixed-top': this.props['fixed-top'],
        'navbar-fixed-bottom': this.props['fixed-bottom']
      });

      var Wrapper = this.wrapper;
      var ButtonToggle = this.button;

      var containerCollapse = composeCollapsed ? _jsx(Container, {}, void 0, _jsx('div', {
        className: 'd-flex justify-content-between hidden-lg-up'
      }, void 0, _jsx(A, {
        className: 'navbar-brand',
        href: '/'
      }, void 0, composeCollapsed.brandTitle), _jsx(ButtonToggle, {
        className: 'navbar-toggler',
        type: 'button',
        onClick: composeCollapsed.onClick
      })), _jsx(MenuCollapse, {
        active: composeCollapsed.isCollapsed
      }, void 0, composeCollapsed.menuCollapsed.menu)) : null;

      var navTopPush = composePush ? _jsx('div', {}, void 0, _jsx(ButtonToggle, {
        className: 'navbar-toggler hidden-md-up float-xs-left ma-3',
        type: 'button',
        onClick: composePush.onClick
      }), _jsx(MenuAccount, {}, void 0, composePush.menuTop.menuAccount)) : null;

      var navTopSlide = composeSlide ? _jsx('div', {}, void 0, _jsx(ButtonToggle, {
        className: 'navbar-toggler float-xs-left ma-3',
        type: 'button',
        onClick: composeSlide.onClick
      }), _jsx(MenuAccount, {}, void 0, composeSlide.menuTop.menuAccount)) : null;

      var containerPushMini = composePush && composePush.isMini ? _jsx(MenuPushMini, {
        active: !composePush.isHidden,
        'menu-right': composePush.menuOffset.isRight,
        'menu-left': composePush.menuOffset.isLeft
      }, void 0, composePush.menuOffset.menu) : null;

      var containerPush = composePush && !composePush.isMini ? _jsx(MenuPushSimple, {
        active: !composePush.isHidden,
        'menu-right': composePush.menuOffset.isRight,
        'menu-left': composePush.menuOffset.isLeft
      }, void 0, composePush.menuOffset.menu) : null;

      var containerSlide = composeSlide ? _jsx(MenuSlide, {
        active: !composeSlide.isHidden,
        'menu-right': composeSlide.menuOffset.isRight,
        'menu-left': composeSlide.menuOffset.isLeft
      }, void 0, composeSlide.menuOffset.menu) : null;

      return _jsx('div', {}, void 0, React.createElement(
        Header,
        { className: cssClasses, ref: function ref(node) {
            _this2.node = node;
          } },
        _jsx(Wrapper, {}, void 0, _jsx(Nav, {}, void 0, navTopPush, navTopSlide, containerCollapse))
      ), containerSlide, containerPushMini, containerPush);
    }
  }]);

  return HeaderNavBar;
}(React.Component);
// eslint-disable-next-line no-class-assign


HeaderNavBar = styled(HeaderNavBar)(_templateObject, function (props) {
  return '\n    \n    outline: ' + props.theme['$header-navbar-border-width'] + ' solid ' + props.theme['$header-navbar-border-color'] + ';\n    \n    ' + getFlexUtilities(props.theme['$grid-breakpoints']) + '\n        \n    ' + transition(props.theme['$enable-transitions'], props.theme['$header-navbar-transition-duration']) + '\n    \n    ' + ifElse(props.composeCollapsed, 'max-height: ' + props.theme['$navbar-max-height'] + ';', 'height: ' + props.theme['$navbar-height'] + ';') + '\n     \n    & .collapse {\n      max-height: 0;\n      position: relative;\n      overflow: hidden;\n      ' + transition(props.theme['$enable-transitions'], 'ease-in-out, .35s, max-height') + '\n    \n      &.active {\n        display: block;\n        max-height: ' + props.theme['$header-max-height'] + ';\n      }\n    }\n\n    ' + mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], '\n            & .collapse {\n              height: auto;\n              max-height: ' + props.theme['$header-collapsed-max-height'] + ';\n            }\n          ') + '\n  ';
});

HeaderNavBar.defaultProps = defaultProps;

export default HeaderNavBar;