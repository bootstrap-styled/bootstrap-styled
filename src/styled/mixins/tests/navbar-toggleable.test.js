import { fromJS } from 'immutable';
import { defaultProps, navbarToggleable } from '../navbar-toggleable';

describe('bootstrap toggleable mixins', () => {
  it('navbarToggleable should return a css', () => {
    const css = navbarToggleable(defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(581969986);
  });
});
