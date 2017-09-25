'use strict';

var _immutable = require('immutable');

var _text = require('../text');

describe('bootstrap text utility', function () {
  it('getTextUtilities should return a list of css utilities', function () {
    var css = (0, _text.getTextUtilities)(_text.defaultProps['$enable-hover-media-query'], _text.defaultProps['$grid-breakpoints'], _text.defaultProps['$font-weight-normal'], _text.defaultProps['$font-weight-bold'], _text.defaultProps['$text-muted'], _text.defaultProps['$brand-primary'], _text.defaultProps['$brand-success'], _text.defaultProps['$brand-info'], _text.defaultProps['$brand-warning'], _text.defaultProps['$brand-danger'], _text.defaultProps['$gray-dark']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-500964232);
  });
  it('getTextUtilities should have arguments', function () {
    var css = (0, _text.getTextUtilities)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-500964232);
  });
});