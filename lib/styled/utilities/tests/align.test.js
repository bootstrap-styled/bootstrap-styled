'use strict';

var _immutable = require('immutable');

var _align = require('../align');

describe('bootstrap align utility', function () {
  it('getAlignUtilities should return a list of css utilities', function () {
    var css = (0, _align.getAlignUtilities)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-994697783);
  });
  it('alignBaseline should return a css', function () {
    var css = (0, _align.alignBaseline)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(746143447);
  });
  it('alignTop should return a css', function () {
    var css = (0, _align.alignTop)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1025169343);
  });
  it('alignMiddle should return a css', function () {
    var css = (0, _align.alignMiddle)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(355583440);
  });
  it('alignBottom should return a css', function () {
    var css = (0, _align.alignBottom)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-33018022);
  });
  it('alignTextBottom should return a css', function () {
    var css = (0, _align.alignTextBottom)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(426607220);
  });
  it('alignTextTop should return a css', function () {
    var css = (0, _align.alignTextTop)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(192526144);
  });
});