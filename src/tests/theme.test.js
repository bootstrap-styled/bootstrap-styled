import { fromJS } from 'immutable/';
import theme, { makeOriginal } from '../theme';

describe('theme', () => {
  describe('default theme', () => {
    it('should have every values defined', () => {
      Object.keys(theme).forEach((key) => {
        expect(theme[key]).toBeDefined();
      });
    });
  });

  describe('makeTheme', () => {
    it('should return a default theme', () => {
      const newTheme = makeOriginal();
      Object.keys(newTheme).forEach((key) => {
        expect(newTheme[key]).toBeDefined();
      });
    });
    it('should return an extended theme', () => {
      const notDefaultTheme = makeOriginal({
        $white: '#eee',
      });
      expect(fromJS(notDefaultTheme).hashCode() !== fromJS(theme).hashCode()).toBe(true);
      expect(fromJS(makeOriginal()).hashCode() === fromJS(theme).hashCode()).toBe(true);
    });
  });
});
