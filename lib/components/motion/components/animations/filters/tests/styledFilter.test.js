'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Testing our styled Filter utils
                                                                                                                                                                                                                                                                               */

var _styledFilter = require('../styledFilter');

describe('styledFilter', function () {
  describe('makeBlur', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeBlur)())).toBe('object');
    });
  });
  describe('makeContrast', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeContrast)())).toBe('object');
    });
  });
  describe('makeBrightness', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeBrightness)())).toBe('object');
    });
  });
  describe('makeGrayscale', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeGrayscale)())).toBe('object');
    });
  });
  describe('makeHueRotate', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeHueRotate)())).toBe('object');
    });
  });
  describe('makeInvert', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeInvert)())).toBe('object');
    });
  });
  describe('makeOpacity', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeOpacity)())).toBe('object');
    });
  });
  describe('makeSepia', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeSepia)())).toBe('object');
    });
  });
  describe('makeSaturate', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeSaturate)())).toBe('object');
    });
  });
});