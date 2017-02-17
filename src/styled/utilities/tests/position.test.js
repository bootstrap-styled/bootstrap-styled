import { fromJS } from 'immutable';
import { defaultProps, getPositionUtilities, fixedTop, fixedBottom, stickTop } from '../position';

describe('bootstrap position utility', () => {
  it('getPositionUtilities should return a list of css utilities', () => {
    const css = getPositionUtilities(defaultProps['$zindex-fixed'], defaultProps['$zindex-sticky']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-778562839);
  });
  it('getPositionUtilities should have arguments', () => {
    const css = getPositionUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-778562839);
  });
  it('fixedTop should return class .fixed-top', () => {
    const css = fixedTop(defaultProps['$zindex-fixed']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(576700824);
  });
  it('fixedTop should have arguments', () => {
    const css = fixedTop();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(576700824);
  });
  it('fixedBottom should return class .fixed-bottom', () => {
    const css = fixedBottom(defaultProps['$zindex-fixed']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(243226372);
  });
  it('fixedBottom should have arguments', () => {
    const css = fixedBottom();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(243226372);
  });
  it('stickTop should return class .fixed-sticky', () => {
    const css = stickTop(defaultProps['$zindex-sticky']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(180990810);
  });
  it('stickTop should have arguments', () => {
    const css = stickTop();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(180990810);
  });
});
