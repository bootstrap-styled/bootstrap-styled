import { fromJS } from 'immutable';
import { defaultProps, navbarVerticalAlign } from '../navbar-align';

describe('bootstrap navbar-align mixins', () => {
  it('navbarVerticalAlign should return a css', () => {
    const css = navbarVerticalAlign(defaultProps['$navbar-height'], '30px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(1025386685);
  });
});
