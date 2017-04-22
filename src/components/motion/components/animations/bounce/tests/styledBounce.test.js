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
    it('should returns an object', () => {
      expect(typeof makeBounce()).toBe('object');
    });
  });
  describe('makeBounceDown', () => {
    const distance = '10px';
    it('should returns an object', () => {
      expect(typeof makeBounceDown()).toBe('object');
    });
    it('should returns an object with params', () => {
      expect(typeof makeBounceDown(distance)).toBe('object');
    });
  });
  describe('makeBounceUp', () => {
    const distance = '10px';
    it('should returns an object', () => {
      expect(typeof makeBounceUp()).toBe('object');
    });
    it('should returns an object with params', () => {
      expect(typeof makeBounceUp(distance)).toBe('object');
    });
  });
  describe('makeBounceLeft', () => {
    const distance = '10px';
    it('should returns an object', () => {
      expect(typeof makeBounceLeft()).toBe('object');
    });
    it('should returns an object with params', () => {
      expect(typeof makeBounceLeft(distance)).toBe('object');
    });
  });
  describe('makeBounceRight', () => {
    const distance = '10px';
    it('should returns an object', () => {
      expect(typeof makeBounceRight()).toBe('object');
    });
    it('should returns an object with params', () => {
      expect(typeof makeBounceRight(distance)).toBe('object');
    });
  });
});
