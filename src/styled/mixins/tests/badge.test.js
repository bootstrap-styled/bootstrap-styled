import { fromJS } from 'immutable';
import { defaultProps, badgeVariant } from '../badge';

describe('bootstrap badge mixins', () => {
  it('badgeVariant should return css without hover media query ', () => {
    const css = badgeVariant(defaultProps['$enable-hover-mediaQuery'], '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(611451493);
  });
  it('badgeVariant should return css with hover media query', () => {
    const css = badgeVariant(!defaultProps['$enable-hover-mediaQuery'], '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(117949390);
  });
});
