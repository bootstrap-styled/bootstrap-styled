import Color from 'color';
import { detectUnit, rmUnit, UNIT } from './styled/mixins/unit';
import { assertAscending, assertStartAtZero } from './styled/mixins/variables';

/* eslint dot-notation: 'off', new-cap: 'off' */
// Variables
//
// Copy settings from this file into the provided `_custom.scss` to override
// the Bootstrap defaults without modifying key, versioned files.
const v = {};

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
v['$white'] = '#fff';
v['$black'] = '#000';
v['$red'] = '#d9534f';
v['$orange'] = '#f0ad4e';
v['$yellow'] = '#ffd500';
v['$green'] = '#5cb85c';
v['$blue'] = '#0275d8';
v['$teal'] = '#5bc0de';
v['$pink'] = '#ff5b77';
v['$purple'] = '#613d7c';

// Create grayscale
v['$gray-dark'] = '#292b2c';
v['$gray'] = '#464a4c';
v['$gray-light'] = '#636c72';
v['$gray-lighter'] = '#eceeef';
v['$gray-lightest'] = '#f7f7f9';

// Reassign color vars to semantic color scheme
v['$brand-primary'] = v['$blue'];
v['$brand-success'] = v['$green'];
v['$brand-info'] = v['$teal'];
v['$brand-warning'] = v['$orange'];
v['$brand-danger'] = v['$red'];
v['$brand-inverse'] = v['$gray-dark'];


// Options
//
// Quickly modify global styling by enabling or disabling optional features.

v['$enable-rounded'] = true;
v['$enable-shadows'] = false;
v['$enable-gradients'] = false;
v['$enable-transitions'] = true;
v['$enable-hover-media-query'] = false;
v['$enable-grid-classes'] = true;
v['$enable-print-styles'] = true;


// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the v['$spacers'] map, should you need more variation.

v['$spacer'] = '1rem';
v['$spacer-x'] = v['$spacer'];
v['$spacer-y'] = v['$spacer'];
let detectedUnit = detectUnit(v['$spacer']);
v['$spacers'] = {
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
v['$border-width'] = '1px';

// This variable affects the `.h-*` and `.w-*` classes.
v['$sizes'] = {
  25: '25%',
  50: '50%',
  75: '75%',
  100: '100%',
};

// Body
//
// Settings for the `<body>` element.

v['$body-bg'] = v['$white'];
v['$body-color'] = v['$gray-dark'];

// Links
//
// Style anchor elements.

v['$link-color'] = v['$brand-primary'];
v['$link-decoration'] = 'none';
v['$link-hover-color'] = Color(v['$link-color']).darken(0.35).toString();
v['$link-hover-decoration'] = 'underline';


// Grid breakpoints
//
// Define the minimum dimensions at which your layout will change,
// adapting to different screen sizes, for use in media queries.

v['$grid-breakpoints'] = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};
assertAscending(v['$grid-breakpoints'], '$grid-breakpoints');
assertStartAtZero(v['$grid-breakpoints']);

// Grid containers
//
// Define the maximum width of `.container` for different screen sizes.

v['$container-max-widths'] = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
};
assertAscending(v['$container-max-widths'], '$container-max-widths');


// Grid columns
//
// Set the number of columns and specify the width of the gutters.

v['$grid-columns'] = '12';
v['$grid-gutter-width-base'] = '30px';
v['$grid-gutter-widths'] = {
  xs: v['$grid-gutter-width-base'],
  sm: v['$grid-gutter-width-base'],
  md: v['$grid-gutter-width-base'],
  lg: v['$grid-gutter-width-base'],
  xl: v['$grid-gutter-width-base'],
};

// Fonts
//
// Font, line-height, and color for body text, headings, and more.

v['$font-family-sans-serif'] = '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
v['$font-family-monospace'] = 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
v['$font-family-base'] = v['$font-family-sans-serif'];

v['$font-size-base'] = '1rem'; // Assumes the browser default, typically `16px`
v['$font-size-lg'] = '1.25rem';
v['$font-size-sm'] = '.875rem';
v['$font-size-xs'] = '.75rem';

v['$font-weight-normal'] = 'normal';
v['$font-weight-bold'] = 'bold';

v['$font-weight-base'] = v['$font-weight-normal'];
v['$line-height-base'] = '1.5';

v['$font-size-h1'] = '2.5rem';
v['$font-size-h2'] = '2rem';
v['$font-size-h3'] = '1.75rem';
v['$font-size-h4'] = '1.5rem';
v['$font-size-h5'] = '1.25rem';
v['$font-size-h6'] = '1rem';

