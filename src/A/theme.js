import Color from 'color';
import { allowFalseValue } from '../makeTheme/utils';
/**
 * BOOTSTRAP THEME A TAG
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

  // Start with assigning color names to specific hex values.
  v['$blue'] = u['$blue'] || '#0275d8';

  // Reassign color vars to semantic color scheme
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];

  // Link color and decoration
  v['$link-color'] = u['$link-color'] || v['$brand-primary'];
  v['$link-decoration'] = u['$link-decoration'] || 'none';
  v['$link-hover-color'] = u['$link-hover-color'] || Color(v['$link-color']).darken(0.35).toString();
  v['$link-hover-decoration'] = u['$link-hover-decoration'] || 'underline';

  // Options
  //
  // Quickly modify global styling by enabling or disabling optional features.
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);

  return Object.assign({}, u, v);
};

export default makeTheme();
