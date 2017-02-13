import { fromJS } from 'immutable';
import { defaultProps, navDivider } from '../nav-divider';

describe('bootstrap nav-divider mixins', () => {
  it('navDivider should return a css', () => {
    const css = navDivider(defaultProps['$spacer-y'], '#f0f');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(858038477);
  });
  it('navDivider should have arguments', () => {
    const css = navDivider();
    expect(fromJS({ css }).hashCode()).toEqual(-953521003);
  });
});
