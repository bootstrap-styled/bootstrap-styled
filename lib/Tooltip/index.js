'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipUnstyled = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _tools = require('bootstrap-styled-utils/lib/tools');

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _TetherContent = require('../TetherContent');

var _TetherContent2 = _interopRequireDefault(_TetherContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Tooltip component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var DEFAULT_DELAYS = {
  shape: 0,
  hide: 250
};

var defaultProps = {
  isOpen: false,
  placement: 'bottom',
  delay: DEFAULT_DELAYS,
  autohide: true,
  toggle: function toggle() {}
};

var defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: {
    element: false,
    enabled: 'show'
  },
  constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};
// propTypes need to be excluded of the tooltip class
// issue on : https://github.com/yannickcr/eslint-plugin-react/issues/203
var propTypes = {
  placement: _propTypes2.default.oneOf(_tools.tetherAttachements),
  target: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  isOpen: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  tether: _propTypes2.default.object,
  tetherRef: _propTypes2.default.func,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  toggle: _propTypes2.default.func,
  autohide: _propTypes2.default.bool,
  delay: _propTypes2.default.oneOfType([_propTypes2.default.shape({ show: _propTypes2.default.number, hide: _propTypes2.default.number }), _propTypes2.default.number])
};

var TooltipUnstyled = exports.TooltipUnstyled = function (_React$Component) {
  _inherits(TooltipUnstyled, _React$Component);

  function TooltipUnstyled() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TooltipUnstyled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TooltipUnstyled.__proto__ || Object.getPrototypeOf(TooltipUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _this.componentDidMount = function () {
      _this.target = _this.getTarget();
      _this.addTargetEvents();
    }, _this.componentWillUnmount = function () {
      _this.removeTargetEvents();
    }, _this.onMouseOverTooltip = function () {
      if (_this.hideTimeout) {
        _this.clearHideTimeout();
      }
      _this.showTimeout = setTimeout(_this.show, _this.getDelay('show'));
    }, _this.onMouseLeaveTooltip = function () {
      if (_this.showTimeout) {
        _this.clearShowTimeout();
      }
      _this.hideTimeout = setTimeout(_this.hide, _this.getDelay('hide'));
    }, _this.onMouseOverTooltipContent = function () {
      if (_this.props.autohide) {
        return;
      }
      if (_this.hideTimeout) {
        _this.clearHideTimeout();
      }
    }, _this.onMouseLeaveTooltipContent = function () {
      if (_this.props.autohide) {
        return;
      }
      if (_this.showTimeout) {
        _this.clearShowTimeout();
      }
      _this.hideTimeout = setTimeout(_this.hide, _this.getDelay('hide'));
    }, _this.getDelay = function (key) {
      var delay = _this.props.delay;

      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }
      return delay;
    }, _this.getTarget = function () {
      var target = _this.props.target;

      if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object') {
        return target;
      }
      return document.getElementById(target);
    }, _this.getTetherConfig = function () {
      var attachments = (0, _tools.getTetherAttachments)(_this.props.placement);
      return _extends({}, defaultTetherConfig, attachments, {
        target: _this.getTarget
      }, _this.props.tether);
    }, _this.show = function () {
      if (!_this.props.isOpen) {
        _this.clearShowTimeout();
        _this.toggle();
      }
    }, _this.hide = function () {
      if (_this.props.isOpen) {
        _this.clearHideTimeout();
        _this.toggle();
      }
    }, _this.clearShowTimeout = function () {
      clearTimeout(_this.showTimeout);
      _this.showTimeout = undefined;
    }, _this.clearHideTimeout = function () {
      clearTimeout(_this.hideTimeout);
      _this.hideTimeout = undefined;
    }, _this.handleDocumentClick = function (e) {
      if (e.target === _this.target || _this.target.contains(e.target)) {
        if (_this.hideTimeout) {
          _this.clearHideTimeout();
        }

        if (!_this.props.isOpen) {
          _this.toggle();
        }
      }
    }, _this.addTargetEvents = function () {
      if (_this.target) {
        _this.target.addEventListener('mouseover', _this.onMouseOverTooltip, true);
        _this.target.addEventListener('mouseout', _this.onMouseLeaveTooltip, true);
        document.addEventListener('click', _this.handleDocumentClick, true);
      }
    }, _this.removeTargetEvents = function () {
      if (_this.target) {
        _this.target.removeEventListener('mouseover', _this.onMouseOverTooltip, true);
        _this.target.removeEventListener('mouseout', _this.onMouseLeaveTooltip, true);
        document.removeEventListener('click', _this.handleDocumentClick, true);
      }
    }, _this.toggle = function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }

      return _this.props.toggle();
    }, _this.handleFocus = function () {
      _this.setState({
        focus: true
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TooltipUnstyled, [{
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = (0, _lodash2.default)(this.props, Object.keys(propTypes));

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)('tooltip', this.props.className), this.props.cssModule);

      var tetherConfig = this.getTetherConfig();

      var optional = {};
      if (this.state.focus === true) {
        optional.onFocus = this.handleFocus;
      }
      return _react2.default.createElement(
        _TetherContent2.default,
        {
          className: classes,
          tether: tetherConfig,
          tetherRef: this.props.tetherRef,
          isOpen: this.props.isOpen,
          toggle: this.toggle
        },
        _react2.default.createElement('div', _extends({}, attributes, {
          className: 'tooltip-inner',
          onMouseOver: this.onMouseOverTooltipContent,
          onMouseLeave: this.onMouseLeaveTooltipContent,
          onFocus: this.handleFocus
        }, optional))
      );
    }
  }]);

  return TooltipUnstyled;
}(_react2.default.Component);

