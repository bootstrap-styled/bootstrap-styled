'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Transition = require('react-transition-group/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _bootstrapStyledUtils = require('bootstrap-styled-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = _extends({}, _Transition2.default.propTypes, {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  baseClass: _propTypes2.default.string,
  baseClassActive: _propTypes2.default.string,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
});

var defaultProps = _extends({}, _Transition2.default.defaultProps, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: 150,
  appear: true,
  enter: true,
  exit: true,
  in: true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      otherProps = _objectWithoutProperties(props, ['tag', 'baseClass', 'baseClassActive', 'className', 'cssModule', 'children']);

  var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];

  // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
  // empty object "{}". This is the result of the `react-transition-group` babel
  // configuration settings. Therefore, to ensure that production builds work without
  // error, we can either explicitly define keys or use the Transition.defaultProps.
  // Using the Transition.defaultProps excludes any required props. Thus, the best
  // solution is to explicitly define required props in our utilities and reference these.
  // This also gives us more flexibility in the future to remove the prop-types
  // dependency in distribution builds (Similar to how `react-transition-group` does).
  // Note: Without omitting the `react-transition-group` props, the resulting child
  // Tag component would inherit the Transition properties as attributes for the HTML
  // element which results in errors/warnings for non-valid attributes.
  var transitionProps = (0, _bootstrapStyledUtils.pick)(otherProps, TransitionPropTypeKeys);
  var childProps = (0, _lodash2.default)(otherProps, TransitionPropTypeKeys);
  return _react2.default.createElement(
    _Transition2.default,
    transitionProps,
    function (status) {
      var isActive = status === 'entered';
      return _react2.default.createElement(
        Tag,
        _extends({
          className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, baseClass, isActive && baseClassActive), cssModule)
        }, childProps),
        children
      );
    }
  );
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

exports.default = Fade;
module.exports = exports['default'];