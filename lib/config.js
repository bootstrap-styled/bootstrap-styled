/* eslint dot-notation: 'off', new-cap: 'off' */
// Variables
//
// Copy settings from this file into the provided `_custom.scss` to override
// the Bootstrap defaults without modifying key, versioned files.


// Table of Contents
//
//  1. Colors
//  2. Options
//  3. Spacing
//  4. Body
//  5. Links
//  6. Grid breakpoints
//  7. Grid containers
//  8. Grid columns
//  9. Fonts
// 10. Components
// 11. Tables
// 12. Buttons
// 13. Forms
// 14. Dropdowns
// 15. Z-index master list
// 16. Navbar
// 17. Navs
// 18. Pagination
// 19. Jumbotron
// 20. Form states and alerts
// 21. Cards
// 22. Tooltips
// 23. Popovers
// 24. Tags
// 25. Modals
// 26. Alerts
// 27. Progress bars
// 28. List group
// 29. Image thumbnails
// 30. Figures
// 31. Breadcrumbs
// 32. Media objects
// 33. Carousel
// 34. Close
// 35. Code
// 36. Footer

import Color from 'color';
import { detectUnit, rmUnit, UNIT } from './styled/mixins/unit';
import { assertAscending, assertStartAtZero } from './styled/mixins/variables';
var v = {};

// General variable structure
//
// Variable format should follow the `$component-modifier-state-property` order.


// 1. Colors
//
// Grayscale and brand colors for use across Bootstrap.

v['$gray-base'] = '#000';
v['$gray-dark'] = '#373a3c';
v['$gray'] = '#55595c';
v['$gray-light'] = '#818a91';
v['$gray-lighter'] = '#eceeef';
v['$gray-lightest'] = '#f7f7f9';

v['$brand-primary'] = '#0275d8';
v['$brand-success'] = '#5cb85c';
v['$brand-info'] = '#5bc0de';
v['$brand-warning'] = '#f0ad4e';
v['$brand-danger'] = '#d9534f';
v['$brand-inverse'] = v['$gray-dark'];

// 2. Options
//
// Quickly modify global styling by enabling or disabling optional features.

v['$enable-rounded'] = true;
v['$enable-shadows'] = false;
v['$enable-gradients'] = false;
v['$enable-transitions'] = true;
v['$enable-hover-media-query'] = false;
v['$enable-grid-classes'] = true; // should not be set to false : It will disable our components : Container, ContainerFluid, Row, Col and related utilities
v['$enable-print-styles'] = true;

// 3. Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the $spacers map, should you need more variation.

v['$spacer'] = '1rem';
v['$spacer-halved'] = rmUnit(v['$spacer'], UNIT.REM) / 2 + UNIT.REM;

v['$spacer-unit'] = detectUnit(v['$spacer']);
v['$spacer-x'] = v['$spacer'];
v['$spacer-y'] = v['$spacer'];
v['$spacers'] = {
  0: {
    x: 0,
    y: 0
  },
  1: {
    x: rmUnit(v['$spacer-x']) * 0.25 + v['$spacer-unit'],
    y: rmUnit(v['$spacer-y']) * 0.25 + v['$spacer-unit']
  },
  2: {
    x: rmUnit(v['$spacer-x']) * 0.5 + v['$spacer-unit'],
    y: rmUnit(v['$spacer-y']) * 0.5 + v['$spacer-unit']
  },
  3: {
    x: v['$spacer-x'],
    y: v['$spacer-y']
  },
  4: {
    x: rmUnit(v['$spacer-x']) * 1.5 + v['$spacer-unit'],
    y: rmUnit(v['$spacer-y']) * 1.5 + v['$spacer-unit']
  },
  5: {
    x: rmUnit(v['$spacer-x']) * 3 + v['$spacer-unit'],
    y: rmUnit(v['$spacer-y']) * 3 + v['$spacer-unit']
  }
};
v['$border-width'] = '1px';

// 4. Body
//
// Settings for the `<body>` element.

v['$body-bg'] = '#fff';
v['$body-color'] = v['$gray-dark'];

// 5. Links
//
// Style anchor elements.

v['$link-color'] = v['$brand-primary'];
v['$link-decoration'] = 'none';
// For some reason, darken from bootstrap is set to 15%, and similar results are used when we push it to 35% on our function
v['$link-hover-color'] = Color(v['$link-color']).darken(0.35).toString();
v['$link-hover-decoration'] = 'underline';

// 6. Grid breakpoints
//
// Define the minimum dimensions at which your layout will change,
// adapting to different screen sizes, for use in media queries.

v['$grid-breakpoints'] = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

assertAscending(v['$grid-breakpoints'], '$grid-breakpoints');
assertStartAtZero(v['$grid-breakpoints']);

// 7. Grid containers
//
// Define the maximum width of `.container` for different screen sizes.

v['$container-max-widths'] = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px'
};
assertAscending(v['$container-max-widths'], '$container-max-widths');

// 8. Grid columns
//
// Set the number of columns and specify the width of the gutters.

