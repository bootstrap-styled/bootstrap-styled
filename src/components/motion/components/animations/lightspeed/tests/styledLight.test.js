/**
 * Testing our styled Lights utils
 */

import {
  makeLightIn,
  makeLightOut,
} from '../styledLight';

describe('styledRotate', () => {
  describe('makeLightInResult', () => {
    it('should returns an object', () => {
      expect(typeof makeLightIn()).toBe('object');
    });
  });
  describe('makeLightOut', () => {
    it('should returns an object', () => {
      expect(typeof makeLightOut()).toBe('object');
    });
  });
});
