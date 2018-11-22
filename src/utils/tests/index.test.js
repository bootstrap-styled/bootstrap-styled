import Color from 'color';
import { makeTheme as makeThemeBs } from '../../theme/makeTheme';
import createMakeTheme, { makeScopedTheme, toMakeTheme } from '../index';

describe('bootstrap-styled theme utils', () => {
  describe('makeScopedTheme', () => {
    it('should have makeScopedTheme defined', () => {
      expect(makeScopedTheme).toBeDefined();
    });
    it('should have makeScopedTheme with a scoped theme', () => {
      const result = makeScopedTheme('scopeName', { $white: 'pink' });
      expect(result).toEqual({ scopeName: result.scopeName });
    });
    it('should have makeScopedTheme with a scoped theme name as first argument', () => {
      expect(makeScopedTheme({})).toEqual(undefined);
      expect(makeScopedTheme({}, 'scopeName')).toEqual(undefined);
    });
  });
  describe('makeScopedTheme with calculus', () => {
    it('should have calculated scoped theme', () => {
      const makeDynamicTheme = () => {
        const v = {};
        v.$white = 'pink';
        v.$blue = v.$white;
        v['$blue-darker'] = Color(v.$blue).darken(0.05).toString();
        return v;
      };
      const theme = makeScopedTheme('scopeName', makeDynamicTheme());
      const result = { $blue: 'pink', '$blue-darker': 'hsl(349.5, 100%, 83.3%)', $white: 'pink' };
      expect(theme.scopeName).toEqual(result);
      expect(theme.scopeName['$blue-darker']).toEqual(result['$blue-darker']);
    });
  });
  describe('createMakeTheme', () => {
    const themeListFunction = [
      toMakeTheme(makeThemeBs({
        '$headings-font-family': '"Helvetica"',
      })),
    ];
    const themeScopedListFunction = [
      toMakeTheme(makeThemeBs({
        '$headings-font-family': '"Helvetica"',
      })),
      toMakeTheme(makeScopedTheme('scopedTheme', {
        $color: 'blue',
      })),
      toMakeTheme(makeScopedTheme('scopedThemeSecond', {
        '$bg-color': 'pink',
      })),
    ];
    it('should have $headings-font-family equal to Helvetica', () => {
      const makeTheme = createMakeTheme(themeListFunction);
      expect(makeTheme()['$headings-font-family']).toBe('"Helvetica"');
    });

    it('should override $headings-font-family to equal Arial', () => {
      const makeTheme = createMakeTheme(themeListFunction);
      const modifiedTheme = makeTheme({
        '$headings-font-family': '"Arial"',
      });
      expect(modifiedTheme['$headings-font-family']).toBe('"Arial"');
    });
    it('should create a makeTheme based on a list of theme and scopedThemes', () => {
      const makeTheme = createMakeTheme(themeScopedListFunction);
      expect(makeTheme()['$headings-font-family']).toBe('"Helvetica"');
      expect(makeTheme().scopedTheme.$color).toBe('blue');
      expect(makeTheme().scopedThemeSecond['$bg-color']).toBe('pink');
    });
    it('should override theme and scoped theme variables', () => {
      const makeTheme = createMakeTheme(themeScopedListFunction);
      const modifiedTheme = makeTheme({
        '$headings-font-family': '"Arial"',
        scopedTheme: {
          $color: 'yellow',
        },
      });
      expect(modifiedTheme['$headings-font-family']).toBe('"Arial"');
      expect(modifiedTheme.scopedTheme.$color).toBe('yellow');
      expect(modifiedTheme.scopedThemeSecond['$bg-color']).not.toBe('orange');
    });
  });

  describe('toMakeTheme', () => {
    it('should treat theme like a NOT scoped theme', () => {
      const themeStartingWithVariable = { '$headings-font-family': 'Comic' };
      const makeThemeTestVariable = toMakeTheme(themeStartingWithVariable);
      const themeStartingWithMetaData = { _name: 'name test' };
      const makeThemeTestMetaData = toMakeTheme(themeStartingWithMetaData);
      expect(makeThemeTestVariable()['$headings-font-family']).toBe(themeStartingWithVariable['$headings-font-family']);
      expect(makeThemeTestMetaData()._name).toBe(themeStartingWithMetaData._name); // eslint-disable-line no-underscore-dangle
    });


    it('should create a makeTheme', () => {
      const theme = { '$headings-font-family': 'Comic' };
      const makeTheme = toMakeTheme(theme);
      expect(makeTheme()['$headings-font-family']).toBe(theme['$headings-font-family']);
    });

    it('should override $headings-font-family variable to be equal to Arial', () => {
      const theme = { '$headings-font-family': 'Comic' };
      const makeThemeTest = toMakeTheme(theme);
      const modifiedMakeThemeTest = makeThemeTest({
        '$headings-font-family': '"Arial"',
      });
      expect(modifiedMakeThemeTest['$headings-font-family']).toBe('"Arial"');
    });
    it('should create a makeTheme from a  scopedTheme', () => {
      const scopedTheme = { scopeName: { '$headings-font-family': 'Comic' } };
      const makeTheme = toMakeTheme(scopedTheme);
      expect(makeTheme().scopeName['$headings-font-family']).toBe(scopedTheme.scopeName['$headings-font-family']);
    });

    it('should override $headings-font-family variable to be equal to Arial', () => {
      const scopedTheme = { scopeName: { '$headings-font-family': 'Comic' } };
      const makeTheme = toMakeTheme(scopedTheme);
      const customTheme = makeTheme({
        scopeName: {
          '$headings-font-family': '"Arial"',
        },
      });
      expect(customTheme.scopeName['$headings-font-family']).toBe('"Arial"');
    });
  });
});