v['$headings-margin-bottom'] = (rmUnit(v['$spacer'], UNIT.REM) / 2) + UNIT.REM;
v['$headings-font-family'] = 'inherit';
v['$headings-font-weight'] = '500';
v['$headings-line-height'] = '1.1';
v['$headings-color'] = 'inherit';

v['$display1-size'] = '6rem';
v['$display2-size'] = '5.5rem';
v['$display3-size'] = '4.5rem';
v['$display4-size'] = '3.5rem';

v['$display1-weight'] = '300';
v['$display2-weight'] = '300';
v['$display3-weight'] = '300';
v['$display4-weight'] = '300';
v['$display-line-height'] = v['$headings-line-height'];

v['$lead-font-size'] = '1.25rem';
v['$lead-font-weight'] = '300';

v['$small-font-size'] = '80%';

v['$text-muted'] = v['$gray-light'];

v['$blockquote-small-color'] = v['$gray-light'];
v['$blockquote-font-size'] = (rmUnit(v['$font-size-base'], UNIT.REM) * 1.25) + UNIT.REM;
v['$blockquote-border-color'] = v['$gray-lighter'];
v['$blockquote-border-width'] = '.25rem';

v['$hr-border-color'] = Color(v['$black']).alpha(0.1).toString();
v['$hr-border-width'] = v['$border-width'];

v['$mark-padding'] = '.2em';

v['$dt-font-weight'] = v['$font-weight-bold'];

v['$kbd-box-shadow'] = `inset 0 -.1rem 0 ${Color(v['$black']).alpha(0.25).toString()}`;
v['$nested-kbd-font-weight'] = v['$font-weight-bold'];

v['$list-inline-padding'] = '5px';


// Components
//
// Define common padding and border radius sizes and more.

v['$line-height-lg'] = '(4 / 3)';
v['$line-height-sm'] = '1.5';

v['$border-radius'] = '.25rem';
v['$border-radius-lg'] = '.3rem';
v['$border-radius-sm'] = '.2rem';

v['$component-active-color'] = v['$white'];
v['$component-active-bg'] = v['$brand-primary'];

v['$caret-width'] = '.3em';

v['$transition-base'] = 'all .2s ease-in-out';
v['$transition-fade'] = 'opacity .15s linear';
v['$transition-collapse'] = 'height .35s ease';


// Tables
//
// Customizes the `.table` component with basic values, each used across all table variations.

v['$table-cell-padding'] = '.75rem';
v['$table-sm-cell-padding'] = '.3rem';

v['$table-bg'] = 'transparent';

v['$table-inverse-bg'] = v['$gray-dark'];
v['$table-inverse-color'] = v['$body-bg'];

v['$table-bg-accent'] = Color(v['$black']).alpha(0.05).toString();
v['$table-bg-hover'] = Color(v['$black']).alpha(0.075).toString();
v['$table-bg-active'] = v['$table-bg-hover'];

v['$table-head-bg'] = v['$gray-lighter'];
v['$table-head-color'] = v['$gray'];

v['$table-border-width'] = v['$border-width'];
v['$table-border-color'] = v['$gray-lighter'];


// Buttons
//
// For each of Bootstrap's buttons, define text, background and border color.

v['$btn-padding-x'] = '1rem';
v['$btn-padding-y'] = '.5rem';
v['$btn-line-height'] = '1.25';
v['$btn-font-weight'] = v['$font-weight-normal'];
v['$btn-box-shadow'] = `inset 0 1px 0 rgba(${v['$white']},.15), 0 1px 1px ${Color(v['$black']).alpha(0.075).toString()}`;
v['$btn-focus-box-shadow'] = `0 0 0 2px rgba(${v['$brand-primary']}, .25)`;
v['$btn-active-box-shadow'] = `inset 0 3px 5px rgba(${v['$black']},.125)`;

v['$btn-primary-color'] = v['$white'];
v['$btn-primary-bg'] = v['$brand-primary'];
v['$btn-primary-border'] = v['$btn-primary-bg'];

v['$btn-secondary-color'] = v['$gray-dark'];
v['$btn-secondary-bg'] = v['$white'];
v['$btn-secondary-border'] = '#ccc';

v['$btn-info-color'] = v['$white'];
v['$btn-info-bg'] = v['$brand-info'];
v['$btn-info-border'] = v['$btn-info-bg'];

