'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSlideDown = makeSlideDown;
exports.makeSlideUp = makeSlideUp;
exports.makeSlideLeft = makeSlideLeft;
exports.makeSlideRight = makeSlideRight;
exports.makeSlideRightLeft = makeSlideRightLeft;

var _styledComponents = require('styled-components');

var slideDown = void 0;
var slideUp = void 0;
var slideLeft = void 0;
var slideRight = void 0;
var slideRightLeft = void 0;

function makeSlideDown(distance) {
  if (!slideDown) {
    slideDown = (0, _styledComponents.keyframes)(['from {transform: translate3d(0, -', ', 0);}to {transform: translate3d(0, 0, 0);}'], distance);
  }
  return slideDown;
}

function makeSlideUp(distance) {
  if (!slideUp) {
    slideUp = (0, _styledComponents.keyframes)(['from {transform: translate3d(0, ', ', 0);}to {transform: translate3d(0, 0, 0);}'], distance);
  }
  return slideUp;
}

function makeSlideLeft(distance) {
  if (!slideLeft) {
    slideLeft = (0, _styledComponents.keyframes)(['from {transform: translate3d(-', ', 0, 0);}to {transform: translate3d(0, 0, 0);}'], distance);
  }
  return slideLeft;
}

function makeSlideRight(distance) {
  if (!slideRight) {
    slideRight = (0, _styledComponents.keyframes)(['from {transform: translate3d(', ', 0, 0);}to {transform: translate3d(0, 0, 0);}'], distance);
  }
  return slideRight;
}

function makeSlideRightLeft(distance) {
  if (!slideRightLeft) {
    slideRightLeft = (0, _styledComponents.keyframes)(['from {transform: translate3d(0, 0, 0);}50% {transform: translate3d(', ', 0, 0);}to {transform: translate3d(0, 0, 0);}'], distance);
  }
  return slideRightLeft;
}