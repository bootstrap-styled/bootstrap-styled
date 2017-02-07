var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* Input component
**/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';
import { button } from '../../styled/utilities/button';

var defaultProps = {
  theme: theme,
  type: 'text'
};

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          rest = _objectWithoutProperties(_props, ['theme']); // eslint-disable-line


      return React.createElement('input', rest);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Input;
}(React.Component);

// eslint-disable-next-line no-class-assign


Input = styled(Input)(_templateObject, function (props) {
  return '\n    /* Reboot Scss */\n    touch-action: manipulation;\n    \n    /* Normalize includes \'font: inherit;\', so \'font-family\'. \'font-size\', etc are */\n    /* properly inherited. However, \'line-height\' isn\'t inherited there. */\n    line-height: inherit;\n   \n    &.disabled {\n      cursor: ' + props.theme['$cursor-disabled'] + ';\n    }\n   \n    input[type="date"],\n    input[type="time"],\n    input[type="datetime-local"],\n    input[type="month"] {\n    /* Remove the default appearance of temporal inputs to avoid a Mobile Safari\n       bug where setting a custom line-height prevents text from being vertically\n       centered within the input.\n       Bug report: https://github.com/twbs/bootstrap/issues/11266\n     */\n      -webkit-appearance: listbox;\n    }\n      \n    input[type="search"] {\n      /* This overrides the extra rounded corners on search inputs in iOS so that our\n      \'.form-control\' class can properly style them. Note that this cannot simply\n       be added to \'.form-control\' as it\'s not specific enough. For details, see\n       https://github.com/twbs/bootstrap/issues/11586.\n       */\n      -webkit-appearance: none;\n    }\n    \n    ' + button(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});

Input.defaultProps = defaultProps;

export default Input;