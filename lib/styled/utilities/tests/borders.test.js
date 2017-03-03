import { fromJS } from 'immutable';
import { defaultProps, getBordersUtilities, rounded, roundedBottom, roundedCircle, roundedLeft, roundedRight, roundedTop, resetBorder, resetBorderTop, resetBorderRight, resetBorderBottom, resetBorderLeft } from '../borders';

describe('bootstrap borders utility', function () {
  it('getBordersUtilities should return a list of css utilities with rounded', function () {
    var css = getBordersUtilities(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-576500417);
  });
  it('getBordersUtilities should return a list of css utilities without rounded', function () {
    var css = getBordersUtilities(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(144131383);
  });
  it('getBordersUtilities should have arguments', function () {
    var css = getBordersUtilities();
    expect(fromJS({ css: css }).hashCode()).toEqual(-576500417);
  });
  it('rounded should return a css with rounded', function () {
    var css = rounded(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-919223289);
  });
  it('rounded should return a css without rounded', function () {
    var css = rounded(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(101513786);
  });
  it('rounded should have arguments', function () {
    var css = rounded();
    expect(fromJS({ css: css }).hashCode()).toEqual(-919223289);
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
  it('roundedBottom should have arguments', function () {
    var css = roundedBottom();
    expect(fromJS({ css: css }).hashCode()).toEqual(822841448);
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
  it('roundedCircle should have arguments', function () {
    var css = roundedCircle();
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
  it('roundedLeft should have arguments', function () {
    var css = roundedLeft();
    expect(fromJS({ css: css }).hashCode()).toEqual(9903745);
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
  it('roundedRight should have arguments', function () {
    var css = roundedRight();
    expect(fromJS({ css: css }).hashCode()).toEqual(1051039386);
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
  it('roundedTop should have arguments', function () {
    var css = roundedTop();
    expect(fromJS({ css: css }).hashCode()).toEqual(562932405);
  });
  it('resetBorder should return an utility', function () {
    var css = resetBorder();
    expect(fromJS({ css: css }).hashCode()).toEqual(-362746140);
  });
  it('resetBorderTop should return an utility', function () {
    var css = resetBorderTop();
    expect(fromJS({ css: css }).hashCode()).toEqual(-397720654);
  });
  it('resetBorderRight should return an utility', function () {
    var css = resetBorderRight();
    expect(fromJS({ css: css }).hashCode()).toEqual(-1042110320);
  });
  it('resetBorderBottom should return an utility', function () {
    var css = resetBorderBottom();
    expect(fromJS({ css: css }).hashCode()).toEqual(712395519);
  });
  it('resetBorderLeft should return an utility', function () {
    var css = resetBorderLeft();
    expect(fromJS({ css: css }).hashCode()).toEqual(514409208);
  });
});