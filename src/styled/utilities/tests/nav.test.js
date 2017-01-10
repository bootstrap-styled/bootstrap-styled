import { fromJS } from 'immutable';
import { nav } from '../nav';

describe('bootstrap nav utility', () => {
  it('nav should return a nav utility css', () => {
    const css = nav();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(58083447);
  });
});
