'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBlur = makeBlur;
exports.makeOpacity = makeOpacity;
exports.makeContrast = makeContrast;
exports.makeBrightness = makeBrightness;
exports.makeGrayscale = makeGrayscale;
exports.makeHueRotate = makeHueRotate;
exports.makeInvert = makeInvert;
exports.makeSaturate = makeSaturate;
exports.makeSepia = makeSepia;

var _styledComponents = require('styled-components');

var blur = void 0; // Filter animation

var brightness = void 0;
var contrast = void 0;
var grayscale = void 0;
var hueRotate = void 0;
var invert = void 0;
var opacity = void 0;
var saturate = void 0;
var sepia = void 0;

function makeBlur() {
  if (!blur) {
    blur = (0, _styledComponents.keyframes)(['0% {filter: blur(0px);}100% {filter: blur(5px);}']);
  }
  return blur;
}

function makeOpacity() {
  if (!opacity) {
    opacity = (0, _styledComponents.keyframes)(['0% { filter: opacity(0%);}100% { filter: opacity(100%);}']);
  }
  return opacity;
}

function makeContrast() {
  if (!contrast) {
    contrast = (0, _styledComponents.keyframes)(['0% { filter: contrast(0%);}100% { filter: contrast(100%);}']);
  }
  return contrast;
}

function makeBrightness() {
  if (!brightness) {
    brightness = (0, _styledComponents.keyframes)(['0% { filter: brightness(0%);}100% { filter: brightness(100%);}']);
  }
  return brightness;
}

function makeGrayscale() {
  if (!grayscale) {
    grayscale = (0, _styledComponents.keyframes)(['0% { filter: grayscale(0%);}100% { filter: grayscale(100%);}']);
  }
  return grayscale;
}

function makeHueRotate() {
  if (!hueRotate) {
    hueRotate = (0, _styledComponents.keyframes)(['0% { filter: hue-rotate(0deg);}100% { filter: hue-rotate(360deg);}']);
  }
  return hueRotate;
}

function makeInvert() {
  if (!invert) {
    invert = (0, _styledComponents.keyframes)(['0% { filter: invert(0%);}100% { filter: invert(100%);}']);
  }
  return invert;
}

function makeSaturate() {
  if (!saturate) {
    saturate = (0, _styledComponents.keyframes)(['0% { filter: saturate(0%);}100% { filter: saturate(8%);}']);
  }
  return saturate;
}

function makeSepia() {
  if (!sepia) {
    sepia = (0, _styledComponents.keyframes)(['0% { filter: sepia(0%);}100% { filter: sepia(100%);}']);
  }
  return sepia;
}