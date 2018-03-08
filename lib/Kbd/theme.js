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
 * BOOTSTRAP THEME KBD
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
  v['$enable-shadows'] = (0, _utils.allowFalseValue)(u['$enable-shadows'], false);

  // Colors

  v['$black'] = u['$black'] || '#000';
  v['$white'] = u['$white'] || '#fff';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';

  // Fonts

  v['$font-family-monospace'] = u['$font-family-monospace'] || 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  v['$font-weight-bold'] = u['$font-weight-bold'] || 'bold';

  // Components
  //
  // Define common padding and border radius sizes and more.

  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';

  // Code
  v['$code-font-size'] = u['$code-font-size'] || '90%';
  v['$code-padding-x'] = u['$code-padding-x'] || '.4rem';
  v['$code-padding-y'] = u['$code-padding-y'] || '.2rem';

  v['$kbd-color'] = u['$kbd-color'] || v['$white'];
  v['$kbd-bg'] = u['$kbd-bg'] || v['$gray-dark'];
  v['$kbd-box-shadow'] = u['$kbd-box-shadow'] || 'inset 0 -.1rem 0 ' + (0, _color2.default)(v['$black']).alpha(0.25).toString();
  v['$nested-kbd-font-weight'] = u['$nested-kbd-font-weight'] || v['$font-weight-bold'];

  return Object.assign({}, u, v);
};

exports.default = makeTheme();