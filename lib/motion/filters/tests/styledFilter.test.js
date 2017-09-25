'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Testing our styled Filter utils
                                                                                                                                                                                                                                                                               */

var _styledFilter = require('../styledFilter');

describe('styledFilter', function () {
  var distance = '10px';
  var amplification = '1';
  var rotation = '45deg';
  describe('makeBlur', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeBlur)({ distance: distance }))).toBe('object');
    });
  });
  describe('makeContrast', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeContrast)({ amplification: amplification }))).toBe('object');
    });
  });
  describe('makeBrightness', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeBrightness)({ amplification: amplification }))).toBe('object');
    });
  });
  describe('makeGrayscale', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeGrayscale)({ amplification: amplification }))).toBe('object');
    });
  });
  describe('makeHueRotate', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeHueRotate)({ rotation: rotation }))).toBe('object');
    });
  });
  describe('makeInvert', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeInvert)({ amplification: amplification }))).toBe('object');
    });
  });
  describe('makeOpacity', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeOpacity)({ amplification: amplification }))).toBe('object');
    });
  });
  describe('makeSepia', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeSepia)({ amplification: amplification }))).toBe('object');
    });
  });
  describe('makeSaturate', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeSaturate)({ amplification: amplification }))).toBe('object');
    });
  });
  describe('makeDropshadow', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFilter.makeDropshadow)({ amplification: amplification }))).toBe('object');
    });
  });
});