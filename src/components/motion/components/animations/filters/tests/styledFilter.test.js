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
    it('should returns an object', () => {
      expect(typeof makeBlur()).toBe('object');
    });
  });
  describe('makeContrast', () => {
    it('should returns an object', () => {
      expect(typeof makeContrast()).toBe('object');
    });
  });
  describe('makeBrightness', () => {
    it('should returns an object', () => {
      expect(typeof makeBrightness()).toBe('object');
    });
  });
  describe('makeGrayscale', () => {
    it('should returns an object', () => {
      expect(typeof makeGrayscale()).toBe('object');
    });
  });
  describe('makeHueRotate', () => {
    it('should returns an object', () => {
      expect(typeof makeHueRotate()).toBe('object');
    });
  });
  describe('makeInvert', () => {
    it('should returns an object', () => {
      expect(typeof makeInvert()).toBe('object');
    });
  });
  describe('makeOpacity', () => {
    it('should returns an object', () => {
      expect(typeof makeOpacity()).toBe('object');
    });
  });
  describe('makeSepia', () => {
    it('should returns an object', () => {
      expect(typeof makeSepia()).toBe('object');
    });
  });
  describe('makeSaturate', () => {
    it('should returns an object', () => {
      expect(typeof makeSaturate()).toBe('object');
    });
  });
});
