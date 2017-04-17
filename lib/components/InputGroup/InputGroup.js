'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tools = require('utils/tools');

var _hover = require('../../styled/mixins/hover');

var _borderRadius = require('../../styled/mixins/border-radius');

var _forms = require('../../styled/mixins/forms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * InputGroup Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultProps = {
  theme: _theme2.default,
  tag: 'div'
};

var InputGroup = function (_React$Component) {
  _inherits(InputGroup, _React$Component);

  function InputGroup() {
    _classCallCheck(this, InputGroup);

    return _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).apply(this, arguments));
  }

  _createClass(InputGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          size = _props.size,
          theme = _props.theme,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'tag', 'size', 'theme']);

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, 'input-group', size ? 'input-group-' + size : null), cssModule);

      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return InputGroup;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


InputGroup = (0, _styledComponents2.default)(InputGroup).withConfig({
  displayName: 'InputGroup__InputGroup'
})(['', ''], function (props) {
  return '\n    /*\n     Base styles\n    */\n   \n    &.input-group {\n      position: relative;\n      display: flex;\n      width: 100%;\n\n      .form-control {\n        /* \n          Ensure that the input is always above the *appended* addon button for\n          proper border colors.\n        */\n        \n        position: relative;\n        z-index: 2;\n        flex: 1 1 auto;\n        /* Add width 1% and flex-basis auto to ensure that button will not wrap out */\n        /* the column. Applies to IE Edge+ and Firefox. Chrome does not require this. */\n        width: 1%;\n        margin-bottom: 0;\n        \n        ' + (0, _hover.hoverFocusActive)(props.theme['$enable-hover-media-query'], 'z-index: 3;') + '\n      }\n    }\n    \n    & .input-group-addon,\n    & .input-group-btn,\n    &.input-group .form-control {\n      /* Vertically centers the content of the addons within the input group */\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n\n\n      &:not(:first-child):not(:last-child) {\n        ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], '0') + '\n      }\n    }\n   \n    & .input-group-addon,\n    & .input-group-btn {\n\n      white-space: nowrap;\n      vertical-align: middle; /* Match the inputs */\n    }\n   \n   \n    /* Sizing options\n    Remix the default form control sizing classes into new ones for easier\n    manipulation.\n    */\n   \n    &.input-group-lg > .form-control,\n    &.input-group-lg > .input-group-addon,\n    &.input-group-lg > .input-group-btn > .btn {\n      padding: ' + props.theme['$input-padding-y-lg'] + ' ' + props.theme['$input-padding-x-lg'] + ';\n      font-size: ' + props.theme['$font-size-lg'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$input-border-radius-lg']) + '\n    }\n    \n    &.input-group-sm > .form-control,\n    &.input-group-sm > .input-group-addon,\n    &.input-group-sm > .input-group-btn > .btn {\n      padding: ' + props.theme['$input-padding-y-sm'] + ' ' + props.theme['$input-padding-x-sm'] + ';\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$input-border-radius-sm']) + '\n    }\n   \n   \n    /*\n    Text input groups\n    */\n   \n    & .input-group-addon {\n      padding: ' + props.theme['$input-padding-y'] + ' ' + props.theme['$input-padding-x'] + ';\n      margin-bottom: 0; /* Allow use of <label> elements by overriding our default margin-bottom */\n      font-size: ' + props.theme['$font-size-base'] + ';\n      font-weight: normal;\n      line-height: ' + props.theme['$input-line-height'] + ';\n      color: ' + props.theme['$input-color'] + ';\n      text-align: center;\n      background-color: ' + props.theme['$input-group-addon-bg'] + ';\n      border: ' + props.theme['$input-btn-border-width'] + ' solid ' + props.theme['$input-group-addon-border-color'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$input-border-radius']) + '\n   \n      /* \n      Nuke default margins from checkboxes and radios to vertically center within.\n      */\n      input[type="radio"],\n      input[type="checkbox"] {\n        margin-top: 0;\n      }\n    }\n   \n   \n    /*\n     Reset rounded corners\n    */\n   \n    &.input-group .form-control:not(:last-child),\n    & .input-group-addon:not(:last-child),\n    & .input-group-btn:not(:last-child) > .btn,\n    & .input-group-btn:not(:last-child) > .btn-group > .btn,\n    & .input-group-btn:not(:last-child) > .dropdown-toggle,\n    & .input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),\n    & .input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {\n      ' + (0, _borderRadius.borderRightRadius)(props.theme['$enable-rounded'], '0') + '\n    }\n    & .input-group-addon:not(:last-child) {\n      border-right: 0;\n    }\n    &.input-group .form-control:not(:first-child),\n    & .input-group-addon:not(:first-child),\n    & .input-group-btn:not(:first-child) > .btn,\n    & .input-group-btn:not(:first-child) > .btn-group > .btn,\n    & .input-group-btn:not(:first-child) > .dropdown-toggle,\n    & .input-group-btn:not(:last-child) > .btn:not(:first-child),\n    & .input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\n      ' + (0, _borderRadius.borderLeftRadius)(props.theme['$enable-rounded'], '0') + '\n    }\n    & .form-control + .input-group-addon:not(:first-child) {\n      border-left: 0;\n    }\n   \n    /*\n     Button input groups\n    */\n   \n    & .input-group-btn {\n      position: relative;\n      /* Jankily prevent input button groups from wrapping with white-space and\n      font-size in combination with inline-block on buttons.\n      */\n      font-size: 0;\n      white-space: nowrap;\n   \n      /* Negative margin for spacing, position for bringing hovered/focused/actived\n      element above the siblings.\n      */\n      > .btn {\n        position: relative;\n        /* Vertically stretch the button and center its content */\n        flex: 1;\n        \n        + .btn {\n          margin-left: -' + props.theme['$input-btn-border-width'] + ';\n        }\n        \n        /* Bring the active button to the front */\n        ' + (0, _hover.hoverFocusActive)(props.theme['$enable-hover-media-query'], 'z-index: 3;') + '\n      }\n   \n      /* Negative margin to only have a single, shared border between the two */\n      &:not(:last-child) {\n        > .btn,\n        > .btn-group {\n          margin-right: -' + props.theme['$input-btn-border-width'] + ';\n        }\n      }\n      &:not(:first-child) {\n        > .btn,\n        > .btn-group {\n          z-index: 2;\n          margin-left: -' + props.theme['$input-btn-border-width'] + ';\n          /* Because specificity */\n          ' + (0, _hover.hoverFocusActive)(props.theme['$enable-hover-media-query'], 'z-index: 3;') + '\n        }\n      }\n    }\n    \n   /* Added So that Inputs in InputGroup grab the same .form-control class as in Component Form Not Bs4 */\n   ' + (0, _forms.formControl)(props.theme['$enable-rounded'], props.theme['$enable-transitions'], props.theme['$enable-shadows'], props.theme['$input-height'], props.theme['$input-padding-y'], props.theme['$input-padding-x'], props.theme['$font-size-base'], props.theme['$input-line-height'], props.theme['$input-color'], props.theme['$input-bg'], props.theme['$input-border-radius'], props.theme['$input-btn-border-width'], props.theme['$input-border-color'], props.theme['$input-transition'], props.theme['$input-box-shadow'], props.theme['$input-color-focus'], props.theme['$input-bg-focus'], props.theme['$input-border-focus'], props.theme['$input-box-shadow-focus'], props.theme['$input-color-placeholder'], props.theme['$input-bg-disabled'], props.theme['$cursor-disabled']) + '\n    \n  ';
});

InputGroup.defaultProps = defaultProps;

exports.default = InputGroup;