import theme, { makeTheme } from '../theme';

describe('theme', () => {
  it('should have theme defined', () => {
    expect(theme).toBeDefined();
  });
  it('should have keys starting with $ only', () => {
    Object.keys(theme).forEach((key) => expect(key[0]).toEqual('$'));
  });
  it('should makeTheme', () => {
    expect(Object.keys(makeTheme()).length).toEqual(8);
  });
});
