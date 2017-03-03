var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A list item.
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';

import { listUnstyled } from '../../styled/mixins/lists';
import { media } from '../../styled/mixins/media';

var defaultProps = { theme: bsTheme };

var Li = function (_React$Component) {
  _inherits(Li, _React$Component);

  function Li() {
    _classCallCheck(this, Li);

    return _possibleConstructorReturn(this, (Li.__proto__ || Object.getPrototypeOf(Li)).apply(this, arguments));
  }

  _createClass(Li, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          children = _props.children,
          separator = _props.separator,
          dropdownItem = _props['dropdown-item'],
          active = _props.active,
          disabled = _props.disabled,
          dropdownHeader = _props['dropdown-header'],
          dropdownFooter = _props['dropdown-footer'],
          rest = _objectWithoutProperties(_props, ['className', 'theme', 'children', 'separator', 'dropdown-item', 'active', 'disabled', 'dropdown-header', 'dropdown-footer']); // eslint-disable-line no-unused-vars


      return React.createElement(
        'li',
        _extends({
          className: cn(className, {
            'dropdown-divider': separator,
            'dropdown-item': dropdownItem,
            active: active,
            disabled: disabled,
            'dropdown-header': dropdownHeader,
            'dropdown-footer': dropdownFooter
          })
        }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Li;
}(React.Component);

// eslint-disable-next-line no-class-assign


Li = styled(Li).withConfig({
  displayName: 'Li__Li',
  componentId: 'Li__Li-ve9fbr'
})(['', ''], function (props) {
  return '\n    /* Type Scss */\n    &.list-inline {\n      ' + listUnstyled() + ';\n    }\n    &.list-inline-item {\n      display: inline-block;\n    \n      &:not(:last-child) {\n        margin-right: ' + props.theme['$list-inline-padding'] + ';\n      }\n    }\n    \n    ' + media() + '\n  ';
});

Li.defaultProps = defaultProps;

export default Li;