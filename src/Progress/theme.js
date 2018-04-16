import Color from 'color';
import { allowFalseValue } from '../theme/utils';
/**
 * BOOTSTRAP THEME PROGRESS
 *
 * this file is not meant to be used and must be kept as original
 * @param userTheme
 */
export const makeTheme = (userTheme = {}) => {
  /* eslint dot-notation: 'off', new-cap: 'off' */
  // Variables
  //
  // Copy settings from this file into the provided `_custom.scss` to override
  // the Bootstrap defaults without modifying key, versioned files.
  const v = {};
  const u = userTheme;
  // all var must be grouped in a named theme
  v['_name'] = u['_name'] || 'bootstrap-styled';
  // Options
  //
  // Quickly modify global styling by enabling or disabling optional features.

  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);


  // Colors
  //
  // Grayscale and brand colors for use across Bootstrap.

  // Start with assigning color names to specific hex values.
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';

  // Create grayscale
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';

  // Reassign color vars to semantic color scheme
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];

  // Components
  //
  // Define common padding and border radius sizes and more.

  v['$border-radius'] = u['$border-radius'] || '.25rem';

  // Progress bars

  v['$progress-height'] = u['$progress-height'] || '1rem';
  v['$progress-font-size'] = u['$progress-font-size'] || '.75rem';
  v['$progress-bg'] = u['$progress-bg'] || v['$gray-lighter'];
  v['$progress-border-radius'] = u['$progress-border-radius'] || v['$border-radius'];
  v['$progress-box-shadow'] = u['$progress-box-shadow'] || `inset 0 .1rem .1rem ${Color(v['$black']).alpha(0.1).toString()}`;
  v['$progress-bar-color'] = u['$progress-bar-color'] || v['$white'];
  v['$progress-bar-bg'] = u['$progress-bar-bg'] || v['$brand-primary'];
  v['$progress-bar-animation-timing'] = u['$progress-bar-animation-timing'] || '1s linear infinite';

  return Object.assign({}, u, v);
};

export default makeTheme();
