'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Testing our styled Bounces utils
                                                                                                                                                                                                                                                                               */

var _styledBounce = require('../styledBounce');

describe('styledBounce', function () {
  var distance = '10px';

  describe('makeBounce', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledBounce.makeBounce)())).toBe('object');
    });
  });
  describe('makeBounceDown', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledBounce.makeBounceDown)({ distance: distance }))).toBe('object');
    });
  });
  describe('makeBounceUp', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledBounce.makeBounceUp)({ distance: distance }))).toBe('object');
    });
  });
  describe('makeBounceLeft', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledBounce.makeBounceLeft)({ distance: distance }))).toBe('object');
    });
  });
  describe('makeBounceRight', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledBounce.makeBounceRight)({ distance: distance }))).toBe('object');
    });
  });
});