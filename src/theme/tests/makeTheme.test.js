import { makeTheme } from '../makeTheme';

describe('makeTheme', () => {
  it('should have makeTheme defined', () => {
    expect(makeTheme).toBeDefined();
  });
  it('should have keys starting with $ or _ only', () => {
    Object.keys(makeTheme()).forEach((key) => expect(['$', '_'].indexOf(key[0]) !== -1).toBe(true));
  });
  it('should makeTheme', () => {
    expect(Object.keys(makeTheme()).length).toEqual(484);
  });
});

