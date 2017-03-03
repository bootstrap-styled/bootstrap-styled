import { fromJS } from 'immutable';
import { defaultProps, getVisibilityUtilities } from '../visibility';

describe('bootstrap visibility utility', function () {
  it('getVisibilityUtilities should return a list of css utilities', function () {
    var css = getVisibilityUtilities(defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(804893845);
  });
  it('getVisibilityUtilities should have arguments', function () {
    var css = getVisibilityUtilities();
    expect(fromJS({ css: css }).hashCode()).toEqual(804893845);
  });
});