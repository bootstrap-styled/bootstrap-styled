'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Close = require('../Close');

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */
/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * MenuPush Component
 *
 *
 */


var defaultProps = { theme: _theme2.default };

var MenuPush = function (_React$Component) {
  _inherits(MenuPush, _React$Component);

  function MenuPush() {
    _classCallCheck(this, MenuPush);

    return _possibleConstructorReturn(this, (MenuPush.__proto__ || Object.getPrototypeOf(MenuPush)).apply(this, arguments));
  }

  _createClass(MenuPush, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          active = _props.active,
          menuRight = _props['menu-right'],
          menuLeft = _props['menu-left'],
          onClose = _props.onClose;

      return _jsx('div', {
        className: (0, _classnames2.default)('navbar-toggleable-xs hidden-sm-up', className, {
          'menu-right': menuRight,
          'menu-left': menuLeft,
          active: active
        })
      }, void 0, _jsx(_Close2.default, {
        onDismiss: onClose
      }), children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return MenuPush;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


MenuPush = (0, _styledComponents2.default)(MenuPush).withConfig({
  displayName: 'MenuPush__MenuPush',
  componentId: 'MenuPush__MenuPush-1icxcdf'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    top: 0;\n    width: ' + props.theme['$menu-push-width'] + ';\n    height: 100%;\n    background-color: white;\n    box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n    z-index: ' + props.theme['$zindex-menu-push'] + ';\n    \n    & .menu-offset {\n      .brand-inverse {\n        height: ' + props.theme['$navbar-height'] + ';\n        margin: 0 0 .75rem 0;\n        background-color: ' + props.theme['$brand-primary'] + ';\n        .nav-link {\n          color: white;\n        }\n      }\n      \n      .nav-item {\n        padding: .25rem 0;\n      }\n    }\n    & .close {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      opacity: 1;\n      color:white;\n      &:hover {\n        opacity: .5;\n      }\n    }\n  ';
});

MenuPush.defaultProps = defaultProps;

exports.default = MenuPush;