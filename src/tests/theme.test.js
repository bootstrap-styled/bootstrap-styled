import { fromJS } from 'immutable';
import theme, { makeTheme } from '../theme';
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
      const newTheme = makeTheme();
      Object.keys(newTheme).forEach((key) => {
        expect(newTheme[key]).toBeDefined();
      });
    });
    it('should return an extended theme', () => {
      const notDefaultTheme = makeTheme({
        $white: '#eee',
      });
      expect(fromJS(notDefaultTheme).hashCode()).not.toEqual(fromJS(theme).hashCode());
      const { $utilities: omitted1, ...mT } = makeTheme();
      const { $utilities: omitted2, ...t } = theme;
      expect(omitted1).toEqual(omitted2);
      expect(fromJS(mT).hashCode()).toEqual(fromJS(t).hashCode());
    });
  });
});
