'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Testing our styled Slides utils
                                                                                                                                                                                                                                                                               */

var _styledSlide = require('../styledSlide');

describe('styledSlide', function () {
  describe('makeSlideDown', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSlide.makeSlideDown)())).toBe('object');
    });
  });
  describe('makeSlideUp', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSlide.makeSlideUp)())).toBe('object');
    });
  });
  describe('makeSlideLeft', function () {
    var distance = '10px';
    it('should returns an object', function () {
      expect(_typeof((0, _styledSlide.makeSlideLeft)())).toBe('object');
    });
    it('should returns an object using params', function () {
      expect(_typeof((0, _styledSlide.makeSlideLeft)(distance))).toBe('object');
    });
  });
  describe('makeSlideRight', function () {
    var distance = '10px';
    it('should returns an object', function () {
      expect(_typeof((0, _styledSlide.makeSlideRight)())).toBe('object');
    });
    it('should returns an object using params', function () {
      expect(_typeof((0, _styledSlide.makeSlideRight)(distance))).toBe('object');
    });
  });
  describe('makeSlideRightLeft', function () {
    var distance = '10px';
    it('should returns an object', function () {
      expect(_typeof((0, _styledSlide.makeSlideRightLeft)())).toBe('object');
    });
    it('should returns an object using params', function () {
      expect(_typeof((0, _styledSlide.makeSlideRightLeft)(distance))).toBe('object');
    });
  });
});