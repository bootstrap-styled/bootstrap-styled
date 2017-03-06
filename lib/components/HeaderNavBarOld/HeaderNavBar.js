'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compPush = exports.compSlide = exports.compCollapse = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _A = require('../A');

var _A2 = _interopRequireDefault(_A);

var _Nav = require('../Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _MenuCollapse = require('./MenuCollapse');

var _MenuCollapse2 = _interopRequireDefault(_MenuCollapse);

var _MenuSlide = require('./MenuSlide');

var _MenuSlide2 = _interopRequireDefault(_MenuSlide);

var _MenuPushMini = require('./MenuPushMini');

var _MenuPushMini2 = _interopRequireDefault(_MenuPushMini);

var _MenuPushSimple = require('./MenuPushSimple');

var _MenuPushSimple2 = _interopRequireDefault(_MenuPushSimple);

var _MenuAccount = require('./MenuAccount');

var _MenuAccount2 = _interopRequireDefault(_MenuAccount);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _ContainerFluid = require('../ContainerFluid');

var _ContainerFluid2 = _interopRequireDefault(_ContainerFluid);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _shapeMenuOffsetPush = require('./shapeMenuOffsetPush');

var _shapeMenuOffsetPush2 = _interopRequireDefault(_shapeMenuOffsetPush);

var _shapeMenuTopPush = require('./shapeMenuTopPush');

var _shapeMenuTopPush2 = _interopRequireDefault(_shapeMenuTopPush);

var _shapeMenuOffsetSlide = require('./shapeMenuOffsetSlide');

var _shapeMenuOffsetSlide2 = _interopRequireDefault(_shapeMenuOffsetSlide);

var _shapeMenuTopSlide = require('./shapeMenuTopSlide');

var _shapeMenuTopSlide2 = _interopRequireDefault(_shapeMenuTopSlide);

var _shapeMenuCollapsed = require('./shapeMenuCollapsed');

var _shapeMenuCollapsed2 = _interopRequireDefault(_shapeMenuCollapsed);

var _composeCollapse = require('./composeCollapse');

var _composeCollapse2 = _interopRequireDefault(_composeCollapse);

var _composeSlide = require('./composeSlide');

var _composeSlide2 = _interopRequireDefault(_composeSlide);

var _composePush = require('./composePush');

var _composePush2 = _interopRequireDefault(_composePush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Kopax Ltd Copyright (c) 2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * HeaderNavBar Component
 *
 *
 */


var compCollapse = exports.compCollapse = _composeCollapse2.default;
var compSlide = exports.compSlide = _composeSlide2.default;
var compPush = exports.compPush = _composePush2.default;

var defaultProps = {
  theme: _theme2.default,
  btnText: 'Bootstrap',
  container: false,
  'container-fluid': false,
  'navbar-inverse': false,
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
      _this.wrapper = _Container2.default;
    } else if (isContainerFluid) {
      _this.wrapper = _ContainerFluid2.default;
    }

    var isButton = _this.props.button;

    if (!isButton) {
      _this.button = _Button2.default;
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
          composeSlide = _props.composeSlide,
          theme = _props.theme;


      var classConfig = [];
      if (composeCollapsed) {
        classConfig.push('navbar-toggleable-md');
      }

      var cssClasses = (0, _classnames2.default)('navbar', 'bd-navbar', classConfig, className, {
        'navbar-inverse': this.props['navbar-inverse'],
        'bg-inverse': this.props['navbar-inverse'],
        'navbar-light': this.props['navbar-light'],
        'bg-faded': this.props['navbar-light'],
        'navbar-static-top': this.props['static-top'],
        'navbar-sticky-top': this.props['sticky-top'],
        'navbar-fixed-top': this.props['fixed-top'],
        'navbar-fixed-bottom': this.props['fixed-bottom']
      });

      var Wrapper = this.wrapper;
      var ButtonToggle = this.button;

      var containerCollapse = composeCollapsed ? _jsx(_Container2.default, {}, void 0, _jsx('div', {
        className: 'd-flex justify-content-between hidden-lg-up'
      }, void 0, _jsx(_A2.default, {
        className: 'navbar-brand',
        href: '/'
      }, void 0, composeCollapsed.brandTitle), _jsx(ButtonToggle, {
        className: 'navbar-toggler',
        type: 'button',
        onClick: composeCollapsed.onClick
      })), _jsx(_MenuCollapse2.default, {
        active: composeCollapsed.isCollapsed
      }, void 0, composeCollapsed.menuCollapsed.menu)) : null;

      var navTopPush = composePush ? _jsx('div', {
        className: 'nav-account-top'
      }, void 0, _jsx(ButtonToggle, {
        className: 'navbar-toggler navbar-toggler-icon hidden-md-up float-xs-left m-2 p-3',
        type: 'button',
        onClick: composePush.onClick
      }), _jsx(_MenuAccount2.default, {}, void 0, composePush.menuTop.menuAccount)) : null;

      var navTopSlide = composeSlide ? _jsx('div', {
        className: 'nav-account-top'
      }, void 0, _jsx(ButtonToggle, {
        className: 'navbar-toggler navbar-toggler-icon float-xs-left m-2 p-3',
        type: 'button',
        onClick: composeSlide.onClick
      }), _jsx(_MenuAccount2.default, {}, void 0, composeSlide.menuTop.menuAccount)) : null;

      var containerPushMini = composePush && composePush.isMini ? _jsx(_MenuPushMini2.default, {
        active: !composePush.isHidden,
        'menu-right': composePush.menuOffset.isRight,
        'menu-left': composePush.menuOffset.isLeft,
        onClick: composePush.onClick
      }, void 0, composePush.menuOffset.menu) : null;

      var containerPush = composePush && !composePush.isMini ? _jsx(_MenuPushSimple2.default, {
        active: !composePush.isHidden,
        'menu-right': composePush.menuOffset.isRight,
        'menu-left': composePush.menuOffset.isLeft,
        onClose: composePush.onClick
      }, void 0, composePush.menuOffset.menu) : null;

      var containerSlide = composeSlide ? _jsx(_MenuSlide2.default, {
        active: !composeSlide.isHidden,
        'menu-right': composeSlide.menuOffset.isRight,
        'menu-left': composeSlide.menuOffset.isLeft
      }, void 0, composeSlide.menuOffset.menu) : null;

      return _jsx('div', {}, void 0, _react2.default.createElement(
        _Header2.default,
        { className: cssClasses, ref: function ref(node) {
            _this2.node = node;
          } },
        _jsx(Wrapper, {}, void 0, _jsx(_Nav2.default, {
          className: 'nav'
        }, void 0, navTopPush, navTopSlide, containerCollapse))
      ), containerSlide, containerPushMini, containerPush);
    }
  }]);

  return HeaderNavBar;
}(_react2.default.Component);
// eslint-disable-next-line no-class-assign


HeaderNavBar = (0, _styledComponents2.default)(HeaderNavBar).withConfig({
  displayName: 'HeaderNavBar__HeaderNavBar',
  componentId: 'HeaderNavBar__HeaderNavBar-nkrpim'
})(['', ''], function (props) {
  return '\n    outline: ' + props.theme['$header-navbar-border-width'] + ' solid ' + props.theme['$header-navbar-border-color'] + ';\n    \n    &.navbar {\n      padding: 0;\n      .nav-account-top {\n        height: ' + props.theme['$navbar-height'] + ';\n      }\n    }\n  ';
});

HeaderNavBar.defaultProps = defaultProps;

exports.default = HeaderNavBar;