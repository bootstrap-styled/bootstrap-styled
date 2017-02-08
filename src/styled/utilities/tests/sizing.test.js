import { fromJS } from 'immutable';
import { defaultProps, getSizingUtilities } from '../sizing';

describe('bootstrap sizing utility', () => {
  it('getSizingUtilities should return a list of css utilities', () => {
    const css = getSizingUtilities(defaultProps['$sizes']); // eslint-disable-line dot-notation
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(1050266963);
  });
  it('getSizingUtilities should have arguments', () => {
    const css = getSizingUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(1050266963);
  });
});
