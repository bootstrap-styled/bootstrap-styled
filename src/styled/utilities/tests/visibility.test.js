import { fromJS } from 'immutable';
import { defaultProps, getVisibilityUtilities } from '../visibility';

describe('bootstrap visibility utility', () => {
  it('getVisibilityUtilities should return a list of css utilities', () => {
    const css = getVisibilityUtilities(defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(804893845);
  });
});
