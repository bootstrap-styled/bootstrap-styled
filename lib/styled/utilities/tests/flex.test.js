import { fromJS } from 'immutable';
import { defaultProps, getFlexUtilities } from '../flex';

describe('bootstrap flex utility', function () {
  it('getFlexUtilities should return a list of css utilities', function () {
    var css = getFlexUtilities(!defaultProps['$enable-flex'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(360605415);
  });
  it('getFlexUtilities should return an empty css', function () {
    var css = getFlexUtilities(defaultProps['$enable-flex'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
});