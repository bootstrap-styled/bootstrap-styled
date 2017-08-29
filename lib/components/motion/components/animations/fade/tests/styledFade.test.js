'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Testing our styled Fades utils
                                                                                                                                                                                                                                                                               */

var _styledFade = require('../styledFade');

describe('styledFade', function () {
  var distance = '10px';
  describe('makeFadeIn', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledFade.makeFadeIn)())).toBe('object');
    });
  });
  describe('makeFadeLeft', function () {
    it('should returns an object with params', function () {
      expect(_typeof((0, _styledFade.makeFadeLeft)({ distance: distance }))).toBe('object');
    });
  });
  describe('makeFadeRight', function () {
    it('should returns an object with params', function () {
      expect(_typeof((0, _styledFade.makeFadeRight)({ distance: distance }))).toBe('object');
    });
  });
  describe('makeFadeDown', function () {
    it('should returns an object with params', function () {
      expect(_typeof((0, _styledFade.makeFadeDown)({ distance: distance }))).toBe('object');
    });
  });
  describe('makeFadeUp', function () {
    it('should returns an object with params', function () {
      expect(_typeof((0, _styledFade.makeFadeUp)({ distance: distance }))).toBe('object');
    });
  });
});