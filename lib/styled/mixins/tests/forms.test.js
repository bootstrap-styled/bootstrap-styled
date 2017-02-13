import { fromJS } from 'immutable';
import { defaultProps, formControlValidation, formControlFocus, inputSize } from '../forms';

describe('bootstrap forms mixins', function () {
  it('formControlValidation should return a css without shadows', function () {
    var css = formControlValidation(defaultProps['$enable-shadows'], '#f00', defaultProps['$input-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(604780265);
  });
  it('formControlValidation should return a css with shadows', function () {
    var css = formControlValidation(!defaultProps['$enable-shadows'], '#f00', defaultProps['$input-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-792778626);
  });
  it('formControlValidation should have arguments', function () {
    var css = formControlValidation();
    expect(fromJS({ css: css }).hashCode()).toEqual(77835211);
  });
  it('formControlFocus should return a css without shadows', function () {
    var css = formControlFocus(defaultProps['$enable-shadows'], defaultProps['$input-color-focus'], defaultProps['$input-bg-focus'], defaultProps['$input-border-focus'], defaultProps['$input-box-shadow-focus']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(842017298);
  });
  it('formControlFocus should return a css with shadows', function () {
    var css = formControlFocus(!defaultProps['$enable-shadows'], defaultProps['$input-color-focus'], defaultProps['$input-bg-focus'], defaultProps['$input-border-focus'], defaultProps['$input-box-shadow-focus']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(158071155);
  });
  it('formControlFocus should have arguments', function () {
    var css = formControlFocus();
    expect(fromJS({ css: css }).hashCode()).toEqual(842017298);
  });
  it('inputSize should return a css with rounded', function () {
    var css = inputSize(defaultProps['$enable-rounded'], '.toto', '3px', '1px', '1px', '14px', '14px', defaultProps['$input-border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-397503813);
  });
  it('inputSize should return a css without rounded', function () {
    var css = inputSize(!defaultProps['$enable-rounded'], '.toto', '3px', '1px', '1px', '14px', '14px', defaultProps['$input-border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(443519589);
  });
  it('inputSize should have arguments', function () {
    var css = inputSize();
    expect(fromJS({ css: css }).hashCode()).toEqual(731864093);
  });
});