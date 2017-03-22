import makeTheme from '../makeTheme';

describe('makeTheme', () => {
  it('should have makeTheme defined', () => {
    expect(makeTheme).toBeDefined();
  });
  it('should have keys starting with $ only', () => {
    Object.keys(makeTheme()).forEach((key) => expect(key[0]).toEqual('$'));
  });
});
