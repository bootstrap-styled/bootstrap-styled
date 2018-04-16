import { assertAscending, assertStartAtZero } from 'bootstrap-styled-mixins/lib/variables';
import { allowFalseValue } from '../theme/utils';
/**
 * BOOTSTRAP THEME JUMBOTRON
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

  // Colors
  //
  // Grayscale and brand colors for use across Bootstrap.
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';

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

  // Components
  //
  // Define common padding and border radius sizes and more.

  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';

  // Jumbotron

  v['$jumbotron-padding'] = u['$jumbotron-padding'] || '2rem';
  v['$jumbotron-bg'] = u['$jumbotron-bg'] || v['$gray-lighter'];


  return Object.assign({}, u, v);
};

export default makeTheme();
