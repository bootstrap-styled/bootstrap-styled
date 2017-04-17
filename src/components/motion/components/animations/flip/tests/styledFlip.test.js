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
    const makeFlipResult = makeFlip();
    it('should returns keyframe name', () => {
      expect(makeFlipResult).toEqual('bFRVYp');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeFlipResult2 = makeFlip();
      expect(makeFlipResult2).toEqual(makeFlipResult);
    });
  });
  describe('makeFlipX', () => {
    const makeFlipXResult = makeFlipX();
    it('should returns keyframe name', () => {
      expect(makeFlipXResult).toEqual('kMwdJm');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeFlipXResult2 = makeFlipX();
      expect(makeFlipXResult2).toEqual(makeFlipXResult);
    });
  });
  describe('makeFlipY', () => {
    const makeFlipYResult = makeFlipY();
    it('should returns keyframe name', () => {
      expect(makeFlipYResult).toEqual('kmnyUX');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeFlipYResult2 = makeFlipY();
      expect(makeFlipYResult2).toEqual(makeFlipYResult);
    });
  });
});
