import { fromJS } from 'immutable';
import { defaultProps, navbarToggleable } from '../navbar-toggleable';

describe('bootstrap toggleable mixins', () => {
  it('navbarToggleable should return a css without grtid-breakpoints', () => {
    const css = navbarToggleable(!defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(421143662);
  });
  it('navbarToggleable should return a css', () => {
    const css = navbarToggleable(defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-767429231);
  });
  it('navbarToggleable should have arguments', () => {
    const css = navbarToggleable();
    expect(fromJS({ css }).hashCode()).toEqual(-767429231);
  });
});
