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

var _borderRadius = require('bootstrap-styled-mixins/lib/border-radius');

var _breakpoints = require('bootstrap-styled-mixins/lib/breakpoints');

var _conditional = require('bootstrap-styled-mixins/lib/conditional');

var _cards = require('bootstrap-styled-mixins/lib/cards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * CardGroup Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultProps = {
  tag: 'div',
  theme: {
    '$brand-primary': '#0275d8',
    '$brand-success': '#5cb85c',
    '$brand-info': '#5bc0de',
    '$brand-warning': '#f0ad4e',
    '$brand-danger': '#d9534f',
    '$brand-inverse': '#292b2c',
    '$card-spacer-x': '1.25rem',
    '$card-spacer-y': '.75rem',
    '$card-border-width': '1px',
    '$card-border-radius': '.25rem',
    '$card-border-color': 'rgba(0, 0, 0, 0.125)',
    '$card-border-radius-inner': '',
    '$card-cap-bg': '$gray-lightest',
    '$card-bg': '$white',
    '$card-link-hover-color': '$white',
    '$card-img-overlay-padding': '1.25rem',
    '$card-margin-y-halved': '((rmUnit(], UNIT.REM) / 2) + UNIT.REM',
    '$card-margin-x-halved': '((rmUnit(], UNIT.REM) / 2) + UNIT.REM',
    '$card-columns-count-md': '2',
    '$card-columns-gap-md': '1rem',
    '$card-columns-margin-md': '$card-spacer-y',
    '$card-columns-count-lg': '2',
    '$card-columns-gap-lg': '1.15rem',
    '$card-columns-margin-lg': '$card-spacer-y',
    '$card-columns-count-xl': '2',
    '$card-columns-gap-xl': '1.25rem',
    '$card-columns-margin-xl': '$card-spacer-y',
    '$card-columns-count-xxl': '3',
    '$card-columns-gap-xxl': '1.25rem',
    '$card-columns-margin-xxl': '$card-spacer-y',
    '$card-deck-margin': '(r, detectedUnit) / 2) + detectedUni',
    '$btn-primary-bg': '$brand-primary',
    '$btn-secondary-border': '#ccc',
    '$btn-info-bg': '$brand-info',
    '$btn-success-bg': '$brand-success',
    '$btn-warning-bg': '$brand-warning',
    '$btn-danger-bg': '$brand-danger',
    '$enable-rounded': false,
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
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$brand-primary': _propTypes2.default.string,
    '$brand-success': _propTypes2.default.string,
    '$brand-info': _propTypes2.default.string,
    '$brand-warning': _propTypes2.default.string,
    '$brand-danger': _propTypes2.default.string,
    '$brand-inverse': _propTypes2.default.string,
    '$card-spacer-x': _propTypes2.default.string,
    '$card-spacer-y': _propTypes2.default.string,
    '$card-border-width': _propTypes2.default.string,
    '$card-border-radius': _propTypes2.default.string,
    '$card-border-color': _propTypes2.default.string,
    '$card-border-radius-inner': _propTypes2.default.string,
    '$card-cap-bg': _propTypes2.default.string,
    '$card-bg': _propTypes2.default.string,
    '$card-link-hover-color': _propTypes2.default.string,
    '$card-img-overlay-padding': _propTypes2.default.string,
    '$card-margin-y-halved': _propTypes2.default.string,
    '$card-margin-x-halved': _propTypes2.default.string,
    '$card-columns-count-md': _propTypes2.default.string,
    '$card-columns-gap-md': _propTypes2.default.string,
    '$card-columns-margin-md': _propTypes2.default.string,
    '$card-columns-count-lg': _propTypes2.default.string,
    '$card-columns-gap-lg': _propTypes2.default.string,
    '$card-columns-margin-lg': _propTypes2.default.string,
    '$card-columns-count-xl': _propTypes2.default.string,
    '$card-columns-gap-xl': _propTypes2.default.string,
    '$card-columns-margin-xl': _propTypes2.default.string,
    '$card-columns-count-xxl': _propTypes2.default.string,
    '$card-columns-gap-xxl': _propTypes2.default.string,
    '$card-columns-margin-xxl': _propTypes2.default.string,
    '$card-deck-margin': _propTypes2.default.string,
    '$btn-primary-bg': _propTypes2.default.string,
    '$btn-secondary-border': _propTypes2.default.string,
    '$btn-info-bg': _propTypes2.default.string,
    '$btn-success-bg': _propTypes2.default.string,
    '$btn-warning-bg': _propTypes2.default.string,
    '$btn-danger-bg': _propTypes2.default.string,
    '$link-color': _propTypes2.default.string,
    '$link-decoration': _propTypes2.default.string,
    '$link-hover-color': _propTypes2.default.string,
    '$link-hover-decoration': _propTypes2.default.string,
    '$enable-rounded': _propTypes2.default.bool,
    '$enable-hover-media-query': _propTypes2.default.bool
  }),
  /**
   * Replace or remove a className from the component.
   * See example [here](https://www.npmjs.com/package/map-to-css-modules).
   */
  cssModule: _propTypes2.default.object
};

