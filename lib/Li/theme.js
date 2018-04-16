'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * BOOTSTRAP THEME LI
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
  // Fonts

  v['$list-inline-padding'] = u['$list-inline-padding'] || '5px';

  return Object.assign({}, u, v);
};

exports.default = makeTheme();