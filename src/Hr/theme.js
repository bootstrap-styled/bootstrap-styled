import Color from 'color';

/**
 * BOOTSTRAP THEME HR
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

  // Start with assigning color names to specific hex values.
  v['$black'] = u['$black'] || '#000';

  // Spacing
  //
  // Control the default styling of most Bootstrap elements by modifying these
  // variables. Mostly focused on spacing.
  // You can add more entries to the v['$spacers'] map, should you need more variation.

  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];

  v['$border-width'] = u['$border-width'] || '1px';

  v['$hr-border-width'] = u['$hr-border-width'] || v['$border-width'];

  v['$hr-border-color'] = u['$hr-border-color'] || Color(v['$black']).alpha(0.1).toString();

  return Object.assign({}, u, v);
};

export default makeTheme();
