import { fromJS } from 'immutable';
import { defaultProps, getBackgroundUtilities, bgFaded, bgPrimary, bgSuccess, bgInfo, bgWarning, bgDanger, bgInverse } from '../background';

describe('bootstrap background utility', () => {
  it('getBackgroundUtilities should return a list of css utilities', () => {
    const css = getBackgroundUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-937312715);
  });
  it('bgFaded should return a css', () => {
    const css = bgFaded(defaultProps['$body-bg']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(149412521);
  });
  it('bgPrimary should return a css', () => {
    const css = bgPrimary(defaultProps['$brand-primary']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-295025470);
  });
  it('bgSuccess should return a css', () => {
    const css = bgSuccess(defaultProps['$brand-success']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(543174936);
  });
  it('bgInfo should return a css', () => {
    const css = bgInfo(defaultProps['$brand-info']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(770988521);
  });
  it('bgWarning should return a css', () => {
    const css = bgWarning(defaultProps['$brand-warning']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(48917392);
  });
  it('bgDanger should return a css', () => {
    const css = bgDanger(defaultProps['$brand-danger']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(387368167);
  });
  it('bgInverse should return a css', () => {
    const css = bgInverse(defaultProps['$brand-inverse']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(671518634);
  });
});
