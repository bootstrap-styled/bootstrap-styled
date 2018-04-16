import Color from 'color';
import { allowFalseValue } from '../theme/utils';
/**
 * BOOTSTRAP THEME KBD
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
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);

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
  v['$kbd-box-shadow'] = u['$kbd-box-shadow'] || `inset 0 -.1rem 0 ${Color(v['$black']).alpha(0.25).toString()}`;
  v['$nested-kbd-font-weight'] = u['$nested-kbd-font-weight'] || v['$font-weight-bold'];

  return Object.assign({}, u, v);
};

export default makeTheme();
