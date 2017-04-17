'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBounce = makeBounce;
exports.makeBounceDown = makeBounceDown;
exports.makeBounceUp = makeBounceUp;
exports.makeBounceLeft = makeBounceLeft;
exports.makeBounceRight = makeBounceRight;

var _styledComponents = require('styled-components');

var bounce = void 0;
var bounceDown = void 0;
var bounceUp = void 0;
var bounceLeft = void 0;
var bounceRight = void 0;

function makeBounce() {
  if (!bounce) {
    bounce = (0, _styledComponents.keyframes)(['from {animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);}0% {opacity: 0;transform: scale3d(.3, .3, .3);}20% {transform: scale3d(1.1, 1.1, 1.1);}40% {transform: scale3d(.9, .9, .9);}60% {opacity: 1;transform: scale3d(1.1, 1.1, 1.1);}80% {transform: scale3d(.97, .97, .97);}to {opacity: 1;transform: scale3d(1, 1, 1);}']);
  }
  return bounce;
}

function makeBounceDown(distance) {
  if (!bounceDown) {
    bounceDown = (0, _styledComponents.keyframes)(['from {animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);}0% {transform: translate3d(0, -', ', 0);}60% {transform: translate3d(0, 25px, 0);}75% {transform: translate3d(0, -15px, 0);}90% {transform: translate3d(0, 5px, 0);}to {transform: translate3d(0, 0, 0);}'], distance);
  }
  return bounceDown;
}

function makeBounceUp(distance) {
  if (!bounceUp) {
    bounceUp = (0, _styledComponents.keyframes)(['from {animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);}0% {transform: translate3d(0, ', ', 0);}60% {transform: translate3d(0, -25px, 0);}75% {transform: translate3d(0, 10px, 0);}90% {transform: translate3d(0, -5px, 0);}to {transform: translate3d(0, 0, 0);} '], distance);
  }
  return bounceUp;
}

function makeBounceLeft(distance) {
  if (!bounceLeft) {
    bounceLeft = (0, _styledComponents.keyframes)(['from, 60% 75% 90%, to {animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);}0% {opacity: 0;transform: translate3d(-', ', 0, 0);}60% {opacity: 1;transform: translate3d(25px, 0, 0);}75% {transform: translate3d(-10px, 0, 0);}90% {transform: translate3d(5px, 0, 0);}to {transform: none;} '], distance);
  }
  return bounceLeft;
}

function makeBounceRight(distance) {
  if (!bounceRight) {
    bounceRight = (0, _styledComponents.keyframes)(['from, 60% 75% 90%, to {animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);}0% {opacity: 0;transform: translate3d(', ', 0, 0);}60% {opacity: 1;transform: translate3d(-25px, 0, 0);}75% {transform: translate3d(10px, 0, 0);}90% {transform: translate3d(-5px, 0, 0);}to {transform: none;}'], distance);
  }
  return bounceRight;
}