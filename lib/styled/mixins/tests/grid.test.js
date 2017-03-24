'use strict';

var _immutable = require('immutable');

var _grid = require('../grid');

describe('bootstrap grid mixins', function () {
  it('makeContainer should return an empty css', function () {
    var css = (0, _grid.makeContainer)(!_grid.defaultProps['$enable-grid-classes'], _grid.defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('makeContainer should return a css', function () {
    var css = (0, _grid.makeContainer)(_grid.defaultProps['$enable-grid-classes'], _grid.defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-438283730);
  });
  it('makeContainer should have arguments', function () {
    var css = (0, _grid.makeContainer)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-438283730);
  });
  it('makeContainerMaxWidths should return a css', function () {
    var css = (0, _grid.makeContainerMaxWidths)(_grid.defaultProps['$enable-grid-classes'], _grid.defaultProps['$container-max-widths'], _grid.defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-68081336);
  });
  it('makeContainerMaxWidths should return an empty css', function () {
    var css = (0, _grid.makeContainerMaxWidths)(!_grid.defaultProps['$enable-grid-classes'], _grid.defaultProps['$container-max-widths'], _grid.defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('makeContainerMaxWidths should have arguments', function () {
    var css = (0, _grid.makeContainerMaxWidths)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-68081336);
  });
  it('makeGutters should return a css', function () {
    var css = (0, _grid.makeGutters)(_grid.defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-927179453);
  });
  it('makeGutters should have arguments', function () {
    var css = (0, _grid.makeGutters)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-927179453);
  });
  it('makeRow should return an empty css', function () {
    var css = (0, _grid.makeRow)(!_grid.defaultProps['$enable-grid-classes'], _grid.defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('makeRow should return an empty css', function () {
    var css = (0, _grid.makeRow)(!_grid.defaultProps['$enable-grid-classes'], _grid.defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(788434458);
  });
  it('makeRow should return a css ', function () {
    var css = (0, _grid.makeRow)(_grid.defaultProps['$enable-grid-classes'], _grid.defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(311684628);
  });
  it('makeRow should have arguments', function () {
    var css = (0, _grid.makeRow)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(311684628);
  });
  it('makeColReady should return a css', function () {
    var css = (0, _grid.makeColReady)(!_grid.defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1013690543);
  });
  it('makeColReady should have arguments', function () {
    var css = (0, _grid.makeColReady)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-547471871);
  });
  it('makeCol should return a css', function () {
    var css = (0, _grid.makeCol)(!2, _grid.defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(15593872);
  });
  it('makeCol should have arguments', function () {
    var css = (0, _grid.makeCol)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-938181064);
  });

  it('makeColOffset should return a css', function () {
    var css = (0, _grid.makeColOffset)(3, _grid.defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-711001918);
  });
  it('makeColOffset should have arguments', function () {
    var css = (0, _grid.makeColOffset)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-709540557);
  });
  it('makeColPush should return a css', function () {
    var css = (0, _grid.makeColPush)(2, _grid.defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-465879009);
  });
  it('makeColPush should have arguments', function () {
    var css = (0, _grid.makeColPush)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(750159885);
  });
  it('makeColPull should return a css', function () {
    var css = (0, _grid.makeColPull)(6, _grid.defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-555876077);
  });
  it('makeColPull should have arguments', function () {
    var css = (0, _grid.makeColPull)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(483314966);
  });
  it('makeColModifier push should return a css', function () {
    var css = (0, _grid.makeColModifier)('push', 3, _grid.defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-696272246);
  });
  it('makeColModifier pull should return a css', function () {
    var css = (0, _grid.makeColModifier)('pull', 4, _grid.defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(582715448);
  });
  it('makeColModifier offset should return a css', function () {
    var css = (0, _grid.makeColModifier)('offset', 5, _grid.defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-731720480);
  });
  it('makeColModifier should have arguments', function () {
    var css = (0, _grid.makeColModifier)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(421143662);
  });
});