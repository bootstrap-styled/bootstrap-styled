/**
 * BOOTSTRAP THEME PRE
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
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  // Code

  v['$code-font-size'] = u['$code-font-size'] || '90%';

  v['$pre-color'] = u['$pre-color'] || v['$gray-dark'];
  v['$pre-scrollable-max-height'] = u['$pre-scrollable-max-height'] || '340px';

  // Fonts

  v['$font-family-monospace'] = u['$font-family-monospace'] || 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';


  return Object.assign({}, u, v);
};

export default makeTheme();
