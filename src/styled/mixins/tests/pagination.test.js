import { fromJS } from 'immutable';
import { defaultProps, paginationSize, paginationSizeBootstrap } from '../pagination';

describe('bootstrap pagination mixins', () => {
  it('paginationSize should return a css with rounded', () => {
    const css = paginationSize(
      defaultProps['$enable-rounded'],
      '.75rem',
      '1.5rem',
      '1.25rem',
      '.25rem',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-857700927);
  });
  it('paginationSize should return a css without rounded', () => {
    const css = paginationSize(
      !defaultProps['$enable-rounded'],
      '.75rem',
      '1.5rem',
      '1.25rem',
      '.25rem',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(466039394);
  });
  it('paginationSize should have arguments', () => {
    const css = paginationSize();
    expect(fromJS({ css }).hashCode()).toEqual(381535574);
  });
  it('paginationSizeBootstrap should return a css with rounded', () => {
    const css = paginationSizeBootstrap(
      defaultProps['$enable-rounded'],
      '.75rem',
      '1.5rem',
      '1.25rem',
      (4 / 3).toString(),
      '.25rem',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-857700927);
  });
  it('paginationSizeBootstrap should return a css without rounded', () => {
    const css = paginationSizeBootstrap(
      !defaultProps['$enable-rounded'],
      '.75rem',
      '1.5rem',
      '1.25rem',
      (4 / 3).toString(),
      '.25rem',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(466039394);
  });
  it('paginationSizeBootstrap should have arguments', () => {
    const css = paginationSizeBootstrap();
    expect(fromJS({ css }).hashCode()).toEqual(381535574);
  });
});
