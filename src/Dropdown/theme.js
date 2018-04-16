import Color from 'color';
import unitUtils from 'bootstrap-styled-utils/lib/unitUtils';
import { allowFalseValue } from '../theme/utils';

const { rmUnit, UNIT } = unitUtils;

/**
 * BOOTSTRAP THEME DROPDOWN
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
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$enable-gradients'] = allowFalseValue(u['$enable-gradients'], false);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);

  // Colors
  //
  // Start with assigning color names to specific hex values.
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';

  // Create grayscale
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';

  // Reassign color vars to semantic color scheme
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];

  // Spacing
  //
  // Control the default styling of most Bootstrap elements by modifying these
  // variables. Mostly focused on spacing.
  // You can add more entries to the v['$spacers'] map, should you need more variation.

  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];
  v['$border-width'] = u['$border-width'] || '1px';

  // Fonts
  //
  // Font, line-height, and color for body text, headings, and more.
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';
  v['$font-weight-normal'] = u['$font-weight-normal'] || 'normal';
  v['$font-size-base'] = u['$font-size-base'] || '1rem'; // Assumes the browser default, typically `16px`
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';

  // Z-index master list
  //
  // Warning = 'Avoid customizing these values. They're used for a bird's eye view
  // of components dependent on the z-axis and are designed to all work together.

  v['$zindex-dropdown-backdrop'] = u['$zindex-dropdown-backdrop'] || '990';
  v['$zindex-dropdown'] = u['$zindex-dropdown'] || '1000';

  // Components
  //
  // Define common padding and border radius sizes and more.
  v['$component-active-color'] = u['$component-active-color'] || v['$white'];
  v['$component-active-bg'] = u['$component-active-bg'] || v['$brand-primary'];
  v['$caret-width'] = u['$caret-width'] || '.3em';
  v['$line-height-lg'] = u['$line-height-lg'] || '1.6';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';

  // Forms
  v['$input-padding-y-lg'] = u['$input-padding-y-lg'] || '.75rem';

  // Dropdowns
  //
  // Dropdown menu container and contents.

  v['$dropdown-min-width'] = u['$dropdown-min-width'] || '10rem';
  v['$dropdown-padding-y'] = u['$dropdown-padding-y'] || '.5rem';
  v['$dropdown-margin-top'] = u['$dropdown-margin-top'] || '.125rem';
  v['$dropdown-bg'] = u['$dropdown-bg'] || v['$white'];
  v['$dropdown-border-color'] = u['$dropdown-border-color'] || Color(v['$black']).alpha(0.15).toString();
  v['$dropdown-border-width'] = u['$dropdown-border-width'] || v['$border-width'];
  v['$dropdown-divider-bg'] = u['$dropdown-divider-bg'] || v['$gray-lighter'];
  v['$dropdown-box-shadow'] = u['$dropdown-box-shadow'] || `0 .5rem 1rem rgba(${v['$black']},.175)`;

  v['$dropdown-link-color'] = u['$dropdown-link-color'] || v['$gray-dark'];
  v['$dropdown-link-hover-color'] = u['$dropdown-link-hover-color'] || Color(v['$gray-dark']).darken(0.05).toString();
  v['$dropdown-link-hover-bg'] = u['$dropdown-link-hover-bg'] || v['$gray-lightest'];

  v['$dropdown-link-active-color'] = u['$dropdown-link-active-color'] || v['$component-active-color'];
  v['$dropdown-link-active-bg'] = u['$dropdown-link-active-bg'] || v['$component-active-bg'];

  v['$dropdown-link-disabled-color'] = u['$dropdown-link-disabled-color'] || v['$gray-light'];

  v['$dropdown-item-padding-x'] = u['$dropdown-item-padding-x'] || '1.5rem';

  v['$dropdown-header-color'] = u['$dropdown-header-color'] || v['$gray-light'];

  // Forms
  v['$input-btn-border-width'] = u['$input-btn-border-width'] || v['$border-width']; // For form controls and buttons
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';

  // Buttons
  //
  // For each of Bootstrap's buttons, define text, background and border color.

  v['$btn-padding-x'] = u['$btn-padding-x'] || '1rem';
  v['$btn-active-box-shadow'] = u['$btn-active-box-shadow'] || `inset 0 3px 5px ${Color(v['$black']).alpha(0.125).toString()}`;
  v['$btn-padding-x-lg'] = u['$btn-padding-x-lg'] || '1.5rem';
  v['$btn-padding-y-lg'] = u['$btn-padding-y-lg'] || '.75rem';

  v['$btn-border-radius-lg'] = u['$btn-border-radius-lg'] || v['$border-radius-lg'];
  v['$btn-border-radius-sm'] = u['$btn-border-radius-sm'] || v['$border-radius-sm'];

  v['$btn-padding-x-sm'] = u['$btn-padding-x-sm'] || '.5rem';
  v['$btn-padding-y-sm'] = u['$btn-padding-y-sm'] || '.25rem';

  v['$input-height-lg'] = u['$input-height-lg'] || ((rmUnit(v['$font-size-lg'], UNIT.REM) * v['$line-height-lg']) + (rmUnit(v['$input-padding-y-lg'], UNIT.REM) * 2) + UNIT.REM);

  return Object.assign({}, u, v);
};

export default makeTheme();
