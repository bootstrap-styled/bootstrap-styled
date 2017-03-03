import { fromJS } from 'immutable';
import { defaultProps, getSpacingUtilities } from '../spacing';

describe('bootstrap spacing utility', function () {
  it('getSpacingUtilities should return a list of css utilities', function () {
    var css = getSpacingUtilities(defaultProps['$grid-breakpoints'], defaultProps['$spacers'] // eslint-disable-line dot-notation
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(1035143239);
  });
  it('getSpacingUtilities should have arguments', function () {
    var css = getSpacingUtilities();
    expect(fromJS({ css: css }).hashCode()).toEqual(1035143239);
  });
});