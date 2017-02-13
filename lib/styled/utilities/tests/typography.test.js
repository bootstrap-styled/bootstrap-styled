import { fromJS } from 'immutable';
import { typography } from '../typography';

describe('bootstrap typography utility', function () {
  it('nav should return a typography utility css', function () {
    var css = typography();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-385634248);
  });
});