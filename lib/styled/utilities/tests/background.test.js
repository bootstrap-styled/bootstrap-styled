import { fromJS } from 'immutable';
import { defaultProps, getBackgroundUtilities, bgFaded, bgPrimary, bgSuccess, bgInfo, bgWarning, bgDanger, bgInverse } from '../background';

describe('bootstrap background utility', function () {
  it('getBackgroundUtilities should return a list of css utilities', function () {
    var css = getBackgroundUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(570781177);
  });
  it('bgFaded should return a css', function () {
    var css = bgFaded(defaultProps['$body-bg']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(249674739);
  });
  it('bgPrimary should return a css', function () {
    var css = bgPrimary(defaultProps['$brand-primary']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-530599005);
  });
  it('bgSuccess should return a css', function () {
    var css = bgSuccess(defaultProps['$brand-success']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-346684083);
  });
  it('bgInfo should return a css', function () {
    var css = bgInfo(defaultProps['$brand-info']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(196260711);
  });
  it('bgWarning should return a css', function () {
    var css = bgWarning(defaultProps['$brand-warning']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-473209141);
  });
  it('bgDanger should return a css', function () {
    var css = bgDanger(defaultProps['$brand-danger']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(639625791);
  });
  it('bgInverse should return a css', function () {
    var css = bgInverse(defaultProps['$brand-inverse']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-238490403);
  });
});