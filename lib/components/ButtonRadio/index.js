var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Button Radio component
 **/

import React, { PropTypes } from 'react';
import cn from 'classnames';
import Label from '../Label';
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
          className = _props.className,
          children = _props.children,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['className', 'children', 'value']); // eslint-disable-line no-unused-vars


      var _context$buttonRadioG = this.context.buttonRadioGroup,
          name = _context$buttonRadioG.name,
          selectedValue = _context$buttonRadioG.selectedValue,
          onChange = _context$buttonRadioG.onChange;


      var optional = {};
      if (selectedValue !== undefined) {
        optional.checked = value === selectedValue;
      }
      if (typeof onChange === 'function') {
        optional.onChange = function () {
          return onChange(value);
        };
      }

      return _jsx(Label, {
        className: cn(className, 'btn', {
          active: optional.checked
        })
      }, void 0, React.createElement(Input, _extends({
        key: Math.random(),
        value: value,
        name: name,
        type: 'radio'
      }, rest, optional)), children);
    }
  }]);

  return ButtonRadio;
}(React.Component);

ButtonRadio.contextTypes = {
  buttonRadioGroup: React.PropTypes.object
};
export default ButtonRadio;