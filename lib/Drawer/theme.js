'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * BOOTSTRAP THEME DRAWER TAG
 *
 * this file is not meant to be used and must be kept as original
 * @param userTheme
 */
var makeTheme = exports.makeTheme = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /* eslint dot-notation: 'off', new-cap: 'off' */
  // Variables
  //
  // Copy settings from this file into the provided `_custom.scss` to override
  // the Bootstrap defaults without modifying key, versioned files.
  var v = {};
  var u = userTheme;
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
  v['$drawer-docked-width'] = u['$drawer-docked-width'] || '55px';

  return Object.assign({}, u, v);
};

exports.default = makeTheme();