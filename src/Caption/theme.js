/**
 * BOOTSTRAP THEME CAPTION TAG
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
  // Colors
  //
  // Create grayscale
  v['$gray-light'] = u['$gray-light'] || '#636c72';

  // Tables
  //
  // Customizes the `.table` component with basic values, each used across all table variations.

  v['$table-cell-padding'] = u['$table-cell-padding'] || '.75rem';

  // Fonts
  v['$text-muted'] = u['$text-muted'] || v['$gray-light'];

  return Object.assign({}, u, v);
};

export default makeTheme();
