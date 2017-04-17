'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFadeIn = makeFadeIn;
exports.makeFadeLeft = makeFadeLeft;
exports.makeFadeRight = makeFadeRight;
exports.makeFadeDown = makeFadeDown;
exports.makeFadeUp = makeFadeUp;

var _styledComponents = require('styled-components');

var fadeIn = void 0;
var fadeLeft = void 0;
var fadeRight = void 0;
var fadeDown = void 0;
var fadeUp = void 0;

function makeFadeIn() {
  if (!fadeIn) {
    fadeIn = (0, _styledComponents.keyframes)(['0% {opacity: 0;}100% {opacity: 1;}']);
  }
  return fadeIn;
}

function makeFadeLeft(distance) {
  if (!fadeLeft) {
    fadeLeft = (0, _styledComponents.keyframes)(['from {opacity: 0;transform: translate3d(-', ', 0, 0);}to {opacity: 1;transform: none;}'], distance);
  }
  return fadeLeft;
}

function makeFadeRight(distance) {
  if (!fadeRight) {
    fadeRight = (0, _styledComponents.keyframes)(['from {opacity: 0;transform: translate3d(', ', 0, 0);}to {opacity: 1;transform: none;}'], distance);
  }
  return fadeRight;
}

function makeFadeDown(distance) {
  if (!fadeDown) {
    fadeDown = (0, _styledComponents.keyframes)(['from {opacity: 0;transform: translate3d(0, -', ', 0);}to {opacity: 1;transform: none;}'], distance);
  }
  return fadeDown;
}

function makeFadeUp(distance) {
  if (!fadeUp) {
    fadeUp = (0, _styledComponents.keyframes)(['from {opacity: 0;transform: translate3d(0, ', ', 0);}to {opacity: 1;transform: none;}'], distance);
  }
  return fadeUp;
}