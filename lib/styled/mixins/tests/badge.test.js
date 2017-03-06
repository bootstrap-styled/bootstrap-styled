'use strict';

var _immutable = require('immutable');

var _badge = require('../badge');

describe('bootstrap badge mixins', function () {
  it('badgeVariant should return css without hover media query ', function () {
    var css = (0, _badge.badgeVariant)(_badge.defaultProps['$enable-hover-mediaQuery'], '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(698574638);
  });
  it('badgeVariant should return css with hover media query', function () {
    var css = (0, _badge.badgeVariant)(!_badge.defaultProps['$enable-hover-mediaQuery'], '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-594436867);
  });
  it('badgeVariant should return css by default ', function () {
    var css = (0, _badge.badgeVariant)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-786615777);
  });
});