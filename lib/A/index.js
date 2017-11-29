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

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _a = require('bootstrap-styled-mixins/lib/a');

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A link to a certain page, an anchor tag
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultProps = {
  tag: 'a',
  theme: (0, _theme.makeTheme)()
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

  _createClass(AUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          active = _omit.active,
          disabled = _omit.disabled,
          cssModule = _omit.cssModule,
          color = _omit.color,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'active', 'disabled', 'cssModule', 'color', 'tag']);

      var focus = this.state.focus;


      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, _defineProperty({
          focus: focus,
          active: active,
          disabled: disabled
        }, 'text-' + color, color)), cssModule)
      }, attributes));
    }
  }]);

  return AUnstyled;
}(_react2.default.Component);

AUnstyled.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  tag: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  color: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
  /* eslint-enable react/no-unused-prop-types */
};


var A = (0, _styledComponents2.default)(AUnstyled).withConfig({
  displayName: 'A'
})(['', ''], function (props) {
  return '\n    ' + (0, _a.a)(props.theme['$enable-hover-media-query'], props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration']) + '\n  ';
});

A.defaultProps = defaultProps;

exports.default = A;

// export composers