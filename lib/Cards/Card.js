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

var _hover = require('bootstrap-styled-mixins/lib/hover');

var _borderRadius = require('bootstrap-styled-mixins/lib/border-radius');

var _cards = require('bootstrap-styled-mixins/lib/cards');

var _conditional = require('bootstrap-styled-mixins/lib/conditional');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Card Component
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
  /** Color variables. Can be: */
  color: _propTypes2.default.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  /** Toggles inverse CSS color. */
  inverse: _propTypes2.default.bool,
  /** Toggles block CSS display. */
  block: _propTypes2.default.bool,
  /** Toggles outline CSS styles. */
  outline: _propTypes2.default.bool,
  /** Width size in percent. */
  width: _propTypes2.default.string,
  /** Use different background color with valid CSS. */
  backgroundColor: _propTypes2.default.string,
  /** Use different border color with valid CSS. */
  borderColor: _propTypes2.default.string,
  /**
   * Replace or remove a className from the component.
   * See example [here](https://www.npmjs.com/package/map-to-css-modules).
   */
  cssModule: _propTypes2.default.object
};

var CardUnstyled = function (_React$Component) {
  _inherits(CardUnstyled, _React$Component);

  function CardUnstyled() {
    _classCallCheck(this, CardUnstyled);

    return _possibleConstructorReturn(this, (CardUnstyled.__proto__ || Object.getPrototypeOf(CardUnstyled)).apply(this, arguments));
  }

  _createClass(CardUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _cn;

      var _omit = (0, _lodash2.default)(this.props, ['theme', 'backgroundColor', 'borderColor', 'width']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          color = _omit.color,
          block = _omit.block,
          inverse = _omit.inverse,
          outline = _omit.outline,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'color', 'block', 'inverse', 'outline', 'tag']);

      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'card', (_cn = {
          inverse: inverse,
          'card-block': block
        }, _defineProperty(_cn, 'card-' + color, color), _defineProperty(_cn, 'card-' + (outline ? '-outline' : '') + '-' + color, outline), _cn)), cssModule)
      }, attributes));
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return CardUnstyled;
}(_react2.default.Component);

/**
 * Use our `<Card />` blocks with `<CardImg />`, `<CardBlock />`, `<CardTitle />`, `<CardSubtitle />` and `<CardText />` components  to emphasize part of your page.
 * You can also use `width` attribute.
 */


