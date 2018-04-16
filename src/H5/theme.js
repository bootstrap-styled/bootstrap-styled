import unitUtils from 'bootstrap-styled-utils/lib/unitUtils';
const { rmUnit, UNIT } = unitUtils;
/**
 * BOOTSTRAP THEME H5
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
  // Create grayscale
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';

  // Body
  //
  // Settings for the `<body>` element.
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];

  // Spacing
  //
  // Control the default styling of most Bootstrap elements by modifying these
  // variables. Mostly focused on spacing.
  // You can add more entries to the v['$spacers'] map, should you need more variation.

  v['$spacer'] = u['$spacer'] || '1rem';

  // Fonts
  //
  // Font, line-height, and color for body text, headings, and more.

  v['$font-size-h5'] = u['$font-size-h5'] || '1.25rem';
  v['$headings-margin-bottom'] = u['$headings-margin-bottom'] || (rmUnit(v['$spacer'], UNIT.REM) / 2) + UNIT.REM;

  v['$headings-font-family'] = u['$headings-font-family'] || 'inherit';
  v['$headings-font-weight'] = u['$headings-font-weight'] || '500';
  v['$headings-line-height'] = u['$headings-line-height'] || '1.1';
  v['$headings-color'] = u['$headings-color'] || 'inherit';

  v['$display1-size'] = u['$display1-size'] || '6rem';
  v['$display2-size'] = u['$display2-size'] || '5.5rem';
  v['$display3-size'] = u['$display3-size'] || '4.5rem';
  v['$display4-size'] = u['$display4-size'] || '3.5rem';

  v['$display1-weight'] = u['$display1-weight'] || '300';
  v['$display2-weight'] = u['$display2-weight'] || '300';
  v['$display3-weight'] = u['$display3-weight'] || '300';
  v['$display4-weight'] = u['$display4-weight'] || '300';

  v['$lead-font-size'] = u['$lead-font-size'] || '1.25rem';
  v['$lead-font-weight'] = u['$lead-font-weight'] || '300';

  return Object.assign({}, u, v);
};

export default makeTheme();
