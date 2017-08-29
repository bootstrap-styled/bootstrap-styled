'use strict';

var _immutable = require('immutable');

var _background = require('../background');

describe('bootstrap background utility', function () {
  it('getBackgroundUtilities should return a list of css utilities', function () {
    var css = (0, _background.getBackgroundUtilities)(_background.defaultProps['$enable-hover-media-query'], _background.defaultProps['$brand-primary'], _background.defaultProps['$brand-success'], _background.defaultProps['$brand-info'], _background.defaultProps['$brand-warning'], _background.defaultProps['$brand-danger'], _background.defaultProps['$brand-inverse'], _background.defaultProps['$gray-lightest']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-497167580);
  });
  it('getBackgroundUtilities should have arguments', function () {
    var css = (0, _background.getBackgroundUtilities)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-497167580);
  });
  it('bgFaded should return a css', function () {
    var css = (0, _background.bgFaded)(_background.defaultProps['$enable-hover-media-query'], _background.defaultProps['$body-bg']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-311715304);
  });
  it('bgPrimary should return a css', function () {
    var css = (0, _background.bgPrimary)(_background.defaultProps['$enable-hover-media-query'], _background.defaultProps['$brand-primary']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-875390508);
  });
  it('bgSuccess should return a css', function () {
    var css = (0, _background.bgSuccess)(_background.defaultProps['$enable-hover-media-query'], _background.defaultProps['$brand-success']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(308475481);
  });
  it('bgInfo should return a css', function () {
    var css = (0, _background.bgInfo)(_background.defaultProps['$enable-hover-media-query'], _background.defaultProps['$brand-info']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(152873846);
  });
  it('bgWarning should return a css', function () {
    var css = (0, _background.bgWarning)(_background.defaultProps['$enable-hover-media-query'], _background.defaultProps['$brand-warning']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-978208027);
  });
  it('bgDanger should return a css', function () {
    var css = (0, _background.bgDanger)(_background.defaultProps['$enable-hover-media-query'], _background.defaultProps['$brand-danger']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-137526624);
  });
  it('bgInverse should return a css', function () {
    var css = (0, _background.bgInverse)(_background.defaultProps['$enable-hover-media-query'], _background.defaultProps['$brand-inverse']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-139130040);
  });
  it('bgFaded should have a parameter', function () {
    var css = (0, _background.bgFaded)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-311715304);
  });
  it('bgFaded should have a parameter', function () {
    var css = (0, _background.bgPrimary)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-875390508);
  });
  it('bgFaded should have a parameter', function () {
    var css = (0, _background.bgSuccess)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(308475481);
  });
  it('bgFaded should have a parameter', function () {
    var css = (0, _background.bgInfo)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(152873846);
  });
  it('bgFaded should have a parameter', function () {
    var css = (0, _background.bgWarning)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-978208027);
  });
  it('bgFaded should have a parameter', function () {
    var css = (0, _background.bgDanger)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-137526624);
  });
  it('bgFaded should have a parameter', function () {
    var css = (0, _background.bgInverse)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-139130040);
  });
});