v['$btn-success-color'] = v['$white'];
v['$btn-success-bg'] = v['$brand-success'];
v['$btn-success-border'] = v['$btn-success-bg'];

v['$btn-warning-color'] = v['$white'];
v['$btn-warning-bg'] = v['$brand-warning'];
v['$btn-warning-border'] = v['$btn-warning-bg'];

v['$btn-danger-color'] = v['$white'];
v['$btn-danger-bg'] = v['$brand-danger'];
v['$btn-danger-border'] = v['$btn-danger-bg'];

v['$btn-link-disabled-color'] = v['$gray-light'];

v['$btn-padding-x-sm'] = '.5rem';
v['$btn-padding-y-sm'] = '.25rem';

v['$btn-padding-x-lg'] = '1.5rem';
v['$btn-padding-y-lg'] = '.75rem';

v['$btn-block-spacing-y'] = '.5rem';

// Allows for customizing button radius independently from global border radius
v['$btn-border-radius'] = v['$border-radius'];
v['$btn-border-radius-lg'] = v['$border-radius-lg'];
v['$btn-border-radius-sm'] = v['$border-radius-sm'];

v['$btn-transition'] = 'all .2s ease-in-out';


// Forms

v['$input-padding-x'] = '.75rem';
v['$input-padding-y'] = '.5rem';
v['$input-line-height'] = '1.25';

v['$input-bg'] = v['$white'];
v['$input-bg-disabled'] = v['$gray-lighter'];

v['$input-color'] = v['$gray'];
v['$input-border-color'] = Color(v['$black']).alpha(0.15).toString();
v['$input-btn-border-width'] = v['$border-width']; // For form controls and buttons
v['$input-box-shadow'] = `inset 0 1px 1px ${Color(v['$black']).alpha(0.075).toString()}`;

v['$input-border-radius'] = v['$border-radius'];
v['$input-border-radius-lg'] = v['$border-radius-lg'];
v['$input-border-radius-sm'] = v['$border-radius-sm'];

v['$input-bg-focus'] = v['$input-bg'];
v['$input-border-focus'] = Color(v['$brand-primary']).lighten(0.25).toString();
v['$input-box-shadow-focus'] = `${v['$input-box-shadow']}, 0 0 8px rgba(${v['$input-border-focus']},.6)`;
v['$input-color-focus'] = v['$input-color'];

v['$input-color-placeholder'] = v['$gray-light'];

v['$input-padding-x-sm'] = '.5rem';
v['$input-padding-y-sm'] = '.25rem';

v['$input-padding-x-lg'] = '1.5rem';
v['$input-padding-y-lg'] = '.75rem';

v['$input-height'] = ((rmUnit(v['$font-size-base'], UNIT.REM) * v['$line-height-base']) + (rmUnit(v['$input-padding-y'], UNIT.REM) * 2) + UNIT.REM);
v['$input-height-sm'] = ((rmUnit(v['$font-size-sm'], UNIT.REM) * v['$line-height-sm']) + (rmUnit(v['$input-padding-y-sm'], UNIT.REM) * 2) + UNIT.REM);
v['$input-height-lg'] = ((rmUnit(v['$font-size-lg'], UNIT.REM) * v['$line-height-lg']) + (rmUnit(v['$input-padding-y-lg'], UNIT.REM) * 2) + UNIT.REM);

v['$input-transition'] = 'border-color ease-in-out .15s, box-shadow ease-in-out .15s';

v['$form-text-margin-top'] = '.25rem';
v['$form-feedback-margin-top'] = v['$form-text-margin-top'];

v['$form-check-margin-bottom'] = '.5rem';
v['$form-check-input-gutter'] = '1.25rem';
v['$form-check-input-margin-y'] = '.25rem';
v['$form-check-input-margin-x'] = '.25rem';

v['$form-check-inline-margin-x'] = '.75rem';

v['$form-group-margin-bottom'] = v['$spacer-y'];

v['$input-group-addon-bg'] = v['$gray-lighter'];
v['$input-group-addon-border-color'] = v['$input-border-color'];

v['$cursor-disabled'] = 'not-allowed';

v['$custom-control-gutter'] = '1.5rem';
v['$custom-control-spacer-x'] = '1rem';
v['$custom-control-spacer-y'] = '.25rem';

