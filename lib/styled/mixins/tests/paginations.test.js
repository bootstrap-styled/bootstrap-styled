import { fromJS } from 'immutable';
import { defaultProps, paginationSize, paginationSizeBootstrap } from '../paginations';

describe('bootstrap pagination mixins', function () {
  it('paginationSize should return a css with rounded', function () {
    var css = paginationSize(defaultProps['$enable-rounded'], '.75rem', '1.5rem', '1.25rem', '.25rem');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-857700927);
  });
  it('paginationSize should return a css without rounded', function () {
    var css = paginationSize(!defaultProps['$enable-rounded'], '.75rem', '1.5rem', '1.25rem', '.25rem');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(466039394);
  });
  it('paginationSize should have arguments', function () {
    var css = paginationSize();
    expect(fromJS({ css: css }).hashCode()).toEqual(381535574);
  });
  it('paginationSizeBootstrap should return a css with rounded', function () {
    var css = paginationSizeBootstrap(defaultProps['$enable-rounded'], '.75rem', '1.5rem', '1.25rem', (4 / 3).toString(), '.25rem');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-857700927);
  });
  it('paginationSizeBootstrap should return a css without rounded', function () {
    var css = paginationSizeBootstrap(!defaultProps['$enable-rounded'], '.75rem', '1.5rem', '1.25rem', (4 / 3).toString(), '.25rem');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(466039394);
  });
  it('paginationSizeBootstrap should have arguments', function () {
    var css = paginationSizeBootstrap();
    expect(fromJS({ css: css }).hashCode()).toEqual(381535574);
  });
});