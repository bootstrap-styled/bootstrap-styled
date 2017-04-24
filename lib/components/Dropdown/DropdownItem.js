'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tools = require('utils/tools');

var _H = require('../H6');

var _H2 = _interopRequireDefault(_H);

var _A = require('../A');

var _A2 = _interopRequireDefault(_A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  tag: _A2.default
};

var DropdownItem = function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  function DropdownItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled || _this.props.header || _this.props.divider) {
        e.preventDefault();
        return;
      }

      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
      _this.context.toggle();
    }, _this.getTabIndex = function () {
      if (_this.props.disabled || _this.props.header || _this.props.divider) {
        return '-1';
      }
      return '0';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropdownItem, [{
    key: 'render',
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          divider = _props.divider,
          Tag = _props.tag,
          header = _props.header,
          props = _objectWithoutProperties(_props, ['className', 'cssModule', 'divider', 'tag', 'header']);

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, {
        disabled: props.disabled,
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider
      }), cssModule);

      if (Tag === _A2.default) {
        if (header) {
          Tag = _H2.default;
        } else if (divider) {
          Tag = 'div';
        }
      }

      return _react2.default.createElement(Tag, _extends({}, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }));
    }
  }]);

  return DropdownItem;
}(_react2.default.Component);

DropdownItem.contextTypes = {
  toggle: _react.PropTypes.func
};


DropdownItem.defaultProps = defaultProps;

exports.default = DropdownItem;