'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Alert component
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _alert = require('bootstrap-styled-mixins/lib/alert');

var _borderRadius = require('bootstrap-styled-mixins/lib/border-radius');

var _bootstrapStyledUtils = require('bootstrap-styled-utils');

var _Fade = require('../Modal/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _Close = require('../Close');

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  toggle: false,
  theme: {
    '$alert-padding-x': '1.25rem',
    '$alert-padding-y': '.75rem',
    '$alert-margin-bottom': '1rem',
    '$alert-border-radius': '.25rem',
    '$alert-link-font-weight': 'bold',
    '$alert-border-width': '1px',
    '$alert-success-bg': '#dff0d8',
    '$alert-success-text': '#3c763d',
    '$alert-success-border': '#3c763d',
    '$alert-info-bg': '#d9edf7',
    '$alert-info-text': '#31708f',
    '$alert-info-border': '#31708f',
    '$alert-warning-bg': '#fcf8e3',
    '$alert-warning-text': '#8a6d3b',
    '$alert-warning-border': '#8a6d3b',
    '$alert-danger-bg': '#f2dede',
    '$alert-danger-text': '#a94442',
    '$alert-danger-border': '#a94442',
    '$enable-rounded': true
  },
  uncontrolled: false,
  autoHideDuration: 0, // theme
  transition: _extends({}, _Fade2.default.defaultProps, {
    unmountOnExit: true
  })
};

