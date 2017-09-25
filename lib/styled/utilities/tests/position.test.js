'use strict';

var _immutable = require('immutable');

var _position = require('../position');

describe('bootstrap position utility', function () {
  it('getPositionUtilities should return a list of css utilities', function () {
    var css = (0, _position.getPositionUtilities)(_position.defaultProps['$zindex-fixed'], _position.defaultProps['$zindex-sticky']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-778562839);
  });
  it('getPositionUtilities should have arguments', function () {
    var css = (0, _position.getPositionUtilities)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-778562839);
  });
  it('fixedTop should return class .fixed-top', function () {
    var css = (0, _position.fixedTop)(_position.defaultProps['$zindex-fixed']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(576700824);
  });
  it('fixedTop should have arguments', function () {
    var css = (0, _position.fixedTop)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(576700824);
  });
  it('fixedBottom should return class .fixed-bottom', function () {
    var css = (0, _position.fixedBottom)(_position.defaultProps['$zindex-fixed']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(243226372);
  });
  it('fixedBottom should have arguments', function () {
    var css = (0, _position.fixedBottom)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(243226372);
  });
  it('stickTop should return class .fixed-sticky', function () {
    var css = (0, _position.stickTop)(_position.defaultProps['$zindex-sticky']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(180990810);
  });
  it('stickTop should have arguments', function () {
    var css = (0, _position.stickTop)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(180990810);
  });
});