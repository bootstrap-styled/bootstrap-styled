'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* A Select (Box) */

var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<Select />` component. */
  children: _propTypes2.default.node
};

var SelectUnstyled = function (_React$Component) {
  _inherits(SelectUnstyled, _React$Component);

  function SelectUnstyled() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectUnstyled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectUnstyled.__proto__ || Object.getPrototypeOf(SelectUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      className: null

      // Android browser fix: https://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#android-stock-browser
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */

  /* eslint-enable react/no-unused-prop-types */

  _createClass(SelectUnstyled, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var nua = navigator.userAgent;
      var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
      if (isAndroid) {
        this.setState({
          className: this.props.className.replace(/\bform-control\b/, '')
        });
      } else {
        this.setState({
          className: this.props.className
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['className']),
          children = _omit.children,
          rest = _objectWithoutProperties(_omit, ['children']);

      return _react2.default.createElement(
        'select',
        _extends({
          className: (0, _classnames2.default)(this.state.className, 'select')
        }, rest),
        children
      );
    }
  }]);

  return SelectUnstyled;
}(_react2.default.Component);
/**
 * `<Select />` is used to create a drop-down list.
 */


SelectUnstyled.propTypes = propTypes;
var Select = (0, _styledComponents2.default)(SelectUnstyled).withConfig({
  displayName: 'Select'
})(['&.select{touch-action:manipulation;line-height:inherit;}&:disabled{color:graytext;}']);

Select.propTypes = propTypes;

/** @component */
exports.default = Select;
module.exports = exports['default'];