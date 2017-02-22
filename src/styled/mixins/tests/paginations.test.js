import { fromJS } from 'immutable';
import { defaultProps, paginationSize, paginationSizeBootstrap, pagination } from '../paginations';

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
  it('pagination should return a nav utility css', () => {
    const css = pagination(
      defaultProps['$enable-rounded'],
      defaultProps['$enable-hover-media-query'],
      defaultProps['$border-radius'],
      defaultProps['$pagination-active-color'],
      defaultProps['$pagination-active-bg'],
      defaultProps['$pagination-active-border'],
      defaultProps['$pagination-disabled-color'],
      defaultProps['$cursor-disabled'],
      defaultProps['$pagination-disabled-bg'],
      defaultProps['$pagination-disabled-border'],
      defaultProps['$pagination-padding-y'],
      defaultProps['$pagination-padding-x'],
      defaultProps['$pagination-line-height'],
      defaultProps['$pagination-color'],
      defaultProps['$pagination-bg'],
      defaultProps['$pagination-border-width'],
      defaultProps['$pagination-border-color'],
      defaultProps['$pagination-hover-color'],
      defaultProps['$pagination-hover-bg'],
      defaultProps['$pagination-hover-border'],
      defaultProps['$pagination-padding-y-lg'],
      defaultProps['$pagination-padding-x-lg'],
      defaultProps['$font-size-lg'],
      defaultProps['$line-height-lg'],
      defaultProps['$border-radius-lg'],
      defaultProps['$pagination-padding-y-sm'],
      defaultProps['$pagination-padding-x-sm'],
      defaultProps['$font-size-sm'],
      defaultProps['$line-height-sm'],
      defaultProps['$border-radius-sm'],
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(61318776);
  });
  it('pagination should parameters', () => {
    const css = pagination();
    expect(fromJS({ css }).hashCode()).toEqual(-1033428849);
  });
});
