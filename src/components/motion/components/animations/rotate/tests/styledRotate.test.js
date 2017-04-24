/**
 * Testing our styled Rotates utils
 */

import {
  makeRotateIn,
  makeRotateLeft,
  makeRotateRight,
  makeRotateUpRight,
  makeRotateUpLeft,
} from '../styledRotate';

describe('styledRotate', () => {
  const rotation = '45deg';

  describe('makeRotateIn', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateIn({ rotation })).toBe('object');
    });
  });
  describe('makeRotateLeft', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateLeft({ rotation })).toBe('object');
    });
  });
  describe('makeRotateRight', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateRight({ rotation })).toBe('object');
    });
  });
  describe('makeRotateUpLeft', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateUpLeft({ rotation })).toBe('object');
    });
  });
  describe('makeRotateUpRight', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateUpRight({ rotation })).toBe('object');
    });
  });
});
