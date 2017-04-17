/**
 * Testing our styled Lights utils
 */

import {
  makeLightIn,
  makeLightOut,
} from '../styledLight';

describe('styledRotate', () => {
  describe('makeLightIn', () => {
    const makeLightInResult = makeLightIn();
    it('should returns keyframe name', () => {
      expect(makeLightInResult).toEqual('fWPlCM');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeLightInResult2 = makeLightIn();
      expect(makeLightInResult2).toEqual(makeLightInResult);
    });
  });
  describe('makeLightOut', () => {
    const makeLightOutResult = makeLightOut();
    it('should returns keyframe name', () => {
      expect(makeLightOutResult).toEqual('fWPlCM');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeLightOutResult2 = makeLightOut();
      expect(makeLightOutResult2).toEqual(makeLightOutResult);
    });
  });
});
