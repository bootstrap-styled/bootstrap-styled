import { fromJS } from 'immutable';
import { defaultProps, getBordersUtilities, rounded, roundedBottom, roundedCircle, roundedLeft, roundedRight, roundedTop } from '../borders';

describe('bootstrap borders utility', function () {
  it('getBordersUtilities should return a list of css utilities with rounded', function () {
    var css = getBordersUtilities(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-531498544);
  });
  it('getBordersUtilities should return a list of css utilities without rounded', function () {
    var css = getBordersUtilities(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(959363096);
  });
  it('rouded should return a css with rounded', function () {
    var css = rounded(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-919223289);
  });
  it('rouded should return a css without rounded', function () {
    var css = rounded(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(101513786);
  });
  it('roundedBottom should return a css with rounded', function () {
    var css = roundedBottom(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(822841448);
  });
  it('roundedBottom should return a css without rounded', function () {
    var css = roundedBottom(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-770947480);
  });
  it('roundedCircle should return a css with rounded', function () {
    var css = roundedCircle(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-532555416);
  });
  it('roundedCircle should return a css without rounded', function () {
    var css = roundedCircle(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-532555416);
  });
  it('roundedLeft should return a css with rounded', function () {
    var css = roundedLeft(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(9903745);
  });
  it('roundedLeft should return a css without rounded', function () {
    var css = roundedLeft(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(389482313);
  });
  it('roundedRight should return a css with rounded', function () {
    var css = roundedRight(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(1051039386);
  });
  it('roundedRight should return a css without rounded', function () {
    var css = roundedRight(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-1062625927);
  });
  it('roundedTop should return a css with rounded', function () {
    var css = roundedTop(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(562932405);
  });
  it('roundedTop should return a css without rounded', function () {
    var css = roundedTop(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-791518777);
  });
});