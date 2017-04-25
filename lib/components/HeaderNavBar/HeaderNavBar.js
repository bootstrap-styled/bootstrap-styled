'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _findDOMNode = require('react-dom/lib/findDOMNode');

var _findDOMNode2 = _interopRequireDefault(_findDOMNode);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _tools = require('utils/tools');

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _OffsetNavPush = require('./OffsetNavPush');

var _OffsetNavPush2 = _interopRequireDefault(_OffsetNavPush);

var _OffsetNavSlide = require('./OffsetNavSlide');

var _OffsetNavSlide2 = _interopRequireDefault(_OffsetNavSlide);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import styled from 'styled-components';


var defaultProps = {
  button: {
    component: 'div'
  },
  show: false,
  theme: _theme2.default,
  noOverlay: false,
  belowNav: false,
  menuClose: false
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderNavBar, [{
    key: 'componentDidMount',
    // eslint-disable-line react/prefer-stateless-function

    value: function componentDidMount() {
      var componentAsANodeReact = (0, _findDOMNode2.default)(this);
      var node = componentAsANodeReact.querySelector('.navbar.justify-content-between');
      var nodeHeight = node.clientHeight;
      var offsetNav = componentAsANodeReact.querySelector('.offset-nav-margin-top');
      this.props.belowHeader ? offsetNav.style.marginTop = nodeHeight + 'px' : null; // eslint-disable-line no-unused-expressions
    }
  }, {
    key: 'render',
    value: function render() {
      var _cn,
          _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          theme = _props.theme,
          button = _props.button,
          noOverlay = _props.noOverlay,
          menuClose = _props.menuClose,
          offsetNavWidth = _props.offsetNavWidth,
          belowHeader = _props.belowHeader,
          navTop = _props['nav-top'],
          menuRight = _props['menu-right'],
          animationPush = _props['animation-push'],
          cssModule = _props.cssModule,
          light = _props.light,
          inverse = _props.inverse,
          full = _props.full,
          fixed = _props.fixed,
          sticky = _props.sticky,
          color = _props.color,
          restTmp = _objectWithoutProperties(_props, ['className', 'children', 'theme', 'button', 'noOverlay', 'menuClose', 'offsetNavWidth', 'belowHeader', 'nav-top', 'menu-right', 'animation-push', 'cssModule', 'light', 'inverse', 'full', 'fixed', 'sticky', 'color']);

      var unused = restTmp.onClick,
          rest = _objectWithoutProperties(restTmp, ['onClick']); // eslint-disable-line no-unused-vars


      var ButtonToggle = button.component,
          classNameButton = button.className,
          restButton = _objectWithoutProperties(button, ['component', 'className']);

      var cssClasses = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, 'navbar', 'justify-content-between', 'flex-row', (_cn = {
        'navbar-light': light,
        'navbar-inverse': inverse
      }, _defineProperty(_cn, 'bg-' + color, color), _defineProperty(_cn, 'navbar-full', full), _defineProperty(_cn, 'fixed-' + fixed, fixed), _defineProperty(_cn, 'sticky-' + sticky, sticky), _cn)), cssModule);

      var buttonMenuRight = menuRight ? 'flex-last' : '';
      var buttonClasses = (0, _classnames2.default)(buttonMenuRight, classNameButton, { 'navbar-toggler-icon p-3 my-auto': !classNameButton });

      var OffsetMenuAnimated = animationPush ? _jsx(_OffsetNavPush2.default, {
        className: 'offset-nav-margin-top',
        active: this.state.show,
        elementWidth: offsetNavWidth,
        'menu-right': menuRight,
        'animation-push': animationPush,
        menuClose: menuClose,
        dismiss: this.handleClick
      }, void 0, children) : _jsx(_OffsetNavSlide2.default, {
        className: 'offset-nav-margin-top',
        active: this.state.show,
        elementWidth: offsetNavWidth,
        'menu-right': menuRight,
        'animation-push': animationPush,
        menuClose: menuClose,
        dismiss: this.handleClick
      }, void 0, children);

      return _jsx('div', {}, void 0, !noOverlay && _jsx(_Overlay2.default, {
        active: this.state.show,
        onClick: this.handleClick
      }), _react2.default.createElement(
        _Header2.default,
        _extends({ className: (0, _classnames2.default)(cssClasses) }, rest, { innerRef: function innerRef(header) {
            _this2.header = header;
          } }),
        _react2.default.createElement(ButtonToggle, _extends({ className: buttonClasses, onClick: this.handleClick }, restButton)),
        navTop && _jsx('div', {}, void 0, navTop)
      ), OffsetMenuAnimated);
    }
  }]);

  return HeaderNavBar;
}(_react2.default.Component);

HeaderNavBar.defaultProps = defaultProps;
exports.default = HeaderNavBar;