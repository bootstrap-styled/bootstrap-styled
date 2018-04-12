import { allowFalseValue } from '../utils';

describe('utils', () => {
  it('allowFalseValue should return false', () => {
    expect(allowFalseValue(false, true)).toBe(false);
  });
  it('allowFalseValue should return true', () => {
    expect(allowFalseValue(true, true)).toBe(true);
  });
});