v['$grid-columns'] = '12';
v['$grid-gutter-width-base'] = '30px';
v['$grid-gutter-widths'] = {
  xs: v['$grid-gutter-width-base'],
  sm: v['$grid-gutter-width-base'],
  md: v['$grid-gutter-width-base'],
  lg: v['$grid-gutter-width-base'],
  xl: v['$grid-gutter-width-base']
};

// 9. Fonts
//
// Font, line-height, and color for body text, headings, and more.

// v['$font-family-sans-serif'] = 'Roboto, \'Helvetica Neue\', Helvetica, Arial, sans-serif';
v['$font-family-sans-serif'] = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
v['$font-family-serif'] = 'Georgia, \'Times New Roman\'; Times, serif';
v['$font-family-monospace'] = 'Menlo, Monaco, Consolas, \'Courier New\'; monospace';
v['$font-family-base'] = v['$font-family-sans-serif'];

v['$font-size-root'] = '16px';

v['$font-size-base'] = '1rem';
v['$font-size-lg'] = '1.25rem';
v['$font-size-sm'] = '.875rem';
v['$font-size-xs'] = '.75rem';

v['$font-weight-normal'] = 'normal';
v['$font-weight-bold'] = 'bold';

v['$line-height-base'] = '1.5';

v['$font-size-h1'] = '2.5rem';
v['$font-size-h2'] = '2rem';
v['$font-size-h3'] = '1.75rem';
v['$font-size-h4'] = '1.5rem';
v['$font-size-h5'] = '1.25rem';
v['$font-size-h6'] = '1rem';

// http://v4-alpha.getbootstrap.com/content/typography/#display-headings
v['$display1-size'] = '6rem';
v['$display2-size'] = '5.5rem';
v['$display3-size'] = '4.5rem';
v['$display4-size'] = '3.5rem';

v['$display1-weight'] = '300';
v['$display2-weight'] = '300';
v['$display3-weight'] = '300';
v['$display4-weight'] = '300';

v['$headings-margin-bottom'] = v['$spacer-halved'];
v['$headings-font-family'] = 'inherit';
v['$headings-font-weight'] = '500';
v['$headings-line-height'] = '1.1';
v['$headings-color'] = 'inherit';
v['$headings-underline-width'] = '180%';
v['$headings-underline-height'] = '1px';
v['$headings-underline-left-position'] = '-40%';
v['$headings-underline-gradient-color-1'] = v['$brand-primary'];
v['$headings-underline-gradient-color-2'] = v['$body-bg'];
v['$lead-font-size'] = '1.25rem';
v['$lead-font-weight'] = '300';

v['$small-font-size'] = '80%';

v['$text-muted'] = v['$gray-light'];

v['$abbr-border-color'] = v['$gray-light'];

v['$blockquote-small-color'] = v['$gray-light'];
v['$blockquote-font-size'] = rmUnit(v['$font-size-base'], UNIT.REM) * 1.25 + UNIT.REM;
v['$blockquote-border-color'] = v['$gray-light'];
v['$blockquote-border-width'] = '.25rem';

v['$hr-border-color'] = 'rgba(0,0,0,.1)';
v['$hr-border-width'] = v['$border-width'];

v['$dt-font-weight'] = ' bold';

v['$kbd-box-shadow'] = 'inset 0 -.1rem 0 rgba(0,0,0,.25)';
v['$nested-kbd-font-weight'] = ' bold';

v['$list-inline-padding'] = '5px';

// 10. Components
//
// Define common padding and border radius sizes and more.

v['$line-height-lg'] = (4 / 3).toString();
v['$line-height-sm'] = '1.5';

v['$border-radius'] = '.25rem';
v['$border-radius-lg'] = '.3rem';
v['$border-radius-sm'] = '.2rem';

v['$component-active-color'] = '#fff';
v['$component-active-bg'] = v['$brand-primary'];

v['$caret-width'] = '.3em';
v['$caret-width-lg'] = v['$caret-width'];

// ============================================================================================================================
//                                               TOOODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// ============================================================================================================================

v['$padding-base-vertical'] = '6px';
v['$padding-base-horizontal'] = '12px';
v['$padding-large-vertical'] = '10px';
v['$padding-large-horizontal'] = '16px';
v['$padding-small-vertical'] = '5px';
v['$padding-small-horizontal'] = '10px';
v['$padding-xs-vertical'] = '1px';
v['$padding-xs-horizontal'] = '5px';

// 11. Tables
//
// Customizes the `.table` component with basic values, each used across all table variations.

v['$table-cell-padding'] = '.75rem';
v['$table-sm-cell-padding'] = '.3rem';

v['$table-bg'] = 'transparent';
v['$table-bg-accent'] = 'rgba(0,0,0,.05)';
v['$table-bg-hover'] = 'rgba(0,0,0,.075)';
v['$table-bg-active'] = v['$table-bg-hover'];
v['$table-bg-inverse'] = v['$gray-dark'];
v['$table-inverse-border-color'] = v['$gray'];
v['$table-head-color'] = v['$table-bg-inverse'];
v['$table-head-bg'] = v['$gray-lighter'];

