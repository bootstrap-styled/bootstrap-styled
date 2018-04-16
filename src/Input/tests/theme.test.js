import theme from '../theme';

describe('theme', () => {
  it('should have theme defined', () => {
    expect(theme).toBeDefined();
  });
  it('should have keys starting with $ or _ only', () => {
    Object.keys(theme).forEach((key) => expect(['$', '_'].indexOf(key[0])).toBeGreaterThanOrEqual(0));
  });
});
