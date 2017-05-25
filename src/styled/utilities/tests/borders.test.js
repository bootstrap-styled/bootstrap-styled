import { fromJS } from 'immutable';
import {
  defaultProps,
  getBordersUtilities,
  rounded,
  roundedBottom,
  roundedCircle,
  roundedLeft,
  roundedRight,
  roundedTop,
  resetBorder,
  resetBorderTop,
  resetBorderRight,
  resetBorderBottom,
  resetBorderLeft,
  resetRounded,
  resetRoundedTop,
  resetRoundedRight,
  resetRoundedBottom,
  resetRoundedLeft,
} from '../borders';

describe('bootstrap borders utility', () => {
  it('getBordersUtilities should return a list of css utilities with rounded', () => {
    const css = getBordersUtilities(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(381084790);
  });
  it('getBordersUtilities should return a list of css utilities without rounded', () => {
    const css = getBordersUtilities(!defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(521233947);
  });
  it('getBordersUtilities should have arguments', () => {
    const css = getBordersUtilities();
    expect(fromJS({ css }).hashCode()).toEqual(381084790);
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
  it('roundedCircle should return an utility', () => {
    const css = roundedCircle();
    expect(fromJS({ css }).hashCode()).toEqual(-532555416);
  });
  it('resetBorder should return an utility', () => {
    const css = resetBorder();
    expect(fromJS({ css }).hashCode()).toEqual(-362746140);
  });
  it('resetBorderTop should return an utility', () => {
    const css = resetBorderTop();
    expect(fromJS({ css }).hashCode()).toEqual(-397720654);
  });
  it('resetBorderRight should return an utility', () => {
    const css = resetBorderRight();
    expect(fromJS({ css }).hashCode()).toEqual(-1042110320);
  });
  it('resetBorderBottom should return an utility', () => {
    const css = resetBorderBottom();
    expect(fromJS({ css }).hashCode()).toEqual(712395519);
  });
  it('resetBorderLeft should return an utility', () => {
    const css = resetBorderLeft();
    expect(fromJS({ css }).hashCode()).toEqual(514409208);
  });
  it('resetRounded should return an utility', () => {
    const css = resetRounded();
    expect(fromJS({ css }).hashCode()).toEqual(-204501487);
  });
  it('resetRoundedTop should return an utility', () => {
    const css = resetRoundedTop();
    expect(fromJS({ css }).hashCode()).toEqual(47750857);
  });
  it('resetRoundedRight should return an utility', () => {
    const css = resetRoundedRight();
    expect(fromJS({ css }).hashCode()).toEqual(-166463815);
  });
  it('resetRoundedBottom should return an utility', () => {
    const css = resetRoundedBottom();
    expect(fromJS({ css }).hashCode()).toEqual(-626233766);
  });
  it('resetRoundedLeft should return an utility', () => {
    const css = resetRoundedLeft();
    expect(fromJS({ css }).hashCode()).toEqual(713920736);
  });
});
