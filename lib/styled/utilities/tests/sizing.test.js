import { fromJS } from 'immutable';
import { defaultProps, getSizingUtilities } from '../sizing';

describe('bootstrap sizing utility', function () {
  it('getSizingUtilities should return a list of css utilities', function () {
    var css = getSizingUtilities(defaultProps['$sizes']); // eslint-disable-line dot-notation
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(1050266963);
  });
});