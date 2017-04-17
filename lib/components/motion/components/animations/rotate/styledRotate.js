'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRotateIn = makeRotateIn;
exports.makeRotateLeft = makeRotateLeft;
exports.makeRotateRight = makeRotateRight;
exports.makeRotateUpLeft = makeRotateUpLeft;
exports.makeRotateUpRight = makeRotateUpRight;

var _styledComponents = require('styled-components');

var rotateIn = void 0;
var rotateLeft = void 0;
var rotateRight = void 0;
var rotateUpLeft = void 0;
var rotateUpRight = void 0;

function makeRotateIn() {
  if (!rotateIn) {
    rotateIn = (0, _styledComponents.keyframes)(['from {transform-origin: center;transform: rotate3d(0, 0, 1, -200deg);opacity: 0; }to {transform: none;opacity: 1;}']);
  }
  return rotateIn;
}

function makeRotateLeft() {
  if (!rotateLeft) {
    rotateLeft = (0, _styledComponents.keyframes)(['from {transform-origin: left bottom;transform: rotate3d(0, 0, 1, -45deg);opacity: 0;}to {transform-origin: left bottom;transform: none;opacity: 1;}']);
  }
  return rotateLeft;
}

function makeRotateRight() {
  if (!rotateRight) {
    rotateRight = (0, _styledComponents.keyframes)(['from {transform-origin: right bottom;transform: rotate3d(0, 0, 1, 45deg);opacity: 0;}to {transform-origin: right bottom;transform: none;opacity: 1;}']);
  }
  return rotateRight;
}

function makeRotateUpLeft() {
  if (!rotateUpLeft) {
    rotateUpLeft = (0, _styledComponents.keyframes)(['from {transform-origin: left bottom;transform: rotate3d(0, 0, 1, 45deg);opacity: 0;}to {transform-origin: left bottom;transform: none;opacity: 1;}']);
  }
  return rotateUpLeft;
}

function makeRotateUpRight() {
  if (!rotateUpRight) {
    rotateUpRight = (0, _styledComponents.keyframes)(['from {transform-origin: right bottom;transform: rotate3d(0, 0, 1, -45deg);opacity: 0;}to {transform-origin: right bottom;transform: none;opacity: 1;}']);
  }
  return rotateUpRight;
}