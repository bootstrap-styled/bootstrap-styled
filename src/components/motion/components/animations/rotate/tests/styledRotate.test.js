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
  describe('makeRotateIn', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateIn()).toBe('object');
    });
  });
  describe('makeRotateLeft', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateLeft()).toBe('object');
    });
  });
  describe('makeRotateRight', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateRight()).toBe('object');
    });
  });
  describe('makeRotateUpLeft', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateUpLeft()).toBe('object');
    });
  });
  describe('makeRotateUpRight', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateUpRight()).toBe('object');
    });
  });
});
