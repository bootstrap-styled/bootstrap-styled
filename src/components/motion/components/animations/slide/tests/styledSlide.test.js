/**
 * Testing our styled Slides utils
 */

import { makeSlideDown, makeSlideUp, makeSlideLeft, makeSlideRight, makeSlideRightLeft } from '../styledSlide';

describe('styledSlide', () => {
  describe('makeSlideDown', () => {
    it('should returns an object', () => {
      expect(typeof makeSlideDown()).toBe('object');
    });
  });
  describe('makeSlideUp', () => {
    it('should returns an object', () => {
      expect(typeof makeSlideUp()).toBe('object');
    });
  });
  describe('makeSlideLeft', () => {
    const distance = '10px';
    it('should returns an object', () => {
      expect(typeof makeSlideLeft()).toBe('object');
    });
    it('should returns an object using params', () => {
      expect(typeof makeSlideLeft(distance)).toBe('object');
    });
  });
  describe('makeSlideRight', () => {
    const distance = '10px';
    it('should returns an object', () => {
      expect(typeof makeSlideRight()).toBe('object');
    });
    it('should returns an object using params', () => {
      expect(typeof makeSlideRight(distance)).toBe('object');
    });
  });
  describe('makeSlideRightLeft', () => {
    const distance = '10px';
    it('should returns an object', () => {
      expect(typeof makeSlideRightLeft()).toBe('object');
    });
    it('should returns an object using params', () => {
      expect(typeof makeSlideRightLeft(distance)).toBe('object');
    });
  });
});