CardUnstyled.defaultProps = defaultProps;
CardUnstyled.propTypes = propTypes;
var Card = (0, _styledComponents2.default)(CardUnstyled).withConfig({
  displayName: 'Card'
})(['', ''], function (props) {
  return '\n    \n    /*\n    Base styles\n    */\n    &.card {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + props.theme['$card-bg'] + ';\n      border: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n      \n      ' + (0, _conditional.ifThen)(props.width, 'width: ' + props.width + ';') + '\n      ' + (0, _conditional.ifThen)(props.backgroundColor, 'background-color: ' + props.backgroundColor + ';') + '\n      ' + (0, _conditional.ifThen)(props.borderColor, 'border-color: ' + props.borderColor + ';') + '\n    }\n    \n    &.card-block,\n    & .card-block {\n      flex: 1 1 auto;\n      padding: ' + props.theme['$card-spacer-x'] + ';\n    }\n    \n    & .card-title {\n      margin-bottom: ' + props.theme['$card-spacer-y'] + ';\n    }\n    \n    & .card-subtitle {\n      margin-top: -' + props.theme['$card-margin-y-halved'] + ';\n      margin-bottom: 0;\n    }\n    \n    & .card-text:last-child {\n      margin-bottom: 0;\n    }\n   \n    & .card-link {\n      ' + (0, _hover.hover)('\n        text-decoration: none;\n      ') + '\n    \n      + .card-link {\n        margin-left: ' + props.theme['$card-spacer-x'] + ';\n      }\n    }\n    \n    &.card {\n      > .list-group:first-child {\n        .list-group-item:first-child {\n          ' + (0, _borderRadius.borderTopRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n        }\n      }\n    \n      > .list-group:last-child {\n        .list-group-item:last-child {\n          ' + (0, _borderRadius.borderBottomRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n        }\n      }\n    }\n    \n    \n    /*\n     Optional textual caps\n    */\n    \n    & .card-header {\n      padding: ' + props.theme['$card-spacer-y'] + ' ' + props.theme['$card-spacer-x'] + ';\n      margin-bottom: 0; /* Removes the default margin-bottom of <hN> */\n      background-color: ' + props.theme['$card-cap-bg'] + ';\n      border-bottom: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n    \n      &:first-child {\n        ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner'], props.theme['$card-border-radius-inner'], '0', '0') + '\n      }\n    }\n    \n    & .card-footer {\n      padding: ' + props.theme['$card-spacer-y'] + ' ' + props.theme['$card-spacer-x'] + ';\n      background-color: ' + props.theme['$card-cap-bg'] + ';\n      border-top: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n    \n      &:last-child {\n        ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], '0', '0', props.theme['$card-border-radius-inner'], props.theme['$card-border-radius-inner']) + '\n      }\n    }\n    \n    \n    /*\n     Header navs\n    */\n    \n    & .card-header-tabs {\n      margin-right: -' + props.theme['$card-margin-x-halved'] + ';\n      margin-bottom: -' + props.theme['$card-spacer-y'] + ';\n      margin-left: -' + props.theme['$card-margin-x-halved'] + ';\n      border-bottom: 0;\n    }\n    \n    & .card-header-pills {\n      margin-right: -' + props.theme['$card-margin-x-halved'] + ';\n      margin-left: -' + props.theme['$card-margin-x-halved'] + ';\n    }\n    \n    \n    /*\n     Background variations\n    */\n    \n    &.card-primary {\n      ' + (0, _cards.cardVariant)(props.theme['$brand-primary'], props.theme['$brand-primary']) + '\n    }\n    &.card-success {\n      ' + (0, _cards.cardVariant)(props.theme['$brand-success'], props.theme['$brand-success']) + '\n    }\n    &.card-info {\n      ' + (0, _cards.cardVariant)(props.theme['$brand-info'], props.theme['$brand-info']) + '\n    }\n    &.card-warning {\n      ' + (0, _cards.cardVariant)(props.theme['$brand-warning'], props.theme['$brand-warning']) + '\n    }\n    &.card-danger {\n      ' + (0, _cards.cardVariant)(props.theme['$brand-danger'], props.theme['$brand-danger']) + '\n    }\n    \n    /* Remove all backgrounds */\n    &.card-outline-primary {\n      ' + (0, _cards.cardOutlineVariant)(props.theme['$btn-primary-bg']) + '\n    }\n    &.card-outline-secondary {\n      ' + (0, _cards.cardOutlineVariant)(props.theme['$btn-secondary-border']) + '\n    }\n    &.card-outline-info {\n      ' + (0, _cards.cardOutlineVariant)(props.theme['$btn-info-bg']) + '\n    }\n    &.card-outline-success {\n      ' + (0, _cards.cardOutlineVariant)(props.theme['$btn-success-bg']) + '\n    }\n    &.card-outline-warning {\n      ' + (0, _cards.cardOutlineVariant)(props.theme['$btn-warning-bg']) + '\n    }\n    &.card-outline-danger {\n      ' + (0, _cards.cardOutlineVariant)(props.theme['$btn-danger-bg']) + '\n    }\n    \n    /*\n     Inverse text within a card for use with dark backgrounds\n    */\n    \n    &.card-inverse {\n      ' + (0, _cards.cardInverse)(props.theme['$enable-hover-media-query'], props.theme['$card-link-hover-color']) + '\n    }\n    \n    /*\n     Blockquote\n    */\n    \n    & .card-blockquote {\n      padding: 0;\n      margin-bottom: 0;\n      border-left: 0;\n    }\n    \n    /* Card image */\n    & .card-img {\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n    \n    & .card-img-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: ' + props.theme['$card-img-overlay-padding'] + ';\n    }\n    \n    \n    \n    /* Card image caps */\n    & .card-img-top {\n      ' + (0, _borderRadius.borderTopRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n    \n    & .card-img-bottom {\n      ' + (0, _borderRadius.borderBottomRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n  ';
});

Card.defaultProps = defaultProps;
Card.propTypes = propTypes;

/** @component */
exports.default = Card;
module.exports = exports['default'];