var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<Alert />` component. */
  children: _propTypes2.default.node,
  /** Color variables. */
  color: _propTypes2.default.oneOf(['success', 'info', 'warning', 'danger']),
  /**
   * Toggles dismissal of an alert.
   */
  isOpen: _propTypes2.default.bool,
  /**
   * Toggles onClick event.
   */
  toggle: _propTypes2.default.bool,
  /**
   * Call specified function when `on click` event is triggered.
   */
  onClick: _propTypes2.default.func,
  /**
   * Toggles onClick event.
   */
  initializeIsOpen: _propTypes2.default.func,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  /**
   * Transition used to dismiss alert.
   */
  transition: _propTypes2.default.shape(_Fade2.default.propTypes),
  /**
   * Transition's duration used to dismiss alert automatically.
   */
  autoHideDuration: _propTypes2.default.number,
  /** Theme variables. */
  theme: _propTypes2.default.shape({
    '$alert-padding-x': _propTypes2.default.string,
    '$alert-padding-y': _propTypes2.default.string,
    '$alert-margin-bottom': _propTypes2.default.string,
    '$alert-border-radius': _propTypes2.default.string,
    '$alert-link-font-weight': _propTypes2.default.string,
    '$alert-border-width': _propTypes2.default.string,
    '$alert-success-bg': _propTypes2.default.string,
    '$alert-success-text': _propTypes2.default.string,
    '$alert-success-border': _propTypes2.default.string,
    '$alert-info-bg': _propTypes2.default.string,
    '$alert-info-text': _propTypes2.default.string,
    '$alert-info-border': _propTypes2.default.string,
    '$alert-warning-bg': _propTypes2.default.string,
    '$alert-warning-text': _propTypes2.default.string,
    '$alert-warning-border': _propTypes2.default.string,
    '$alert-danger-bg': _propTypes2.default.string,
    '$alert-danger-text': _propTypes2.default.string,
    '$alert-danger-border': _propTypes2.default.string,
    '$enable-rounded': _propTypes2.default.bool
  }),
  /**
   * Toggles inner alert state so that you don't have to write your own state or closing function.
   */
  uncontrolled: _propTypes2.default.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var AlertUnstyled = function (_React$Component) {
  _inherits(AlertUnstyled, _React$Component);

  function AlertUnstyled() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AlertUnstyled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AlertUnstyled.__proto__ || Object.getPrototypeOf(AlertUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      uncontrolledOpen: true,
      exited: false
    }, _this.setAutoHideTimer = function (autoHideDuration) {
      if (!_this.props.autoHideDuration) {
        return;
      }

      clearTimeout(_this.timerAutoHide);

      _this.timerAutoHide = setTimeout(function () {
        if (_this.props.autoHideDuration) {
          _this.toggle();
        }
      }, autoHideDuration || _this.props.autoHideDuration);
    }, _this.timerAutoHide = null, _this.initializeIsOpen = function (props) {
      return _this.setState({ uncontrolledOpen: props.isOpen });
    }, _this.toggle = function (e) {
      if (_this.props.onClick) {
        _this.props.onClick(e);
      } else {
        _this.setState({ uncontrolledOpen: false });
      }
    }, _this.handleExited = function () {
      _this.setState({ exited: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */

  /* eslint-enable react/no-unused-prop-types */

  _createClass(AlertUnstyled, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.initializeIsOpen(this.props);
      if (this.props.uncontrolled) {
        if (this.state.uncontrolledOpen) {
          this.setState({ exited: true });
        }
        return;
      }
      if (!this.props.isOpen) {
        this.setState({ exited: true });
      }
    }
    /* eslint-disable no-console */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoHideDuration) {
        if (this.props.onClick) {
          console.warn('You cannot make an Alert auto-hide when using an onClick function. Use the auto-hide props with the uncontrolled props!');
          return;
        }
        this.setAutoHideTimer();
      }
    }
    /* eslint-enable no-console */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen) {
        this.setState({ exited: false });
      }
      if (nextProps.isOpen !== this.props.isOpen) {
        this.initializeIsOpen(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isOpen !== this.props.isOpen) {
        if (this.props.isOpen) {
          this.setAutoHideTimer();
        } else {
          clearTimeout(this.timerAutoHide);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerAutoHide);
    }

    // Timer that controls delay before snackbar auto hides

  }, {
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme', 'autoHideDuration']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          color = _omit.color,
          isOpen = _omit.isOpen,
          toggle = _omit.toggle,
          onClick = _omit.onClick,
          children = _omit.children,
          onExited = _omit.onExited,
          transition = _omit.transition,
          uncontrolled = _omit.uncontrolled,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'color', 'isOpen', 'toggle', 'onClick', 'children', 'onExited', 'transition', 'uncontrolled']);

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'alert', 'alert-' + color, { 'alert-dismissible': toggle || onClick }), cssModule);

      if (!isOpen && this.state.exited) {
        return null;
      }

      var transitionProps = {
        in: uncontrolled ? this.state.uncontrolledOpen : isOpen,
        appear: true,
        onExited: (0, _bootstrapStyledUtils.createChainedFunction)(this.handleExited, onExited)
      };

      return _react2.default.createElement(
        _Fade2.default,
        _extends({
          tag: Tag,
          className: classes,
          'in': uncontrolled ? this.state.uncontrolledOpen : isOpen,
          role: 'alert'
        }, attributes, transition, transitionProps),
        (toggle || onClick) && _react2.default.createElement(_Close2.default, { onDismiss: this.toggle }),
        children
      );
    }
  }]);

  return AlertUnstyled;
}(_react2.default.Component);

AlertUnstyled.defaultProps = defaultProps;
AlertUnstyled.propTypes = propTypes;


var AlertHoc = (0, _styledComponents.withTheme)(AlertUnstyled);

/**
 * Alert component.
 */
var Alert = (0, _styledComponents2.default)(AlertHoc).withConfig({
  displayName: 'Alert'
})(['', ''], function (props) {
  return '\n    /*\n    Base styles\n    */\n    \n    &.alert {\n      padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n      margin-bottom: ' + props.theme['$alert-margin-bottom'] + ';\n      border: ' + props.theme['$alert-border-width'] + ' solid transparent;\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$alert-border-radius']) + '\n    }\n    \n    /* Headings for larger alerts */\n    &.alert-heading {\n      /* Specified to prevent conflicts of changing $headings-color */\n      color: inherit;\n    }\n    \n    /* Provide class for links that match alerts */\n    & .alert-link { \n      font-weight: ' + props.theme['$alert-link-font-weight'] + ';\n    }\n    \n    /* Dismissible alerts Expand the right padding and account for the close buttons positioning. */\n    \n    &.alert-dismissible {    \n      /* Adjust close link position */\n      & .close {\n        position: relative;\n        top: -' + props.theme['$alert-padding-y'] + ';\n        right: -' + props.theme['$alert-padding-x'] + ';\n        padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n        color: inherit;\n      }\n    }\n    /* Alternate styles Generate contextual modifier classes for colorizing the alert. */\n\n    &.alert-success {\n      ' + (0, _alert.alertVariant)(props.theme['$alert-success-bg'], props.theme['$alert-success-border'], props.theme['$alert-success-text']) + '    \n    }\n    &.alert-info {\n      ' + (0, _alert.alertVariant)(props.theme['$alert-info-bg'], props.theme['$alert-info-border'], props.theme['$alert-info-text']) + '\n    } \n    &.alert-warning {\n      ' + (0, _alert.alertVariant)(props.theme['$alert-warning-bg'], props.theme['$alert-warning-border'], props.theme['$alert-warning-text']) + ' \n    }\n    &.alert-danger {\n      ' + (0, _alert.alertVariant)(props.theme['$alert-danger-bg'], props.theme['$alert-danger-border'], props.theme['$alert-danger-text']) + ' \n    }\n  ';
});

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

/** @component */
exports.default = Alert;
module.exports = exports['default'];