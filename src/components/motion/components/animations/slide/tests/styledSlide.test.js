/**
 * Testing our styled Slides utils
 */

import { makeSlideDown, makeSlideUp, makeSlideLeft, makeSlideRight, makeSlideRightLeft } from '../styledSlide';

describe('styledSlide', () => {
  const distance = '10px';
  describe('makeSlideDown', () => {
    it('should returns an object', () => {
      expect(typeof makeSlideDown({ distance })).toBe('object');
    });
  });
  describe('makeSlideUp', () => {
    it('should returns an object', () => {
      expect(typeof makeSlideUp({ distance })).toBe('object');
    });
  });
  describe('makeSlideLeft', () => {
    it('should returns an object', () => {
      expect(typeof makeSlideLeft({ distance })).toBe('object');
    });
  });
  describe('makeSlideRight', () => {
    it('should returns an object', () => {
      expect(typeof makeSlideRight({ distance })).toBe('object');
    });
  });
  describe('makeSlideRightLeft', () => {
    it('should returns an object', () => {
      expect(typeof makeSlideRightLeft({ distance })).toBe('object');
    });
  });
});
