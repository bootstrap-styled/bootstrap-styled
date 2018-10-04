import Color from 'color';
import { makeTheme as makeThemeBs } from '../../theme/makeTheme';
import createMakeTheme, { makeScopedTheme, toMakeTheme } from '../index';

describe('bootstrap-styled theme utils', () => {
  describe('makeScopedTheme', () => {
    it('should have makeScopedTheme defined', () => {
      expect(makeScopedTheme).toBeDefined();
    });
    it('should have makeScopedTheme with a scoped theme', () => {
      const result = makeThemeBs({ scopeName: { $white: 'pink' } });
      expect(makeScopedTheme({ $white: 'pink' }, 'scopeName')).toEqual(result);
    });
    it('should have makeScopedTheme with a scoped theme name', () => {
      expect(makeScopedTheme({})).toEqual(undefined);
    });
  });
  describe('makeScopedTheme wiht calculus', () => {
    it('should have calculated scoped theme', () => {
      const makeThemeTest = () => {
        const v = {};
        v.$white = 'pink';
        v.$blue = v.$white;
        v['$blue-darker'] = Color(v.$blue).darken(0.05).toString();
        return v;
      };
      const result = { $blue: 'pink', '$blue-darker': 'hsl(349.5, 100%, 83.3%)', $white: 'pink' };
      expect(makeScopedTheme(makeThemeTest(), 'scopeName').scopeName).toEqual(result);
      expect(makeScopedTheme(makeThemeTest(), 'scopeName')['$brand-primary']).toEqual('#0275d8');
      expect(makeScopedTheme(makeThemeTest(), 'scopeName').scopeName['$blue-darker']).toEqual(result['$blue-darker']);
    });
    it('should have makeScopedTheme with a scoped theme name', () => {
      expect(makeScopedTheme({})).toEqual(undefined);
    });
  });
  describe('createMakeTheme', () => {
    const themeListFunction = [
      makeThemeBs,
      toMakeTheme(makeThemeBs({
        '$headings-font-family': '"Helvetica"',
      })),
    ];

    it('should have $headings-font-family equal to Helvetica', () => {
      const makeTheme = createMakeTheme(themeListFunction);
      expect(makeTheme()['$headings-font-family']).toBe('"Helvetica"');
    });

    it('should override $headings-font-family to equal Arial', () => {
      const makeTheme = createMakeTheme(themeListFunction);
      expect(makeTheme({
        '$headings-font-family': '"Arial"',
      })['$headings-font-family']).toBe('"Arial"');

      expect(makeTheme()['$headings-font-family']).toBe('"Helvetica"');
    });
  });

  describe('toMakeTheme', () => {
    it('should create a makeTheme', () => {
      const theme = { '$headings-font-family': 'Comic' };
      const makeTheme = toMakeTheme(theme);
      expect(makeTheme()['$headings-font-family']).toBe(theme['$headings-font-family']);
    });

    it('should override $headings-font-family variable to be equal to Arial', () => {
      const theme = { '$headings-font-family': 'Comic' };
      const makeTheme = toMakeTheme(theme);
      expect(makeTheme({
        '$headings-font-family': '"Arial"',
      })['$headings-font-family']).toBe('"Arial"');
    });
  });
});
