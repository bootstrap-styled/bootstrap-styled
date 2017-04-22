/**
 * Testing our styled Fades utils
 */

import {
  makeFadeIn,
  makeFadeDown,
  makeFadeUp,
  makeFadeLeft,
  makeFadeRight,
} from '../styledFade';

describe('styledFade', () => {
  describe('makeFadeIn', () => {
    it('should returns an object', () => {
      expect(typeof makeFadeIn()).toBe('object');
    });
  });
  describe('makeFadeLeft', () => {
    const distance = '10px';
    it('should returns an object', () => {
      expect(typeof makeFadeLeft()).toBe('object');
    });
    it('should returns an object with params', () => {
      expect(typeof makeFadeLeft(distance)).toBe('object');
    });
  });
  describe('makeFadeRight', () => {
    const distance = '10px';
    it('should returns an object', () => {
      expect(typeof makeFadeRight()).toBe('object');
    });
    it('should returns an object with params', () => {
      expect(typeof makeFadeRight(distance)).toBe('object');
    });
  });
  describe('makeFadeDown', () => {
    const distance = '10px';
    it('should returns an object', () => {
      expect(typeof makeFadeDown()).toBe('object');
    });
    it('should returns an object with params', () => {
      expect(typeof makeFadeDown(distance)).toBe('object');
    });
  });
  describe('makeFadeUp', () => {
    const distance = '10px';
    it('should returns an object', () => {
      expect(typeof makeFadeUp()).toBe('object');
    });
    it('should returns an object with params', () => {
      expect(typeof makeFadeUp(distance)).toBe('object');
    });
  });
});
