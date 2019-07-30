declare module 'bootstrap-styled' {
  import {
    getGlobalStyles,
    getGlobalStyleNoBootstrapProvider
  } from '@bootstrap-styled/css-utils';
  export { getGlobalStyles, getGlobalStyleNoBootstrapProvider };

  export type Theme = {
    _name: string;

    // Colors
    $white: string;
    $black: string;
    $red: string;
    $orange: string;
    $yellow: string;
    $green: string;
    $blue: string;
    $teal: string;
    $pink: string;
    $purple: string;

    // Grayscale
    '$gray-dark': string;
    $gray: string;
    '$gray-light': string;
    '$gray-lighter': string;
    '$gray-lightest': string;

    // Semantic colour scheme
    '$brand-primary': string;
    '$brand-success': string;
    '$brand-info': string;
    '$brand-warning': string;
    '$brand-danger': string;
    '$brand-inverse': string;

    // Options
    '$enable-rounded': boolean;
    '$enable-shadows': boolean;
    '$enable-gradients': boolean;
    '$enable-transitions': boolean;
    '$enable-hover-media-query': boolean;
    '$enable-grid-classes': boolean;
    '$enable-print-styles': boolean;

    // Spacing
    $spacer: string;
    '$spacer-halved': string;
    '$spacer-x': string;
    '$spacer-y': string;
    $spacers: {
      0: {
        x: string;
        y: string;
      };
      1: {
        x: string;
        y: string;
      };
      2: {
        x: string;
        y: string;
      };
      3: {
        x: string;
        y: string;
      };
      4: {
        x: string;
        y: string;
      };
      5: {
        x: string;
        y: string;
      };
    };
    '$border-width': string;

    // .h-* & .w-* classes
    $sizes: {
      25: string;
      50: string;
      75: string;
      100: string;
    };

    // Body
    '$body-bg': string;
    '$body-color': string;

    // Links
    '$link-color': string;
    '$link-decoration': string;
    '$link-hover-color': string;
    '$link-hover-decoration': string;

    // Grid breakpoints
    '$grid-breakpoints': {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    // Grid containers
    '$container-max-widths': {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    // Grid columns
    '$grid-columns': string;
    '$grid-gutter-width': string;

    // Fonts
    '$font-family-sans-serif': string;
    '$font-family-monospace': string;
    '$font-family-base': string;

    '$font-size-base': string;
    '$font-size-lg': string;
    '$font-size-sm': string;
    '$font-size-xs': string;

    '$font-weight-normal': string;
    '$font-weight-bold': string;

    '$font-weight-base': string;
    '$line-height-base': string;

    '$font-size-h1': string;
    '$font-size-h2': string;
    '$font-size-h3': string;
    '$font-size-h4': string;
    '$font-size-h5': string;
    '$font-size-h6': string;

    '$headings-margin-bottom': string;
    '$headings-font-family': string;
    '$headings-font-weight': string;
    '$headings-line-height': string;
    '$headings-color': string;

    '$display1-size': string;
    '$display2-size': string;
    '$display3-size': string;
    '$display4-size': string;

    '$display1-weight': string;
    '$display2-weight': string;
    '$display3-weight': string;
    '$display4-weight': string;

    '$display-line-height': string;

    '$lead-font-size': string;
    '$lead-font-weight': string;

    '$small-font-size': string;

    '$text-muted': string;
    '$blockquote-small-color': string;

    '$blockquote-font-size': string;
    '$blockquote-border-color': string;
    '$blockquote-border-width': string;

    '$hr-border-color': string;
    '$hr-border-width': string;

    '$mark-padding': string;

    '$dt-font-weight': string;

    '$list-inline-padding': string;

    // Components
    '$line-height-lg': string;
    '$line-height-sm': string;

    '$border-radius': string;
    '$border-radius-lg': string;
    '$border-radius-sm': string;

    '$component-active-color': string;
    '$component-active-bg': string;

    '$caret-width': string;

    '$transition-base': string;
    '$transition-fade': string;
    '$transition-collapse': string;

    // Tables
    '$table-cell-padding': string;
    '$table-sm-cell-padding': string;

    '$table-bg': string;

    '$table-inverse-bg': string;
    '$table-inverse-bg-accent': string;
    '$table-inverse-bg-hover': string;
    '$table-inverse-color': string;
    '$table-inverse-border': string;

    '$table-bg-accent': string;
    '$table-bg-hover': string;
    '$table-bg-active': string;

    '$table-head-bg': string;
    '$table-head-color': string;

    '$table-border-width': string;
    '$table-border-color': string;

    // Buttons
    '$btn-padding-x': string;
    '$btn-padding-y': string;
    '$btn-line-height': string;
    '$btn-font-weight': string;
    '$btn-box-shadow': string;
    '$btn-focus-box-shadow': string;
    '$btn-disabled-opacity': string;
    '$btn-active-box-shadow': string;

    '$btn-primary-color': string;
    '$btn-primary-bg': string;

    '$btn-secondary-color': string;
    '$btn-secondary-bg': string;

    '$btn-info-color': string;
    '$btn-info-bg': string;

    '$btn-success-color': string;
    '$btn-success-bg': string;

    '$btn-warning-color': string;
    '$btn-warning-bg': string;

    '$btn-danger-color': string;
    '$btn-danger-bg': string;

    '$btn-primary-border': string;
    '$btn-secondary-border': string;
    '$btn-info-border': string;
    '$btn-success-border': string;
    '$btn-warning-border': string;
    '$btn-danger-border': string;

    '$btn-link-disabled-color': string;

    '$btn-padding-x-sm': string;
    '$btn-padding-y-sm': string;

    '$btn-padding-x-lg': string;
    '$btn-padding-y-lg': string;

    '$btn-block-spacing-y': string;

    '$btn-border-radius': string;
    '$btn-border-radius-lg': string;
    '$btn-border-radius-sm': string;

    '$btn-border-width': string;

    '$btn-transition': string;

    // Forms
    '$input-padding-x': string;
    '$input-padding-y': string;
    '$input-line-height': string;

    '$input-bg': string;
    '$input-bg-disabled': string;

    '$input-color': string;
    '$input-border-color': string;
    '$input-btn-border-width': string;
    '$input-box-shadow': string;

    '$input-border-radius': string;
    '$input-border-radius-lg': string;
    '$input-border-radius-sm': string;

    '$input-bg-focus': string;
    '$input-border-focus': string;
    '$input-box-shadow-focus': string;
    '$input-color-focus': string;

    '$input-color-placeholder': string;

    '$input-padding-x-sm': string;
    '$input-padding-y-sm': string;

    '$input-padding-x-lg': string;
    '$input-padding-y-lg': string;

    '$input-height': string;
    '$input-height-sm': string;
    '$input-height-lg': string;

    '$input-transition': string;

    '$label-margin-bottom': string;

    '$form-text-margin-top': string;
    '$form-feedback-margin-top': string;

    '$form-check-margin-bottom': string;
    '$form-check-input-gutter': string;
    '$form-check-input-margin-y': string;
    '$form-check-input-margin-x': string;

    '$form-check-inline-margin-x': string;

    '$form-group-margin-bottom': string;

    '$input-group-addon-bg': string;
    '$input-group-addon-border-color': string;

    '$cursor-disabled': string;

    '$custom-control-gutter': string;
    '$custom-control-spacer-x': string;
    '$custom-control-spacer-y': string;

    '$custom-control-indicator-size': string;
    '$custom-control-indicator-bg': string;
    '$custom-control-indicator-bg-size': string;
    '$custom-control-indicator-box-shadow': string;

    '$custom-control-disabled-cursor': string;
    '$custom-control-disabled-indicator-bg': string;
    '$custom-control-disabled-description-color': string;

    '$custom-control-checked-indicator-color': string;
    '$custom-control-checked-indicator-bg': string;
    '$custom-control-checked-indicator-box-shadow': string;

    '$custom-control-focus-indicator-box-shadow': string;

    '$custom-control-active-indicator-color': string;
    '$custom-control-active-indicator-bg': string;
    '$custom-control-active-indicator-box-shadow': string;

    '$custom-checkbox-radius': string;
    '$custom-checkbox-checked-icon': string;

    '$custom-checkbox-indeterminate-bg': string;
    '$custom-checkbox-indeterminate-indicator-color': string;
    '$custom-checkbox-indeterminate-icon': string;
    '$custom-checkbox-indeterminate-box-shadow': string;

    '$custom-radio-radius': string;
    '$custom-radio-checked-icon': string;

    '$custom-select-padding-x': string;
    '$custom-select-padding-y': string;
    '$custom-select-indicator-padding': string;
    '$custom-select-line-height': string;
    '$custom-select-color': string;
    '$custom-select-disabled-color': string;
    '$custom-select-bg': string;
    '$custom-select-disabled-bg': string;
    '$custom-select-bg-size': string;
    '$custom-select-indicator-color': string;
    '$custom-select-indicator': string;
    '$custom-select-border-width': string;
    '$custom-select-border-color': string;
    '$custom-select-border-radius': string;

    '$custom-select-focus-border-color': string;
    '$custom-select-focus-box-shadow': string;

    '$custom-select-sm-font-size': string;

    '$custom-file-height': string;
    '$custom-file-width': string;
    '$custom-file-focus-box-shadow': string;

    '$custom-file-padding-x': string;
    '$custom-file-padding-y': string;
    '$custom-file-line-height': string;
    '$custom-file-color': string;
    '$custom-file-bg': string;
    '$custom-file-border-width': string;
    '$custom-file-border-color': string;
    '$custom-file-border-radius': string;
    '$custom-file-box-shadow': string;
    '$custom-file-button-color': string;
    '$custom-file-button-bg': string;
    '$custom-file-text': {
      placeholder: {
        en: string;
      };
      'button-label': {
        en: string;
      };
    };

    // Form validation icons
    '$form-icon-success-color': string;
    '$form-icon-success': string;

    '$form-icon-warning-color': string;
    '$form-icon-warning': string;

    '$form-icon-danger-color': string;
    '$form-icon-danger': string;

    // Dropdowns
    '$dropdown-min-width': string;
    '$dropdown-padding-y': string;
    '$dropdown-margin-top': string;
    '$dropdown-bg': string;
    '$dropdown-border-color': string;
    '$dropdown-border-width': string;
    '$dropdown-divider-bg': string;
    '$dropdown-box-shadow': string;

    '$dropdown-link-color': string;
    '$dropdown-link-hover-color': string;
    '$dropdown-link-hover-bg': string;

    '$dropdown-link-active-color': string;
    '$dropdown-link-active-bg': string;

    '$dropdown-link-disabled-color': string;

    '$dropdown-item-padding-x': string;

    '$dropdown-header-color': string;

    // Z-index master list
    //
    // Warning = 'Avoid customizing these values. They're used for a bird's eye view
    // of components dependent on the z-axis and are designed to all work together.
    '$zindex-dropdown-backdrop': string;
    '$zindex-dropdown': string;
    '$zindex-modal-backdrop': string;
    '$zindex-modal': string;
    '$zindex-popover': string;
    '$zindex-tooltip': string;
    '$zindex-navbar': string;
    '$zindex-navbar-fixed': string;
    '$zindex-navbar-sticky': string;

    // Navbar
    '$navbar-padding-x': string;
    '$navbar-padding-y': string;

    '$navbar-brand-padding-y': string;

    '$navbar-divider-padding-y': string;

    '$navbar-toggler-padding-x': string;
    '$navbar-toggler-padding-y': string;
    '$navbar-toggler-font-size': string;
    '$navbar-toggler-border-radius': string;

    '$navbar-inverse-color': string;
    '$navbar-inverse-hover-color': string;
    '$navbar-inverse-active-color': string;
    '$navbar-inverse-disabled-color': string;
    '$navbar-inverse-toggler-bg': string;
    '$navbar-inverse-toggler-border': string;

    '$navbar-light-color': string;
    '$navbar-light-hover-color': string;
    '$navbar-light-active-color': string;
    '$navbar-light-disabled-color': string;
    '$navbar-light-toggler-bg': string;
    '$navbar-light-toggler-border': string;

    // Navs
    '$nav-link-padding': string;
    '$nav-disabled-link-color': string;

    '$nav-tabs-border-color': string;
    '$nav-tabs-border-width': string;
    '$nav-tabs-border-radius': string;
    '$nav-tabs-link-hover-border-color': string;
    '$nav-tabs-active-link-hover-color': string;
    '$nav-tabs-active-link-hover-bg': string;
    '$nav-tabs-active-link-hover-border-color': string;

    '$nav-pills-border-radius': string;
    '$nav-pills-active-link-color': string;
    '$nav-pills-active-link-bg': string;

    // Pagination
    '$pagination-padding-x': string;
    '$pagination-padding-y': string;
    '$pagination-padding-x-sm': string;
    '$pagination-padding-y-sm': string;
    '$pagination-padding-x-lg': string;
    '$pagination-padding-y-lg': string;
    '$pagination-line-height': string;

    '$pagination-color': string;
    '$pagination-bg': string;
    '$pagination-border-width': string;
    '$pagination-border-color': string;

    '$pagination-hover-color': string;
    '$pagination-hover-bg': string;
    '$pagination-hover-border': string;

    '$pagination-active-color': string;
    '$pagination-active-bg': string;
    '$pagination-active-border': string;

    '$pagination-disabled-color': string;
    '$pagination-disabled-bg': string;
    '$pagination-disabled-border': string;

    // Jumbotron
    '$jumbotron-padding': string;
    '$jumbotron-bg': string;

    // Form states and alerts
    '$state-success-text': string;
    '$state-success-bg': string;
    '$state-success-border': string;

    '$state-info-text': string;
    '$state-info-bg': string;
    '$state-info-border': string;

    '$state-warning-text': string;
    '$state-warning-bg': string;
    '$state-warning-border': string;

    '$mark-bg': string;

    '$state-danger-text': string;
    '$state-danger-bg': string;
    '$state-danger-border': string;

    // Cards
    '$card-spacer-x': string;
    '$card-spacer-y': string;
    '$card-border-width': string;
    '$card-border-radius': string;
    '$card-border-color': string;
    '$card-border-radius-inner': string;
    '$card-cap-bg': string;
    '$card-bg': string;

    '$card-link-hover-color': string;

    '$card-img-overlay-padding': string;

    '$card-group-margin': string;
    '$card-deck-margin': string;

    '$card-columns-count-md': string;
    '$card-columns-gap-md': string;
    '$card-columns-margin-md': string;
    '$card-columns-count-lg': string;
    '$card-columns-gap-lg': string;
    '$card-columns-margin-lg': string;
    '$card-columns-count-xl': string;
    '$card-columns-gap-xl': string;
    '$card-columns-margin-xl': string;
    '$card-columns-count-xxl': string;
    '$card-columns-gap-xxl': string;
    '$card-columns-margin-xxl': string;

    // Tooltips
    '$tooltip-max-width': string;
    '$tooltip-color': string;
    '$tooltip-bg': string;
    '$tooltip-opacity': string;
    '$tooltip-padding-y': string;
    '$tooltip-padding-x': string;
    '$tooltip-margin': string;

    '$tooltip-arrow-width': string;
    '$tooltip-arrow-color': string;

    // Popovers
    '$popover-inner-padding': string;
    '$popover-bg': string;
    '$popover-max-width': string;
    '$popover-border-width': string;

    '$popover-border-color': string;
    '$popover-box-shadow': string;

    '$popover-title-bg': string;
    '$popover-title-padding-x': string;
    '$popover-title-padding-y': string;

    '$popover-content-padding-x': string;
    '$popover-content-padding-y': string;

    '$popover-arrow-width': string;
    '$popover-arrow-color': string;

    '$popover-arrow-outer-width': string;
    '$popover-arrow-outer-color': string;

    // Badges
    '$badge-default-bg': string;
    '$badge-primary-bg': string;
    '$badge-success-bg': string;
    '$badge-info-bg': string;
    '$badge-warning-bg': string;
    '$badge-danger-bg': string;

    '$badge-color': string;
    '$badge-link-hover-color': string;
    '$badge-font-size': string;
    '$badge-font-weight': string;
    '$badge-padding-x': string;
    '$badge-padding-y': string;

    '$badge-pill-padding-x': string;
    '$badge-pill-border-radius': string;

    // Modals
    '$modal-inner-padding': string;

    '$modal-dialog-margin': string;
    '$modal-dialog-sm-up-margin-y': string;

    '$modal-title-line-height': string;

    '$modal-content-bg': string;
    '$modal-content-border-color': string;
    '$modal-content-border-width': string;
    '$modal-content-xs-box-shadow': string;
    '$modal-content-sm-up-box-shadow': string;

    '$modal-backdrop-bg': string;
    '$modal-backdrop-opacity': string;
    '$modal-header-border-color': string;
    '$modal-footer-border-color': string;
    '$modal-header-border-width': string;
    '$modal-footer-border-width': string;
    '$modal-header-padding': string;

    '$modal-lg': string;
    '$modal-md': string;
    '$modal-sm': string;

    '$modal-transition': string;

    // Alerts
    '$alert-padding-x': string;
    '$alert-padding-y': string;
    '$alert-margin-bottom': string;
    '$alert-border-radius': string;
    '$alert-link-font-weight': string;
    '$alert-border-width': string;

    '$alert-success-bg': string;
    '$alert-success-text': string;
    '$alert-success-border': string;

    '$alert-info-bg': string;
    '$alert-info-text': string;
    '$alert-info-border': string;

    '$alert-warning-bg': string;
    '$alert-warning-text': string;
    '$alert-warning-border': string;

    '$alert-danger-bg': string;
    '$alert-danger-text': string;
    '$alert-danger-border': string;

    // Progress bars
    '$progress-height': string;
    '$progress-font-size': string;
    '$progress-bg': string;
    '$progress-border-radius': string;
    '$progress-box-shadow': string;
    '$progress-bar-color': string;
    '$progress-bar-bg': string;
    '$progress-bar-animation-timing': string;

    // List group
    '$list-group-color': string;
    '$list-group-bg': string;
    '$list-group-border-color': string;
    '$list-group-border-width': string;
    '$list-group-border-radius': string;

    '$list-group-item-padding-x': string;
    '$list-group-item-padding-y': string;

    '$list-group-hover-bg': string;
    '$list-group-active-color': string;
    '$list-group-active-bg': string;
    '$list-group-active-border': string;

    '$list-group-disabled-color': string;
    '$list-group-disabled-bg': string;

    '$list-group-link-color': string;
    '$list-group-link-hover-color': string;

    '$list-group-link-active-color': string;
    '$list-group-link-active-bg': string;

    // Image thumbnails
    '$thumbnail-padding': string;
    '$thumbnail-bg': string;
    '$thumbnail-border-width': string;
    '$thumbnail-border-color': string;
    '$thumbnail-border-radius': string;
    '$thumbnail-box-shadow': string;
    '$thumbnail-transition': string;

    // Figures
    '$figure-caption-font-size': string;
    '$figure-caption-color': string;

    // Breadcrumbs
    '$breadcrumb-padding-y': string;
    '$breadcrumb-padding-x': string;
    '$breadcrumb-item-padding': string;

    '$breadcrumb-bg': string;
    '$breadcrumb-divider-color': string;
    '$breadcrumb-active-color': string;
    '$breadcrumb-divider': string;

    // Close
    '$close-font-size': string;
    '$close-font-weight': string;
    '$close-color': string;
    '$close-text-shadow': string;

    // Code
    '$code-font-size': string;
    '$code-padding-x': string;
    '$code-padding-y': string;
    '$code-color': string;
    '$code-bg': string;

    '$kbd-color': string;
    '$kbd-bg': string;
    '$kbd-box-shadow': string;
    '$nested-kbd-font-weight': string;

    '$pre-color': string;
    '$pre-scrollable-max-height': string;
  };

  export type UserTheme = {
    [K in keyof Theme]?: Theme[K] | null;
  };

  export const theme: Theme;
  export function makeTheme(userTheme: UserTheme): Theme;

  export function createMakeTheme(
    list: ((theme: Theme) => Theme)[]
  ): (theme: Theme) => Theme;
  export function makeScopedTheme(
    scopeName: string,
    userTheme?: { [scope: string]: UserTheme }
  ): { [scope: string]: UserTheme };
  export function toMakeTheme(theme: Theme): (userTheme: UserTheme) => Theme;
}
