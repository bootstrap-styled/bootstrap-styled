import { fromJS } from 'immutable';
import { defaultProps, navbarToggleable } from '../navbar-toggleable';

describe('bootstrap toggleable mixins', function () {
  it('navbarToggleable should return a css without grtid-breakpoints', function () {
    var css = navbarToggleable(!defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(421143662);
  });
  it('navbarToggleable should return a css', function () {
    var css = navbarToggleable(defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(1058463785);
  });
  it('navbarToggleable should have arguments', function () {
    var css = navbarToggleable();
    expect(fromJS({ css: css }).hashCode()).toEqual(1058463785);
  });
});