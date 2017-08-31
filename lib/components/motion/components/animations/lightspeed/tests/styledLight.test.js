'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Testing our styled Lights utils
                                                                                                                                                                                                                                                                               */

var _styledLight = require('../styledLight');

describe('styledRotate', function () {
  var distance = '10px';
  var rotation = '30deg';
  describe('makeLightInResult', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledLight.makeLightIn)({ distance: distance, rotation: rotation }))).toBe('object');
    });
  });
  describe('makeLightOut', function () {
    it('should returns an object', function () {
      expect(_typeof((0, _styledLight.makeLightOut)({ distance: distance, rotation: rotation }))).toBe('object');
    });
  });
});