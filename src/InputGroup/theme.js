import Color from 'color';
import unitUtils from 'bootstrap-styled-utils/lib/unitUtils';
import { allowFalseValue } from '../theme/utils';
const { rmUnit, UNIT } = unitUtils;

/**
 * BOOTSTRAP THEME INPUTGROUP
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
  v['$enable-transitions'] = allowFalseValue(u['$enable-transitions'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);

  // Spacing

  v['$border-width'] = u['$border-width'] || '1px';

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

  // Fonts
  //
  // Font, line-height, and color for body text, headings, and more.

  v['$font-size-base'] = u['$font-size-base'] || '1rem'; // Assumes the browser default, typically `16px`
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';
  v['$font-size-xs'] = u['$font-size-xs'] || '.75rem';
  v['$line-height-base'] = u['$line-height-base'] || '1.5';

  // Components
  //
  // Define common padding and border radius sizes and more.
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';

  // Forms

  v['$input-padding-x'] = u['$input-padding-x'] || '.75rem';
  v['$input-padding-y'] = u['$input-padding-y'] || '.5rem';

  v['$input-bg'] = u['$input-bg'] || v['$white'];
  v['$input-bg-disabled'] = u['$input-bg-disabled'] || v['$gray-lighter'];

  v['$input-padding-x-lg'] = u['$input-padding-x-lg'] || '1.5rem';
  v['$input-padding-y-lg'] = u['$input-padding-y-lg'] || '.75rem';
  v['$input-line-height'] = u['$input-line-height'] || '1.25';
  v['$input-height'] = u['$input-height'] || ((rmUnit(v['$font-size-base'], UNIT.REM) * v['$line-height-base']) + (rmUnit(v['$input-padding-y'], UNIT.REM) * 2) + UNIT.REM);
  v['$input-box-shadow'] = u['$input-box-shadow'] || `inset 0 1px 1px ${Color(v['$black']).alpha(0.075).toString()}`;

  v['$input-btn-border-width'] = u['$input-btn-border-width'] || v['$border-width']; // For form controls and buttons

  v['$input-group-addon-bg'] = u['$input-group-addon-bg'] || v['$gray-lighter'];
  v['$input-border-color'] = u['$input-border-color'] || Color(v['$black']).alpha(0.15).toString();
  v['$input-border-focus'] = u['$input-border-focus'] || Color(v['$brand-primary']).lighten(0.25).toString();
  v['$input-box-shadow-focus'] = u['$input-box-shadow-focus'] || `${v['$input-box-shadow']}, 0 0 8px rgba(${v['$input-border-focus']},.6)`;

  v['$input-color'] = u['$input-color'] || v['$gray'];
  v['$input-group-addon-border-color'] = u['$input-group-addon-border-color'] || v['$input-border-color'];

  v['$input-padding-x-sm'] = u['$input-padding-x-sm'] || '.5rem';
  v['$input-padding-y-sm'] = u['$input-padding-y-sm'] || '.25rem';
  v['$input-color-placeholder'] = u['$input-color-placeholder'] || v['$gray-light'];

  v['$input-border-radius-lg'] = u['$input-border-radius-lg'] || v['$border-radius-lg'];
  v['$input-border-radius-sm'] = u['$input-border-radius-sm'] || v['$border-radius-sm'];
  v['$input-border-radius'] = u['$input-border-radius'] || v['$border-radius'];

  v['$input-transition'] = u['$input-transition'] || 'border-color ease-in-out .15s, box-shadow ease-in-out .15s';
  v['$input-color-focus'] = u['$input-color-focus'] || v['$input-color'];
  v['$input-bg-focus'] = u['$input-bg-focus'] || v['$input-bg'];

  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';

  return Object.assign({}, u, v);
};

export default makeTheme();
