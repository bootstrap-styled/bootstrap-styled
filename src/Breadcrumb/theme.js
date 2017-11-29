import { allowFalseValue } from '../makeTheme/utils';

/**
 * BOOTSTRAP THEME BREADCRUMB TAG
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

  // Options
  //
  // Quickly modify global styling by enabling or disabling optional features.

  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);

  // Components
  //
  // Define common padding and border radius sizes and more.

  v['$border-radius'] = u['$border-radius'] || '.25rem';

  // Colors
  //
  // Grayscale and brand colors for use across Bootstrap.
  // Create grayscale
  v['$gray-light'] = u['$gray-light'] || '#636c72';

  // Spacing
  //
  // Control the default styling of most Bootstrap elements by modifying these
  // variables. Mostly focused on spacing.
  // You can add more entries to the v['$spacers'] map, should you need more variation.

  v['$spacer'] = u['$spacer'] || '1rem';

  v['$spacer-x'] = u['$spacer-x'] || v['$spacer'];
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];

  // Breadcrumbs

  v['$breadcrumb-padding-y'] = u['$breadcrumb-padding-y'] || '.75rem';
  v['$breadcrumb-padding-x'] = u['$breadcrumb-padding-x'] || '1rem';
  v['$breadcrumb-item-padding'] = u['$breadcrumb-item-padding'] || '.5rem';

  v['$breadcrumb-bg'] = u['$breadcrumb-bg'] || v['$gray-lighter'];
  v['$breadcrumb-divider-color'] = u['$breadcrumb-divider-color'] || v['$gray-light'];
  v['$breadcrumb-active-color'] = u['$breadcrumb-active-color'] || v['$gray-light'];
  v['$breadcrumb-divider'] = u['$breadcrumb-divider'] || '"/"';


  return Object.assign({}, u, v);
};

export default makeTheme();
