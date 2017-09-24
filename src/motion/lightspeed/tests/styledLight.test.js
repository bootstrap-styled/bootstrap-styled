/**
 * Testing our styled Lights utils
 */

import {
  makeLightIn,
  makeLightOut,
} from '../styledLight';

describe('styledRotate', () => {
  const distance = '10px';
  const rotation = '30deg';
  describe('makeLightInResult', () => {
    it('should returns an object', () => {
      expect(typeof makeLightIn({ distance, rotation })).toBe('object');
    });
  });
  describe('makeLightOut', () => {
    it('should returns an object', () => {
      expect(typeof makeLightOut({ distance, rotation })).toBe('object');
    });
  });
});
