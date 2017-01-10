import { fromJS } from 'immutable';
import { defaultProps, buttonVariant, buttonOutlineVariant, buttonSize } from '../button';

describe('bootstrap button mixins', () => {
  it('buttonVariant should return a css without shadows', () => {
    const css = buttonVariant(defaultProps['$enable-shadows'], '#f00', '#0f0', '#0ff', defaultProps['$btn-active-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-69601364);
  });
  it('buttonVariant should return a css with shadows', () => {
    const css = buttonVariant(!defaultProps['$enable-shadows'], '#f00', '#0f0', '#0ff', defaultProps['$btn-active-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(161175461);
  });
  it('buttonOutlineVariant should return a css', () => {
    const css = buttonOutlineVariant('#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-275320956);
  });
  it('buttonSize should return a css with rounded', () => {
    const css = buttonSize(defaultProps['$enable-rounded'], '#f00', '#00f', '#eee', '3px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-294360164);
  });
  it('buttonSize should return a css without rounded', () => {
    const css = buttonSize(!defaultProps['$enable-rounded'], '#f00', '#00f', '#eee', '3px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-496542589);
  });
});
