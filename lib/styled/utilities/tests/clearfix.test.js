import { fromJS } from 'immutable';
import { getClearfixUtilities, getClearfix } from '../clearfix';

describe('bootstrap clearfix utility', function () {
  it('getClearfixUtilities should return a list of css utilities', function () {
    var css = getClearfixUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(256154950);
  });
  it('getClearfix should return a list of css utilities', function () {
    var css = getClearfix();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(1056073326);
  });
});