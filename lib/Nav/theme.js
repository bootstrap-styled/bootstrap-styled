'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTheme = undefined;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _variables = require('bootstrap-styled-mixins/lib/variables');

var _utils = require('../makeTheme/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * BOOTSTRAP THEME NAV
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
  v['$enable-hover-media-query'] = (0, _utils.allowFalseValue)(u['$enable-hover-media-query'], false);

  // Colors
  //
  // Grayscale and brand colors for use across Bootstrap.

  // Start with assigning color names to specific hex values.
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';

  // Create grayscale
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';

  // Reassign color vars to semantic color scheme
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];

  // Grid breakpoints
  //
  // Define the minimum dimensions at which your layout will change,
  // adapting to different screen sizes, for use in media queries.

  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  (0, _variables.assertAscending)(v['$grid-breakpoints'], '$grid-breakpoints');
  (0, _variables.assertStartAtZero)(v['$grid-breakpoints']);

  // Spacing

  v['$border-width'] = u['$border-width'] || '1px';

  // Fonts

  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';

  // Components
  //
  // Define common padding and border radius sizes and more.

  v['$component-active-color'] = u['$component-active-color'] || v['$white'];
  v['$component-active-bg'] = u['$component-active-bg'] || v['$brand-primary'];
  v['$border-radius'] = u['$border-radius'] || '.25rem';

  // Navs

  v['$nav-link-padding'] = u['$nav-link-padding'] || '.5em 1em';
  v['$nav-disabled-link-color'] = u['$nav-disabled-link-color'] || v['$gray-light'];

  v['$nav-tabs-border-color'] = u['$nav-tabs-border-color'] || '#ddd';
  v['$nav-tabs-border-width'] = u['$nav-tabs-border-width'] || v['$border-width'];
  v['$nav-tabs-border-radius'] = u['$nav-tabs-border-radius'] || v['$border-radius'];
  v['$nav-tabs-link-hover-border-color'] = u['$nav-tabs-link-hover-border-color'] || v['$gray-lighter'];
  v['$nav-tabs-active-link-hover-color'] = u['$nav-tabs-active-link-hover-color'] || v['$gray'];
  v['$nav-tabs-active-link-hover-bg'] = u['$nav-tabs-active-link-hover-bg'] || v['$body-bg'];
  v['$nav-tabs-active-link-hover-border-color'] = u['$nav-tabs-active-link-hover-border-color'] || '#ddd';

  v['$nav-pills-border-radius'] = u['$nav-pills-border-radius'] || v['$border-radius'];
  v['$nav-pills-active-link-color'] = u['$nav-pills-active-link-color'] || v['$component-active-color'];
  v['$nav-pills-active-link-bg'] = u['$nav-pills-active-link-bg'] || v['$component-active-bg'];

  // Navbar

  v['$navbar-padding-x'] = u['$navbar-padding-x'] || v['$spacer'];
  v['$navbar-padding-y'] = u['$navbar-padding-y'] || v['$spacer-halved'];

  v['$navbar-toggler-padding-x'] = u['$navbar-toggler-padding-x'] || '.75rem';
  v['$navbar-toggler-padding-y'] = u['$navbar-toggler-padding-y'] || '.25rem';
  v['$navbar-toggler-font-size'] = u['$navbar-toggler-font-size'] || v['$font-size-lg'];
  v['$navbar-toggler-border-radius'] = u['$navbar-toggler-border-radius'] || v['$btn-border-radius'];

  v['$navbar-inverse-color'] = u['$navbar-inverse-color'] || (0, _color2.default)(v['$white']).alpha(0.5).toString();
  v['$navbar-inverse-hover-color'] = u['$navbar-inverse-hover-color'] || (0, _color2.default)(v['$white']).alpha(0.75).toString();
  v['$navbar-inverse-active-color'] = u['$navbar-inverse-active-color'] || (0, _color2.default)(v['$white']).alpha(1).toString();
  v['$navbar-inverse-disabled-color'] = u['$navbar-inverse-disabled-color'] || (0, _color2.default)(v['$white']).alpha(0.25).toString();
  v['$navbar-inverse-toggler-bg'] = u['$navbar-inverse-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="' + v['$navbar-inverse-color'] + '" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-toggler-border'] = u['$navbar-inverse-toggler-border'] || (0, _color2.default)(v['$white']).alpha(0.1).toString();

  v['$navbar-light-color'] = u['$navbar-light-color'] || (0, _color2.default)(v['$black']).alpha(0.5).toString();
  v['$navbar-light-hover-color'] = u['$navbar-light-hover-color'] || (0, _color2.default)(v['$black']).alpha(0.7).toString();
  v['$navbar-light-active-color'] = u['$navbar-light-active-color'] || (0, _color2.default)(v['$black']).alpha(0.9).toString();
  v['$navbar-light-disabled-color'] = u['$navbar-light-disabled-color'] || (0, _color2.default)(v['$black']).alpha(0.3).toString();
  v['$navbar-light-toggler-bg'] = u['$navbar-light-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="' + v['$navbar-light-color'] + '" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-light-toggler-border'] = u['$navbar-light-toggler-border'] || (0, _color2.default)(v['$black']).alpha(0.1).toString();

  // Forms

  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';

  return Object.assign({}, u, v);
};

exports.default = makeTheme();