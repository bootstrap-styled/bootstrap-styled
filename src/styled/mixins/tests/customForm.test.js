import { fromJS } from 'immutable';
import { defaultProps, customForms } from '../customForms';

describe('bootstrap customForms mixin', () => {
  it('customForms should return a list of css mixin', () => {
    const css = customForms(
      defaultProps['$enable-rounded'],
      defaultProps['$enable-shadows'],
      defaultProps['$custom-control-checked-indicator-box-shadow'],
      defaultProps['$custom-control-active-indicator-box-shadow'],
      defaultProps['$custom-control-indicator-box-shadow'],
      defaultProps['$custom-checkbox-indeterminate-box-shadow'],
      defaultProps['$custom-select-focus-box-shadow'],
      defaultProps['$custom-file-focus-box-shadow'],
      defaultProps['$custom-file-box-shadow'],
      defaultProps['$custom-select-border-radius'],
      defaultProps['$custom-file-border-radius'],
      defaultProps['$custom-checkbox-radius'],
      defaultProps['$input-bg'],
      defaultProps['$custom-select-line-height'],
      defaultProps['$line-height-base'],
      defaultProps['$custom-control-gutter'],
      defaultProps['$custom-control-spacer-x'],
      defaultProps['$custom-control-checked-indicator-color'],
      defaultProps['$custom-control-checked-indicator-bg'],
      defaultProps['$custom-control-focus-indicator-box-shadow'],
      defaultProps['$custom-control-active-indicator-color'],
      defaultProps['$custom-control-active-indicator-bg'],
      defaultProps['$custom-control-disabled-cursor'],
      defaultProps['$custom-control-disabled-indicator-bg'],
      defaultProps['$custom-control-disabled-description-color'],
      defaultProps['$custom-control-indicator-size'],
      defaultProps['$custom-control-indicator-bg'],
      defaultProps['$custom-control-indicator-bg-size'],
      defaultProps['$custom-checkbox-checked-icon'],
      defaultProps['$custom-checkbox-indeterminate-bg'],
      defaultProps['$custom-checkbox-indeterminate-icon'],
      defaultProps['$custom-radio-radius'],
      defaultProps['$custom-radio-checked-icon'],
      defaultProps['$custom-control-spacer-y'],
      defaultProps['$border-width'],
      defaultProps['$input-height'],
      defaultProps['$custom-select-padding-y'],
      defaultProps['$custom-select-padding-x'],
      defaultProps['$custom-select-indicator-padding'],
      defaultProps['$custom-select-color'],
      defaultProps['$custom-select-bg'],
      defaultProps['$custom-select-indicator'],
      defaultProps['$custom-select-bg-size'],
      defaultProps['$custom-select-border-width'],
      defaultProps['$custom-select-border-color'],
      defaultProps['$custom-select-focus-border-color'],
      defaultProps['$input-color'],
      defaultProps['$custom-select-disabled-color'],
      defaultProps['$cursor-disabled'],
      defaultProps['$custom-select-disabled-bg'],
      defaultProps['$custom-select-sm-font-size'],
      defaultProps['$custom-file-width'],
      defaultProps['$custom-file-height'],
      defaultProps['$custom-file-padding-x'],
      defaultProps['$custom-file-padding-y'],
      defaultProps['$custom-file-line-height'],
      defaultProps['$custom-file-color'],
      defaultProps['$custom-file-bg'],
      defaultProps['$custom-file-border-width'],
      defaultProps['$custom-file-border-color'],
      defaultProps['$custom-file-button-color'],
      defaultProps['$custom-file-button-bg'],
      defaultProps['$custom-file-text'],
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-226306711);
  });
  it('customForms should use default arguments', () => {
    const css = customForms();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-226306711);
  });
});
