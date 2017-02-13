import { fromJS } from 'immutable';
import { typography } from '../typography';

describe('bootstrap typography utility', () => {
  it('nav should return a typography utility css', () => {
    const css = typography();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-385634248);
  });
});