v['$table-border-width'] = v['$border-width'];
v['$table-border-header-width'] = rmUnit(v['$border-width'], UNIT.PX) * 2 + UNIT.PX;
v['$table-border-color'] = v['$gray-lighter'];

v['$table-row-hover-color'] = v['$gray-lightest'];

v['$table-header-padding'] = '0.5rem';
v['$table-cell-padding'] = v['$table-header-padding'];
v['$table-condensed-padding'] = rmUnit(v['$table-header-padding'], UNIT.REM) / 1.6 + UNIT.REM;

// 12. Buttons
//
// For each of Bootstrap's buttons, define text, background and border color.

v['$btn-padding-x'] = '1rem';
v['$btn-padding-y'] = '.5rem';
v['$btn-line-height'] = '1.25';
v['$btn-font-weight'] = 'normal';
v['$btn-font-size'] = v['$font-size-sm'];
v['$btn-box-shadow'] = 'inset 0 1px 0 rgba(255,255,255,.15), 0 1px 1px rgba(0,0,0,.075)';
v['$btn-active-box-shadow'] = 'inset 0 3px 5px rgba(0,0,0,.125)';

// in the bootstrap 4.0.0alpha.5 default color is replaced by secondary color

v['$btn-primary-color'] = '#fff';
v['$btn-primary-bg'] = v['$brand-primary'];
v['$btn-primary-border'] = v['$btn-primary-bg'];

// v['$btn-primary-hover-color'] = v['$btn-primary-border'];
// v['$btn-primary-hover-border'] = Color(v['$btn-primary-hover-color']).darken(0.2).toString();

v['$btn-secondary-color'] = v['$gray-dark'];
v['$btn-secondary-bg'] = '#fff';
v['$btn-secondary-border'] = '#ccc';

v['$btn-success-color'] = '#fff';
v['$btn-success-bg'] = v['$brand-success'];
v['$btn-success-border'] = v['$btn-success-bg'];

// v['$btn-success-hover-color'] = v['$btn-success-border'];
// v['$btn-success-hover-border'] = Color(v['$btn-success-hover-color']).darken(0.2).toString();


v['$btn-info-color'] = '#fff';
v['$btn-info-bg'] = v['$brand-info'];
v['$btn-info-border'] = v['$btn-info-bg'];

// v['$btn-info-hover-color'] = v['$btn-info-border'];
// v['$btn-info-hover-border'] = Color(v['$btn-info-hover-color']).darken(0.2).toString();


v['$btn-warning-color'] = '#fff';
v['$btn-warning-bg'] = v['$brand-warning'];
v['$btn-warning-border'] = v['$btn-warning-bg'];

// v['$btn-warning-hover-color'] = v['$btn-warning-border'];
// v['$btn-warning-hover-border'] = Color(v['$btn-warning-hover-color']).darken(0.2).toString();


v['$btn-danger-color'] = '#fff';
v['$btn-danger-bg'] = v['$brand-danger'];
v['$btn-danger-border'] = v['$btn-danger-bg'];

// v['$btn-danger-hover-color'] = v['$btn-danger-border'];
// v['$btn-danger-hover-border'] = Color(v['$btn-danger-hover-color']).darken(0.2).toString();

v['$btn-link-disabled-color'] = v['$gray-light'];

v['$btn-padding-x-sm'] = '.5rem';
v['$btn-padding-y-sm'] = '.25rem';

v['$btn-padding-x-lg'] = '1.5rem';
v['$btn-padding-y-lg'] = '.75rem';

// Allows for customizing button radius independently from global border radius
v['$btn-border-radius'] = v['$border-radius'];
v['$btn-border-radius-lg'] = v['$border-radius-lg'];
v['$btn-border-radius-sm'] = v[' $border-radius-sm'];

v['$btn-border-width'] = v['$border-width'];
v['$btn-block-spacing-y'] = '.5rem';
v['$btn-toolbar-margin'] = '.5rem';

// 13. Forms

v['$input-padding-x'] = '.75rem ';
v['$input-padding-y'] = '.5rem';
v['$input-line-height'] = '1.25';

v['$input-bg'] = '#fff';
v['$input-bg-disabled'] = v['$gray-lighter'];

v['$input-color'] = v['$gray'];
v['$input-border-color'] = '#CCCCCC';
v['$input-border-width'] = rmUnit(v['$border-width'], UNIT.PX) * 2 + UNIT.PX;
v['$input-btn-border-width'] = v['$border-width'];
v['$input-box-shadow'] = 'inset 0 1px 1px rgba(0,0,0,.075)';

v['$input-border-radius'] = v['$border-radius'];
v['$input-border-radius-lg'] = v['$border-radius-lg'];
v['$input-border-radius-sm'] = v['$border-radius-sm'];

v['$input-bg-focus'] = v['$input-bg'];
v['$input-border-focus'] = '#66afe9';
v['$input-box-shadow-focus'] = 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)';
v['$input-color-focus'] = v['$input-color'];

v['$input-color-placeholder'] = '#999';

v['$input-padding-x-sm'] = '.5rem';
v['$input-padding-y-sm'] = '.25rem';

v['$input-padding-x-lg'] = '1.5rem';
v['$input-padding-y-lg'] = '.75rem';

