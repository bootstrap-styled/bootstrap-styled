import Color from 'color';
import { unitUtils } from 'math-utils';
import { assertAscending } from '../styled/mixins/variables';
import makeOriginal from './makeOriginal';
const { rmUnit, UNIT } = unitUtils;
/**
 * Extends of Bootstrap original
 *
 * You can add new bootstrap-styled variable here
 * @param original
 * @param userTheme
 */
export default function makeExtend(original = makeOriginal(), userTheme = {}) {
  /* eslint dot-notation: 'off', new-cap: 'off' */

  const v = original;
  const u = userTheme;

  // tools

  // Header
  v['$header-navbar-border-color'] = u['$header-navbar-border-color'] || v['$gray-lighter'];
  v['$header-navbar-border-width'] = u['$header-navbar-border-width'] || v['$border-width'];

  // Card
  v['$card-margin-y-halved'] = u['$card-margin-y-halved'] || ((rmUnit(v['$card-spacer-y'], UNIT.REM) / 2) + UNIT.REM);
  v['$card-margin-x-halved'] = u['$card-margin-x-halved'] || ((rmUnit(v['$card-spacer-x'], UNIT.REM) / 2) + UNIT.REM);

  // Nav
  v['$nav-link-hover-bg'] = u['$nav-link-hover-bg'] || Color(v['$brand-inverse']).darken(0.03).toString();

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
    xl: '1000ms',
  };

  // Use default timing function properties
  v['$motion-timing-function'] = u['$motion-timing-function'] || {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  };

  // You can even set your own custom timing function properties (For Timing functions usage, please refer to w3c documentation[https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp])
  v['$motion-timing-function-custom'] = u['$motion-timing-function-custom'] || {
    stepStart: 'step-start',
    stepEnd: 'step-end',
    steps: 'steps(3)',
    cubicBezier: 'cubic-bezier(.04,.9,.15,.98)',
  };

  // Use xs for disable delay. Delay can't exceed 1000ms (in order to don't be forget by the user).
  v['$motion-delay'] = u['$motion-delay'] || {
    xs: '0ms',
    sm: '100ms',
    md: '200ms',
    lg: '500ms',
    xl: '1000ms',
  };

  // Moving animation configuration
  // Only used for moving element (using translate3d css properties)
  v['$motion-distance'] = u['$motion-distance'] || {
    xs: '0%',
    sm: '50%',
    md: '100%',
    lg: '200%',
    xl: '800%',
  };

  // Scale animation configuration
  // Only used for decrease scaling of element (using scale3d css properties)
  v['$motion-scale-in'] = u['$motion-scale-in'] || {
    xs: '0.1',
    sm: '0.3',
    md: '0.5',
    lg: '0.7',
    xl: '0.9',
  };
  assertAscending(v['$motion-scale-in'], '$motion-scale-in');

  // Only used for increase scaling of element (using scale3d css properties)
  v['$motion-scale-out'] = u['$motion-scale-out'] || {
    xs: '1.1',
    sm: '2',
    md: '5',
    lg: '10',
    xl: '20',
  };
  assertAscending(v['$motion-scale-out'], '$motion-scale-out');

  // Rotate animation configuration
  // using rotate3d css properties
  v['$motion-rotating-degree'] = u['$motion-rotating-degree'] || {
    xs: '45',
    sm: '90',
    md: '180',
    lg: '270',
    xl: '360',
  };
  assertAscending(v['$motion-rotating-degree'], '$motion-rotating-degree');

  // Define perspective for rotating animation
  v['$motion-rotating-perspective'] = u['$motion-rotating-perspective'] || {
    xs: '64px',
    sm: '128px',
    md: '256px',
    lg: '512px',
    xl: '1024px',
  };

  // Define backface visibility for rotating animation
  v['$motion-rotating-backface-visibility'] = u['$motion-rotating-backface-visibility'] || {
    hidden: 'hidden',
    visible: 'visible',
  };

  // ANIMATION CONFIGURATION
  v['$motion-animation-direction'] = u['$motion-animation-direction'] || {
    normal: 'normal',
    reverse: 'reverse',
    alternate: 'alternate',
    alternateReverse: 'alternate-reverse',
  };

  // Use for iterate n time or loop your animation
  v['$motion-animation-iteration'] = u['$motion-animation-iteration'] || {
    xs: '1',
    sm: '3',
    md: '6',
    lg: '10',
    xl: 'infinite',
  };

  // Define if the animation should stop on the end and stay or come back to initial place
  v['$motion-animation-fill-mode'] = u['$motion-animation-fill-mode'] || {
    none: 'none',
    forwards: 'forwards',
    backwards: 'backwards',
    both: 'both',
  };

  // Define the playing state of your components
  v['$motion-animation-play-state'] = u['$motion-animation-play-state'] || {
    running: 'running',
    paused: 'paused',
  };

  // Motion Customisation
  // Customisation Filter
  v['$motion-filter'] = u['$motion-filter'] || {
    none: 'filter: none',
    blur: 'filter: blur(30px)',
    brightness: 'filter: brightness(100%)',
    contrast: 'filter: contrast(100%)',
    grayscale: 'filter: grayscale(100%)',
    hueRotate: 'filter: hue-rotate(360deg)',
    invert: 'filter: invert(100%)',
    opacity: 'filter: opacity(100%)',
    saturate: 'filter: saturate(100%)',
    sepia: 'filter: sepia(100%)',
  };

  // Customisation Filter Extend
  v['$motion-filter-custom'] = u['$motion-filter-custom'] || {
    dropShadow: 'drop-shadow(8px 8px 10px red)',
    url: 'url()', // takes the location of an XML file that specifies an SVG filter,
  };

  // Customisation Transform
  v['$motion-transform'] = u['$motion-transform'] || {
    translate3d: 'translate3d(0px, 0px, 0px)',
    rotate3d: 'rotate3d(0px, 0px, 0px, 0deg)',
    scale3d: 'scale3d(0px, 0px, 0px)',
  };

  // Transition configuration
  // Transition React : Configuration Transition
  v['$motion-css-transition-property-enter'] = u['$motion-css-transition-property-enter'] || 'filter: opacity(0%);';
  v['$motion-css-transition-property-enter-active'] = u['$motion-css-transition-property-enter-active'] || 'filter: opacity(100%);';
  v['$motion-css-transition-enter'] = u['$motion-transition-enter'] || 'transition: filter .15s linear;';
  v['$motion-css-transition-property-leave'] = u['$motion-css-transition-property-leave'] || 'filter: opacity(100%);';
  v['$motion-css-transition-property-leave-active'] = u['$motion-css-transition-property-leave-active'] || 'filter: opacity(0%);';
  v['$motion-css-transition-leave'] = u['$motion-transition-leave'] || 'transition: filter .15s linear;';

  // Transition React : Sample CssTransitionSwap
  v['$transform-swap-fade-from'] = u['$transform-swap-fade-from'] || 'translate3d(0, 0, 0)';
  v['$transform-swap-fade-to'] = u['$transform-swap-fade-to'] || 'translate3d(0, 400px, 0)';

  return Object.assign({}, u, v);
}

