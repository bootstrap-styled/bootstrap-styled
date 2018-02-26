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

var _reactPortal = require('react-portal');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-underscore-dangle: 0 */


function noop() {}

var FadePropTypes = _propTypes2.default.shape(_Fade2.default.propTypes);

var propTypes = {
  theme: _propTypes2.default.object,
  isOpen: _propTypes2.default.bool,
  autoFocus: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  toggle: _propTypes2.default.func,
  keyboard: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  labelledBy: _propTypes2.default.string,
  backdrop: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['static'])]),
  onEnter: _propTypes2.default.func,
  onExit: _propTypes2.default.func,
  onOpened: _propTypes2.default.func,
  onClosed: _propTypes2.default.func,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  documentClassName: _propTypes2.default.string,
  modalClassName: _propTypes2.default.string,
  backdropClassName: _propTypes2.default.string,
  contentClassName: _propTypes2.default.string,
  fade: _propTypes2.default.bool,
  cssModule: _propTypes2.default.object,
  zIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes
};

var defaultProps = {
  isOpen: false,
  autoFocus: true,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 2000,
  theme: (0, _theme.makeTheme)(),
  fade: true,
  onOpened: noop,
  onClosed: noop,
  modalTransition: {
    timeout: 300
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: 150 // uses standard fade transition
  }
};

var ModalUnstyled = function (_React$Component) {
  _inherits(ModalUnstyled, _React$Component);

  /* eslint-enable react/no-unused-prop-types */

  function ModalUnstyled(props) {
    _classCallCheck(this, ModalUnstyled);

    var _this = _possibleConstructorReturn(this, (ModalUnstyled.__proto__ || Object.getPrototypeOf(ModalUnstyled)).call(this, props));

    _this.onOpened = function (node, isAppearing) {
      _this.props.onOpened();
      (_this.props.modalTransition.onEntered || noop)(node, isAppearing);
    };

    _this.onClosed = function (node) {
      // so all methods get called before it is unmounted
      _this.props.onClosed();
      (_this.props.modalTransition.onExited || noop)(node);
      _this.destroy();

      if (_this._isMounted) {
        _this.setState({ isOpen: false });
      }
    };

    _this.handleBackdropClick = function (e) {
      e.stopPropagation();
      if (!_this.props.isOpen || _this.props.backdrop !== true) return;

      var container = _this._dialog;

      if (e.target && !container.contains(e.target) && _this.props.toggle) {
        _this.props.toggle();
      }
    };

    _this.handleEscape = function (e) {
      if (_this.props.isOpen && _this.props.keyboard && e.keyCode === 27 && _this.props.toggle) {
        _this.props.toggle();
      }
    };

    _this.destroy = function () {
      document.body.removeChild(_this._element);
      _this._element = null;

      // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
      var classes = document.body.className.replace(/(^| )overflow( |$)/, ' ');
      document.body.className = (0, _mapToCssModules2.default)((0, _classnames2.default)(classes).trim(), _this.props.cssModule);
      (0, _tools.setScrollbarWidth)(_this.originalBodyPadding);
    };

    _this.originalBodyPadding = null;

    _this.state = {
      isOpen: props.isOpen
    };

    if (props.isOpen) {
      _this.init();
    }
    return _this;
  }
  /* eslint-disable react/no-unused-prop-types */


  _createClass(ModalUnstyled, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.onEnter) {
        this.props.onEnter();
      }

      if (this.state.isOpen && this.props.autoFocus) {
        this.setFocus();
      }

      this._isMounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen && !this.props.isOpen) {
        this.setState({ isOpen: nextProps.isOpen });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.isOpen && !this.state.isOpen) {
        this.init();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
        this.setFocus();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onExit) {
        this.props.onExit();
      }
      if (this.state.isOpen) {
        this.destroy();
      }
      this._isMounted = false;
    }
  }, {
    key: 'setFocus',
    value: function setFocus() {
      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
        this._dialog.parentNode.focus();
      }
    }
  }, {
    key: 'init',
    value: function init() {
      var classes = document.body.className;
      this._element = document.createElement('div');
      this._element.setAttribute('tabindex', '-1');
      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this.originalBodyPadding = (0, _tools.getOriginalBodyPadding)();

      (0, _tools.conditionallyUpdateScrollbar)();

      document.body.appendChild(this._element);

      document.body.className = (0, _mapToCssModules2.default)((0, _classnames2.default)(classes, 'overflow'), this.props.cssModule);
    }
  }, {
    key: 'renderModalDialog',
    value: function renderModalDialog() {
      var _this2 = this;

      var attributes = (0, _lodash2.default)(this.props, ['theme', 'isOpen', 'autoFocus', 'size', 'toggle', 'keyboard', 'role', 'labelledBy', 'backdrop', 'onEnter', 'onExit', 'onOpened', 'onClosed', 'children', 'className', 'documentClassName', 'modalClassName', 'backdropClassName', 'contentClassName', 'fade', 'cssModule', 'zIndex', 'backdropTransition', 'modalTransition']);

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _mapToCssModules2.default)((0, _classnames2.default)('modal-dialog', this.props.documentClassName, _defineProperty({}, 'modal-' + this.props.size, this.props.size)), this.props.cssModule),
          role: 'document',
          ref: function ref(c) {
            _this2._dialog = c;
          }
        }, attributes),
        _react2.default.createElement(
          'div',
          {
            className: (0, _mapToCssModules2.default)((0, _classnames2.default)('modal-content', this.props.contentClassName), this.props.cssModule)
          },
          this.props.children
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isOpen) {
        var _props = this.props,
            modalClassName = _props.modalClassName,
            backdropClassName = _props.backdropClassName,
            cssModule = _props.cssModule,
            isOpen = _props.isOpen,
            backdrop = _props.backdrop,
            role = _props.role,
            labelledBy = _props.labelledBy;


        var modalAttributes = {
          onClick: this.handleBackdropClick,
          onKeyUp: this.handleEscape,
          style: { display: 'block' },
          'aria-labelledby': labelledBy,
          role: role,
          tabIndex: '-1'
        };

        var hasTransition = this.props.fade;
        var modalTransition = _extends({}, _Fade2.default.defaultProps, this.props.modalTransition, {
          baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
          timeout: hasTransition ? this.props.modalTransition.timeout : 0
        });
        var backdropTransition = _extends({}, _Fade2.default.defaultProps, this.props.backdropTransition, {
          baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
        });

        return _react2.default.createElement(
          _reactPortal.Portal,
          { node: this._element },
          _react2.default.createElement(
            'div',
            { className: (0, _mapToCssModules2.default)(this.props.className) },
            _react2.default.createElement(
              _Fade2.default,
              _extends({}, modalAttributes, modalTransition, {
                'in': isOpen,
                onEntered: this.onOpened,
                onExited: this.onClosed,
                cssModule: cssModule,
                className: (0, _mapToCssModules2.default)((0, _classnames2.default)('modal', modalClassName), cssModule)
              }),
              this.renderModalDialog()
            ),
            _react2.default.createElement(_Fade2.default, _extends({}, backdropTransition, {
              'in': isOpen && !!backdrop,
              cssModule: cssModule,
              className: (0, _mapToCssModules2.default)((0, _classnames2.default)('modal-backdrop', backdropClassName), cssModule)
            }))
          )
        );
      }

      return null;
    }
  }]);

  return ModalUnstyled;
}(_react2.default.Component);
/**
 * Modal element
 */


