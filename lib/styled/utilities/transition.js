'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getTransitionUtilities = getTransitionUtilities;
exports.fade = fade;
exports.collapse = collapse;
exports.parseTransition = parseTransition;

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _transition = require('../mixins/transition');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = _theme2.default;

function getTransitionUtilities() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-fade'];
  var transitionCollapse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$transition-collapse'];

  return '\n    ' + fade(enableTransitions, transitionFade) + '\n    ' + collapse(enableTransitions, transitionCollapse) + '\n  ';
}

function fade() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-fade'];

  return '\n    &.fade {\n      opacity: 0;\n      ' + (0, _transition.transition)(enableTransitions, transitionFade) + '\n    \n      &.show {\n        opacity: 1;\n      }\n    }\n  ';
}

function collapse() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-collapse'];

  return '\n    .collapse {\n      display: none;\n      &.show {\n        display: block;\n      }\n    }\n    \n    tr {\n      &.collapse.show {\n        display: table-row;\n      }\n    }\n    \n    tbody {\n      &.collapse.show {\n        display: table-row-group;\n      }\n    }\n    \n    .collapsing {\n      position: relative;\n      height: 0;\n      overflow: hidden;\n      ' + (0, _transition.transition)(enableTransitions, transitionCollapse) + '\n    }\n  ';
}

function parseTransition() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionValue = arguments[1];

  var durationInMs = void 0;
  var delayInMs = void 0;
  var transitionAsList = [];
  if (enableTransitions) {
    transitionAsList = transitionValue.split(' ');

    // Setting duration to milliseconds
    var durationIsInMs = transitionAsList[1].includes('ms');
    var durationFloatValue = parseFloat(transitionAsList[1]);
    durationInMs = durationIsInMs ? durationFloatValue : durationFloatValue * 1000;

    // Setting delay to milliseconds
    if (transitionAsList[3]) {
      var delayIsInMs = transitionAsList[3].includes('ms');
      var delayFloatValue = parseFloat(transitionAsList[3]);
      delayInMs = delayIsInMs ? delayFloatValue : delayFloatValue * 1000;
    } else {
      delayInMs = null;
    }
  } else {
    durationInMs = 1;
  }

  return {
    property: transitionAsList[0],
    duration: durationInMs,
    functionTiming: transitionAsList[2],
    delay: delayInMs
  };
}

exports.default = {
  defaultProps: defaultProps,
  getTransitionUtilities: getTransitionUtilities,
  parseTransition: parseTransition,
  fade: fade,
  collapse: collapse
};