import { fromJS } from 'immutable';
import { defaultProps, getBackgroundUtilities, bgFaded, bgPrimary, bgSuccess, bgInfo, bgWarning, bgDanger, bgInverse } from '../background';

describe('bootstrap background utility', () => {
  it('getBackgroundUtilities should return a list of css utilities', () => {
    const css = getBackgroundUtilities(
      defaultProps['$enable-hover-media-query'],
      defaultProps['$brand-primary'],
      defaultProps['$brand-success'],
      defaultProps['$brand-info'],
      defaultProps['$brand-warning'],
      defaultProps['$brand-danger'],
      defaultProps['$brand-inverse'],
      defaultProps['$gray-lightest'],
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-497167580);
  });
  it('getBackgroundUtilities should have arguments', () => {
    const css = getBackgroundUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-497167580);
  });
  it('bgFaded should return a css', () => {
    const css = bgFaded(defaultProps['$enable-hover-media-query'], defaultProps['$body-bg']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-311715304);
  });
  it('bgPrimary should return a css', () => {
    const css = bgPrimary(defaultProps['$enable-hover-media-query'], defaultProps['$brand-primary']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-875390508);
  });
  it('bgSuccess should return a css', () => {
    const css = bgSuccess(defaultProps['$enable-hover-media-query'], defaultProps['$brand-success']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(308475481);
  });
  it('bgInfo should return a css', () => {
    const css = bgInfo(defaultProps['$enable-hover-media-query'], defaultProps['$brand-info']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(152873846);
  });
  it('bgWarning should return a css', () => {
    const css = bgWarning(defaultProps['$enable-hover-media-query'], defaultProps['$brand-warning']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-978208027);
  });
  it('bgDanger should return a css', () => {
    const css = bgDanger(defaultProps['$enable-hover-media-query'], defaultProps['$brand-danger']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-137526624);
  });
  it('bgInverse should return a css', () => {
    const css = bgInverse(defaultProps['$enable-hover-media-query'], defaultProps['$brand-inverse']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-139130040);
  });
  it('bgFaded should have a parameter', () => {
    const css = bgFaded();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-311715304);
  });
  it('bgFaded should have a parameter', () => {
    const css = bgPrimary();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-875390508);
  });
  it('bgFaded should have a parameter', () => {
    const css = bgSuccess();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(308475481);
  });
  it('bgFaded should have a parameter', () => {
    const css = bgInfo();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(152873846);
  });
  it('bgFaded should have a parameter', () => {
    const css = bgWarning();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-978208027);
  });
  it('bgFaded should have a parameter', () => {
    const css = bgDanger();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-137526624);
  });
  it('bgFaded should have a parameter', () => {
    const css = bgInverse();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-139130040);
  });
});
