import { fromJS } from 'immutable';
import { defaultProps, navbarToggleable } from '../navbar-toggleable';

describe('bootstrap toggleable mixins', function () {
  it('navbarToggleable should return a css', function () {
    var css = navbarToggleable(defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-117050742);
  });
});