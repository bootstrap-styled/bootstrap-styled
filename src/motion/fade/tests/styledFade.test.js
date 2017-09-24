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
  const distance = '10px';
  describe('makeFadeIn', () => {
    it('should returns an object', () => {
      expect(typeof makeFadeIn()).toBe('object');
    });
  });
  describe('makeFadeLeft', () => {
    it('should returns an object with params', () => {
      expect(typeof makeFadeLeft({ distance })).toBe('object');
    });
  });
  describe('makeFadeRight', () => {
    it('should returns an object with params', () => {
      expect(typeof makeFadeRight({ distance })).toBe('object');
    });
  });
  describe('makeFadeDown', () => {
    it('should returns an object with params', () => {
      expect(typeof makeFadeDown({ distance })).toBe('object');
    });
  });
  describe('makeFadeUp', () => {
    it('should returns an object with params', () => {
      expect(typeof makeFadeUp({ distance })).toBe('object');
    });
  });
});
