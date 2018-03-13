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

var _H = require('../H4');

var _H2 = _interopRequireDefault(_H);

var _Close = require('../Close');

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = exports.defaultProps = {
  tag: _H2.default,
  wrapTag: 'div'
};

var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<ModalHeader />` component. */
  children: _propTypes2.default.node,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  /** Wrapped tag variables. Can be: */
  wrapTag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  /** Call specified function when on toggle action is triggered. */
  toggle: _propTypes2.default.func,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object

};

var ModalHeader = function ModalHeader(props) {
  var closeButton = void 0;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag']);

  var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'modal-header'), cssModule);

  if (toggle) {
    closeButton = _react2.default.createElement(_Close2.default, { type: 'button', onDismiss: toggle, 'aria-label': 'Close' });
  }

  return _react2.default.createElement(
    WrapTag,
    _extends({}, attributes, { className: classes }),
    _react2.default.createElement(
      Tag,
      { className: (0, _mapToCssModules2.default)('modal-title', cssModule) },
      children
    ),
    closeButton
  );
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

exports.default = ModalHeader;