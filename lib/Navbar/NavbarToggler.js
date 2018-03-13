'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = exports.defaultProps = {
  tag: 'button',
  type: 'button'
};
var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<NavbarToggler />` component. */
  children: _propTypes2.default.node,
  /** Value type of the component. */
  type: _propTypes2.default.string,
  /** Toggles right CSS display. */
  right: _propTypes2.default.bool,
  /** Toggles left CSS display. */
  left: _propTypes2.default.bool,
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

var navbarToggleIcon = _react2.default.createElement('span', { className: 'navbar-toggler-icon' });

var NavbarToggler = function NavbarToggler(props) {
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      right = props.right,
      left = props.left,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'children', 'right', 'left', 'tag']);

  var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'navbar-toggler', right && 'navbar-toggler-right', left && 'navbar-toggler-left'), cssModule);

  return _react2.default.createElement(
    Tag,
    _extends({}, attributes, { className: classes }),
    children || navbarToggleIcon
  );
};

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;

/** @component */
exports.default = NavbarToggler;