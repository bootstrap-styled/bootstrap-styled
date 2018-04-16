import unitUtils from 'bootstrap-styled-utils/lib/unitUtils';
import { allowFalseValue } from '../theme/utils';
const { detectUnit, rmUnit } = unitUtils;

/**
 * BOOTSTRAP THEME CLOSE
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
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);

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
  v['$close-font-size'] = u['$close-font-size'] || (rmUnit(v['$font-size-base']) * 1.5) + detectUnit(v['$font-size-base']);
  v['$close-font-weight'] = u['$close-font-weight'] || v['$font-weight-bold'];
  v['$close-color'] = u['$close-color'] || v['$black'];
  v['$close-text-shadow'] = u['$close-text-shadow'] || `0 1px 0 ${v['$white']}`;

  return Object.assign({}, u, v);
};

export default makeTheme();
