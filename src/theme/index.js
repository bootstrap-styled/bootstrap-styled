import Color from '@bootstrap-styled/color';
import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';
import { allowFalseValue, assertAscending, assertStartAtZero } from './utils';
// import { linearGradientRe } from '../utils/regex';

const { detectUnit, rmUnit } = unitUtils;


/**
 * ORIGINAL BOOTSTRAP THEME
 *
 * this file is not meant to be used and must be kept as original
 * @param userTheme
 */
function makeOriginal(userTheme = {}) {
  /* eslint dot-notation: 'off', new-cap: 'off' */
  // Variables
  //
  // Copy settings from this file into the provided `_custom.scss` to override
  // the Bootstrap defaults without modifying key, versioned files.
  const v = {};
  const u = userTheme;

  let detectedUnit;

  v._name = u._name || 'bootstrap-styled'; // eslint-disable-line

  // Table of Contents
  //
  // Colors
  // Options
  // Spacing
  // Body
  // Links
  // Grid breakpoints
  // Grid containers
  // Grid columns
  // Fonts
  // Components
  // Tables
  // Buttons
  // Forms
  // Dropdowns
  // Z-index master list
  // Navbar
  // Navs
  // Pagination
  // Jumbotron
  // Form states and alerts
  // Cards
  // Tooltips
  // Popovers
  // Badges
  // Modals
  // Alerts
  // Progress bars
  // List group
  // Image thumbnails
  // Figures
  // Breadcrumbs
  // Carousel
  // Close
  // Code

  // General variable structure
  //
  // Variable format should follow the `v['$component-modifier-state-property']` order.


  // Colors
  //
  // Grayscale and brand colors for use across Bootstrap.

  // Start with assigning color names to specific hex values.

  // Create grayscale
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$gray-100'] = u['$gray-100'] || '#f8f9fa';
  v['$gray-200'] = u['$gray-200'] || '#e9ecef';
  v['$gray-300'] = u['$gray-300'] || '#dee2e6';
  v['$gray-400'] = u['$gray-400'] || '#ced4da';
  v['$gray-500'] = u['$gray-500'] || '#adb5bd';
  v['$gray-600'] = u['$gray-600'] || '#6c757d';
  v['$gray-700'] = u['$gray-700'] || '#495057';
  v['$gray-800'] = u['$gray-800'] || '#343a40';
  v['$gray-900'] = u['$gray-900'] || '#212529';

  v['$grays'] = u['$grays'] || {
    100: v['$gray-100'],
    200: v['$gray-200'],
    300: v['$gray-300'],
    400: v['$gray-400'],
    500: v['$gray-500'],
    600: v['$gray-600'],
    700: v['$gray-700'],
    800: v['$gray-800'],
    900: v['$gray-900'],
  };

  v['$blue'] = u['$blue'] || '#007bff';
  v['$indigo'] = u['$indigo'] || '#6610f2';
  v['$purple'] = u['$purple'] || '#6f42c1';
  v['$pink'] = u['$pink'] || '#e83e8c';
  v['$red'] = u['$red'] || '#dc3545';
  v['$orange'] = u['$orange'] || '#fd7e14';
  v['$yellow'] = u['$yellow'] || '#ffc107';
  v['$green'] = u['$green'] || '#28a745';
  v['$teal'] = u['$teal'] || '#20c997';
  v['$cyan'] = u['$cyan'] || '#17a2b8';

  v['$colors'] = u['$colors'] || {
    blue: v['$blue'],
    indigo: v['$indigo'],
    purple: v['$purple'],
    pink: v['$pink'],
    red: v['$red'],
    orange: v['$orange'],
    yellow: v['$yellow'],
    green: v['$green'],
    teal: v['$teal'],
    cyan: v['$cyan'],
  };

  v['$primary'] = u['$primary'] || v['$blue'];
  v['$secondary'] = u['$secondary'] || v['$gray-600'];
  v['$success'] = u['$success'] || v['$green'];
  v['$info'] = u['$info'] || v['$cyan'];
  v['$warning'] = u['$warning'] || v['$yellow'];
  v['$danger'] = u['$danger'] || v['$red'];
  v['$light'] = u['$light'] || v['$gray-100'];
  v['$dark'] = u['$dark'] || v['$gray-800'];

  v['$theme-colors'] = u['$theme-colors'] || {
    primary: v['$primary'],
    secondary: v['$secondary'],
    success: v['$success'],
    info: v['$info'],
    warning: v['$warning'],
    danger: v['$danger'],
    light: v['$light'],
    dark: v['$dark'],
  };

  // Set a specific jump point for requesting color jumps
  v['$theme-color-interval'] = u['$theme-color-interval'] || '8%';

  // The yiq lightness value that determines when the lightness of color changes from "dark" to "light". Acceptable values are between 0 and 255.
  v['$yiq-contrasted-threshold'] = u['$yiq-contrasted-threshold'] || '150';

  // Customize the light and dark text colors for use in our YIQ color contrast function.
  v['$yiq-text-dark'] = u['$yiq-text-dark'] || v['$gray-900'];
  v['$yiq-text-light'] = u['$yiq-text-light'] || v['$white'];

  // Options
  //
  // Quickly modify global styling by enabling or disabling optional features.

  v['$enable-caret'] = allowFalseValue(u['$enable-caret'], true);
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$enable-gradients'] = allowFalseValue(u['$enable-gradients'], false);
  v['$enable-transitions'] = allowFalseValue(u['$enable-transitions'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$enable-grid-classes'] = allowFalseValue(u['$enable-grid-classes'], true);
  v['$enable-print-styles'] = allowFalseValue(u['$enable-print-styles'], true);

  // Spacing
  //
  // Control the default styling of most Bootstrap elements by modifying these
  // variables. Mostly focused on spacing.
  // You can add more entries to the v['$spacers'] map, should you need more variation.

  v['$spacer'] = u['$spacer'] || '1rem';

  // =============================================================================================================
  // Added by AJT, put up here as it is used along the file and must be defined before used by other variables
  detectedUnit = detectUnit(v['$spacer']);
  v['$spacer-halved'] = u['$spacer-halved'] || ((rmUnit(v['$spacer'], detectedUnit) / 2) + detectedUnit);
  // =============================================================================================================

  v['$spacer-x'] = u['$spacer-x'] || v['$spacer'];
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];
  v['$spacers'] = u['$spacers'] || {
    0: {
      x: 0,
      y: 0,
    },
    1: {
      x: (rmUnit(v['$spacer-x']) * 0.25) + detectedUnit,
      y: (rmUnit(v['$spacer-y']) * 0.25) + detectedUnit,
    },
    2: {
      x: (rmUnit(v['$spacer-x']) * 0.5) + detectedUnit,
      y: (rmUnit(v['$spacer-y']) * 0.5) + detectedUnit,
    },
    3: {
      x: v['$spacer-x'],
      y: v['$spacer-y'],
    },
    4: {
      x: (rmUnit(v['$spacer-x']) * 1.5) + detectedUnit,
      y: (rmUnit(v['$spacer-y']) * 1.5) + detectedUnit,
    },
    5: {
      x: (rmUnit(v['$spacer-x']) * 3) + detectedUnit,
      y: (rmUnit(v['$spacer-y']) * 3) + detectedUnit,
    },
  };
  v['$border-width'] = u['$border-width'] || '1px';

  // This variable affects the `.h-*` and `.w-*` classes.
  v['$sizes'] = u['$sizes'] || {
    25: '25%',
    50: '50%',
    75: '75%',
    100: '100%',
  };

  // Body
  //
  // Settings for the `<body>` element.

  v['$body-bg'] = u['$body-bg'] || v['$white'];
  v['$body-color'] = u['$body-color'] || v['$gray-900'];

  // Links
  //
  // Style anchor elements.

  v['$link-color'] = u['$link-color'] || v['$theme-colors'].primary;
  v['$link-decoration'] = u['$link-decoration'] || 'none';
  v['$link-hover-color'] = u['$link-hover-color'] || Color(v['$link-color']).darken(0.15).toString();
  v['$link-hover-decoration'] = u['$link-hover-decoration'] || 'underline';

  // Paragraphs
  //
  // Style p element.

  v['$paragraph-margin-bottom'] = u['$paragraph-margin-bottom'] || '1rem';

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
    xxl: '1452px',
  };
  assertAscending(v['$grid-breakpoints'], '$grid-breakpoints');
  assertStartAtZero(v['$grid-breakpoints']);

  // Grid containers
  //
  // Define the maximum width of `.container` for different screen sizes.

  v['$container-max-widths'] = u['$container-max-widths'] || {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
  };
  assertAscending(v['$container-max-widths'], '$container-max-widths');


  // Grid columns
  //
  // Set the number of columns and specify the width of the gutters.

  v['$grid-columns'] = u['$grid-columns'] || '12';
  v['$grid-gutter-width'] = u['$grid-gutter-width'] || '30px';

  // Components
  //
  // Define common padding and border radius sizes and more.

  v['$line-height-lg'] = u['$line-height-lg'] || '1.5';
  v['$line-height-sm'] = u['$line-height-sm'] || '1.5';

  v['$border-width'] = u['$border-width'] || '1px';
  v['$border-color'] = u['$border-color'] || v['$gray-300'];

  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';

  v['$component-active-color'] = u['$component-active-color'] || v['$white'];
  v['$component-active-bg'] = u['$component-active-bg'] || v['$theme-colors'].primary;

  v['$caret-width'] = u['$caret-width'] || '.3em';

  v['$transition-base'] = u['$transition-base'] || 'all .2s ease-in-out';
  v['$transition-fade'] = u['$transition-fade'] || 'opacity .15s linear';
  v['$transition-collapse'] = u['$transition-collapse'] || 'height .35s ease';

  // Fonts
  //
  // Font, line-height, and color for body text, headings, and more.
  v['$font-family-sans-serif'] = u['$font-family-sans-serif'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  v['$font-family-monospace'] = u['$font-family-monospace'] || 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  v['$font-family-base'] = u['$font-family-base'] || v['$font-family-sans-serif'];

  v['$font-size-base'] = u['$font-size-base'] || '1rem'; // Assumes the browser default, typically `16px`
  detectedUnit = detectUnit(v['$font-size-base']);
  v['$font-size-lg'] = u['$font-size-lg'] || (rmUnit(v['$font-size-base']) * 1.25) + detectedUnit;
  v['$font-size-sm'] = u['$font-size-sm'] || (rmUnit(v['$font-size-base']) * 0.875) + detectedUnit;

  v['$font-weight-light'] = u['$font-weight-light'] || '300';
  v['$font-weight-normal'] = u['$font-weight-normal'] || '400';
  v['$font-weight-bold'] = u['$font-weight-bold'] || '700';

  v['$font-weight-base'] = u['$font-weight-base'] || v['$font-weight-normal'];
  v['$line-height-base'] = u['$line-height-base'] || '1.5';

  v['$h1-font-size'] = u['$h1-font-size'] || (rmUnit(v['$font-size-base']) * 2.5) + detectedUnit;
  v['$h2-font-size'] = u['$h2-font-size'] || (rmUnit(v['$font-size-base']) * 2) + detectedUnit;
  v['$h3-font-size'] = u['$h3-font-size'] || (rmUnit(v['$font-size-base']) * 1.75) + detectedUnit;
  v['$h4-font-size'] = u['$h4-font-size'] || (rmUnit(v['$font-size-base']) * 1.5) + detectedUnit;
  v['$h5-font-size'] = u['$h5-font-size'] || (rmUnit(v['$font-size-base']) * 1.25) + detectedUnit;
  v['$h6-font-size'] = u['$h6-font-size'] || v['$font-size-base'];

  detectedUnit = detectUnit(v['$spacer']);
  v['$headings-margin-bottom'] = u['$headings-margin-bottom'] || (rmUnit(v['$spacer'], detectedUnit) / 2) + detectedUnit;
  v['$headings-font-family'] = u['$headings-font-family'] || 'inherit';
  v['$headings-font-weight'] = u['$headings-font-weight'] || '500';
  v['$headings-line-height'] = u['$headings-line-height'] || '1.2';
  v['$headings-color'] = u['$headings-color'] || 'inherit';

  v['$display1-size'] = u['$display1-size'] || '6rem';
  v['$display2-size'] = u['$display2-size'] || '5.5rem';
  v['$display3-size'] = u['$display3-size'] || '4.5rem';
  v['$display4-size'] = u['$display4-size'] || '3.5rem';

  v['$display1-weight'] = u['$display1-weight'] || '300';
  v['$display2-weight'] = u['$display2-weight'] || '300';
  v['$display3-weight'] = u['$display3-weight'] || '300';
  v['$display4-weight'] = u['$display4-weight'] || '300';
  v['$display-line-height'] = u['$display-line-height'] || v['$headings-line-height'];

  detectedUnit = detectUnit(v['$font-size-base']);
  v['$lead-font-size'] = u['$lead-font-size'] || (rmUnit(v['$font-size-base']) * 1.25) + detectedUnit;
  v['$lead-font-weight'] = u['$lead-font-weight'] || '300';

  v['$small-font-size'] = u['$small-font-size'] || '80%';

  v['$text-muted'] = u['$text-muted'] || v['$gray-600'];

  v['$blockquote-small-color'] = u['$blockquote-small-color'] || v['$gray-600'];
  v['$blockquote-font-size'] = u['$blockquote-font-size'] || (rmUnit(v['$font-size-base'], detectedUnit) * 1.25) + detectedUnit;

  v['$hr-border-color'] = u['$hr-border-color'] || Color(v['$black']).alpha(0.1).toString();
  v['$hr-border-width'] = u['$hr-border-width'] || v['$border-width'];

  v['$mark-padding'] = u['$mark-padding'] || '.2em';

  v['$dt-font-weight'] = u['$dt-font-weight'] || v['$font-weight-bold'];

  v['$kbd-box-shadow'] = u['$kbd-box-shadow'] || `inset 0 -.1rem 0 ${Color(v['$black']).alpha(0.25).toString()}`;
  v['$nested-kbd-font-weight'] = u['$nested-kbd-font-weight'] || v['$font-weight-bold'];

  v['$list-inline-padding'] = u['$list-inline-padding'] || '.5rem';

  v['$mark-bg'] = u['$mark-bg'] || '#fcf8e3';

  v['$hr-margin-y'] = u['$hr-margin-y'] || v['$spacer'];

  // Tables
  //
  // Customizes the `.table` component with basic values, each used across all table variations.

  v['$table-cell-padding'] = u['$table-cell-padding'] || '.75rem';
  v['$table-sm-cell-padding'] = u['$table-cell-sm-padding'] || '.3rem';

  v['$table-bg'] = u['$table-bg'] || 'transparent';
  v['$table-bg-accent'] = u['$table-bg-accent'] || Color(v['$black']).alpha(0.05).toString();
  v['$table-bg-hover'] = u['$table-bg-hover'] || Color(v['$black']).alpha(0.075).toString();
  v['$table-bg-active'] = u['$table-bg-active'] || v['$table-bg-hover'];

  v['$table-border-width'] = u['$table-border-width'] || v['$border-width'];
  v['$table-border-color'] = u['$table-border-color'] || v['$gray-300'];

  v['$table-head-bg'] = u['$table-head-bg'] || v['$gray-200'];
  v['$table-head-color'] = u['$table-head-color'] || v['$gray-700'];

  v['$table-dark-bg'] = u['$table-dark-bg'] || v['$gray-900'];
  v['$table-dark-accent-bg'] = u['$table-dark-accent-bg'] || Color(v['$white']).alpha(0.05).toString();
  v['$table-dark-hover-bg'] = u['$table-inverse-hover-bg'] || Color(v['$white']).alpha(0.075).toString();
  v['$table-dark-border-color'] = u['$table-dark-border-color'] || Color(v['$gray-900']).lighten(0.075).toString();
  v['$table-dark-color'] = u['$table-dark-color'] || v['$body-bg'];

  // Buttons + Forms
  //
  // Shared variables that are reassigned to `$input-` and `$btn-` specific variables.

  v['$input-btn-padding-y'] = u['$input-btn-padding-y'] || '.375rem';
  v['$input-btn-padding-x'] = u['$input-btn-padding-x'] || '.75rem';
  v['$input-btn-line-height'] = u['$input-btn-line-height'] || v['$line-height-base'];

  v['$input-btn-focus-width'] = u['$input-btn-focus-width'] || '.2rem';
  v['$input-btn-focus-color'] = u['$input-btn-focus-color'] || Color(v['$component-active-bg']).alpha(0.25).toString();
  v['$input-btn-focus-box-shadow'] = u['$input-btn-focus-box-shadow'] || `0 0 0 ${v['$input-btn-focus-width']} ${v['$input-btn-focus-color']}`;

  v['$input-btn-padding-y-sm'] = u['$input-btn-padding-y-sm'] || '.25rem';
  v['$input-btn-padding-x-sm'] = u['$input-btn-padding-x-sm'] || '.5rem';
  v['$input-btn-line-height-sm'] = u['$input-btn-line-height-sm'] || v['$line-height-sm'];

  v['$input-btn-padding-y-lg'] = u['$input-btn-padding-y-lg'] || '.5rem';
  v['$input-btn-padding-x-lg'] = u['$input-btn-padding-x-lg'] || '1rem';
  v['$input-btn-line-height-lg'] = u['$input-btn-line-height-lg'] || v['$line-height-lg'];

  v['$input-btn-border-width'] = u['$input-btn-border-width'] || v['$border-width'];

  // Buttons
  //
  // For each of Bootstrap's buttons, define text, background and border color.

  v['$btn-padding-x'] = u['$btn-padding-x'] || v['$input-btn-padding-x'];
  v['$btn-padding-y'] = u['$btn-padding-y'] || v['$input-btn-padding-y'];
  v['$btn-line-height'] = u['$btn-line-height'] || v['$input-btn-line-height'];

  v['$btn-padding-x-sm'] = u['$btn-padding-x-sm'] || v['$input-btn-padding-x-sm'];
  v['$btn-padding-y-sm'] = u['$btn-padding-y-sm'] || v['$input-btn-padding-y-sm'];
  v['$btn-line-height-sm'] = u['$btn-line-height-sm'] || v['$input-btn-line-height-sm'];

  v['$btn-padding-x-lg'] = u['$btn-padding-x-lg'] || v['$input-btn-padding-x-lg'];
  v['$btn-padding-y-lg'] = u['$btn-padding-y-lg'] || v['$input-btn-padding-y-lg'];
  v['$btn-line-height-lg'] = u['$btn-line-height-lg'] || v['$input-btn-line-height-lg'];

  v['$btn-border-width'] = u['$btn-border-width'] || v['$input-btn-border-width'];

  v['$btn-font-weight'] = u['$btn-font-weight'] || v['$font-weight-normal'];
  v['$btn-box-shadow'] = u['$btn-box-shadow'] || `inset 0 1px 0 ${Color(v['$white']).alpha(0.15).toString()}, 0 1px 1px ${Color(v['$black']).alpha(0.075).toString()}`;
  v['$btn-focus-width'] = u['$btn-focus-width'] || v['$input-btn-focus-width'];
  v['$btn-focus-box-shadow'] = u['$btn-focus-box-shadow'] || v['$input-btn-focus-box-shadow'];
  v['$btn-disabled-opacity'] = u['$btn-disabled-opacity'] || '.65';
  v['$btn-active-box-shadow'] = u['$btn-active-box-shadow'] || `inset 0 3px 5px ${Color(v['$black']).alpha(0.125).toString()}`;

  v['$btn-link-disabled-color'] = u['$btn-link-disabled-color'] || v['$gray-600'];

  v['$btn-block-spacing-y'] = u['$btn-block-spacing-y'] || '.5rem';

  // Allows for customizing button radius independently from global border radius
  v['$btn-border-radius'] = u['$btn-border-radius'] || v['$border-radius'];
  v['$btn-border-radius-lg'] = u['$btn-border-radius-lg'] || v['$border-radius-lg'];
  v['$btn-border-radius-sm'] = u['$btn-border-radius-sm'] || v['$border-radius-sm'];

  v['$btn-transition'] = u['$btn-transition'] || 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out';

  // v['$btn-primary-color'] = u['$btn-primary-color'] || v['$white'];
  // v['$btn-primary-bg'] = u['$btn-primary-bg'] || v['$brand-primary'];
  //
  // v['$btn-secondary-color'] = u['$btn-secondary-color'] || v['$gray-dark'];
  // v['$btn-secondary-bg'] = u['$btn-secondary-bg'] || v['$white'];
  //
  // v['$btn-info-color'] = u['$btn-info-color'] || v['$white'];
  // v['$btn-info-bg'] = u['$btn-info-bg'] || v['$brand-info'];
  //
  // v['$btn-success-color'] = u['$btn-success-color'] || v['$white'];
  // v['$btn-success-bg'] = u['$btn-success-bg'] || v['$brand-success'];
  //
  // v['$btn-warning-color'] = u['$btn-warning-color'] || v['$white'];
  // v['$btn-warning-bg'] = u['$btn-warning-bg'] || v['$brand-warning'];
  //
  // v['$btn-danger-color'] = u['$btn-danger-color'] || v['$white'];
  // v['$btn-danger-bg'] = u['$btn-danger-bg'] || v['$brand-danger'];
  //
  // /* this improvement will solve the linear-gradient when used for the background */
  // v['$theme-colors'].forEach((color) => {
  //   if (v[`$btn-${color}-bg`].includes('linear-gradient')) {
  //     v[`$btn-${color}-border`] = v[`$btn-${color}-bg`].match(linearGradientRe)[1]; // eslint-disable-line prefer-destructuring
  //   } else if (color === 'secondary') {
  //     // secondary is having a white background, they use by default #ccc to make it look like a button
  //     v['$btn-secondary-border'] = u['$btn-secondary-border'] || '#ccc';
  //   } else {
  //     v[`$btn-${color}-border`] = u[`$btn-${color}-border`] || v[`$btn-${color}-bg`];
  //   }
  // });

  // Forms

  v['$input-padding-x'] = u['$input-padding-x'] || v['$input-btn-padding-x'];
  v['$input-padding-y'] = u['$input-padding-y'] || v['$input-btn-padding-y'];
  v['$input-line-height'] = u['$input-line-height'] || v['$input-btn-line-height'];

  v['$input-padding-x-sm'] = u['$input-padding-x-sm'] || v['$input-btn-padding-x-sm'];
  v['$input-padding-y-sm'] = u['$input-padding-y-sm'] || v['$input-btn-padding-y-sm'];
  v['$input-line-height'] = u['$input-line-height'] || v['$input-btn-line-height-sm'];

  v['$input-padding-x-lg'] = u['$input-padding-x-lg'] || v['$input-btn-padding-x-lg'];
  v['$input-padding-y-lg'] = u['$input-padding-y-lg'] || v['$input-btn-padding-y-lg'];
  v['$input-line-height'] = u['$input-line-height'] || v['$input-btn-line-height-lg'];

  v['$input-bg'] = u['$input-bg'] || v['$white'];
  v['$input-bg-disabled'] = u['$input-bg-disabled'] || v['$gray-200'];

  v['$input-color'] = u['$input-color'] || v['$gray-700'];
  v['$input-border-color'] = u['$input-border-color'] || v['$gray-400'];
  v['$input-border-width'] = u['$input-border-width'] || v['$input-btn-border-width'];
  v['$input-box-shadow'] = u['$input-box-shadow'] || `inset 0 1px 1px ${Color(v['$black']).alpha(0.075).toString()}`;

  v['$input-border-radius'] = u['$input-border-radius'] || v['$border-radius'];
  v['$input-border-radius-lg'] = u['$input-border-radius-lg'] || v['$border-radius-lg'];
  v['$input-border-radius-sm'] = u['$input-border-radius-sm'] || v['$border-radius-sm'];

  v['$input-focus-bg'] = u['$input-focus-bg'] || v['$input-bg'];
  v['$input-focus-border-color'] = u['$input-focus-border-color'] || Color(v['$component-active-bg']).lighten(0.25).toString();
  v['$input-focus-color'] = u['$input-focus-color'] || v['$input-color'];
  v['$input-focus-width'] = u['$input-focus-color'] || v['$input-btn-focus-width'];
  v['$input-focus-box-shadow'] = u['$input-focus-box-shadow'] || v['$input-btn-focus-box-shadow'];

  v['$input-placeholder-color'] = u['$input-placeholder-color'] || v['$gray-600'];

  detectedUnit = detectUnit(v['$input-border-width']);
  v['$input-height-border'] = u['$input-height-border'] || (rmUnit(v['$input-border-width'], detectedUnit) * 2) + detectedUnit;

  detectedUnit = detectUnit(v['$font-size-base']);

  v['$input-height-inner'] = u['$input-height-inner'] || (rmUnit(v['$font-size-base'], detectedUnit) * (rmUnit(v['$input-btn-line-height'], detectedUnit)) + (rmUnit(v['$input-btn-padding-y'], detectedUnit) * 2) + detectedUnit);
  v['$input-height'] = u['$input-height'] || (rmUnit(v['$input-height-inner'], detectedUnit) + (rmUnit(v['$input-height-border'], detectedUnit)) + detectedUnit);

  v['$input-height-inner-sm'] = u['$input-height-inner-sm'] || (rmUnit(v['$font-size-sm'], detectedUnit) * (rmUnit(v['$input-btn-line-height-sm'], detectedUnit)) + (rmUnit(v['$input-btn-padding-y-sm'], detectedUnit) * 2) + detectedUnit);
  v['$input-height-sm'] = u['$input-height-sm'] || (rmUnit(v['$input-height-inner-sm'], detectedUnit) + (rmUnit(v['$input-height-border'], detectedUnit)) + detectedUnit);

  v['$input-height-inner-lg'] = u['$input-height-inner-lg'] || (rmUnit(v['$font-size-lg'], detectedUnit) * (rmUnit(v['$input-btn-line-height-lg'], detectedUnit)) + (rmUnit(v['$input-btn-padding-y-lg'], detectedUnit) * 2) + detectedUnit);
  v['$input-height-lg'] = u['$input-height-lg'] || (rmUnit(v['$input-height-inner-lg'], detectedUnit) + (rmUnit(v['$input-height-border'], detectedUnit)) + detectedUnit);

  v['$input-transition'] = u['$input-transition'] || 'border-color ease-in-out .15s, box-shadow ease-in-out .15s';

  v['$form-text-margin-top'] = u['$form-text-margin-top'] || '.25rem';

  v['$form-check-input-gutter'] = u['$form-check-input-gutter'] || '1.25rem';
  v['$form-check-input-margin-y'] = u['$form-check-input-margin-y'] || '.3rem';
  v['$form-check-input-margin-x'] = u['$form-check-input-margin-x'] || '.25rem';

  v['$form-check-inline-margin-x'] = u['$form-check-inline-margin-x'] || '.75rem';
  v['$form-check-inline-input-margin-x'] = u['$form-check-inline-input-margin-x'] || '.3125rem';

  v['$form-group-margin-bottom'] = u['$form-group-margin-bottom'] || '1rem';

  v['$input-group-addon-color'] = u['$input-group-addon-color'] || v['$input-color'];
  v['$input-group-addon-bg'] = u['$input-group-addon-bg'] || v['$gray-200'];
  v['$input-group-addon-border-color'] = u['$input-group-addon-border-color'] || v['$input-border-color'];

  v['$custom-control-gutter'] = u['$custom-control-gutter'] || '1.5rem';
  v['$custom-control-spacer-x'] = u['$custom-control-spacer-x'] || '1rem';

  v['$custom-control-indicator-size'] = u['$custom-control-indicator-size'] || '1rem';
  v['$custom-control-indicator-bg'] = u['$custom-control-indicator-bg'] || v['$gray-300'];
  v['$custom-control-indicator-bg-size'] = u['$custom-control-indicator-bg-size'] || '50% 50%';
  v['$custom-control-indicator-box-shadow'] = u['$custom-control-indicator-box-shadow'] || `inset 0 .25rem .25rem ${Color(v['$black']).alpha(0.1).toString()}`;

  v['$custom-control-indicator-disabled-bg'] = u['$custom-control-indicator-disabled-bg'] || v['$gray-200'];
  v['$custom-control-label-disabled-color'] = u['$custom-control-label-disabled-color'] || v['$gray-600'];

  v['$custom-control-indicator-checked-color'] = u['$custom-control-indicator-checked-color'] || v['$component-active-color'];
  v['$custom-control-indicator-checked-bg'] = u['$custom-control-indicator-checked-bg'] || v['$component-active-bg'];
  v['$custom-control-indicator-checked-disabled-bg'] = u['$custom-control-indicator-checked-disabled-bg'] || `${Color(v['$theme-colors'].primary).alpha(0.5).toString()}`;
  v['$custom-control-indicator-checked-box-shadow'] = u['$custom-control-indicator-checked-box-shadow'] || 'none';

  v['$custom-control-indicator-focus-box-shadow'] = u['$custom-control-indicator-focus-box-shadow'] || `0 0 0 1px ${v['$body-bg']}, ${v['$input-btn-focus-box-shadow']}`;

  v['$custom-control-indicator-active-color'] = u['$custom-control-indicator-active-color'] || v['$component-active-color'];
  v['$custom-control-indicator-active-bg'] = u['$custom-control-indicator-active-bg'] || Color(v['$component-active-bg']).lighten(0.35).toString();
  v['$custom-control-indicator-active-box-shadow'] = u['$custom-control-indicator-active-box-shadow'] || 'none';

  v['$custom-checkbox-indicator-border-radius'] = u['$custom-checkbox-indicator-border-radius'] || v['$border-radius'];
  v['$custom-checkbox-indicator-icon-checked'] = u['$custom-checkbox-indicator-icon-checked'] || `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="${v['$custom-control-checked-indicator-color']}" d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/%3E%3C/svg%3E')`;

  v['$custom-checkbox-indicator-indeterminate-bg'] = u['$custom-checkbox-indicator-indeterminate-bg'] || v['$component-active-bg'];
  v['$custom-checkbox-indicator-indeterminate-indicator-color'] = u['$custom-checkbox-indicator-indeterminate-indicator-color'] || v['$custom-control-indicator-checked-color'];
  v['$custom-checkbox-indicator-indeterminate-icon'] = u['$custom-checkbox-indicator-indeterminate-icon'] || `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4"%3E%3Cpath stroke="${v['$custom-checkbox-indeterminate-indicator-color']}" d="M0 2h4"/%3E%3C/svg%3E')`;
  v['$custom-checkbox-indicator-indeterminate-box-shadow'] = u['$custom-checkbox-indicator-indeterminate-box-shadow'] || 'none';

  v['$custom-radio-indicator-border-radius'] = u['$custom-radio-indicator-border-radius'] || '50%';
  v['$custom-radio-indicator-icon-checked'] = u['$custom-radio-indicator-icon-checked'] || `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 8 8"%3E%3Ccircle r="3" fill="${v['$custom-control-checked-indicator-color']}"/%3E%3C/svg%3E')`;

  v['$custom-select-padding-x'] = u['$custom-select-padding-x'] || '.75rem ';
  v['$custom-select-padding-y'] = u['$custom-select-padding-y'] || '.375rem';
  v['$custom-select-height'] = u['$custom-select-height'] || v['$input-height'];
  v['$custom-select-indicator-padding'] = u['$custom-select-indicator-padding'] || '1rem'; // Extra padding to account for the presence of the background-image based indicator
  v['$custom-select-line-height'] = u['$custom-select-line-height'] || v['$input-btn-line-height'];
  v['$custom-select-color'] = u['$custom-select-color'] || v['$input-color'];
  v['$custom-select-disabled-color'] = u['$custom-select-disabled-color'] || v['$gray-600'];
  v['$custom-select-bg'] = u['$custom-select-bg'] || v['$white'];
  v['$custom-select-disabled-bg'] = u['$custom-select-disabled-bg'] || v['$gray-200'];
  v['$custom-select-bg-size'] = u['$custom-select-bg-size'] || '8px 10px'; // In pixels because image dimensions
  v['$custom-select-indicator-color'] = u['$custom-select-indicator-color'] || v['$gray-800'];
  v['$custom-select-indicator'] = u['$custom-select-indicator'] || `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="${v['$custom-select-indicator-color']}" d="M2 0L0 2h4zm0 5L0 3h4z"/%3E%3C/svg%3E')`;
  v['$custom-select-border-width'] = u['$custom-select-border-width'] || v['$input-btn-border-width'];
  v['$custom-select-border-color'] = u['$custom-select-border-color'] || v['$input-border-color'];
  v['$custom-select-border-radius'] = u['$custom-select-border-radius'] || v['$border-radius'];

  v['$custom-select-focus-border-color'] = u['$custom-select-focus-border-color'] || v['$input-focus-border-color'];
  v['$custom-select-focus-box-shadow'] = u['$custom-select-focus-box-shadow'] || `inset 0 1px 2px ${Color(v['$black']).alpha(0.75).toString()}, 0 0 5px rgba(${v['$custom-select-focus-border-color']}, .5)`;

  v['$custom-select-font-size-sm'] = u['$custom-select-font-size-sm'] || '75%';
  v['$custom-select-height-sm'] = u['$custom-select-height-sm'] || v['$input-height-sm'];

  v['$custom-select-font-size-lg'] = u['$custom-select-font-size-lg'] || '125%';
  v['$custom-select-height-lg'] = u['$custom-select-height-lg'] || v['$input-height-lg'];

  v['$custom-file-height'] = u['$custom-file-height'] || v['$input-height'];
  v['$custom-file-focus-border-color'] = u['$custom-file-focus-border-color'] || v['$input-focus-border-color'];
  v['$custom-file-focus-box-shadow'] = u['$custom-file-focus-box-shadow'] || v['$input-btn-focus-box-shadow'];

  v['$custom-file-padding-x'] = u['$custom-file-padding-x'] || v['$input-btn-padding-x'];
  v['$custom-file-padding-y'] = u['$custom-file-padding-y'] || v['$input-btn-padding-y'];
  v['$custom-file-line-height'] = u['$custom-file-line-height'] || v['$input-btn-line-height'];
  v['$custom-file-color'] = u['$custom-file-color'] || v['$input-color'];
  v['$custom-file-bg'] = u['$custom-file-bg'] || v['$input-bg'];
  v['$custom-file-border-width'] = u['$custom-file-border-width'] || v['$input-btn-border-width'];
  v['$custom-file-border-color'] = u['$custom-file-border-color'] || v['$input-border-color'];
  v['$custom-file-border-radius'] = u['$custom-file-border-radius'] || v['$input-border-radius'];
  v['$custom-file-box-shadow'] = u['$custom-file-box-shadow'] || v['$input-box-shadow'];
  v['$custom-file-button-color'] = u['$custom-file-button-color'] || v['$custom-file-color'];
  v['$custom-file-button-bg'] = u['$custom-file-button-bg'] || v['$input-group-addon-bg'];
  v['$custom-file-text'] = u['$custom-file-text'] || {
    placeholder: {
      en: 'Choose file...',
    },
    'button-label': {
      en: 'Browse',
    },
  };

  // Form validation
  v['$form-feedback-margin-top'] = u['$form-feedback-margin-top'] || v['$form-text-margin-top'];
  v['$form-feedback-font-size'] = u['$form-feedback-font-size'] || v['$small-font-size'];

  v['$form-feedback-valid-color'] = u['$form-feedback-valid-color'] || v['$theme-colors'].success;
  v['$form-feedback-invalid-color'] = u['$form-feedback-invalid-color'] || v['$theme-colors'].danger;

  // Dropdowns
  //
  // Dropdown menu container and contents.

  v['$dropdown-min-width'] = u['$dropdown-min-width'] || '10rem';
  v['$dropdown-padding-y'] = u['$dropdown-padding-y'] || '.5rem';
  v['$dropdown-spacer'] = u['$dropdown-spacer'] || '.125rem';
  v['$dropdown-bg'] = u['$dropdown-bg'] || v['$white'];
  v['$dropdown-border-color'] = u['$dropdown-border-color'] || Color(v['$black']).alpha(0.15).toString();
  v['$dropdown-border-radius'] = u['$dropdown-border-radius'] || v['$border-radius'];
  v['$dropdown-border-width'] = u['$dropdown-border-width'] || v['$border-width'];
  v['$dropdown-divider-bg'] = u['$dropdown-divider-bg'] || v['$gray-200'];
  v['$dropdown-box-shadow'] = u['$dropdown-box-shadow'] || `0 .5rem 1rem rgba(${v['$black']},.175)`;

  v['$dropdown-link-color'] = u['$dropdown-link-color'] || v['$gray-900'];
  v['$dropdown-link-hover-color'] = u['$dropdown-link-hover-color'] || Color(v['$gray-900']).darken(0.05).toString();
  v['$dropdown-link-hover-bg'] = u['$dropdown-link-hover-bg'] || v['$gray-100'];

  v['$dropdown-link-active-color'] = u['$dropdown-link-active-color'] || v['$component-active-color'];
  v['$dropdown-link-active-bg'] = u['$dropdown-link-active-bg'] || v['$component-active-bg'];

  v['$dropdown-link-disabled-color'] = u['$dropdown-link-disabled-color'] || v['$gray-600'];

  v['$dropdown-item-padding-x'] = u['$dropdown-item-padding-x'] || '1.5rem';
  v['$dropdown-item-padding-y'] = u['$dropdown-item-padding-y'] || '.25rem';

  v['$dropdown-header-color'] = u['$dropdown-header-color'] || v['$gray-600'];

  // Z-index master list
  //
  // Warning = 'Avoid customizing these values. They're used for a bird's eye view
  // of components dependent on the z-axis and are designed to all work together.

  v['$zindex-dropdown'] = u['$zindex-dropdown'] || '1000';
  v['$zindex-sticky'] = u['$zindex-sticky'] || '1020';
  v['$zindex-fixed'] = u['$zindex-fixed'] || '1030';
  v['$zindex-modal-backdrop'] = u['$zindex-modal-backdrop'] || '1040';
  v['$zindex-modal'] = u['$zindex-modal'] || '1050';
  v['$zindex-popover'] = u['$zindex-popover'] || '1060';
  v['$zindex-tooltip'] = u['$zindex-tooltip'] || '1070';

  // Navs

  v['$nav-link-padding-y'] = u['$nav-link-padding-y'] || '.5rem';
  v['$nav-link-padding-x'] = u['$nav-link-padding-x'] || '1rem';
  v['$nav-link-disabled-color'] = u['$nav-link-disabled-color'] || v['$gray-600'];

  v['$nav-tabs-border-color'] = u['$nav-tabs-border-color'] || v['$gray-300'];
  v['$nav-tabs-border-width'] = u['$nav-tabs-border-width'] || v['$border-width'];
  v['$nav-tabs-border-radius'] = u['$nav-tabs-border-radius'] || v['$border-radius'];
  v['$nav-tabs-link-hover-border-color'] = u['$nav-tabs-link-hover-border-color'] || `${v['$gray-200']} ${v['$gray-200']} ${v['$nav-tabs-border-color']}`;
  v['$nav-tabs-link-active-color'] = u['$nav-tabs-link-active-color'] || v['$gray-700'];
  v['$nav-tabs-link-active-bg'] = u['$nav-tabs-link-active-bg'] || v['$body-bg'];
  v['$nav-tabs-link-active-border-color'] = u['$nav-tabs-link-active-border-color'] || `${v['$gray-300']} ${v['$gray-300']} ${v['$nav-tabs-link-active-bg']}`;

  v['$nav-pills-border-radius'] = u['$nav-pills-border-radius'] || v['$border-radius'];
  v['$nav-pills-link-active-color'] = u['$nav-pills-link-active-color'] || v['$component-active-color'];
  v['$nav-pills-link-active-bg'] = u['$nav-pills-link-active-bg'] || v['$component-active-bg'];

  // Navbar

  v['$navbar-padding-x'] = u['$navbar-padding-x'] || v['$spacer'];
  v['$navbar-padding-y'] = u['$navbar-padding-y'] || v['$spacer-halved'];

  v['$navbar-nav-link-padding-x'] = u['$navbar-nav-link-padding-x'] || '.5rem';

  v['$navbar-brand-font-size'] = u['$navbar-brand-font-size'] || v['$font-size-lg'];
  // Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link
  v['$nav-link-height'] = u['$nav-link-height'] || (rmUnit(v['$font-size-base'], detectedUnit) * (rmUnit(v['$line-height-base'], detectedUnit)) + (rmUnit(v['$nav-link-padding-y'], detectedUnit)) * 2 + detectedUnit);
  v['$navbar-brand-height'] = u['$navbar-brand-height'] || (rmUnit(v['$navbar-brand-font-size'], detectedUnit) * (rmUnit(v['$line-height-base'], detectedUnit)) + detectedUnit);
  v['$navbar-brand-padding-y'] = u['$navbar-brand-padding-y'] || (rmUnit(v['$nav-link-height'], detectedUnit) - (rmUnit(v['$navbar-brand-height'], detectedUnit)) / 2 + detectedUnit);

  v['$navbar-toggler-padding-x'] = u['$navbar-toggler-padding-x'] || '.75rem';
  v['$navbar-toggler-padding-y'] = u['$navbar-toggler-padding-y'] || '.25rem';
  v['$navbar-toggler-font-size'] = u['$navbar-toggler-font-size'] || v['$font-size-lg'];
  v['$navbar-toggler-border-radius'] = u['$navbar-toggler-border-radius'] || v['$btn-border-radius'];

  v['$navbar-dark-color'] = u['$navbar-dark-color'] || Color(v['$white']).alpha(0.5).toString();
  v['$navbar-dark-hover-color'] = u['$navbar-dark-hover-color'] || Color(v['$white']).alpha(0.75).toString();
  v['$navbar-dark-active-color'] = u['$navbar-dark-active-color'] || v['$white'];
  v['$navbar-dark-disabled-color'] = u['$navbar-dark-disabled-color'] || Color(v['$white']).alpha(0.25).toString();
  v['$navbar-dark-toggler-icon-bg'] = u['$navbar-dark-toggler-icon-bg'] || `url('data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="${v['$navbar-inverse-color']}" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E')`;
  v['$navbar-dark-toggler-border-color'] = u['$navbar-dark-toggler-border-color'] || Color(v['$white']).alpha(0.1).toString();

  v['$navbar-light-color'] = u['$navbar-light-color'] || Color(v['$black']).alpha(0.5).toString();
  v['$navbar-light-hover-color'] = u['$navbar-light-hover-color'] || Color(v['$black']).alpha(0.7).toString();
  v['$navbar-light-active-color'] = u['$navbar-light-active-color'] || Color(v['$black']).alpha(0.9).toString();
  v['$navbar-light-disabled-color'] = u['$navbar-light-disabled-color'] || Color(v['$black']).alpha(0.3).toString();
  v['$navbar-light-toggler-icon-bg'] = u['$navbar-light-toggler-icon-bg'] || `url('data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="${v['$navbar-light-color']}" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E')`;
  v['$navbar-light-toggler-border-color'] = u['$navbar-light-toggler-border-color'] || Color(v['$black']).alpha(0.1).toString();

  // Pagination

  v['$pagination-padding-x'] = u['$pagination-padding-x'] || '.75rem';
  v['$pagination-padding-y'] = u['$pagination-padding-y'] || '.5rem';
  v['$pagination-padding-x-sm'] = u['$pagination-padding-x-sm'] || '.5rem';
  v['$pagination-padding-y-sm'] = u['$pagination-padding-y-sm'] || '.25rem';
  v['$pagination-padding-x-lg'] = u['$pagination-padding-x-lg'] || '1.5rem';
  v['$pagination-padding-y-lg'] = u['$pagination-padding-y-lg'] || '.75rem';
  v['$pagination-line-height'] = u['$pagination-line-height'] || '1.25';

  v['$pagination-color'] = u['$pagination-color'] || v['$link-color'];
  v['$pagination-bg'] = u['$pagination-bg'] || v['$white'];
  v['$pagination-border-width'] = u['$pagination-border-width'] || v['$border-width'];
  v['$pagination-border-color'] = u['$pagination-border-color'] || v['$gray-300'];

  v['$pagination-focus-box-shadow'] = u['$pagination-focus-box-shadow'] || v['$input-btn-focus-box-shadow'];

  v['$pagination-hover-color'] = u['$pagination-hover-color'] || v['$link-hover-color'];
  v['$pagination-hover-bg'] = u['$pagination-hover-bg'] || v['$gray-200'];
  v['$pagination-hover-border'] = u['$pagination-hover-border'] || v['$gray-300'];

  v['$pagination-active-color'] = u['$pagination-active-color'] || v['$component-active-color'];
  v['$pagination-active-bg'] = u['$pagination-active-bg'] || v['$component-active-bg'];
  v['$pagination-active-border-color'] = u['$pagination-active-border-color'] || v['$pagination-active-bg'];

  v['$pagination-disabled-color'] = u['$pagination-disabled-color'] || v['$gray-600'];
  v['$pagination-disabled-bg'] = u['$pagination-disabled-bg'] || v['$white'];
  v['$pagination-disabled-border-color'] = u['$pagination-disabled-border-color'] || v['$gray-300'];


  // Jumbotron

  v['$jumbotron-padding'] = u['$jumbotron-padding'] || '2rem';
  v['$jumbotron-bg'] = u['$jumbotron-bg'] || v['$gray-200'];

  // Cards

  v['$card-spacer-x'] = u['$card-spacer-x'] || '1.25rem';
  v['$card-spacer-y'] = u['$card-spacer-y'] || '.75rem';
  v['$card-border-width'] = u['$card-border-width'] || v['$border-width'];
  v['$card-border-radius'] = u['$card-border-radius'] || v['$border-radius'];
  v['$card-border-color'] = u['$card-border-color'] || Color(v['$black']).alpha(0.125).toString();
  v['$card-border-inner-radius'] = u['$card-border-inner-radius'] || `calc(${v['$card-border-radius']} - ${v['$card-border-width']})`;
  v['$card-cap-bg'] = u['$card-cap-bg'] || Color(v['$black']).alpha(0.03).toString();

  v['$card-img-overlay-padding'] = u['$card-img-overlay-padding'] || '1.25rem';

  detectedUnit = detectUnit(v['$grid-gutter-width']);
  v['$card-group-margin'] = u['$card-group-margin'] || (rmUnit(v['$grid-gutter-width'], detectedUnit) / 2) + detectedUnit;
  v['$card-deck-margin'] = u['$card-deck-margin'] || v['$card-group-margin'];

  v['$card-columns-count'] = u['$card-columns-count'] || '3';
  v['$card-columns-gap'] = u['$card-columns-gap'] || '1.25rem';
  v['$card-columns-margin'] = u['$card-columns-margin'] || v['$card-spacer-y'];

  // Tooltips

  v['$tooltip-font-size'] = u['$tooltip-font-size'] || v['$font-size-sm'];
  v['$tooltip-max-width'] = u['$tooltip-max-width'] || '200px';
  v['$tooltip-color'] = u['$tooltip-color'] || v['$white'];
  v['$tooltip-bg'] = u['$tooltip-bg'] || v['$black'];
  v['$tooltip-opacity'] = u['$tooltip-opacity'] || '.9';
  v['$tooltip-padding-y'] = u['$tooltip-padding-y'] || '.25re';
  v['$tooltip-padding-x'] = u['$tooltip-padding-x'] || '.5rem';
  v['$tooltip-margin'] = u['$tooltip-margin'] || '0';

  v['$tooltip-arrow-width'] = u['$tooltip-arrow-width'] || '.8rem';
  v['$tooltip-arrow-height'] = u['$tooltip-arrow-height'] || '.4rem';
  v['$tooltip-arrow-color'] = u['$tooltip-arrow-color'] || v['$tooltip-bg'];


  // Popovers

  v['$popover-font-size'] = u['$popover-font-size'] || v['$font-size-sm'];
  v['$popover-bg'] = u['$popover-bg'] || v['$white'];
  v['$popover-max-width'] = u['$popover-max-width'] || '276px';
  v['$popover-border-width'] = u['$popover-border-width'] || v['$border-width'];
  v['$popover-border-color'] = u['$popover-border-color'] || Color(v['$black']).alpha(0.2).toString();
  v['$popover-border-radius'] = u['$popover-border-radius'] || v['$border-radius-lg'];
  v['$popover-box-shadow'] = u['$popover-box-shadow'] || `0 .25rem .5rem ${Color(v['$black']).alpha(0.2).toString()}`;

  v['$popover-header-bg'] = u['$popover-header-bg'] || Color(v['$popover-bg']).darken(0.03).toString();
  v['$popover-header-color'] = u['$popover-header-color'] || v['$headings-color'];
  v['$popover-header-padding-y'] = u['$popover-header-padding-y'] || '.5rem';
  v['$popover-header-padding-x'] = u['$popover-header-padding-x'] || '.75rem';

  v['$popover-body-color'] = u['$popover-body-color'] || v['$body-color'];
  v['$popover-body-padding-y'] = u['$popover-body-padding-y'] || v['$popover-header-padding-y'];
  v['$popover-body-padding-x'] = u['$popover-body-padding-x'] || v['$popover-header-padding-x'];

  v['$popover-arrow-width'] = u['$popover-arrow-width'] || '1rem';
  v['$popover-arrow-height'] = u['$popover-arrow-height'] || '.5rem';
  v['$popover-arrow-color'] = u['$popover-arrow-color'] || v['$popover-bg'];

  v['$popover-arrow-outer-color'] = u['$popover-arrow-outer-color'] || Color(v['$popover-border-color']).fade(0.5).toString();


  // Badges

  v['$badge-font-size'] = u['$badge-font-size'] || '75%';
  v['$badge-font-weight'] = u['$badge-font-weight'] || v['$font-weight-bold'];
  v['$badge-padding-x'] = u['$badge-padding-x'] || '.4em';
  v['$badge-padding-y'] = u['$badge-padding-y'] || '.25em';
  v['$badge-border-radius'] = u['$badge-border-radius'] || v['$border-radius'];

  v['$badge-pill-padding-x'] = u['$badge-pill-padding-x'] || '.6em';
  // Use a higher than normal value to ensure completely rounded edges when
  // customizing padding or font-size on labels.
  v['$badge-pill-border-radius'] = u['$badge-pill-border-radius'] || '10rem';


  // Modals

  // Padding applied to the modal body
  v['$modal-inner-padding'] = u['$modal-inner-padding'] || '1rem';

  v['$modal-dialog-margin'] = u['$modal-dialog-margin'] || '.5rem';
  v['$modal-dialog-margin-y-sm-up'] = u['$modal-dialog-margin-y-sm-up'] || '1.75rem';

  v['$modal-title-line-height'] = u['$modal-title-line-height'] || v['$line-height-base'];

  v['$modal-content-bg'] = u['$modal-content-bg'] || v['$white'];
  v['$modal-content-border-color'] = u['$modal-content-border-color'] || Color(v['$black']).alpha(0.2).toString();
  v['$modal-content-border-width'] = u['$modal-content-border-width'] || v['$border-width'];
  v['$modal-content-box-shadow-xs'] = u['$modal-content-box-shadow-xs'] || `0 .25rem .5rem ${Color(v['$black']).alpha(0.5).toString()}`;
  v['$modal-content-box-shadow-sm-up'] = u['$modal-content-box-shadow-sm-up'] || `0 .5rem 1rem ${Color(v['$black']).alpha(0.5).toString()}`;

  v['$modal-backdrop-bg'] = u['$modal-backdrop-bg'] || v['$black'];
  v['$modal-backdrop-opacity'] = u['$modal-backdrop-opacity'] || '.5';
  v['$modal-header-border-color'] = u['$modal-header-border-color'] || v['$gray-200'];
  v['$modal-footer-border-color'] = u['$modal-footer-border-color'] || v['$modal-header-border-color'];
  v['$modal-header-border-width'] = u['$modal-header-border-width'] || v['$modal-content-border-width'];
  v['$modal-footer-border-width'] = u['$modal-footer-border-width'] || v['$modal-header-border-width'];
  v['$modal-header-padding'] = u['$modal-header-padding'] || '1rem';

  v['$modal-lg'] = u['$modal-lg'] || '800px';
  v['$modal-md'] = u['$modal-md'] || '500px';
  v['$modal-sm'] = u['$modal-sm'] || '300px';

  v['$modal-transition'] = u['$modal-transition'] || 'transform .3s ease-out';


  // Alerts
  //
  // Define alert colors, border radius, and padding.

  v['$alert-padding-x'] = u['$alert-padding-x'] || '1.25rem';
  v['$alert-padding-y'] = u['$alert-padding-y'] || '.75rem';
  v['$alert-margin-bottom'] = u['$alert-margin-bottom'] || '1rem';
  v['$alert-border-radius'] = u['$alert-border-radius'] || v['$border-radius'];
  v['$alert-link-font-weight'] = u['$alert-link-font-weight'] || v['$font-weight-bold'];
  v['$alert-border-width'] = u['$alert-border-width'] || v['$border-width'];

  v['$alert-bg-level'] = u['$alert-bg-level'] || '-10';
  v['$alert-border-level'] = u['$alert-border-level'] || '-9';
  v['$alert-color-level'] = u['$alert-color-level'] || '6';


  // Progress bars

  v['$progress-height'] = u['$progress-height'] || '1rem';
  detectedUnit = detectUnit(v['$font-size-base']);
  v['$progress-font-size'] = u['$progress-font-size'] || (rmUnit(v['$font-size-base'], detectedUnit) * 0.75) + detectedUnit;
  v['$progress-bg'] = u['$progress-bg'] || v['$gray-200'];
  v['$progress-border-radius'] = u['$progress-border-radius'] || v['$border-radius'];
  v['$progress-box-shadow'] = u['$progress-box-shadow'] || `inset 0 .1rem .1rem ${Color(v['$black']).alpha(0.1).toString()}`;
  v['$progress-bar-color'] = u['$progress-bar-color'] || v['$white'];
  v['$progress-bar-bg'] = u['$progress-bar-bg'] || v['$theme-colors'].primary;
  v['$progress-bar-animation-timing'] = u['$progress-bar-animation-timing'] || '1s linear infinite';
  v['$progress-bar-transition'] = u['$progress-bar-transition'] || 'width .6s ease';

  // List group

  v['$list-group-bg'] = u['$list-group-bg'] || v['$white'];
  v['$list-group-border-color'] = u['$list-group-border-color'] || Color(v['$black']).alpha(0.125).toString();
  v['$list-group-border-width'] = u['$list-group-border-width'] || v['$border-width'];
  v['$list-group-border-radius'] = u['$list-group-border-radius'] || v['$border-radius'];

  v['$list-group-item-padding-x'] = u['$list-group-item-padding-x'] || '1.25rem';
  v['$list-group-item-padding-y'] = u['$list-group-item-padding-y'] || '.75rem';

  v['$list-group-hover-bg'] = u['$list-group-hover-bg'] || v['$gray-100'];
  v['$list-group-active-color'] = u['$list-group-active-color'] || v['$component-active-color'];
  v['$list-group-active-bg'] = u['$list-group-active-bg'] || v['$component-active-bg'];
  v['$list-group-active-border-color'] = u['$list-group-active-border-color'] || v['$list-group-active-bg'];

  v['$list-group-disabled-color'] = u['$list-group-disabled-color'] || v['$gray-600'];
  v['$list-group-disabled-bg'] = u['$list-group-disabled-bg'] || v['$list-group-bg'];

  v['$list-group-action-color'] = u['$list-group-action-color'] || v['$gray-700'];
  v['$list-group-action-hover-color'] = u['$list-group-action-hover-color'] || v['$list-group-action-color'];

  v['$list-group-action-active-color'] = u['$list-group-action-active-color'] || v['$body-color'];
  v['$list-group-action-active-bg'] = u['$list-group-action-active-bg'] || v['$gray-200'];


  // Image thumbnails

  v['$thumbnail-padding'] = u['$thumbnail-padding'] || '.25rem';
  v['$thumbnail-bg'] = u['$thumbnail-bg'] || v['$body-bg'];
  v['$thumbnail-border-width'] = u['$thumbnail-border-width'] || v['$border-width'];
  v['$thumbnail-border-color'] = u['$thumbnail-border-color'] || v['$gray-300'];
  v['$thumbnail-border-radius'] = u['$thumbnail-border-radius'] || v['$border-radius'];
  v['$thumbnail-box-shadow'] = u['$thumbnail-box-shadow'] || `0 1px 2px ${Color(v['$black']).alpha(0.75).toString()}`;


  // Figures

  v['$figure-caption-font-size'] = u['$figure-caption-font-size'] || '90%';
  v['$figure-caption-color'] = u['$figure-caption-color'] || v['$gray-600'];


  // Breadcrumbs

  v['$breadcrumb-padding-y'] = u['$breadcrumb-padding-y'] || '.75rem';
  v['$breadcrumb-padding-x'] = u['$breadcrumb-padding-x'] || '1rem';
  v['$breadcrumb-item-padding'] = u['$breadcrumb-item-padding'] || '.5rem';

  v['$breadcrumb-margin-bottom'] = u['$breadcrumb-margin-bottom'] || '1rem';

  v['$breadcrumb-bg'] = u['$breadcrumb-bg'] || v['$gray-200'];
  v['$breadcrumb-divider-color'] = u['$breadcrumb-divider-color'] || v['$gray-600'];
  v['$breadcrumb-active-color'] = u['$breadcrumb-active-color'] || v['$gray-600'];
  v['$breadcrumb-divider'] = u['$breadcrumb-divider'] || '"/"';

  // Close

  v['$close-font-size'] = u['$close-font-size'] || (rmUnit(v['$font-size-base']) * 1.5) + detectUnit(v['$font-size-base']);
  v['$close-font-weight'] = u['$close-font-weight'] || v['$font-weight-bold'];
  v['$close-color'] = u['$close-color'] || v['$black'];
  v['$close-text-shadow'] = u['$close-text-shadow'] || `0 1px 0 ${v['$white']}`;

  // Code

  v['$code-font-size'] = u['$code-font-size'] || '87.5%';
  v['$code-color'] = u['$code-color'] || v['$pink'];

  v['$kbd-padding-y'] = u['$kbd-padding-y'] || '.2rem';
  v['$kbd-padding-x'] = u['$kbd-padding-x'] || '.4rem';
  v['$kbd-font-size'] = u['$kbd-font-size'] || v['$code-font-size'];
  v['$kbd-color'] = u['$kbd-color'] || v['$white'];
  v['$kbd-bg'] = u['$kbd-bg'] || v['$gray-900'];

  v['$pre-color'] = u['$pre-color'] || v['$gray-900'];
  v['$pre-scrollable-max-height'] = u['$pre-scrollable-max-height'] || '340px';

  // Printing
  v['$print-page-size'] = u['$print-page-size'] || 'a3';
  v['$print-body-min-width'] = u['$print-body-min-width'] || v['$grid-breakpoints'].lg;

  return Object.assign({}, u, v);
}

export const makeTheme = makeOriginal;

export default makeOriginal();
