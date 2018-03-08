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

var _media = require('bootstrap-styled-mixins/lib/media');

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A list item.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  theme: {
    '$list-inline-padding': '5px'
  }
};
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<Li />` component. */
  children: _propTypes2.default.node,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$list-inline-padding': _propTypes2.default.string
  }),
  /** Toggles disabled CSS style. */
  disabled: _propTypes2.default.bool,
  /** Toggles separator CSS display. */
  separator: _propTypes2.default.bool,
  /** Toggles active CSS display. */
  active: _propTypes2.default.bool,
  /** Toggles inline CSS display. */
  inline: _propTypes2.default.bool,
  /** Toggles media CSS style. */
  media: _propTypes2.default.bool,
  /** Toggles 'dropdown-item' CSS style. */
  'dropdown-item': _propTypes2.default.bool,
  /** Toggles 'dropdown-header' CSS style. */
  'dropdown-header': _propTypes2.default.bool,
  /** Toggles 'dropdown-footer' CSS style. */
  'dropdown-footer': _propTypes2.default.bool,
  /**
   * Replace or remove a className from the component.
   * See example [here](https://www.npmjs.com/package/map-to-css-modules).
   */
  cssModule: _propTypes2.default.object
};

var LiUnstyled = function (_React$Component) {
  _inherits(LiUnstyled, _React$Component);

  function LiUnstyled() {
    _classCallCheck(this, LiUnstyled);

    return _possibleConstructorReturn(this, (LiUnstyled.__proto__ || Object.getPrototypeOf(LiUnstyled)).apply(this, arguments));
  }

  _createClass(LiUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          inline = _omit.inline,
          separator = _omit.separator,
          media = _omit.media,
          dropdownItem = _omit['dropdown-item'],
          dropdownHeader = _omit['dropdown-header'],
          dropdownFooter = _omit['dropdown-footer'],
          attributes = _objectWithoutProperties(_omit, ['className', 'children', 'inline', 'separator', 'media', 'dropdown-item', 'dropdown-header', 'dropdown-footer']);

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, separator ? 'dropdown-divider' : false, dropdownItem ? 'dropdown-item' : false, dropdownItem ? 'dropdown-item' : false, dropdownHeader ? 'dropdown-header' : false, dropdownFooter ? 'dropdown-footer' : false, inline ? 'list-inline-item' : false, media ? 'media' : false));
      return _react2.default.createElement(
        'li',
        _extends({
          className: classes
        }, attributes),
        children
      );
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return LiUnstyled;
}(_react2.default.Component);

/**
 * Replace or remove a className from the component.
 * See example [here](https://www.npmjs.com/package/map-to-css-modules).
 */


LiUnstyled.defaultProps = defaultProps;
LiUnstyled.propTypes = propTypes;
var Li = (0, _styledComponents2.default)(LiUnstyled).withConfig({
  displayName: 'Li'
})(['', ''], function (props) {
  return '\n    &.list-inline-item {\n      display: inline-block;\n    \n      &:not(:last-child) {\n        margin-right: ' + props.theme['$list-inline-padding'] + ';\n      }\n    }\n    \n    ' + (0, _media.media)() + '\n  ';
});

Li.defaultProps = defaultProps;
Li.propTypes = propTypes;

/** @component */
exports.default = Li;
module.exports = exports['default'];