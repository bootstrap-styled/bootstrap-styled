import makeExtend from '../makeExtend';

describe('makeExtend', () => {
  it('should have makeOriginal defined', () => {
    expect(makeExtend).toBeDefined();
  });
  it('should have keys starting with $ only', () => {
    Object.keys(makeExtend()).forEach((key) => expect(key[0]).toEqual('$'));
  });
});
