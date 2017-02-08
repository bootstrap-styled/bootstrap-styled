import { fromJS } from 'immutable';
import { getAlignUtilities, alignBaseline, alignTop, alignMiddle, alignBottom, alignTextBottom, alignTextTop } from '../align';

describe('bootstrap align utility', function () {
  it('getAlignUtilities should return a list of css utilities', function () {
    var css = getAlignUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-741616511);
  });
  it('alignBaseline should return a css', function () {
    var css = alignBaseline();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(814475733);
  });
  it('alignTop should return a css', function () {
    var css = alignTop();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(1025169343);
  });
  it('alignMiddle should return a css', function () {
    var css = alignMiddle();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(355583440);
  });
  it('alignBottom should return a css', function () {
    var css = alignBottom();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-33018022);
  });
  it('alignTextBottom should return a css', function () {
    var css = alignTextBottom();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(426607220);
  });
  it('alignTextTop should return a css', function () {
    var css = alignTextTop();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(192526144);
  });
});