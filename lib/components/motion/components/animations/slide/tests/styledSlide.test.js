'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Testing our styled Slides utils
                                                                                                                                                                                                                                                                               */

var _styledSlide = require('../styledSlide');

describe('styledSlide', function () {
  var distance = '10px';
  describe('makeSlideDown', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSlide.makeSlideDown)({ distance: distance }))).toBe('object');
    });
  });
  describe('makeSlideUp', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSlide.makeSlideUp)({ distance: distance }))).toBe('object');
    });
  });
  describe('makeSlideLeft', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSlide.makeSlideLeft)({ distance: distance }))).toBe('object');
    });
  });
  describe('makeSlideRight', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSlide.makeSlideRight)({ distance: distance }))).toBe('object');
    });
  });
  describe('makeSlideRightLeft', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSlide.makeSlideRightLeft)({ distance: distance }))).toBe('object');
    });
  });
});