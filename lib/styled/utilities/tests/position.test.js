import { fromJS } from 'immutable';
import { defaultProps, getPositionUtilities, fixedTop, fixedBottom, stickTop } from '../position';

describe('bootstrap position utility', function () {
  it('getPositionUtilities should return a list of css utilities', function () {
    var css = getPositionUtilities(defaultProps['$zindex-fixed'], defaultProps['$zindex-sticky']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-778562839);
  });
  it('getPositionUtilities should have arguments', function () {
    var css = getPositionUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-778562839);
  });
  it('fixedTop should return class .fixed-top', function () {
    var css = fixedTop(defaultProps['$zindex-fixed']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(576700824);
  });
  it('fixedTop should have arguments', function () {
    var css = fixedTop();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(576700824);
  });
  it('fixedBottom should return class .fixed-bottom', function () {
    var css = fixedBottom(defaultProps['$zindex-fixed']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(243226372);
  });
  it('fixedBottom should have arguments', function () {
    var css = fixedBottom();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(243226372);
  });
  it('stickTop should return class .fixed-sticky', function () {
    var css = stickTop(defaultProps['$zindex-sticky']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(180990810);
  });
  it('stickTop should have arguments', function () {
    var css = stickTop();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(180990810);
  });
});