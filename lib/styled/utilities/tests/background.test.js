'use strict';

var _immutable = require('immutable');

var _background = require('../background');

describe('bootstrap background utility', function () {
  it('getBackgroundUtilities should return a list of css utilities', function () {
    var css = (0, _background.getBackgroundUtilities)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-937312715);
  });
  it('bgFaded should return a css', function () {
    var css = (0, _background.bgFaded)(_background.defaultProps['$body-bg']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(149412521);
  });
  it('bgPrimary should return a css', function () {
    var css = (0, _background.bgPrimary)(_background.defaultProps['$brand-primary']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-295025470);
  });
  it('bgSuccess should return a css', function () {
    var css = (0, _background.bgSuccess)(_background.defaultProps['$brand-success']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(543174936);
  });
  it('bgInfo should return a css', function () {
    var css = (0, _background.bgInfo)(_background.defaultProps['$brand-info']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(770988521);
  });
  it('bgWarning should return a css', function () {
    var css = (0, _background.bgWarning)(_background.defaultProps['$brand-warning']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(48917392);
  });
  it('bgDanger should return a css', function () {
    var css = (0, _background.bgDanger)(_background.defaultProps['$brand-danger']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(387368167);
  });
  it('bgInverse should return a css', function () {
    var css = (0, _background.bgInverse)(_background.defaultProps['$brand-inverse']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(671518634);
  });
});