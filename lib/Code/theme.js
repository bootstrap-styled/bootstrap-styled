'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTheme = undefined;

var _utils = require('../makeTheme/utils');

/**
 * BOOTSTRAP THEME CODE
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

  // Components
  //
  // Define common padding and border radius sizes and more.
  v['$border-radius'] = u['$border-radius'] || '.25rem';

  // Fonts
  //
  // Font, line-height, and color for body text, headings, and more.
  v['$font-family-monospace'] = u['$font-family-monospace'] || 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

  // Colors

  v['$pink'] = u['$pink'] || '#ff5b77';

  // Create grayscale
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';

  // Code

  v['$code-font-size'] = u['$code-font-size'] || '90%';
  v['$code-padding-x'] = u['$code-padding-x'] || '.4rem';
  v['$code-padding-y'] = u['$code-padding-y'] || '.2rem';
  v['$code-color'] = u['$code-color'] || v['$pink'];
  v['$code-bg'] = u['$code-bg'] || v['$gray-lightest'];

  return Object.assign({}, u, v);
};

exports.default = makeTheme();