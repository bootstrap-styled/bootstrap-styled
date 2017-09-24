import typeEnums from '../typeEnums';

describe('typeEnums', () => {
  describe('typeEnums', () => {
    it('should be a valid object', () => {
      expect(typeof typeEnums).toBe('object');
    });
    it('should have string values', () => {
      Object.keys(typeEnums).forEach((type) => {
        expect(typeof type).toBe('string');
      });
    });
  });
});
