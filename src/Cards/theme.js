import Color from 'color';
import { assertAscending, assertStartAtZero } from 'bootstrap-styled-mixins/lib/variables';
import unitUtils from 'bootstrap-styled-utils/lib/unitUtils';
import { allowFalseValue } from '../theme/utils';

const { detectUnit, rmUnit, UNIT } = unitUtils;

/**
 * BOOTSTRAP THEME CARDS TAG (Cards, CardsColumns, CardDeck, CardGroup)
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

  // Colors
  //
  // Start with assigning color names to specific hex values.
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$green'] = u['$green'] || '#5cb85c';
  v['$teal'] = u['$teal'] || '#5bc0de';
  v['$orange'] = u['$orange'] || '#f0ad4e';
  v['$red'] = u['$red'] || '#d9534f';

  // Create grayscale
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';

  // Reassign color vars to semantic color scheme
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$brand-success'] = u['$brand-success'] || v['$green'];
  v['$brand-info'] = u['$brand-info'] || v['$teal'];
  v['$brand-warning'] = u['$brand-warning'] || v['$orange'];
  v['$brand-danger'] = u['$brand-danger'] || v['$red'];
  v['$brand-inverse'] = u['$brand-inverse'] || v['$gray-dark'];

  // Components
  //
  // Define common padding and border radius sizes and more.
  v['$border-radius'] = u['$border-radius'] || '.25rem';

  // Grid columns
  //
  // Set the number of columns and specify the width of the gutters.
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';

  // Cards (Card, CardGroup)

  v['$card-spacer-x'] = u['$card-spacer-x'] || '1.25rem';
  v['$card-spacer-y'] = u['$card-spacer-y'] || '.75rem';
  v['$card-border-width'] = u['$card-border-width'] || '1px';
  v['$card-border-radius'] = u['$card-border-radius'] || v['$border-radius'];
  v['$card-border-color'] = u['$card-border-color'] || Color(v['$black']).alpha(0.125).toString();
  v['$card-border-radius-inner'] = u['$card-border-radius-inner'] || `calc(${v['$card-border-radius']} - ${v['$card-border-width']})`;
  v['$card-cap-bg'] = u['$card-cap-bg'] || v['$gray-lightest'];
  v['$card-bg'] = u['$card-bg'] || v['$white'];

  v['$card-link-hover-color'] = u['$card-link-hover-color'] || v['$white'];

  v['$card-img-overlay-padding'] = u['$card-img-overlay-padding'] || '1.25rem';

  // Button
  v['$btn-primary-bg'] = u['$btn-primary-bg'] || v['$brand-primary'];
  v['$btn-secondary-border'] = u['$btn-secondary-border'] || '#ccc';
  v['$btn-info-bg'] = u['$btn-info-bg'] || v['$brand-info'];
  v['$btn-success-bg'] = u['$btn-success-bg'] || v['$brand-success'];
  v['$btn-warning-bg'] = u['$btn-warning-bg'] || v['$brand-warning'];
  v['$btn-danger-bg'] = u['$btn-danger-bg'] || v['$brand-danger'];

  // THEME EXTEND CARDS
  v['$card-margin-y-halved'] = u['$card-margin-y-halved'] || ((rmUnit(v['$card-spacer-y'], UNIT.REM) / 2) + UNIT.REM);
  v['$card-margin-x-halved'] = u['$card-margin-x-halved'] || ((rmUnit(v['$card-spacer-x'], UNIT.REM) / 2) + UNIT.REM);

  // CardColumns
  v['$card-columns-count-md'] = u['$card-columns-count-md'] || '2';
  v['$card-columns-gap-md'] = u['$card-columns-gap-md'] || '1rem';
  v['$card-columns-margin-md'] = u['$card-columns-margin-md'] || v['$card-spacer-y'];
  v['$card-columns-count-lg'] = u['$card-columns-count-lg'] || '2';
  v['$card-columns-gap-lg'] = u['$card-columns-gap-lg'] || '1.15rem';
  v['$card-columns-margin-lg'] = u['$card-columns-margin-lg'] || v['$card-spacer-y'];
  v['$card-columns-count-xl'] = u['$card-columns-count-xl'] || '3';
  v['$card-columns-gap-xl'] = u['$card-columns-gap-xl'] || '1.25rem';
  v['$card-columns-margin-xl'] = u['$card-columns-margin-xl'] || v['$card-spacer-y'];
  v['$card-columns-count-xxl'] = u['$card-columns-count-xxl'] || '4';
  v['$card-columns-gap-xxl'] = u['$card-columns-gap-xxl'] || '1.25rem';
  v['$card-columns-margin-xxl'] = u['$card-columns-margin-xxl'] || v['$card-spacer-y'];

  // // ?? missing
  // v['$card-inverse-bg-color'] = u['$card-inverse-bg-color'] || '??????';
  // v['$card-inverse-border-color'] = u['$card-inverse-border-color'] || '??????';

  // CardDeck
  const detectedUnit = detectUnit(v['$grid-gutter-width-base']);
  v['$card-deck-margin'] = u['$card-deck-margin'] || (rmUnit(v['$grid-gutter-width-base'], detectedUnit) / 2) + detectedUnit;

  return Object.assign({}, u, v);
};

export default makeTheme();
