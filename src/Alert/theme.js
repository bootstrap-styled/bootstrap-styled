import Color from 'color';
import { allowFalseValue } from '../theme/utils';
/**
 * BOOTSTRAP THEME ALERT TAG
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

  // Spacing
  //
  // Control the default styling of most Bootstrap elements by modifying these
  // variables. Mostly focused on spacing.
  // You can add more entries to the v['$spacers'] map, should you need more variation.

  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];
  v['$border-width'] = u['$border-width'] || '1px';

  // Components
  //
  // Define common padding and border radius sizes and more.

  v['$border-radius'] = u['$border-radius'] || '.25rem';

  // Fonts
  //
  // Font, line-height, and color for body text, headings, and more.

  v['$font-weight-bold'] = u['$font-weight-bold'] || 'bold';

  // Alerts
  //
  // Define colors for alerts states.

  v['$state-success-text'] = u['$state-success-text'] || '#3c763d';
  v['$state-success-bg'] = u['$state-success-bg'] || '#dff0d8';
  v['$state-success-border'] = u['$state-success-border'] || Color(v['$state-success-bg']).darken(0.05).toString();

  v['$state-info-text'] = u['$state-info-text'] || '#31708f';
  v['$state-info-bg'] = u['$state-info-bg'] || '#d9edf7';
  v['$state-info-border'] = u['$state-info-border'] || Color(v['$state-info-bg']).darken(0.07).toString();

  v['$state-warning-text'] = u['$state-warning-text'] || '#8a6d3b';
  v['$state-warning-bg'] = u['$state-warning-bg'] || '#fcf8e3';

  v['$mark-bg'] = u['$mark-bg'] || v['$state-warning-bg'];
  v['$state-warning-border'] = u['$state-warning-border'] || Color(v['$state-warning-bg']).darken(0.05).toString();

  v['$state-danger-text'] = u['$state-danger-text'] || '#a94442';
  v['$state-danger-bg'] = u['$state-danger-bg'] || '#f2dede';
  v['$state-danger-border'] = u['$state-danger-border'] || Color(v['$state-danger-bg']).darken(0.05).toString();

  // Define alert colors, border radius, and padding.

  v['$alert-padding-x'] = u['$alert-padding-x'] || '1.25rem';
  v['$alert-padding-y'] = u['$alert-padding-y'] || '.75rem';
  v['$alert-margin-bottom'] = u['$alert-margin-bottom'] || v['$spacer-y'];
  v['$alert-border-radius'] = u['$alert-border-radius'] || v['$border-radius'];
  v['$alert-link-font-weight'] = u['$alert-link-font-weight'] || v['$font-weight-bold'];
  v['$alert-border-width'] = u['$alert-border-width'] || v['$border-width'];

  v['$alert-success-bg'] = u['$alert-success-bg'] || v['$state-success-bg'];
  v['$alert-success-text'] = u['$alert-success-text'] || v['$state-success-text'];
  v['$alert-success-border'] = u['$alert-success-border'] || v['$state-success-border'];

  v['$alert-info-bg'] = u['$alert-info-bg'] || v['$state-info-bg'];
  v['$alert-info-text'] = u['$alert-info-text'] || v['$state-info-text'];
  v['$alert-info-border'] = u['$alert-info-border'] || v['$state-info-border'];

  v['$alert-warning-bg'] = u['$alert-warning-bg'] || v['$state-warning-bg'];
  v['$alert-warning-text'] = u['$alert-warning-text'] || v['$state-warning-text'];
  v['$alert-warning-border'] = u['$alert-warning-border'] || v['$state-warning-border'];

  v['$alert-danger-bg'] = u['$alert-danger-bg'] || v['$state-danger-bg'];
  v['$alert-danger-text'] = u['$alert-danger-text'] || v['$state-danger-text'];
  v['$alert-danger-border'] = u['$alert-danger-border'] || v['$state-danger-border'];

  return Object.assign({}, u, v);
};

export default makeTheme();
