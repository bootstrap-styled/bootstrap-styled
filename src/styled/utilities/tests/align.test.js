import { fromJS } from 'immutable';
import { getAlignUtilities, alignBaseline, alignTop, alignMiddle, alignBottom, alignTextBottom, alignTextTop } from '../align';

describe('bootstrap align utility', () => {
  it('getAlignUtilities should return a list of css utilities', () => {
    const css = getAlignUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-994697783);
  });
  it('alignBaseline should return a css', () => {
    const css = alignBaseline();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(746143447);
  });
  it('alignTop should return a css', () => {
    const css = alignTop();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(1025169343);
  });
  it('alignMiddle should return a css', () => {
    const css = alignMiddle();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(355583440);
  });
  it('alignBottom should return a css', () => {
    const css = alignBottom();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-33018022);
  });
  it('alignTextBottom should return a css', () => {
    const css = alignTextBottom();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(426607220);
  });
  it('alignTextTop should return a css', () => {
    const css = alignTextTop();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(192526144);
  });
});
