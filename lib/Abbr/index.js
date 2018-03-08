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

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  tag: 'abbr',
  initialism: false
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
  /**
   * Title used to display abbreviation text.
   */
  title: _propTypes2.default.string.isRequired,
  /**
   * Toggles original Bootstrap CSS
   */
  initialism: _propTypes2.default.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var AbbrUnstyled = function (_React$Component) {
  _inherits(AbbrUnstyled, _React$Component);

  function AbbrUnstyled() {
    _classCallCheck(this, AbbrUnstyled);

    return _possibleConstructorReturn(this, (AbbrUnstyled.__proto__ || Object.getPrototypeOf(AbbrUnstyled)).apply(this, arguments));
  }

  _createClass(AbbrUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _props = this.props,
          className = _props.className,
          initialism = _props.initialism,
          title = _props.title,
          Tag = _props.tag,
          cssModule = _props.cssModule,
          attributes = _objectWithoutProperties(_props, ['className', 'initialism', 'title', 'tag', 'cssModule']);

      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, {
          initialism: initialism
        }), cssModule),
        title: title
      }, attributes));
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return AbbrUnstyled;
}(_react2.default.Component);
/**
 * An abbreviation tag component used to display abbreviated words and acronyms definition
 */


AbbrUnstyled.defaultProps = defaultProps;
AbbrUnstyled.propTypes = propTypes;
var Abbr = (0, _styledComponents2.default)(AbbrUnstyled).withConfig({
  displayName: 'Abbr'
})(['&[title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;border-bottom:0;}&.initialism{font-size:90%;text-transform:uppercase;}']);

Abbr.defaultProps = defaultProps;
Abbr.propTypes = propTypes;

/** @component */
exports.default = Abbr;
module.exports = exports['default'];