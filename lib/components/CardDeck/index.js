var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CardDeck Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from '../../config';
import { clearfix } from '../../styled/mixins/clearfix';
import { hover } from '../../styled/mixins/hover';
import { borderRadius, borderTopRadius, borderBottomRadius } from '../../styled/mixins/border-radius';
import { cardVariant, cardOutlineVariant, cardInverse } from '../../styled/mixins/cards';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import { ifElse } from '../../styled/mixins/conditional';

var defaultProps = { theme: theme };

var CardDeck = function (_React$Component) {
  _inherits(CardDeck, _React$Component);

  function CardDeck() {
    _classCallCheck(this, CardDeck);

    return _possibleConstructorReturn(this, (CardDeck.__proto__ || Object.getPrototypeOf(CardDeck)).apply(this, arguments));
  }

  _createClass(CardDeck, [{
    key: 'render',
    value: function render() {
      // default class
      var classConfigList = ['card-deck'];

      return _jsx('div', {
        className: cn(this.props.className, classConfigList)
      }, void 0, this.props.children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return CardDeck;
}(React.Component);

// eslint-disable-next-line no-class-assign


CardDeck = styled(CardDeck)(_templateObject, function (props) {
  return '\n\n    \n    /* Card set\n    \n    Heads up! We do some funky style resetting here for margins across our two\n    variations (one flex, one table). Individual cards have margin-bottom by\n    default, but they\'re ignored due to table styles. For a consistent design,\n    we\'ve done the same to the flex variation.\n    \n    Those changes are noted by \'// Margin balancing\'.\n    */\n    &.card-deck{\n      ' + ifElse(props.theme['$enable-flex'], mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], '\n            display: flex;\n            flex-flow: row wrap;\n            margin-right: -' + props.theme['$card-deck-margin'] + ';\n            margin-bottom: ' + props.theme['$card-spacer-y'] + '; /* Margin balancing */\n            margin-left: -' + props.theme['$card-deck-margin'] + ';\n          \n            & .card {\n              flex: 1 0 0;\n              margin-right: ' + props.theme['$card-deck-margin'] + ';\n              margin-bottom: 0; /* Margin balancing */\n              margin-left: ' + props.theme['$card-deck-margin'] + ';\n            }\n            \n          '), mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], '\n      \n            display: table;\n            width: 100%;\n            margin-bottom: ' + props.theme['$card-spacer-y'] + '; /* Margin balancing */\n            table-layout: fixed;\n            border-spacing: ' + props.theme['$space-between-cards'] + ' 0;\n            \n            & .card {\n              display: table-cell;\n              margin-bottom: 0; /* Margin balancing */\n              vertical-align: top;\n            }\n          ')) + '\n    }\n\n    /*\n     Card\n    */\n    ' + mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], '\n        & .card-columns {\n          column-count: 3;\n          column-gap: ' + props.theme['$card-columns-sm-up-column-gap'] + ';\n      \n          .card {\n            display: inline-block; /* Don\'t let them vertically span multiple columns */\n            width: 100%; /* Don\'t let them exceed the column width */\n          }\n        }\n      ') + '\n  \n    & .card {\n      position: relative;\n      display: block;\n      margin-bottom:  ' + props.theme['$card-spacer-y'] + ';\n      background-color: ' + props.theme['$card-bg'] + ';\n      /* border: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + '; */\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + ';\n      border: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n    }\n  \n    & .card-block {\n      ' + clearfix() + ';\n      padding: ' + props.theme['$card-spacer-x'] + ';\n    }\n    \n    & .card-title {\n      margin-bottom: ' + props.theme['$card-spacer-y'] + ';\n    }\n    \n    & .card-subtitle {\n      margin-top: -' + props.theme['$card-margin-y-halved'] + ';\n      margin-bottom: 0;\n    }\n    \n    & .card-text:last-child {\n      margin-bottom: 0;\n    }\n   \n    & .card-link {\n      ' + hover('\n        text-decoration: none;;\n      ') + '\n    \n      + .card-link {\n        margin-left: ' + props.theme['$card-spacer-x'] + ';\n      }\n    }\n    \n    & .card {\n      > .list-group:first-child {\n        .list-group-item:first-child {\n          ' + borderTopRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n        }\n      }\n    \n      > .list-group:last-child {\n        .list-group-item:last-child {\n          ' + borderBottomRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n        }\n      }\n    }\n    \n    \n    /*\n     Optional textual caps\n    */\n    \n    & .card-header {\n      ' + clearfix() + ';\n      padding: ' + props.theme['$card-spacer-y'] + ' ' + props.theme['$card-spacer-x'] + ';\n      margin-bottom: 0; /* Removes the default margin-bottom of <hN> */\n      background-color: ' + props.theme['$card-cap-bg'] + ';\n      border-bottom: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n    \n      &:first-child {\n        ' + borderRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner'], props.theme['$card-border-radius-inner'], '0', '0') + ';\n      }\n    }\n    \n    & .card-footer {\n      ' + clearfix() + ';\n      padding: ' + props.theme['$card-spacer-y'] + ' ' + props.theme['$card-spacer-x'] + ';\n      background-color: ' + props.theme['$card-cap-bg'] + ';\n      border-top: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n    \n      &:last-child {\n        ' + borderRadius(props.theme['$enable-rounded'], '0', '0', props.theme['$card-border-radius-inner'], props.theme['$card-border-radius-inner']) + ';\n      }\n    }\n    \n    \n    /*\n     Header navs\n    */\n    \n    & .card-header-tabs {\n      margin-right: -' + props.theme['$card-margin-x-halved'] + ';\n      margin-bottom: -' + props.theme['$card-spacer-y'] + ';\n      margin-left: -' + props.theme['$card-margin-x-halved'] + ';\n      border-bottom: 0;\n    }\n    \n    & .card-header-pills {\n      margin-right: -' + props.theme['$card-margin-x-halved'] + ';\n      margin-left: -' + props.theme['$card-margin-x-halved'] + ';\n    }\n    \n    \n    /*\n     Background variations\n    */\n    \n    & .card-primary {\n      ' + cardVariant(props.theme['$brand-primary'], props.theme['$brand-primary']) + '\n    }\n    & .card-success {\n      ' + cardVariant(props.theme['$brand-success'], props.theme['$brand-success']) + '\n    }\n    & .card-info {\n      ' + cardVariant(props.theme['$brand-info'], props.theme['$brand-info']) + '\n    }\n    & .card-warning {\n      ' + cardVariant(props.theme['$brand-warning'], props.theme['$brand-warning']) + '\n    }\n    & .card-danger {\n      ' + cardVariant(props.theme['$brand-danger'], props.theme['$brand-danger']) + '\n    }\n    \n    /* Remove all backgrounds */\n    & .card-outline-primary {\n      ' + cardOutlineVariant(props.theme['$btn-primary-bg']) + '\n    }\n    & .card-outline-secondary {\n      ' + cardOutlineVariant(props.theme['$btn-secondary-border']) + '\n    }\n    & .card-outline-info {\n      ' + cardOutlineVariant(props.theme['$btn-info-bg']) + '\n    }\n    & .card-outline-success {\n      ' + cardOutlineVariant(props.theme['$btn-success-bg']) + '\n    }\n    & .card-outline-warning {\n      ' + cardOutlineVariant(props.theme['$btn-warning-bg']) + '\n    }\n    & .card-outline-danger {\n      ' + cardOutlineVariant(props.theme['$btn-danger-bg']) + '\n    }\n    \n    /*\n     Inverse text within a card for use with dark backgrounds\n    */\n    \n    & .card-inverse {\n      ' + cardInverse(props.theme['$enable-hover-media-query'], props.theme['$card-link-hover-color']) + '\n    }\n    \n    /*\n     Blockquote\n    */\n    \n    & .card-blockquote {\n      padding: 0;\n      margin-bottom: 0;\n      border-left: 0;\n    }\n    \n    /* Card image */\n    & .card-img {\n      /* margin: -1.325rem; */\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n    \n    & .card-img-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: ' + props.theme['$card-img-overlay-padding'] + ';\n    }\n\n    /* Card image caps */\n    & .card-img-top {\n      ' + borderTopRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n    \n    & .card-img-bottom {\n      ' + borderBottomRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n  ';
});

CardDeck.defaultProps = defaultProps;

export default CardDeck;