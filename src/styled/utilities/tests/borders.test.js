import { fromJS } from 'immutable';
import { defaultProps, getBordersUtilities, rounded, roundedBottom, roundedCircle, roundedLeft, roundedRight, roundedTop } from '../borders';

describe('bootstrap borders utility', () => {
  it('getBordersUtilities should return a list of css utilities with rounded', () => {
    const css = getBordersUtilities(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-531498544);
  });
  it('getBordersUtilities should return a list of css utilities without rounded', () => {
    const css = getBordersUtilities(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(959363096);
  });
  it('getBordersUtilities should have arguments', () => {
    const css = getBordersUtilities();
    expect(fromJS({ css }).hashCode()).toEqual(-531498544);
  });
  it('rounded should return a css with rounded', () => {
    const css = rounded(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-919223289);
  });
  it('rounded should return a css without rounded', () => {
    const css = rounded(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(101513786);
  });
  it('rounded should have arguments', () => {
    const css = rounded();
    expect(fromJS({ css }).hashCode()).toEqual(-919223289);
  });
  it('roundedBottom should return a css with rounded', () => {
    const css = roundedBottom(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(822841448);
  });
  it('roundedBottom should return a css without rounded', () => {
    const css = roundedBottom(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-770947480);
  });
  it('roundedBottom should have arguments', () => {
    const css = roundedBottom();
    expect(fromJS({ css }).hashCode()).toEqual(822841448);
  });
  it('roundedCircle should return a css with rounded', () => {
    const css = roundedCircle(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-532555416);
  });
  it('roundedCircle should return a css without rounded', () => {
    const css = roundedCircle(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-532555416);
  });
  it('roundedCircle should have arguments', () => {
    const css = roundedCircle();
    expect(fromJS({ css }).hashCode()).toEqual(-532555416);
  });
  it('roundedLeft should return a css with rounded', () => {
    const css = roundedLeft(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(9903745);
  });
  it('roundedLeft should return a css without rounded', () => {
    const css = roundedLeft(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(389482313);
  });
  it('roundedLeft should have arguments', () => {
    const css = roundedLeft();
    expect(fromJS({ css }).hashCode()).toEqual(9903745);
  });
  it('roundedRight should return a css with rounded', () => {
    const css = roundedRight(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(1051039386);
  });
  it('roundedRight should return a css without rounded', () => {
    const css = roundedRight(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-1062625927);
  });
  it('roundedRight should have arguments', () => {
    const css = roundedRight();
    expect(fromJS({ css }).hashCode()).toEqual(1051039386);
  });
  it('roundedTop should return a css with rounded', () => {
    const css = roundedTop(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(562932405);
  });
  it('roundedTop should return a css without rounded', () => {
    const css = roundedTop(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-791518777);
  });
  it('roundedTop should have arguments', () => {
    const css = roundedTop();
    expect(fromJS({ css }).hashCode()).toEqual(562932405);
  });
});
