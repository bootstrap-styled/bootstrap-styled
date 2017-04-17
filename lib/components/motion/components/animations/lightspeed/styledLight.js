'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLightIn = makeLightIn;
exports.makeLightOut = makeLightOut;

var _styledComponents = require('styled-components');

var lightIn = void 0;
var lightOut = void 0;

function makeLightIn(distance) {
  if (!lightIn) {
    lightIn = (0, _styledComponents.keyframes)(['from {transform: translate3d(', ', 0, 0) skew(-30deg);opacity: 0;}40% {transform: skew(20deg);opacity: 1;}80% {transform: skew(-5deg);opacity: 1;}to {transform: none;opacity: 1;}'], distance);
  }
  return lightIn;
}

function makeLightOut(distance) {
  if (!lightOut) {
    lightOut = (0, _styledComponents.keyframes)(['from {opacity: 1;}to {transform: translate3d(-', ', 0, 0) skew(30deg);opacity: 0;}'], distance);
  }
  return lightIn;
}