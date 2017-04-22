'use strict';

var _immutable = require('immutable');

var _a = require('../a');

describe('bootstrap a mixin', function () {
  it('should return a a mixin css', function () {
    var css = (0, _a.a)(_a.defaultProps['$link-color'], _a.defaultProps['$link-decoration'], _a.defaultProps['$link-hover-color'], _a.defaultProps['$link-hover-decoration'], _a.defaultProps['$enable-hover-media-query']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-561002076);
  });
  it('should return a a utility css by default', function () {
    var css = (0, _a.a)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-561002076);
  });
});