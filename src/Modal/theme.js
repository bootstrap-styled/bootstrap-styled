import Color from 'color';
import { assertAscending, assertStartAtZero } from 'bootstrap-styled-mixins/lib/variables';
import { allowFalseValue } from '../makeTheme/utils';
/**
 * BOOTSTRAP THEME MODAL
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
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$enable-transitions'] = allowFalseValue(u['$enable-transitions'], true);

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

  // Body
  //
  // Settings for the `<body>` element.

  v['$body-bg'] = u['$body-bg'] || v['$white'];
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];

  // Fonts

  v['$font-family-base'] = u['$font-family-base'] || v['$font-family-sans-serif'];
  v['$font-size-base'] = u['$font-size-base'] || '1rem'; // Assumes the browser default, typically `16px`
  v['$font-weight-normal'] = u['$font-weight-normal'] || 'normal';
  v['$font-weight-base'] = u['$font-weight-base'] || v['$font-weight-normal'];
  v['$line-height-base'] = u['$line-height-base'] || '1.5';

  // Z-index master list
  //
  // Warning = 'Avoid customizing these values. They're used for a bird's eye view
  // of components dependent on the z-axis and are designed to all work together.

  v['$zindex-modal'] = u['$zindex-modal'] || '1050';
  v['$zindex-modal-backdrop'] = u['$zindex-modal-backdrop'] || '1040';

  // Components
  //
  // Define common padding and border radius sizes and more.
  v['$transition-fade'] = u['$transition-fade'] || 'opacity .15s linear';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';

  // Modals

  // Padding applied to the modal body
  v['$modal-inner-padding'] = u['$modal-inner-padding'] || '15px';

  v['$modal-dialog-margin'] = u['$modal-dialog-margin'] || '10px';
  v['$modal-dialog-sm-up-margin-y'] = u['$modal-dialog-sm-up-margin-y'] || '30px';

  v['$modal-title-line-height'] = u['$modal-title-line-height'] || v['$line-height-base'];

  v['$modal-content-bg'] = u['$modal-content-bg'] || v['$white'];
  v['$modal-content-border-color'] = u['$modal-content-border-color'] || Color(v['$black']).alpha(0.2).toString();
  v['$modal-content-border-width'] = u['$modal-content-border-width'] || v['$border-width'];
  v['$modal-content-xs-box-shadow'] = u['$modal-content-xs-box-shadow'] || `0 3px 9px ${Color(v['$black']).alpha(0.5).toString()}`;
  v['$modal-content-sm-up-box-shadow'] = u['$modal-content-sm-up-box-shadow'] || `0 5px 15px ${Color(v['$black']).alpha(0.5).toString()}`;

  v['$modal-backdrop-bg'] = u['$modal-backdrop-bg'] || v['$black'];
  v['$modal-backdrop-opacity'] = u['$modal-backdrop-opacity'] || '.5';
  v['$modal-header-border-color'] = u['$modal-header-border-color'] || v['$gray-lighter'];
  v['$modal-footer-border-color'] = u['$modal-footer-border-color'] || v['$modal-header-border-color'];
  v['$modal-header-border-width'] = u['$modal-header-border-width'] || v['$modal-content-border-width'];
  v['$modal-footer-border-width'] = u['$modal-footer-border-width'] || v['$modal-header-border-width'];
  v['$modal-header-padding'] = u['$modal-header-padding'] || '15px';

  v['$modal-lg'] = u['$modal-lg'] || '800px';
  v['$modal-md'] = u['$modal-md'] || '500px';
  v['$modal-sm'] = u['$modal-sm'] || '300px';

  v['$modal-transition'] = u['$modal-transition'] || 'transform .3s ease-out';

  return Object.assign({}, u, v);
};

export default makeTheme();
