'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTheme = undefined;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _unitUtils = require('bootstrap-styled-utils/lib/unitUtils');

var _unitUtils2 = _interopRequireDefault(_unitUtils);

var _utils = require('../theme/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rmUnit = _unitUtils2.default.rmUnit,
    UNIT = _unitUtils2.default.UNIT;

/**
 * BOOTSTRAP THEME IMAGE
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
  v['$enable-transitions'] = (0, _utils.allowFalseValue)(u['$enable-transitions'], true);
  v['$enable-shadows'] = (0, _utils.allowFalseValue)(u['$enable-shadows'], false);

  // Colors
  //
  // Grayscale and brand colors for use across Bootstrap.

  // Start with assigning color names to specific hex values.
  v['$white'] = u['$white'] || '#fff';
  v['$gray-light'] = u['$gray-light'] || '#636c72';

  // Body
  //
  // Settings for the `<body>` element.

  v['$body-bg'] = u['$body-bg'] || v['$white'];

  // Spacing
  //
  // Control the default styling of most Bootstrap elements by modifying these
  // variables. Mostly focused on spacing.
  // You can add more entries to the v['$spacers'] map, should you need more variation.

  v['$spacer'] = u['$spacer'] || '1rem';

  // =============================================================================================================
  // Added by AJT, put up here as it is used along the file and must be defined before used by other variables
  v['$spacer-halved'] = u['$spacer-halved'] || rmUnit(v['$spacer'], UNIT.REM) / 2 + UNIT.REM;
  // =============================================================================================================

  v['$border-width'] = u['$border-width'] || '1px';

  // Components
  //
  // Define common padding and border radius sizes and more.

  v['$border-radius'] = u['$border-radius'] || '.25rem';

  // Image thumbnails

  v['$thumbnail-padding'] = u['$thumbnail-padding'] || '.25rem';
  v['$thumbnail-bg'] = u['$thumbnail-bg'] || v['$body-bg'];
  v['$thumbnail-border-width'] = u['$thumbnail-border-width'] || v['$border-width'];
  v['$thumbnail-border-color'] = u['$thumbnail-border-color'] || '#ddd';
  v['$thumbnail-border-radius'] = u['$thumbnail-border-radius'] || v['$border-radius'];
  v['$thumbnail-box-shadow'] = u['$thumbnail-box-shadow'] || '0 1px 2px ' + (0, _color2.default)(v['$black']).alpha(0.75).toString();
  v['$thumbnail-transition'] = u['$thumbnail-transition'] || 'all .2s ease-in-out';

  // Image Figures

  v['$figure-caption-font-size'] = u['$figure-caption-font-size'] || '90%';
  v['$figure-caption-color'] = u['$figure-caption-color'] || v['$gray-light'];

  return Object.assign({}, u, v);
};

exports.default = makeTheme();