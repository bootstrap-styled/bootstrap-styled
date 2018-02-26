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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _a = require('bootstrap-styled-mixins/lib/a');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  tag: 'a',
  theme: {
    '$link-color': '#0275d8',
    '$link-decoration': 'none',
    '$link-hover-color': '#014C8D',
    '$link-hover-decoration': 'underline',
    '$enable-hover-media-query': false
  }
};
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /** Theme variables. */
  theme: _propTypes2.default.shape({
    '$link-color': _propTypes2.default.string,
    '$link-decoration': _propTypes2.default.string,
    '$link-hover-color': _propTypes2.default.string,
    '$link-hover-decoration': _propTypes2.default.string,
    '$enable-hover-media-query': _propTypes2.default.bool
  }),
  color: _propTypes2.default.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  /**
   * Replace or remove a className from the component.
   * See example [here](https://www.npmjs.com/package/map-to-css-modules).
   */
  cssModule: _propTypes2.default.object
};

var AUnstyled = function (_React$Component) {
  _inherits(AUnstyled, _React$Component);

  function AUnstyled() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AUnstyled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AUnstyled.__proto__ || Object.getPrototypeOf(AUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */

  /* eslint-enable react/no-unused-prop-types */

  _createClass(AUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          color = _omit.color,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'color', 'tag']);

      var focus = this.state.focus;


      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, _defineProperty({
          focus: focus
        }, 'text-' + color, color)), cssModule)
      }, attributes));
    }
  }]);

  return AUnstyled;
}(_react2.default.Component);

/**
 * An anchor tag component used to direct towards a page outside of the application.
 */


AUnstyled.defaultProps = defaultProps;
AUnstyled.propTypes = propTypes;
var A = (0, _styledComponents2.default)(AUnstyled).withConfig({
  displayName: 'A'
})(['', ''], function (props) {
  return '\n    ' + (0, _a.a)(props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$enable-hover-media-query']) + '\n  ';
});

A.defaultProps = defaultProps;
A.propTypes = propTypes;

/** @component */
exports.default = A;
module.exports = exports['default'];