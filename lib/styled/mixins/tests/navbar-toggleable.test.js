'use strict';

var _immutable = require('immutable');

var _navbarToggleable = require('../navbar-toggleable');

describe('bootstrap toggleable mixins', function () {
  it('navbarToggleable should return a css without grtid-breakpoints', function () {
    var css = (0, _navbarToggleable.navbarToggleable)(!_navbarToggleable.defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(421143662);
  });
  it('navbarToggleable should return a css', function () {
    var css = (0, _navbarToggleable.navbarToggleable)(_navbarToggleable.defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-767429231);
  });
  it('navbarToggleable should have arguments', function () {
    var css = (0, _navbarToggleable.navbarToggleable)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-767429231);
  });
});