v['$input-height'] = rmUnit(v['$font-size-base'], UNIT.REM) * v['$line-height-base'] + rmUnit(v['$input-padding-y'], UNIT.REM) * 2 + UNIT.REM;
v['$input-height-sm'] = rmUnit(v['$font-size-sm'], UNIT.REM) * v['$line-height-sm'] + rmUnit(v['$input-padding-y-sm'], UNIT.REM) * 2 + UNIT.REM;
v['$input-height-lg'] = rmUnit(v['$font-size-lg'], UNIT.REM) * v['$line-height-lg'] + rmUnit(v['$input-padding-y-lg'], UNIT.REM) * 2 + UNIT.REM;

v['$form-group-margin-bottom'] = v['$spacer-y'];
// The next lot of variables are defined via bootstrap form page, so that calculus are not within our css

v['$form-check-margin-bottom'] = '.5rem';
v['$form-check-input-gutter'] = '1.25rem';
v['$form-check-input-margin-y'] = '.25rem';
v['$form-check-input-margin-x'] = '.25rem';
v['$form-check-inline-margin-x'] = '.75rem';

v['$form-text-margin-top'] = '.25rem';

v['$form-feedback-margin-top'] = v['$form-text-margin-top'];

v['$form-control-feedback-margin-top'] = v['$form-text-margin-top'];
v['$form-control-padding-right'] = rmUnit(v['$input-padding-x'], UNIT.REM) * 3 + UNIT.REM;
v['$form-control-background-position'] = rmUnit(v['$input-height'], UNIT.REM) / 4 + UNIT.REM;
v['$form-control-background-size'] = rmUnit(v['$input-height'], UNIT.REM) / 2 + UNIT.REM;

v['$input-group-addon-bg'] = v['$gray-lighter'];
v['$input-group-addon-border-color'] = v['$input-border-color'];

v['$cursor-disabled'] = 'not-allowed';

v['$custom-control-gutter'] = '1.5rem';
v['$custom-control-spacer-x'] = '1rem';
v['$custom-control-spacer-y'] = '.25rem';

v['$custom-control-indicator-size'] = '1rem';
v['$custom-control-indicator-bg'] = '#ddd';
v['$custom-control-indicator-bg-size'] = '50% 50%';
v['$custom-control-indicator-box-shadow'] = 'inset 0 .25rem .25rem rgba(0,0,0,.1)';

v['$custom-control-disabled-cursor'] = v['$cursor-disabled'];
v['$custom-control-disabled-indicator-bg'] = '#eee';
v['$custom-control-disabled-description-color'] = '#767676';

v['$custom-control-checked-indicator-color'] = '#fff';
v['$custom-control-checked-indicator-bg'] = '#0074d9';
v['$custom-control-checked-indicator-box-shadow'] = 'none';

v['$custom-control-focus-indicator-box-shadow'] = '0 0 0 .075rem #fff, 0 0 0 .2rem #0074d9';

v['$custom-control-active-indicator-color'] = '#fff';
v['$custom-control-active-indicator-bg'] = '#84c6ff';
v['$custom-control-active-indicator-box-shadow'] = 'none';

v['$custom-checkbox-radius'] = v['$border-radius'];
v['$custom-checkbox-checked-icon'] = 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="' + v['$custom-control-checked-indicator-color'] + '" d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/%3E%3C/svg%3E\')';

v['$custom-checkbox-indeterminate-bg'] = '#0074d9';
v['$custom-checkbox-indeterminate-indicator-color'] = v['$custom-control-checked-indicator-color'];
v['$custom-checkbox-indeterminate-icon'] = 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4"%3E%3Cpath stroke="' + v['$custom-checkbox-indeterminate-indicator-color'] + '" d="M0 2h4"/%3E%3C/svg%3E\')';
v['$custom-checkbox-indeterminate-box-shadow'] = 'none';

v['$custom-radio-radius'] = '50%';
v['$custom-radio-checked-icon'] = 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 8 8"%3E%3Ccircle r="3" fill="' + v['$custom-control-checked-indicator-color'] + '"/%3E%3C/svg%3E\')';

v['$custom-select-padding-x'] = '.75rem';
v['$custom-select-padding-y'] = '.375rem';
v['$custom-select-indicator-padding'] = '1rem'; // Extra padding to account for the presence of the background-image based indicator
v['$custom-select-color'] = v['$input-color'];
v['$custom-select-disabled-color'] = v['$gray-light'];
v['$custom-select-bg'] = '#fff';
v['$custom-select-disabled-bg'] = v['$gray-lighter'];
v['$custom-select-bg-size'] = '8px 10px'; // In pixels because image dimensions
v['$custom-select-indicator-color'] = '#333';
v['$custom-select-indicator'] = 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="' + v['$custom-select-indicator-color'] + '" d="M2 0L0 2h4zm0 5L0 3h4z"/%3E%3C/svg%3E\')';
v['$custom-select-border-width'] = v['$input-btn-border-width'];
v['$custom-select-border-color'] = v['$input-border-color'];
v['$custom-select-border-radius'] = v['$border-radius'];

