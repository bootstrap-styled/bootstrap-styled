'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTheme = undefined;

var _unitUtils = require('bootstrap-styled-utils/lib/unitUtils');

var _unitUtils2 = _interopRequireDefault(_unitUtils);

var _utils = require('../makeTheme/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var detectUnit = _unitUtils2.default.detectUnit,
    rmUnit = _unitUtils2.default.rmUnit;

/**
 * BOOTSTRAP THEME CLOSE
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
  v['$enable-hover-media-query'] = (0, _utils.allowFalseValue)(u['$enable-hover-media-query'], false);

  // Colors
  //
  // Start with assigning color names to specific hex values.
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';

  // Fonts
  //
  // Font, line-height, and color for body text, headings, and more.
  v['$font-size-base'] = u['$font-size-base'] || '1rem'; // Assumes the browser default, typically `16px`
  v['$font-weight-bold'] = u['$font-weight-bold'] || 'bold';

  // Close
  v['$close-font-size'] = u['$close-font-size'] || rmUnit(v['$font-size-base']) * 1.5 + detectUnit(v['$font-size-base']);
  v['$close-font-weight'] = u['$close-font-weight'] || v['$font-weight-bold'];
  v['$close-color'] = u['$close-color'] || v['$black'];
  v['$close-text-shadow'] = u['$close-text-shadow'] || '0 1px 0 ' + v['$white'];

  return Object.assign({}, u, v);
};

exports.default = makeTheme();