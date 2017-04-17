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
    const makeRotateInResult = makeRotateIn();
    it('should returns keyframe name', () => {
      expect(makeRotateInResult).toEqual('cxMKCH');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeRotateInResult2 = makeRotateIn();
      expect(makeRotateInResult2).toEqual(makeRotateInResult);
    });
  });
  describe('makeRotateLeft', () => {
    const makeRotateLeftResult = makeRotateLeft();
    it('should returns keyframe name', () => {
      expect(makeRotateLeftResult).toEqual('lpoUit');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeRotateLeftResult2 = makeRotateLeft();
      expect(makeRotateLeftResult2).toEqual(makeRotateLeftResult);
    });
  });
  describe('makeRotateRight', () => {
    const makeRotateRightResult = makeRotateRight();
    it('should returns keyframe name', () => {
      expect(makeRotateRightResult).toEqual('fIDweJ');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeRotateRightResult2 = makeRotateRight();
      expect(makeRotateRightResult2).toEqual(makeRotateRightResult);
    });
  });
  describe('makeRotateUpLeft', () => {
    const makeRotateUpLeftResult = makeRotateUpLeft();
    it('should returns keyframe name', () => {
      expect(makeRotateUpLeftResult).toEqual('cEUyXs');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeLightOutResult2 = makeRotateUpLeft();
      expect(makeLightOutResult2).toEqual(makeRotateUpLeftResult);
    });
  });
  describe('makeRotateUpRight', () => {
    const makeRotateUpRightResult = makeRotateUpRight();
    it('should returns keyframe name', () => {
      expect(makeRotateUpRightResult).toEqual('hQkJpn');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeRotateUpRightResult2 = makeRotateUpRight();
      expect(makeRotateUpRightResult2).toEqual(makeRotateUpRightResult);
    });
  });
});