v['$custom-select-focus-border-color'] = '#51a7e8';
v['$custom-select-focus-box-shadow'] = 'inset 0 1px 2px rgba(0, 0, 0, .075), 0 0 5px rgba(81, 167, 232, .5)';

v['$custom-select-sm-padding-y'] = '.2rem';
v['$custom-select-sm-font-size'] = '75%';
v['$select-border-width'] = rmUnit(v['$border-width'], UNIT.PX) * 2 + UNIT.PX;

v['$custom-file-height'] = '2.5rem';
v['$custom-file-width'] = '14rem';
v['$custom-file-focus-box-shadow'] = '0 0 0 .075rem #fff, 0 0 0 .2rem #0074d9';

v['$custom-file-padding-x'] = '.5rem';
v['$custom-file-padding-y'] = '1rem';
v['$custom-file-line-height'] = ' 1.5';
v['$custom-file-color'] = '#555';
v['$custom-file-bg'] = '#fff';
v['$custom-file-border-width'] = v['$border-width'];
v['$custom-file-border-color'] = '#ddd';
v['$custom-file-border-radius'] = v['$border-radius'];
v['$custom-file-box-shadow'] = 'inset 0 .2rem .4rem rgba(0,0,0,.05)';
v['$custom-file-button-color'] = v['$custom-file-color'];
v['$custom-file-button-bg'] = '#eee';

v['$custom-file-text-placeholder-en'] = 'Choose file...';
v['$custom-file-text-button-label-en'] = 'Browse';

// Form validation icons

v['$form-icon-success-color'] = v['$brand-success'];
v['$form-icon-success'] = 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="' + v['$form-icon-success-color'] + '" d="M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/%3E%3C/svg%3E\')';

v['$form-icon-warning-color'] = v['$brand-warning'];
v['$form-icon-warning'] = 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="' + v['$form-icon-warning-color'] + '" d="M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z"/%3E%3C/svg%3E\')';

v['$form-icon-danger-color'] = v['$brand-danger'];
v['$form-icon-danger'] = 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="' + v['$form-icon-danger-color'] + '" viewBox="-2 -2 7 7"%3E%3Cpath stroke="%23d9534f" d="M0 0l3 3m0-3L0 3"/%3E%3Ccircle r=".5"/%3E%3Ccircle cx="3" r=".5"/%3E%3Ccircle cy="3" r=".5"/%3E%3Ccircle cx="3" cy="3" r=".5"/%3E%3C/svg%3E\')';

// 14. Dropdowns
//
// Dropdown menu container and contents.

v['$dropdown-min-width'] = '10rem';
v['$dropdown-padding-y'] = '.5rem';
v['$dropdown-margin-top'] = '.125rem';
v['$dropdown-bg'] = '#fff';
v['$dropdown-border-color'] = 'rgba(0,0,0,.15)';
v['$dropdown-border-width'] = v['$border-width'];
v['$dropdown-divider-bg'] = '#e5e5e5';
v['$dropdown-box-shadow'] = '0 .5rem 1rem rgba(0,0,0,.175)';

v['$dropdown-link-color'] = v['$gray-dark'];
v['$dropdown-link-hover-color'] = Color(v['$gray-dark']).darken(0.5).toString();
v['$dropdown-link-hover-bg'] = '#f5f5f5';

v['$dropdown-link-active-color'] = v['$component-active-color'];
v['$dropdown-link-active-bg'] = v['$component-active-bg'];

v['$dropdown-link-disabled-color'] = v['$gray-light'];

v['$dropdown-item-padding-x'] = '1.5rem';

v['$dropdown-header-color'] = v['$gray-light'];

// 15. Z-index master list
//
// Warning: Avoid customizing these values. They're used for a bird's eye view
// of components dependent on the z-axis and are designed to all work together.

v['$zindex-dropdown-backdrop'] = '990';
v['$zindex-navbar'] = '1000';
v['$zindex-dropdown'] = '1000';
v['$zindex-popover'] = '1060';
v['$zindex-tooltip'] = '1070';
v['$zindex-navbar-fixed'] = '1030';
v['$zindex-navbar-sticky'] = '1030';
v['$zindex-modal-bg'] = '1040';
v['$zindex-modal'] = '1050';
v['$zindex-menu-push'] = '2000';
// 16. Navbar

v['$navbar-height'] = '70px';
v['$navbar-max-height'] = '400px';

v['$navbar-border-radius'] = v['$border-radius'];
v['$navbar-padding-x'] = v['$spacer'];
v['$navbar-padding-y'] = v['$spacer-halved'];

v['$navbar-brand-padding-y'] = '.25rem';

v['$navbar-divider-padding-y'] = '.425rem';

v['$navbar-toggler-padding-x'] = '.75rem';
v['$navbar-toggler-padding-y'] = '.5rem';
v['$navbar-toggler-font-size'] = v['$font-size-lg'];
v['$navbar-toggler-border-radius'] = v['$btn-border-radius'];
v['$navbar-toggler-padding-x'] = '.75rem';
v['$navbar-toggler-padding-y'] = '.5rem';

