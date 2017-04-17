/**
 * Testing our styled Bounces utils
 */

import {
  makeBounce,
  makeBounceDown,
  makeBounceUp,
  makeBounceLeft,
  makeBounceRight,
} from '../styledBounce';

describe('styledBounce', () => {
  describe('makeBounce', () => {
    const makeBounceResult = makeBounce();
    it('should returns keyframe name', () => {
      expect(makeBounceResult).toEqual('bGJZDZ');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeBounceResult2 = makeBounce();
      expect(makeBounceResult2).toEqual(makeBounceResult);
    });
  });
  describe('makeBounceDown', () => {
    const distance = '10px';
    const makeBounceDownResult = makeBounceDown(distance);
    it('should returns keyframe name', () => {
      expect(makeBounceDownResult).toEqual('iQmzxR');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeBounceDownResult2 = makeBounceDown(distance);
      expect(makeBounceDownResult2).toEqual(makeBounceDownResult);
    });
  });
  describe('makeBounceUp', () => {
    const distance = '10px';
    const makeBounceUpResult = makeBounceUp(distance);
    it('should returns keyframe name', () => {
      expect(makeBounceUpResult).toEqual('fAvSFW');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeBounceUpResult2 = makeBounceUp(distance);
      expect(makeBounceUpResult2).toEqual(makeBounceUpResult);
    });
  });
  describe('makeBounceLeft', () => {
    const distance = '10px';
    const makeBounceLeftResult = makeBounceLeft(distance);
    it('should returns keyframe name', () => {
      expect(makeBounceLeftResult).toEqual('loBvxI');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeBounceLeftResult2 = makeBounceLeft(distance);
      expect(makeBounceLeftResult2).toEqual(makeBounceLeftResult);
    });
  });
  describe('makeBounceRight', () => {
    const distance = '10px';
    const makeBounceRightResult = makeBounceRight(distance);
    it('should returns keyframe name', () => {
      expect(makeBounceRightResult).toEqual('fVeTvX');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeBounceRightResult2 = makeBounceRight(distance);
      expect(makeBounceRightResult2).toEqual(makeBounceRightResult);
    });
  });
});
