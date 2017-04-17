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
  describe('makeFadeIn', () => {
    const makeFadeInResult = makeFadeIn();
    it('should returns keyframe name', () => {
      expect(makeFadeInResult).toEqual('bcCCNc');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeFadeInResult2 = makeFadeIn();
      expect(makeFadeInResult2).toEqual(makeFadeInResult);
    });
  });
  describe('makeFadeLeft', () => {
    const distance = '10px';
    const makeFadeLeftResult = makeFadeLeft(distance);
    it('should returns keyframe name', () => {
      expect(makeFadeLeftResult).toEqual('jtWtJi');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeFadeLeftResult2 = makeFadeLeft(distance);
      expect(makeFadeLeftResult2).toEqual(makeFadeLeftResult);
    });
  });
  describe('makeFadeRight', () => {
    const distance = '10px';
    const makeFadeRightResult = makeFadeRight(distance);
    it('should returns keyframe name', () => {
      expect(makeFadeRightResult).toEqual('iDeTOB');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeFadeRightResult2 = makeFadeRight(distance);
      expect(makeFadeRightResult2).toEqual(makeFadeRightResult);
    });
  });
  describe('makeFadeDown', () => {
    const distance = '10px';
    const makeFadeDownResult = makeFadeDown(distance);
    it('should returns keyframe name', () => {
      expect(makeFadeDownResult).toEqual('czWqDm');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeFadeDownResult2 = makeFadeDown(distance);
      expect(makeFadeDownResult2).toEqual(makeFadeDownResult);
    });
  });
  describe('makeFadeUp', () => {
    const distance = '10px';
    const makeFadeUpResult = makeFadeUp(distance);
    it('should returns keyframe name', () => {
      expect(makeFadeUpResult).toEqual('FzTce');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeFadeUpResult2 = makeFadeUp(distance);
      expect(makeFadeUpResult2).toEqual(makeFadeUpResult);
    });
  });
});
