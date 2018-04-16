/**
 * BOOTSTRAP THEME DRAWER TAG
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
  v['$enable-rounded'] = u['$enable-rounded'] || true;
  v['$enable-shadows'] = u['$enable-shadows'] || true;
  v['$white'] = u['$white'] || '#fff';
  v['$drawer-bg'] = u['$drawer-bg'] || v['$white'];
  v['$drawer-transition'] = u['$drawer-transition'] || 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';
  v['$drawer-box-shadow'] = u['$drawer-box-shadow'] || 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px';
  v['$drawer-border-radius'] = u['$drawer-border-radius'] || '0px';
  v['$drawer-zindex'] = u['$drawer-zindex'] || '1030';

  return Object.assign({}, u, v);
};

export default makeTheme();
