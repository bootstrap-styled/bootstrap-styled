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

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _borderRadius = require('bootstrap-styled-mixins/lib/border-radius');

var _breakpoints = require('bootstrap-styled-mixins/lib/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Jumbotron (Slider)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  tag: 'div',
  theme: {
    '$enable-rounded': true,
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$border-radius-lg': '.3rem',
    '$jumbotron-padding': '2rem',
    '$jumbotron-bg': '#eceeef'
  }
};
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Toggles disabled CSS style. */
  fluid: _propTypes2.default.bool,
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$enable-rounded': _propTypes2.default.bool,
    '$grid-breakpoints': _propTypes2.default.object,
    '$border-radius-lg': _propTypes2.default.string,
    '$jumbotron-padding': _propTypes2.default.string,
    '$jumbotron-bg': _propTypes2.default.string
  }),
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var JumbotronUnstyled = function (_React$Component) {
  _inherits(JumbotronUnstyled, _React$Component);

  function JumbotronUnstyled() {
    _classCallCheck(this, JumbotronUnstyled);

    return _possibleConstructorReturn(this, (JumbotronUnstyled.__proto__ || Object.getPrototypeOf(JumbotronUnstyled)).apply(this, arguments));
  }

  _createClass(JumbotronUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          fluid = _omit.fluid,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'fluid']);

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);

      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return JumbotronUnstyled;
}(_react2.default.Component);
/**
 * A classic `<Jumbotron />` component.
 * You can also add `Button Dropdown` and customize `Sizing`.
 */


JumbotronUnstyled.defaultProps = defaultProps;
JumbotronUnstyled.propTypes = propTypes;
var Jumbotron = (0, _styledComponents2.default)(JumbotronUnstyled).withConfig({
  displayName: 'Jumbotron'
})(['', ''], function (props) {
  return '\n    &.jumbotron {\n      padding: ' + props.theme['$jumbotron-padding'] + ' calc(' + props.theme['$jumbotron-padding'] + ' / 2);\n      margin-bottom: ' + props.theme['$jumbotron-padding'] + ';\n      background-color: ' + props.theme['$jumbotron-bg'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius-lg']) + '\n    \n      ' + (0, _breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], 'padding: calc(' + props.theme['$jumbotron-padding'] + ' * 2) ' + props.theme['$jumbotron-padding'] + ';') + '  \n    }\n\n    & .jumbotron-hr {\n      border-top-color: ' + (0, _color2.default)(props.theme['$jumbotron-bg']).darken(0.1).toString() + ';\n    }\n    \n    &.jumbotron-fluid {\n      padding-right: 0;\n      padding-left: 0;\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], '0') + '\n    }\n  ';
});

Jumbotron.defaultProps = defaultProps;
Jumbotron.propTypes = propTypes;

/** @component */
exports.default = Jumbotron;
module.exports = exports['default'];