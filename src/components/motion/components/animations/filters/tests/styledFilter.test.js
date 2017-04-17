/**
 * Testing our styled Filter utils
 */

import {
  makeBlur,
  makeContrast,
  makeBrightness,
  makeGrayscale,
  makeHueRotate,
  makeInvert,
  makeOpacity,
  makeSaturate,
  makeSepia,
} from '../styledFilter';

describe('styledFilter', () => {
  describe('makeBlur', () => {
    const makeBlurResult = makeBlur();
    it('should returns keyframe name', () => {
      expect(makeBlurResult).toEqual('kkLhYv');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeBlurResult2 = makeBlur();
      expect(makeBlurResult2).toEqual(makeBlurResult);
    });
  });
  describe('makeContrast', () => {
    const makeContrastResult = makeContrast();
    it('should returns keyframe name', () => {
      expect(makeContrastResult).toEqual('eqydIF');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeContrastResult2 = makeContrast();
      expect(makeContrastResult2).toEqual(makeContrastResult);
    });
  });
  describe('makeBrightness', () => {
    const makeBrightnessResult = makeBrightness();
    it('should returns keyframe name', () => {
      expect(makeBrightnessResult).toEqual('iPkqy');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeBrightnessResult2 = makeBrightness();
      expect(makeBrightnessResult2).toEqual(makeBrightnessResult);
    });
  });
  describe('makeGrayscale', () => {
    const makeGrayscaleResult = makeGrayscale();
    it('should returns keyframe name', () => {
      expect(makeGrayscaleResult).toEqual('exrlcE');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeGrayscaleResult2 = makeGrayscale();
      expect(makeGrayscaleResult2).toEqual(makeGrayscaleResult);
    });
  });
  describe('makeHueRotate', () => {
    const makeHueRotateResult = makeHueRotate();
    it('should returns keyframe name', () => {
      expect(makeHueRotateResult).toEqual('htDoN');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeHueRotateResult2 = makeHueRotate();
      expect(makeHueRotateResult2).toEqual(makeHueRotateResult);
    });
  });
  describe('makeInvert', () => {
    const makeInvertResult = makeInvert();
    it('should returns keyframe name', () => {
      expect(makeInvertResult).toEqual('eJYBzU');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeInvertResult2 = makeInvert();
      expect(makeInvertResult2).toEqual(makeInvertResult);
    });
  });
  describe('makeOpacity', () => {
    const makeOpacityResult = makeOpacity();
    it('should returns keyframe name', () => {
      expect(makeOpacityResult).toEqual('gSjbIE');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeOpacityResult2 = makeOpacity();
      expect(makeOpacityResult2).toEqual(makeOpacityResult);
    });
  });
  describe('makeSepia', () => {
    const makeSepiaResult = makeSepia();
    it('should returns keyframe name', () => {
      expect(makeSepiaResult).toEqual('fXcGH');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeSepiaResult2 = makeSepia();
      expect(makeSepiaResult2).toEqual(makeSepiaResult);
    });
  });
  describe('makeSaturate', () => {
    const makeSaturateResult = makeSaturate();
    it('should returns keyframe name', () => {
      expect(makeSaturateResult).toEqual('fOCqOY');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeSaturateResult2 = makeSaturate();
      expect(makeSaturateResult2).toEqual(makeSaturateResult);
    });
  });
});
