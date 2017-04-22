'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Testing our styled Special utils
                                                                                                                                                                                                                                                                               */

var _styledSpecial = require('../styledSpecial');

describe('styledSpecial', function () {
  describe('makeFlash', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSpecial.makeFlash)())).toBe('object');
    });
  });
  describe('makeRollIn', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSpecial.makeRollIn)())).toBe('object');
    });
  });
  describe('makeRollOut', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSpecial.makeRollOut)())).toBe('object');
    });
  });
  describe('makeRubber', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSpecial.makeRubber)())).toBe('object');
    });
  });
  describe('makeSwing', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSpecial.makeSwing)())).toBe('object');
    });
  });
  describe('makeZoom', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSpecial.makeZoom)())).toBe('object');
    });
  });
  describe('makeHinge', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSpecial.makeHinge)())).toBe('object');
    });
  });
  describe('makePulse', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSpecial.makePulse)())).toBe('object');
    });
  });
  describe('makeExpandUp', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSpecial.makeExpandUp)())).toBe('object');
    });
  });
  describe('makeEntrance', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSpecial.makeEntrance)())).toBe('object');
    });
  });
  describe('makeHatch', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledSpecial.makeHatch)())).toBe('object');
    });
  });
});