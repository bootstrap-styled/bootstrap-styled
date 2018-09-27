import { makeTheme as makeThemeBs } from '../../theme/makeTheme';
import createMakeTheme, { makeScopedTheme, toMakeTheme } from '../index';

describe('bootstrap-styled theme utils', () => {
  describe('makeScopedTheme', () => {
    it('should have makeScopedTheme defined', () => {
      expect(makeScopedTheme).toBeDefined();
    });
    it('should have makeScopedTheme with a scoped theme', () => {
      const result = makeThemeBs({ scopeName: {} });
      expect(makeScopedTheme({}, 'scopeName')).toEqual(result);
    });
    it('should have makeScopedTheme with a scoped theme name', () => {
      expect(makeScopedTheme({})).toEqual(undefined);
    });
    it('should not override the original bootstrap variable', () => {
      const scopedTheme = makeScopedTheme({ '$brand-primary': 'pink' }, 'scopeName', false);
      expect(scopedTheme['$brand-primary']).not.toEqual(scopedTheme.scopeName['$brand-primary']);
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
