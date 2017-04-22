'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Testing our styled Flips utils
                                                                                                                                                                                                                                                                               */

var _styledFlip = require('../styledFlip');

describe('styledRotate', function () {
  describe('makeFlip', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFlip.makeFlip)())).toBe('object');
    });
  });
  describe('makeFlipX', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFlip.makeFlipX)())).toBe('object');
    });
  });
  describe('makeFlipY', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFlip.makeFlipY)())).toBe('object');
    });
  });
});