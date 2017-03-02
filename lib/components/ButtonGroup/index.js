var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ButtonGroup
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { buttonGroup } from '../../styled/mixins/buttonGroup';

var defaultProps = { theme: bsTheme };

var ButtonGroup = function (_React$Component) {
  _inherits(ButtonGroup, _React$Component);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
  }

  _createClass(ButtonGroup, [{
    key: 'getChildContext',
    // eslint-disable-line react/prefer-stateless-function

    value: function getChildContext() {
      var _props = this.props,
          name = _props.name,
          selectedValue = _props.selectedValue,
          selectedValueList = _props.selectedValueList,
          onChange = _props.onChange;

      return {
        buttonRadioGroup: {
          name: name,
          selectedValue: selectedValue,
          onChange: onChange
        },
        buttonCheckboxGroup: {
          name: name,
          selectedValueList: selectedValueList,
          onChange: onChange
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children,
          theme = _props2.theme,
          btnToolbar = _props2['btn-toolbar'],
          rest = _objectWithoutProperties(_props2, ['className', 'children', 'theme', 'btn-toolbar']); // eslint-disable-line no-unused-vars


      var name = rest.name,
          selectedValue = rest.selectedValue,
          selectedValueList = rest.selectedValueList,
          onChange = rest.onChange,
          restAfterChildContext = _objectWithoutProperties(rest, ['name', 'selectedValue', 'selectedValueList', 'onChange']); // eslint-disable-line no-unused-vars

      return React.createElement(
        'div',
        _extends({
          className: cn(className, {
            'btn-group': !btnToolbar, // if this ButtonGroup is a btn-toolbar, then we don't need .btn-group
            'btn-toolbar': btnToolbar
          })
        }, restAfterChildContext),
        children
      );
    }
  }]);

  return ButtonGroup;
}(React.Component);

// eslint-disable-next-line no-class-assign


ButtonGroup.childContextTypes = {
  buttonCheckboxGroup: React.PropTypes.object,
  buttonRadioGroup: React.PropTypes.object
};
ButtonGroup = styled(ButtonGroup).withConfig({
  displayName: 'ButtonGroup__ButtonGroup',
  componentId: 'ButtonGroup__ButtonGroup-163a8eu'
})(['', '  '], function (props) {
  return '\n    ' + buttonGroup(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-toolbar-margin'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']) + '\n  ';
});

ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;