ModalUnstyled.defaultProps = defaultProps;
ModalUnstyled.propTypes = propTypes;
var Modal = (0, _styledComponents2.default)(ModalUnstyled).withConfig({
  displayName: 'Modal'
})(['', ''], function (props) {
  return '\n    & .modal {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-modal'] + ';\n      display: none;\n      outline: 0;\n      overflow-x: hidden;\n      overflow-y: auto;\n      \n      ' + (0, _transition2.fade)(props.theme['$enable-transitions'], props.theme['$transition-fade']) + '\n      &.fade {\n        .modal-dialog {\n          ' + (0, _transition.transition)(props.theme['$enable-transitions'], props.theme['$modal-transition']) + '\n          transform: translate(0, -25%);\n        }\n      }\n      &.show {\n        .modal-dialog {\n          transform: translate(0, 0);\n        }\n      }\n    }\n    \n    & .modal-dialog {\n      position: relative;\n      width: auto;\n      margin: ' + props.theme['$modal-dialog-margin'] + ';\n      ' + _reboot2.default.body(props.theme['$font-family-base'], props.theme['$font-size-base'], props.theme['$font-weight-base'], props.theme['$line-height-base'], props.theme['$body-color'], props.theme['$body-bg']) + '\n    }\n    \n    \n    & .modal-content {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + props.theme['$modal-content-bg'] + ';\n      background-clip: padding-box;\n      border: ' + props.theme['$modal-content-border-width'] + ' solid ' + props.theme['$modal-content-border-color'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius-lg']) + '\n      ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$modal-content-xs-box-shadow']) + '\n      outline: 0;\n    }\n    \n    & .modal-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-modal-backdrop'] + ';\n      background-color: ' + props.theme['$modal-backdrop-bg'] + ';\n      &.fade {\n        opacity: 0;\n        ' + (0, _transition.transition)(props.theme['$enable-transitions'], props.theme['$transition-fade']) + ';\n      }\n      &.show {\n        opacity: ' + props.theme['$modal-backdrop-opacity'] + ';\n      }\n    }\n      \n        \n    & .modal-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: ' + props.theme['$modal-header-padding'] + ';\n      border-bottom: ' + props.theme['$modal-header-border-width'] + ' solid ' + props.theme['$modal-header-border-color'] + ';\n    }\n    \n    & .modal-title {\n      margin-bottom: 0;\n      line-height: ' + props.theme['$modal-title-line-height'] + ';\n    }\n    \n    & .modal-body {\n      position: relative;\n      flex: 1 1 auto;\n      padding: ' + props.theme['$modal-inner-padding'] + ';\n    }\n    \n    & .modal-footer {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      padding: ' + props.theme['$modal-inner-padding'] + ';\n      border-top: ' + props.theme['$modal-footer-border-width'] + ' solid ' + props.theme['$modal-footer-border-color'] + ';\n      // Easily place margin between footer elements\n      > :not(:first-child) { margin-left: .25rem; }\n      > :not(:last-child) { margin-right: .25rem; }\n    }\n    \n\n  \n    // Scale up the modal\n    ' + (0, _breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], '\n        & .modal-dialog {\n          max-width: ' + props.theme['$modal-md'] + ';\n          margin: ' + props.theme['$modal-dialog-sm-up-margin-y'] + ' auto;\n        }\n      \n        & .modal-content {\n          ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$modal-content-sm-up-box-shadow']) + '\n        }\n      \n        & .modal-sm {\n          max-width: ' + props.theme['$modal-sm'] + ';\n        }\n      ') + '\n  \n\n    ' + (0, _breakpoints.mediaBreakpointUp)('lg', props.theme['$grid-breakpoints'], '\n        & .modal-lg {\n           max-width:  ' + props.theme['$modal-lg'] + '; \n         }\n      ') + '\n  ';
});

/** @component */
exports.default = Modal;
module.exports = exports['default'];