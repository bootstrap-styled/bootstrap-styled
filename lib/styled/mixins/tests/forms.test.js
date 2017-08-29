'use strict';

var _immutable = require('immutable');

var _forms = require('../forms');

describe('bootstrap forms mixins', function () {
  it('formControl should return a css without shadows', function () {
    var css = (0, _forms.formControl)(_forms.defaultProps['$enable-rounded'], _forms.defaultProps['$enable-transitions'], _forms.defaultProps['$enable-shadows'], _forms.defaultProps['$input-height'], _forms.defaultProps['$input-padding-y'], _forms.defaultProps['$input-padding-x'], _forms.defaultProps['$font-size-base'], _forms.defaultProps['$input-line-height'], _forms.defaultProps['$input-color'], _forms.defaultProps['$input-bg'], _forms.defaultProps['$input-border-radius'], _forms.defaultProps['$input-btn-border-width'], _forms.defaultProps['$input-border-color'], _forms.defaultProps['$input-transition'], _forms.defaultProps['$input-box-shadow'], _forms.defaultProps['$input-color-focus'], _forms.defaultProps['$input-bg-focus'], _forms.defaultProps['$input-border-focus'], _forms.defaultProps['$input-box-shadow-focus'], _forms.defaultProps['$input-color-placeholder'], _forms.defaultProps['$input-bg-disabled'], _forms.defaultProps['$cursor-disabled']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(715200646);
  });
  it('formControl should have parameters', function () {
    var css = (0, _forms.formControl)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(715200646);
  });
  it('formControlValidation should return a css without shadows', function () {
    var css = (0, _forms.formControlValidation)(_forms.defaultProps['$enable-shadows'], '#f00', _forms.defaultProps['$input-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-756613172);
  });
  it('formControlValidation should return a css with shadows', function () {
    var css = (0, _forms.formControlValidation)(!_forms.defaultProps['$enable-shadows'], '#f00', _forms.defaultProps['$input-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(493146580);
  });
  it('formControlValidation should have arguments', function () {
    var css = (0, _forms.formControlValidation)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(856583856);
  });
  it('formControlFocus should return a css without shadows', function () {
    var css = (0, _forms.formControlFocus)(_forms.defaultProps['$enable-shadows'], _forms.defaultProps['$input-color-focus'], _forms.defaultProps['$input-bg-focus'], _forms.defaultProps['$input-border-focus'], _forms.defaultProps['$input-box-shadow-focus']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(978393919);
  });
  it('formControlFocus should return a css with shadows', function () {
    var css = (0, _forms.formControlFocus)(!_forms.defaultProps['$enable-shadows'], _forms.defaultProps['$input-color-focus'], _forms.defaultProps['$input-bg-focus'], _forms.defaultProps['$input-border-focus'], _forms.defaultProps['$input-box-shadow-focus']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-1064216138);
  });
  it('formControlFocus should have arguments', function () {
    var css = (0, _forms.formControlFocus)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(978393919);
  });
  it('inputSize should return a css with rounded', function () {
    var css = (0, _forms.inputSize)(_forms.defaultProps['$enable-rounded'], '.toto', '3px', '1px', '1px', '14px', '14px', _forms.defaultProps['$input-border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-397503813);
  });
  it('inputSize should return a css without rounded', function () {
    var css = (0, _forms.inputSize)(!_forms.defaultProps['$enable-rounded'], '.toto', '3px', '1px', '1px', '14px', '14px', _forms.defaultProps['$input-border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(443519589);
  });
  it('inputSize should have arguments', function () {
    var css = (0, _forms.inputSize)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(731864093);
  });
});