v['$custom-control-indicator-size'] = '1rem';
v['$custom-control-indicator-bg'] = '#ddd';
v['$custom-control-indicator-bg-size'] = '50% 50%';
v['$custom-control-indicator-box-shadow'] = `inset 0 .25rem .25rem ${Color(v['$black']).alpha(0.1).toString()}`;

v['$custom-control-disabled-cursor'] = v['$cursor-disabled'];
v['$custom-control-disabled-indicator-bg'] = v['$gray-lighter'];
v['$custom-control-disabled-description-color'] = v['$gray-light'];

v['$custom-control-checked-indicator-color'] = v['$white'];
v['$custom-control-checked-indicator-bg'] = v['$brand-primary'];
v['$custom-control-checked-indicator-box-shadow'] = 'none';

v['$custom-control-focus-indicator-box-shadow'] = `0 0 0 1px ${v['$body-bg']}, 0 0 0 3px ${v['$brand-primary']}`;

v['$custom-control-active-indicator-color'] = v['$white'];
v['$custom-control-active-indicator-bg'] = Color(v['$brand-primary']).lighten(0.35).toString();
v['$custom-control-active-indicator-box-shadow'] = 'none';

v['$custom-checkbox-radius'] = v['$border-radius'];
v['$custom-checkbox-checked-icon'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="${v['$custom-control-checked-indicator-color']}" d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/%3E%3C/svg%3E')`;

v['$custom-checkbox-indeterminate-bg'] = v['$brand-primary'];
v['$custom-checkbox-indeterminate-indicator-color'] = v['$custom-control-checked-indicator-color'];
v['$custom-checkbox-indeterminate-icon'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4"%3E%3Cpath stroke="${v['$custom-checkbox-indeterminate-indicator-color']}" d="M0 2h4"/%3E%3C/svg%3E')`;
v['$custom-checkbox-indeterminate-box-shadow'] = 'none';

v['$custom-radio-radius'] = '50%';
v['$custom-radio-checked-icon'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 8 8"%3E%3Ccircle r="3" fill="${v['$custom-control-checked-indicator-color']}"/%3E%3C/svg%3E')`;

v['$custom-select-padding-x'] = '.75rem ';
v['$custom-select-padding-y'] = '.375rem';
v['$custom-select-indicator-padding'] = '1rem'; // Extra padding to account for the presence of the background-image based indicator
v['$custom-select-line-height'] = v['$input-line-height'];
v['$custom-select-color'] = v['$input-color'];
v['$custom-select-disabled-color'] = v['$gray-light'];
v['$custom-select-bg'] = v['$white'];
v['$custom-select-disabled-bg'] = v['$gray-lighter'];
v['$custom-select-bg-size'] = '8px 10px'; // In pixels because image dimensions
v['$custom-select-indicator-color'] = '#333';
v['$custom-select-indicator'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="${v['$custom-select-indicator-color']}" d="M2 0L0 2h4zm0 5L0 3h4z"/%3E%3C/svg%3E')`;
v['$custom-select-border-width'] = v['$input-btn-border-width'];
v['$custom-select-border-color'] = v['$input-border-color'];
v['$custom-select-border-radius'] = v['$border-radius'];

v['$custom-select-focus-border-color'] = Color(v['$brand-primary']).lighten(0.25).toString();
v['$custom-select-focus-box-shadow'] = `inset 0 1px 2px ${Color(v['$black']).alpha(0.75).toString()}, 0 0 5px rgba(${v['$custom-select-focus-border-color']}, .5)`;

v['$custom-select-sm-font-size'] = '75%';

v['$custom-file-height'] = '2.5rem';
v['$custom-file-width'] = '14rem';
v['$custom-file-focus-box-shadow'] = `0 0 0 .075rem ${v['$white']}, 0 0 0 .2rem ${v['$brand-primary']}`;

v['$custom-file-padding-x'] = '.5rem';
v['$custom-file-padding-y'] = '1rem';
v['$custom-file-line-height'] = '1.5';
v['$custom-file-color'] = v['$gray'];
v['$custom-file-bg'] = v['$white'];
v['$custom-file-border-width'] = v['$border-width'];
v['$custom-file-border-color'] = v['$input-border-color'];
v['$custom-file-border-radius'] = v['$border-radius'];
v['$custom-file-box-shadow'] = `inset 0 .2rem .4rem ${Color(v['$black']).alpha(0.05).toString()}`;
v['$custom-file-button-color'] = v['$custom-file-color'];
v['$custom-file-button-bg'] = v['$gray-lighter'];
v['$custom-file-text'] = {
  placeholder: {
    en: 'Choose file...',
  },
  'button-label': {
    en: 'Browse',
  },
};


// Form validation icons
v['$form-icon-success-color'] = v['$brand-success'];
v['$form-icon-success'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="${v['$form-icon-success-color']}" d="M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/%3E%3C/svg%3E')`;

v['$form-icon-warning-color'] = v['$brand-warning'];
v['$form-icon-warning'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="${v['$form-icon-warning-color']}" d="M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z"/%3E%3C/svg%3E')`;

v['$form-icon-danger-color'] = v['$brand-danger'];
v['$form-icon-danger'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="${v['$form-icon-danger-color']}" viewBox="-2 -2 7 7"%3E%3Cpath stroke="%23d9534f" d="M0 0l3 3m0-3L0 3"/%3E%3Ccircle r=".5"/%3E%3Ccircle cx="3" r=".5"/%3E%3Ccircle cy="3" r=".5"/%3E%3Ccircle cx="3" cy="3" r=".5"/%3E%3C/svg%3E')`;


// Dropdowns
//
// Dropdown menu container and contents.

v['$dropdown-min-width'] = '10rem';
v['$dropdown-padding-y'] = '.5rem';
v['$dropdown-margin-top'] = '.125rem';
v['$dropdown-bg'] = v['$white'];
v['$dropdown-border-color'] = Color(v['$black']).alpha(0.15).toString();
v['$dropdown-border-width'] = v['$border-width'];
v['$dropdown-divider-bg'] = v['$gray-lighter'];
v['$dropdown-box-shadow'] = `0 .5rem 1rem rgba(${v['$black']},.175)`;

v['$dropdown-link-color'] = v['$gray-dark'];
v['$dropdown-link-hover-color'] = `darken(${v['$gray-dark']}, 5%)`;
v['$dropdown-link-hover-bg'] = v['$gray-lightest'];

v['$dropdown-link-active-color'] = v['$component-active-color'];
v['$dropdown-link-active-bg'] = v['$component-active-bg'];

v['$dropdown-link-disabled-color'] = v['$gray-light'];

v['$dropdown-item-padding-x'] = '1.5rem';

v['$dropdown-header-color'] = v['$gray-light'];


// Z-index master list
//
// Warning = 'Avoid customizing these values. They're used for a bird's eye view
// of components dependent on the z-axis and are designed to all work together.

v['$zindex-dropdown-backdrop'] = '990';
v['$zindex-dropdown'] = '1000';
v['$zindex-fixed'] = '1030';
v['$zindex-sticky'] = '1030';
v['$zindex-modal-backdrop'] = '1040';
v['$zindex-modal'] = '1050';
v['$zindex-popover'] = '1060';
v['$zindex-tooltip'] = '1070';

// Navbar

v['$navbar-padding-x'] = v['$spacer'];
v['$navbar-padding-y'] = `(${v['$spacer']} / 2)`;

v['$navbar-toggler-padding-x'] = '.75rem';
v['$navbar-toggler-padding-y'] = '.25rem';
v['$navbar-toggler-font-size'] = v['$font-size-lg'];
v['$navbar-toggler-border-radius'] = v['$btn-border-radius'];

v['$navbar-inverse-color'] = Color(v['$white']).alpha(0.5).toString();
v['$navbar-inverse-hover-color'] = Color(v['$white']).alpha(0.75).toString();
v['$navbar-inverse-active-color'] = Color(v['$white']).alpha(1).toString();
v['$navbar-inverse-disabled-color'] = Color(v['$white']).alpha(0.25).toString();
v['$navbar-inverse-toggler-bg'] = `url('data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="${v['$navbar-inverse-color']}" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E')`;
v['$navbar-inverse-toggler-border'] = Color(v['$white']).alpha(0.1).toString();

v['$navbar-light-color'] = Color(v['$black']).alpha(0.5).toString();
v['$navbar-light-hover-color'] = Color(v['$black']).alpha(0.7).toString();
v['$navbar-light-active-color'] = Color(v['$black']).alpha(0.9).toString();
v['$navbar-light-disabled-color'] = Color(v['$black']).alpha(0.3).toString();
v['$navbar-light-toggler-bg'] = `url('data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="${v['$navbar-light-color']}" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E')`;
v['$navbar-light-toggler-border'] = Color(v['$black']).alpha(0.1).toString();

// Navs

v['$nav-link-padding'] = '.5em 1em';
v['$nav-disabled-link-color'] = v['$gray-light'];

v['$nav-tabs-border-color'] = '#ddd';
v['$nav-tabs-border-width'] = v['$border-width'];
v['$nav-tabs-border-radius'] = v['$border-radius'];
v['$nav-tabs-link-hover-border-color'] = v['$gray-lighter'];
v['$nav-tabs-active-link-hover-color'] = v['$gray'];
v['$nav-tabs-active-link-hover-bg'] = v['$body-bg'];
v['$nav-tabs-active-link-hover-border-color'] = '#ddd';

v['$nav-pills-border-radius'] = v['$border-radius'];
v['$nav-pills-active-link-color'] = v['$component-active-color'];
v['$nav-pills-active-link-bg'] = v['$component-active-bg'];


// Pagination

v['$pagination-padding-x'] = '.75rem';
v['$pagination-padding-y'] = '.5rem';
v['$pagination-padding-x-sm'] = '.5rem';
v['$pagination-padding-y-sm'] = '.25rem';
v['$pagination-padding-x-lg'] = '1.5rem';
v['$pagination-padding-y-lg'] = '.75rem';
v['$pagination-line-height'] = '1.25';

v['$pagination-color'] = v['$link-color'];
v['$pagination-bg'] = v['$white'];
v['$pagination-border-width'] = v['$border-width'];
v['$pagination-border-color'] = '#ddd';

v['$pagination-hover-color'] = v['$link-hover-color'];
v['$pagination-hover-bg'] = v['$gray-lighter'];
v['$pagination-hover-border'] = '#ddd';

v['$pagination-active-color'] = v['$white'];
v['$pagination-active-bg'] = v['$brand-primary'];
v['$pagination-active-border'] = v['$brand-primary'];

v['$pagination-disabled-color'] = v['$gray-light'];
v['$pagination-disabled-bg'] = v['$white'];
v['$pagination-disabled-border'] = '#ddd';


// Jumbotron

v['$jumbotron-padding'] = '2rem';
v['$jumbotron-bg'] = v['$gray-lighter'];


// Form states and alerts
//
// Define colors for form feedback states and, by default, alerts.

v['$state-success-text'] = '#3c763d';
v['$state-success-bg'] = '#dff0d8';
v['$state-success-border'] = Color(v['$state-success-bg']).darken(0.05).toString();

v['$state-info-text'] = '#31708f';
v['$state-info-bg'] = '#d9edf7';
v['$state-info-border'] = Color(v['$state-info-bg']).darken(0.07).toString();

v['$state-warning-text'] = '#8a6d3b';
v['$state-warning-bg'] = '#fcf8e3';
v['$mark-bg'] = v['$state-warning-bg'];
v['$state-warning-border'] = Color(v['$state-warning-bg']).darken(0.05).toString();

v['$state-danger-text'] = '#a94442';
v['$state-danger-bg'] = '#f2dede';
v['$state-danger-border'] = Color(v['$state-danger-bg']).darken(0.05).toString();


// Cards

v['$card-spacer-x'] = '1.25rem';
v['$card-spacer-y'] = '.75rem';
v['$card-border-width'] = '1px';
v['$card-border-radius'] = v['$border-radius'];
v['$card-border-color'] = Color(v['$black']).alpha(0.125).toString();
v['$card-border-radius-inner'] = `calc(${v['$card-border-radius']} - ${v['$card-border-width']})`;
v['$card-cap-bg'] = v['$gray-lightest'];
v['$card-bg'] = v['$white'];

v['$card-link-hover-color'] = v['$white'];

v['$card-img-overlay-padding'] = '1.25rem';

detectedUnit = detectUnit(v['$grid-gutter-width-base']);
v['$card-deck-margin'] = (rmUnit(v['$grid-gutter-width-base'], detectedUnit) / 2) + detectedUnit;

v['$card-columns-count'] = '3';
v['$card-columns-gap'] = '1.25rem';
v['$card-columns-margin'] = v['$card-spacer-y'];


// Tooltips

v['$tooltip-max-width'] = '200px';
v['$tooltip-color'] = v['$white'];
v['$tooltip-bg'] = v['$black'];
v['$tooltip-opacity'] = '.9';
v['$tooltip-padding-y'] = '3px';
v['$tooltip-padding-x'] = '8px';
v['$tooltip-margin'] = '3px';

v['$tooltip-arrow-width'] = '5px';
v['$tooltip-arrow-color'] = v['$tooltip-bg'];


// Popovers

v['$popover-inner-padding'] = '1px';
v['$popover-bg'] = v['$white'];
v['$popover-max-width'] = '276px';
v['$popover-border-width'] = v['$border-width'];

v['$popover-border-color'] = Color(v['$black']).alpha(0.2).toString();
v['$popover-box-shadow'] = `0 5px 10px ${Color(v['$black']).alpha(0.2).toString()}`;

v['$popover-title-bg'] = Color(v['$popover-bg']).darken(0.03).toString();
v['$popover-title-padding-x'] = '14px';
v['$popover-title-padding-y'] = '8px';

v['$popover-content-padding-x'] = '14px';
v['$popover-content-padding-y'] = '9px';

v['$popover-arrow-width'] = '10px';
v['$popover-arrow-color'] = v['$popover-bg'];

v['$popover-arrow-outer-width'] = ((rmUnit(v['$popover-arrow-width'], UNIT.PX) + 1) + UNIT.PX);
v['$popover-arrow-outer-color'] = Color(v['$popover-border-color']).fade(0.5).toString();


// Badges

v['$badge-default-bg'] = v['$gray-light'];
v['$badge-primary-bg'] = v['$brand-primary'];
v['$badge-success-bg'] = v['$brand-success'];
v['$badge-info-bg'] = v['$brand-info'];
v['$badge-warning-bg'] = v['$brand-warning'];
v['$badge-danger-bg'] = v['$brand-danger'];

v['$badge-color'] = v['$white'];
v['$badge-link-hover-color'] = v['$white'];
v['$badge-font-size'] = '75%';
v['$badge-font-weight'] = v['$font-weight-bold'];
v['$badge-padding-x'] = '.4em';
v['$badge-padding-y'] = '.25em';

v['$badge-pill-padding-x'] = '.6em';
// Use a higher than normal value to ensure completely rounded edges when
// customizing padding or font-size on labels.
v['$badge-pill-border-radius'] = '10rem';


// Modals

// Padding applied to the modal body
v['$modal-inner-padding'] = '15px';

v['$modal-dialog-margin'] = '10px';
v['$modal-dialog-sm-up-margin-y'] = '30px';

v['$modal-title-line-height'] = v['$line-height-base'];

v['$modal-content-bg'] = v['$white'];
v['$modal-content-border-color'] = Color(v['$black']).alpha(0.2).toString();
v['$modal-content-border-width'] = v['$border-width'];
v['$modal-content-xs-box-shadow'] = `0 3px 9px ${Color(v['$black']).alpha(0.5).toString()}`;
v['$modal-content-sm-up-box-shadow'] = `0 5px 15px ${Color(v['$black']).alpha(0.5).toString()}`;

v['$modal-backdrop-bg'] = v['$black'];
v['$modal-backdrop-opacity'] = '.5';
v['$modal-header-border-color'] = v['$gray-lighter'];
v['$modal-footer-border-color'] = v['$modal-header-border-color'];
v['$modal-header-border-width'] = v['$modal-content-border-width'];
v['$modal-footer-border-width'] = v['$modal-header-border-width'];
v['$modal-header-padding'] = '15px';

v['$modal-lg'] = '800px';
v['$modal-md'] = '500px';
v['$modal-sm'] = '300px';

v['$modal-transition'] = 'transform .3s ease-out';


// Alerts
//
// Define alert colors, border radius, and padding.

v['$alert-padding-x'] = '1.25rem';
v['$alert-padding-y'] = '.75rem';
v['$alert-margin-bottom'] = v['$spacer-y'];
v['$alert-border-radius'] = v['$border-radius'];
v['$alert-link-font-weight'] = v['$font-weight-bold'];
v['$alert-border-width'] = v['$border-width'];

v['$alert-success-bg'] = v['$state-success-bg'];
v['$alert-success-text'] = v['$state-success-text'];
v['$alert-success-border'] = v['$state-success-border'];

v['$alert-info-bg'] = v['$state-info-bg'];
v['$alert-info-text'] = v['$state-info-text'];
v['$alert-info-border'] = v['$state-info-border'];

v['$alert-warning-bg'] = v['$state-warning-bg'];
v['$alert-warning-text'] = v['$state-warning-text'];
v['$alert-warning-border'] = v['$state-warning-border'];

v['$alert-danger-bg'] = v['$state-danger-bg'];
v['$alert-danger-text'] = v['$state-danger-text'];
v['$alert-danger-border'] = v['$state-danger-border'];


// Progress bars

v['$progress-height'] = '1rem';
v['$progress-font-size'] = '.75rem';
v['$progress-bg'] = v['$gray-lighter'];
v['$progress-border-radius'] = v['$border-radius'];
v['$progress-box-shadow'] = `inset 0 .1rem .1rem ${Color(v['$black']).alpha(0.1).toString()}`;
v['$progress-bar-color'] = v['$white'];
v['$progress-bar-bg'] = v['$brand-primary'];
v['$progress-bar-animation-timing'] = '1s linear infinite';

// List group

v['$list-group-color'] = v['$body-color'];
v['$list-group-bg'] = v['$white'];
v['$list-group-border-color'] = Color(v['$black']).alpha(0.125).toString();
v['$list-group-border-width'] = v['$border-width'];
v['$list-group-border-radius'] = v['$border-radius'];

v['$list-group-item-padding-x'] = '1.25rem';
v['$list-group-item-padding-y'] = '.75rem';

v['$list-group-hover-bg'] = v['$gray-lightest'];
v['$list-group-active-color'] = v['$component-active-color'];
v['$list-group-active-bg'] = v['$component-active-bg'];
v['$list-group-active-border'] = v['$list-group-active-bg'];

v['$list-group-disabled-color'] = v['$gray-light'];
v['$list-group-disabled-bg'] = v['$list-group-bg'];

v['$list-group-link-color'] = v['$gray'];
v['$list-group-link-hover-color'] = v['$list-group-link-color'];

v['$list-group-link-active-color'] = v['$list-group-color'];
v['$list-group-link-active-bg'] = v['$gray-lighter'];


// Image thumbnails

v['$thumbnail-padding'] = '.25rem';
v['$thumbnail-bg'] = v['$body-bg'];
v['$thumbnail-border-width'] = v['$border-width'];
v['$thumbnail-border-color'] = '#ddd';
v['$thumbnail-border-radius'] = v['$border-radius'];
v['$thumbnail-box-shadow'] = `0 1px 2px ${Color(v['$black']).alpha(0.75).toString()}`;
v['$thumbnail-transition'] = 'all .2s ease-in-out';


// Figures

v['$figure-caption-font-size'] = '90%';
v['$figure-caption-color'] = v['$gray-light'];


// Breadcrumbs

v['$breadcrumb-padding-y'] = '.75rem';
v['$breadcrumb-padding-x'] = '1rem';
v['$breadcrumb-item-padding'] = '.5rem';

v['$breadcrumb-bg'] = v['$gray-lighter'];
v['$breadcrumb-divider-color'] = v['$gray-light'];
v['$breadcrumb-active-color'] = v['$gray-light'];
v['$breadcrumb-divider'] = '"/"';


// Carousel

v['$carousel-control-color'] = v['$white'];
v['$carousel-control-width'] = '15%';
v['$carousel-control-opacity'] = '.5';

v['$carousel-indicator-width'] = '30px';
v['$carousel-indicator-height'] = '3px';
v['$carousel-indicator-spacer'] = '3px';
v['$carousel-indicator-active-bg'] = v['$white'];

v['$carousel-caption-width'] = '70%';
v['$carousel-caption-color'] = v['$white'];

v['$carousel-control-icon-width'] = '20px';

v['$carousel-control-prev-icon-bg'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="${v['$carousel-control-color']}" viewBox="0 0 8 8"%3E%3Cpath d="M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z"/%3E%3C/svg%3E')`;
v['$carousel-control-next-icon-bg'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="${v['$carousel-control-color']}" viewBox="0 0 8 8"%3E%3Cpath d="M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z"/%3E%3C/svg%3E')`;

v['$carousel-transition'] = 'transform .6s ease-in-out';


// Close

v['$close-font-size'] = (rmUnit(v['$font-size-base']) * 1.5) + detectUnit(v['$font-size-base']);
v['$close-font-weight'] = v['$font-weight-bold'];
v['$close-color'] = v['$black'];
v['$close-text-shadow'] = `0 1px 0 ${v['$white']}`;

// Code

v['$code-font-size'] = '90%';
v['$code-padding-x'] = '.4rem';
v['$code-padding-y'] = '.2rem';
v['$code-color'] = '#bd4147';
v['$code-bg'] = v['$gray-lightest'];

v['$kbd-color'] = v['$white'];
v['$kbd-bg'] = v['$gray-dark'];

v['$pre-color'] = v['$gray-dark'];
v['$pre-scrollable-max-height'] = '340px';

