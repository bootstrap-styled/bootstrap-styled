import { fromJS } from 'immutable';
import { defaultProps, formControl, formControlValidation, formControlFocus, inputSize } from '../forms';

describe('bootstrap forms mixins', function () {
  it('formControl should return a css without shadows', function () {
    var css = formControl(defaultProps['$enable-rounded'], defaultProps['$enable-transitions'], defaultProps['$enable-shadows'], defaultProps['$input-height'], defaultProps['$input-padding-y'], defaultProps['$input-padding-x'], defaultProps['$font-size-base'], defaultProps['$input-line-height'], defaultProps['$input-color'], defaultProps['$input-bg'], defaultProps['$input-border-radius'], defaultProps['$input-btn-border-width'], defaultProps['$input-border-color'], defaultProps['$input-transition'], defaultProps['$input-box-shadow'], defaultProps['$input-color-focus'], defaultProps['$input-bg-focus'], defaultProps['$input-border-focus'], defaultProps['$input-box-shadow-focus'], defaultProps['$input-color-placeholder'], defaultProps['$input-bg-disabled'], defaultProps['$cursor-disabled']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(369714860);
  });
  it('formControlValidation should return a css without shadows', function () {
    var css = formControlValidation(defaultProps['$enable-shadows'], '#f00', defaultProps['$input-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-756613172);
  });
  it('formControlValidation should return a css with shadows', function () {
    var css = formControlValidation(!defaultProps['$enable-shadows'], '#f00', defaultProps['$input-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(493146580);
  });
  it('formControlValidation should have arguments', function () {
    var css = formControlValidation();
    expect(fromJS({ css: css }).hashCode()).toEqual(856583856);
  });
  it('formControlFocus should return a css without shadows', function () {
    var css = formControlFocus(defaultProps['$enable-shadows'], defaultProps['$input-color-focus'], defaultProps['$input-bg-focus'], defaultProps['$input-border-focus'], defaultProps['$input-box-shadow-focus']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(978393919);
  });
  it('formControlFocus should return a css with shadows', function () {
    var css = formControlFocus(!defaultProps['$enable-shadows'], defaultProps['$input-color-focus'], defaultProps['$input-bg-focus'], defaultProps['$input-border-focus'], defaultProps['$input-box-shadow-focus']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-1064216138);
  });
  it('formControlFocus should have arguments', function () {
    var css = formControlFocus();
    expect(fromJS({ css: css }).hashCode()).toEqual(978393919);
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