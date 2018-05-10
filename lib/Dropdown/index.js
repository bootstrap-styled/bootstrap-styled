'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _borderRadius = require('bootstrap-styled-mixins/lib/border-radius');

var _boxShadow = require('bootstrap-styled-mixins/lib/box-shadow');

var _navDivider = require('bootstrap-styled-mixins/lib/nav-divider');

var _hover = require('bootstrap-styled-mixins/lib/hover');

var _buttonGroup = require('bootstrap-styled-mixins/lib/buttonGroup');

var _conditional = require('bootstrap-styled-mixins/lib/conditional');

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _TetherContent = require('../TetherContent');

var _TetherContent2 = _interopRequireDefault(_TetherContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Dropdown
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultTetherConfig = {
  classes: { element: 'dropdown', enabled: 'show' },
  classPrefix: 'bs-tether',
  constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};

var defaultProps = exports.defaultProps = {
  isOpen: false,
  tag: 'div',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-gradients': false,
    '$enable-hover-media-query': false,
    '$spacer-y': '1rem',
    '$border-width': '1px',
    '$font-size-sm': '.875rem',
    '$font-weight-normal': 'normal',
    '$font-size-base': '1rem',
    '$font-size-lg': '1.25rem',
    '$zindex-dropdown-backdrop': '990',
    '$zindex-dropdown': '1000',
    '$component-active-color': '#fff',
    '$component-active-bg': '#0275d8',
    '$caret-width': '.3em',
    '$line-height-lg': '1.6',
    '$border-radius-lg': '.3rem',
    '$border-radius-sm': '.2rem',
    '$input-padding-y-lg': '.75rem',
    '$dropdown-min-width': '10rem',
    '$dropdown-padding-y': '.5rem',
    '$dropdown-margin-top': '.125rem',
    '$dropdown-bg': '#fff',
    '$dropdown-border-color': 'rgba(0, 0, 0, 0.15)',
    '$dropdown-border-width': '1px',
    '$dropdown-divider-bg': '#eceeef',
    '$dropdown-box-shadow': '0 .5rem 1rem rgba(#000,.175)',
    '$dropdown-link-color': '#292b2c',
    '$dropdown-link-hover-color': 'hsl(200, 3.5%, 15.8%)',
    '$dropdown-link-hover-bg': '#f7f7f9',
    '$dropdown-link-active-color': 'hsl(200, 3.5%, 15.8%)',
    '$dropdown-link-active-bg': '#fff',
    '$dropdown-link-disabled-color': '#636c72',
    '$dropdown-item-padding-x': '1.5rem',
    '$dropdown-header-color': '#636c72',
    '$input-btn-border-width': '1px', // For form controls and buttons
    '$cursor-disabled': 'not-allowed',
    '$btn-padding-x': '1rem',
    '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-border-radius-lg': '.3rem',
    '$btn-border-radius-sm': '.2rem',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$input-height-lg': '3.5rem'
  }
};
var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: _propTypes2.default.node,
  /** Toggles disabled CSS style. */
  disabled: _propTypes2.default.bool,
  /** Toggles dropdown direction. */
  dropup: _propTypes2.default.bool,
  /** Toggles group CSS style. */
  group: _propTypes2.default.bool,
  /** Toggles dropdown visibility. */
  isOpen: _propTypes2.default.bool,
  /** Size variables. Can be small or large: */
  size: _propTypes2.default.oneOf(['sm', 'lg', '']),
  /** Tether position value. Can be: */
  tether: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  /** Call specified function when on toggle action is triggered. */
  toggle: _propTypes2.default.func,
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$enable-rounded': _propTypes2.default.bool,
    '$enable-shadows': _propTypes2.default.bool,
    '$enable-gradients': _propTypes2.default.bool,
    '$enable-hover-media-query': _propTypes2.default.bool,
    '$spacer-y': _propTypes2.default.string,
    '$border-width': _propTypes2.default.string,
    '$font-size-sm': _propTypes2.default.string,
    '$font-weight-normal': _propTypes2.default.string,
    '$font-size-base': _propTypes2.default.string,
    '$font-size-lg': _propTypes2.default.string,
    '$zindex-dropdown-backdrop': _propTypes2.default.string,
    '$zindex-dropdown': _propTypes2.default.string,
    '$component-active-color': _propTypes2.default.string,
    '$component-active-bg': _propTypes2.default.string,
    '$caret-width': _propTypes2.default.string,
    '$line-height-lg': _propTypes2.default.string,
    '$border-radius-lg': _propTypes2.default.string,
    '$border-radius-sm': _propTypes2.default.string,
    '$input-padding-y-lg': _propTypes2.default.string,
    '$dropdown-min-width': _propTypes2.default.string,
    '$dropdown-padding-y': _propTypes2.default.string,
    '$dropdown-margin-top': _propTypes2.default.string,
    '$dropdown-bg': _propTypes2.default.string,
    '$dropdown-border-color': _propTypes2.default.string,
    '$dropdown-border-width': _propTypes2.default.string,
    '$dropdown-divider-bg': _propTypes2.default.string,
    '$dropdown-box-shadow': _propTypes2.default.string,
    '$dropdown-link-color': _propTypes2.default.string,
    '$dropdown-link-hover-color': _propTypes2.default.string,
    '$dropdown-link-hover-bg': _propTypes2.default.string,
    '$dropdown-link-active-color': _propTypes2.default.string,
    '$dropdown-link-active-bg': _propTypes2.default.string,
    '$dropdown-link-disabled-color': _propTypes2.default.string,
    '$dropdown-item-padding-x': _propTypes2.default.string,
    '$dropdown-header-color': _propTypes2.default.string,
    '$input-btn-border-width': _propTypes2.default.string, // For form controls and buttons
    '$cursor-disabled': _propTypes2.default.string,
    '$btn-padding-x': _propTypes2.default.string,
    '$btn-active-box-shadow': _propTypes2.default.string,
    '$btn-padding-x-lg': _propTypes2.default.string,
    '$btn-padding-y-lg': _propTypes2.default.string,
    '$btn-border-radius-lg': _propTypes2.default.string,
    '$btn-border-radius-sm': _propTypes2.default.string,
    '$btn-padding-x-sm': _propTypes2.default.string,
    '$btn-padding-y-sm': _propTypes2.default.string,
    '$input-height-lg': _propTypes2.default.string
  }),
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var DropdownUnstyled = function (_React$Component) {
  _inherits(DropdownUnstyled, _React$Component);

  function DropdownUnstyled() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropdownUnstyled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownUnstyled.__proto__ || Object.getPrototypeOf(DropdownUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.getTetherConfig = function (childProps) {
      var target = function target() {
        return _this.getTetherTarget();
      };
      var vElementAttach = 'top';
      var hElementAttach = 'left';
      var vTargetAttach = 'bottom';
      var hTargetAttach = 'left';

      if (childProps.right) {
        hElementAttach = 'right';
        hTargetAttach = 'right';
      }

      if (_this.props.dropup) {
        vElementAttach = 'bottom';
        vTargetAttach = 'top';
      }

      return _extends({}, defaultTetherConfig, {
        attachment: vElementAttach + ' ' + hElementAttach, // eslint-disable-line prefer-template
        targetAttachment: vTargetAttach + ' ' + hTargetAttach, // eslint-disable-line prefer-template
        target: target
      }, _this.props.tether);
    }, _this.addEvents = function () {
      document.addEventListener('click', _this.handleDocumentClick, true);
    }, _this.removeEvents = function () {
      document.removeEventListener('click', _this.handleDocumentClick, true);
    }, _this.handleDocumentClick = function (e) {
      var container = _reactDom2.default.findDOMNode(_this); // eslint-disable-line react/no-find-dom-node

      if (container.contains(e.target) && container !== e.target) {
        return;
      }

      _this.toggle();
    }, _this.toggle = function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }

      return _this.props.toggle();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */

  /* eslint-enable react/no-unused-prop-types */

  _createClass(DropdownUnstyled, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isOpen: this.props.isOpen,
        toggle: this.props.toggle
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: 'getTetherTarget',
    value: function getTetherTarget() {
      var container = _reactDom2.default.findDOMNode(this); // eslint-disable-line react/no-find-dom-node

      return container.querySelector('[data-toggle="dropdown"]');
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.tether) {
        return;
      }

      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      var _props = this.props,
          tether = _props.tether,
          children = _props.children,
          attrs = _objectWithoutProperties(_props, ['tether', 'children']);

      attrs.toggle = this.toggle;

      return _react2.default.Children.map(_react2.default.Children.toArray(children), function (child) {
        if (tether && child.type === _DropdownMenu2.default) {
          var tetherConfig = _this2.getTetherConfig(child.props);
          return _react2.default.createElement(
            _TetherContent2.default,
            _extends({}, attrs, { tether: tetherConfig }),
            child
          );
        }

        return child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _cn;

      var _omit = (0, _lodash2.default)(this.props, ['toggle', 'tether', 'theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          Tag = _omit.tag,
          isOpen = _omit.isOpen,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'group', 'size', 'tag', 'isOpen']);

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, (_cn = {
        'btn-group': group
      }, _defineProperty(_cn, 'btn-group-' + size, !!size), _defineProperty(_cn, 'dropdown', !group), _defineProperty(_cn, 'show', isOpen), _defineProperty(_cn, 'dropup', dropup), _cn)), cssModule);

      return _react2.default.createElement(
        Tag,
        _extends({}, attributes, {
          className: classes
        }),
        this.renderChildren()
      );
    }
  }]);

  return DropdownUnstyled;
}(_react2.default.Component);
/**
 * Use our `<Dropdown />` blocks with dismissing menu.
 * Customize it with `<DropdownToggle />` with `caret` attribute for display icon and `<DropdownItem />` with `header`, `disabled` and `divider` attributes for customize menu.
 */


