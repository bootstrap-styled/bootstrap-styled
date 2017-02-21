import { fromJS } from 'immutable';
import { defaultProps, buttonGroup } from '../buttonGroup';

describe('bootstrap buttonGroup utility', () => {
  it('should return a buttonGroup utility css', () => {
    const css = buttonGroup(
      defaultProps['$enable-shadows'],
      defaultProps['$enable-rounded'],
      defaultProps['$input-btn-border-width'],
      defaultProps['$btn-toolbar-margin'],
      defaultProps['$btn-padding-x'],
      defaultProps['$btn-active-box-shadow'],
      defaultProps['$btn-padding-x-lg'],
      defaultProps['$btn-padding-y-lg'],
      defaultProps['$font-size-lg'],
      defaultProps['$btn-border-radius-lg'],
      defaultProps['$btn-padding-x-sm'],
      defaultProps['$btn-padding-y-sm'],
      defaultProps['$font-size-sm'],
      defaultProps['$btn-border-radius-sm']
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-787804183);
  });
  it('should return a buttonGroup utility css with default props', () => {
    const css = buttonGroup();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-787804183);
  });
});
