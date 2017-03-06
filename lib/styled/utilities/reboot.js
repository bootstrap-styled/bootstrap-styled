'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobalStyles = getGlobalStyles;
exports.html = html;
exports.boxSizing = boxSizing;
exports.ie10FixViewport = ie10FixViewport;
exports.body = body;
exports.tabIndex = tabIndex;
exports.svg = svg;
exports.ie10FixHidden = ie10FixHidden;
exports.webkitFileUploadButton = webkitFileUploadButton;

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Reboot
//
// Normalization of HTML elements, manually forked from Normalize.css to remove
// styles targeting irrelevant browsers while applying new styles.
//
// Normalize is licensed MIT. https://github.com/necolas/normalize.css

/**
 * getGlobalStyles
 *
 * This utility MUST return only things that can ONLY be injected in global styles
 */
function getGlobalStyles() {
  var fontFamilyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _theme2.default['$font-family-base'];
  var fontSizeBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _theme2.default['$font-size-base'];
  var fontWeightBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _theme2.default['$font-weight-base'];
  var lineHeightBase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _theme2.default['$line-height-base'];
  var bodyColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _theme2.default['$body-color'];
  var bodyBg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _theme2.default['$body-bg'];

  return '\n    ' + html() + '\n    ' + boxSizing() + '\n    ' + ie10FixViewport() + '\n    ' + body(fontFamilyBase, fontSizeBase, fontWeightBase, lineHeightBase, bodyColor, bodyBg) + '\n    ' + tabIndex() + '\n    ' + svg() + '\n    ' + ie10FixHidden() + '\n    ' + webkitFileUploadButton() + '\n  ';
}

// Document
//
// 1. Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.
// 2. Change the default font family in all browsers.
// 3. Correct the line height in all browsers.
// 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.
// 5. Setting @viewport causes scrollbars to overlap content in IE11 and Edge, so
//    we force a non-overlapping, non-auto-hiding scrollbar to counteract.
// 6. Change the default tap highlight to be completely transparent in iOS.

function html() {
  return '\n    html {\n      box-sizing: border-box;\n      font-family: sans-serif;\n      line-height: 1.15;\n      -ms-text-size-adjust: 100%;\n      -webkit-text-size-adjust: 100%;\n      -ms-overflow-style: scrollbar;\n      -webkit-tap-highlight-color: rgba(0,0,0,0);\n    }\n  ';
}

function boxSizing() {
  return '\n    *,\n    *::before,\n    *::after {\n      box-sizing: inherit;\n    }\n  ';
}

// IE10+ doesn't honor `<meta name="viewport">` in some cases.
function ie10FixViewport() {
  return '\n    @-ms-viewport { width: device-width; }\n  ';
}

// Body
//
// 1. Remove the margin in all browsers.
// 2. As a best practice, apply a default `background-color`.

function body() {
  var fontFamilyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _theme2.default['$font-family-base'];
  var fontSizeBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _theme2.default['$font-size-base'];
  var fontWeightBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _theme2.default['$font-weight-base'];
  var lineHeightBase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _theme2.default['$line-height-base'];
  var bodyColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _theme2.default['$body-color'];
  var bodyBg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _theme2.default['$body-bg'];

  return '\n    body {\n      margin: 0;\n      font-family: ' + fontFamilyBase + ';\n      font-size: ' + fontSizeBase + ';\n      font-weight: ' + fontWeightBase + ';\n      line-height: ' + lineHeightBase + ';\n      color: ' + bodyColor + ';\n      background-color: ' + bodyBg + ';\n    }\n  ';
}

// Suppress the focus outline on elements that cannot be accessed via keyboard.
// This prevents an unwanted focus outline from appearing around elements that
// might still respond to pointer events.
//
// Credit: https://github.com/suitcss/base
function tabIndex() {
  return '\n    [tabindex="-1"]:focus {\n      outline: none !important;\n    }\n  ';
}

// Hide the overflow in IE
function svg() {
  return '\n    svg:not(:root) {\n      overflow: hidden;\n    }\n  ';
}

// Always hide an element with the `hidden` HTML attribute (from PureCSS).
// Needed for proper display in IE 10-.
function ie10FixHidden() {
  return '\n    [hidden] {\n      display: none !important;\n    }\n  ';
}

function webkitFileUploadButton() {
  return '\n    ::-webkit-file-upload-button {\n      font: inherit;\n      -webkit-appearance: button;\n    }\n  ';
}

exports.default = {
  html: html,
  boxSizing: boxSizing,
  ie10FixViewport: ie10FixViewport,
  body: body,
  tabIndex: tabIndex,
  svg: svg,
  ie10FixHidden: ie10FixHidden,
  getGlobalStyles: getGlobalStyles,
  webkitFileUploadButton: webkitFileUploadButton
};