DropdownUnstyled.defaultProps = defaultProps;
DropdownUnstyled.propTypes = propTypes;
DropdownUnstyled.childContextTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  toggle: _propTypes2.default.func.isRequired
};
var Dropdown = (0, _styledComponents2.default)(DropdownUnstyled).withConfig({
  displayName: 'Dropdown'
})(['', ''], function (props) {
  return '\n    &.dropup,\n    &.dropdown {\n      position: relative;\n    }\n\n    & .dropdown-hide {\n      display: none;\n    }\n    \n    & .dropdown-toggle {\n      /* Generate the caret automatically */\n      &::after {\n        display: inline-block;\n        width: 0;\n        height: 0;\n        margin-left: ' + props.theme['$caret-width'] + ';\n        vertical-align: middle;\n        content: \'\';\n        border-top: ' + props.theme['$caret-width'] + ' solid;\n        border-right: ' + props.theme['$caret-width'] + ' solid transparent;\n        border-left: ' + props.theme['$caret-width'] + ' solid transparent;\n      }\n\n      /* Prevent the focus on the dropdown toggle when closing dropdowns */\n      &:focus {\n        outline: 0;\n      }\n    }\n\n    &.dropup {\n      .dropdown-toggle {\n        &::after {\n          border-top: 0;\n          border-bottom: ' + props.theme['$caret-width'] + ' solid;\n        }\n      }\n    }\n\n    & .dropdown-menu {\n      clear: left;\n      position: absolute;\n      top: 100%;\n      left: 0;\n      z-index: ' + props.theme['$zindex-dropdown'] + ';\n      display: none; // none by default, but block on "open" of the menu\n      float: left;\n      min-width: ' + props.theme['$dropdown-min-width'] + ';\n      padding: ' + props.theme['$dropdown-padding-y'] + ' 0;\n      margin: ' + props.theme['$dropdown-margin-top'] + ' 0; /* override default ul */\n      font-size: ' + props.theme['$font-size-base'] + ';\n      color: ' + props.theme['$body-color'] + ';\n      text-align: left; /* Ensures proper alignment if parent has it changed (e.g., modal footer) */\n      list-style: none;\n      background-color: ' + props.theme['$dropdown-bg'] + ';\n      background-clip: padding-box;\n      border: ' + props.theme['$dropdown-border-width'] + ' solid ' + props.theme['$dropdown-border-color'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n      ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$dropdown-box-shadow']) + '\n    }\n\n    /* mixin from bootstrap 4, see : scss/mixins/_nav-divider.css */\n    & .dropdown-divider {\n      ' + (0, _navDivider.navDivider)(props.theme['$spacer-y'], props.theme['$dropdown-divider-bg']) + '\n    }\n\n    & .dropdown-item {\n      display: block;\n      width: 100%; /* For <button>s */\n      padding: 3px ' + props.theme['$dropdown-item-padding-x'] + ';\n      clear: both;\n      font-weight: ' + props.theme['$font-weight-normal'] + ';\n      color: ' + props.theme['$dropdown-link-color'] + ';\n      text-align: inherit; /* For <button>s */\n      white-space: nowrap; /* prevent links from randomly breaking onto new lines */\n      background: none; /* For <button>s */\n      border: 0; /* For <button>s */\n\n      ' + (0, _hover.hoverFocus)(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$dropdown-link-hover-color'] + ';\n        text-decoration: none;\n        background-color: ' + props.theme['$dropdown-link-hover-bg'] + '\n      ') + '\n\n      &.active,\n      &:active {\n        color: ' + props.theme['$dropdown-link-active-color'] + ';\n        text-decoration: none;\n        background-color: ' + props.theme['$dropdown-link-active-bg'] + '\n      }\n\n      &.disabled,\n      &:disabled{\n        color: ' + props.theme['$dropdown-link-disabled-color'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n        background-color: transparent;\n        ' + (0, _conditional.ifThen)(props.theme['$enable-gradients'], 'background-image: none; /* Remove CSS gradient */') + '\n      }\n    }\n\n    &.show {\n      /* show the menu */\n      &>.dropdown-menu {\n        display: block;\n      }\n\n      & > a {\n        outline: 0;\n      }\n    }\n\n\n    /* Menu positioning */\n\n    /* Add extra class to .dropdown-menu to flip the alignment of the dropdown*\n    /* menu with the parent. */\n    & .dropdown-menu-right {\n      right: 0;\n      left: auto; /* Reset the default from .dropdown-menu */\n    }\n\n    & .dropdown-menu-left {\n      right: auto;\n      left: 0;\n    }\n\n    /* Dropdown section headers */\n    & .dropdown-header {\n      display: block;\n      padding: ' + props.theme['$dropdown-padding-y'] + ' ' + props.theme['$dropdown-item-padding-x'] + ';\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      color: ' + props.theme['$dropdown-header-color'] + ';\n      white-space: nowrap; /* as with > li > a */\n    }\n    /* Dropdown section footers */\n    & .dropdown-footer {\n      display: block;\n      padding: ' + props.theme['$dropdown-padding-y'] + ' ' + props.theme['$dropdown-item-padding-x'] + ';\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      color: ' + props.theme['$dropdown-header-color'] + ';\n      white-space: nowrap; /* as with > li > a */\n    }\n    \n\n    /* Backdrop to catch body clicks on mobile, etc. */\n    & .dropdown-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-dropdown-backdrop'] + ';\n    }\n\n    /* Allow for dropdowns to go bottom up (aka, dropup-menu) */\n\n    /* Just add .dropup after the standard .dropdown class and you\'re set. */\n    /* TODO: abstract this so that the navbar fixed styles are not placed here? */\n\n    &.dropup {\n      .dropdown-menu {\n        top: auto;\n        bottom: 100%;\n        margin-bottom: ' + props.theme['$dropdown-margin-top'] + ';\n      }\n    }\n        \n    /* Added Mixin boutonGroup to enable dropdown to beneficiate from buttonGroup classes */\n    ' + (0, _buttonGroup.buttonGroup)(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']) + '\n  ';
});

Dropdown.defaultProps = defaultProps;
Dropdown.propTypes = propTypes;

/** @component */
exports.default = Dropdown;