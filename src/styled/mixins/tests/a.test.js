import { fromJS } from 'immutable';
import { a } from '../a';

describe('bootstrap button utility', () => {
  it('should return a a utility css', () => {
    const css = a();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(914075158);
  });
});
