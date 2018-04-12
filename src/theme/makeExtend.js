import Color from 'color';
import unitUtils from 'bootstrap-styled-utils/lib/unitUtils';
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

  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$brand-inverse'] = u['$brand-inverse'] || v['$gray-dark'];

  // Header
  v['$header-navbar-border-color'] = u['$header-navbar-border-color'] || v['$gray-lighter'];
  v['$header-navbar-border-width'] = u['$header-navbar-border-width'] || v['$border-width'];

  // Card
  v['$card-spacer-y'] = u['$card-spacer-y'] || '.75rem';
  v['$card-spacer-x'] = u['$card-spacer-x'] || '1.25rem';
  v['$card-margin-y-halved'] = u['$card-margin-y-halved'] || ((rmUnit(v['$card-spacer-y'], UNIT.REM) / 2) + UNIT.REM);
  v['$card-margin-x-halved'] = u['$card-margin-x-halved'] || ((rmUnit(v['$card-spacer-x'], UNIT.REM) / 2) + UNIT.REM);

  // Nav
  v['$nav-link-hover-bg'] = u['$nav-link-hover-bg'] || Color(v['$brand-inverse']).darken(0.03).toString();

  // Navbar
  v['$navbar-max-height'] = u['$navbar-max-height'] || '400px';
  v['$navbar-height'] = u['$navbar-height'] || '70px';

  // Label
  v['$label-margin-bottom'] = u['$label-margin-bottom'] || '.5rem';


  return {
    ...u,
    ...v,
  };
}
