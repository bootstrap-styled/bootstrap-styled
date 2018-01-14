/**
 * BOOTSTRAP THEME COLLAPSE
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

  // Options
  //
  // Quickly modify global styling by enabling or disabling optional features.
  v['$transition-collapse'] = u['$transition-collapse'] || 'height .35s ease';

  return Object.assign({}, u, v);
};

export default makeTheme();
