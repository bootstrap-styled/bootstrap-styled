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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mathUtils = require('math-utils');

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _tools = require('utils/tools');

var _borderRadius = require('../../styled/mixins/border-radius');

var _forms = require('../../styled/mixins/forms');

var _breakpoints = require('../../styled/mixins/breakpoints');

var _customForms = require('../../styled/mixins/customForms');

var _grid = require('../../styled/mixins/grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable quote-props, dot-notation */
/**
 * Form Component test
 *
 *
 */


var defaultProps = {
  theme: _theme2.default,
  tag: 'form'
};

var selectBorderWidth = _mathUtils.unitUtils.math.multiply(_theme2.default['$border-width'], 2);

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          inline = _props.inline,
          theme = _props.theme,
          Tag = _props.tag,
          getRef = _props.getRef,
          rest = _objectWithoutProperties(_props, ['className', 'cssModule', 'inline', 'theme', 'tag', 'getRef']);

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, inline ? 'form-inline' : false), cssModule);

      return _react2.default.createElement(Tag, _extends({ ref: getRef, className: classes }, rest));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Form;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Form = (0, _styledComponents2.default)(Form).withConfig({
  displayName: 'Form__Form'
})([' ', ''], function (props) {
  return '\n    /*\n     Textual form controls\n    */\n\n    ' + (0, _forms.formControl)(props.theme['$enable-rounded'], props.theme['$enable-transitions'], props.theme['$enable-shadows'], props.theme['$input-height'], props.theme['$input-padding-y'], props.theme['$input-padding-x'], props.theme['$font-size-base'], props.theme['$input-line-height'], props.theme['$input-color'], props.theme['$input-bg'], props.theme['$input-border-radius'], props.theme['$input-btn-border-width'], props.theme['$input-border-color'], props.theme['$input-transition'], props.theme['$input-box-shadow'], props.theme['$input-color-focus'], props.theme['$input-bg-focus'], props.theme['$input-border-focus'], props.theme['$input-box-shadow-focus'], props.theme['$input-color-placeholder'], props.theme['$input-bg-disabled'], props.theme['$cursor-disabled']) + '\n    \n    select.form-control {\n      &:not([size]):not([multiple]) {\n        height: calc(' + props.theme['$input-height'] + ' + ' + selectBorderWidth + ');\n      }\n\n      &:focus::-ms-value {\n        /* Suppress the nested default white text on blue background highlight given to\n         the selected option text when the (still closed) <select> receives focus\n         in IE and (under certain conditions) Edge, as it looks bad and cannot be made to\n         match the appearance of the native widget.\n         See https://github.com/twbs/bootstrap/issues/19398.\n         */\n        color: ' + props.theme['$input-color'] + ';\n        background-color: ' + props.theme['$input-bg'] + ';\n      }\n    }\n\n    /* Make file inputs better match text inputs by forcing them to new lines. */\n    & .form-control-file,\n    .form-control-range {\n      display: block;\n    }\n\n    /*\n     Labels\n    */\n\n    /* For use with horizontal and inline forms, when you need the label text to */\n    /* align with the form controls. */\n    & .col-form-label {\n      padding-top: calc(' + props.theme['$input-padding-y'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      padding-bottom: calc(' + props.theme['$input-padding-y'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      margin-bottom: 0; /* Override the \'<label>\' default */\n    }\n\n    & .col-form-label-lg {\n      padding-top: calc(' + props.theme['$input-padding-y-lg'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      padding-bottom: calc(' + props.theme['$input-padding-y-lg'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      font-size: ' + props.theme['$font-size-lg'] + ';\n    }\n\n    & .col-form-label-sm {\n      padding-top: calc(' + props.theme['$input-padding-y-sm'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      padding-bottom: calc(' + props.theme['$input-padding-y-sm'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      font-size: ' + props.theme['$font-size-sm'] + ';\n    }\n\n    /*\n     Legends\n    */\n\n    /* For use with horizontal and inline forms, when you need the legend text to */\n    /* be the same size as regular labels, and to align with the form controls. */\n    & .col-form-legend {\n      padding-top: ' + props.theme['$input-padding-y'] + ';\n      padding-bottom: ' + props.theme['$input-padding-y'] + ';\n      margin-bottom: 0;\n      font-size: ' + props.theme['$font-size-base'] + ';\n    }\n\n\n    /* Static form control text\n\n     Apply class to an element to make any string of text align with labels in a\n     horizontal form layout.\n    */\n\n    & .form-control-static {\n      padding-top: ' + props.theme['$input-padding-y'] + ';\n      padding-bottom: ' + props.theme['$input-padding-y'] + ';\n      margin-bottom: 0; /* match inputs if this class comes on inputs with default margins */\n      line-height: ' + props.theme['$input-line-height'] + ';\n      border: solid transparent;\n      border-width: ' + props.theme['$input-btn-border-width'] + ' 0;\n\n      &.form-control-sm,\n      &.form-control-lg {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n\n\n    /* Form control sizing\n\n     Build on .form-control with modifier classes to decrease or increase the\n     height and font-size of form controls.\n\n     The .form-group-* form-control variations are sadly duplicated to avoid the\n     issue documented in https://github.com/twbs/bootstrap/issues/15074.\n    */\n\n    & .form-control-sm {\n      padding: ' + props.theme['$input-padding-y-sm'] + ' ' + props.theme['$input-padding-x-sm'] + ';\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$input-border-radius-sm']) + '\n    }\n\n    select.form-control-sm {\n      &:not([size]):not([multiple]) {\n        height: ' + props.theme['$input-height-sm'] + ';\n      }\n    }\n\n    & .form-control-lg {\n      padding: ' + props.theme['$input-padding-y-lg'] + ' ' + props.theme['$input-padding-x-lg'] + ';\n      font-size: ' + props.theme['$font-size-lg'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$input-border-radius-lg']) + '\n    }\n\n    select.form-control-lg {\n      &:not([size]):not([multiple]) {\n        height: ' + props.theme['$input-height-lg'] + ';\n      }\n    }\n\n\n    /* Form groups Designed to help with the organization and spacing of vertical forms. For horizontal forms, use the predefined grid classes. */\n\n    &.form-group,\n     & .form-group {\n      margin-bottom: ' + props.theme['$form-group-margin-bottom'] + ';\n    }\n\n    & .form-text {\n      display: block;\n      margin-top: ' + props.theme['$form-text-margin-top'] + '\n    }\n\n\n    /* Checkboxes and radios Indent the labels to position radios/checkboxes as hanging controls. */\n\n    & .form-check {\n      position: relative;\n      display: block;\n      margin-bottom: ' + props.theme['$form-check-margin-bottom'] + ';\n\n      &.disabled {\n        .form-check-label {\n          color: ' + props.theme['$text-muted'] + ';\n          cursor: ' + props.theme['$cursor-disabled'] + ';\n        }\n      }\n    }\n\n    & .form-check-label {\n      padding-left: ' + props.theme['$form-check-input-gutter'] + ';\n      margin-bottom: 0; /* Override default <label> bottom margin */\n      cursor: pointer;\n    }\n\n    & .form-check-input {\n      position: absolute;\n      margin-top: ' + props.theme['$form-check-input-margin-y'] + ';\n      margin-left: -' + props.theme['$form-check-input-gutter'] + ';\n\n      &:only-child {\n        position: static;\n      }\n    }\n\n    /* Radios and checkboxes on same line */\n    & .form-check-inline {\n      display: inline-block;\n      .form-check-label {\n        vertical-align: middle;\n      }\n\n      + .form-check-inline {\n        margin-left: ' + props.theme['$form-check-inline-margin-x'] + ';\n      }\n\n      &.disabled {\n        color: ' + props.theme['$text-muted'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n      }\n    }\n\n\n    /* Form control feedback states Apply contextual and semantic states to individual form controls. */\n    & .form-control-feedback {\n      margin-top: ' + props.theme['$form-feedback-margin-top'] + ';\n    }\n\n    & .form-control-success,\n    & .form-control-warning,\n    & .form-control-danger {\n      padding-right: ' + _mathUtils.unitUtils.math.multiply(props.theme['$input-padding-x'], 3) + ';\n      background-repeat: no-repeat;\n      background-position: center right ' + _mathUtils.unitUtils.math.divide(props.theme['$input-height'], 4) + ';\n      background-size: ' + _mathUtils.unitUtils.math.divide(props.theme['$input-height'], 2) + ' ' + _mathUtils.unitUtils.math.divide(props.theme['$input-height'], 2) + ';\n    }\n\n    /* Form validation states */\n    & .has-success {\n      ' + (0, _forms.formControlValidation)(props.theme['$enable-shadows'], props.theme['$brand-success'], props.theme['$box-shadow']) + '\n\n      .form-control-success {\n        background-image: ' + props.theme['$form-icon-success'] + ';\n      }\n    }\n\n    & .has-warning {\n      ' + (0, _forms.formControlValidation)(props.theme['$enable-shadows'], props.theme['$brand-warning'], props.theme['$box-shadow']) + '\n\n      .form-control-warning {\n        background-image: ' + props.theme['$form-icon-warning'] + ';\n      }\n    }\n\n    & .has-danger {\n      ' + (0, _forms.formControlValidation)(props.theme['$enable-shadows'], props.theme['$brand-danger'], props.theme['$box-shadow']) + '\n\n      .form-control-danger {\n        background-image: ' + props.theme['$form-icon-danger'] + ';\n      }\n    }\n\n\n    /* Inline forms\n\n     Make forms appear inline(-block) by adding the .form-inline class. Inline\n     forms begin stacked on extra small (mobile) devices and then go inline when\n     viewports reach <768px.\n\n     Requires wrapping inputs and labels with .form-group for proper display of\n     default HTML form controls and our custom form controls (e.g., input groups).\n    */\n\n    &.form-inline {\n      display: flex;\n      flex-flow: row wrap;\n      align-items: center; /* Prevent shorter elements from growing to same height as others (e.g., small buttons growing to normal sized button height) */\n\n      & .form-check {\n         width: 100%;\n      }\n\n      /* Kick in the inline */\n      ' + (0, _breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], '\n          label {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-bottom: 0;\n          }\n          \n          /* Inline-block all the things for inline */\n          & .form-group {\n            display: flex;\n            flex: 0 0 auto;\n            flex-flow: row wrap;\n            margin-bottom: 0;\n          }\n      \n          /* Allow folks to *not* use .form-group */\n          & .form-control {\n            display: inline-block;\n            width: auto; /* Prevent labels from stacking above inputs in .form-group */\n            vertical-align: middle;\n          }\n      \n          /* Make static controls behave like regular ones */\n          & .form-control-static {\n            display: inline-block;\n          }\n      \n          & .input-group {\n            width: auto;\n          }\n          \n          & .form-control-label {\n             margin-bottom: 0;\n            vertical-align: middle;\n          }\n      \n          /* Remove default margin on radios/checkboxes that were used for stacking, and */\n          /*  then undo the floating of radios and checkboxes to match. */\n          & .form-check {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: auto;\n            margin-top: 0;\n            margin-bottom: 0;\n          }\n          & .form-check-label {\n            padding-left: 0;\n          }\n          & .form-check-input {\n            position: relative;\n            margin-left: 0;\n            margin-top: 0;\n            margin-right: ' + props.theme['$form-check-input-margin-x'] + ';\n          }\n          \n          /* Custom form controls */\n          & .custom-control {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-left: 0;\n          }\n          \n          & .custom-control-indicator {\n            position: static;\n            display: inline-block;\n            margin-right: ' + props.theme['$form-check-input-margin-x'] + '; /* Flexbox alignment means we lose our HTML space here, so we compensate. */\n            vertical-align: text-bottom;\n          }\n          \n          /* Re-override the feedback icon. */\n          & .has-feedback .form-control-feedback {\n            top: 0;\n          }\n        ') + '\n    }\n    ' + (0, _customForms.customForms)(props.theme['$enable-rounded'], props.theme['$enable-shadows'], props.theme['$custom-control-checked-indicator-box-shadow'], props.theme['$custom-control-active-indicator-box-shadow'], props.theme['$custom-control-indicator-box-shadow'], props.theme['$custom-checkbox-indeterminate-box-shadow'], props.theme['$custom-select-focus-box-shadow'], props.theme['$custom-file-focus-box-shadow'], props.theme['$custom-file-box-shadow'], props.theme['$custom-select-border-radius'], props.theme['$custom-file-border-radius'], props.theme['$custom-checkbox-radius'], props.theme['$input-bg'], props.theme['$custom-select-line-height'], props.theme['$line-height-base'], props.theme['$custom-control-gutter'], props.theme['$custom-control-spacer-x'], props.theme['$custom-control-checked-indicator-color'], props.theme['$custom-control-checked-indicator-bg'], props.theme['$custom-control-focus-indicator-box-shadow'], props.theme['$custom-control-active-indicator-color'], props.theme['$custom-control-active-indicator-bg'], props.theme['$custom-control-disabled-cursor'], props.theme['$custom-control-disabled-indicator-bg'], props.theme['$custom-control-disabled-description-color'], props.theme['$custom-control-indicator-size'], props.theme['$custom-control-indicator-bg'], props.theme['$custom-control-indicator-bg-size'], props.theme['$custom-checkbox-checked-icon'], props.theme['$custom-checkbox-indeterminate-bg'], props.theme['$custom-checkbox-indeterminate-icon'], props.theme['$custom-radio-radius'], props.theme['$custom-radio-checked-icon'], props.theme['$custom-control-spacer-y'], props.theme['$border-width'], props.theme['$input-height'], props.theme['$custom-select-padding-y'], props.theme['$custom-select-padding-x'], props.theme['$custom-select-indicator-padding'], props.theme['$custom-select-color'], props.theme['$custom-select-bg'], props.theme['$custom-select-indicator'], props.theme['$custom-select-bg-size'], props.theme['$custom-select-border-width'], props.theme['$custom-select-border-color'], props.theme['$custom-select-focus-border-color'], props.theme['$input-color'], props.theme['$custom-select-disabled-color'], props.theme['$cursor-disabled'], props.theme['$custom-select-disabled-bg'], props.theme['$custom-select-sm-font-size'], props.theme['$custom-file-width'], props.theme['$custom-file-height'], props.theme['$custom-file-padding-x'], props.theme['$custom-file-padding-y'], props.theme['$custom-file-line-height'], props.theme['$custom-file-color'], props.theme['$custom-file-bg'], props.theme['$custom-file-border-width'], props.theme['$custom-file-border-color'], props.theme['$custom-file-button-color'], props.theme['$custom-file-button-bg'], props.theme['$custom-file-text']) + '\n    & .row {\n      ' + (0, _grid.makeRow)(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n  ';
});

Form.defaultProps = defaultProps;

exports.default = Form;