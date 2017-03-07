import { fromJS } from 'immutable';
import { defaultProps, getDisplayUtilities } from '../display';

describe('bootstrap display utility', () => {
  it('getDisplayUtilities should return a list of css utilities', () => {
    const css = getDisplayUtilities(defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-165333280);
  });
  it('getDisplayUtilities should have arguments', () => {
    const css = getDisplayUtilities();
    expect(fromJS({ css }).hashCode()).toEqual(-165333280);
  });
});
