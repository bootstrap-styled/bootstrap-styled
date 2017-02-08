import { fromJS } from 'immutable';
import { defaultProps, getPositionUtilities, fixedTop, fixedBottom, stickTop } from '../position';

describe('bootstrap position utility', () => {
  it('getPositionUtilities should return a list of css utilities', () => {
    const css = getPositionUtilities(defaultProps['$zindex-fixed'], defaultProps['$zindex-sticky']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-130048526);
  });
  it('getPositionUtilities should have arguments', () => {
    const css = getPositionUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-130048526);
  });
  it('fixedTop should return class .fixed-top', () => {
    const css = fixedTop(defaultProps['$zindex-fixed']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-917096255);
  });
  it('fixedTop should have arguments', () => {
    const css = fixedTop();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-917096255);
  });
  it('fixedBottom should return class .fixed-bottom', () => {
    const css = fixedBottom(defaultProps['$zindex-fixed']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(811714572);
  });
  it('fixedBottom should have arguments', () => {
    const css = fixedBottom();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(811714572);
  });
  it('stickTop should return class .fixed-sticky', () => {
    const css = stickTop(defaultProps['$zindex-sticky']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(752414964);
  });
  it('stickTop should have arguments', () => {
    const css = stickTop();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(752414964);
  });
});