v['$navbar-dark-color'] = 'rgba(255,255,255,.5)';
v['$navbar-dark-hover-color'] = 'rgba(255,255,255,.75)';
v['$navbar-dark-active-color'] = 'rgba(255,255,255,1)';
v['$navbar-dark-disabled-color'] = 'rgba(255,255,255,.25)';
v['$navbar-dark-toggler-bg'] = 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="' + v['$navbar-dark-color'] + '" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 8h24M4 16h24M4 24h24"/%3E%3C/svg%3E\')';
v['$navbar-dark-toggler-border'] = 'rgba(255,255,255,.1)';

v['$navbar-light-color'] = 'rgba(0,0,0,.5)';
v['$navbar-light-hover-color'] = 'rgba(0,0,0,.7)';
v['$navbar-light-active-color'] = 'rgba(0,0,0,.9)';
v['$navbar-light-dark-gray-disabled-color'] = 'rgba(0,0,0,.3)';
v['$navbar-light-toggler-bg'] = 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="' + v['$navbar-light-color'] + '" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 8h24M4 16h24M4 24h24"/%3E%3C/svg%3E\')';
v['$navbar-light-toggler-border'] = 'rgba(0,0,0,.1)';

v['$header-max-height'] = '450px';
v['$header-collapsed-max-height'] = '1000px';
v['$header-navbar-border-color'] = v['$gray-lighter'];
v['$header-navbar-border-width'] = v['$border-width'];
v['$header-navbar-transition-duration'] = '.6s';
// 17. Navs

v['$nav-item-margin'] = '.2rem';
v['$nav-item-inline-spacer'] = '1rem';
v['$nav-link-padding'] = '.5em 1em';
v['$nav-link-hover-bg'] = v['$gray-lighter'];
v['$nav-disabled-link-color'] = '#818a91';
v['$nav-disabled-link-hover-color'] = v['$gray-light'];
v['$nav-disabled-link-hover-bg'] = 'transparent';

v['$nav-tabs-border-color'] = '#ddd';
v['$nav-tabs-border-width'] = v['$border-width'];
v['$nav-tabs-border-radius'] = v['$border-radius'];
v['$nav-tabs-link-hover-border-color'] = v['$gray-lighter'];
v['$nav-tabs-active-link-hover-bg'] = v['$body-bg'];
v['$nav-tabs-active-link-hover-color'] = v['$gray'];
v['$nav-tabs-active-link-hover-border-color'] = '#ddd';
v['$nav-tabs-justified-link-border-color'] = '#ddd';
v['$nav-tabs-justified-active-link-border-color'] = v['$body-bg'];

v['$nav-pills-border-radius'] = v['$border-radius'];
v['$nav-pills-active-link-bg'] = v['$component-active-bg'];
v['$nav-pills-active-link-color'] = v['$component-active-color'];

// 18. Pagination

v['$pagination-padding-x'] = '.75rem';
v['$pagination-padding-y'] = '.5rem';
v['$pagination-padding-x-sm'] = '.75rem';
v['$pagination-padding-y-sm'] = '.275rem';
v['$pagination-padding-x-lg'] = '1.5rem';
v['$pagination-padding-y-lg'] = '.75rem';

v['$pagination-color'] = v['$link-color'];
v['$pagination-bg'] = '#fff';
v['$pagination-border-width'] = v['$border-width'];
v['$pagination-border-color'] = '#ddd';

v['$pagination-hover-color'] = v['$link-hover-color'];
v['$pagination-hover-bg'] = v['$gray-lighter'];
v['$pagination-hover-border'] = '#ddd';

v['$pagination-active-color'] = '#fff';
v['$pagination-active-bg'] = v['$brand-primary'];
v['$pagination-active-border'] = v['$brand-primary'];

v['$pagination-disabled-color'] = v['$gray-light'];
v['$pagination-disabled-bg'] = '#fff';
v['$pagination-disabled-border'] = '#ddd';

// 19. Jumbotron

v['$jumbotron-padding'] = '2rem';
v['$jumbotron-bg'] = v['$gray-lighter'];

// 20. Form states and alerts
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
v['$mark-padding'] = '.2em';

v['$state-warning-border'] = Color(v['$state-warning-bg']).darken(0.05).toString();

v['$state-danger-text'] = '#a94442';
v['$state-danger-bg'] = '#f2dede';
v['$state-danger-border'] = Color(v['$state-danger-bg']).darken(0.05).toString();

// 21. Cards

v['$card-spacer-x'] = '1.25rem';
v['$card-spacer-y'] = '.75rem';
v['$card-border-width'] = '1px';
v['$card-border-radius'] = v['$border-radius'];
v['$card-border-color'] = 'rgba(0,0,0,.125)';
v['$card-border-radius-inner'] = 'calc(' + v['$card-border-radius'] + ' - ' + v['$card-border-width'] + ')';
v['$card-cap-bg'] = '#f5f5f5';
v['$card-bg'] = '#fff';

v['$card-link-hover-color'] = '#fff';

v['$card-img-overlay-padding'] = '1.25rem';

