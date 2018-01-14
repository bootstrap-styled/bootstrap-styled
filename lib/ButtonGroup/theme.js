'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTheme = undefined;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _utils = require('../makeTheme/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * BOOTSTRAP THEME BUTTONGROUP TAG
 *
 * this file is not meant to be used and must be kept as original
 * @param userTheme
 */
var makeTheme = exports.makeTheme = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /* eslint dot-notation: 'off', new-cap: 'off' */
  // Variables
  //
  // Copy settings from this file into the provided `_custom.scss` to override
  // the Bootstrap defaults without modifying key, versioned files.
  var v = {};
  var u = userTheme;

  // Options
  //
  // Quickly modify global styling by enabling or disabling optional features.

  v['$enable-rounded'] = (0, _utils.allowFalseValue)(u['$enable-rounded'], true);
  // v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$enable-shadows'] = (0, _utils.allowFalseValue)(u['$enable-shadows'], true);

  // Colors
  //
  // Start with assigning color names to specific hex values
  v['$black'] = u['$black'] || '#000';

  // Components
  //
  // Define common padding and border radius sizes and more.
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';

  // Fonts
  //
  // Font, line-height, and color for body text, headings, and more.
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';

  // Spacing
  //
  // Control the default styling of most Bootstrap elements by modifying these

  v['$border-width'] = u['$border-width'] || '1px';

  // Form input

  v['$input-btn-border-width'] = u['$input-btn-border-width'] || v['$border-width']; // For form controls and buttons

  // Buttons
  //
  // For each of Bootstrap's buttons, define text, background and border color.

  v['$btn-padding-x'] = u['$btn-padding-x'] || '1rem';
  v['$btn-active-box-shadow'] = u['$btn-active-box-shadow'] || 'inset 0 3px 5px ' + (0, _color2.default)(v['$black']).alpha(0.125).toString();
  v['$btn-padding-x-lg'] = u['$btn-padding-x-lg'] || '1.5rem';
  v['$btn-padding-y-lg'] = u['$btn-padding-y-lg'] || '.75rem';
  v['$btn-padding-x-sm'] = u['$btn-padding-x-sm'] || '.5rem';
  v['$btn-padding-y-sm'] = u['$btn-padding-y-sm'] || '.25rem';

  // Allows for customizing button radius independently from global border radius
  v['$btn-border-radius-lg'] = u['$btn-border-radius-lg'] || v['$border-radius-lg'];
  v['$btn-border-radius-sm'] = u['$btn-border-radius-sm'] || v['$border-radius-sm'];

  return Object.assign({}, u, v);
};

exports.default = makeTheme();