import { fromJS } from 'immutable';
import { defaultProps, navbar } from '../navbar';

describe('bootstrap navbar utility', function () {
  it('navbar should return a css for navbar', function () {
    var css = navbar(defaultProps['$grid-breakpoints'], defaultProps['$enable-rounded'], defaultProps['$enable-hover-media-query'], defaultProps['$navbar-padding-y'], defaultProps['$navbar-padding-x'], defaultProps['$zindex-navbar'], defaultProps['$zindex-navbar-fixed'], defaultProps['$zindex-navbar-sticky'], defaultProps['$navbar-brand-padding-y'], defaultProps['$font-size-lg'], defaultProps['$navbar-divider-padding-y'], defaultProps['$navbar-toggler-padding-y'], defaultProps['$navbar-toggler-padding-x'], defaultProps['$navbar-toggler-font-size'], defaultProps['$border-width'], defaultProps['$navbar-toggler-border-radius'], defaultProps['$navbar-light-active-color'], defaultProps['$navbar-light-color'], defaultProps['$navbar-light-hover-color'], defaultProps['$navbar-light-toggler-bg'], defaultProps['$navbar-light-toggler-border'], defaultProps['$navbar-dark-active-color'], defaultProps['$navbar-dark-color'], defaultProps['$navbar-dark-hover-color'], defaultProps['$navbar-dark-toggler-bg'], defaultProps['$navbar-dark-toggler-border']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-50030925);
  });
  it('navbar should have arguments', function () {
    var css = navbar();
    expect(fromJS({ css: css }).hashCode()).toEqual(-50030925);
  });
});