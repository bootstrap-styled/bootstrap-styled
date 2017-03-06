'use strict';

var _immutable = require('immutable');

var _nav = require('../nav');

describe('bootstrap nav utility', function () {
  it('nav should return a nav utility css', function () {
    var css = (0, _nav.nav)(_nav.defaultProps['$enable-rounded'], _nav.defaultProps['$enable-hover-media-query'], _nav.defaultProps['$nav-link-padding'], _nav.defaultProps['$nav-disabled-link-color'], _nav.defaultProps['$cursor-disabled'], _nav.defaultProps['$nav-tabs-border-width'], _nav.defaultProps['$nav-tabs-border-color'], _nav.defaultProps['$nav-tabs-border-radius'], _nav.defaultProps['$nav-tabs-link-hover-border-color'], _nav.defaultProps['$nav-tabs-active-link-hover-color'], _nav.defaultProps['$nav-tabs-active-link-hover-bg'], _nav.defaultProps['$nav-tabs-active-link-hover-border-color'], _nav.defaultProps['$nav-pills-border-radius'], _nav.defaultProps['$nav-pills-active-link-color'], _nav.defaultProps['$nav-pills-active-link-bg']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-84433898);
  });
  it('nav should return a a css by default', function () {
    var css = (0, _nav.nav)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-84433898);
  });
});