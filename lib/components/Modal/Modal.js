'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _transition = require('../../styled/mixins/transition');

var _borderRadius = require('../../styled/mixins/border-radius');

var _boxShadow = require('../../styled/mixins/box-shadow');

var _breakpoints = require('../../styled/mixins/breakpoints');

var _transition2 = require('../../styled/utilities/transition');

var _tools = require('utils/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */


var defaultProps = {
  isOpen: false,
  isLocked: false,
  backdrop: true,
  keyboard: true,
  zIndex: 1000
};

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.isTransitioning = false;

    _this.onEnter = function () {
      _this.isTransitioning = true;
      if (_this.props.isLocked && _this.props.onUnlock) {
        _this.props.onUnlock();
      }
      if (_this.props.onEnter) {
        _this.props.onEnter();
      }
    };

    _this.onExit = function () {
      _this.destroy();
      _this.isTransitioning = false;
      if (_this.props.isLocked && _this.props.onUnlock) {
        _this.props.onUnlock();
      }
      if (_this.props.onExit) {
        _this.props.onExit();
      }
    };

    _this.handleEscape = function (e) {
      if (_this.props.backdrop !== true) return;
      _this.isTransitioning = false;
      if (!_this.isTransitioning && _this.props.keyboard && e.keyCode === 27 && _this.props.onBackdrop) {
        _this.props.onBackdrop();
      }
    };

    _this.handleBackdropClick = function (e) {
      if (_this.props.backdrop !== true) return;
      _this.isTransitioning = false;
      if (!_this.isTransitioning && _this.props.backdrop && e.target && !_this._dialog.contains(e.target) && _this.props.onBackdrop) {
        _this.props.onBackdrop();
      }
    };

    _this.togglePortal = function () {
      if (_this.props.isOpen) {
        _this._focus = true;
        _this.show();
      } else {
        _this.hide();
      }
    };

    _this.destroy = function () {
      if (_this._element) {
        _reactDom2.default.unmountComponentAtNode(_this._element);
        document.body.removeChild(_this._element);
        _this._element = null;
      }

      var classes = document.body.className.replace('overflow', '');
      document.body.className = (0, _tools.mapToCssModules)((0, _classnames2.default)(classes).trim(), _this.props.cssModule);
      (0, _tools.setScrollbarWidth)(_this.originalBodyPadding);
    };

    _this.originalBodyPadding = null;
    _this.isBodyOverflowing = false;
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.togglePortal();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        // handle portal events/dom updates
        this.togglePortal();
      } else if (this._element) {
        // rerender portal
        this.renderIntoSubtree();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.onExit();
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.renderIntoSubtree();
    }
  }, {
    key: 'show',
    value: function show() {
      var classes = document.body.className;
      this._element = document.createElement('div');
      this._element.setAttribute('tabindex', '-1');
      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this.originalBodyPadding = (0, _tools.getOriginalBodyPadding)();

      (0, _tools.conditionallyUpdateScrollbar)();

      document.body.appendChild(this._element);
      document.body.className = (0, _tools.mapToCssModules)((0, _classnames2.default)(classes, 'overflow'), this.props.cssModule);

      this.renderIntoSubtree();
    }
  }, {
    key: 'renderIntoSubtree',
    value: function renderIntoSubtree() {
      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element);

      // check if modal should receive focus
      if (this._focus) {
        this._dialog.parentNode.focus();
        this._focus = false;
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _classNames,
          _this2 = this;

      var _omit = (0, _tools.omit)(this.props, ['isLocked', 'onUnlock', 'onBackdrop', 'keyboard', 'onEnter', 'onExit', 'zIndex']),
          className = _omit.className,
          wrapClassName = _omit.wrapClassName,
          modalClassName = _omit.modalClassName,
          backdropClassName = _omit.backdropClassName,
          contentClassName = _omit.contentClassName,
          cssModule = _omit.cssModule,
          isOpen = _omit.isOpen,
          size = _omit.size,
          backdrop = _omit.backdrop,
          children = _omit.children,
          attributes = _objectWithoutProperties(_omit, ['className', 'wrapClassName', 'modalClassName', 'backdropClassName', 'contentClassName', 'cssModule', 'isOpen', 'size', 'backdrop', 'children']);

      return _jsx(_reactAddonsTransitionGroup2.default, {
        component: 'div',
        className: (0, _tools.mapToCssModules)((0, _classnames2.default)(wrapClassName, className))
      }, void 0, isOpen && _jsx(_Fade2.default, {
        onEnter: this.onEnter,
        onLeave: this.onExit,
        transitionAppearTimeout: 300,
        transitionEnterTimeout: 300,
        transitionLeaveTimeout: 300,
        onClickCapture: this.handleBackdropClick,
        onKeyUp: this.handleEscape,
        className: (0, _tools.mapToCssModules)((0, _classnames2.default)('modal', modalClassName), cssModule),
        style: { display: 'block' },
        tabIndex: '-1'
      }, 'modal-dialog', _react2.default.createElement(
        'div',
        _extends({
          className: (0, _tools.mapToCssModules)((0, _classnames2.default)('modal-dialog', (_classNames = {}, _defineProperty(_classNames, 'modal-' + size, size), _defineProperty(_classNames, 'show', isOpen), _classNames))),
          role: 'document',
          ref: function ref(c) {
            return _this2._dialog = c;
          }
        }, attributes),
        _jsx('div', {
          className: (0, _tools.mapToCssModules)((0, _classnames2.default)('modal-content', contentClassName), cssModule)
        }, void 0, children)
      )), isOpen && backdrop && _jsx(_Fade2.default, {
        transitionAppearTimeout: 150,
        transitionEnterTimeout: 150,
        transitionLeaveTimeout: 150,
        className: (0, _tools.mapToCssModules)((0, _classnames2.default)('modal-backdrop', backdropClassName), cssModule)
      }, 'modal-backdrop'));
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Modal;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Modal = (0, _styledComponents2.default)(Modal).withConfig({
  displayName: 'Modal__Modal'
})(['', ''], function (props) {
  return '\n\n    & .modal {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-modal'] + ';\n      display: none;\n      outline: 0;\n      overflow-x: hidden;\n      overflow-y: auto;\n      \n      ' + (0, _transition2.fade)(props.theme['$enable-transitions'], props.theme['$transition-fade']) + '\n      &.fade {\n        .modal-dialog {\n          ' + (0, _transition.transition)(props.theme['$enable-transitions'], props.theme['$modal-transition']) + '\n          transform: translate(0, -25%);\n        }\n      }\n      &.show {\n        .modal-dialog {\n          transform: translate(0, 0);\n        }\n      }\n    }\n    \n    & .modal-dialog {\n      position: relative;\n      width: auto;\n      margin: ' + props.theme['$modal-dialog-margin'] + ';\n    }\n    \n    \n    & .modal-content {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + props.theme['$modal-content-bg'] + ';\n      background-clip: padding-box;\n      border: ' + props.theme['$modal-content-border-width'] + ' solid ' + props.theme['$modal-content-border-color'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius-lg']) + '\n      ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$modal-content-xs-box-shadow']) + '\n      outline: 0;\n    }\n    \n    & .modal-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-modal-backdrop'] + ';\n      background-color: ' + props.theme['$modal-backdrop-bg'] + ';\n      &.fade {\n        opacity: 0\n      }\n      &.show {\n        opacity: ' + props.theme['$modal-backdrop-opacity'] + ';\n      }\n    }\n      \n        \n    & .modal-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: ' + props.theme['$modal-header-padding'] + ';\n      border-bottom: ' + props.theme['$modal-header-border-width'] + ' solid ' + props.theme['$modal-header-border-color'] + ';\n    }\n    \n    & .modal-title {\n      margin-bottom: 0;\n      line-height: ' + props.theme['$modal-title-line-height'] + ';\n    }\n    \n    & .modal-body {\n      position: relative;\n      flex: 1 1 auto;\n      padding: ' + props.theme['$modal-inner-padding'] + ';\n    }\n    \n    & .modal-footer {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      padding: ' + props.theme['$modal-inner-padding'] + ';\n      border-top: ' + props.theme['$modal-footer-border-width'] + ' solid ' + props.theme['$modal-footer-border-color'] + ';\n      // Easily place margin between footer elements\n      > :not(:first-child) { margin-left: .25rem; }\n      > :not(:last-child) { margin-right: .25rem; }\n    }\n    \n\n  \n    // Scale up the modal\n    ' + (0, _breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], '\n        & .modal-dialog {\n          max-width: ' + props.theme['$modal-md'] + ';\n          margin: ' + props.theme['$modal-dialog-sm-up-margin-y'] + ' auto;\n        }\n      \n        & .modal-content {\n          ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$modal-content-sm-up-box-shadow']) + '\n        }\n      \n        & .modal-sm {\n          max-width: ' + props.theme['$modal-sm'] + ';\n        }\n      ') + '\n  \n\n    ' + (0, _breakpoints.mediaBreakpointUp)('lg', props.theme['$grid-breakpoints'], '\n        & .modal-lg {\n           max-width:  ' + props.theme['$modal-lg'] + '; \n         }\n      ') + '\n  ';
});

Modal.defaultProps = defaultProps;

exports.default = Modal;