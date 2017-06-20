import { fromJS } from 'immutable';
import { getClearfixUtilities, getClearfix } from '../clearfix';

describe('bootstrap clearfix utility', () => {
  it('getClearfixUtilities should return a list of css utilities', () => {
    const css = getClearfixUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(308530444);
  });
  it('getClearfix should return a list of css utilities', () => {
    const css = getClearfix();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-1061470531);
  });
});
