'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tools = require('utils/tools');

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable quote-props, dot-notation */
/**
 * FormCustom Component test
 *
 *
 */


var _ref = _jsx(_Input2.default, {
  type: 'checkbox',
  className: 'custom-control-input'
});

var _ref2 = _jsx('span', {
  className: 'custom-control-indicator'
});

var FormCustom = function (_React$Component) {
  _inherits(FormCustom, _React$Component);

  function FormCustom() {
    _classCallCheck(this, FormCustom);

    return _possibleConstructorReturn(this, (FormCustom.__proto__ || Object.getPrototypeOf(FormCustom)).apply(this, arguments));
  }

  _createClass(FormCustom, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          radio = _props.radio,
          children = _props.children,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'radio', 'children']);

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, 'custom-control', radio ? 'custom-radio' : 'custom-checkbox'), cssModule);

      var CustomInput = radio ? _jsx(_Input2.default, {
        type: 'radio',
        id: radio.id,
        name: radio.name,
        className: 'custom-control-input'
      }) : _ref;
      return _react2.default.createElement(
        _Label2.default,
        _extends({ className: classes }, attributes),
        CustomInput,
        _ref2,
        _jsx('span', {
          className: 'custom-control-description'
        }, void 0, children)
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return FormCustom;
}(_react2.default.Component);

exports.default = FormCustom;