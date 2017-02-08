import { fromJS } from 'immutable';
import { defaultProps, getFlexUtilities } from '../flex';

describe('bootstrap flex utility', function () {
  it('getFlexUtilities should return a list of css utilities', function () {
    var css = getFlexUtilities(defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(2123778);
  });
  it('getFlexUtilities should have arguments', function () {
    var css = getFlexUtilities();
    expect(fromJS({ css: css }).hashCode()).toEqual(2123778);
  });
});