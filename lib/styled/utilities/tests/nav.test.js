import { fromJS } from 'immutable';
import { nav } from '../nav';

describe('bootstrap nav utility', function () {
  it('nav should return a nav utility css', function () {
    var css = nav();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(58083447);
  });
});