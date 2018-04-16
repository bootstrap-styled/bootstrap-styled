'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTheme = undefined;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * BOOTSTRAP THEME TABLE
 *
 * this file is not meant to be used and must be kept as original
 * @param userTheme
 */
var makeTheme = exports.makeTheme = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /* eslint dot-notation: 'off', new-cap: 'off' */
  // Variables
  //
  // Copy settings from this file into the provided `_custom.scss` to override
  // the Bootstrap defaults without modifying key, versioned files.
  var v = {};
  var u = userTheme;
  // all var must be grouped in a named theme
  v['_name'] = u['_name'] || 'bootstrap-styled';
  // Colors
  //
  // Grayscale and colors for use across Bootstrap.

  // Start with assigning color names to specific hex values.
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';

  // Create grayscale
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';

  // Spacing
  //
  // Control the default styling of most Bootstrap elements by modifying these
  // variables. Mostly focused on spacing.
  // You can add more entries to the v['$spacers'] map, should you need more variation.

  v['$spacer'] = u['$spacer'] || '1rem';
  v['$border-width'] = u['$border-width'] || '1px';

  // Body
  //
  // Settings for the `<body>` element.

  v['$body-bg'] = u['$body-bg'] || v['$white'];

  // Tables
  //
  // Customizes the `.table` component with basic values, each used across all table variations.

  v['$table-cell-padding'] = u['$table-cell-padding'] || '.75rem';
  v['$table-sm-cell-padding'] = u['$table-sm-cell-padding'] || '.3rem';

  v['$table-bg'] = u['$table-bg'] || 'transparent';

  v['$table-inverse-bg'] = u['$table-inverse-bg'] || v['$gray-dark'];
  v['$table-inverse-bg-accent'] = u['$table-inverse-bg-accent'] || (0, _color2.default)(v['$white']).alpha(0.05).toString();
  v['$table-inverse-bg-hover'] = u['$table-inverse-bg-hover'] || (0, _color2.default)(v['$white']).alpha(0.075).toString();
  v['$table-inverse-color'] = u['$table-inverse-color'] || v['$body-bg'];
  v['$table-inverse-border'] = u['$table-inverse-border'] || (0, _color2.default)(v['$gray-dark']).lighten(0.075).toString();

  v['$table-bg-accent'] = u['$table-bg-accent'] || (0, _color2.default)(v['$black']).alpha(0.05).toString();
  v['$table-bg-hover'] = u['$table-bg-hover'] || (0, _color2.default)(v['$black']).alpha(0.075).toString();
  v['$table-bg-active'] = u['$table-bg-active'] || v['$table-bg-hover'];

  v['$table-head-bg'] = u['$table-head-bg'] || v['$gray-lighter'];
  v['$table-head-color'] = u['$table-head-color'] || v['$gray'];

  v['$table-border-width'] = u['$table-border-width'] || v['$border-width'];
  v['$table-border-color'] = u['$table-border-color'] || v['$gray-lighter'];

  // Form states and alerts
  //
  // Define colors for form feedback states and, by default, alerts.

  v['$state-success-bg'] = u['$state-success-bg'] || '#dff0d8';
  v['$state-info-bg'] = u['$state-info-bg'] || '#d9edf7';
  v['$state-warning-bg'] = u['$state-warning-bg'] || '#fcf8e3';
  v['$state-danger-bg'] = u['$state-danger-bg'] || '#f2dede';

  return Object.assign({}, u, v);
};

exports.default = makeTheme();