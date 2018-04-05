"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeOriginal;
// This module is used by the following variable: $popover-border-color, $popover-box-shadow, $popover-title-bg, $popover-arrow-outer-color
// import Color from 'color';

// This utils is used by unitUtils constant variable in order to use detectUnit and rmUnit utilities.
// import unitUtils from 'bootstrap-styled-utils/lib/unitUtils';

// This utils is used by the following variable: $enable-print-styles
// import { allowFalseValue } from './utils';

// These variables are used by following variables: $spacer, $spacers, $popover-arrow-outer-width and $popover-arrow-width.
// const { detectUnit, rmUnit } = unitUtils;

/**
 * ORIGINAL BOOTSTRAP THEME
 *
 * this file is not meant to be used and must be kept as original
 * @param userTheme
 */
function makeOriginal() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /* eslint dot-notation: 'off', new-cap: 'off' */
  // Variables
  //
  // Copy settings from this file into the provided `_custom.scss` to override
  // the Bootstrap defaults without modifying key, versioned files.
  var v = {};
  var u = userTheme;
  // This variable is used by following variables: $spacer, $spacers, $popover-arrow-outer-width and $popover-arrow-width.
  // let detectedUnit;

  // Colors
  // This variable was created in original Bootstrap and is still unused in original Bootstrap.
  // v['$yellow'] = u['$yellow'] || '#ffd500';

  // This variable was created in original Bootstrap and is used by @mixin gradient-x-three-colors and gradient-x-three-colors in original Bootstrap.
  // These @mixin aren't called in original Bootstrap.
  // v['$purple'] = u['$purple'] || '#613d7c';

  // This variable is used by following $popover-bg variable.
  // v['$white'] = u['$white'] || '#fff';

  // This variable is used by following $popover-border-color and $popover-box-shadow variables.
  // v['$black'] = u['$black'] || '#000';

  // Options
  // This variable was created in original Bootstrap and used in @mixin @media print.
  // Waiting for new print mixin.
  // v['$enable-print-styles'] = allowFalseValue(u['$enable-print-styles'], true);

  // Spacing
  // This variable is used by following detectedUnit variable.
  // v['$spacer'] = u['$spacer'] || '1rem';

  // This variable is used by following $spacers variable.
  // =============================================================================================================
  // Added by AJT, put up here as it is used along the file and must be defined before used by other variables
  // detectedUnit = detectUnit(v['$spacer']);
  // =============================================================================================================

  // This variable was created in original Bootstrap and used in @mixin spacing.
  // For now there is no other use of $spacers in original Bootstrap.
  // v['$spacers'] = u['$spacers'] || {
  //   0: {
  //     x: 0,
  //     y: 0,
  //   },
  //   1: {
  //     x: (rmUnit(v['$spacer-x']) * 0.25) + detectedUnit,
  //     y: (rmUnit(v['$spacer-y']) * 0.25) + detectedUnit,
  //   },
  //   2: {
  //     x: (rmUnit(v['$spacer-x']) * 0.5) + detectedUnit,
  //     y: (rmUnit(v['$spacer-y']) * 0.5) + detectedUnit,
  //   },
  //   3: {
  //     x: v['$spacer-x'],
  //     y: v['$spacer-y'],
  //   },
  //   4: {
  //     x: (rmUnit(v['$spacer-x']) * 1.5) + detectedUnit,
  //     y: (rmUnit(v['$spacer-y']) * 1.5) + detectedUnit,
  //   },
  //   5: {
  //     x: (rmUnit(v['$spacer-x']) * 3) + detectedUnit,
  //     y: (rmUnit(v['$spacer-y']) * 3) + detectedUnit,
  //   },
  // };

  // This variable was created in original Bootstrap and used in @mixin sizing.
  // For now there is no other use of $sizes in original Bootstrap.
  // v['$sizes'] = u['$sizes'] || {
  //   25: '25%',
  //   50: '50%',
  //   75: '75%',
  //   100: '100%',
  // };

  // This variable is used by following $popover-border-width variable.
  // v['$border-width'] = u['$border-width'] || '1px';

  // This variable was created in original Bootstrap and used in @mixin transition.
  // For now there is no other use of $transition-base in original Bootstrap.
  // v['$transition-base'] = u['$transition-base'] || 'all .2s ease-in-out';

  // These variables were created in original Bootstrap and used in @mixin position.
  // For now there is no other use of $zindex-fixed, $zindex-sticky and $zindex-popover in original Bootstrap.
  // v['$zindex-fixed'] = u['$zindex-fixed'] || '1030';
  // v['$zindex-sticky'] = u['$zindex-sticky'] || '1030';
  // v['$zindex-popover'] = u['$zindex-popover'] || '1060';

  // Popovers
  // These variables were created in original Bootstrap and are still unused in original Bootstrap.
  // Waiting for new Popover component.
  // v['$popover-inner-padding'] = u['$popover-inner-padding'] || '1px';
  // v['$popover-bg'] = u['$popover-bg'] || v['$white'];
  // v['$popover-max-width'] = u['$popover-max-width'] || '276px';
  // v['$popover-border-width'] = u['$popover-border-width'] || v['$border-width'];
  //
  // v['$popover-border-color'] = u['$popover-border-color'] || Color(v['$black']).alpha(0.2).toString();
  // v['$popover-box-shadow'] = u['$popover-box-shadow'] || `0 5px 10px ${Color(v['$black']).alpha(0.2).toString()}`;
  //
  // v['$popover-title-bg'] = u['$popover-title-bg'] || Color(v['$popover-bg']).darken(0.03).toString();
  // v['$popover-title-padding-x'] = u['$popover-title-padding-x'] || '14px';
  // v['$popover-title-padding-y'] = u['$popover-title-padding-y'] || '8px';
  //
  // v['$popover-content-padding-x'] = u['$popover-content-padding-x'] || '14px';
  // v['$popover-content-padding-y'] = u['$popover-content-padding-y'] || '9px';
  //
  // v['$popover-arrow-width'] = u['$popover-arrow-width'] || '10px';
  // v['$popover-arrow-color'] = u['$popover-arrow-color'] || v['$popover-bg'];
  //
  // detectedUnit = detectUnit(v['$popover-arrow-width']);
  // v['$popover-arrow-outer-width'] = u['$popover-arrow-outer-width'] || ((rmUnit(v['$popover-arrow-width'], detectedUnit) + 1) + detectedUnit);
  // v['$popover-arrow-outer-color'] = u['$popover-arrow-outer-color'] || Color(v['$popover-border-color']).fade(0.5).toString();

  // Carousel
  // These variables are not used yet in Bootstrap Styled. Waiting for new Carousel component.

  // v['$carousel-control-color'] = u['$carousel-control-color'] || v['$white'];
  // v['$carousel-control-width'] = u['$carousel-control-width'] || '15%';
  // v['$carousel-control-opacity'] = u['$carousel-control-opacity'] || '.5';
  //
  // v['$carousel-indicator-width'] = u['$carousel-indicator-width'] || '30px';
  // v['$carousel-indicator-height'] = u['$carousel-indicator-height'] || '3px';
  // v['$carousel-indicator-spacer'] = u['$carousel-indicator-spacer'] || '3px';
  // v['$carousel-indicator-active-bg'] = u['$carousel-indicator-active-bg'] || v['$white'];
  //
  // v['$carousel-caption-width'] = u['$carousel-caption-width'] || '70%';
  // v['$carousel-caption-color'] = u['$carousel-caption-color'] || v['$white'];
  //
  // v['$carousel-control-icon-width'] = u['$carousel-control-icon-width'] || '20px';
  //
  // v['$carousel-control-prev-icon-bg'] = u['$carousel-control-prev-icon-bg'] || `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="${v['$carousel-control-color']}" viewBox="0 0 8 8"%3E%3Cpath d="M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z"/%3E%3C/svg%3E')`;
  // v['$carousel-control-next-icon-bg'] = u['$carousel-control-next-icon-bg'] || `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="${v['$carousel-control-color']}" viewBox="0 0 8 8"%3E%3Cpath d="M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z"/%3E%3C/svg%3E')`;
  //
  // v['$carousel-transition'] = u['$carousel-transition'] || 'transform .6s ease-in-out';

  return Object.assign({}, u, v);
}
module.exports = exports["default"];