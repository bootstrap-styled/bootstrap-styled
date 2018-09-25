import { makeTheme } from '../makeTheme';
import makeScopedTheme from '../makeScopedTheme';

describe('makeScopedTheme', () => {
  it('should have makeScopedTheme defined', () => {
    expect(makeScopedTheme).toBeDefined();
  });
  it('should have makeScopedTheme with a scoped theme', () => {
    const result = makeTheme({ scopeName: {} });
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
