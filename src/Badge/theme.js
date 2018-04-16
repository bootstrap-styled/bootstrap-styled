import { allowFalseValue } from '../theme/utils';
/**
 * BOOTSTRAP THEME BADGE TAG
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

  // Color

  // Start with assigning color names to specific hex values.
  v['$white'] = u['$white'] || '#fff';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$green'] = u['$green'] || '#5cb85c';
  v['$teal'] = u['$teal'] || '#5bc0de';
  v['$orange'] = u['$orange'] || '#f0ad4e';
  v['$red'] = u['$red'] || '#d9534f';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';

  // Reassign color vars to semantic color scheme
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$brand-success'] = u['$brand-success'] || v['$green'];
  v['$brand-info'] = u['$brand-info'] || v['$teal'];
  v['$brand-warning'] = u['$brand-warning'] || v['$orange'];
  v['$brand-danger'] = u['$brand-danger'] || v['$red'];
  v['$brand-inverse'] = u['$brand-inverse'] || v['$gray-dark'];

  // Components
  //
  // Define common padding and border radius sizes and more.

  v['$border-radius'] = u['$border-radius'] || '.25rem';

  // Fonts
  //
  // Font, line-height, and color for body text, headings, and more.

  v['$font-weight-bold'] = u['$font-weight-bold'] || 'bold';

  // Badges

  v['$badge-default-bg'] = u['$badge-default-bg'] || v['$gray-light'];
  v['$badge-primary-bg'] = u['$badge-primary-bg'] || v['$brand-primary'];
  v['$badge-success-bg'] = u['$badge-success-bg'] || v['$brand-success'];
  v['$badge-info-bg'] = u['$badge-info-bg'] || v['$brand-info'];
  v['$badge-warning-bg'] = u['$badge-warning-bg'] || v['$brand-warning'];
  v['$badge-danger-bg'] = u['$badge-danger-bg'] || v['$brand-danger'];

  v['$badge-color'] = u['$badge-color'] || v['$white'];
  v['$badge-link-hover-color'] = u['$badge-link-hover-color'] || v['$white'];
  v['$badge-font-size'] = u['$badge-font-size'] || '75%';
  v['$badge-font-weight'] = u['$badge-font-weight'] || v['$font-weight-bold'];
  v['$badge-padding-x'] = u['$badge-padding-x'] || '.4em';
  v['$badge-padding-y'] = u['$badge-padding-y'] || '.25em';

  v['$badge-pill-padding-x'] = u['$badge-pill-padding-x'] || '.6em';

  // Use a higher than normal value to ensure completely rounded edges when
  // customizing padding or font-size on labels.
  v['$badge-pill-border-radius'] = u['$badge-pill-border-radius'] || '10rem';

  return Object.assign({}, u, v);
};

export default makeTheme();
