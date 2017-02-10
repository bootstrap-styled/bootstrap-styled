import { fromJS } from 'immutable';
import { a } from '../a';

describe('bootstrap button utility', function () {
  it('should return a a utility css', function () {
    var css = a();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-292674796);
  });
});