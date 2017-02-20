import { fromJS } from 'immutable';
import { defaultProps, typography } from '../typography';

describe('bootstrap typography utility', function () {
  it('nav should return a typography utility css', function () {
    var css = typography(defaultProps['$headings-margin-bottom'], defaultProps['$headings-font-family'], defaultProps['$headings-font-weight'], defaultProps['$headings-line-height'], defaultProps['$headings-color'], defaultProps['$display1-size'], defaultProps['$display2-size'], defaultProps['$display3-size'], defaultProps['$display4-size'], defaultProps['$display1-weight'], defaultProps['$display2-weight'], defaultProps['$display3-weight'], defaultProps['$display4-weight']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-187480347);
  });
  it('nav should return a typography utility css with default', function () {
    var css = typography();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-187480347);
  });
});