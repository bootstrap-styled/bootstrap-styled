import { fromJS } from 'immutable';
import { defaultProps, getBackgroundUtilities, bgFaded, bgPrimary, bgSuccess, bgInfo, bgWarning, bgDanger, bgInverse } from '../background';

describe('bootstrap background utility', function () {
  it('getBackgroundUtilities should return a list of css utilities', function () {
    var css = getBackgroundUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(107957250);
  });
  it('bgFaded should return a css', function () {
    var css = bgFaded(defaultProps['$body-bg']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(149412521);
  });
  it('bgPrimary should return a css', function () {
    var css = bgPrimary(defaultProps['$brand-primary']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-1016860820);
  });
  it('bgSuccess should return a css', function () {
    var css = bgSuccess(defaultProps['$brand-success']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-570112541);
  });
  it('bgInfo should return a css', function () {
    var css = bgInfo(defaultProps['$brand-info']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(804015844);
  });
  it('bgWarning should return a css', function () {
    var css = bgWarning(defaultProps['$brand-warning']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-931487219);
  });
  it('bgDanger should return a css', function () {
    var css = bgDanger(defaultProps['$brand-danger']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(703765576);
  });
  it('bgInverse should return a css', function () {
    var css = bgInverse(defaultProps['$brand-inverse']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(889984973);
  });
});