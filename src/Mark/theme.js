/**
 * BOOTSTRAP THEME MARK
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
  // Form states and alerts

  v['$state-warning-bg'] = u['$state-warning-bg'] || '#fcf8e3';

  // Fonts

  v['$mark-padding'] = u['$mark-padding'] || '.2em';
  v['$mark-bg'] = u['$mark-bg'] || v['$state-warning-bg'];

  return Object.assign({}, u, v);
};

export default makeTheme();
