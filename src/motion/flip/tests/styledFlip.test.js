/**
 * Testing our styled Flips utils
 */

import {
  makeFlip,
  makeFlipX,
  makeFlipY,
} from '../styledFlip';

describe('styledRotate', () => {
  const perspective = '64px';
  describe('makeFlip', () => {
    it('should returns an object', () => {
      expect(typeof makeFlip({ perspective })).toBe('object');
    });
  });
  describe('makeFlipX', () => {
    it('should returns an object', () => {
      expect(typeof makeFlipX({ perspective })).toBe('object');
    });
  });
  describe('makeFlipY', () => {
    it('should returns an object', () => {
      expect(typeof makeFlipY({ perspective })).toBe('object');
    });
  });
});
