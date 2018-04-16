import makeExtend from '../makeExtend';

describe('makeExtend', () => {
  it('should have makeOriginal defined', () => {
    expect(makeExtend).toBeDefined();
  });
  it('should have keys starting with $ or _ only', () => {
    Object.keys(makeExtend()).forEach((key) => expect(['$', '_'].indexOf(key[0])).toBeGreaterThanOrEqual(0));
  });
});
