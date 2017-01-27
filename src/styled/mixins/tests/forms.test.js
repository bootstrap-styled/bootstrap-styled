import { fromJS } from 'immutable';
import { defaultProps, formControlValidation, formControlFocus, inputSize } from '../forms';

describe('bootstrap forms mixins', () => {
  it('formControlValidation should return a css without shadows', () => {
    const css = formControlValidation(defaultProps['$enable-shadows'], '#f00', defaultProps['$input-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(604780265);
  });
  it('formControlValidation should return a css with shadows', () => {
    const css = formControlValidation(!defaultProps['$enable-shadows'], '#f00', defaultProps['$input-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-792778626);
  });
  it('formControlValidation should have arguments', () => {
    const css = formControlValidation();
    expect(fromJS({ css }).hashCode()).toEqual(77835211);
  });
  it('formControlFocus should return a css without shadows', () => {
    const css = formControlFocus(defaultProps['$enable-shadows'], defaultProps['$input-color-focus'], defaultProps['$input-bg-focus'], defaultProps['$input-border-focus'], defaultProps['$input-box-shadow-focus']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(842017298);
  });
  it('formControlFocus should return a css with shadows', () => {
    const css = formControlFocus(!defaultProps['$enable-shadows'], defaultProps['$input-color-focus'], defaultProps['$input-bg-focus'], defaultProps['$input-border-focus'], defaultProps['$input-box-shadow-focus']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(158071155);
  });
  it('formControlFocus should have arguments', () => {
    const css = formControlFocus();
    expect(fromJS({ css }).hashCode()).toEqual(842017298);
  });
  it('inputSize should return a css with rounded', () => {
    const css = inputSize(defaultProps['$enable-rounded'], '.toto', '3px', '1px', '1px', '14px', '14px', defaultProps['$input-border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-397503813);
  });
  it('inputSize should return a css without rounded', () => {
    const css = inputSize(!defaultProps['$enable-rounded'], '.toto', '3px', '1px', '1px', '14px', '14px', defaultProps['$input-border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(443519589);
  });
  it('inputSize should have arguments', () => {
    const css = inputSize();
    expect(fromJS({ css }).hashCode()).toEqual(731864093);
  });
});
