'use strict';

var _immutable = require('immutable');

var _typography = require('../typography');

describe('bootstrap typography utility', function () {
  it('nav should return a typography utility css', function () {
    var css = (0, _typography.typography)(_typography.defaultProps['$headings-margin-bottom'], _typography.defaultProps['$headings-font-family'], _typography.defaultProps['$headings-font-weight'], _typography.defaultProps['$headings-line-height'], _typography.defaultProps['$headings-color'], _typography.defaultProps['$display1-size'], _typography.defaultProps['$display2-size'], _typography.defaultProps['$display3-size'], _typography.defaultProps['$display4-size'], _typography.defaultProps['$display1-weight'], _typography.defaultProps['$display2-weight'], _typography.defaultProps['$display3-weight'], _typography.defaultProps['$display4-weight']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-187480347);
  });
  it('nav should return a typography utility css with default', function () {
    var css = (0, _typography.typography)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-187480347);
  });
});