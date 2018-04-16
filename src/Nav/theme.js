import { assertAscending, assertStartAtZero } from 'bootstrap-styled-mixins/lib/variables';
import unitUtils from 'bootstrap-styled-utils/lib/unitUtils';
import { allowFalseValue } from '../theme/utils';

const { rmUnit, UNIT } = unitUtils;

/**
 * BOOTSTRAP THEME NAV
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
  // Options
  //
  // Quickly modify global styling by enabling or disabling optional features.

  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);

  // Grid breakpoints
  //
  // Define the minimum dimensions at which your layout will change,
  // adapting to different screen sizes, for use in media queries.

  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  };
  assertAscending(v['$grid-breakpoints'], '$grid-breakpoints');
  assertStartAtZero(v['$grid-breakpoints']);

  // Colors
  //
  // Grayscale and brand colors for use across Bootstrap.

  // Start with assigning color names to specific hex values.
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';

  // Create grayscale
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';

  // Reassign color vars to semantic color scheme
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];

  // Spacing

  v['$spacer'] = u['$spacer'] || '1rem';

  // =============================================================================================================
  // Added by AJT, put up here as it is used along the file and must be defined before used by other variables
  v['$spacer-halved'] = u['$spacer-halved'] || ((rmUnit(v['$spacer'], UNIT.REM) / 2) + UNIT.REM);
  // =============================================================================================================

  v['$border-width'] = u['$border-width'] || '1px';

  // Fonts
  //
  // Font, line-height, and color for body text, headings, and more.

  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';

  // Body
  //
  // Settings for the `<body>` element.

  v['$body-bg'] = u['$body-bg'] || v['$white'];

  // Components
  //
  // Define common padding and border radius sizes and more.

  v['$component-active-bg'] = u['$component-active-bg'] || v['$brand-primary'];
  v['$component-active-color'] = u['$component-active-color'] || v['$white'];
  v['$border-radius'] = u['$border-radius'] || '.25rem';

  // Navbar

  v['$navbar-padding-x'] = u['$navbar-padding-x'] || v['$spacer'];
  v['$navbar-padding-y'] = u['$navbar-padding-y'] || v['$spacer-halved'];


  // Navs

  v['$nav-link-padding'] = u['$nav-link-padding'] || '.5em 1em';
  v['$nav-disabled-link-color'] = u['$nav-disabled-link-color'] || v['$gray-light'];

  v['$nav-tabs-border-color'] = u['$nav-tabs-border-color'] || '#ddd';
  v['$nav-tabs-border-width'] = u['$nav-tabs-border-width'] || v['$border-width'];
  v['$nav-tabs-border-radius'] = u['$nav-tabs-border-radius'] || v['$border-radius'];
  v['$nav-tabs-link-hover-border-color'] = u['$nav-tabs-link-hover-border-color'] || v['$gray-lighter'];
  v['$nav-tabs-active-link-hover-color'] = u['$nav-tabs-active-link-hover-color'] || v['$gray'];
  v['$nav-tabs-active-link-hover-bg'] = u['$nav-tabs-active-link-hover-bg'] || v['$body-bg'];
  v['$nav-tabs-active-link-hover-border-color'] = u['$nav-tabs-active-link-hover-border-color'] || '#ddd';

  v['$nav-pills-border-radius'] = u['$nav-pills-border-radius'] || v['$border-radius'];
  v['$nav-pills-active-link-color'] = u['$nav-pills-active-link-color'] || v['$component-active-color'];
  v['$nav-pills-active-link-bg'] = u['$nav-pills-active-link-bg'] || v['$component-active-bg'];

  // Forms

  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';

  // Mixin navbar
  //
  // From module bootstrap-styled-mixins: https://module.kopaxgroup.com/styled-components/bootstrap-styled-mixins/blob/master/src/navbar.js

  v['$zindex-navbar'] = u['$zindex-navbar'] || '1000';
  v['$zindex-navbar-fixed'] = u['$zindex-navbar-fixed'] || '1030';
  v['$zindex-navbar-sticky'] = u['$zindex-navbar-sticky'] || '1030';
  v['$navbar-brand-padding-y'] = u['$navbar-brand-padding-y'] || '.25rem';

  v['$navbar-divider-padding-y'] = u['$navbar-brand-padding-y'] || '.425rem';
  v['$navbar-toggler-padding-y'] = u['$navbar-toggler-padding-y'] || '.25rem';
  v['$navbar-toggler-padding-x'] = u['$navbar-toggler-padding-x'] || '.75rem';
  v['$navbar-toggler-font-size'] = u['$navbar-toggler-font-size'] || '1.25rem';

  v['$navbar-toggler-border-radius'] = u['$navbar-toggler-border-radius'] || '.25rem';
  v['$navbar-light-active-color'] = u['$navbar-light-active-color'] || 'rgba(0, 0, 0, 0.9)';
  v['$navbar-light-color'] = u['$navbar-light-color'] || 'rgba(0, 0, 0, 0.5)';
  v['$navbar-light-hover-color'] = u['$navbar-light-hover-color'] || 'rgba(0, 0, 0, 0.7)';
  v['$navbar-light-toggler-border'] = u['$navbar-light-toggler-border'] || 'rgba(0, 0, 0, 0.1)';
  v['$navbar-light-disabled-color'] = u['$navbar-light-disabled-color'] || 'rgba(0, 0, 0, 0.3)';
  v['$navbar-light-toggler-bg'] = u['$navbar-light-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0, 0, 0, 0.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-active-color'] = u['$navbar-inverse-active-color'] || 'rgb(255, 255, 255)';
  v['$navbar-inverse-color'] = u['$navbar-inverse-color'] || 'rgba(255, 255, 255, 0.5)';
  v['$navbar-inverse-hover-color'] = u['$navbar-inverse-hover-color'] || 'rgba(255, 255, 255, 0.75)';
  v['$navbar-inverse-toggler-border'] = u['$navbar-inverse-toggler-border'] || 'rgba(255, 255, 255, 0.1)';
  v['$navbar-inverse-toggler-bg'] = u['$navbar-inverse-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255, 255, 255, 0.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-disabled-color'] = u['$navbar-inverse-disabled-color'] || 'rgba(255, 255, 255, 0.25)';

  return Object.assign({}, u, v);
};

export default makeTheme();
