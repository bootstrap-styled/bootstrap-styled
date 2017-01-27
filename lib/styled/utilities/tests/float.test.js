import { fromJS } from 'immutable';
import { defaultProps, getFloatUtilities } from '../float';

describe('bootstrap float utility', function () {
  it('getFloatUtilities should return a list of css utilities', function () {
    var css = getFloatUtilities(defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-111904855);
  });
  it('getFloatUtilities should have arguments', function () {
    var css = getFloatUtilities();
    expect(fromJS({ css: css }).hashCode()).toEqual(-111904855);
  });
});