v['$card-deck-margin'] = '.625rem';
v['$space-between-cards'] = rmUnit(v['$card-deck-margin'], UNIT.REM) * 2 + UNIT.REM;
v['$card-columns-gap'] = '1.25rem';
v['$card-columns-margin'] = v['$card-spacer-y'];
v['$card-columns-count'] = '3';

// Added by AJT not original bootstrap variable
v['$card-margin-y-halved'] = rmUnit(v['$card-spacer-y'], UNIT.REM) / 2 + UNIT.REM;
v['$card-margin-x-halved'] = rmUnit(v['$card-spacer-x'], UNIT.REM) / 2 + UNIT.REM;

// 22. Tooltips

v['$tooltip-max-width'] = '200px';
v['$tooltip-color'] = '#fff';
v['$tooltip-bg'] = '#000';
v['$tooltip-opacity'] = '.9';
v['$tooltip-padding-y'] = '3px';
v['$tooltip-padding-x'] = '8px';
v['$tooltip-margin'] = '3px';

v['$tooltip-arrow-width'] = '5px';
v['$tooltip-arrow-color'] = v['$tooltip-bg'];

// 23. Popovers

v['$popover-inner-padding'] = '1px';
v['$popover-bg'] = '#fff';
v['$popover-max-width'] = '276px';
v['$popover-border-width'] = v['$border-width'];
v['$popover-border-color'] = 'rgba(0,0,0,.2)';
v['$popover-box-shadow'] = '0 5px 10px rgba(0,0,0,.2)';

v['$popover-title-bg'] = Color(v['$popover-bg']).darken(0.5).toString();
v['$popover-title-padding-x'] = '14px';
v['$popover-title-padding-y'] = '8px';

v['$popover-content-padding-x'] = '14px';
v['$popover-content-padding-y'] = '9px';

v['$popover-arrow-width'] = '10px';
v['$popover-arrow-color'] = v['$popover-bg'];

v['$popover-arrow-outer-width'] = rmUnit(v['$popover-arrow-width'], UNIT.PX) + parseFloat('1') + UNIT.PX;
// replaced fadein by clearer. Unsure oif that is the right function to apply
v['$popover-arrow-outer-color'] = Color(v['$popover-arrow-color']).fade(0.5).toString();

// 24. Tags

v['$tag-default-bg'] = v['$gray'];
v['$tag-primary-bg'] = v['$brand-primary'];
v['$tag-success-bg'] = v['$brand-success'];
v['$tag-info-bg'] = v['$brand-info'];
v['$tag-warning-bg'] = v['$brand-warning'];
v['$tag-danger-bg'] = v['$brand-danger'];

v['$tag-color'] = '#fff';
v['$tag-link-hover-color'] = '#fff';
v['$tag-font-size'] = '75%';
v['$tag-font-weight'] = 'bold';
v['$tag-line-height'] = '1';
v['$tag-padding-x'] = '.4em';
v['$tag-padding-y'] = '.2em';
v['$tag-border-radius'] = '.25rem';

v['$tag-pill-padding-x'] = '.6em';
// Use a higher than normal value to ensure completely rounded edges when
// customizing padding or font-size on labels.
v['$tag-pill-border-radius'] = '10rem';

// 25. Modals

// v['$modal-inner-padding'] = '15px';
//
// v['$modal-dialog-margin'] = '10px';
// v['$modal-dialog-sm-up-margin-y'] = '30px';
//
// v['$modal-title-padding'] = '15px';
// v['$modal-title-line-height'] = v['$line-height-base'];
//
// v['$modal-content-bg'] = '#fff';
// v['$modal-content-border-color'] = 'rgba(0,0,0,.2)';
// v['$modal-content-border-width'] = v['$border-width'];
// v['$modal-content-xs-box-shadow'] = '0 3px 9px rgba(0,0,0,.5)';
// v['$modal-content-sm-up-box-shadow'] = '0 5px 15px rgba(0,0,0,.5)';
//
// v['$modal-backdrop-bg'] = '#000';
// v['$modal-backdrop-opacity'] = '.5';
// v['$modal-header-border-color'] = '#e5e5e5';
// v['$modal-footer-border-color'] = v['$modal-header-border-color'];
// v['$modal-header-border-width'] = v['$modal-content-border-width'];
// v['$modal-footer-border-width'] = v['$modal-header-border-width'];
//
// v['$modal-lg'] = '900px';
// v['$modal-md'] = '600px';
// v['$modal-sm'] = '300px';

// 26. Alerts
//
// Define alert colors, border radius, and padding.

v['$alert-padding-x'] = '1.25rem';
v['$alert-padding-y'] = '.75rem';
v['$alert-dismissible-padding-x'] = rmUnit(v['$alert-padding-x'], UNIT.REM) * 2 + UNIT.REM;

v['$alert-border-radius'] = v['$border-radius'];
v['$alert-border-width'] = v['$border-width'];
v['$alert-link-font-weight'] = 'bold';
v['$alert-margin-bottom'] = '1.25rem';

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

// 27. Progress bars

v['$progress-bg'] = '#eee';
v['$progress-bar-color'] = '#0074d9';
v['$progress-border-radius'] = v['$border-radius'];
v['$progress-box-shadow'] = 'inset 0 .1rem .1rem rgba(0,0,0,.1)';

