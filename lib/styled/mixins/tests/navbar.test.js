'use strict';

var _immutable = require('immutable');

var _navbar = require('../navbar');

describe('bootstrap navbar mixins', function () {
  it('navbar should return a css for navbar', function () {
    var css = (0, _navbar.navbar)(_navbar.defaultProps['$grid-breakpoints'], _navbar.defaultProps['$enable-rounded'], _navbar.defaultProps['$enable-hover-media-query'], _navbar.defaultProps['$navbar-padding-y'], _navbar.defaultProps['$navbar-padding-x'], _navbar.defaultProps['$zindex-navbar'], _navbar.defaultProps['$zindex-navbar-fixed'], _navbar.defaultProps['$zindex-navbar-sticky'], _navbar.defaultProps['$navbar-brand-padding-y'], _navbar.defaultProps['$font-size-lg'], _navbar.defaultProps['$navbar-divider-padding-y'], _navbar.defaultProps['$navbar-toggler-padding-y'], _navbar.defaultProps['$navbar-toggler-padding-x'], _navbar.defaultProps['$navbar-toggler-font-size'], _navbar.defaultProps['$border-width'], _navbar.defaultProps['$navbar-toggler-border-radius'], _navbar.defaultProps['$navbar-light-active-color'], _navbar.defaultProps['$navbar-light-color'], _navbar.defaultProps['$navbar-light-hover-color'], _navbar.defaultProps['$navbar-light-toggler-bg'], _navbar.defaultProps['$navbar-light-toggler-border'], _navbar.defaultProps['$navbar-dark-active-color'], _navbar.defaultProps['$navbar-dark-color'], _navbar.defaultProps['$navbar-dark-hover-color'], _navbar.defaultProps['$navbar-dark-toggler-bg'], _navbar.defaultProps['$navbar-dark-toggler-border']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-987119289);
  });
  it('navbar should have arguments', function () {
    var css = (0, _navbar.navbar)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(486819200);
  });
});