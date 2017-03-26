'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeExtend;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _mathUtils = require('math-utils');

var _makeOriginal = require('./makeOriginal');

var _makeOriginal2 = _interopRequireDefault(_makeOriginal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rmUnit = _mathUtils.unitUtils.rmUnit,
    UNIT = _mathUtils.unitUtils.UNIT;
/**
 * Extends of Bootstrap original
 *
 * You can add new bootstrap-styled variable here
 * @param original
 * @param userTheme
 */

function makeExtend() {
  var original = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _makeOriginal2.default)();
  var userTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /* eslint dot-notation: 'off', new-cap: 'off' */

  var v = original;
  var u = userTheme;

  // tools

  // Header
  v['$header-navbar-border-color'] = u['$header-navbar-border-color'] || v['$gray-lighter'];
  v['$header-navbar-border-width'] = u['$header-navbar-border-width'] || v['$border-width'];

  // Card
  v['$card-margin-y-halved'] = u['$card-margin-y-halved'] || rmUnit(v['$card-spacer-y'], UNIT.REM) / 2 + UNIT.REM;
  v['$card-margin-x-halved'] = u['$card-margin-x-halved'] || rmUnit(v['$card-spacer-x'], UNIT.REM) / 2 + UNIT.REM;

  // Nav
  v['$nav-link-hover-bg'] = u['$nav-link-hover-bg'] || (0, _color2.default)(v['$brand-inverse']).darken(0.03).toString();

  // Navbar
  v['$navbar-max-height'] = u['$navbar-max-height'] || '400px';
  v['$navbar-height'] = u['$navbar-height'] || '70px';

  // Menu
  v['$menu-push-bg'] = u['$menu-push-bg'] || v['$brand-inverse'];
  v['$menu-push-mini-width'] = u['$menu-push-mini-width'] || '75px';
  v['$menu-push-width'] = u['$menu-push-width'] || '220px';
  v['$menu-transition-duration'] = u['$menu-transition-duration'] || '.6s';
  v['$menu-offset-nav-transition'] = u['$menu-offset-nav-transition'] || 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';
  v['$menu-offset-nav-box-shadow'] = u['$menu-offset-nav-box-shadow'] || 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px';

  // Zindex
  v['$zindex-menu-push'] = v['$zindex-menu-push'] || '2000';

  return Object.assign({}, u, v);
}