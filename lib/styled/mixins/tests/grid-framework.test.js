'use strict';

var _immutable = require('immutable');

var _gridFramework = require('../grid-framework');

describe('bootstrap grid-framework mixins', function () {
  it('makeGridColumns should return an empty css', function () {
    var css = (0, _gridFramework.makeGridColumns)(!_gridFramework.defaultProps['$enable-grid-classes'], _gridFramework.defaultProps['$grid-columns'], _gridFramework.defaultProps['$grid-gutter-widths'], _gridFramework.defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(788434458);
  });
  it('makeGridColumns should return a css', function () {
    var css = (0, _gridFramework.makeGridColumns)(_gridFramework.defaultProps['$enable-grid-classes'], _gridFramework.defaultProps['$grid-columns'], _gridFramework.defaultProps['$grid-gutter-widths'], _gridFramework.defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(975098536);
  });
  it('makeGridColumns should have arguments', function () {
    var css = (0, _gridFramework.makeGridColumns)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(975098536);
  });
});