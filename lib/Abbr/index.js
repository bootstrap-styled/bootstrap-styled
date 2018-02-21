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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Abbr component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var AbbrUnstyled = function (_React$Component) {
  _inherits(AbbrUnstyled, _React$Component);

  function AbbrUnstyled() {
    _classCallCheck(this, AbbrUnstyled);

    return _possibleConstructorReturn(this, (AbbrUnstyled.__proto__ || Object.getPrototypeOf(AbbrUnstyled)).apply(this, arguments));
  }

  _createClass(AbbrUnstyled, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _props = this.props,
          className = _props.className,
          initialism = _props.initialism,
          title = _props.title,
          Tag = _props.tag,
          attributes = _objectWithoutProperties(_props, ['className', 'initialism', 'title', 'tag']);

      return _react2.default.createElement(Tag, _extends({
        className: (0, _classnames2.default)(className, {
          initialism: initialism
        }),
        title: title
      }, attributes));
    }
  }]);

  return AbbrUnstyled;
}(_react2.default.Component);

AbbrUnstyled.defaultProps = {
  tag: 'abbr'
};
AbbrUnstyled.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  className: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired,
  tag: _propTypes2.default.string,
  initialism: _propTypes2.default.bool
  /* eslint-enable react/no-unused-prop-types */
};


var Abbr = (0, _styledComponents2.default)(AbbrUnstyled).withConfig({
  displayName: 'Abbr'
})(['&[title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;border-bottom:0;}&.initialism{font-size:90%;text-transform:uppercase;}']);

/** @component */
exports.default = Abbr;
module.exports = exports['default'];