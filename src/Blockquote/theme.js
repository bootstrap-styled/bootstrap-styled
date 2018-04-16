import unitUtils from 'bootstrap-styled-utils/lib/unitUtils';
const { rmUnit, UNIT } = unitUtils;

/**
 * BOOTSTRAP THEME BLOCKQUOTE TAG
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
  // Colors
  //
  // Grayscale and brand colors for use across Bootstrap.
  // Create grayscale
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';

  // Spacing
  //
  // Control the default styling of most Bootstrap elements by modifying these
  // variables. Mostly focused on spacing.
  // You can add more entries to the v['$spacers'] map, should you need more variation.

  v['$spacer'] = u['$spacer'] || '1rem';

  // =============================================================================================================
  // Added by AJT, put up here as it is used along the file and must be defined before used by other variables
  v['$spacer-halved'] = u['$spacer-halved'] || ((rmUnit(v['$spacer'], UNIT.REM) / 2) + UNIT.REM);
  // =============================================================================================================

  // Fonts
  //
  // Font, line-height, and color for body text, headings, and more.
  v['$font-size-base'] = u['$font-size-base'] || '1rem'; // Assumes the browser default, typically `16px`

  v['$blockquote-small-color'] = u['$blockquote-small-color'] || v['$gray-light'];
  v['$blockquote-font-size'] = u['$blockquote-font-size'] || (rmUnit(v['$font-size-base'], UNIT.REM) * 1.25) + UNIT.REM;
  v['$blockquote-border-color'] = u['$blockquote-border-color'] || v['$gray-lighter'];
  v['$blockquote-border-width'] = u['$blockquote-border-width'] || '.25rem';
  return Object.assign({}, u, v);
};

export default makeTheme();
