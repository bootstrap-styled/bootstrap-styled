'use strict';

var _immutable = require('immutable');

var _paginations = require('../paginations');

describe('bootstrap pagination mixins', function () {
  it('paginationSize should return a css with rounded', function () {
    var css = (0, _paginations.paginationSize)(_paginations.defaultProps['$enable-rounded'], '.75rem', '1.5rem', '1.25rem', '.25rem');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-857700927);
  });
  it('paginationSize should return a css without rounded', function () {
    var css = (0, _paginations.paginationSize)(!_paginations.defaultProps['$enable-rounded'], '.75rem', '1.5rem', '1.25rem', '.25rem');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(466039394);
  });
  it('paginationSize should have arguments', function () {
    var css = (0, _paginations.paginationSize)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(381535574);
  });
  it('paginationSizeBootstrap should return a css with rounded', function () {
    var css = (0, _paginations.paginationSizeBootstrap)(_paginations.defaultProps['$enable-rounded'], '.75rem', '1.5rem', '1.25rem', (4 / 3).toString(), '.25rem');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-857700927);
  });
  it('paginationSizeBootstrap should return a css without rounded', function () {
    var css = (0, _paginations.paginationSizeBootstrap)(!_paginations.defaultProps['$enable-rounded'], '.75rem', '1.5rem', '1.25rem', (4 / 3).toString(), '.25rem');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(466039394);
  });
  it('paginationSizeBootstrap should have arguments', function () {
    var css = (0, _paginations.paginationSizeBootstrap)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(381535574);
  });
  it('pagination should return a nav utility css', function () {
    var css = (0, _paginations.pagination)(_paginations.defaultProps['$enable-rounded'], _paginations.defaultProps['$enable-hover-media-query'], _paginations.defaultProps['$border-radius'], _paginations.defaultProps['$pagination-active-color'], _paginations.defaultProps['$pagination-active-bg'], _paginations.defaultProps['$pagination-active-border'], _paginations.defaultProps['$pagination-disabled-color'], _paginations.defaultProps['$cursor-disabled'], _paginations.defaultProps['$pagination-disabled-bg'], _paginations.defaultProps['$pagination-disabled-border'], _paginations.defaultProps['$pagination-padding-y'], _paginations.defaultProps['$pagination-padding-x'], _paginations.defaultProps['$pagination-line-height'], _paginations.defaultProps['$pagination-color'], _paginations.defaultProps['$pagination-bg'], _paginations.defaultProps['$pagination-border-width'], _paginations.defaultProps['$pagination-border-color'], _paginations.defaultProps['$pagination-hover-color'], _paginations.defaultProps['$pagination-hover-bg'], _paginations.defaultProps['$pagination-hover-border'], _paginations.defaultProps['$pagination-padding-y-lg'], _paginations.defaultProps['$pagination-padding-x-lg'], _paginations.defaultProps['$font-size-lg'], _paginations.defaultProps['$line-height-lg'], _paginations.defaultProps['$border-radius-lg'], _paginations.defaultProps['$pagination-padding-y-sm'], _paginations.defaultProps['$pagination-padding-x-sm'], _paginations.defaultProps['$font-size-sm'], _paginations.defaultProps['$line-height-sm'], _paginations.defaultProps['$border-radius-sm']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(61318776);
  });
  it('pagination should parameters', function () {
    var css = (0, _paginations.pagination)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-1033428849);
  });
});