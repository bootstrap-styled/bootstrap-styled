import { fromJS } from 'immutable';
import { defaultProps, getFlexUtilities } from '../flex';

describe('bootstrap flex utility', () => {
  it('getFlexUtilities should return a list of css utilities', () => {
    const css = getFlexUtilities(!defaultProps['$enable-flex'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-950429936);
  });
  it('getFlexUtilities should return an empty css', () => {
    const css = getFlexUtilities(defaultProps['$enable-flex'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
});
