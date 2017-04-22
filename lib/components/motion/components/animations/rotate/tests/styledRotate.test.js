'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Testing our styled Rotates utils
                                                                                                                                                                                                                                                                               */

var _styledRotate = require('../styledRotate');

describe('styledRotate', function () {
  describe('makeRotateIn', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledRotate.makeRotateIn)())).toBe('object');
    });
  });
  describe('makeRotateLeft', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledRotate.makeRotateLeft)())).toBe('object');
    });
  });
  describe('makeRotateRight', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledRotate.makeRotateRight)())).toBe('object');
    });
  });
  describe('makeRotateUpLeft', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledRotate.makeRotateUpLeft)())).toBe('object');
    });
  });
  describe('makeRotateUpRight', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledRotate.makeRotateUpRight)())).toBe('object');
    });
  });
});