import { fromJS } from 'immutable';
import { button } from '../button';

describe('bootstrap button utility', () => {
  it('nav should return a button utility css', () => {
    const css = button();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(317875494);
  });
});
