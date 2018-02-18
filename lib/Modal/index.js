'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _tools = require('bootstrap-styled-utils/lib/tools');

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _transition = require('bootstrap-styled-mixins/lib/transition');

var _borderRadius = require('bootstrap-styled-mixins/lib/border-radius');

var _boxShadow = require('bootstrap-styled-mixins/lib/box-shadow');

var _breakpoints = require('bootstrap-styled-mixins/lib/breakpoints');

var _transition2 = require('bootstrap-styled-mixins/lib//utilities/transition');

var _reboot = require('bootstrap-styled-mixins/lib/utilities/reboot');

var _reboot2 = _interopRequireDefault(_reboot);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalUnstyled = function (_React$Component) {
  _inherits(ModalUnstyled, _React$Component);

  function ModalUnstyled(props) {
    _classCallCheck(this, ModalUnstyled);

    var _this = _possibleConstructorReturn(this, (ModalUnstyled.__proto__ || Object.getPrototypeOf(ModalUnstyled)).call(this, props));

    _this.onEnter = function () {
      if (_this.props.onEnter) {
        _this.props.onEnter();
      }
    };

    _this.onExit = function () {
      _this.destroy();
      if (_this.props.onExit) {
        _this.props.onExit();
      }
    };

    _this.handleEscape = function (e) {
      if (_this.props.keyboard && e.keyCode === 27 && _this.props.onBackdrop) {
        _this.props.onBackdrop();
      }
    };

    _this.handleBackdropClick = function (e) {
      if (_this.props.backdrop !== true) return;
      if (_this.props.backdrop && e.target && !_this._dialog.contains(e.target) && _this.props.onBackdrop) {
        // eslint-disable-line no-underscore-dangle
        _this.props.onBackdrop();
      }
    };

    _this.togglePortal = function () {
      if (_this.props.isOpen) {
        _this._focus = true; // eslint-disable-line no-underscore-dangle
        _this.show();
      } else {
        _this.hide();
      }
    };

    _this.destroy = function () {
      if (_this._element) {
        // eslint-disable-line no-underscore-dangle
        _reactDom2.default.unmountComponentAtNode(_this._element); // eslint-disable-line no-underscore-dangle
        document.body.removeChild(_this._element); // eslint-disable-line no-underscore-dangle
        _this._element = null; // eslint-disable-line no-underscore-dangle
      }

      var classes = document.body.className.replace('overflow', '');
      document.body.className = (0, _mapToCssModules2.default)((0, _classnames2.default)(classes).trim(), _this.props.cssModule);
      (0, _tools.setScrollbarWidth)(_this.originalBodyPadding);
    };

    _this.originalBodyPadding = null;
    return _this;
  }

  _createClass(ModalUnstyled, [{
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
        // eslint-disable-line no-underscore-dangle
        // rerender portal
        this.renderIntoSubtree();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroy();
      if (this.props.onExit) {
        this.props.onExit();
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.renderIntoSubtree();
    }
  }, {
    key: 'show',
    value: function show() {
      if (this._dialog) {
        // eslint-disable-line no-underscore-dangle
        this.props.onBackdrop(true);
        return;
      }
      var classes = document.body.className;
      this._element = document.createElement('div'); // eslint-disable-line no-underscore-dangle
      this._element.setAttribute('tabindex', '-1'); // eslint-disable-line no-underscore-dangle
      this._element.style.position = 'relative'; // eslint-disable-line no-underscore-dangle
      this._element.style.zIndex = this.props.zIndex; // eslint-disable-line no-underscore-dangle
      this.originalBodyPadding = (0, _tools.getOriginalBodyPadding)();

      (0, _tools.conditionallyUpdateScrollbar)();

      document.body.appendChild(this._element); // eslint-disable-line no-underscore-dangle
      document.body.className = (0, _mapToCssModules2.default)((0, _classnames2.default)(classes, 'overflow'), this.props.cssModule);

      this.renderIntoSubtree();
    }
  }, {
    key: 'renderIntoSubtree',
    value: function renderIntoSubtree() {
      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element // eslint-disable-line no-underscore-dangle
      );

      // check if modal should receive focus
      if (this._focus) {
        // eslint-disable-line no-underscore-dangle
        if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
          // eslint-disable-line no-underscore-dangle
          this._dialog.parentNode.focus(); // eslint-disable-line no-underscore-dangle
        }
        this._focus = false; // eslint-disable-line no-underscore-dangle
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _classNames,
          _this2 = this;

      var _omit = (0, _lodash2.default)(this.props, ['theme', 'onBackdrop', 'keyboard', 'onEnter', 'onExit', 'zIndex']),
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

      return _react2.default.createElement(
        _TransitionGroup2.default,
        { component: 'div', className: (0, _mapToCssModules2.default)((0, _classnames2.default)(wrapClassName, className)) },
        isOpen && _react2.default.createElement(
          _Fade2.default,
          {
            key: 'modal-dialog',
            onEnter: this.onEnter,
            onLeave: this.onExit,
            transitionAppearTimeout: 300,
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300,
            onClickCapture: this.handleBackdropClick,
            onKeyUp: this.handleEscape,
            className: (0, _mapToCssModules2.default)((0, _classnames2.default)('modal', modalClassName), cssModule),
            style: { display: 'block' },
            tabIndex: '-1'
          },
          _react2.default.createElement(
            'div',
            _extends({
              className: (0, _mapToCssModules2.default)((0, _classnames2.default)('modal-dialog', (_classNames = {}, _defineProperty(_classNames, 'modal-' + size, size), _defineProperty(_classNames, 'show', isOpen), _classNames))),
              role: 'document',
              ref: function ref(c) {
                return _this2._dialog = c;
              } // eslint-disable-line
            }, attributes),
            _react2.default.createElement(
              'div',
              { className: (0, _mapToCssModules2.default)((0, _classnames2.default)('modal-content', contentClassName), cssModule) },
              children
            )
          )
        ),
        isOpen && backdrop && _react2.default.createElement(_Fade2.default, {
          key: 'modal-backdrop',
          transitionAppearTimeout: 150,
          transitionEnterTimeout: 150,
          transitionLeaveTimeout: 150,
          className: (0, _mapToCssModules2.default)((0, _classnames2.default)('modal-backdrop', backdropClassName), cssModule)
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return ModalUnstyled;
}(_react2.default.Component);

ModalUnstyled.defaultProps = {
  isOpen: false,
  backdrop: true,
  keyboard: true,
  zIndex: 2000,
  theme: (0, _theme.makeTheme)()
};
ModalUnstyled.propTypes = {
  theme: _propTypes2.default.object,
  /* eslint-disable react/no-unused-prop-types */
  size: _propTypes2.default.string,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  wrapClassName: _propTypes2.default.string,
  modalClassName: _propTypes2.default.string,
  backdropClassName: _propTypes2.default.string,
  contentClassName: _propTypes2.default.string,
  /* eslint-enable react/no-unused-prop-types */
  isOpen: _propTypes2.default.bool,
  onBackdrop: _propTypes2.default.func,
  keyboard: _propTypes2.default.bool,
  backdrop: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['static'])]),
  onEnter: _propTypes2.default.func,
  onExit: _propTypes2.default.func,
  cssModule: _propTypes2.default.object,
  zIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};


var Modal = /*#__PURE__*/(0, _styledComponents2.default)(ModalUnstyled).withConfig({
  displayName: 'Modal'
})(['', ''], function (props) {
  return '\n    ' + _reboot2.default.body(props.theme['$font-family-base'], props.theme['$font-size-base'], props.theme['$font-weight-base'], props.theme['$line-height-base'], props.theme['$body-color'], props.theme['$body-bg']) + '\n    & .modal {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-modal'] + ';\n      display: none;\n      outline: 0;\n      overflow-x: hidden;\n      overflow-y: auto;\n      \n      ' + (0, _transition2.fade)(props.theme['$enable-transitions'], props.theme['$transition-fade']) + '\n      &.fade {\n        .modal-dialog {\n          ' + (0, _transition.transition)(props.theme['$enable-transitions'], props.theme['$modal-transition']) + '\n          transform: translate(0, -25%);\n        }\n      }\n      &.show {\n        .modal-dialog {\n          transform: translate(0, 0);\n        }\n      }\n    }\n    \n    & .modal-dialog {\n      position: relative;\n      width: auto;\n      margin: ' + props.theme['$modal-dialog-margin'] + ';\n    }\n    \n    \n    & .modal-content {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + props.theme['$modal-content-bg'] + ';\n      background-clip: padding-box;\n      border: ' + props.theme['$modal-content-border-width'] + ' solid ' + props.theme['$modal-content-border-color'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius-lg']) + '\n      ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$modal-content-xs-box-shadow']) + '\n      outline: 0;\n    }\n    \n    & .modal-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-modal-backdrop'] + ';\n      background-color: ' + props.theme['$modal-backdrop-bg'] + ';\n      &.fade {\n        opacity: 0\n      }\n      &.show {\n        opacity: ' + props.theme['$modal-backdrop-opacity'] + ';\n      }\n    }\n      \n        \n    & .modal-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: ' + props.theme['$modal-header-padding'] + ';\n      border-bottom: ' + props.theme['$modal-header-border-width'] + ' solid ' + props.theme['$modal-header-border-color'] + ';\n    }\n    \n    & .modal-title {\n      margin-bottom: 0;\n      line-height: ' + props.theme['$modal-title-line-height'] + ';\n    }\n    \n    & .modal-body {\n      position: relative;\n      flex: 1 1 auto;\n      padding: ' + props.theme['$modal-inner-padding'] + ';\n    }\n    \n    & .modal-footer {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      padding: ' + props.theme['$modal-inner-padding'] + ';\n      border-top: ' + props.theme['$modal-footer-border-width'] + ' solid ' + props.theme['$modal-footer-border-color'] + ';\n      // Easily place margin between footer elements\n      > :not(:first-child) { margin-left: .25rem; }\n      > :not(:last-child) { margin-right: .25rem; }\n    }\n    \n\n  \n    // Scale up the modal\n    ' + (0, _breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], '\n        & .modal-dialog {\n          max-width: ' + props.theme['$modal-md'] + ';\n          margin: ' + props.theme['$modal-dialog-sm-up-margin-y'] + ' auto;\n        }\n      \n        & .modal-content {\n          ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$modal-content-sm-up-box-shadow']) + '\n        }\n      \n        & .modal-sm {\n          max-width: ' + props.theme['$modal-sm'] + ';\n        }\n      ') + '\n  \n\n    ' + (0, _breakpoints.mediaBreakpointUp)('lg', props.theme['$grid-breakpoints'], '\n        & .modal-lg {\n           max-width:  ' + props.theme['$modal-lg'] + '; \n         }\n      ') + '\n  ';
});

/** @component */
exports.default = Modal;
module.exports = exports['default'];