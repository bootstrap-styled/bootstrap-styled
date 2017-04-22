'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeExtend;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _mathUtils = require('math-utils');

var _variables = require('../styled/mixins/variables');

var _makeOriginal = require('./makeOriginal');

var _makeOriginal2 = _interopRequireDefault(_makeOriginal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rmUnit = _mathUtils.unitUtils.rmUnit,
    UNIT = _mathUtils.unitUtils.UNIT;
/**
 * Extends of Bootstrap original
 *
 * You can add new bootstrap-styled variable here
 * @param original
 * @param userTheme
 */

function makeExtend() {
  var original = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _makeOriginal2.default)();
  var userTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /* eslint dot-notation: 'off', new-cap: 'off' */

  var v = original;
  var u = userTheme;

  // tools

  // Header
  v['$header-navbar-border-color'] = u['$header-navbar-border-color'] || v['$gray-lighter'];
  v['$header-navbar-border-width'] = u['$header-navbar-border-width'] || v['$border-width'];

  // Card
  v['$card-margin-y-halved'] = u['$card-margin-y-halved'] || rmUnit(v['$card-spacer-y'], UNIT.REM) / 2 + UNIT.REM;
  v['$card-margin-x-halved'] = u['$card-margin-x-halved'] || rmUnit(v['$card-spacer-x'], UNIT.REM) / 2 + UNIT.REM;

  // Nav
  v['$nav-link-hover-bg'] = u['$nav-link-hover-bg'] || (0, _color2.default)(v['$brand-inverse']).darken(0.03).toString();

  // Navbar
  v['$navbar-max-height'] = u['$navbar-max-height'] || '400px';
  v['$navbar-height'] = u['$navbar-height'] || '70px';

  // Menu
  v['$menu-push-bg'] = u['$menu-push-bg'] || v['$brand-inverse'];
  v['$menu-push-mini-width'] = u['$menu-push-mini-width'] || '75px';
  v['$menu-push-width'] = u['$menu-push-width'] || '220px';
  v['$menu-transition-duration'] = u['$menu-transition-duration'] || '.6s';
  v['$menu-offset-nav-transition'] = u['$menu-offset-nav-transition'] || 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';
  v['$menu-offset-nav-box-shadow'] = u['$menu-offset-nav-box-shadow'] || 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px';

  // Zindex
  v['$zindex-menu-push'] = u['$zindex-menu-push'] || '2000';

  // Motion

  // MOTION CONFIGURATION
  // General configuration for animation, transition and css transition
  // Duration might not exceed 1000ms neither be lower than 200ms. (animation transition disable automaticaly when enable-transition is false)
  v['$motion-duration'] = u['$motion-duration'] || {
    xs: '200ms',
    sm: '300ms',
    md: '500ms',
    lg: '750ms',
    xl: '1000ms'
  };

  // Use default timing function properties
  v['$motion-timing-function'] = u['$motion-timing-function'] || {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out'
  };

  // Use xs for disable delay. Delay can't exceed 1000ms (in order to don't be forget by the user).
  v['$motion-delay'] = u['$motion-delay'] || {
    xs: '0ms',
    sm: '100ms',
    md: '200ms',
    lg: '500ms',
    xl: '1000ms'
  };

  // ANIMATION CONFIGURATION
  v['$motion-direction'] = u['$motion-direction'] || {
    normal: 'normal',
    reverse: 'reverse',
    alternate: 'alternate',
    alternateReverse: 'alternate-reverse'
  };

  // Use for iterate n time or loop your animation
  v['$motion-iterations'] = u['$motion-iterations'] || {
    xs: '1',
    sm: '3',
    md: '6',
    lg: '10',
    xl: 'infinite'
  };

  // Define if the animation should stop on the end and stay or come back to initial place
  v['$motion-fill-mode'] = u['$motion-fill-mode'] || {
    none: 'none',
    forwards: 'forwards',
    backwards: 'backwards',
    both: 'both'
  };

  // Define the playing state of your components
  v['$motion-play-state'] = u['$motion-play-state'] || {
    running: 'running',
    paused: 'paused'
  };

  // Motion Customisation
  // Customisation Filter
  v['$motion-filter'] = u['$motion-filter'] || {
    blur: 'blur(30px)',
    brightness: 'brightness(100%)',
    contrast: 'contrast(100%)',
    grayscale: 'grayscale(100%)',
    hueRotate: 'hue-rotate(360deg)',
    invert: 'invert(100%)',
    opacity: 'opacity(100%)',
    saturate: 'saturate(100%)',
    sepia: 'sepia(100%)',
    custom: 'sepia(50%), opacity(50%)'
  };
  // Moving animation configuration
  // Only used for moving element (using translate3d css properties)
  v['$motion-distance'] = u['$motion-distance'] || {
    xs: '0%',
    sm: '50%',
    md: '100%',
    lg: '200%',
    xl: '800%'
  };

  // Scale animation configuration
  // Only used for decrease scaling of element (using scale3d css properties)
  v['$motion-scale-in'] = u['$motion-scale-in'] || {
    xs: '0.1',
    sm: '0.3',
    md: '0.5',
    lg: '0.7',
    xl: '0.9'
  };
  (0, _variables.assertAscending)(v['$motion-scale-in'], '$motion-scale-in');

  // Only used for increase scaling of element (using scale3d css properties)
  v['$motion-scale-out'] = u['$motion-scale-out'] || {
    xs: '1.1',
    sm: '2',
    md: '5',
    lg: '10',
    xl: '20'
  };
  (0, _variables.assertAscending)(v['$motion-scale-out'], '$motion-scale-out');

  // Rotate animation configuration
  // using rotate3d css properties
  v['$motion-degree'] = u['$motion-degree'] || {
    xs: '45deg',
    sm: '90deg',
    md: '180deg',
    lg: '270deg',
    xl: '360deg'
  };

  // Define perspective for rotating animation
  v['$motion-perspective'] = u['$motion-perspective'] || {
    xs: '64px',
    sm: '128px',
    md: '256px',
    lg: '512px',
    xl: '1024px'
  };

  // Define backface visibility for rotating animation
  v['$motion-backface-visibility'] = u['$motion-backface-visibility'] || {
    hidden: 'hidden',
    visible: 'visible'
  };

  // Transition configuration
  // Transition React : Configuration Transition and Css transition
  v['$motion-transition-property-enter'] = u['$motion-transition-property-enter'] || 'filter: opacity(0%);';
  v['$motion-transition-property-enter-active'] = u['$motion-transition-property-enter-active'] || 'filter: opacity(100%);';
  v['$motion-transition-enter'] = u['$motion-transition-enter'] || 'transition: filter .15s linear;';
  v['$motion-transition-property-leave'] = u['$motion-transition-property-leave'] || 'filter: opacity(100%);';
  v['$motion-transition-property-leave-active'] = u['$motion-transition-property-leave-active'] || 'filter: opacity(0%);';
  v['$motion-transition-leave'] = u['$motion-transition-leave'] || 'transition: filter .15s linear;';

  // Transition React : Sample CssTransitionSwap
  v['$transform-swap-fade-from'] = u['$transform-swap-fade-from'] || 'translate3d(0, 0, 0)'; // Sample example will be deleted
  v['$transform-swap-fade-to'] = u['$transform-swap-fade-to'] || 'translate3d(0, 400px, 0)'; // Sample example will be deleted
  return Object.assign({}, u, v);
}