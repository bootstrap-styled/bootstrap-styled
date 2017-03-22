'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _buttons = require('../../styled/mixins/buttons');

var _tools = require('../../styled/utilities/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Input component
                                                                                                                                                                                                                              **/

var colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

var stringOrNumberProp = _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]);

var columnProps = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.shape({
  size: stringOrNumberProp,
  push: stringOrNumberProp,
  pull: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var propTypes = {
  children: _react.PropTypes.node,
  hidden: _react.PropTypes.bool,
  check: _react.PropTypes.bool,
  inline: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  size: _react.PropTypes.string,
  for: _react.PropTypes.string,
  tag: _react.PropTypes.string,
  className: _react.PropTypes.string,
  cssModule: _react.PropTypes.object,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  theme: _react.PropTypes.object
};

var defaultProps = {
  tag: 'label',
  theme: _theme2.default
};

var Label = function Label(props) {
  // eslint-disable-line
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      Tag = props.tag,
      check = props.check,
      inline = props.inline,
      disabled = props.disabled,
      size = props.size,
      theme = props.theme,
      htmlFor = props.for,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'hidden', 'tag', 'check', 'inline', 'disabled', 'size', 'theme', 'for']);

  var colClasses = [];

  colSizes.forEach(function (colSize) {
    // eslint-disable-line
    var columnProp = props[colSize];
    delete attributes[colSize];

    if (columnProp && columnProp.size) {
      var _cn;

      colClasses.push((0, _tools.mapToCssModules)((0, _classnames2.default)((_cn = {}, _defineProperty(_cn, 'col-' + colSize + '-' + columnProp.size, columnProp.size), _defineProperty(_cn, 'push-' + colSize + '-' + columnProp.push, columnProp.push), _defineProperty(_cn, 'pull-' + colSize + '-' + columnProp.pull, columnProp.pull), _defineProperty(_cn, 'offset-' + colSize + '-' + columnProp.offset, columnProp.offset), _cn))), cssModule);
    } else if (columnProp) {
      colClasses.push('col-' + colSize + '-' + columnProp);
    }
  });

  var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, hidden ? 'sr-only' : false, check ? 'form-check-' + (inline ? 'inline' : 'label') : false, check && inline && disabled ? 'disabled' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);

  return _react2.default.createElement(Tag, _extends({ htmlFor: htmlFor }, attributes, { className: classes }));
};

// eslint-disable-next-line no-class-assign
Label = (0, _styledComponents2.default)(Label).withConfig({
  displayName: 'Label__Label',
  componentId: 'Label__Label-3qbler'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    touch-action: manipulation;\n    /* Allow labels to use margin for spacing. */\n    display: inline-block;\n    margin-bottom: .5rem;\n\n    ' + (0, _buttons.button)(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});

Label.defaultProps = defaultProps;

exports.default = Label;