v['$progress-bar-bg'] = v['$brand-primary'];
v['$progress-bar-success-bg'] = v['$brand-success'];
v['$progress-bar-warning-bg'] = v['$brand-warning'];
v['$progress-bar-danger-bg'] = v['$brand-danger'];
v['$progress-bar-info-bg'] = v['$brand-info'];

// 28. List group

v['$list-group-bg'] = '#fff';
v['$list-group-color'] = v['$body-color'];
v['$list-group-border-color'] = '#ddd';
v['$list-group-border-radius'] = v['$border-radius'];
v['$list-group-border-width'] = v['$border-width'];

v['$list-group-hover-bg'] = '#f5f5f5';
v['$list-group-active-color'] = v['$component-active-color'];
v['$list-group-active-bg'] = v['$gray-lighter'];
v['$list-group-active-border'] = v['$list-group-active-bg'];
v['$list-group-active-text-color'] = Color(v['$list-group-active-bg']).lighten(0.4).toString();

v['$list-group-disabled-color'] = v['$gray-light'];
v['$list-group-disabled-bg'] = v['$gray-lighter'];
v['$list-group-disabled-text-color'] = v['$list-group-disabled-color'];

v['$list-group-link-color'] = '#555';
v['$list-group-link-active-color'] = v['$list-group-color'];
v['$list-group-link-active-bg'] = v['$gray-lighter'];

v['$list-group-link-hover-color'] = v['$list-group-link-color'];
v['$list-group-link-heading-color'] = '#333';

v['$list-group-item-padding-x'] = '1.25rem';
v['$list-group-item-padding-y'] = '.75rem';
v['$list-group-item-heading-margin-bottom'] = '5px';

// 29. Image thumbnails

v['$thumbnail-padding'] = '.25em';
v['$thumbnail-bg'] = v['$body-bg'];
v['$thumbnail-border-color'] = '#ddd';
v['$thumbnail-border-width'] = v['$border-width'];
v['$thumbnail-border-radius'] = v['$border-radius'];
v['$thumbnail-box-shadow'] = '0 1px 2px rgba(0,0,0,.075)';

// 30. Figures

v['$figure-caption-font-size'] = '90%';

// 31. Breadcrumbs

v['$breadcrumb-padding-y'] = '.75rem';
v['$breadcrumb-padding-x'] = '1rem';
v['$breadcrumb-item-padding'] = '.5rem';

v['$breadcrumb-bg'] = v['$gray-lighter'];
v['$breadcrumb-divider-color'] = v['$gray-light'];
v['$breadcrumb-active-color'] = v['$gray-light'];
v['$breadcrumb-divider'] = '\'/\'';

// 32. Media objects

v['$media-margin-top'] = '15px';
v['$media-heading-margin-bottom'] = '5px';
v['$media-alignment-padding-x'] = '10px';

// 33. Carousel

v['$carousel-text-shadow'] = '0 1px 2px rgba(0,0,0,.6)';

v['$carousel-control-color'] = '#fff';
v['$carousel-control-width'] = '15%';
v['$carousel-control-sm-up-size'] = '30px';
v['$carousel-control-opacity'] = '.5';
v['$carousel-control-font-size'] = '20px';

v['$carousel-indicators-width'] = '60%';

v['$carousel-indicator-size'] = '10px';
v['$carousel-indicator-active-size'] = '12px';
v['$carousel-indicator-active-bg'] = '#fff';
v['$carousel-indicator-border-color'] = '#fff';

v['$carousel-caption-width'] = '70%';
v['$carousel-caption-sm-up-width'] = '60%';
v['$carousel-caption-color'] = '#fff';

v['$carousel-icon-width'] = '20px';

// 34. Close

v['$close-font-weight'] = 'bold';
v['$close-color'] = '#000';
v['$close-text-shadow'] = '0 1px 0 #fff';
v['$close-font-size'] = rmUnit(v['$font-size-base']) * 1.5 + detectUnit(v['$font-size-base']);

// 35. Code

v['$code-font-size'] = '90%';
v['$code-padding-x'] = '.4rem';
v['$code-padding-y'] = '.2rem';
v['$code-color'] = '#bd4147';
v['$code-bg'] = '#f7f7f9';

v['$kbd-color'] = '#fff';
v['$kbd-bg'] = '#333';

v['$pre-bg'] = '#f7f7f9';
v['$pre-color'] = v['$gray-dark'];
v['$pre-border-color'] = '#ccc';
v['$pre-scrollable-max-height'] = '340px';

// Customization

// 36. Footer

v['$footer-height'] = '150px';
v['$footer-background'] = 'purple';
v['$footer-color'] = 'white';

// Menu transition component
v['$menu-slide-transition-duration'] = '.6s';
v['$menu-push-transition-duration'] = '.6s';

// MenuPush component
v['$menu-push-bg'] = 'black';
v['$menu-push-mini-width'] = '75px';
v['$menu-push-width'] = '220px';
v['$menu-push-full-width'] = '100%';

export default v;