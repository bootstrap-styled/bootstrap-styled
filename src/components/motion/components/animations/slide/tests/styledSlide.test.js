/**
 * Testing our styled Slides utils
 */

import { makeSlideDown, makeSlideUp, makeSlideLeft, makeSlideRight, makeSlideRightLeft } from '../styledSlide';

describe('styledSlide', () => {
  describe('makeSlideDown', () => {
    const distance = '10px';
    const makeSlideDownResult = makeSlideDown(distance);
    it('should returns keyframe name', () => {
      expect(makeSlideDownResult).toEqual('gSZpQE');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeSlideDownResult2 = makeSlideDown(distance);
      expect(makeSlideDownResult2).toEqual(makeSlideDownResult);
    });
  });
  describe('makeSlideUp', () => {
    const distance = '10px';
    const makeSlideUpResult = makeSlideUp(distance);
    it('should returns keyframe name', () => {
      expect(makeSlideUpResult).toEqual('cBBYct');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeSlideUpResult2 = makeSlideUp(distance);
      expect(makeSlideUpResult2).toEqual(makeSlideUpResult);
    });
  });
  describe('makeSlideLeft', () => {
    const distance = '10px';
    const makeSlideLeftResult = makeSlideLeft(distance);
    it('should returns keyframe name', () => {
      expect(makeSlideLeftResult).toEqual('gJmLYA');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeSlideLeftResult2 = makeSlideLeft(distance);
      expect(makeSlideLeftResult2).toEqual(makeSlideLeftResult);
    });
  });
  describe('makeSlideRight', () => {
    const distance = '10px';
    const makeSlideRightResult = makeSlideRight(distance);
    it('should returns keyframe name', () => {
      expect(makeSlideRightResult).toEqual('dJxhKL');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeSlideRightResult2 = makeSlideRight(distance);
      expect(makeSlideRightResult2).toEqual(makeSlideRightResult);
    });
  });
  describe('makeSlideRightLeft', () => {
    const distance = '10px';
    const makeSlideRightLeftResult = makeSlideRightLeft(distance);
    it('should returns keyframe name', () => {
      expect(makeSlideRightLeftResult).toEqual('eXcoAr');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeSlideRightLeftResult2 = makeSlideRightLeft(distance);
      expect(makeSlideRightLeftResult2).toEqual(makeSlideRightLeftResult);
    });
  });
});
