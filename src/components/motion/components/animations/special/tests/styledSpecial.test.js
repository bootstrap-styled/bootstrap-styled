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
  const distance = '10px';
  const amplification = '1';

  describe('makeFlash', () => {
    it('should returns an object', () => {
      expect(typeof makeFlash()).toBe('object');
    });
  });
  describe('makeRollIn', () => {
    it('should returns an object', () => {
      expect(typeof makeRollIn({ distance, amplification })).toBe('object');
    });
  });
  describe('makeRollOut', () => {
    it('should returns an object', () => {
      expect(typeof makeRollOut({ distance, amplification })).toBe('object');
    });
  });
  describe('makeRubber', () => {
    it('should returns an object', () => {
      expect(typeof makeRubber({ amplification })).toBe('object');
    });
  });
  describe('makeSwing', () => {
    it('should returns an object', () => {
      expect(typeof makeSwing({ amplification })).toBe('object');
    });
  });
  describe('makeZoom', () => {
    it('should returns an object', () => {
      expect(typeof makeZoom({ amplification })).toBe('object');
    });
  });
  describe('makeHinge', () => {
    it('should returns an object', () => {
      expect(typeof makeHinge({ amplification })).toBe('object');
    });
  });
  describe('makePulse', () => {
    it('should returns an object', () => {
      expect(typeof makePulse({ amplification })).toBe('object');
    });
  });
  describe('makeExpandUp', () => {
    it('should returns an object', () => {
      expect(typeof makeExpandUp({ amplification })).toBe('object');
    });
  });
  describe('makeEntrance', () => {
    it('should returns an object', () => {
      expect(typeof makeEntrance({ amplification })).toBe('object');
    });
  });
  describe('makeHatch', () => {
    it('should returns an object', () => {
      expect(typeof makeHatch({ amplification })).toBe('object');
    });
  });
});
