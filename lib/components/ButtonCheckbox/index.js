var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Button Checkbox component
 **/

import React, { PropTypes } from 'react';
import cn from 'classnames';
import Label from '../Label';
import Input from '../Input';

var ButtonCheckbox = function (_React$Component) {
  _inherits(ButtonCheckbox, _React$Component);

  function ButtonCheckbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ButtonCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ButtonCheckbox.__proto__ || Object.getPrototypeOf(ButtonCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function () {
      var value = _this.props.value; // eslint-disable-line no-unused-vars

      var _this$context$buttonC = _this.context.buttonCheckboxGroup,
          selectedValueList = _this$context$buttonC.selectedValueList,
          onChange = _this$context$buttonC.onChange;

      var valueList = _this.addOrRemove(selectedValueList, value);
      onChange(valueList);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ButtonCheckbox, [{
    key: 'addOrRemove',
    // eslint-disable-line react/prefer-stateless-function

    value: function addOrRemove(array, value) {
      var index = array.indexOf(value);

      if (index === -1) {
        array.push(value);
      } else {
        array.splice(index, 1);
      }
      return array;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['className', 'children', 'value']); // eslint-disable-line no-unused-vars


      var _context$buttonCheckb = this.context.buttonCheckboxGroup,
          name = _context$buttonCheckb.name,
          selectedValueList = _context$buttonCheckb.selectedValueList,
          onChange = _context$buttonCheckb.onChange;


      var optional = {};
      if (selectedValueList !== undefined) {
        optional.checked = selectedValueList.includes(value);
      }
      if (typeof onChange === 'function') {
        optional.onChange = this.handleChange;
      }

      return _jsx(Label, {
        className: cn('btn', className, {
          active: optional.checked
        })
      }, void 0, React.createElement(Input, _extends({
        key: Math.random(),
        value: value,
        name: name,
        type: 'checkbox'
      }, rest, optional)), children);
    }
  }]);

  return ButtonCheckbox;
}(React.Component);

ButtonCheckbox.contextTypes = {
  buttonCheckboxGroup: React.PropTypes.object
};
export default ButtonCheckbox;