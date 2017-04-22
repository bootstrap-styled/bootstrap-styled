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
    it('should returns an object', () => {
      expect(typeof makeFlash()).toBe('object');
    });
  });
  describe('makeRollIn', () => {
    it('should returns an object', () => {
      expect(typeof makeRollIn()).toBe('object');
    });
  });
  describe('makeRollOut', () => {
    it('should returns an object', () => {
      expect(typeof makeRollOut()).toBe('object');
    });
  });
  describe('makeRubber', () => {
    it('should returns an object', () => {
      expect(typeof makeRubber()).toBe('object');
    });
  });
  describe('makeSwing', () => {
    it('should returns an object', () => {
      expect(typeof makeSwing()).toBe('object');
    });
  });
  describe('makeZoom', () => {
    it('should returns an object', () => {
      expect(typeof makeZoom()).toBe('object');
    });
  });
  describe('makeHinge', () => {
    it('should returns an object', () => {
      expect(typeof makeHinge()).toBe('object');
    });
  });
  describe('makePulse', () => {
    it('should returns an object', () => {
      expect(typeof makePulse()).toBe('object');
    });
  });
  describe('makeExpandUp', () => {
    it('should returns an object', () => {
      expect(typeof makeExpandUp()).toBe('object');
    });
  });
  describe('makeEntrance', () => {
    it('should returns an object', () => {
      expect(typeof makeEntrance()).toBe('object');
    });
  });
  describe('makeHatch', () => {
    it('should returns an object', () => {
      expect(typeof makeHatch()).toBe('object');
    });
  });
});
