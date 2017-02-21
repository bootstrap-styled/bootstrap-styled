import { fromJS } from 'immutable';
import { defaultProps, buttonVariant, buttonOutlineVariant, buttonSize } from '../buttons';

describe('bootstrap button mixins', function () {
  it('buttonVariant should return a css without shadows', function () {
    var css = buttonVariant(defaultProps['$enable-shadows'], '#f00', '#0f0', '#0ff', defaultProps['$btn-active-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-69601364);
  });
  it('buttonVariant should return a css with shadows', function () {
    var css = buttonVariant(!defaultProps['$enable-shadows'], '#f00', '#0f0', '#0ff', defaultProps['$btn-active-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(161175461);
  });
  it('buttonVariant should return a css by default', function () {
    var css = buttonVariant();
    expect(fromJS({ css: css }).hashCode()).toEqual(703634604);
  });
  it('buttonOutlineVariant should return a css', function () {
    var css = buttonOutlineVariant('#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-275320956);
  });
  it('buttonOutlineVariant should return a css by default', function () {
    var css = buttonOutlineVariant();
    expect(fromJS({ css: css }).hashCode()).toEqual(-41725614);
  });
  it('buttonSize should return a css with rounded', function () {
    var css = buttonSize(defaultProps['$enable-rounded'], '#f00', '#00f', '#eee', '3px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-294360164);
  });
  it('buttonSize should return a css without rounded', function () {
    var css = buttonSize(!defaultProps['$enable-rounded'], '#f00', '#00f', '#eee', '3px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-496542589);
  });
  it('buttonSize should return a css by default', function () {
    var css = buttonSize();
    expect(fromJS({ css: css }).hashCode()).toEqual(813225771);
  });
});