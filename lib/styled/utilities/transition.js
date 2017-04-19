'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getTransitionUtilities = getTransitionUtilities;
exports.fade = fade;
exports.collapse = collapse;
exports.getReactTransition = getReactTransition;
exports.makeReactTransition = makeReactTransition;
exports.swapFade = swapFade;

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _parseTransition = require('utils/parseTransition');

var _parseTransition2 = _interopRequireDefault(_parseTransition);

var _transition = require('../mixins/transition');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = _theme2.default;

function getTransitionUtilities() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-fade'];
  var transitionCollapse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$transition-collapse'];
  var transformSwapFadeFrom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$transform-swap-fade-from'];
  var transformSwapFadeTo = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$transform-swap-fade-to'];
  var motionCssPropertyEnter = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$motion-transition-property-enter'];
  var motionTransitionEnter = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$motion-transition-enter'];
  var motionCssPropertyEnterActive = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$motion-transition-property-enter-active'];
  var motionCssPropertyLeave = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$motion-transition-property-leave'];
  var motionTransitionLeave = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$motion-transition-leave'];
  var motionCssPropertyLeaveActive = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$motion-transition-property-leave-active'];

  return '\n    ' + fade(enableTransitions, transitionFade) + '\n    ' + collapse(enableTransitions, transitionCollapse) + '\n    ' + swapFade(enableTransitions, transformSwapFadeFrom, transformSwapFadeTo) + '\n    ' + makeReactTransition(enableTransitions, motionCssPropertyEnter, motionCssPropertyEnterActive, motionTransitionEnter, motionCssPropertyLeave, motionCssPropertyLeaveActive, motionTransitionLeave) + '\n  ';
}

function fade() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-fade'];

  return '\n    .fade,\n     &.fade {\n      opacity: 0;\n      ' + (0, _transition.transition)(enableTransitions, transitionFade) + '\n    \n      &.show {\n        opacity: 1;\n      }\n    }\n  ';
}

function collapse() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-collapse'];

  return '\n    .collapse {\n      display: none;\n      &.show {\n        display: block;\n      }\n    }\n    \n    tr {\n      &.collapse.show {\n        display: table-row;\n      }\n    }\n    \n    tbody {\n      &.collapse.show {\n        display: table-row-group;\n      }\n    }\n    \n    .collapsing {\n      position: relative;\n      height: 0;\n      overflow: hidden;\n      ' + (0, _transition.transition)(enableTransitions, transitionCollapse) + '\n    }\n  ';
}

// function for get react transition (could even use filter and transform from mixin transition)
function getReactTransition(enableTransition, transition) {
  var transitionList = (0, _parseTransition2.default)(transition);
  var property = transitionList[0].property;
  var duration = transitionList[0].duration;
  var timingFunction = transitionList[0].timingFunction;
  var delay = transitionList[0].delay;

  return (0, _transition.transition)(enableTransition, property + ' ' + duration + 'ms ' + timingFunction + ' ' + delay + 'ms');
}

// function for create react css transition rules
function makeReactTransition() {
  var motionCssPropertyEnter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$motion-transition-property-enter'];
  var motionCssPropertyEnterActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$motion-transition-property-enter-active'];
  var motionTransitionEnter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$motion-transition-enter'];
  var motionCssPropertyLeave = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$motion-transition-property-leave'];
  var motionCssPropertyLeaveActive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$motion-transition-property-leave-active'];
  var motionTransitionLeave = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$motion-transition-leave'];

  return '\n    .enter,\n     &.enter {\n      ' + motionCssPropertyEnter + '\n      ' + motionTransitionEnter + '\n    \n      &.enter-active {\n        ' + motionCssPropertyEnterActive + '\n      }\n    }\n    \n    .leave,\n     &.leave {\n      ' + motionCssPropertyLeave + '\n      ' + motionTransitionLeave + '\n    \n      &.leave-active {\n        ' + motionCssPropertyLeaveActive + '\n      }\n    }\n  ';
}

// Custom example for React Css Transition Group example (swapFade sample)
function swapFade() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-fade'];
  var transformSwapFadeFrom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$transform-swap-fade-from'];
  var transformSwapFadeTo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$transform-swap-fade-to'];

  return '\n    ' + fade(enableTransitions, transitionFade) + '\n    .fade {\n      ' + (0, _transition.transform)(transformSwapFadeFrom) + '\n      &.show {\n        ' + (0, _transition.transform)(transformSwapFadeTo) + '\n      }\n    }\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  getTransitionUtilities: getTransitionUtilities,
  fade: fade,
  collapse: collapse,
  makeReactTransition: makeReactTransition,
  getReactTransition: getReactTransition,
  swapFade: swapFade
};