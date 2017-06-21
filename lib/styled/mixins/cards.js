'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.cardVariant = cardVariant;
exports.cardOutlineVariant = cardOutlineVariant;
exports.cardInverse = cardInverse;
exports.card = card;

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _hover = require('./hover');

var _borderRadius = require('./border-radius');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = _theme2.default;

function cardVariant(cardBackground, cardBorder) {
  return '\n    background-color: ' + cardBackground + ';\n    border-color: ' + cardBorder + ';\n  \n    & .card-header,\n    & .card-footer {\n      background-color: transparent;\n    }\n  ';
}

function cardOutlineVariant(cardColor) {
  return '\n    background-color: transparent;\n    border-color: ' + cardColor + ';\n  ';
}

function cardInverse() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var cardLinkHoverColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$card-link-hover-color'];

  return '\n    color: rgba(255,255,255,.65);\n    & .card-header,\n    & .card-footer {\n      background-color: transparent;\n      border-color: rgba(255,255,255,.2);\n    }\n    & .card-header,\n    & .card-footer,\n    & .card-title,\n    & .card-blockquote {\n      color: #fff;\n    }\n    & .card-link,\n    & .card-text,\n    & .card-subtitle,\n    & .card-blockquote .blockquote-footer {\n      color: rgba(255,255,255,.65);\n    }\n    \n    & .card-link {\n      ' + (0, _hover.hoverFocus)(enableHoverMediaQuery, 'color: ' + cardLinkHoverColor + ';') + '\n    }\n  ';
}

function card($enableRounded, $enableHoverMediaQuery, $cardSpacerY, $cardSpacerX, $cardBg, $cardBorderWidth, $cardBorderColor, $cardBorderRadius, $cardMarginYHalved, $cardMarginXHalved, $cardCapBg, $cardBorderRadiusInner, $brandPrimary, $brandSuccess, $brandInfo, $brandWarning, $brandDanger, $btnPrimaryBg, $btnSecondaryBorder, $btnInfoBg, $btnSuccessBg, $btnWarningBg, $btnDangerBg, $cardLinkHoverColor, $cardImgOverlayPadding) {
  return '\n    & .card {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + $cardBg + ';\n      border: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n      ' + (0, _borderRadius.borderRadius)($enableRounded, $cardBorderRadius) + '\n    }\n    \n    & .card-block {\n      flex: 1 1 auto;\n\n      padding: ' + $cardSpacerX + ';\n    }\n    \n    & .card-title {\n      margin-bottom: ' + $cardSpacerY + ';\n    }\n    \n    & .card-subtitle {\n      margin-top: -' + $cardMarginYHalved + ';\n      margin-bottom: 0;\n    }\n    \n    & .card-text:last-child {\n      margin-bottom: 0;\n    }\n   \n    & .card-link {\n      ' + (0, _hover.hover)('\n        text-decoration: none;\n      ') + '\n    \n      + .card-link {\n        margin-left: ' + $cardSpacerX + ';\n      }\n    }\n    \n    & .card{\n      > .list-group:first-child {\n        .list-group-item:first-child {\n          ' + (0, _borderRadius.borderTopRadius)($enableRounded, $cardBorderRadius) + '\n        }\n      }\n    \n      > .list-group:last-child {\n        .list-group-item:last-child {\n          ' + (0, _borderRadius.borderBottomRadius)($enableRounded, $cardBorderRadius) + '\n        }\n      }\n    }\n    \n    & .card-header {\n      padding: ' + $cardSpacerY + ' ' + $cardSpacerX + ';\n      margin-bottom: 0;\n      background-color: ' + $cardCapBg + ';\n      border-bottom: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n    \n      &:first-child {\n        ' + (0, _borderRadius.borderRadius)($enableRounded, $cardBorderRadiusInner, $cardBorderRadiusInner, '0', '0') + '\n      }\n    }\n    \n    & .card-footer {\n      padding: ' + $cardSpacerY + ' ' + $cardSpacerX + ';\n      background-color: ' + $cardCapBg + ';\n      border-top: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n    \n      &:last-child {\n        ' + (0, _borderRadius.borderRadius)($enableRounded, '0', '0', $cardBorderRadiusInner, $cardBorderRadiusInner) + '\n      }\n    }\n\n    & .card-header-tabs {\n      margin-right: -' + $cardMarginXHalved + ';\n      margin-bottom: -' + $cardSpacerY + ';\n      margin-left: -' + $cardMarginXHalved + ';\n      border-bottom: 0;\n    }\n    \n    & .card-header-pills {\n      margin-right: -' + $cardMarginXHalved + ';\n      margin-left: -' + $cardMarginXHalved + ';\n    }\n    \n    & .card-primary {\n      ' + cardVariant($brandPrimary, $brandPrimary) + '\n    }\n    & .card-success {\n      ' + cardVariant($brandSuccess, $brandSuccess) + '\n    }\n    & .card-info {\n      ' + cardVariant($brandInfo, $brandInfo) + '\n    }\n    & .card-warning {\n      ' + cardVariant($brandWarning, $brandWarning) + '\n    }\n    & .card-danger {\n      ' + cardVariant($brandDanger, $brandDanger) + '\n    }\n    \n    & .card-outline-primary {\n      ' + cardOutlineVariant($btnPrimaryBg) + '\n    }\n    & .card-outline-secondary {\n      ' + cardOutlineVariant($btnSecondaryBorder) + '\n    }\n    & .card-outline-info {\n      ' + cardOutlineVariant($btnInfoBg) + '\n    }\n    & .card-outline-success {\n      ' + cardOutlineVariant($btnSuccessBg) + '\n    }\n    & .card-outline-warning {\n      ' + cardOutlineVariant($btnWarningBg) + '\n    }\n    & .card-outline-danger {\n      ' + cardOutlineVariant($btnDangerBg) + '\n    }\n        \n    & .card-inverse {\n      ' + cardInverse($enableHoverMediaQuery, $cardLinkHoverColor) + '\n    }\n\n    & .card-blockquote {\n      padding: 0;\n      margin-bottom: 0;\n      border-left: 0;\n    }\n    \n    & .card-img {\n      ' + (0, _borderRadius.borderRadius)($enableRounded, $cardBorderRadiusInner) + '\n    }\n    \n    & .card-img-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: ' + $cardImgOverlayPadding + ';\n    }\n\n    & .card-img-top {\n      ' + (0, _borderRadius.borderTopRadius)($enableRounded, $cardBorderRadiusInner) + '\n    }\n    \n    & .card-img-bottom {\n      ' + (0, _borderRadius.borderBottomRadius)($enableRounded, $cardBorderRadiusInner) + '\n    }\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  cardVariant: cardVariant,
  cardOutlineVariant: cardOutlineVariant,
  cardInverse: cardInverse,
  card: card
};