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
  const distance = '10px';

  describe('makeBounce', () => {
    it('should returns an object', () => {
      expect(typeof makeBounce()).toBe('object');
    });
  });
  describe('makeBounceDown', () => {
    it('should returns an object', () => {
      expect(typeof makeBounceDown({ distance })).toBe('object');
    });
  });
  describe('makeBounceUp', () => {
    it('should returns an object', () => {
      expect(typeof makeBounceUp({ distance })).toBe('object');
    });
  });
  describe('makeBounceLeft', () => {
    it('should returns an object', () => {
      expect(typeof makeBounceLeft({ distance })).toBe('object');
    });
  });
  describe('makeBounceRight', () => {
    it('should returns an object', () => {
      expect(typeof makeBounceRight({ distance })).toBe('object');
    });
  });
});
