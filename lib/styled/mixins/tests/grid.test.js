import { fromJS } from 'immutable';

import { defaultProps, makeContainer, makeContainerMaxWidths, makeGutters, makeRow, makeColReady, makeCol, makeColOffset, makeColPush, makeColPull, makeColModifier } from '../grid';

describe('bootstrap grid mixins', function () {
  it('makeContainer should return an empty css', function () {
    var css = makeContainer(!defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('makeContainer should return a css', function () {
    var css = makeContainer(defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-438283730);
  });
  it('makeContainer should have arguments', function () {
    var css = makeContainer();
    expect(fromJS({ css: css }).hashCode()).toEqual(-438283730);
  });
  it('makeContainerMaxWidths should return a css', function () {
    var css = makeContainerMaxWidths(defaultProps['$enable-grid-classes'], defaultProps['$container-max-widths'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-68081336);
  });
  it('makeContainerMaxWidths should return an empty css', function () {
    var css = makeContainerMaxWidths(!defaultProps['$enable-grid-classes'], defaultProps['$container-max-widths'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('makeContainerMaxWidths should have arguments', function () {
    var css = makeContainerMaxWidths();
    expect(fromJS({ css: css }).hashCode()).toEqual(-68081336);
  });
  it('makeGutters should return a css', function () {
    var css = makeGutters(defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(391692486);
  });
  it('makeGutters should have arguments', function () {
    var css = makeGutters();
    expect(fromJS({ css: css }).hashCode()).toEqual(391692486);
  });
  it('makeRow should return an empty css', function () {
    var css = makeRow(!defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('makeRow should return an empty css', function () {
    var css = makeRow(!defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(788434458);
  });
  it('makeRow should return a css ', function () {
    var css = makeRow(defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(311684628);
  });
  it('makeRow should have arguments', function () {
    var css = makeRow();
    expect(fromJS({ css: css }).hashCode()).toEqual(311684628);
  });
  it('makeColReady should return a css', function () {
    var css = makeColReady(!defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(1013690543);
  });
  it('makeColReady should have arguments', function () {
    var css = makeColReady();
    expect(fromJS({ css: css }).hashCode()).toEqual(-547471871);
  });
  it('makeCol should return a css', function () {
    var css = makeCol(!2, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(15593872);
  });
  it('makeCol should have arguments', function () {
    var css = makeCol();
    expect(fromJS({ css: css }).hashCode()).toEqual(-938181064);
  });

  it('makeColOffset should return a css', function () {
    var css = makeColOffset(3, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-711001918);
  });
  it('makeColOffset should have arguments', function () {
    var css = makeColOffset();
    expect(fromJS({ css: css }).hashCode()).toEqual(-709540557);
  });
  it('makeColPush should return a css', function () {
    var css = makeColPush(2, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-465879009);
  });
  it('makeColPush should have arguments', function () {
    var css = makeColPush();
    expect(fromJS({ css: css }).hashCode()).toEqual(750159885);
  });
  it('makeColPull should return a css', function () {
    var css = makeColPull(6, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-555876077);
  });
  it('makeColPull should have arguments', function () {
    var css = makeColPull();
    expect(fromJS({ css: css }).hashCode()).toEqual(483314966);
  });
  it('makeColModifier push should return a css', function () {
    var css = makeColModifier('push', 3, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-696272246);
  });
  it('makeColModifier pull should return a css', function () {
    var css = makeColModifier('pull', 4, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(582715448);
  });
  it('makeColModifier offset should return a css', function () {
    var css = makeColModifier('offset', 5, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-731720480);
  });
  it('makeColModifier should have arguments', function () {
    var css = makeColModifier();
    expect(fromJS({ css: css }).hashCode()).toEqual(421143662);
  });
});