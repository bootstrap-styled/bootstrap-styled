var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Button Radio component
 **/

import React, { PropTypes } from 'react';
import cn from 'classnames';
import Label from '../Label';
import Button from '../Button';
import Input from '../Input';

var ButtonRadio = function (_React$Component) {
  _inherits(ButtonRadio, _React$Component);

  function ButtonRadio() {
    _classCallCheck(this, ButtonRadio);

    return _possibleConstructorReturn(this, (ButtonRadio.__proto__ || Object.getPrototypeOf(ButtonRadio)).apply(this, arguments));
  }

  _createClass(ButtonRadio, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _props = this.props,
          children = _props.children,
          value = _props.value,
          checked = _props.checked; // eslint-disable-line no-unused-vars

      var _context$buttonGroup = this.context.buttonGroup,
          name = _context$buttonGroup.name,
          selectedValue = _context$buttonGroup.selectedValue,
          _onChange = _context$buttonGroup.onChange;


      var optional = {};
      if (selectedValue !== undefined) {
        optional.checked = value === selectedValue;
      }
      if (typeof _onChange === 'function') {
        optional.onChange = function () {
          return _onChange(value);
        };
      }

      return _jsx(Label, {}, Math.random(), React.createElement(Input, _extends({
        hidden: true,
        value: value,
        checked: checked,
        name: name,
        type: 'radio',
        onChange: function onChange() {
          return _onChange(value);
        }
      }, optional)), _jsx(Button, {
        className: cn('btn', 'btn-primary', {
          active: checked
        }),
        type: 'button',
        autoComplete: 'off',
        onClick: function onClick() {
          return _onChange(value);
        }
      }, void 0, children));
    }
  }]);

  return ButtonRadio;
}(React.Component);

ButtonRadio.contextTypes = {
  buttonGroup: React.PropTypes.object
};
export default ButtonRadio;