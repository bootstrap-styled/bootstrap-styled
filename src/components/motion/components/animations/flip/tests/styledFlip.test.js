/**
 * Testing our styled Flips utils
 */

import {
  makeFlip,
  makeFlipX,
  makeFlipY,
} from '../styledFlip';

describe('styledRotate', () => {
  describe('makeFlip', () => {
    it('should returns an object', () => {
      expect(typeof makeFlip()).toBe('object');
    });
  });
  describe('makeFlipX', () => {
    it('should returns an object', () => {
      expect(typeof makeFlipX()).toBe('object');
    });
  });
  describe('makeFlipY', () => {
    it('should returns an object', () => {
      expect(typeof makeFlipY()).toBe('object');
    });
  });
});
