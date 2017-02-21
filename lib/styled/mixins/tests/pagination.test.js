import { fromJS } from 'immutable';
import { pagination, defaultProps } from '../pagination';

describe('bootstrap pagination utility', function () {
  it('pagination should return a nav utility css', function () {
    var css = pagination(defaultProps['$enable-rounded'], defaultProps['$enable-hover-media-query'], defaultProps['$border-radius'], defaultProps['$pagination-active-color'], defaultProps['$pagination-active-bg'], defaultProps['$pagination-active-border'], defaultProps['$pagination-disabled-color'], defaultProps['$cursor-disabled'], defaultProps['$pagination-disabled-bg'], defaultProps['$pagination-disabled-border'], defaultProps['$pagination-padding-y'], defaultProps['$pagination-padding-x'], defaultProps['$pagination-line-height'], defaultProps['$pagination-color'], defaultProps['$pagination-bg'], defaultProps['$pagination-border-width'], defaultProps['$pagination-border-color'], defaultProps['$pagination-hover-color'], defaultProps['$pagination-hover-bg'], defaultProps['$pagination-hover-border'], defaultProps['$pagination-padding-y-lg'], defaultProps['$pagination-padding-x-lg'], defaultProps['$font-size-lg'], defaultProps['$line-height-lg'], defaultProps['$border-radius-lg'], defaultProps['$pagination-padding-y-sm'], defaultProps['$pagination-padding-x-sm'], defaultProps['$font-size-sm'], defaultProps['$line-height-sm'], defaultProps['$border-radius-sm']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-510117050);
  });
  it('pagination should parameters', function () {
    var css = pagination();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-510117050);
  });
});