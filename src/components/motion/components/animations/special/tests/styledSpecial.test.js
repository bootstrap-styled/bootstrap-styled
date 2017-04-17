/**
 * Testing our styled Special utils
 */

import {
  makeFlash,
  makeRollOut,
  makeRollIn,
  makeRubber,
  makeSwing,
  makeZoom,
  makeHinge,
  makePulse,
  makeExpandUp,
  makeEntrance,
  makeHatch,
} from '../styledSpecial';

describe('styledSpecial', () => {
  describe('makeFlash', () => {
    const makeFlashResult = makeFlash();
    it('should returns keyframe name', () => {
      expect(makeFlashResult).toEqual('SMqY');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeFlashResult2 = makeFlash();
      expect(makeFlashResult2).toEqual(makeFlashResult);
    });
  });
  describe('makeRollIn', () => {
    const distance = '10px';
    const makeRollInResult = makeRollIn(distance);
    it('should returns keyframe name', () => {
      expect(makeRollInResult).toEqual('fsznfI');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeRollInResult2 = makeRollIn(distance);
      expect(makeRollInResult2).toEqual(makeRollInResult);
    });
  });
  describe('makeRollOut', () => {
    const makeRollOutResult = makeRollOut();
    it('should returns keyframe name', () => {
      expect(makeRollOutResult).toEqual('habgPa');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeRollOutResult2 = makeRollOut();
      expect(makeRollOutResult2).toEqual(makeRollOutResult);
    });
  });
  describe('makeRubber', () => {
    const makeRubberResult = makeRubber();
    it('should returns keyframe name', () => {
      expect(makeRubberResult).toEqual('eLAOjJ');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeRubberResult2 = makeRubber();
      expect(makeRubberResult2).toEqual(makeRubberResult);
    });
  });
  describe('makeSwing', () => {
    const makeSwingResult = makeSwing();
    it('should returns keyframe name', () => {
      expect(makeSwingResult).toEqual('edjYBQ');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeSwingResult2 = makeSwing();
      expect(makeSwingResult2).toEqual(makeSwingResult);
    });
  });
  describe('makeZoom', () => {
    const makeZoomResult = makeZoom();
    it('should returns keyframe name', () => {
      expect(makeZoomResult).toEqual('jDtmwQ');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeZoomResult2 = makeZoom();
      expect(makeZoomResult2).toEqual(makeZoomResult);
    });
  });
  describe('makeHinge', () => {
    const makeHingeResult = makeHinge();
    it('should returns keyframe name', () => {
      expect(makeHingeResult).toEqual('kpAQww');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeHingeResult2 = makeHinge();
      expect(makeHingeResult2).toEqual(makeHingeResult);
    });
  });
  describe('makePulse', () => {
    const makePulseResult = makePulse();
    it('should returns keyframe name', () => {
      expect(makePulseResult).toEqual('dZZFRs');
    });
    it('should returns the same keyframe name as last test', () => {
      const makePulseResult2 = makePulse();
      expect(makePulseResult2).toEqual(makePulseResult);
    });
  });
  describe('makeExpandUp', () => {
    const makeExpandUpResult = makeExpandUp();
    it('should returns keyframe name', () => {
      expect(makeExpandUpResult).toEqual('jGTkUn');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeExpandUpResult2 = makeExpandUp();
      expect(makeExpandUpResult2).toEqual(makeExpandUpResult);
    });
  });
  describe('makeEntrance', () => {
    const makeEntranceResult = makeEntrance();
    it('should returns keyframe name', () => {
      expect(makeEntranceResult).toEqual('bHRTcH');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeEntranceResult2 = makeEntrance();
      expect(makeEntranceResult2).toEqual(makeEntranceResult);
    });
  });
  describe('makeHatch', () => {
    const makeHatchResult = makeHatch();
    it('should returns keyframe name', () => {
      expect(makeHatchResult).toEqual('hzejgT');
    });
    it('should returns the same keyframe name as last test', () => {
      const makeHatchResult2 = makeHatch();
      expect(makeHatchResult2).toEqual(makeHatchResult);
    });
  });
});
