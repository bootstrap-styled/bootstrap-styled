import { fromJS } from 'immutable';

import {
  defaultProps,
  makeContainer,
  makeContainerMaxWidths,
  makeGutters,
  makeRow,
  makeColReady,
  makeCol,
  makeColOffset,
  makeColPush,
  makeColPull,
  makeColModifier,
} from '../grid';

describe('bootstrap grid mixins', () => {
  it('makeContainer should return an empty css', () => {
    const css = makeContainer(!defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('makeContainer should return a css', () => {
    const css = makeContainer(defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-438283730);
  });
  it('makeContainer should have arguments', () => {
    const css = makeContainer();
    expect(fromJS({ css }).hashCode()).toEqual(-438283730);
  });
  it('makeContainerMaxWidths should return a css', () => {
    const css = makeContainerMaxWidths(defaultProps['$enable-grid-classes'], defaultProps['$container-max-widths'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-68081336);
  });
  it('makeContainerMaxWidths should return an empty css', () => {
    const css = makeContainerMaxWidths(!defaultProps['$enable-grid-classes'], defaultProps['$container-max-widths'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('makeContainerMaxWidths should have arguments', () => {
    const css = makeContainerMaxWidths();
    expect(fromJS({ css }).hashCode()).toEqual(-68081336);
  });
  it('makeGutters should return a css', () => {
    const css = makeGutters(defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-927179453);
  });
  it('makeGutters should have arguments', () => {
    const css = makeGutters();
    expect(fromJS({ css }).hashCode()).toEqual(-927179453);
  });
  it('makeRow should return an empty css', () => {
    const css = makeRow(!defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('makeRow should return an empty css', () => {
    const css = makeRow(!defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(788434458);
  });
  it('makeRow should return a css ', () => {
    const css = makeRow(defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(311684628);
  });
  it('makeRow should have arguments', () => {
    const css = makeRow();
    expect(fromJS({ css }).hashCode()).toEqual(311684628);
  });
  it('makeColReady should return a css', () => {
    const css = makeColReady(!defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(1013690543);
  });
  it('makeColReady should have arguments', () => {
    const css = makeColReady();
    expect(fromJS({ css }).hashCode()).toEqual(-547471871);
  });
  it('makeCol should return a css', () => {
    const css = makeCol(!2, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(15593872);
  });
  it('makeCol should have arguments', () => {
    const css = makeCol();
    expect(fromJS({ css }).hashCode()).toEqual(-938181064);
  });

  it('makeColOffset should return a css', () => {
    const css = makeColOffset(3, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-711001918);
  });
  it('makeColOffset should have arguments', () => {
    const css = makeColOffset();
    expect(fromJS({ css }).hashCode()).toEqual(-709540557);
  });
  it('makeColPush should return a css', () => {
    const css = makeColPush(2, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-465879009);
  });
  it('makeColPush should have arguments', () => {
    const css = makeColPush();
    expect(fromJS({ css }).hashCode()).toEqual(750159885);
  });
  it('makeColPull should return a css', () => {
    const css = makeColPull(6, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-555876077);
  });
  it('makeColPull should have arguments', () => {
    const css = makeColPull();
    expect(fromJS({ css }).hashCode()).toEqual(483314966);
  });
  it('makeColModifier push should return a css', () => {
    const css = makeColModifier('push', 3, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-696272246);
  });
  it('makeColModifier pull should return a css', () => {
    const css = makeColModifier('pull', 4, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(582715448);
  });
  it('makeColModifier offset should return a css', () => {
    const css = makeColModifier('offset', 5, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-731720480);
  });
  it('makeColModifier should have arguments', () => {
    const css = makeColModifier();
    expect(fromJS({ css }).hashCode()).toEqual(421143662);
  });
});
