import { fromJS } from 'immutable';
import { defaultProps, getSpacingUtilities } from '../spacing';

describe('bootstrap spacing utility', () => {
  it('getSpacingUtilities should return a list of css utilities', () => {
    const css = getSpacingUtilities(
      defaultProps['$grid-breakpoints'],
      defaultProps['$spacers'] // eslint-disable-line dot-notation
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(1035143239);
  });
  it('getSpacingUtilities should have arguments', () => {
    const css = getSpacingUtilities();
    expect(fromJS({ css }).hashCode()).toEqual(1035143239);
  });
});
