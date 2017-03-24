'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _OffsetNavPush = require('./OffsetNavPush');

var _OffsetNavPush2 = _interopRequireDefault(_OffsetNavPush);

var _OffsetNavSlide = require('./OffsetNavSlide');

var _OffsetNavSlide2 = _interopRequireDefault(_OffsetNavSlide);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import styled from 'styled-components';


var defaultProps = {
  button: {
    component: _Button2.default
  },
  show: false,
  theme: _theme2.default,
  noOverlay: false,
  belowNav: false
};

var HeaderNavBar = function (_React$Component) {
  _inherits(HeaderNavBar, _React$Component);

  function HeaderNavBar(props) {
    _classCallCheck(this, HeaderNavBar);

    var _this = _possibleConstructorReturn(this, (HeaderNavBar.__proto__ || Object.getPrototypeOf(HeaderNavBar)).call(this, props));

    _this.state = {
      show: false
    };

    _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          animationPush = _this$props['animation-push'],
          menuRight = _this$props['menu-right'];
      var show = _this.state.show;

      if (onClick) {
        onClick(e);
      }
      _this.setState({ show: !show });

      // add .overflow class to body when triggered
      document.body.classList.toggle('overflow');

      //  menu-push animation
      if (animationPush) {
        menuRight ? // eslint-disable-line no-unused-expressions
        document.getElementById('wrapper').classList.toggle('right') : document.getElementById('wrapper').classList.toggle('left');
      }
    };

    var sheet = window.document.styleSheets[0];
    sheet.insertRule('.overflow { overflow: hidden; padding-right:15px; }', sheet.cssRules.length);
    return _this;
  } // eslint-disable-line react/prefer-stateless-function

  _createClass(HeaderNavBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //  Setting height of HeaderNavbar to OffsetNav if props belowHeader is true
      var headerNavbar = document.getElementById('header-nav');
      var headerNavbarHeight = headerNavbar.offsetHeight + 'px'; // eslint-disable-line prefer-template
      var offsetNav = document.getElementById('offset-nav');
      this.props.belowHeader ? offsetNav.style.marginTop = headerNavbarHeight : null; // eslint-disable-line no-unused-expressions
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          theme = _props.theme,
          button = _props.button,
          noOverlay = _props.noOverlay,
          belowHeader = _props.belowHeader,
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
          animationPush = _props['animation-push'],
          restTmp = _objectWithoutProperties(_props, ['className', 'children', 'theme', 'button', 'noOverlay', 'belowHeader', 'nav-top', 'menu-right', 'navbar-inverse', 'bg-inverse', 'navbar-light', 'bg-faded', 'static-top', 'sticky-top', 'fixed-top', 'fixed-bottom', 'animation-push']);

      var unused = restTmp.onClick,
          rest = _objectWithoutProperties(restTmp, ['onClick']); // eslint-disable-line no-unused-vars


      var ButtonToggle = button.component,
          classNameButton = button.className,
          restButton = _objectWithoutProperties(button, ['component', 'className']);

      var cssClasses = (0, _classnames2.default)('navbar', 'justify-content-between', 'flex-row', className, {
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
      var buttonClasses = (0, _classnames2.default)(buttonMenuRight, classNameButton, { 'navbar-toggler-icon p-3 my-auto': !classNameButton });

      var OffsetMenuAnimated = animationPush ? _jsx(_OffsetNavPush2.default, {
        active: this.state.show,
        'menu-right': menuRight,
        'animation-push': animationPush,
        id: 'offset-nav',
        dismiss: this.handleClick
      }, void 0, children) : _jsx(_OffsetNavSlide2.default, {
        active: this.state.show,
        'menu-right': menuRight,
        'animation-push': animationPush,
        dismiss: this.handleClick,
        id: 'offset-nav'
      }, void 0, children);

      return _jsx('div', {}, void 0, !noOverlay && _jsx(_Overlay2.default, {
        active: this.state.show,
        onClick: this.handleClick
      }), _react2.default.createElement(
        _Header2.default,
        _extends({ className: (0, _classnames2.default)(cssClasses) }, rest, { id: 'header-nav' }),
        _react2.default.createElement(ButtonToggle, _extends({ className: buttonClasses, onClick: this.handleClick }, restButton)),
        navTop && _jsx('div', {}, void 0, navTop)
      ), OffsetMenuAnimated);
    }
  }]);

  return HeaderNavBar;
}(_react2.default.Component);

HeaderNavBar.defaultProps = defaultProps;
exports.default = HeaderNavBar;