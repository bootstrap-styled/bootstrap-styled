import Color from 'color';
import { unitUtils } from 'math-utils';
import makeOriginal from './makeOriginal';
const { rmUnit, UNIT } = unitUtils;
/**
 * Extends of Bootstrap original
 *
 * You can add new bootstrap-styled variable here
 * @param original
 * @param userTheme
 */
export default function makeExtend(original = makeOriginal(), userTheme = {}) {
  /* eslint dot-notation: 'off', new-cap: 'off' */

  const v = original;
  const u = userTheme;

  // tools

  // Header
  v['$header-navbar-border-color'] = u['$header-navbar-border-color'] || v['$gray-lighter'];
  v['$header-navbar-border-width'] = u['$header-navbar-border-width'] || v['$border-width'];

  // Card
  v['$card-margin-y-halved'] = u['$card-margin-y-halved'] || ((rmUnit(v['$card-spacer-y'], UNIT.REM) / 2) + UNIT.REM);
  v['$card-margin-x-halved'] = u['$card-margin-x-halved'] || ((rmUnit(v['$card-spacer-x'], UNIT.REM) / 2) + UNIT.REM);

  // Nav
  v['$nav-link-hover-bg'] = u['$nav-link-hover-bg'] || Color(v['$brand-inverse']).darken(0.03).toString();

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
