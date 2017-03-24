'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _tools = require('../../styled/utilities/tools');

var _hover = require('../../styled/mixins/hover');

var _borderRadius = require('../../styled/mixins/border-radius');

var _cards = require('../../styled/mixins/cards');

var _conditional = require('../../styled/mixins/conditional');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Card Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultProps = {
  theme: _theme2.default,
  tag: 'div'
};

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          color = _props.color,
          block = _props.block,
          inverse = _props.inverse,
          outline = _props.outline,
          backgroundColor = _props.backgroundColor,
          borderColor = _props.borderColor,
          theme = _props.theme,
          Tag = _props.tag,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'color', 'block', 'inverse', 'outline', 'backgroundColor', 'borderColor', 'theme', 'tag']);

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, 'card', inverse ? 'card-inverse' : false, block ? 'card-block' : false, color ? 'card' + (outline ? '-outline' : '') + '-' + color : false), cssModule);

      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Card;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Card = (0, _styledComponents2.default)(Card).withConfig({
  displayName: 'Card__Card',
  componentId: 'Card__Card-1u7jvmp'
})(['', ''], function (props) {
  return '\n    \n    /*\n    Base styles\n    */\n    &.card {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + props.theme['$card-bg'] + ';\n      border: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n      \n      ' + (0, _conditional.ifThen)(props.width, 'width: ' + props.width + ';') + '\n      ' + (0, _conditional.ifThen)(props.backgroundColor, 'background-color: ' + props.backgroundColor + ';') + '\n      ' + (0, _conditional.ifThen)(props.borderColor, 'border-color: ' + props.borderColor + ';') + '\n    }\n    \n    &.card-block,\n    & .card-block {\n      flex: 1 1 auto;\n      padding: ' + props.theme['$card-spacer-x'] + ';\n    }\n    \n    & .card-title {\n      margin-bottom: ' + props.theme['$card-spacer-y'] + ';\n    }\n    \n    & .card-subtitle {\n      margin-top: -' + props.theme['$card-margin-y-halved'] + ';\n      margin-bottom: 0;\n    }\n    \n    & .card-text:last-child {\n      margin-bottom: 0;\n    }\n   \n    & .card-link {\n      ' + (0, _hover.hover)('\n        text-decoration: none;\n      ') + '\n    \n      + .card-link {\n        margin-left: ' + props.theme['$card-spacer-x'] + ';\n      }\n    }\n    \n    &.card {\n      > .list-group:first-child {\n        .list-group-item:first-child {\n          ' + (0, _borderRadius.borderTopRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n        }\n      }\n    \n      > .list-group:last-child {\n        .list-group-item:last-child {\n          ' + (0, _borderRadius.borderBottomRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n        }\n      }\n    }\n    \n    \n    /*\n     Optional textual caps\n    */\n    \n    & .card-header {\n      padding: ' + props.theme['$card-spacer-y'] + ' ' + props.theme['$card-spacer-x'] + ';\n      margin-bottom: 0; /* Removes the default margin-bottom of <hN> */\n      background-color: ' + props.theme['$card-cap-bg'] + ';\n      border-bottom: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n    \n      &:first-child {\n        ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner'], props.theme['$card-border-radius-inner'], '0', '0') + '\n      }\n    }\n    \n    & .card-footer {\n      padding: ' + props.theme['$card-spacer-y'] + ' ' + props.theme['$card-spacer-x'] + ';\n      background-color: ' + props.theme['$card-cap-bg'] + ';\n      border-top: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n    \n      &:last-child {\n        ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], '0', '0', props.theme['$card-border-radius-inner'], props.theme['$card-border-radius-inner']) + '\n      }\n    }\n    \n    \n    /*\n     Header navs\n    */\n    \n    & .card-header-tabs {\n      margin-right: -' + props.theme['$card-margin-x-halved'] + ';\n      margin-bottom: -' + props.theme['$card-spacer-y'] + ';\n      margin-left: -' + props.theme['$card-margin-x-halved'] + ';\n      border-bottom: 0;\n    }\n    \n    & .card-header-pills {\n      margin-right: -' + props.theme['$card-margin-x-halved'] + ';\n      margin-left: -' + props.theme['$card-margin-x-halved'] + ';\n    }\n    \n    \n    /*\n     Background variations\n    */\n    \n    &.card-primary {\n      ' + (0, _cards.cardVariant)(props.theme['$brand-primary'], props.theme['$brand-primary']) + '\n    }\n    &.card-success {\n      ' + (0, _cards.cardVariant)(props.theme['$brand-success'], props.theme['$brand-success']) + '\n    }\n    &.card-info {\n      ' + (0, _cards.cardVariant)(props.theme['$brand-info'], props.theme['$brand-info']) + '\n    }\n    &.card-warning {\n      ' + (0, _cards.cardVariant)(props.theme['$brand-warning'], props.theme['$brand-warning']) + '\n    }\n    &.card-danger {\n      ' + (0, _cards.cardVariant)(props.theme['$brand-danger'], props.theme['$brand-danger']) + '\n    }\n    \n    /* Remove all backgrounds */\n    &.card-outline-primary {\n      ' + (0, _cards.cardOutlineVariant)(props.theme['$btn-primary-bg']) + '\n    }\n    &.card-outline-secondary {\n      ' + (0, _cards.cardOutlineVariant)(props.theme['$btn-secondary-border']) + '\n    }\n    &.card-outline-info {\n      ' + (0, _cards.cardOutlineVariant)(props.theme['$btn-info-bg']) + '\n    }\n    &.card-outline-success {\n      ' + (0, _cards.cardOutlineVariant)(props.theme['$btn-success-bg']) + '\n    }\n    &.card-outline-warning {\n      ' + (0, _cards.cardOutlineVariant)(props.theme['$btn-warning-bg']) + '\n    }\n    &.card-outline-danger {\n      ' + (0, _cards.cardOutlineVariant)(props.theme['$btn-danger-bg']) + '\n    }\n    \n    /*\n     Inverse text within a card for use with dark backgrounds\n    */\n    \n    &.card-inverse {\n      ' + (0, _cards.cardInverse)(props.theme['$enable-hover-media-query'], props.theme['$card-link-hover-color']) + '\n    }\n    \n    /*\n     Blockquote\n    */\n    \n    & .card-blockquote {\n      padding: 0;\n      margin-bottom: 0;\n      border-left: 0;\n    }\n    \n    /* Card image */\n    & .card-img {\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n    \n    & .card-img-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: ' + props.theme['$card-img-overlay-padding'] + ';\n    }\n    \n    \n    \n    /* Card image caps */\n    & .card-img-top {\n      ' + (0, _borderRadius.borderTopRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n    \n    & .card-img-bottom {\n      ' + (0, _borderRadius.borderBottomRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n  ';
});

Card.defaultProps = defaultProps;

exports.default = Card;