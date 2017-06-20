import { fromJS } from 'immutable';
import { defaultProps, getFlexUtilities } from '../flex';

describe('bootstrap flex utility', () => {
  it('getFlexUtilities should return a list of css utilities', () => {
    const css = getFlexUtilities(defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(2123778);
  });
  it('getFlexUtilities should have arguments', () => {
    const css = getFlexUtilities();
    expect(fromJS({ css }).hashCode()).toEqual(2123778);
  });
});
