import { fromJS } from 'immutable';
import theme, { makeTheme } from '../theme';

describe('theme', function () {
  describe('default theme', function () {
    it('should have every values defined', function () {
      Object.keys(theme).forEach(function (key) {
        expect(theme[key]).toBeDefined();
      });
    });
  });

  describe('makeTheme', function () {
    it('should return a default theme', function () {
      var newTheme = makeTheme();
      Object.keys(newTheme).forEach(function (key) {
        expect(newTheme[key]).toBeDefined();
      });
    });
    it('should return an extended theme', function () {
      var notDefaultTheme = makeTheme({
        $white: '#eee'
      });
      expect(fromJS(notDefaultTheme).hashCode() !== fromJS(theme).hashCode()).toBe(true);
      expect(fromJS(makeTheme()).hashCode() === fromJS(theme).hashCode()).toBe(true);
    });
  });
});