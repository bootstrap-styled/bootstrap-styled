'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Testing our styled Bounces utils
                                                                                                                                                                                                                                                                               */

var _styledBounce = require('../styledBounce');

describe('styledBounce', function () {
  describe('makeBounce', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledBounce.makeBounce)())).toBe('object');
    });
  });
  describe('makeBounceDown', function () {
    var distance = '10px';
    it('should returns an object', function () {
      expect(_typeof((0, _styledBounce.makeBounceDown)())).toBe('object');
    });
    it('should returns an object with params', function () {
      expect(_typeof((0, _styledBounce.makeBounceDown)(distance))).toBe('object');
    });
  });
  describe('makeBounceUp', function () {
    var distance = '10px';
    it('should returns an object', function () {
      expect(_typeof((0, _styledBounce.makeBounceUp)())).toBe('object');
    });
    it('should returns an object with params', function () {
      expect(_typeof((0, _styledBounce.makeBounceUp)(distance))).toBe('object');
    });
  });
  describe('makeBounceLeft', function () {
    var distance = '10px';
    it('should returns an object', function () {
      expect(_typeof((0, _styledBounce.makeBounceLeft)())).toBe('object');
    });
    it('should returns an object with params', function () {
      expect(_typeof((0, _styledBounce.makeBounceLeft)(distance))).toBe('object');
    });
  });
  describe('makeBounceRight', function () {
    var distance = '10px';
    it('should returns an object', function () {
      expect(_typeof((0, _styledBounce.makeBounceRight)())).toBe('object');
    });
    it('should returns an object with params', function () {
      expect(_typeof((0, _styledBounce.makeBounceRight)(distance))).toBe('object');
    });
  });
});