var CardGroupUnstyled = function (_React$Component) {
  _inherits(CardGroupUnstyled, _React$Component);

  function CardGroupUnstyled() {
    _classCallCheck(this, CardGroupUnstyled);

    return _possibleConstructorReturn(this, (CardGroupUnstyled.__proto__ || Object.getPrototypeOf(CardGroupUnstyled)).apply(this, arguments));
  }

  _createClass(CardGroupUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);

      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'card-group'), cssModule)
      }, attributes));
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return CardGroupUnstyled;
}(_react2.default.Component);

CardGroupUnstyled.defaultProps = defaultProps;
CardGroupUnstyled.propTypes = propTypes;


var CardGroup = (0, _styledComponents2.default)(CardGroupUnstyled).withConfig({
  displayName: 'CardGroup'
})(['', ''], function (props) {
  return '\n    ' + (0, _cards.card)(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$card-spacer-y'], props.theme['$card-spacer-x'], props.theme['$card-bg'], props.theme['$card-border-width'], props.theme['$card-border-color'], props.theme['$card-border-radius'], props.theme['$card-margin-y-halved'], props.theme['$card-margin-x-halved'], props.theme['$card-cap-bg'], props.theme['$card-border-radius-inner'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$btn-primary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-bg'], props.theme['$btn-success-bg'], props.theme['$btn-warning-bg'], props.theme['$btn-danger-bg'], props.theme['$card-link-hover-color'], props.theme['$card-img-overlay-padding'], props.theme['$card-inverse-bg-color'], props.theme['$card-inverse-border-color']) + '\n    /*\n      Card group\n    */\n      ' + (0, _breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], '\n          &.card-group {\n            display: flex;\n            flex-flow: row wrap;\n        \n            .card {\n              flex: 1 0 0;\n        \n              + .card {\n                margin-left: 0;\n                border-left: 0;\n              }\n        \n            ' + (0, _conditional.ifThen)(props.theme['$enable-rounded'], '\n                &:first-child {\n                  ' + (0, _borderRadius.borderRightRadius)(props.theme['$enable-rounded'], '0') + '\n                  .card-img-top {\n                    border-top-right-radius: 0;\n                  }\n                  \n                  .card-img-bottom {\n                    border-bottom-right-radius: 0;\n                  }\n                }\n              \n                &:last-child {\n                  ' + (0, _borderRadius.borderLeftRadius)(props.theme['$enable-rounded'], '0') + '\n                  \n                  .card-img-top {\n                    border-top-left-radius: 0;\n                  }\n                  \n                  .card-img-bottom {\n                    border-bottom-left-radius: 0;\n                  }\n                }\n                \n                &:not(:first-child):not(:last-child) {\n                  border-radius: 0;\n        \n                  .card-img-top,\n                  .card-img-bottom {\n                    border-radius: 0;\n                  }\n                }\n              ') + '  \n          }\n        }\n      ') + '\n  ';
});

CardGroup.defaultProps = defaultProps;
CardGroup.propTypes = propTypes;

/** @component */
exports.default = CardGroup;
module.exports = exports['default'];