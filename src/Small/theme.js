/**
 * BOOTSTRAP THEME ROW
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
  // Fonts
  // all var must be grouped in a named theme
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$small-font-size'] = u['$small-font-size'] || '80%';

  return Object.assign({}, u, v);
};

export default makeTheme();
