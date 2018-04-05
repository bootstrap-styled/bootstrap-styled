/**
 * BOOTSTRAP THEME TOOLTIP
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

  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';

  v['$zindex-tooltip'] = u['$zindex-tooltip'] || '1070';


  v['$tooltip-max-width'] = u['$tooltip-max-width'] || '200px';
  v['$tooltip-color'] = u['$tooltip-color'] || v['$white'];
  v['$tooltip-bg'] = u['$tooltip-bg'] || v['$black'];
  v['$tooltip-opacity'] = u['$tooltip-opacity'] || '.9';
  v['$tooltip-padding-y'] = u['$tooltip-padding-y'] || '3px';
  v['$tooltip-padding-x'] = u['$tooltip-padding-x'] || '8px';
  v['$tooltip-margin'] = u['$tooltip-margin'] || '3px';

  v['$tooltip-arrow-width'] = u['$tooltip-arrow-width'] || '5px';
  v['$tooltip-arrow-color'] = u['$tooltip-arrow-color'] || v['$tooltip-bg'];
  return Object.assign({}, u, v);
};

export default makeTheme();
