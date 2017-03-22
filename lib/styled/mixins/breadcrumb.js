'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.breadcrumb = breadcrumb;

var _borderRadius = require('./border-radius');

var _clearfix = require('./clearfix');

var defaultProps = exports.defaultProps = {
  '$enable-rounded': true,
  '$border-radius': '.25rem',
  '$breadcrumb-padding-y': '.75rem',
  '$breadcrumb-padding-x': '.75rem',
  '$spacer-y': '1rem',
  '$breadcrumb-bg': '#eceeef',
  '$breadcrumb-item-padding': '.5rem',
  '$breadcrumb-divider-color': '#636c72',
  '$breadcrumb-divider': '"/"',
  '$breadcrumb-active-color': '#636c72'
};

function breadcrumb() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var $borderRadius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  var $breadcrumbPaddingY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$breadcrumb-padding-y'];
  var $breadcrumbPaddingX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$breadcrumb-padding-x'];
  var $spacerY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$spacer-y'];
  var $breadcrumbBg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$breadcrumb-bg'];
  var $breadcrumbItemPadding = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$breadcrumb-item-padding'];
  var $breadcrumbDividerColor = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$breadcrumb-divider-color'];
  var $breadcrumbDivider = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$breadcrumb-divider'];
  var $breadcrumbActiveColor = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$breadcrumb-active-color'];

  return '\n    &.breadcrumb {\n      padding: ' + $breadcrumbPaddingY + ' ' + $breadcrumbPaddingX + ';\n      margin-bottom: ' + $spacerY + ';\n      list-style: none;\n      background-color: ' + $breadcrumbBg + ';\n \n      ' + (0, _borderRadius.borderRadius)($enableRounded, $borderRadius) + '\n      \n      ' + (0, _clearfix.clearfix)() + '\n    }\n\n    & .breadcrumb-item {\n      float: left;\n    \n      /* The separator between breadcrumbs (by default, a forward-slash: "/") */\n      + .breadcrumb-item::before {\n        display: inline-block; /* Suppress underlining of the separator in modern browsers */\n        padding-right: ' + $breadcrumbItemPadding + ';\n        padding-left: ' + $breadcrumbItemPadding + ';\n        color: ' + $breadcrumbDividerColor + ';\n        content: ' + $breadcrumbDivider + ';\n      }\n  \n      /* IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built\n       without \'ul\'s. The \'::before\' pseudo-element generates an element\n       *within* the .breadcrumb-item and thereby inherits the \'text-decoration\'.\n      \n       To trick IE into suppressing the underline, we give the pseudo-element an\n       underline and then immediately remove it.\n      */\n      \n      + .breadcrumb-item:hover::before {\n        text-decoration: underline;\n      }\n      + .breadcrumb-item:hover::before {\n        text-decoration: none;\n      }\n    \n      &.active {\n        color: ' + $breadcrumbActiveColor + ';\n      }\n    }\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  breadcrumb: breadcrumb
};