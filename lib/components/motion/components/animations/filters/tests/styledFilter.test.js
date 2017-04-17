'use strict';

var _styledFilter = require('../styledFilter');

describe('styledFilter', function () {
  describe('makeBlur', function () {
    var makeBlurResult = (0, _styledFilter.makeBlur)();
    it('should returns keyframe name', function () {
      expect(makeBlurResult).toEqual('kkLhYv');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeBlurResult2 = (0, _styledFilter.makeBlur)();
      expect(makeBlurResult2).toEqual(makeBlurResult);
    });
  });
  describe('makeContrast', function () {
    var makeContrastResult = (0, _styledFilter.makeContrast)();
    it('should returns keyframe name', function () {
      expect(makeContrastResult).toEqual('eqydIF');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeContrastResult2 = (0, _styledFilter.makeContrast)();
      expect(makeContrastResult2).toEqual(makeContrastResult);
    });
  });
  describe('makeBrightness', function () {
    var makeBrightnessResult = (0, _styledFilter.makeBrightness)();
    it('should returns keyframe name', function () {
      expect(makeBrightnessResult).toEqual('iPkqy');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeBrightnessResult2 = (0, _styledFilter.makeBrightness)();
      expect(makeBrightnessResult2).toEqual(makeBrightnessResult);
    });
  });
  describe('makeGrayscale', function () {
    var makeGrayscaleResult = (0, _styledFilter.makeGrayscale)();
    it('should returns keyframe name', function () {
      expect(makeGrayscaleResult).toEqual('exrlcE');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeGrayscaleResult2 = (0, _styledFilter.makeGrayscale)();
      expect(makeGrayscaleResult2).toEqual(makeGrayscaleResult);
    });
  });
  describe('makeHueRotate', function () {
    var makeHueRotateResult = (0, _styledFilter.makeHueRotate)();
    it('should returns keyframe name', function () {
      expect(makeHueRotateResult).toEqual('htDoN');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeHueRotateResult2 = (0, _styledFilter.makeHueRotate)();
      expect(makeHueRotateResult2).toEqual(makeHueRotateResult);
    });
  });
  describe('makeInvert', function () {
    var makeInvertResult = (0, _styledFilter.makeInvert)();
    it('should returns keyframe name', function () {
      expect(makeInvertResult).toEqual('eJYBzU');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeInvertResult2 = (0, _styledFilter.makeInvert)();
      expect(makeInvertResult2).toEqual(makeInvertResult);
    });
  });
  describe('makeOpacity', function () {
    var makeOpacityResult = (0, _styledFilter.makeOpacity)();
    it('should returns keyframe name', function () {
      expect(makeOpacityResult).toEqual('gSjbIE');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeOpacityResult2 = (0, _styledFilter.makeOpacity)();
      expect(makeOpacityResult2).toEqual(makeOpacityResult);
    });
  });
  describe('makeSepia', function () {
    var makeSepiaResult = (0, _styledFilter.makeSepia)();
    it('should returns keyframe name', function () {
      expect(makeSepiaResult).toEqual('fXcGH');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeSepiaResult2 = (0, _styledFilter.makeSepia)();
      expect(makeSepiaResult2).toEqual(makeSepiaResult);
    });
  });
  describe('makeSaturate', function () {
    var makeSaturateResult = (0, _styledFilter.makeSaturate)();
    it('should returns keyframe name', function () {
      expect(makeSaturateResult).toEqual('fOCqOY');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeSaturateResult2 = (0, _styledFilter.makeSaturate)();
      expect(makeSaturateResult2).toEqual(makeSaturateResult);
    });
  });
}); /**
     * Testing our styled Filter utils
     */