import { fromJS } from 'immutable';
import { button } from '../button';

describe('bootstrap button utility', function () {
  it('nav should return a button utility css', function () {
    var css = button();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-977694086);
  });
});