TooltipUnstyled.propTypes = propTypes;


var Tooltip = (0, _styledComponents2.default)(TooltipUnstyled).withConfig({
  displayName: 'Tooltip'
})(['', ''], function (props) {
  return '\n    &.tooltip {\n      position: absolute;\n      z-index: ' + props.theme['$zindex-tooltip'] + ';\n      display: block;\n      font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;\n      font-style: normal;\n      font-weight: 400;\n      letter-spacing: normal;\n      line-break: auto;\n      line-height: 1.5;\n      text-align: left;\n      text-align: start;\n      text-decoration: none;\n      text-shadow: none;\n      text-transform: none;\n      white-space: normal;\n      word-break: normal;\n      word-spacing: normal;\n      font-size: .875rem;\n      word-wrap: break-word;\n      opacity: 0\n    }\n    \n    &.tooltip.show {\n      opacity: ' + props.theme['$tooltip-opacity'] + '\n    }\n    \n    &.tooltip.bs-tether-element-attached-bottom,\n    &.tooltip.tooltip-top {\n      padding: 5px 0;\n      margin-top: -3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-bottom .tooltip-inner:before,\n    &.tooltip.tooltip-top .tooltip-inner:before {\n      bottom: 0;\n      left: 50%;\n      margin-left: -5px;\n      content: "";\n      border-width: 5px 5px 0;\n      border-top-color: #000\n    }\n    \n    &.tooltip.bs-tether-element-attached-left,\n    &.tooltip.tooltip-right {\n      padding: 0 5px;\n      margin-left: 3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-left .tooltip-inner:before,\n    &.tooltip.tooltip-right .tooltip-inner:before {\n      top: 50%;\n      left: 0;\n      margin-top: -5px;\n      content: "";\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000\n    }\n    \n    &.tooltip.bs-tether-element-attached-top,\n    &.tooltip.tooltip-bottom {\n      padding: 5px 0;\n      margin-top: 3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-top .tooltip-inner:before,\n    &.tooltip.tooltip-bottom .tooltip-inner:before {\n      top: 0;\n      left: 50%;\n      margin-left: -5px;\n      content: "";\n      border-width: 0 5px 5px;\n      border-bottom-color: #000\n    }\n    \n    &.tooltip.bs-tether-element-attached-right,\n    &.tooltip.tooltip-left {\n      padding: 0 5px;\n      margin-left: -3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-right .tooltip-inner:before,\n    &.tooltip.tooltip-left .tooltip-inner:before {\n      top: 50%;\n      right: 0;\n      margin-top: -5px;\n      content: "";\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000\n    }\n    \n    & .tooltip-inner {\n      max-width: ' + props.theme['$tooltip-max-width'] + ';\n      padding: ' + props.theme['$tooltip-padding-y'] + ' ' + props.theme['$tooltip-padding-x'] + ';\n      color: ' + props.theme['$tooltip-color'] + ';\n      text-align: center;\n      background-color: ' + props.theme['$tooltip-bg'] + ';\n      border-radius: .25rem\n    }\n    \n    & .tooltip-inner:before {\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-color: transparent;\n      border-style: solid\n    }\n  ';
});

Tooltip.defaultProps = defaultProps;

exports.default = Tooltip;