'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeLink = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _composeLink = require('./composeLink');

Object.defineProperty(exports, 'composeLink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_composeLink).default;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _tools = require('utils/tools');

var _a = require('../../styled/mixins/a');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A link to a certain page, an anchor tag
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultProps = {
  theme: _theme2.default
};

var A = function (_React$Component) {
  _inherits(A, _React$Component);

  function A() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, A);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = A.__proto__ || Object.getPrototypeOf(A)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(A, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          active = _props.active,
          disabled = _props.disabled,
          cssModule = _props.cssModule,
          color = _props.color,
          dropdownItem = _props['dropdown-item'],
          children = _props.children,
          attributes = _objectWithoutProperties(_props, ['className', 'theme', 'active', 'disabled', 'cssModule', 'color', 'dropdown-item', 'children']);

      var focus = this.state.focus;


      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, active ? 'active' : false, disabled ? 'disabled' : false, focus, dropdownItem ? 'dropdown-item' : false, color ? 'text-' + color : false), cssModule);

      return _react2.default.createElement(
        'a',
        _extends({
          className: classes
        }, attributes),
        children
      );
    }
  }]);

  return A;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


A = (0, _styledComponents2.default)(A).withConfig({
  displayName: 'A__A'
})(['', ''], function (props) {
  return '\n    ' + (0, _a.a)(props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$enable-hover-media-query']) + '\n  ';
});

A.defaultProps = defaultProps;

exports.default = A;

// export composers