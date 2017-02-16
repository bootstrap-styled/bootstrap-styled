import { fromJS } from 'immutable';
import { defaultProps, getDisplayUtilities } from '../display';

describe('bootstrap display utility', function () {
  it('getDisplayUtilities should return a list of css utilities', function () {
    var css = getDisplayUtilities(defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-419391227);
  });
  it('getDisplayUtilities should have arguments', function () {
    var css = getDisplayUtilities();
    expect(fromJS({ css: css }).hashCode()).toEqual(-419391227);
  });
});